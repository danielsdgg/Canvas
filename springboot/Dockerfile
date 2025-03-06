# Use Maven with Java 21 for building
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copy source files and dependencies first to improve caching
COPY pom.xml .

COPY src ./src

# Build the Spring Boot app
RUN mvn clean package -DskipTests

# Use Java 21 to run the application
FROM eclipse-temurin:21-jdk AS runtime

WORKDIR /app

# Copy the built .jar file
COPY --from=build /app/target/springboot-0.0.1-SNAPSHOT.jar /app/backend.jar

# Expose the Spring Boot default port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "/app/backend.jar"]
