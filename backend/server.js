const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8887;

//CORS
const cors = require('cors');
app.use(cors()); // Use this after the variable declaration

//DATABASECONNECTION
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'DB_ASSIGNMENT',
  password: 'aspida2002@#',
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

process.on('SIGINT', () => {
  client.end(() => {
    console.log('Disconnected from PostgreSQL database');
    process.exit();
  });
});

app.get('/', (req, res) => {
  res.send('Server is running succesfully!');
});

app.get('/dummyData', (req, res) => {
  res.send([1, 2, 3, 4]);
});
// app.get('/search', (req, res) => {
//   const searchWord = req.query.arg1.toUpperCase();
//   console.log(lngDetector.detect(searchWord));
//   console.log('Keyword: ' + searchWord);
//   const pattern = /[A-Z]/;
//   const result = searchWord.match(pattern);
//   if (result) {
//     console.log('Your answer must be in greek!');
//     //TODO check what returns in case of error
//     res.json([]);
//     return;
//   }
//   if (searchWord.length < 3) {
//     console.log('I will not sent anything back');
//     //TODO check what returns in case of error
//     res.json([]);
//     return;
//   }
//   client.query(
//     "SELECT * FROM Players WHERE last_name LIKE '%" + searchWord + "%';",
//     (err, results) => {
//       if (err) {
//         console.error('Error executing query', err.stack);
//         //TODO check what returns in case of error
//         res.json('Something is wrong with the database');
//       } else {
//         console.log('Query results are :', results.rows);
//         res.json(results.rows);
//       }
//     }
//   );
// });

//TODO apply logic
// app.get('/checkAnswer', (req, res) => {
//   // const answerWord = req.query.arg1;
//   console.log('My type is: ' + typeof req.query.arg1);
//   const guessedPlayer = {
//     first_name: '',
//     last_name: req.query.arg1,
//     age: null,
//     team: '',
//     kit_number: null,
//     ethnicity: '',
//   };
//   console.log('The winning name is: ' + winningName);
//   console.log('The user;s given answer is: ' + guessedPlayer.last_name);
//   if (guessedPlayer.last_name == winningName) {
//     console.log('Winner');
//     //TODO what happens when they give the correct answer
//     //1. return an object with all the charachteristics and the message: "WIN"
//     res.json({ status: 'Winner' });
//   } else {
//     console.log('Loser');
//     //TODO what happens when they give the wrong answer
//     // return an object with the status of each charachteristic and the message: "NOT correct"
//     // 1. find that name (guessedPlayer.last_name) in the database and take all of his characteristics
//     client.query(
//       "SELECT * FROM Players WHERE last_name LIKE '%" +
//         guessedPlayer.last_name +
//         "%';",
//       (err, results) => {
//         if (err) {
//           console.error('Error executing query', err.stack);
//           //TODO check what returns in case of error
//           res.json('Something is wrong with the database');
//         } else {
//           console.log('Player Found :', results.rows);
//           guessedPlayer.first_name = 'Kostas';
//           // guessedPlayer.last_name = 'Kokkalis'
//           guessedPlayer.ethnicity = 'Greek';
//           guessedPlayer.age = 20;
//           guessedPlayer.kit_number = 7;

//           res.json(results.rows);
//         }
//       }
//     );
//     // 2. compare all the characteristics with the correct answer characteristics of the day
//     // 3. return how should the new answers be
//     console.log('Guessed Player First Name: ' + guessedPlayer.first_name);
//     console.log('Guessed Player Last Name: ' + guessedPlayer.last_name);
//     console.log('Guessed Player Age: ' + guessedPlayer.age);
//     res.json({ status: 'Loser' });
//     return;
//   }
// });

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
