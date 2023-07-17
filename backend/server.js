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
  database: 'fahrraddiebstahl',
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

//arguments: none
//returns districts and damage fro each district
app.get('/', (req, res) => {
  client.query(
    'SELECT bez.gemeinde_name AS bezirk, SUM(rad.schadenshoehe) AS schadenshoehe_pro_bezirk FROM bez JOIN lor ON bez.gemeinde_schluessel = lor.bez JOIN rad ON lor.plr_id = rad.lor GROUP BY bez.gemeinde_name ORDER BY schadenshoehe_pro_bezirk',
    (err, results) => {
      if (err) {
        console.error('Error executing query', err.stack);
        //TODO check what returns in case of error
        res.json('Something is wrong with the database');
      } else {
        console.log('Query results are :', results.rows);
        res.json(results.rows);
      }
    }
  );
  // res.send(results.rows);
});

app.get('/piechart', (req, res) => {
  client.query(
    'SELECT bez.gemeinde_name AS bezirk, SUM(rad.schadenshoehe) AS schadenshoehe_pro_bezirk FROM bez JOIN lor ON bez.gemeinde_schluessel = lor.bez JOIN rad ON lor.plr_id = rad.lor GROUP BY bez.gemeinde_name ORDER BY schadenshoehe_pro_bezirk',
    (err, results) => {
      if (err) {
        console.error('Error executing query', err.stack);
        //TODO check what returns in case of error
        res.json('Something is wrong with the database');
      } else {
        console.log('Query results are :', results.rows);
        res.json(results.rows);
      }
    }
  );
});

app.get('/columnchart', (req, res) => {
  client.query(
    'SELECT bez.gemeinde_name AS bezirk, COUNT(*)/SUM(lor.groesse_m2)*1000000 AS quantity_per_area_per_borough FROM bez JOIN lor ON bez.gemeinde_schluessel = lor.bez JOIN rad ON lor.plr_id = rad.lor GROUP BY bez.gemeinde_name ORDER BY quantity_per_area_per_borough DESC;',
    (err, results) => {
      if (err) {
        console.error('Error executing query', err.stack);
        res.json('Something is wrong with the database');
      } else {
        console.log('Query results are :', results.rows);
        res.json(results.rows);
      }
    }
  );
  // res.send(results.rows);
});

app.get('/heatmap', (req, res) => {
  client.query(
    'SELECT lor.plr_name AS planning_area, COUNT(*) FROM lor JOIN rad ON lor.plr_id = rad.lor GROUP BY lor.plr_name ORDER BY COUNT(*) DESC LIMIT 10;',
    (err, results) => {
      if (err) {
        console.error('Error executing query', err.stack);
        //TODO check what returns in case of error
        res.json('Something is wrong with the database');
      } else {
        console.log('Query results are :', results.rows);
        res.json(results.rows);
      }
    }
  );
  // res.send(results.rows);
});

app.get('/linechart', (req, res) => {
  client.query(
    "SELECT to_date(angelegt_am,'DD-MM-YYYY') AS day , COUNT(*) AS bikes_per_day FROM rad where angelegt_am>='01.01.2022' and angelegt_am<='31.12.2023' GROUP BY day ORDER BY day;",
    (err, results) => {
      if (err) {
        console.error('Error executing query', err.stack);
        //TODO check what returns in case of error
        res.json('Something is wrong with the database');
      } else {
        console.log('Query results are :', results.rows);
        res.json(results.rows);
      }
    }
  );
  // res.send(results.rows);
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
