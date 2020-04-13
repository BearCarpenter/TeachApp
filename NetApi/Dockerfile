FROM mcr.microsoft.com/dotnet/core/sdk:3.1.100 as sdk

EXPOSE 8080

WORKDIR /app

COPY . /app

RUN dotnet restore

RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1.0 AS runtime

WORKDIR /app

COPY --from=sdk /app/out .

ENTRYPOINT ["dotnet", "TeachApi.dll"]
