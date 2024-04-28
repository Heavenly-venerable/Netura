import { Agenda } from "../../model";

export default defineEventHandler(async (event) => {
  try {
    const agenda = await Agenda.find();
    return agenda;
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
