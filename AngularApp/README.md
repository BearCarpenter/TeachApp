# Teach-app angular

# Uruchomienie aplikacji angularowej - wersja skrócona
na skróty:
odpalanie lokalnie musisz być w folderze z AngularApp i w powershell:
```
teachApp\AngularApp: docker-compose up
```
lub
```
teachApp\AngularApp: docker build -t teach-app-npm-executor .
teachApp\AngularApp: docker run --rm -it -p 4200:4200 -v ${PWD}:/app --name teach-app-angular teach-app-npm-executor
```
# Praca developerska
Praca developerska odbywa się poprzez podłączenie vscode do środka kontenera. Jest to wymagane ponieważ na systemie hosta nie istnieje katalog node_modules przez co programowanie w vscode jest prawie nie możliwe (podkreśla na czerwono większość importów z node_modules a co za tym idzie również kod).

W celu developowania należy:
1. zainstalować dodatek do vscode o nazwie 'Remote Development'
2. Odpalić kontener - patrz powyższy rozdział "Odpalenie aplikacji"
3. Kliknąć na zielony przycisk w lewym dolnym i z opcji wybrać 'Attach to Runinng Container'

To powinno odpalić nową instancję vscode podłączoną do uruchomionego kontenera

# Aktualizowanie package.json i node_modules
Odpalenie kontenera z aplikacją oparte jest o wcześniejsze przekopiowanie folderu node_modules z obrazu kontenera który już zawiera pobrane paczki. Dodanie nowego wpisu np z kolejną biblioteką do package.json nie spowoduje tego że będzie ona dostępna w kontenerze z aplikacją ponieważ w obrazie przechowującym node_modules nie zostały one zaktualiowane.
Jeśli chcesz zaaktualizować node_modules musisz zaktualizować obraz przechowujący node_modules, a więc powinieneś:
1. wyłączyć działający kontener z aplikacją.
2. zaktualizować package.json o wpisy które chcesz zmienić.
3. wykonać w linii komend:
```
docker build -t jojons/teach-app-node-modules-[branch na przykład:master]:0.1 -f Dockerfile.update.node.modules . 
```
spowoduje to zbudowanie obrazu z nowymi zaktualizowanymi node_modules, które w przyszłości będą przekopiowane w momencie odpalania kontenera z aplikacją.
3a.
sprawdź czy aplikacja działa:
```
docker build -t teach-app-npm-executor-[master/demo/starter-kit]:[wersja na przykład:4.0.1.0] -f Dockerfile.[master/demo/starter-kit] .
```
następnie sprawdź czy aplikacja działa:
```
docker run --rm -it -p 4200:4200 -v ${PWD}:/app --name teach-app-angular teach-app-npm-executor-[master/demo/starter-kit]:[wersja na przykład:4.0.1.0]

4. wypchnąć ten obraz na zdalne repozytorium dockera:
```
docker push jojons/teach-app-node-modules-[branch na przykład:master]:0.1
docker image tag jojons/teach-app-node-modules-master:0.1 jojons/teach-app-node-modules-master:latest
docker push jojons/teach-app-node-modules-master:latest
```
5. odpalić ponownie kontener

# Uruchomienie aplikacji angularowej - wersja dłuższa
W celu odpalenia aplikacji w linii komend w folderze z aplikacją należy wykonać:
```
docker-compose up
# W rożnych sytuacjach może być zasadne użycie flagi --build
```
Plik docker-compose.yaml na bazie pliku Dockerfile buduje obraz umożliwiający odpalenie lokalnie aplikacji.

Na początku pobiera obraz wewnątrz którego znajdują się pobrane node_modules:
```
jojons/ngx-admin-modules:starter
```
następnie przekopiowuje z niego ten folder do kolejnego obrazu który jest w stanie uruchamiać naszą aplikację angularową. Sam kod aplikacji jest podmontowany do odpalonego kontenera dzięki czemu można dokonywać zmian w kodzie z pominięciem środowiska aplikacji. Po odpaleniu kontenera w katalogu z aplikacją pojawi się link/skrót który wewnątrz kontenera odwołuje się do prawdziwego folderu node_modules. 
Aplikacja jest hostowana na porcie 4200.

# Kontekst/historia utworzenia projektu
Aplikacja teach-app oparta jest o open sourcowy projekt ngx-admin:
```
https://github.com/akveo/ngx-admin
```
W powyższym repozytorium ngx-admin znajdują się dwa istotne z punktu widzenia aplikacji teach-app branche: 
- master - zawierający aplikację demo z wieloma komponentami i ich przykładowym wykorzystaniem
- starter - zawierający czysty template do którego można dokładać dowolne komponenty 

Na bazie powyższego repozytorium został utworzony fork 
```
https://github.com/BearCarpenter/ngx-admin
```
a w nim dwa analogiczne branche:
- feature/docker-master 
- feature/docker-starter

wychodzą one z w.w. branchy master i starter do których dodano pliki umożliwiające uruchomienie aplikacji ngx-admin w dockerze

W zdalnym repozytorium dockerowym:
```
https://hub.docker.com/u/jojons
```
znajdują się obrazy utworzone na bazie plików z powyższych branchy, które następnie służą do uruchamiania kontenera na twoim komputerze:
W zdalnym repozytorium znajdują się obrazy:
- jojons/ngx-admin-modules:starter
- jojons/ngx-admin-modules:master

Są to obrazy, które poprostu mają przechowywać spójną wersję node-modules oraz package-lock.json, od których zależy kolejne odpalenie aplikacji. 
