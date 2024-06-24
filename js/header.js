const handleSearch = (e) => {
  const gridbox = document.querySelector(".gridbox");
  const val = e.target.value;
  const posts = getPosts().filter(
    (post) =>
      post.title.includes(val) ||
      post.content.includes(val) ||
      post.tags.includes(val),
  );

  gridbox.innerHTML = "";
  posts.forEach((post) => {
    gridbox.innerHTML += `<div class="postbox" onclick="location.href = 'detail.html?id=${
      post.id
    }'">
  <h3>${post.title}</h3>
  <p class="date">${post.date}</p>
  <p class="content">${post.content.replace("#", "")}</p>
  <div class="tagbox">
    ${post.tags.map((tag) => `<div class="tag">${tag}</div>`).join("")}
  </div>
</div>`;
  });
};

const handleSearchBar = (e) => {
  const searchbox = document.querySelector(".searchbox");
  const logo = document.querySelector(".logo");
  const write = document.querySelector(".write");
  if (searchbox.style.display == "none") {
    e.target.src = "images/X.svg";
    searchbox.style.display = "flex";
    logo.style.display = "none";
    write.style.display = "none";
  } else {
    e.target.src = "images/searchicon.svg";
    searchbox.style.display = "none";
    logo.style.display = "block";
    write.style.display = "block";
  }
};