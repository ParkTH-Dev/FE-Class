import User from "../models/user";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { email, username, password, name, location } = req.body;
  // const userNameExists = await User.exists({ username });
  // const emailNameExists = await User.exists({ email });
  const pageTitle = "Join";
  const exsits = await User.exists({ $or: [{ username }, { email }] });
  if (exsits) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This username/email is already TrackEvent",
    });
  }

  await User.create({
    email,
    username,
    password,
    name,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("edit");
export const remove = (req, res) => res.send("remove");
export const login = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
