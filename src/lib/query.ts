import client from '../config/connection.js';
import 'console.table';



export async function getAllShops() {
    const sql = `
    SELECT 
        shops.id AS shop_id,
        name AS shop_name, 
        address AS shop_address,
        users.id AS user_id,
        CONCAT(users.first_name, ' ', users.last_name) AS user_name,
        users.email AS user_email,
        CONCAT(managers.first_name, ' ', managers.last_name) AS manager,
        wines.id AS wine_id,
        brand AS wine_brand,
        type AS wine_type,
        region AS wine_region,
        price AS wine_price
    FROM shops 
    JOIN users
        ON shops.user_id = users.id
    LEFT JOIN wines 
        ON shops.id = wines.shop_id
    LEFT JOIN users as managers 
        ON users.manager_id = managers.id
    `;

    const { rows } = await client.query(sql);

    return rows;
}




export async function getAllUsers() {
    const sql = `
    SELECT 
        id, 
        CONCAT(first_name, ' ', last_name) AS user_name
    FROM users  
    `;

    const {rows} = await client.query(sql);

    return rows;
}





export async function createShop(user_id: number, name: string, address: string) {
    //Doing this with ${name} can cause issues with sql injection 
    //So we're using placeholders for now, and will input values later  
    const sql = `
        INSERT INTO shops (name, address, user_id) 
        VALUES ($1, $2, $3)
    `;

    // this will input the values in order, into the 'prepared statement'
    await client.query(sql, [name, address, user_id]);
}