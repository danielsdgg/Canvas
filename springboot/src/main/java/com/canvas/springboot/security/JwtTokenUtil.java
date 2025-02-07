package com.canvas.springboot.security;

import com.canvas.springboot.entities.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.cglib.core.internal.Function;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;
import static com.canvas.springboot.utils.Constants.*;

@Component
public class JwtTokenUtil {

    public String generateToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", user.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList()));
        System.out.println("Generated Roles in JWT: " + claims.get("roles"));

        return createToken(claims, user.getEmailAddress());
    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY_MS)) // 10 hours
                .signWith(SignatureAlgorithm.HS256, SIGNING_KEY_BYTES)
                .compact();
    }

    public String extractEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    Claims extractAllClaims(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(SIGNING_KEY_BYTES)
                .parseClaimsJws(token)
                .getBody();

        System.out.println("Extracted claims: " + claims);
        return claims;
    }

    public Boolean validateToken(String token, String username) {
        final String extractedUsername = extractEmail(token);
        return (extractedUsername.equalsIgnoreCase(username) && !isTokenExpired(token));
    }

    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    private Date getExpirationDateFromToken(String token) {
        return extractAllClaims(token).getExpiration();
    }
}
