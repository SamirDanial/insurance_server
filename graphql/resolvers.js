const {
    loginUser,
    createUser,
    editUser,
} = require("./Resolver_belongings/user_utility/user_utility");

module.exports = {
    // -------------------------- user_utility---------------------------
    loginUser: (props, req) => loginUser(props, req),
    createUser: (props, req) => createUser(props, req),
    editUser: (props, req) => editUser(props, req),

};