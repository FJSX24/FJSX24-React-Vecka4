Övning Swing Notes React edition
Instruktioner
Du ska bygga en React-applikation där man kan hantera sina anteckningar. Ens anteckningar är kopplade till ett användarnamn som man får mata in i ett inputfällt.

Antalet komponenter får ni själva välja men ni bör ha minst en för varje funktionalitet nedan (alltså minst 4 st inklusive App.jsx).

Använd er av props, useEffect och useState för att lösa uppgiften.

Ett tips innan ni börjar kod är att i FigJam börja rita upp era komponenter och hur de hänger ihop samt hur dataflödet kommer se ut alltså vilka komponenter kommer ha vilken data och vilka komponenter behöver dela på samma data. Ett exempel på hur detta kan se ut hittar du här: https://www.figma.com/file/o7AXhAfe9Nuuf3Uj7FB8cj/Movie-search-flowchart?type=whiteboard&node-id=0-1&t=YSyv6t7hjDmIw10R-0

Som användare ska man kunna göra:

Se sina anteckningar
Skapa en ny anteckning genom att mata in sitt användarnamn, titel på anteckning och texten
Uppdatera en anteckning
Ta bort en anteckning
API
Basurl: https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com

Endpoint Metod Beskrivning
/api/notes/:username GET Hämta anteckningar
/api/notes POST Spara en anteckning
/api/notes/:id PUT Ändra en anteckning
/api/notes/:id DELETE Ta bort en anteckning
Posta en ny anteckning

// Skickas med som body alltså det vi vill spara i databasen
const note = {
username: 'ada',
title: "Första anteckningen",
note: "Min första anteckning"
}

let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes", {
method: "POST",
body: JSON.stringify(note), // Gör om till ett JSON objekt
headers: {
'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
}
});
Hämta ens anteckningar

let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/ada"); // Det sista är mitt användarnamn som jag som användare matat in i något inputfält
Uppdatera en anteckning

const note = {
note: 'Detta är min uppdaterade text'
}

let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/21312dadad", {
method: "PUT",
body: JSON.stringify(note), // Gör om till ett JSON objekt
headers: {
'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
}
}); // Det sista är ett unikt id som är kopplat till en anteckning
Ta bort en anteckning

let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/21312dadad", {
method: 'DELETE'
}); // Det sista är ett unikt id som är kopplat till en anteckning
Note - objekt

Nyckel Värde Beskrivning
id String Ett genererat ID för denna anteckning.
username String Vem denna anteckning tillhör
title String Titeln på anteckningen. Max 50 tecken.
note String Själva anteckningstexten, max 200 tecken.
createdAt Date Datum när anteckningen skapades.
