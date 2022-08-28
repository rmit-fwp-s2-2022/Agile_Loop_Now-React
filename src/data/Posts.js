import axios from "axios";
const POST_KEY = "post";

function getPosts() {
  const data = localStorage.getItem(POST_KEY);
  return JSON.parse(data);
}

function deletePost(timeStamp) {
  const data = getPosts();
  let updatedData = [];

  for (const post of data) {
    if (post.time !== timeStamp) {
      updatedData.push(post);
    }
  }

  localStorage.setItem(POST_KEY, JSON.stringify(updatedData));
}

function editPost(timeStamp, editedContent) {
  let data = getPosts();

  for (const post of data) {
    if (post.time === timeStamp) {
      post.content = editedContent;
      break;
    }
  }
  localStorage.setItem(POST_KEY, JSON.stringify(data));
}

async function editImage(image, timeStamp) {
  const formData = new FormData();
  console.log(image);
  formData.append("file", image);
  formData.append("upload_preset", "my-uploads");
  let data = getPosts();
  const link = await axios.post(
    "https://api.cloudinary.com/v1_1/aglie-loop/image/upload",
    formData
  );

  console.log(link);
  console.log(timeStamp);
  for (const post of data) {
    if (post.time === timeStamp) {
      console.log("here");
      post.link = link.data.secure_url;
      break;
    }
  }
  localStorage.setItem(POST_KEY, JSON.stringify(data));
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

function deleteAllUserPost(email) {
  const data = getPosts();
  let updated = [];

  for (const post of data) {
    if (post.email !== email) {
      updated.push(post);
    }
  }

  localStorage.setItem(POST_KEY, JSON.stringify(updated));
}

export {
  getPosts,
  createPost,
  deletePost,
  editPost,
  editImage,
  deleteAllUserPost,
};
