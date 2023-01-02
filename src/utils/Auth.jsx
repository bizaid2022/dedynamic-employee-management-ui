import CryptoJS from "crypto-js";
import { TOKEN_LABEL, TOKEN_SECRET_KEY } from "../variables/constants";

export function encrypt(data, secret) {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secret);
  return ciphertext.toString();
}

export function decrypt(data, secret) {
  const bytes = CryptoJS.AES.decrypt(data, secret);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

export function getToken() {
  try {
    const store = localStorage.getItem(TOKEN_LABEL);
    if (!store) return null;
    const state = decrypt(store, TOKEN_SECRET_KEY);
    return JSON.parse(state);
  } catch (error) {
    localStorage.removeItem(TOKEN_LABEL);
    return null;
  }
}

export function setToken(token) {
  try {
    const serializedState = encrypt(JSON.stringify(token), TOKEN_SECRET_KEY);
    localStorage.setItem(TOKEN_LABEL, serializedState);
  } catch (error) {
    localStorage.removeItem(TOKEN_LABEL);
  }
}

export function delToken() {
  localStorage.removeItem(TOKEN_LABEL);
}

export function getBearerHeader() {
  const token = getToken();
  return {
    Authorization: `Bearer ${token}`,
  };
}
