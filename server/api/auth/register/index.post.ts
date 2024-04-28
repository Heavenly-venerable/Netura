import { User } from "../../../model";
import bcrypt from "bcryptjs";

interface IRequestBody {
  username: string;
  password: string;
  email: string;
  role: string;
}

export default defineEventHandler(async (event) => {
  try {
    const { username, password, email, role } =
      await readBody<IRequestBody>(event);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ username, password: hashedPassword, email, role });
    await user.save()
    return {
      status: "success",
      message: "User registeres successfully",
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
