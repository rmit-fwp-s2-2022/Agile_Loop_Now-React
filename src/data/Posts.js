const POST_KEY = "post";

function getPosts() {
  const data = localStorage.getItem(POST_KEY);
  return JSON.parse(data);
}

//Creates a new array if there isn't any post in localstorage
function createPost(post) {
  if (getPosts() !== null) {
    let data = getPosts();
    data.push(post);
    localStorage.setItem(POST_KEY, JSON.stringify(data));
  } else {
    const data = [post];
    localStorage.setItem(POST_KEY, JSON.stringify(data));
  }
}

export { getPosts, createPost };