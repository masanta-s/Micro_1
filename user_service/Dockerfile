FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY target/user_service-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 9001
ENTRYPOINT ["java","-jar","/app/app.jar"]