### Hvordan kjøre prosjektet
0. Last ned prosjektet lokalt, enten ved hjelp av Git eller manuelt i .zip format.
1. Bruk NTNU VPN dersom du ikke er på eduroam/NTNU gjest nettverk
2. Naviger inn i backend-mappen og kjør `npm install` og deretter `npm start`
3. Verifiser at backend nå kjører på port 3000 og at du får opp "Connected to DB" i terminalen
4. Naviger inn i frontend-mappen og kjør `npm install` og deretter `npm start`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# IT2810 - Prosjekt 3: Filmdatabase


## Oppsett av database og REST API

Vi valgte å bruke mongoDB til å sette opp databasen vår da det er enkelt å komme i gang med og er brukt i stort omfang i faget. Vi installerte og satte det opp på den virtuelle maskinen, og lastet deretter opp dataen til de 119 filmene i JSON format. Vi gjorde dette i MongoDB Compass. For å endre typen til alle eksemplarene av noen av feltene (som MongoDB Compass identifiserte feil og ikke lot oss endre annet enn enkeltvis) brukte vi Studio 3T.

Vi satte deretter opp et REST API ved hjelp av Mongoose og Express. I REST APIet fokuserte vi på å ha fornuftige URLer, samt at så mye som mulig av funksjonaliteten (filtrering, sortering, pagination og søk) ble tatt hånd om i backenden, fremfor frontenden. Dette både grunnet effektivitet (begrense datastrømmen så langt oppstrøms som mulig) og grunnet forenkling av frontend-koden iht god kodepraksis. Vi satte opp en rekke ulike GET Request Handlers for å hente filmer basert på blant annet søk, sjanger og id. I tillegg satte vi opp en PUT Request Handler for å oppdatere filmdata. Denne brukes til å gi funksjonalitet for at brukeren skal kunne sette rating selv på filmene. Vi satte også opp en POST Request Handler for å legge til nye filmer i databasen manuelt, men denne trengte vi ikke. For å sende parametre til Request Handlerne brukte vi request parametre. Dette fungerte greit, utenom at tomme parameterverdier ga en del problemer. Vi gikk derfor over til å sende ‘*’ som parameterverdi fra frontenden, når parameteren ikke var satt.


## State management
Vi valgte opprinnelig å bruke Redux til state management da dette brukes mye i arbeidslivet, og vi ønsket å lære oss det. Vi brukte mye tid på å sette oss inn i det og sette det opp, men innså etterhvert at det ble mer jobb enn nødvendig, og dårlig tidsbruk i forhold til hva som gjensto på prosjektet. Vi bestemte oss derfor for å heller bruke MobX. Dette fordi MobX er raskere å implementere og fordi Redux i utgangspunktet er tiltenkt større prosjekter og vi ikke nødvendigvis ville fått bruk for fordelene det gir.

For MobX implementasjonen satte vi opp en store som inneholdt states vi trengte til frontenden. Disse er deklarert som @observable, og vi bruker @action metoder for å endre disse. De ulike komponentene i frontenden bruker store som state handler, ved å re-rendre ettersom states blir oppdatert og ved å endre states med @action metodene.


## Oppdeling av komponenter
Vi har delt siden opp i naturlige komponenter som skiller de ulike elementene fra hverandre og som tilrettelegger for gjenbruk. Hver av filmene presenteres ved en MovieBox-komponenten, og alle disse MovieBox-ene ligger inni MovieList-komponenten. For hver film som hentes fra databasen genereres det altså en MovieBox som presenterer filmen. Trykker man på en spesifikk MovieBox blir denne filmen presentert i mer detalj i komponenten MovieInfo. SearchBar og Title er også separert som egne komponenter.
Dropdown funksjonaliteten kommer til syne gjennom filter- og sort-knappene,som kan finnes i en egen komponent mappe.  De to komponentene blir likevel rendret sammen med SearchBar. Material UI er et populært React-rammeverk som vi så det passelig å anvende for design av og funksjonalitet for spesifikke komponenter. Det gjør jobben med å designe komponenter, spesielt med tanke på CSS-kode, mye enklere. Bruken kan blant annet ses både ved Filter- og Sort-knappene rettet mot valg av relevante filmer. Vi lagde også en egen Paginater-komponent for å legge til funksjonalitet for blaing, slik at alle filmene ikke blir vist på samme side. Til dette brukte vi Material-UI sin Paginate-komponent. Komponenten er i utgangspunktet kun en fasade, da komponenten kun setter page-variabelen (staten) i store, som MovieList deretter bruker for å kalle REST APIet med korrekte parametre. 


## Design og layout
Vi ønsket et pent og oversiktlig design som var lett i bruk. Før vi satte i gang med kodingen brukte vi Figma til å fremstille designet vi ønsket å implementere. For å gjøre siden responsen og å holde side-elementene i forhold til hverandre har vi brukt grid rundt søkebaren, MovieBox’ene og MovieList’en. Vi har også brukt et grid inni søkebaren og MovieBox’ene for å plassere innholdet i dem slik vi ønsket. Vi har også oppgitt størrelser i prosent og brukt media queries for å sørge for responsivitet.


## Testing
For prosjektet skulle gruppen implementere automatisert end-to-end testing og minimum en type enhetstesting som er aktuell for en react applikasjon. End-to-end testing ble implementert gjennom Cypress som tillater testing av automatiserte script. Cypress følger med en egen terminal som tester browser, som har blitt lastet ned. De ulike testene som tester searchbar og app ligger i cypress folderen i mappen integration. For å kjøre end-to-end testingen: start backend etterfulgt av frontend med “npm start”, og avslutt med “npm run cypress:open” for å starte cypress-terminalen. I denne terminalen kan hver enkelt av de forskjellige testene velges og kjøres etter behov.

Ettersom end-to-end testing ikke er opptatt av spesifikke React-komponenter, så trenger vi systematisk enhetstesting. Vi tar utgangspunkt i Jest, et javascript rammeverk som følger med create-react-app. For å dekke minimum en form med enhetstesting har vi tatt utgangspunkt i snapshot testing som passer fint å bruke til vårt prosjekt. Snapshot var passelig for å teste searchbar-en og de tilhørende sort- og filter-knappene, dette ble gjort ved å sjekke om komponentene og UI ble rendret på en korrekt og ønskelig måte. De ulike enhetstestene kan finnes i mappen frontend/src/tests, og startes ved å kjøre “npm test” i terminalen.

I tillegg har Postman og MongoDB Compass blitt brukt til å teste REST APIet kontinuerlig gjennom utviklingen.
