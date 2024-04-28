import { User } from "../../model";
import { getCookie } from "h3";

// Endpoint untuk mengambil informasi pengguna
export default defineEventHandler(async (event) => {
  try {
    // Verifikasi cookie 'auth'
    const authCookie = getCookie(event, "auth");
    if (!authCookie) {
      // Jika tidak ada cookie 'auth', kembalikan error
      event.res.statusCode = 401;
      return { status: "error", message: "Unauthorized" };
    }

    // Ambil email pengguna dari cookie atau session
    const userEmail = getCookie(event, "userEmail");

    // Temukan pengguna berdasarkan email
    const user = await User.findOne({ email: userEmail }).exec();
    if (!user) {
      // Jika pengguna tidak ditemukan, kembalikan error
      event.res.statusCode = 404;
      return { status: "error", message: "User not found" };
    }

    // Kembalikan informasi pengguna
    return {
      status: "success",
      user
    };
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return { status: "error", message: "Something went wrong" };
  }
});
