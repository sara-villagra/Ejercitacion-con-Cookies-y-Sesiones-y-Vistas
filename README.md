# Ejercitación: Aplicación de Gestión de Tareas con Express y EJS

## Descripción

En esta ejercitación, vas a desarrollar una aplicación web de gestión de tareas utilizando Node.js, Express y EJS. Se te proporcionan los archivos de vistas en formato `.ejs` y un archivo `index.js` con la configuración inicial del servidor. Tu objetivo será completar el archivo `index.js` para que la aplicación funcione correctamente.

## Archivos Proporcionados

- `views/login.ejs`
- `views/register.ejs`
- `views/tareas.ejs`
- `views/404.ejs`
- `index.js`

## Requerimientos

1. **Registro de Usuarios**:

   - Completar la ruta `POST /register` para manejar el registro de nuevos usuarios. Los datos del usuario deben almacenarse en la variable `usuarios`.

2. **Inicio de Sesión**:

   - Completar la ruta `POST /login` para manejar el inicio de sesión de los usuarios. Verificar las credenciales y almacenar la información del usuario en la sesión.

3. **Cierre de Sesión**:

   - Completar la ruta `POST /logout` para manejar el cierre de sesión de los usuarios. Eliminar la información del usuario de la sesión.

4. **Gestión de Tareas**:

   - Completar la ruta `POST /tareas` para manejar la creación de nuevas tareas. Solo los usuarios autenticados deben poder agregar tareas.
   - Completar la ruta `DELETE /tareas/:id` para manejar la eliminación de tareas. Solo los usuarios autenticados deben poder eliminar tareas.

5. **Protección de Rutas**:
   - Asegurarse de que solo los usuarios autenticados puedan acceder a las rutas relacionadas con las tareas (`/tareas`, `POST /tareas`, `DELETE /tareas/:id`).

## Pasos para Realizar la Ejercitación

1. **Fork del Repositorio**:

   - Haz un fork de este repositorio en tu cuenta de GitHub.

2. **Clonar el Repositorio**:

   - Clona el repositorio forkeado a tu máquina local.
     ```bash
     git clone https://github.com/tu-usuario/nombre-del-repositorio.git
     ```

3. **Instalar Dependencias**:

   - Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:
     ```bash
     npm install
     ```

4. **Completar el Código**:

   - Abre el archivo `index.js` y completa el código según los requerimientos especificados.

5. **Ejecutar la Aplicación**:

   - Ejecuta el servidor con el siguiente comando:
     ```bash
     node index.js
     ```

6. **Probar la Aplicación**:
   - Abre tu navegador y navega a `http://localhost:3000/register` para probar la funcionalidad de registro.
   - Navega a `http://localhost:3000/login` para probar la funcionalidad de inicio de sesión.
   - Navega a `http://localhost:3000/tareas` para probar la funcionalidad de gestión de tareas (solo accesible si estás autenticado).

## Detalles del Código Proporcionado

El archivo `index.js` contiene la configuración inicial del servidor y las rutas básicas. A continuación, se describe la funcionalidad de cada sección del código proporcionado:

- **Configuración de Express**:

  - Se configura EJS como el motor de vistas.
  - Se utilizan varios middlewares para manejar sesiones, cookies, y parsear cuerpos de peticiones.

- **Rutas**:
  - `GET /register`: Muestra el formulario de registro.
  - `POST /register`: Maneja el registro de usuarios (debes completar esta ruta).
  - `GET /login`: Muestra el formulario de inicio de sesión.
  - `POST /login`: Maneja el inicio de sesión de usuarios (debes completar esta ruta).
  - `POST /logout`: Maneja el cierre de sesión de usuarios (debes completar esta ruta).
  - `GET /tareas`: Muestra la lista de tareas (solo si el usuario está autenticado).
  - `POST /tareas`: Maneja la creación de nuevas tareas (debes completar esta ruta).
  - `DELETE /tareas/:id`: Maneja la eliminación de tareas (debes completar esta ruta).
  - `*`: Muestra la página 404 para cualquier ruta no definida.

## Ayuda

Si necesitas ayuda, puedes consultar la [documentación de Express](https://expressjs.com/es/) y la [documentación de EJS](https://ejs.co/). También puedes preguntar a tus compañeros o al profesor.

¡Buena suerte y diviértete programando!
