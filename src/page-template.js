//create the team html
const generateTeam = team => {


    // create the manager html
    const generateManager = manager => {
        return `
    <div class="card employee-card">

        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class"fas fa-mug-hot mr-2">${manager.getRole()}</h3>
        </div>

        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
    };

    const generateEngineer = engineer => {
        return `
    <div class="card employee-card">

        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class"fas fa-mug-hot mr-2">${engineer.getRole()}</h3>
        </div>

        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
    `;
    };

    const generateIntern = intern => {
        return `
    <div class="card employee-card">

        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class"fas fa-mug-hot mr-2">${intern.getRole()}</h3>
        </div>

        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: ${intern.getEmail()}</li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
    };

};

    module.exports = team => {
        return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Generator</title>
    </head>
    
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h1 class="card-title">Team Generator</h1>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                ${generateTeam(team)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>
        `;
    }