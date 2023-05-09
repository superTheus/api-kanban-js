const express = require('express');
const userController = require('./controllers/usersControllers');

const app = express();

app.listen(3333, () => console.log("Server Iniciado"));

app.get('/', (req, res) => {
  var HTML = `<html>
                <body>
                    <h2>Bem Vindo a API do Kanban</h2>
                    <a href="https://gitlab.com/j.matheussouza2019/ranking-api" > Documentação </a>
                </body>
              </html>`

  res.send(HTML);
});

app.get('/users', userController.getAllUsers);