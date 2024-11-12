export const trending = (req, res) => res.send("Main page");

export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const see = (req, res) => {
  return res.send(`watch video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("edit");
};
export const deleteVid = (req, res) => {
  return res.send("deleteVid");
};
