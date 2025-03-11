package com.canvas.springboot.config;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class SecretsLoader {

    @PostConstruct
    public void loadSecrets() throws Exception {
        // Docker Secrets paths
        String usernameFile = "/run/secrets/db_username";
        String passwordFile = "/run/secrets/db_password";
        String hostFile = "/run/secrets/db_host";
        String issuerUriFile = "/run/secrets/jwt_issuer_uri";

        // Read DB credentials from secrets and set as environment variables
        Path usernamePath = Paths.get(usernameFile);
        Path passwordPath = Paths.get(passwordFile);
        Path hostPath = Paths.get(hostFile);
        Path uriPath = Paths.get(issuerUriFile);

        if (Files.exists(usernamePath) && Files.exists(passwordPath)) {
            String username = new String(Files.readAllBytes(usernamePath)).trim();
            String password = new String(Files.readAllBytes(passwordPath)).trim();

            System.setProperty("DB_USERNAME", username);
            System.setProperty("DB_PASSWORD", password);
        }

        // Read and set DB Host
        if (Files.exists(hostPath)) {
            String dbHost = new String(Files.readAllBytes(hostPath)).trim();
            System.setProperty("DB_HOST", dbHost);
        }

        // Read and set JWT Issuer URI
        if (Files.exists(uriPath)) {
            String issuerUri = new String(Files.readAllBytes(uriPath)).trim();
            System.setProperty("JWT_ISSUER_URI", issuerUri);
        }
    }
}
