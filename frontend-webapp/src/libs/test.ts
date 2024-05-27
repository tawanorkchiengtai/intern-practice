import { connectToPostgres, addProject } from "./postgres";
import { addDataToRedis, connectToRedis } from "./redis";   

export async function testConnection() {
    let pg, redis, pgResult, redisResult;
    try{
        pg = await connectToPostgres();
        console.log("Connection to Postgres successful.");

        redis = await connectToRedis();
        console.log("Connection to Redis successful.");

        //({ name: "test", description: "test description" });

        pgResult = await pg.query("SELECT * FROM issues").then((res) => res.rows);
        console.log("Postgres query executed successfully:");

    } catch (error) {
        console.error("Failed to connect:", error);
        throw error;
    }
    return {
        pgResult,
        redisResult
    };
}
