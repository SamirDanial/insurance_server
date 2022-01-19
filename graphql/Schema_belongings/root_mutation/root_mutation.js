module.exports = `
type RootMutation {
    createUser(userInput: UserInputData!): User
    editUser(userInput: UserInputData!): User
}
`;