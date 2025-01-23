Medelnivå: Övning 1 – Nedräkningstimer

Mål: Använda useState och useEffect för att hantera tid och effekter.

Instruktioner:

Skapa en React-komponent som implementerar en nedräkningstimer:
Använd en input för att låta användaren ställa in antalet sekunder för nedräkningen.
Starta nedräkningen med en knapp.
När tiden når noll, visa ett meddelande: "Tiden är slut!".
Använd useEffect för att hantera nedräkningen med setInterval.
Utmaning:

Lägg till en "Pausa" och "Återställ" funktion som kan stoppa eller återställa timern till ursprungsvärdet.

<!-- ------------------------------------------- -->
<!-- ------------------------------------------- -->
<!-- ------------------------------------------- -->

Medelnivå: Övning 2 – Slumpmässiga färger

Mål: Förstå hur useState och useEffect kan användas tillsammans för att uppdatera komponentens tillstånd.

Instruktioner:

Skapa en React-komponent som visar en ruta med en bakgrundsfärg.
Lägg till en knapp som, när den klickas, ändrar rutan till en slumpmässig färg.
Använd useEffect för att logga den nya färgen i konsolen varje gång bakgrundsfärgen uppdateras.
Utmaning:

Lägg till en funktion som gör att färgen ändras automatiskt varannan sekund, och låt användaren starta och stoppa detta med en knapp.

<!-- ------------------------------------------- -->
<!-- ------------------------------------------- -->
<!-- ------------------------------------------- -->

Avancerad nivå: Övning 3 – Fetch-data och hantering av effekter

Mål: Använda useEffect för att hämta data från ett API och hantera asynkrona operationer.

Instruktioner:

Skapa en React-komponent som hämtar och visar data från ett API, exempelvis JSONPlaceholder (t.ex. lista av användare eller inlägg).
Lägg till en knapp som uppdaterar listan med nya data.
Använd useEffect för att hämta data när komponenten laddas första gången.
Visa en "Laddar..."-text tills datan är hämtad.
Utmaning:

Implementera felhantering som visar ett felmeddelande om API-anropet misslyckas.

<!-- ------------------------------------------- -->
<!-- ------------------------------------------- -->
<!-- ------------------------------------------- -->

Avancerad nivå: Övning 4 – Hantera flera state-variabler och effekter

Mål: Kombinera flera state-variabler och effekter för att skapa en interaktiv app.

Instruktioner:

Skapa en väderapp (fiktiv) där användaren kan:
Ange en stad i en input.
Klicka på en knapp för att "hämta" vädret för staden (skapa en hårdkodad lista med väderdata).
Visa information om temperatur, vind och luftfuktighet för den valda staden.
Använd flera useState för att hantera:
Vald stad.
Väderdata.
Laddningstillstånd (loading state).
Utmaning:

Lägg till en "Favorit"-funktion som låter användaren spara och visa en lista över sina favoritstäder.
