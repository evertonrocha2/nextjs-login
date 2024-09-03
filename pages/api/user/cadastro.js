import { cadastro } from "../../../services/user";

export default function handler(req, res) {
  try {
    const newUser = cadastro(req.body);
    res.status(201).json(newUser);
  } catch {
    res.status(400).json(err.message);
  }
}
