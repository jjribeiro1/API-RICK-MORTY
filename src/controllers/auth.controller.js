const authService = require("../services/auth.service");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required" });
    }
    const user = await authService.findUserByEmail(email);

    if (!user) {
      return res
        .status(400)
        .send({ message: "Email or password is incorrect" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res
        .status(400)
        .send({ message: " Email or password is incorrect" });
    }

    const token = await authService.generateToken(user._id);

    return res.status(200).send({ token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  loginController,
};
