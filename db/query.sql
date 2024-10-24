\c employee_tracker_application;

-- SOS -------------------------------
SELECT 
    employees.id AS employee_id,
    first_name AS first_name,
    last_name AS last_name,
    roles.title AS title,
    departments.name AS department,
    roles.salary AS salary,
    CONCAT(managers.first_name, ' ', managers.last_name) AS manager,
FROM employees 
JOIN users as managers 
    ON users.manager_id = managers.id;






-- SELECT 
--     d.id AS user_id,
--     CONCAT(u.first_name, ' ', u.last_name) AS user_name,
--     CONCAT(managers.first_name, ' ', managers.last_name) AS manager_name
-- FROM users AS u
-- LEFT JOIN users AS managers
--     ON u.manager_id = managers.id;




-- NOTES --------------------------------
-- Pull all rows from shops and also attach the associated users 
-- First only pulls rows that have an association... 
-- RIGHT means give me all users even if there are no associations (LEFT would mean all shops) 
-- you can combine multiple tables, but you need to combine the clause 