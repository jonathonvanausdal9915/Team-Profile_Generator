

const generateManager = function (manager) {
    return `<div class="card-2">
    <h2 class="card-header">Engineer</h2>
    <div class="card-layout">
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:'${manager.id}'</li>
                <li class="list-group-item">Email:'${manager.email}'</li>
                <li class="list-group-item">${manager.github}"Github:</li>
            </ul>
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
        <link href="/dist/style.css" rel="stylesheet">
    </head>
    
    <body>
        <div class="body">
            <header class="header">
                <div>My Team</div>
            </header>
            <main>${employeeCards}</main>
            ${employeeCards}
    
    
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `;
   }

module.exports = generateHTML;