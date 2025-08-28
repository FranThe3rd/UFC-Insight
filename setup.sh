#!/bin/bash

# Install prerequisites
sudo yum update -y
sudo yum install git -y
sudo yum install java-17-openjdk -y
sudo yum install maven -y

# Set environment variable for DB password
export DB_PASSWORD=ufc-database-conor-2025

# Clone your repo (if not already cloned)
if [ ! -d "UFC-Insight" ]; then
    git clone https://github.com/FranThe3rd/UFC-Insight.git
fi

cd UFC-Insight/backend

# Clean and build the project
mvn clean package

# Kill any process currently using port 8080
PID=$(sudo lsof -t -i :8080)
if [ ! -z "$PID" ]; then
    echo "Killing existing process on port 8080: $PID"
    sudo kill -9 $PID
fi

# Run Spring Boot in the background with logs
nohup mvn spring-boot:run > nohup.out 2>&1 &

echo "Spring Boot backend is starting... Logs can be viewed with: tail -f nohup.out"
