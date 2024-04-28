import mongoose from "mongoose";

const agendaSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  tag: {
    type: String,
  },
  waktu: {
    type: String,
  },
  lokasi: {
    type: String,
  },
  tanggal: { type: Date },
});

export default agendaSchema;
