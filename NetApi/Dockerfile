FROM mcr.microsoft.com/dotnet/core/sdk:3.1.100-buster

EXPOSE 8080

WORKDIR /app

COPY . /app

RUN dotnet restore && dotnet build

ENTRYPOINT dotnet run -p src/UI/TeachApi/TeachApi.csproj
