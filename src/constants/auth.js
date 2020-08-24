// API URL
export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'd4158946c35e4d20eb7e7f2f5dc146bb';

// API End Points
export const GET_REQUEST_TOKEN = `${API_URL}/authentication/token/new?api_key=${API_KEY}`;
export const VALIDATE_REQUEST_TOKEN = `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY}`;
export const CREATE_SESSION_ID = `${API_URL}/authentication/session/new?api_key=${API_KEY}`;
export const DELETE_SESSION_ID = `${API_URL}/authentication/session?api_key=${API_KEY}`;
export const GET_INFO = `${API_URL}/account?api_key=${API_KEY}`;
