import zod, { z } from "zod";
import jwt from "jsonwebtoken";
import { Users } from "../../models/users.js";

const inputValidation = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

async function signIn(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(405).json({
      massege: "input body data is empty",
    });
  }

  const { success } = inputValidation.safeParse({
    email,
    password,
  });

  if (!success) {
    return res.status(403).json({
      massege: "input is invalid",
    });
  }

  try {
    const user = await Users.findOne({ email, password });

    if (!user) {
      return res.status(403).json({
        massege: "no user as been found or your password is wrong",
      });
    }

    const userId = user._id;

    const token = jwt.sign({ userId }, process.env.SECRET_KEY);

    res.status(400).json({
      token,
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
}

export { signIn };
