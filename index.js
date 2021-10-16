//Testes Iniciais
// console.log(process.env.API_USER);
// console.log(process.env.API_KEY);
// console.log(process.env.API_URL);

const user = {
    username: 'teste',
    password: '123456',
    first_name: 'Teste',
    last_name: 'Silva',
    email: 'teste@teste.com',
    roles: [
        "customer"
    ]
}

const wordpress = require('./wordpress');

//exemplo WordPress
wordpress.addUser(user)
    .then(data => console.log(data))
    .error(err => console.error(err))

//exemplo LearnDash
// wordpress.addUser(user)
//     .then(data => wordpress.addUserToCourse([data.id], 1))
//     .then(data => console.log(data))
//     .error(err => console.error(err))