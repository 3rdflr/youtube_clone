export const trending = (req, res) => res.render("home");

export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const see = (req, res) => res.render("watch");

export const edit = (req, res) => res.render("Edit");
export const deleteVid = (req, res) => {
  return res.send("deleteVid");
};
