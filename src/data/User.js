const USERS_KEY = "users";
const CURRENT_KEY = "currentUser"

//Get every registered user from localStorage
function getUsers(){
    const data = localStorage.getItem(USERS_KEY);
    return JSON.parse(data);
}
//Get user details of a user from their email
function getUser(email){
    const userData = getUsers();
    for(const user of userData){
        if(email === user.email){
            return user;
        }
    }

    return null;
}

//Add a user to localStorage
function addUser(user){
    //If there are already users registered, retrieve all users and add the new user onto the user array and store the updated list in localStorage
    if(getUsers() !== null){
        let data = getUsers();
        data.push(user);
        localStorage.setItem(USERS_KEY, JSON.stringify(data));
    }else{
        const data = [user];
        localStorage.setItem(USERS_KEY, JSON.stringify(data));
    }
}

//Check whether an email has already been registered
function verifyEmail(email){
    if(getUser(email) === null){
        
        return false;
    }else{
        return true;
    }
}

//Set the current logged in user in sessionStorage
function setCurrentUser(email){
    sessionStorage.setItem(CURRENT_KEY, JSON.stringify(getUser(email)));
}

export { addUser, getUser, verifyEmail, setCurrentUser }