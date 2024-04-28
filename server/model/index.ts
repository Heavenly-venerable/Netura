import mongoose from "mongoose";
import userSchema from "./user.model";
import agendaSchema from "./agenda.model";

export const User = mongoose.model("User", userSchema);
export const Agenda = mongoose.model("Agenda", agendaSchema);
