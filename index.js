const express = require('express')
const session = require('express-session') // Middleware para manejar sesiones
const cookieParser = require('cookie-parser') // Middleware para parsear cookies
const bodyParser = require('body-parser') // Middleware para parsear cuerpos de peticiones
const methodOverride = require('method-override') // Middleware para permitir otros métodos HTTP como PUT y DELETE
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs') // Configura EJS como el motor de vistas

// Middleware para parsear cuerpos de peticiones en formato JSON
app.use(bodyParser.json())

// Middleware para parsear cuerpos de peticiones en formato URL-encoded (como formularios HTML)
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware para parsear cookies
app.use(cookieParser())

// Middleware para manejar sesiones
app.use(
 session({
  secret: 'your_secret_key', // Clave secreta para firmar la sesión
  resave: false, // No volver a guardar la sesión si no ha sido modificada
  saveUninitialized: true // Guardar una sesión no inicializada
 })
)

// Middleware para permitir otros métodos HTTP como PUT y DELETE usando un campo oculto "_method"
app.use(methodOverride('_method'))

let usuarios = [] // base de datos de usuarios simulada
let tareas = [
 {
  id: 1,
  name: 'tarea 1',
  descripcion: 'Esta es la descripcion 1'
 },
 {
  id: 2,
  name: 'tarea 2',
  descripcion: 'Esta es la descripcion 2'
 },
 {
  id: 3,
  name: 'tarea 3',
  descripcion: 'Esta es la descripcion 3'
 }
] // base de datos de tareas simulada
//funcion para autentificar rutas

const authenticateUser = (req, res, next) => {
 if (req.session.user) {
  next()
 } else {
  res.redirect('/login')
 }
}
// Ruta para mostrar el formulario de registro
app.get('/register', (req, res) => {
 res.render('register')
})

// Ruta para manejar el registro de usuarios
app.post('/register', (req, res) => {
 // Verificar que el nombre de usuario no esté en uso
 const { username, password } = req.body

 usuarios.push({ username, password })
 console.log(usuarios)
 //una vez que este registrago rendizar login
 res.redirect('/login')
})

// Ruta para mostrar el formulario de inicio de sesión
app.get('/login', (req, res) => {
 res.render('login')
})

// Ruta para manejar el inicio de sesión de usuarios
app.post('/login', (req, res) => {
 // Verificar que el nombre de usuario y contraseña existan y sean correctos
 const { username, password } = req.body
 const user = usuarios.find(
  (u) => u.username === username && u.password === password
 )
 if (!user) {
  res.render('login') // Si el usuario está autenticado
 } else {
  req.session.user = user
  res.render('tareas', { tareas }) // Si el usuario no está autenticado
 }
})

// Ruta para manejar el cierre de sesión de usuarios
app.post('/logout', (req, res) => {
 req.session.destroy()
 res.send('Usuario deslogueado')
})

// Ruta para mostrar las tareas (solo si el usuario está autenticado)
app.get('/tareas', authenticateUser, (req, res) => {
 res.render('tareas', { tareas }) // Si el usuario está autenticado
})

// Ruta para manejar la creación de nuevas tareas (solo si el usuario está autenticado)
app.post('/tareas', authenticateUser, (req, res) => {
 // Agregar la nueva tarea a la base de datos
 const { name, descripcion } = req.body
 tareas.push({
  id: tareas.length + 1,
  name,
  descripcion
 })
 //res.send('Tarea agregada correctamente')
 res.render('tareas', { tareas })
})

// Ruta para manejar la eliminación de tareas (solo si el usuario está autenticado)
app.delete('/tareas/:id', (req, res) => {})

app.use((req, res) => {
 res.render('404')
})

app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}/register`)
})
