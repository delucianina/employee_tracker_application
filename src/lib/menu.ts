import inquirer from 'inquirer';
import 'console.table';

import { getAllDepartments, getAllRoles, getAllEmployees, createDepartment, createRole, createEmployee } from './query.js';

let showWelcome = false;


//-------------------------------------
//ADDING A SHOP FUNCTION
//-------------------------------------
// export async function addShop() {
//     const usersArray = await getAllUsers();
//     const {user_id, name, address} = await inquirer.prompt([
//         {
//             message: 'Please select the owner of the shop:',
//             name: 'user_id',
//             type: 'list',
//             choices: usersArray.map((userObj) => {
//                 return {
//                     name: userObj.user_name,
//                     value: userObj.id
//                 }
//             })
//         },
//         {
//             message: 'Enter the shop name:',
//             name: 'name',
//             type: 'input'
//         },
//         {
//             message: 'Enter the shop address:',
//             name: 'address',
//             type: 'input'
//         }
//     ])

//     await createShop(user_id, name, address);
//     console.log('\nShop created successfully\n');
// }




//-------------------------------------
//SHOWING ALL EMPLOYEES FUNCTION
//-------------------------------------
export async function showAllEmployees() {
    const employeeRowsArray = await getAllEmployees();
    console.table(employeeRowsArray);
}



//-------------------------------------
//SHOWING ALL ROLES FUNCTION
//-------------------------------------
export async function showAllRoles() {
    const rolesRowsArray = await getAllRoles();
    console.table(rolesRowsArray);
}



//-------------------------------------
//SHOWING ALL DEPARTMENTS FUNCTION
//-------------------------------------
export async function showAllDepartments() {
    const departmentsRowsArray = await getAllDepartments();
    console.table(departmentsRowsArray);
}



//-------------------------------------
//ADDING A DEPARTMENT FUNCTION
//-------------------------------------
export async function addDepartment() {
    const {id, name} = await inquirer.prompt([
        {
            message: 'Please input the id number of the new department:',
            name: 'id',
            type: 'input'
        },
        {
            message: 'Please input the name of the new department:',
            name: 'name',
            type: 'input'
        }
    ])

    await createDepartment(id, name);
    console.log('\nDepartment created successfully.\n');
}



//-------------------------------------
//ADDING A ROLE FUNCTION
//-------------------------------------
export async function addRole() {
    const {id, title, department_id, salary} = await inquirer.prompt([
        {
            message: 'Please input the new role\'s id number:',
            name: 'id',
            type: 'input'
        },
        {
            message: 'Please input the new role\'s title:',
            name: 'title',
            type: 'input'
        },
        {
            message: 'Please input the new role\'s department id:',
            name: 'department_id',
            type: 'input'
        },
        {
            message: 'Please input the new role\'s salary:',
            name: 'salary',
            type: 'input'
        }
    ])

    await createRole(id, title, department_id, salary);
    console.log('\nRole created successfully.\n');
}



//-------------------------------------
//ADDING A EMPLOYEE FUNCTION
//-------------------------------------
export async function addEmployee() {
    const {id, first_name, last_name, role_id, manager_id} = await inquirer.prompt([
        {
            message: 'Please input the new employee\'s id number:',
            name: 'id',
            type: 'input'
        },
        {
            message: 'Please input the new employee\'s first name:',
            name: 'first_name',
            type: 'input'
        },
        {
            message: 'Please input the new employee\'s last name:',
            name: 'last_name',
            type: 'input'
        },
        {
            message: 'Please input the new employee\'s role id number:',
            name: 'role_id',
            type: 'input'
        },
        {
            message: 'Please input the new employee\'s manager id number:',
            name: 'manager_id',
            type: 'input'
        }
    ])

    await createEmployee(id, first_name, last_name, role_id, manager_id);
    console.log('\nEmployee created successfully.\n');
}



//-------------------------------------
//MENU FUNCTION
//-------------------------------------
export async function showMainMenu() {
    if (!showWelcome) {
        console.log('\n----- Welcome To The Employee Tracker App -----\n');
        showWelcome = true;
    }
    const { optionFunction } = await inquirer.prompt({
        message: 'Please select an option:',
        name: 'optionFunction',
        type: 'list',
        choices: [
        {
            name: 'View All Departments',
            value: showAllDepartments
        },
        {
            name: 'View All Roles',
            value: showAllRoles
        },
        {
            name: 'View All Employees',
            value: showAllEmployees
        },
        {
            name: 'Add a Department',
            value: addDepartment
        },
        {
            name: 'Add a Role',
            value: addRole
        },
        {
            name: 'Add an Employee',
            value: addEmployee
        },
        // {
        //     name: 'Update an Employee Role',
        //     value: updateEmployeeRole
        // },
        {
            name: 'Quit',
            value: 0
        }
    ]
    });

    if (!optionFunction) {
        console.log('\nThanks for using the app!\n');
        process.exit();   //will [CTRL + C] the terminal 
    }

    await optionFunction();

    showMainMenu();

}


