const generateSite = (team) => {
    console.log(team);
    const html = [];


const generateManager = manager => {
    console.log(manager);
    let managerHtml = `
    <div class="row-1">
    <div class="card-1">
        <h2 class="card-header">Manager</h2>
        <div class="card-layout">
            <div class="card" style="width: 18rem;">
            ${manager.name}
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${manager.id}</li>a
                    <li class="list-group-item">Email:${manager.email}</li>
                    <li class="list-group-item">Office Number:${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    html.push(managerHtml);
}

const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHtml = `  <div class="card-2">
    <h2 class="card-header">Engineer</h2>
    <div class="card-layout">
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:'${engineer.id}'</li>
                <li class="list-group-item">Email:</li>
                <li class="list-group-item">Github:</li>
            </ul>
        </div>
    </div>
</div>
`;
html.push(engineerHtml);
}
const generateEnginee = Intern => {
    console.log(Intern);
    let internHtml = `  <div class="card-2">
    <h2 class="card-header">Engineer</h2>
    <div class="card-layout">
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:'${Intern.id}'</li>
                <li class="list-group-item">Email:</li>
                <li class="list-group-item">Github:</li>
            </ul>
        </div>
    </div>
</div>
`;
html.push(engineerHtml);

      
for (let i = 0; i < team.length; i++) {
    if (team[i].getRole()==="Manager"){
        generateManager(team[i]);
    }
    if (team[i].getRole()==="Engineer"){
        generateEngineer(team[i]);
    }
    if (team[i].getRole()==="Intern"){
        generateIntern(team[i]);
    }
}
return html.join('');
   }

   module.exports = team => {
    return `
    <!DOCTYPE html>
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
            <main> ${generateTeam(team)}</main>
    
    
    </body>
    
    </html>
    `;
   }
};