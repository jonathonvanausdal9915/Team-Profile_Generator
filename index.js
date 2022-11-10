const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const generateHtml = require('./generateHtml');
const fs = require('fs');


const array = ['Engineer', 'Intern'];
const questions = async() => {
    inquirer.
    prompt([{
            type: 'input',
            message: 'What is your Managers name?',
            name: 'mngname',
        },
        {
            type: 'input',
            message: 'What is your Managers Employee ID?',
            name: 'mngid',
        },
        {
            type: 'input',
            message: 'What is your Managers Email Address?',
            name: 'mngemail',
        },
        {
            type: 'input',
            message: 'What is your Managers Office Number?',
            name: 'mngoffice',
        },
        {
            type: 'checkbox',
            message: 'Would you like to add a Engineer or a Intern?',
            name: 'type',
            choices: array,
        },
        {
            type: 'input',
            message: 'What is the name of your Engineer?',
            name: 'engname',
            when: (answer) => answer.type == 'Engineer',

        },
        {
            type: 'input',
            message: 'What is your Engineers ID?',
            name: 'engid',
            when: (answer) => answer.type == 'Engineer',

        },
        {
            type: 'input',
            message: 'What is your Engineers email?',
            name: 'engemail',
            when: (answer) => answer.type == 'Engineer',

        },
        {
            type: 'input',
            message: 'What is your Engineers GitHub Username?',
            name: 'enggithub',
            when: (answer) => answer.type == 'Engineer',

        },
        {
            type: 'input',
            message: 'What is the name of your Intern?',
            name: 'intname',
            when: (answer) => answer.type == 'Intern',

        },
        {
            type: 'input',
            message: 'What is your Interns ID?',
            name: 'intid',
            when: (answer) => answer.type == 'Intern',

        },
        {
            type: 'input',
            message: 'What is your Interns email',
            name: 'intemail',
            when: (answer) => answer.type == 'Intern',

        },
        {
            type: 'input',
            message: 'What is the name of your interns school?',
            name: 'intschool',
            when: (answer) => answer.type == 'Intern',

        },
    ])

    // eng = new Engineer(answer.engname, answer.engid, answer.engemail, answer.enggithub);
    // int = new Intern(answer.intname, answer.intid, answer.intemail, answer.intschool);
    // man = new Manager(answer.mngname, answer.mngid, answer.mngemail, answer.mngoffice);

    generateHtml(answer);
};
module.exports = inquirer.js;