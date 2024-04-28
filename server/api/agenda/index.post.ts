import { Agenda } from "../../model";

interface IRequestBody {
  title: string;
  tag: string;
  waktu: string;
  lokasi: string;
  tanggal: Date;
}
export default defineEventHandler(async (event) => {
  try {
    const { title, tag, waktu, lokasi, tanggal } =
      await readBody<IRequestBody>(event);
    const agenda = new Agenda({ title, tag, waktu, lokasi, tanggal });
    await agenda.save();
    return {
      status: "success",
      message: "Agenda added successfully",
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
