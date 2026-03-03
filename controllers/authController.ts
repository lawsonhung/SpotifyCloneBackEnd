import { type RequestHandler } from "express";
import axios from "axios";
import qs from "qs";

const generateRandomString = (length: number) => {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const login: RequestHandler = (req, res) => {
  const scope = "streaming \
                 user-read-email \
                 user-read-private"
  const state = generateRandomString(16);
  const spotifyClientId = process.env.SPOTIFY_CLIENT_ID as string;

  const auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotifyClientId,
    scope: scope,
    redirect_uri: "http://127.0.0.1:3000/api/auth/callback",
    state: state,
  })

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
}

let access_token = "";

const callback: RequestHandler = async (req, res) => {
  const code = req.query.code;
  const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
  const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: "http://127.0.0.1:3000/api/auth/callback",
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
    res.redirect("http://localhost:5173/");
  }

}

const getToken: RequestHandler = async (_req, res) => {
  res.json({ access_token: access_token });
}

export default { login, callback, getToken }