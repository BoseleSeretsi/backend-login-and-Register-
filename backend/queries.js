const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'securelegacyserver',
  password: 'Letsdoit!',
  port: 5433,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM customers ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM customers WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { name, lastname, emailadress, password } = request.body
  
    pool.query('INSERT INTO customers (name, lastname, emailadress, password) VALUES ($1, $2, $3, $4) RETURNING *', [name,lastname, emailadress, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, lastname, emailadress, password } = request.body
  
    pool.query(
      'UPDATE customers SET name = $1, lastname = $2, emailadress = $3, password = $4 WHERE id = $5',
      [name, lastname, emailadress, password, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM customers WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }