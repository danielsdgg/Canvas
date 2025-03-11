package com.canvas.springboot;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import java.nio.file.Files;
import java.nio.file.Paths;

@SpringBootApplication
public class SpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootApplication.class, args);
    }

    @Bean
    public void setCredentialsFromFiles(Environment env) throws Exception {
        String usernameFile = env.getProperty("DB_USERNAME_FILE");
        String passwordFile = env.getProperty("DB_PASSWORD_FILE");
        String issuerUriFile = env.getProperty("JWT_ISSUER_URI_FILE");  


        if (usernameFile != null && passwordFile != null) {
            String username = new String(Files.readAllBytes(Paths.get(usernameFile))).trim();
            String password = new String(Files.readAllBytes(Paths.get(passwordFile))).trim();

            System.setProperty("spring.datasource.username", username);
            System.setProperty("spring.datasource.password", password);

        }
        if (issuerUriFile != null) {  
            String issuerUri = new String(Files.readAllBytes(Paths.get(issuerUriFile))).trim();
            System.setProperty("spring.security.oauth2.resourceserver.jwt.issuer-uri", issuerUri);
        }
    }
}