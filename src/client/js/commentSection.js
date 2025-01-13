const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const addComment = (text) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newCommnets = document.createElement("li");
  const span = document.createElement("span");
  newCommnets.className = "video__comments";
  span.innerText = ` ${text}`;
  newCommnets.appendChild(span);
  videoComments.prepend(newCommnets);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");

  const text = textarea.value;
  const videoId = videoContainer.dataset.id;

  if (text === "") {
    return;
  }
  const { status } = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  textarea.value = "";
  if (status === 201) {
    addComment(text);
  }
};
if (form) {
  form.addEventListener("submit", handleSubmit);
}
