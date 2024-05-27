import { connectToPostgres } from './postgres';
import { addDataToRedis, connectToRedis } from './redis';


async function startup() {
    // Connect to Redis and add data
    try {
        connectToPostgres();    
        connectToRedis();
        addDataToRedis('process', ['backlog', 'Todo', 'In Progress', 'Done', 'Cancelled']);
        console.log('startup successfully.');
    } catch (error) {
        console.error('Failed to startup:', error);
        process.exit(1);
    }

    
}

startup();