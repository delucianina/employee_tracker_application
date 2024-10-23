import inquirer from 'inquirer';
import 'console.table';

import { getAllEmployees } from './query.js';

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
//SHOWING ALL DEPARTMENTS FUNCTION
//-------------------------------------
export async function showAllEmployees() {
    const employeeeRowsArray = await getAllEmployees();
    console.table(employeeeRowsArray);
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
        choices: [{
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
        {
            name: 'Update an Employee Role',
            value: updateEmployeeRole
        },
        {
            name: 'Quit',
            value: 0
        }]
    });

    if (!optionFunction) {
        console.log('\nThanks for using the app!\n');
        process.exit();   //will [CTRL + C] the terminal 
    }

    await optionFunction();

    showMainMenu();

}


