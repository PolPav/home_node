const User = require(`../models/Users`);

class UserController{

  getUsers() {

    const promise = new Promise((resolve, reject) => {
      resolve(User.findAll({ where: { trash: 0 } }));
      reject(new Error("Not Found"));

    });

    return promise;
      // User.findAll({ where: { trash: 0 } }).then(records => {
      //   return callback(records);
      // });
  }

  getUserById(id){

    const promise = new Promise((resolve, reject) => {
      resolve(User.findById(id));
      reject(new Error("Not Found"));

    });

    return promise;
    // User.findById(id).then(records => {
    //   return callback(records);
    // });
  }

  addUser(user){

    const promise = new Promise((resolve, reject) => {
      resolve(User.create(user));
      reject(new Error("Not Found"));

    });

    return promise;

    // return callback(User.create(user));
  }

  updateUser(user, id){

    const promise = new Promise((resolve, reject) => {
      resolve(User.update(user, { where: { id: id } }));
      reject(new Error("Not Found"));

    });

    return promise;
    // return callback(User.update(user, { where: { id: id } }));
  }

  deleteUser(id){

    const promise = new Promise((resolve, reject) => {
      resolve(User.update({trash: 1}, { where: { id: id } }));
      reject(new Error("Not Found"));

    });

    return promise;
    // return callback(User.update({trash: 1}, { where: { id: id } }));
  }

}

module.exports = UserController;