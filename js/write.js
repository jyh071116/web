const title = document.querySelector(".title");
const tagbox = document.querySelector(".tagbox");

const addTitle = (e) => {
  title.innerText = e.target.value;
};

const addTag = (e) => {
  tagbox.innerHTML += `<div class="tag">${e.target.value}</div>`;
  e.target.value = "";
  giveGap();
};

const removeTag = (e) => {
  if (e.key === "Backspace" && !e.target.value) {
    const tags = Array.from(document.getElementsByClassName("tag"));
    if (tags.length > 0) tags.pop();
    tagbox.innerHTML = "";
    tags.forEach((tag) => {
      tagbox.appendChild(tag);
    });
    giveGap();
  }
};

const giveGap = () => {
  const tagcontainer = document.querySelector(".tagcontainer");
  const tags = Array.from(document.getElementsByClassName("tag"));
  if (tags.length === 0) {
    tagcontainer.style.gap = "0px";
  } else {
    tagcontainer.style.gap = "15px";
  }
}

const handleTextareaHeight = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = `${e.target.scrollHeight}px`;
}

const writePost = () => {
  const title = document.querySelector(".input-title");
  const content = document.querySelector("#markdown-input");
  const tags = Array.from(document.getElementsByClassName("tag")).map(
    (tag) => tag.textContent,
  );
  if (!title.value) {
    alert("제목을 입력해주세요!");
    return title.focus();
  }
  if (!content.value) {
    alert("내용을 입력해주세요!");
    return content.focus();
  }
  setPost(title.value, tags, content.value);
  location.href = "index.html";
};