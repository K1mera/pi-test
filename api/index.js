const server = require('./src/server');
const PORT = 3001;
const { database } = require('./src/db');
const {getCountries} = require('./src/controllers/countriesControl');

database.sync({ alter: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Listening in port ${PORT}`);
        getCountries()
    });
})
.catch(err => console.log(err));