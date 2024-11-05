const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',      
  host: 'localhost',         
  database: 'sivira',        
  password: 'renansena67',    
  port: 5432,                
});

module.exports = pool;
