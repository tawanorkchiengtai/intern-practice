import { url } from 'inspector';
import { createClient } from 'redis';

// Create a Redis client
const client = createClient({ url: process.env.REDIS_URL });

// Connect to Redis
client.on('connect', () => {
    console.log('Connected to Redis');
});

// Handle Redis connection errors
client.on('error', function (error:any){
    console.error('Error connecting to Redis:', error);
  
});

export async function connectToRedis(){
    if(client.isOpen){
        await client.connect();
    }
    return client;
}

export async function addDataToRedis(key: string, values: string[]) {
    try {
        await client.RPUSH(key, values);
        console.log(`Data added to Redis with key ${key}.`);
    } catch (error) {
        console.error(`Error adding data to Redis:`, error);
        throw error;
    }
}
addDataToRedis('process', ["backlog", "Todo", "In Progress", "Done", "Cancelled"]);