import mongoose, { Schema, model } from "mongoose";

export interface IUser {
  id: string;
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    default: "",
    required: true,
    maxLength: 20,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

const User = model<IUser>("User", userSchema);

export default User;
