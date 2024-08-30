package com.task.manager.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/login")
public class AuthController {

    // @GetMapping("/protected")
    // public ResponseEntity<String>
    // getProtectedResource(@RequestHeader("Authorization") String token) {

    // Claims claims = JWTService.parseToken(token.replace("Bearer", ""));
    // String username = claims.getSubject();

    // return ResponseEntity.ok("Hello " + username);
    // }
}
