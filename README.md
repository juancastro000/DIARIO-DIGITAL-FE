# 📝 Digital Diary Frontend

🚀 **Aplicación web de diario digital** construida con React, Context API y Hooks.

---

## 📖 Descripción

Digital Diary Frontend es la interfaz de usuario de la aplicación de diario personal **Digital Diary**, que permite a los usuarios:
- **Registrarse** y **autenticarse** mediante JWT.
- **Crear**, **editar**, **eliminar** y **listar** entradas de diario.
- **Filtrar** entradas por estado de ánimo, productividad, etiquetas y rango de fechas.
- Visualizar **estadísticas** de sus entradas con gráficos interactivos.

---

## 🛠️ Tech Stack

- **JavaScript (ES6+)**, **React 18**  
- **Context API** para estado global de autenticación  
- **React Hooks** para lógica modular y reutilizable  
- **React Router v6** para enrutamiento SPA  
- **Fetch API** para llamadas HTTP  
- **Recharts** para gráficos de estadísticas  


---

## ⚙️ Perfiles de Configuración

### Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
REACT_APP_API_URL=https://tu-api.com/api
```

> **Nota**: React solo expone variables que comienzan con `REACT_APP_`.

---

## 🔷 data.sql de Ejemplo (Backend)

```sql
-- Tags
INSERT INTO tags (id, name) VALUES
  (1, 'PERSONAL'), (2, 'TRABAJO'), (3, 'SALUD'),
  (4, 'OCIO'), (5, 'FINANZAS'), (6, 'APRENDIZAJE'),
  (7, 'FAMILIA'), (8, 'DEPORTE');

-- Entradas de ejemplo
INSERT INTO entries (id_entry, content, date, mood, productivity, user_id) VALUES
  (1,'Mi primera entrada','2025-04-01 08:00','Feliz','Alta',1),
  (2,'Proyecto en marcha','2025-04-02 09:00','Neutral','Media',1),
  (3,'Ejercicio matutino','2025-04-03 10:00','Emocionado','Alta',1);
```

---

## 📑 Endpoints de la API

Base: `REACT_APP_API_URL` (/api por defecto)

| Método | Ruta               | Descripción                        |
|--------|--------------------|------------------------------------|
| POST   | `/auth/register`   | Registrar usuario                  |
| POST   | `/auth/login`      | Login → JWT                        |
| GET    | `/entry`           | Listar entradas (JWT)              |
| POST   | `/entry`           | Crear entrada (JWT)                |
| PUT    | `/entry/{id}`      | Actualizar entrada (JWT)           |
| DELETE | `/entry/{id}`      | Eliminar entrada (JWT)             |

---

## 🔒 Seguridad JWT

- El token JWT se almacena en **cookies** (HttpOnly, Secure).  
- En cada petición protegida, se envía en el header `Authorization: Bearer <token>`.  
- El `AuthContext` maneja la lógica de login/logout y almacenamiento del token.

---

## 🚀 Comandos de Ejecución y Pruebas

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm start

# Ejecutar tests
npm test

# Generar build para producción
npm run build
```

---

