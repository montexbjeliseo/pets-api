# Backend

## Variables de entorno

Para correr este proyecto necesitarás establecer algunas variables de entorno:
    
- petsapi.jwt.secret = your jwt secret
    
- petsapi.admin.email = your admin email
    
- petsapi.admin.password = your admin password 

- petsapi.datasource.url = jdbc:postgresql://yourhost:5432/your_database

- petsapi.datasource.username = your database username

- petsapi.datasource.password = your database password

## Lanzar la aplicación

```bash
mvnw spring-boot:run
```

Asegúrate de tener instalado JDK 17