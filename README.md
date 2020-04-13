## Uruchomienie aplikacji
Jeśli chcesz lokalnie uruchomić bazę danych, restApi, angulara i nginxProxy  wykonaj:
```
docker-compose up
ewentualnie w przypadku konieczności ponownego przebudowania obrazów:
docker-compose up --build
```
jeśli chcesz uruchomić samą bazę danych:
```
docker-compose -f .\docker-copmose.db.yaml up 
```
## Dostępność serwisów po uruchomieniu
aplikacja angularowa powinna być dostępna pod adresem:
```
localhost:4200
```
aplikacja .net powinna być dostępna pod adresem:
```
localhost:8080
```
serwer bazodanowy jest wystawiona na porcie:
```
localhost:5432
```
nginx-proxy agreguje powyższe serwisy pod jednym portem i przekierowuje na nie ruch.
Jest dostępna pod adresem:
```
localhost lub localhost:80
oraz
localhost:443
```
Wykonanie takiego requestu w przeglądarce powinno przekierować użytkownika do serwisu z aplikcją angularową.

## Praca z bazą danych
Jak wspomniano wcześniej serwer bazodanowy wystawia port 5432. Możliwe jest podłączenie się do niej poprzez program typu DBeaver lub psAdmin poprzez wpisanie:
```
Host: localhost
Port: 5432
Database: postgres
User: postgres
Password: docker

Settings: zaznacz Show all databases
```
## Kończenie pracy
Żeby zakończyć pracę z uruchomionymi serwisami w cmd naciśnij
```
CTRL+C
```
Spowoduje to wysłanie do procesów uruchomionych w kontenerach sygnału Gracefull Stop i kontenery zostaną ZASTOPOWANE
w związku z tym kontenery będą ponownie możliwe do wystartowania ze stanem sprzed ich zastopowania wykonując ponownie docker-compose up zastopowane procesy powinny się ponownie uruchomić i aplikacje powinny być znowu dostępne pod swoimi adresami. Stan zastopowania kontenerów można sprawdzić wykonując:
```
docker ps -a
```
W momencie kiedy pierwszy raz naciśniesz CTRL+C i zostanie wysłany Gracefull Stop i ponownie naciśniesz CTRL+C do procesów zostanie wysłany sygnal Kill.

Jeśli chcesz całkowicie usunąć kontenery wykonaj:
```
docker-compose down
lub 
docker rm -f $(docker ps -aq)
```

W celu uruchomienia tylko kontenera z aplikacją angularową odsyłam do AngularApp/README.md

## Dostęp do API
Do api można wykonywać requesty przy użyciu wtyczki do vsCode o nazwie RestClient.</br>
Bazuje ona na Linuxowym narzędziu curl do wysyłania requestów z terminala. Bazuje również na plikach z rozszerzeniem .http lub .rest. </br>
W naszym repozytorium znajduje się plik 
```
teach-api.http
```
w którym będziemy definiować requesty, które pozwolą na interakcję z aplikacjami typu Rest.</br> 
Ten plik powinien ułatwiać przejście określonego flow w RestApi np.:</br>
Rejestracja konta-> Logownie -> Dostęp do określonych zasobów.


