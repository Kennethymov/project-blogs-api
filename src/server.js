require('dotenv').config();
const { use } = require('frisby');
const app = require('./app');
const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');
const categoryRoute = require('./routes/categoryRoute');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint 
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/categories', categoryRoute);

app.listen(port, () => console.log('ouvindo porta', port));
