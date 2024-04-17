class User {
    constructor(id, name, email, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password; // In a real application, never store passwords in plain text!
    }
  }
  
  // This array will act as our in-memory database
  let users = [];
  
  export const addUser = (name, email, password) => {
    const id = users.length + 1;
    const newUser = { id, name, email, password };
    users.push(newUser);
    return newUser;
  };



  export function getAllUsers() {
    return users;
  }

  export const confirmUserLogin = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    return user;
  };

  console.log(getAllUsers());
  