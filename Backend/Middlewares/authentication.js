import jwt from "jsonwebtoken";

export const authentication = async (req, res, next) => {
  const user = req.cookies.token;
  console.log(user);
};
