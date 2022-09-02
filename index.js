const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



const inquirer = require('inquirer');
const array = ['Engineer', 'Intern'];
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

.then((answer) => {
    eng = new Engineer(`${answer.engname}`, `${answer.engid}`, `${answer.engemail}`, `${answer.enggithub}`);
    int = new Intern(`${answer.intname}`, `${answer.intid}`, `${answer.intemail}`, `${answer.intschool}`);
    man = new Manager(`${answer.mngname}`, `${answer.mngid}`, `${answer.mngemail}`, `${answer.mngoffice}`);
    console.log(int);
    console.log(man);
    console.log(eng);
    console.log(answer);


})


http = require('http');

http.createServer(function(req, res) {
    var html = buildHtml(req);
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': html.length,
        'Expires': new Date().toUTCString()
    });
    res.end(html);
}).listen(8080);

function buildHtml(req) {
    let html =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
    <link href="/dist/style.css" rel="stylesheet">
</head>

<body>
    <div class="body">
        <header class="header">
            <div>My Team</div>
        </header>

        <div class="row-1">
            <div class="card-1">
                <h2 class="card-header">Manager</h2>
                <div class="card-layout">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:" + '${man.mngname}' + "</li>
                            <li class="list-group-item">Email:</li>
                            <li class="list-group-item">Office Number:</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card-2">
                <h2 class="card-header">Engineer</h2>
                <div class="card-layout">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:</li>
                            <li class="list-group-item">Email:</li>
                            <li class="list-group-item">Github:</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card-3">
                <h2 class="card-header">Engineer</h2>
                <div class="card-layout">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:</li>
                            <li class="list-group-item">Email:</li>
                            <li class="list-group-item">Github:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
        <div class="row-2">
            <div class="card-4">
                <h2 class="card-header">Engineer</h2>
                <div class="card-layout">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:</li>
                            <li class="list-group-item">Email:</li>
                            <li class="list-group-item">Github:</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card-5">
                <h2 class="card-header">Intern</h2>
                <div class="card-layout">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:</li>
                            <li class="list-group-item">Email:</li>
                            <li class="list-group-item">School:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


</body>

</html>`

    return html;

};