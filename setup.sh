sudo yum install git -y
sudo yum install java-17-openjdk -y
sudo yum install maven -y

export DB_PASSWORD=ufc-database-conor-2025
git clone https://github.com/FranThe3rd/UFC-Insight.git
cd UFC-Insight
cd backend
mvn clean package
nohup mvn spring-boot:run &

# Probably should use to keep it running after closing ec2 ```nohup mvn spring-boot:run &```
