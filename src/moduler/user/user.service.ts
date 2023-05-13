import User, { IUser } from "./user.model";

export const insertUserService = async (data: IUser): Promise<IUser> => {
  const result = new User(data);
  await result.save();
  return result;
};

export const findSingleUserService = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

export const findAllUserService = async () => {
  const result = await User.find({});
  return result;
};
