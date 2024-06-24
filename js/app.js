const getPosts = () => {
  const posts = localStorage.getItem("posts");
  return JSON.parse(posts);
};

const setPost = (title, tags, content) => {
  const posts = getPosts();
  const id = posts.length ? posts.at(-1).id + 1 : 0;
  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0",
  )}-${now.getDate()}`;
  localStorage.setItem(
    "posts",
    JSON.stringify([...posts, { id, title, content, tags, date }]),
  );
};
