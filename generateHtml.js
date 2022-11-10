const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

function generateHtml(answer) {
    http = require('http');
    // Creates the Server 
    http.createServer(function(req, res) {
        var html = buildHtml(req);
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': html.length,
            'Expires': new Date().toUTCString()
        });
        res.end(html);
    }).listen(8080);

    // Builds HTML 
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
                            <li class="list-group-item">ID:"  '${answer.engemail}'  "</li>a
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
                            <li class="list-group-item">ID:'${answer.engemail}'</li>
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

    }
};
module.exports = generateHtml;