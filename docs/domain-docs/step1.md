**Pierwszy etap aplikacji TeachApp**

W pierwszym etapie zaplanowane zostało zaimplementowanie podstawowych funkcjonalności aplikacji wspomagającej pracę korepetytorów. Pierwszy etap będzie zakładał użytkowanie aplikacji jedynie przez nauczycieli (adminiastratorów).

Będą to:

1. Wyświetlenie informacji o wszystkich uczniach
2. Dodanie informacji o uczniu
3. Dodanie informacji o lekcjach ucznia
4. Przełożenie terminu lekcji
5. Kalendarz nauczyciela
6. Logowanie oraz rejestrację administratora

##Wyświetlenie informacji o wszystkich uczniach
Zostaną pobrane wyłącznie informacje o uczniach przyporządkowanych do zalogowanego usera (admina).
####Schemat DTO 
![GetStudentsDto](/img/domain-docs/getStudents/getStudentsResDto.PNG)

####Pobieranie regularności ucznia
Regularność uczęszczania ucznia na zajęcia będzie wyznaczana poniższym algorytmem:
![ChooseRegularity](/img/domain-docs/getStudents/chooseRegularity.PNG)

####Makiety
![GetStudentsMockup](/img/domain-docs/getStudents/getStudentsMockup.jpg)

##Dodanie informacji o uczniu
####Schemat DTO 
![AddStudentDto](/img/domain-docs/addStudent/AddStudentDto.png)
<br>
eduLevel – Dictionary_01
<br>
subject – Dictionary_02
<br>
periodOption: 1 – ones per week, 2 – ones per 2 weeks
####Diagram aktywności
![AddStudentActivityDiagram](/img/domain-docs/addStudent/AddStudentActivityDiagram.PNG)
####Tablica walidacyjna
| Tablica walidacyjna|
|-------------------------------------------------------------------------------------------------------------------------------------|
| lastName -> required    |

####Makiety
![AddStudentMockup](/img/domain-docs/addStudent/AddStudentMockup.PNG)

##Edycja informacji o uczniu

Edycja ucznia odbędzie się w taki sam sposób jak jego dodanie, z tym że w requescie będzie przekazane uuId. Podane informacje o uczniu będą aktualizowane.

##Dodanie informacji o lekcjach ucznia
Dodanie informacji o lekcjach ucznia będzie wykonywane z poziomu dodania/edycji ucznia. Będzie to oddzielny request, który zostanie wywołany po sprawdzeniu, czy AddLessonReqDto != null.

####Schemat DTO
![AddStudentDto](/img/domain-docs/addLesson/DodajLekcjeDto.png)

####Tablica walidacyjna
| Tablica walidacyjna|
|-------------------------------------------------------------------------------------------------------------------------------------|
|lengthInMinutes -> required;   Price -> required;   startDate -> required;   subject -> required |
| If (periodReqDto != null) {periodOption -> required;   dateTo -> required   } |
|If ((startDate AFTER anyLessonStartDateThisUser) AND ((startDate BEFORE anyLessonStartDateThisUser + anyLessonLengthThisUser)))|
|If ((startDate + lengthInMinutes AFTER anyLessonStartDateThisUser) AND ((startDate + lengthInMinutes BEFORE anyLessonStartDateThisUser + anyLessonLengthThisUser)))|

W dwóch ostatnich warunkach chodzi o to, że nauczyciel nie może dodać lekcji, jeżeli w tym terminie ma już inną lekcję.

####Makiety
![AddStudentDto](/img/domain-docs/addLesson/AddLessonMockup.PNG)


Wybranie daty lekcji:
1. Wybieramy dzień, w którym chcemy, aby odbyła się lekcja.
2. Pojawia się okno modalne, które zawiera lekcje nauczyciela danego dnia.
3. Z poziomu okna modalnego wybieramy godzinę lekcji.

##Przełożenie terminu lekcji

Poprzez przełożenie terminu lekcji rozumiemy zmianę daty pojedynczej lekcji (z możliwością zmiany jej długości). Wszystkie inne atrybuty informacji o lekcji zostaną zachowane. Przy przekładaniu lekcji będzie pojawiało się okno modalne z kalendarzem, który będzie pokazywał wszystkie lekcje zalogowanego nauczyciela. Aktywna (możliwa do edycji) będzie tylko lekcja którą przekładamy.

####Tablica walidacyjna
|If ((startDate AFTER anyLessonStartDateThisUser) AND ((startDate BEFORE anyLessonStartDateThisUser + anyLessonLengthThisUser)))|
|If ((startDate + lengthInMinutes AFTER anyLessonStartDateThisUser) AND ((startDate + lengthInMinutes BEFORE anyLessonStartDateThisUser + anyLessonLengthThisUser)))|

W dwóch ostatnich warunkach chodzi o to, że nauczyciel nie może przełożyć lekcji lekcji, jeżeli w tym terminie ma już inną lekcję.

##Kalendarz nauczyciela

Kalendarz ucznia będzie umożliwiał wykonywanie czynności CRUD na informacjach o lekcjach przypisanych do zalogowanego nauczyciela.

####Makiety
![DayCalendarMockup](/img/domain-docs/calendar/calendarDayMockup.jpg)
![WeekCalendarMockup](/img/domain-docs/calendar/calendarWeekMockup.jpg)

###Logowanie i rejestracja administratora