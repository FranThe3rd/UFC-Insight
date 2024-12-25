sudo yum install git -y
sudo yum install java-17-openjdk -y
sudo yum install maven -y

export DB_PASSWORD=password

git clone https://github.com/FranThe3rd/UFC-Insight.git
cd UFC-Insight
cd backend
mvn clean package
mvn spring-boot:run