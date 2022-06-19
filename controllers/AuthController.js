// // import UserModel from "../models/UserModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import AkmUserModel from "../models/AkmUserModel.js";

// export const register = async (req, res, next) => {
//   try {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const newUser = new UserModel({
//       username: req.body.username,
//       password: hash,
//       nama: req.body.nama,
//       role: req.body.role,
//     });
//     await newUser.save();
//     res.status(201).send("User has been created");
//   } catch (error) {
//     next(error);
//   }
// };

// export const login = async (req, res, next) => {
//   try {
//     const user = await AkmUserModel.findOne({ username: req.body.username });
//     if (!user) return res.status(404).send("User not found");

//     const isMatch = await bcrypt.compare(req.body.password, user.password);
//     if (!isMatch) return res.status(401).send("Wrong password");

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.SECRET_KEY
//     );

//     const { password, role, ...userData } = user._doc;
//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json({ ...userData });

//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };
