import { type RequestHandler } from "express";
import axios from "axios";
import qs from "qs";

let access_token = "";
let refresh_token = "";
const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = "https://spotifyclonebackend-3uiw.onrender.com/api/auth/callback"

const generateRandomString = (length: number) => {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const login: RequestHandler = (req, res) => {
  // user-read-playback-position \
  const scope = "streaming \
                 user-read-email \
                 user-read-private \
                 user-read-playback-state \
                 user-read-playback-position \
                 user-modify-playback-state \
                 user-library-read \
                 user-library-modify \
                 user-top-read \
                 playlist-read-private \
                 playlist-modify-public \
                 playlist-modify-private"
  const state = generateRandomString(16);
  const spotifyClientId = process.env.SPOTIFY_CLIENT_ID as string;

  const auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotifyClientId,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state,
  })

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
}

const callback: RequestHandler = async (req, res) => {
  const code = req.query.code;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      "Authorization": "Basic " + (Buffer.from(spotifyClientId + ":" + spotifyClientSecret).toString("base64")),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  };

  const response = await axios.post(authOptions.url, qs.stringify(authOptions.form), {
    headers: {
      "Authorization": "Basic " + (Buffer.from(spotifyClientId + ":" + spotifyClientSecret).toString("base64")),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (response.status === 200) {
    console.log("Response status 200", response.data);
    access_token = response.data.access_token;
    refresh_token = response.data.refresh_token;
    res.redirect("http://localhost:5173/");
  }

}

const getToken: RequestHandler = async (_req, res) => {
  res.json({
    access_token: access_token,
    refresh_token: refresh_token,
  });
}

const getRefreshToken: RequestHandler = async (req, res) => {
  refresh_token = req.query.refreshToken as string;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      "Authorization": "Basic " + (Buffer.from(spotifyClientId + ":" + spotifyClientSecret).toString("base64")),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  }

  const response = await axios.post(authOptions.url, qs.stringify(authOptions.form), { headers: authOptions.headers });

  if (response.status === 200) {
    access_token = response.data.access_token;
    refresh_token = response.data.refresh_token || refresh_token;
    res.send({
      "access_token": access_token,
      "refresh_token": refresh_token,
    })
  }
}

export default { login, callback, getToken, getRefreshToken }