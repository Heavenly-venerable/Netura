import { User } from "../../../model";
import bcrypt from "bcryptjs";

interface IRequestBody {
  password: string;
  email: string;
}

export default defineEventHandler(async (event) => {
  try {
    const { password, email } = await readBody<IRequestBody>(event);
    const user = await User.findOne({ email }).exec();
    const isValidPassword =
      user && typeof user.password === "string"
        ? await bcrypt.compare(password, user.password)
        : false;
    if (!isValidPassword) {
      return { status: "error", message: "Invalid credentials" };
    }
    setCookie(event, "userEmail", email, { maxAge: 60 * 60 * 24 * 7 });
    setCookie(event, "auth", "true", { maxAge: 60 * 60 * 24 * 7 });
    return {
      status: "success",
      message: "User login successfully",
    };
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
