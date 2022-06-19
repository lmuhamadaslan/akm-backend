// import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return res.status(401).send("Access denied. No token provided.");
//   }
//   jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//     if (err) return res.status(403).send("Access denied. Invalid token.");
//     req.user = user;
//     next();
//   });
// };

// module.exports = function (req, res, next) {
//   const token = req.headers["auth-token"];

//   if (!token) return res.status(401).send("Access Denied");

//   try {
//     const verified = jwt.verify(token, process.env.SECRET_KEY);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send("Invalid Token");
//   }
// };
