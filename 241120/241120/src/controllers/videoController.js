const videos = [
  {
    id: 1,
    title: "first video",
    createdAt: "2 minutes age",
    views: 1,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Video #2",
    createdAt: "6 minutes age",
    views: 200,
    comment: 12,
    rating: 5,
  },
  {
    id: 3,
    title: "3 WhatUp",
    createdAt: "11 minutes age",
    views: 300,
    comment: 22,
    rating: 5,
  },
];
export const trending = (req, res) => {
  res.render("home", { pageTitle: "홈", videos });
};
export const search = (req, res) => res.send("Search Video");

export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watch ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "UploadVideo" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    id: videos.length + 1,
    title,
    createdAt: "just now",
    views: 0,
    comment: 0,
    rating: 0,
  };
  videos.push(newVideo);
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
