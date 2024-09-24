# Ecommerce Website

## How to Execute:

    Run the SQL Script

   Open the SQL terminal and execute the SQL script provided, skipping the last part for now.

    Start the Spring Boot Application

   Navigate to the backend folder and start the Spring Boot application using the required commands (e.g., mvn spring-boot:run).

    Launch the Frontend

   Open the index.html file in your preferred browser to launch the website frontend.

## Overview:

This project is a fully scalable *Ecommerce Website* developed using a combination of technologies:

    Frontend: HTML, CSS, JavaScript
    Backend: Spring Boot (Java)
    Database: MySQL


### Key Features:

    Real-Time Updates: By updating the database, changes are automatically reflected on the website, without requiring any modifications to the frontend. This is achieved through efficient data binding between the backend and frontend.
    Scalable and Modular: The website architecture is built with scalability in mind. The backend API is designed to handle multiple requests concurrently, providing high performance for large-scale data handling.
    REST API: The Spring Boot application provides a REST API to retrieve and update data, which the frontend fetches dynamically using JavaScript.
    Remote Hosting Capability: This API can be hosted on a remote server to run the website beyond a local environment, making deployment easy for cloud-based solutions.


## Technologies Used:

    HTML, CSS, JavaScript: Core web technologies for designing a responsive and interactive frontend.
    Spring Boot: For building a powerful and robust backend with Java, handling business logic and API endpoints.
    MySQL: Relational database management for data storage and retrieval.
    RESTful API: To enable communication between the frontend and backend efficiently.

  
## Setup Instructions:

    Backend Setup:

   - Ensure that MySQL is installed and running.
   - Create a database using the provided SQL script (make sure to modify the necessary configurations like username and password in the application.properties file).
   - Start the Spring Boot application using Maven or your preferred build tool.

    Frontend Setup:

   - Simply open the index.html file in a browser for local testing.
   - If hosting, move the files to a web server and configure the API endpoint URLs accordingly.




