

const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = engineer => {
    return `  <div class="card-2">
    <h2 class="card-header">Engineer</h2>
    <div class="card-layout">
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:'${engineer.id}'</li>
                <li class="list-group-item">Email:'${engineer.email}'</li>
                <li class="list-group-item">${engineer.github}"Github:</li>
            </ul>
        </div>
    </div>
</div>
`;

}
const generateIntern = function (intern) {
    
    return  `  <div class="card-2">
    <h2 class="card-header">Engineer</h2>
    <div class="card-layout">
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:'${intern.id}'</li>
                <li class="list-group-item">"${intern.email}"Email:</li>
                <li class="list-group-item">${intern.school}</p>Github:</li>
            </ul>
        </div>
    </div>
</div>
`
};


generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
}
    const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        <link href="/dist/style.css" rel="stylesheet">
    </head>
    
    <body>
        <div class="body">
            <header class="header">
                <div>My Team</div>
            </header>
            <main> <div>${employeeCards}</div></main>
    
    
    </body>
    
    </html>
    `;
   }

module.exports = generateHTML;