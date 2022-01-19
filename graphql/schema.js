const { buildSchema } = require("graphql");

// --------------------- Types -------------------------------
const userTypeSchema = require("./Schema_belongings/types/user_type_schema");
const userRoleTypeSchema = require("./Schema_belongings/types/userRole_type_schema");


// --------------------- Inputs ------------------------------
const userInputData = require("./Schema_belongings/inputs/user_data_input");
const userInputCredintial = require("./Schema_belongings/inputs/user_credintial_input");

// -------------------- RootQuery ----------------------------
const rootQuery = require("./Schema_belongings/root_query/root_query");


// -------------------- RootMutation -------------------------
const rootMutation = require("./Schema_belongings/root_mutation/root_mutation");


// -------------------- Schema -------------------------------
const schema = require("./Schema_belongings/schema/schema");

module.exports = buildSchema(`
    ${userTypeSchema}
    ${userRoleTypeSchema}

    ${userInputData}
    ${userInputCredintial}

    ${rootQuery}

    ${rootMutation}

    ${schema}

`);