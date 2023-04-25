import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Invalid Token - Access Denied!");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedToken;

    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const isAdmin = (req, res, next) => {
  const admin = req.user.admin;

  if (admin) {
    next();
  } else {
    res.status(403).send("Admin Only - Access Denied!");
  }
};
