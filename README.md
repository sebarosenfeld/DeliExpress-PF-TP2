# 🚴‍♂️ DeliExpress
  
  ### Proyecto final de Taller de Programación 2
  
  ---
  
  ## 👨‍💻 Integrantes
  
  - Federico Wainstein  
  - Fernando Sánchez  
  - Sebastián Rosenfeld  
  - Mateo Alonso De Armio  
  
  ---
  
  ## ✅ Requisitos mínimos
  
  - Mínimo de **5 colecciones**.
  - **Credenciales individuales** por integrante.
  - Para cada colección, debe haber al menos **4 endpoints**:  
    - Alta (POST)  
    - Baja (DELETE)  
    - Modificación (PUT/PATCH)  
    - Lectura (GET)
  
  ---
  
  ## 📜 Reglas de negocio
  
  La lógica y las reglas de negocio aplicadas sobre este proyecto se encuentran detalladas en el siguiente documento:
  
  ➡️ [📘 Reglas de negocio](docs/reglas_de_negocio.md)
  
  ---
  
  ## 🧱 Estructura y relaciones entre entidades
  
  La estructura de las entidades y las relaciones que existen entre ellas se encuentran detalladas en el siguiente documento:
  
  ➡️ [🗂️ Estructura y relaciones entre entidades](docs/estructura_y_relaciones_entre_entidades.md)
  
  ---
  
  ## ⚙️ Cómo utilizar el proyecto
  
  Después de clonar el repositorio, se debe crear un archivo `.env` el cual tendra la variable de entorno correspondiente al puerto que utilizará _Express_  para levantar el servidor.

  ### 📄 Plantilla para archivo .env
    ```
    PORT=3000
    MONGO_URI= //Tus credenciales de conexion a al BD
    ```

  Como el proyecto requiere que cada uno de los participantes utilice sus propias credenciales en la base de datos (MongoDB) se debe agregar el archivo `.env` al `.gitignore`. Esto evitará que las credenciales se sobreescriban cada vez que un integrante realiza un _push_ al repositorio.

  ---
  
  ### 🏃‍♂️‍➡️ Correr la aplicación
  Instalá las dependencias necesarias con el siguiente comando:
  
  ```bash
  npm install
  ```
  
  Para ejecutar la aplicación en modo desarrollo (utilizando `nodemon`):
  
  ```bash
  npm run dev
  ```
  
  Para ejecutar el servidor utilizando unicamente Node:
  
  ```bash
  npm start
  ```
  ---

### 🌱 Ramas del proyecto
El proyecto se organiza en dos ramas principales:

- **main**: contiene los cambios permanentes y funcionales del proyecto.

- **develop**: es la rama de integración donde se suben los cambios de los integrantes.

Cada integrante debe crear su propia rama personal a partir de develop, donde trabajará en los issues asignados.

### 🔁 Flujo de trabajo sugerido
1. Crear una rama personal desde develop:

```bash
git checkout develop
git checkout -b nombre-rama
```
2. Desarrollar la funcionalidad correspondiente.

3. Hacer **merge** a `develop` para integrar y probar con el resto de cambios.

4. Cuando todo funcione correctamente en `develop`, hacer **merge** a `main`.

  ---
  
  ## 🛠️ Agregar Issues
  
  Para agregar nuevos issues al proyecto, es necesario utilizar los **labels** correspondientes a:
  
  - La **entidad** sobre la que se está trabajando.
  - El **tipo de archivo** afectado (por ejemplo: controlador, modelo, router).
  - Si corresponde a una **regla de negocio**.
  - Si requiere ser **documentado**.
  
  ### 📌 Ejemplo:
  
  Si se quiere agregar una nueva regla de negocio que afecte el funcionamiento de la entidad `Pedido`, los labels sugeridos serían:
  
  - `pedido`  
  - `controlador`  
  - `regla de negocio`  
  - `documentación`
  
  
    ![alt text](img/ejemploIssue.png)
