'use server'

import { Pool } from "pg";

export async function connectToPostgres() {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  });

  pool.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
  });
  

  try {
    const client = await pool.connect();
    console.log("Postgres connected");
    return client;
  } catch (error) {
    console.error("Error during Postgres connection:", error);
    throw error;
  }
}


export async function addProject({ name, description }: { name: string, description: string }) {
    const client = await connectToPostgres();
    
    // Corrected and parameterized SQL query
    const query = `INSERT INTO projects (project_name, description) VALUES($1, $2) returning *;`;
    
    // Array of values to be substituted into the placeholders
    const values = [name, description];

    try {
        // Executing the query with the array of values
        const result = await client.query(query, values);
        console.log("Project added to PostgreSQL:", result.rows);
        return result; // Returning the inserted row
    } catch (error) {
        console.error("Failed to add project to PostgreSQL:", error);
        throw error;
    } finally {
        // Releasing the client back to the pool
        client.release();
    }
}


    
export async function addIssue( name: string, status:string, risk:string, startDate:Date | null, endDate:Date | null ) {
    const client = await connectToPostgres();
    const query = `INSERT INTO "Issues" (issue_name, issue_status, issue_risk, issue_start_date, issue_end_date) VALUES($1, $2, $3, $4, $5) returning *;`;
    
    const values = [name, status, risk, startDate, endDate];

    try {
        const result = await client.query(query, values);
        console.log("Issue added to PostgreSQL:", result.rows);
        return result; 
    } catch (error) {
        console.error("Failed to add issue to PostgreSQL:", error);
        throw error;
    } finally {
        client.release(); // Don't forget to release the client back to the pool
    }
}



    // export async function createProjectSchema() {
    //     const client = await connectToPostgres();
    
    //     try {
    //         await client.query(`
    //             CREATE TABLE IF NOT EXISTS project (
    //                 id SERIAL PRIMARY KEY,
    //                 project_name VARCHAR(100),
    //                 description VARCHAR(100)
    //             )
    //         `);
    //         console.log("project schema created successfully.");
    //     } catch (error) {
    //         console.error("Error creating project schema:", error);
    //         throw error;
    //     } finally {
    //         client.release();
    //     }
    // }

    // export async function createIssueSchema() {
    //     const client = await connectToPostgres();
    
    //     try {
    //         await client.query(`
    //             CREATE TABLE IF NOT EXISTS issues (
    //                 id SERIAL PRIMARY KEY,
    //                 issue_name VARCHAR(100),
    //                 description VARCHAR(100),
    //                 state VARCHAR(20),
    //                 risk VARCHAR(20),
    //                 start_date DATE,
    //                 end_date DATE
    //             )
    //         `);
    //         console.log("issue schema created successfully.");
    //     } catch (error) {
    //         console.error("Error creating issue schema:", error);
    //         throw error;
    //     } finally {
    //         client.release();
    //     }
    // }

    



    
    