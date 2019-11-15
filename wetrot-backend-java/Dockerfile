FROM maven:3.6.2-jdk-14
RUN mkdir /temp
ADD * /temp/
WORKDIR /temp
RUN mvn clean package -Dmaven.test.skip=true


# stage 1 : build runtime container
FROM mcr.microsoft.com/java/jre:8u192-zulu-alpine
EXPOSE 8080
WORKDIR /root/
COPY --from=0 /temp/target/*.jar app.jar
CMD ["java", "-jar", "/root/app.jar"]
