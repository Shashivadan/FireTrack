import zod, { z } from "zod";
import jwt from "jsonwebtoken";
import { Users } from "../../models/users.js";

const signUpValudation = zod.object({
  username: zod.string().min(4),
  email: zod.string().email(),
  password: zod.string(),
});

async function signUp(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(403).json({
      massege: " body is received or one of the element is missing",
    });
  }

  const { success } = signUpValudation.safeParse({
    username,
    email,
    password,
  });

  if (!success) {
    return res.status(403).json({
      massege: "give data has invalid values",
    });
  }

  try {
    const exitingUser = await Users.findOne({
      $or: [{ username }, { email }],
    });

    if (exitingUser) {
      return res.status(200).json({
        massege: "user already exists",
        exitingUser,
      });
    }

    const newUser = await Users.create({
      username,
      email,
      password,
    });

    const userId = newUser._id;

    const token = jwt.sign({ userId }, process.env.SECRET_KEY);

    return res.status(200).json({
      massege: "user sussesfully created",
      token,
      user: { username: newUser.username, email: newUser.email },
    });
  } catch (error) {
    return res.status(400).json({
      massege: "some thing want wrong",
      error,
    });
  }
}

export { signUp };
