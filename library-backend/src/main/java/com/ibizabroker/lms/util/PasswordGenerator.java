package com.ibizabroker.lms.util; // Ensure this matches the folder path

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordGenerator {    
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        // IMPORTANT: Change these to the plain text passwords you want to use
        String adminPassword = "java"; // This is the password you'll type in the login form
        String userPassword = "vamsi";   // This is another password you'll type

        String encodedAdminPassword = encoder.encode(adminPassword);
        String encodedUserPassword = encoder.encode(userPassword);

        System.out.println("Encoded password for '" + adminPassword + "': " + encodedAdminPassword);
        System.out.println("Encoded password for '" + userPassword + "': " + encodedUserPassword);
    }
}