FROM eclipse-temurin:17-jdk-jammy

LABEL authors="no-country-c16-34-m-java"

WORKDIR /app

# Copy the source code
COPY src ./src
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Build the application
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Run the application
CMD ["java", "-jar", "target/pets-backend-0.0.1-SNAPSHOT.jar"]