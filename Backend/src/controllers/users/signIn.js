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
    return res.status(401).json({
      massege: "input body data is empty",
    });
  }

  const { success } = inputValidation.safeParse({
    email,
    password,
  });

  if (!success) {
    return res.status(406).json({
      massege: "input is invalid",
    });
  }

  try {
    const user = await Users.findOne({ email, password });

    if (!user) {
      return res.status(401).json({
        massege:
          " There was a problem logging in. Check your email and password or create an account. ",
      });
    }

    const userId = user._id;

    const token = jwt.sign({ userId }, process.env.SECRET_KEY);

    res.status(201).json({
      token,
      user: { username: user.username },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
    });
  }
}

export { signIn };
