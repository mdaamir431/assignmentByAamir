//  Require Method 1
// 
// import jwt from 'jsonwebtoken'

// const verifyJWT =(req, res, next) =>  {
//    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
//    if (!token) {
//       return res.status(401).send({status:401,success:false, message: 'You should provide token!' });
//    } else {
//       const bearerToken = token.split(' ')[1];
//       jwt.verify(bearerToken, process.env.JWT_SECRET, (err, decoded) => {
//          if (err) {
//             res.status(403).send({status:403,success:false,  message: 'Invalid Token!' });
//          }
//          req.userId = decoded.id;
//          next();
//       });
//    }
// }

// export {  
//    verifyJWT,
// }


// Import method 2
import jwt from "jsonwebtoken";
export default function verifyJWT(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];
  if (!token) {
    return res.status(401).send({ message: "You should provide token!" });
  } else {
    const bearerToken = token.split(" ")[1];
    jwt.verify(bearerToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(403).send({ message: "Invalid Token!" });
      }
      req.userID = decoded.id;
      next();
    });
  }
}
