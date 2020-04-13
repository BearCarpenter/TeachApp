FROM mcr.microsoft.com/dotnet/core/sdk:3.1.100 as sdk

EXPOSE 8080

WORKDIR /app

COPY . /app

RUN dotnet restore

RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1.0 AS runtime

WORKDIR /app

COPY --from=sdk /app/out .

ENTRYPOINT [ -f /app/settings/appsettings.json ] || mv /app/appsettings.json  /app/settings/appsettings.json \ 
&& ln -sf /app/settings/appsettings.json . \
&& dotnet TeachApi.dll