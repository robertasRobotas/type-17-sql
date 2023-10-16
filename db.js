const pg = require("pg");
const { Pool } = pg;

const connectionString =
  "postgres://cblvpzod:mwrRN_zV3NNt6GfEo0Rhbm5YE_fMMFEe@cornelius.db.elephantsql.com/cblvpzod";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
