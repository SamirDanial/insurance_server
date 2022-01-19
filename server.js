const express = require("express");
const connectDB = require("./config/db");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
const auth = require("./middleware/auth");
const UserRole = require("./models/UserRole");
const path = require('path');

// /node_modules
// /client/node_modules
// config/default.json

const app = express();

connectDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-auth-token");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json({ extended: false }));
app.use(auth);

RoleExist('Admin');
RoleExist('Super_Admin');

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    customFormatErrorFn(error) {
      if (!error.originalError) {
        return error;
      }
      const message = error.message || "An Error Occured";
      const data = error.originalError.data;
      const code = error.originalError.code || 500;
      return { message: message, status: code, data: data };
    },
  })
);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});


async function RoleExist(roleName) {
  const role = await UserRole.findOne({ name: roleName });
  if (!role) {
    const newRole = new UserRole({
      name: roleName,
      description: 'This is a role'
    })

    await newRole.save();
  }
}

