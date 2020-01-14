## Nowy projekt mkdocs
Tworzenie nowego projektu:

1. wejdź do folderu głównego repozytorium gita do którego chcesz dodać dokumentację.
2. wywołaj w linii komend(co spowoduje zaiinicjowanie projektu i umieści w twoim repozytorium plik konfiguracyjny mkdocs.yml oraz folder docs do którego będziesz dodawał dokumentację):
```
docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material:4.6.0 new .
```
## Serwowanie lokalnie
Żeby serwować aplikację lokalnie wywołaj:
```
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material:4.6.0
```
następnie wejdź pod:
```
http://localhost:8000
żeby zakończyć podgląd aplikacji hostującej w terminalu naciśnij CTRL+C
w powyższej komendzie --rm oznacza, że jak wyjdzie się z podglądu to kontener automatycznie się usunie.
```
Twórz dokumentację, dodawaj pliki itd i oglądaj zmiany na bierząco

## Generowanie dokumentacji
Po wykonanej pracy możesz wygenerować statyczne pliki html i wrzucić je na serwer 
```
docker run --rm -it -p 8000 -v ${PWD}:/docs squidfunk/mkdocs-material:4.6.0 build
```
zostanie utworzony folder site a w nim wygenerowane pliki statyczne. Dodaj do gitignore ten folder żeby go nie śledzić:
```
# .gitignore
site/
```
## Czerp inspiracje!
Pisząc dokumentację można podglądać rzeczy znalezione w tej dokumentacji:
```
https://www.wappalyzer.com/technologies/mkdocs
```
```
https://mkdocs.readthedocs.io/en/stable/
czyli w tym repozytorium:
https://github.com/mkdocs/mkdocs/
```
oraz:
```
https://docs.readthedocs.io/en/stable/intro/getting-started-with-mkdocs.html
czyli w tym repozytorium:
https://github.com/readthedocs/readthedocs.org
```

strona projektu:
```
https://github.com/mkdocs/mkdocs
```
dokumentacja:
```
https://www.mkdocs.org/
```
składnia:
```
https://www.markdownguide.org/extended-syntax/
```
generowanie tabel:
```
https://www.tablesgenerator.com/markdown_tables#
```