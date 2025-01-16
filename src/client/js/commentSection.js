const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

let deleteComments = document.querySelectorAll("#delete__comment");

const addComment = (text, id, comment) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";

  const owenrAvatar = document.createElement("img");
  owenrAvatar.setAttribute("src", comment.avatarUrl);
  owenrAvatar.className = "comments__avatar";

  const ownerNameSpan = document.createElement("span");
  ownerNameSpan.className = "comment__owner";
  ownerNameSpan.innerText = comment.ownername;

  const commnetCreate = document.createElement("span");
  commnetCreate.innerText = new Date(comment.createdAt).toLocaleDateString(
    "ko-kr",
    { year: "numeric", month: "numeric", day: "numeric" }
  );
  commnetCreate.className = "comment__createdAt";

  const span = document.createElement("span");
  span.className = "comment__text";
  span.innerText = ` ${text}`;
  span.dataset.id = id;

  const span2 = document.createElement("span");
  span2.dataset.id = id;
  span2.innerText = "❌";
  span2.id = "delete__comment";
  deleteComments.addEventListener("click", handleDelete);

  newComment.appendChild(owenrAvatar);
  newComment.appendChild(ownerNameSpan);
  newComment.appendChild(commnetCreate);
  newComment.appendChild(span);
  newComment.appendChild(span2);

  videoComments.prepend(newComment);
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
  if (status === 201) {
    textarea.value = "";
    //    const { newCommentId } = await response.json();
    //    addComment(text, newCommentId);
    window.location.reload();
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

const handleDelete = async (event) => {
  const deleteComment = document.querySelector("ul");

  const {
    dataset: { id },
  } = event.target.parentElement;

  const videoId = videoContainer.dataset.id;

  const response = await fetch(`/api/videos/${videoId}/comment/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ commentId: id }),
  });
  if (response.status === 200) {
    deleteComment.remove();
    window.location.reload();
  }
};

if (deleteComments) {
  deleteComments.forEach((icon) =>
    icon.addEventListener("click", handleDelete)
  );
}
