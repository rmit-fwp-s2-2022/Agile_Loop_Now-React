const USERS_KEY = "users";
const CURRENT_KEY = "currentUser";
const AUTH_KEY = "authuser";

//Get every registered user from localStorage (Referenced from Week 3 Lecture code example 10)
function getUsers() {
  const data = localStorage.getItem(USERS_KEY);
  return JSON.parse(data);
}
//Get user details of a user from their email 
function getUser(email) {
  const userData = getUsers();

  for (const user of userData) {
    if (email === user.email) {
      return user;
    }
  }

  return null;
}

//Add a user to localStorage
function addUser(user) {
  //If there are already users registered, retrieve all users and add the new user onto the user array and store the updated list in localStorage
  if (getUsers() !== null) {
    let data = getUsers();
    data.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(data));
  } else {
    const data = [user];
    localStorage.setItem(USERS_KEY, JSON.stringify(data));
  }
}

//Check whether an email has already been registered
function verifyEmail(email) {
  if (getUser(email) === null) {
    return false;
  } else {
    return true;
  }
}

//Set the current logged in user in sessionStorage (Referenced from Week 3 Lecture code example 10)
function setCurrentUser(email) {
  sessionStorage.setItem(CURRENT_KEY, JSON.stringify(getUser(email)));
}

//Get the current logged in user details from session storage (Referenced from Week 3 Lecture code example 10)
function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem(CURRENT_KEY));
}

//Edit email of specific user
function editEmail(currentEmail, newEmail) {
  let userInfo = getUsers();
  //Loop all users to find the specific user
  for (let user of userInfo) {
    if (user.email === currentEmail) {
      user.email = newEmail;
      sessionStorage.setItem(CURRENT_KEY, JSON.stringify(user)); //Email changed in session storage as well
      break;
    }
  }

  localStorage.setItem(USERS_KEY, JSON.stringify(userInfo)); //Update the new email on local storage
}

//Edit name of specific user (same logic as editEmail)
function editName(currentEmail, newName) {
  let userInfo = getUsers();
  for (let user of userInfo) {
    if (user.email === currentEmail) {
      user.name = newName;
      sessionStorage.setItem(CURRENT_KEY, JSON.stringify(user));
      break;
    }
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(userInfo));
}

//Log out the user by removing from session storage (Referenced from Week 3 Lecture code example 10)
function logout() {
  sessionStorage.removeItem(CURRENT_KEY);
}

//Delete a user
function deleteUser(email) {
  const data = getUsers();
  let updatedData = [];

  //Add all other users into a new array except the deleting user
  for (const user of data) {
    if (user.email !== email) {
      updatedData.push(user);
    }
  }

  //Store the new array of users in local storage
  localStorage.setItem(USERS_KEY, JSON.stringify(updatedData));
}

function setAuthentication(userInfo, userCode){
    const authUser = {user: userInfo, code: userCode};
    sessionStorage.setItem(AUTH_KEY, JSON.stringify(authUser));
}

function getAuthentication(){
    return JSON.parse(sessionStorage.getItem(AUTH_KEY));
}

export {
  addUser,
  getUser,
  verifyEmail,
  setCurrentUser,
  getCurrentUser,
  editEmail,
  editName,
  deleteUser,
  logout,
  setAuthentication,
  getAuthentication
};
