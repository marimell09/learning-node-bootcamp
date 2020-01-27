const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

//global variable that indicates in which environment the node app is running
//console.log(app.get('env'));
//All node environment variables
//console.log(process.env);

//START SERVER

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
