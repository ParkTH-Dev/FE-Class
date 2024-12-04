import User from "../models/user";
import bcrypt from "bcrypt";
import { session } from "express-session";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { email, username, password, password1, name, location } = req.body;
  const pageTitle = "Join";
  if (password !== password1) {
    return res.render("join", {
      pageTitle,
      errorMessage: "Password confirmation dose not match",
    });
  }

  const exsits = await User.exists({ $or: [{ username }, { email }] });
  if (exsits) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username/email is already Taken",
    });
  }

  try {
    await User.create({
      email,
      username,
      password,
      name,
      location,
    });
    return res.redirect("/login");
  } catch (e) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: e._message,
    });
  }
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const pageTitle = "Login";
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this email does not exits",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong Password",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  // req.session.user = user;
  return res.redirect("/");
};

export const logout = (req, res) => res.send("logout");
export const edit = (req, res) => res.send("edit");
export const remove = (req, res) => res.send("remove");
export const see = (req, res) => res.send("see");
