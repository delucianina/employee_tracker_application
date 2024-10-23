import pg from 'pg';

const { Client } = pg;
const client = new Client({
    user: 'postgres',
    password: 'pass',
    database: 'employee_tracker_application'
});

await client.connect();

export default client;