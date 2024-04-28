// server/api/logout.js

import { deleteCookie } from "h3";

export default defineEventHandler((event) => {
  // Menghapus cookie 'auth'
  deleteCookie(event, "auth");
  deleteCookie(event, "userEmail");

  // Mengirim respons bahwa user telah berhasil logout
  return { message: "Logout successful" };
});
