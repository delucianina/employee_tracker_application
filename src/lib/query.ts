// IMPORTS -----------------------------
import client from '../config/connection.js';
import 'console.table';



// -------------------------------------
// DISPLAY EMPLOYEE FUNCTION
// -------------------------------------
export async function getAllEmployees() {
    const sql = `
    SELECT 
        employee.id AS id,
        employee.first_name,
        employee.last_name,
        title,
        name AS department,
        salary,
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    JOIN role
        ON employee.role_id = role.id
    JOIN department  
        ON role.department_id = department.id
    LEFT JOIN employee as manager 
        ON employee.manager_id = manager.id
    `;

    const { rows } = await client.query(sql);

    return rows;
}



// -------------------------------------
// DISPLAY ROLES FUNCTION
// -------------------------------------
export async function getAllRoles() {
    const sql = `
    SELECT 
        role.id AS id,
        title,
        name AS department,
        salary
        FROM role
    JOIN department  
        ON role.department_id = department.id
    `;
    
    const { rows } = await client.query(sql);
    
    return rows;
}



// -------------------------------------
// DISPLAY DEPARTMENT FUNCTION
// -------------------------------------
export async function getAllDepartments() {
    const sql = `
    SELECT 
        department.id AS id,
        name AS department
    FROM department
    `;

    const { rows } = await client.query(sql);

    return rows;
}


    
// -------------------------------------
// CREATE DEPARTMENT FUNCTION
// -------------------------------------
export async function createDepartment(id: number, name: string) {
    const sql = `
        INSERT INTO department (id, name)
        VALUES ($1, $2)
    `;

    await client.query(sql, [id, name]);
}



// -------------------------------------
// CREATE ROLE FUNCTION
// -------------------------------------
export async function createRole(id: number, title: string, department_id: string, salary: number) {
    const sql = `
        INSERT INTO role (id, title, department_id, salary)
        VALUES ($1, $2, $3, $4)
    `;

    await client.query(sql, [id, title, department_id, salary]);
}



// -------------------------------------
// CREATE EMPLOYEE FUNCTION
// -------------------------------------
export async function createEmployee(id: number, first_name: string, last_name: string, role_id: number, manager_id: number) {
    const sql = `
        INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
        VALUES ($1, $2, $3, $4, $5)
    `;

    await client.query(sql, [id, first_name, last_name, role_id, manager_id]);
}



// -------------------------------------
// UPDATE EMPLOYEE FUNCTION
// -------------------------------------
export async function updateEmployeeTable(role_id: number, id: number) {
    const sql = `
        UPDATE employee
        SET role_id = $1
        WHERE id = $2
    `;

    await client.query(sql, [role_id, id]);
};