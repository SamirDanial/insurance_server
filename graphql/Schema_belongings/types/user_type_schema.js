module.exports = `
    type User {
        _id: ID
        name: String,
        lastName: String
        username: String
        insurancePlan: Int
        userRole: UserRole
        password: String
        token: String
    }
`;