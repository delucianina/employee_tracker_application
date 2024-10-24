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



-- ATTENTION!
-- This file isn't being used 