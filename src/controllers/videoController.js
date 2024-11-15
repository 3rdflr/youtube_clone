export const trending = (req, res) => {
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const see = (req, res) => res.render("watch");

export const edit = (req, res) => res.render("edit");
export const deleteVid = (req, res) => {
  return res.send("deleteVid");
};
