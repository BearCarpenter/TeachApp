FROM mcr.microsoft.com/dotnet/core/sdk:3.0.101-buster

EXPOSE 8080

WORKDIR /app

COPY . /app

RUN dotnet restore && dotnet build

ENTRYPOINT dotnet run -p frontlogger/frontlogger.csproj
