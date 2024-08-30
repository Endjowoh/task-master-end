package com.task.manager.service;

import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTService {

    private String key = "";

    public JWTService() {

        try {

            KeyGenerator keyGen = KeyGenerator.getInstance("HmacSHA256");

            SecretKey keyGenerated = keyGen.generateKey();
            key = Base64.getEncoder().encodeToString(keyGenerated.getEncoded());
            System.out.println(key);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    public String generateToken(String username) {

        Map<String, Object> claims = new HashMap<>();

        return Jwts.builder()
                .addClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 60))
                .signWith(getKey())
                .compact();

    }

    private Key getKey() {

        byte[] keyToBytes = Decoders.BASE64.decode(key);
        return Keys.hmacShaKeyFor(keyToBytes);
    }

    public String extractUsername(String jwt) {
        Claims claims = getClaims(jwt);

        return claims.getSubject();
    }

    public Claims getClaims(String jwt) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(jwt)
                .getBody();

        return claims;
    }

    public boolean isTokenValid(String jwt) {
        Claims claims = getClaims(jwt);

        return claims.getExpiration().after(Date.from(Instant.now()));
    }

}
