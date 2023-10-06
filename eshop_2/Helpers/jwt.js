const { expressjwt: jwt } = require("express-jwt");
function express_jwt() {
  const secret = process.env.SECRET;
  return jwt({
    secret: secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // { url: "/categories", methods: ["GET", "OPTIONS"] },
      `/user/login`
    ],
  });
}

module.exports = express_jwt;