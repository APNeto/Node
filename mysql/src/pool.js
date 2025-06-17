const mysql = require("mysql2/promise"); // Use the promise-based version

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "myuser",
  password: "mypassword",
  database: "mydatabase",
  waitForConnections: true, // Whether to wait for a connection to become available
  connectionLimit: 10, // Maximum number of connections in the pool
  queueLimit: 0, // Maximum number of requests the pool will queue before returning an error
});

// Example usage:
async function getUsers() {
  let connection;
  try {
    connection = await pool.getConnection(); // Get a connection from the pool
    const [rows, fields] = await connection.execute("SELECT * FROM users");
    console.log("Users:", rows);
    return rows;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err; // Re-throw to be handled by the caller
  } finally {
    if (connection) connection.release(); // Release the connection back to the pool
  }
}

async function insertUser(name, email) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    console.log("User inserted with ID:", result.insertId);
    return result.insertId;
  } catch (err) {
    console.error("Error inserting user:", err);
    throw err;
  } finally {
    if (connection) connection.release();
  }
}

async function createUsersTable() {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL
            )
        `);
    console.log("Users table created or already exists.");
    return true;
  } catch (err) {
    console.error("Error creating users table:", err);
    throw err;
  } finally {
    if (connection) connection.release();
  }
}

// Call the functions
(async () => {
  try {
    await createUsersTable();
    await getUsers();
    await insertUser("Jane Doe", "jane.doe@example.com");
    await getUsers();
  } catch (error) {
    console.error("Application error:", error);
  } finally {
    // Important: Close the pool when your application is shutting down
    // In a real application, this might be handled by a graceful shutdown mechanism
    // await pool.end();
    // console.log('Connection pool closed.');
  }
})();
