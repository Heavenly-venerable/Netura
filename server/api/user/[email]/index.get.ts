import { User } from "~/server/model";

export default defineEventHandler(async (event) => {
  try {
    const email = getRouterParam(event, "email");
    const users = await User.findOne({ email: email });
    return users;
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
