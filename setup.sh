#!/bin/bash

# Update and install necessary dependencies
echo "Updating package list and installing required packages..."
sudo apt-get update -y
sudo apt-get install -y git openjdk-11-jdk maven

# Verify installations
echo "Verifying Maven installation..."
mvn -v
echo "Verifying Java installation..."
java -version

# Clone the repository
echo "Cloning the repository..."
git clone https://github.com/FranThe3rd/UFC-Insight.git

# Navigate to the backend directory
cd UFC-Insight/backend || { echo "Backend directory not found."; exit 1; }

# Build the project with Maven
echo "Building the project with Maven..."
./mvnw clean package || { echo "Maven build failed."; exit 1; }

# Run the Spring Boot application
echo "Running the Spring Boot application..."
./mvnw spring-boot:run
