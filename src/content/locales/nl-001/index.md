# Wachtrijtheorie

Wachtrijtheorie is de wiskundige studie van wachtrijen. Wij gebruiken wachtrijtheorie bij onze softwareontwikkeling, voor doeleinden zoals het analyseren en optimaliseren van onze werkwijzen en processen, bijvoorbeeld de responsiviteit van onze klantenservice, kanbanplanning in projectmanagement, berichtenwachtrijen voor communicatie tussen processen en devops-pipelines voor continue uitrol.

Inhoud:

- [Inleiding](#inleiding)
  - [Responsiviteit van de klantenservice](#responsiviteit-van-de-klantenservice)
  - [Kanbanplanning in projectmanagement](#kanbanplanning-in-projectmanagement)
  - [Berichtenwachtrijen voor communicatie tussen processen](#berichtenwachtrijen-voor-communicatie-tussen-processen)
  - [Devops-pipelines voor continue uitrol](#devops-pipelines-voor-continue-uitrol)
- [Wachtrijterminologie](#wachtrijterminologie)
  - [Wachtrijtypen en bedieningstypen](#wachtrijtypen-en-bedieningstypen)
- [Notatie van de wachtrijtheorie](#notatie-van-de-wachtrijtheorie)
  - [Aantal](#aantal)
  - [Aankomstsnelheid, bedieningssnelheid, vertreksnelheid](#aankomstsnelheid-bedieningssnelheid-vertreksnelheid)
  - [Bezettingsgraad, ook wel verkeersintensiteit](#bezettingsgraad-ook-wel-verkeersintensiteit)
  - [Doorvoersnelheden: totale snelheid, voltooiingssnelheid, successnelheid, faalsnelheid, uitvalsnelheid](#doorvoersnelheden-totale-snelheid-voltooiingssnelheid-successnelheid-faalsnelheid-uitvalsnelheid)
  - [Verduidelijking van de bedieningssnelheid](#verduidelijking-van-de-bedieningssnelheid)
  - [Uitvalsnelheid](#uitvalsnelheid)
  - [Foutratio](#foutratio)
  - [Doorlooptijd, staptijd, werktijd, wachttijd](#doorlooptijd-staptijd-werktijd-wachttijd)
  - [Kendall-notatie](#kendall-notatie)
- [Wachtrijwiskunde](#wachtrijwiskunde)
  - [De bezettingscurve](#de-bezettingscurve)
  - [De formule van Kingman](#de-formule-van-kingman)
  - [Pooling en Erlang C](#pooling-en-erlang-c)
- [Activiteiten volgen](#activiteiten-volgen)
  - [Voorbeelden van activiteiten](#voorbeelden-van-activiteiten)
  - [De wet van Little](#de-wet-van-little)
  - [Kritieke prestatie-indicatoren (KPI's)](#kritieke-prestatie-indicatoren-kpis)
- [Dienstmetrieken](#dienstmetrieken)
  - [Gemiddelde tijd tot reactie, reparatie, herstel, oplossing](#gemiddelde-tijd-tot-reactie-reparatie-herstel-oplossing)
  - [DORA-metrieken](#dora-metrieken)
- [Wachtrij van wachtrijen](#wachtrij-van-wachtrijen)
  - [Double Diamond als wachtrij van wachtrijen](#double-diamond-als-wachtrij-van-wachtrijen)
  - [De trechter als wachtrij van wachtrijen](#de-trechter-als-wachtrij-van-wachtrijen)
- [Inzichten](#inzichten)
- [Epiloog](#epiloog)
  - [Zie ook](#zie-ook)
  - [Dank](#dank)
- [Projectinformatie](#projectinformatie)

## Inleiding

Wij gebruiken wachtrijtheorie in onze projecten voor veel doeleinden:

- Responsiviteit van de klantenservice

- Kanbanplanning in projectmanagement

- Berichtenwachtrijen voor communicatie tussen processen

- Devops-pipelines voor continue uitrol

### Responsiviteit van de klantenservice

Wij willen bijvoorbeeld analyseren hoe klanten om hulp vragen bij verkoop en support, en hoe snel wij reageren.

Enkele relevante producten zijn bijv. [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Kanbanplanning in projectmanagement

Wij willen bijvoorbeeld de doorlooptijden en voortgangstijden volgen terwijl een nieuw idee voor een functie zich ontwikkelt van ontwerp tot oplevering.

Enkele relevante producten zijn bijv. [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Berichtenwachtrijen voor communicatie tussen processen

Wij willen bijvoorbeeld de doorvoer maximaliseren en de druk minimaliseren wanneer het ene programma verzoeken naar een ander programma stuurt.

Enkele relevante producten zijn bijv. [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Devops-pipelines voor continue uitrol

Wij willen bijvoorbeeld zeker weten dat onze server voor continue integratie voldoende capaciteit heeft om onze software te testen en daarna uit te rollen.

Enkele relevante producten zijn bijv. [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Wachtrijterminologie

Wachtrijterminologie is een groot onderwerp. Deze sectie bevat een deel van onze gangbare terminologie. In de voorbeelden gebruiken wij het idee van een klant die in de rij staat.

### Wachtrijtypen en bedieningstypen

Wachtrijtypen en bedieningstypen beschrijven hoe de wachtrij kiest welke items worden verwerkt.

- First In First Out (FIFO): bedien de klant die het langst heeft gewacht.

- Last In First Out (LIFO): bedien de klant die het kortst heeft gewacht.

- Prioriteit: bedien klanten op basis van hun prioriteitsniveau; deze niveaus kunnen gebaseerd zijn op status, urgentie, betaling enz.

- Shortest Job First (SJF): bedien de klant die de kleinste hoeveelheid bediening nodig heeft.

- Longest Job First (LJF): bedien de klant die de grootste hoeveelheid bediening nodig heeft.

- Shortest Remaining Processing Time (SRPT): zoals SJF, maar een pas aangekomen korte taak kan een langere taak die al in bediening is onderbreken.

- Round Robin: bedien elke klant gedurende een kort tijdsdeel, ga dan naar de volgende klant en herhaal.

- Tijdsdeling, ook wel Processor Sharing (PS): bedien iedereen tegelijk; de bedieningscapaciteit wordt gelijk verdeeld over iedereen die wacht.

SJF en SRPT minimaliseren de gemiddelde wachttijd, maar ze kunnen lange taken eindeloos laten verhongeren, dus echte systemen voegen vaak veroudering (aging) of plafonds voor prioriteit toe.

## Notatie van de wachtrijtheorie

De wachtrijtheorie gebruikt notatie met Griekse letters.

Onze teams gebruiken een deel van de gangbare notatie; wij voegen ook eigen notatie toe die ons helpt bij softwareprojecten.

Onze notatie en wat elk symbool betekent:

| Onze notatie | Betekenis |
| ------------ | --------- |
| κ (kappa) | aantal items in het systeem, wachtende plus items in bewerking |
| λ (lambda) | aankomstsnelheid van items die het systeem binnenkomen |
| χ (chi) | vertreksnelheid van items die het systeem verlaten |
| μ (mu) | bedieningssnelheid, ook wel capaciteit: hoe snel één server werkt terwijl hij bezig is |
| ρ (rho) | bezettingsgraad: het deel van de tijd dat de servers bezig zijn, λ / (c μ) |
| α (alfa) | successnelheid: waargenomen uitvoer die goed blijkt te zijn |
| β (bèta) | faalsnelheid: waargenomen uitvoer die fout blijkt te zijn |
| δ (delta) | voltooiingssnelheid: succes + fout, bediende items, ongeacht of het resultaat goed of fout is |
| σ (sigma) | uitvalsnelheid: items die binnenkwamen en daarna onbediend vertrokken |
| ε (epsilon) | foutenverhouding: β / (α + β) = β / δ |
| τ (tau) | tijd in het systeem, ook wel doorlooptijd |
| ω (omega) | wachttijd, ook wel tijd in de wachtrij |
| φ (phi) | werktijd, ook wel tijd in de processor, ook wel bedieningstijd |
| θ (thèta) | staptijd tussen voltooiingen; gemiddelde staptijd ≈ 1 / χ in evenwichtstoestand |

### Aantal

Wij tellen items vaak, en wij gebruiken deze notatie:

- κ (kappa): aantal items in het systeem, dat wil zeggen wachtende items plus items in bewerking.

![Diagram: er zijn κ items in het systeem](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

![Diagram: items komen aan met snelheid λ en vertrekken met snelheid χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-rate-chi-departure-rate.svg)

Voorbeeld:

- κ = 10 betekent precies 10

- κ ≈ 10 betekent ongeveer 10

- κ < 10 betekent minder dan 10

- κ > 10 betekent meer dan 10

- κ ≪ 10 betekent veel minder dan 10

- κ ≫ 10 betekent veel meer dan 10

Het aantal κ (kappa) is een momentopname.

Het gemiddelde aantal κ̅ (kappa streep) is een berekening die metingen over een bepaalde periode middelt, bijvoorbeeld elk uur meten gedurende twee weken.

### Aankomstsnelheid, bedieningssnelheid, vertreksnelheid

De belangrijkste notatie:

- λ (lambda): aankomstsnelheid. Deze meet hoe snel items het systeem binnenkomen.

- μ (mu): bedieningssnelheid, ook wel capaciteit. Deze meet hoe snel één server items kan afhandelen terwijl hij bezig is.

- χ (chi): vertreksnelheid. Deze meet hoe snel items het systeem verlaten.

Voorbeelden van algemene regels voor traditionele wachtrijen met één server:

- λ < μ betekent dat de aankomstsnelheid lager is dan de bedieningssnelheid; de wachtrij is stabiel, dat wil zeggen dat hij schommelt rond een eindige gemiddelde grootte.

- λ = μ betekent dat de aankomstsnelheid gelijk is aan de bedieningssnelheid; bij de minste willekeur drijft de wachtrij af en groeit hij onbegrensd.

- λ > μ betekent dat de aankomstsnelheid hoger is dan de bedieningssnelheid; de wachtrij groeit gestaag, met ongeveer λ − μ items per tijdseenheid.

Het intuïtieve idee dat "λ = μ de wachtrij even groot houdt" klopt alleen wanneer aankomsten en bediening volkomen regelmatig zijn, zoals een metronoom. Echte aankomsten komen in pieken, dus inactieve tijd die tijdens een rustige periode verloren gaat, kan nooit worden ingehaald, en de wachtrij groeit tijdens de volgende piek.

Houd er rekening mee dat sommige beoefenaars van de wachtrijtheorie "bedieningssnelheid" gebruiken in de betekenis van waargenomen uitvoer in plaats van capaciteit; zie [verduidelijking van de bedieningssnelheid](#verduidelijking-van-de-bedieningssnelheid).

### Bezettingsgraad, ook wel verkeersintensiteit

De belangrijkste notatie die een wachtrij samenvat:

- ρ (rho): bezettingsgraad, dat wil zeggen het deel van de tijd dat de servers bezig zijn = λ / μ voor één server, of λ / (c μ) voor c servers

Voorbeelden:

- ρ < 1 betekent dat de servers reservecapaciteit hebben; de wachtrij is stabiel. Hoe dichter ρ bij 1 komt, hoe langer de wachttijden; zie [de bezettingscurve](#de-bezettingscurve).

- ρ = 1 betekent dat de servers voortdurend bezig zijn; de wachtrij is instabiel en groeit onbegrensd.

- ρ > 1 betekent dat de aankomsten de capaciteit overschrijden; de wachtrij wordt groter.

### Doorvoersnelheden: totale snelheid, voltooiingssnelheid, successnelheid, faalsnelheid, uitvalsnelheid

Doorvoersnelheden meten waargenomen uitvoer, dat wil zeggen items die de wachtrij daadwerkelijk verlaten. Ze vallen in vijf brede categorieën:

- χ (chi): totale snelheid. Deze meet hoeveel items per tijdseenheid de wachtrij verlaten, om welke reden ook: succes, falen, uitval enz.

- α (alfa): successnelheid. Deze meet hoeveel items per tijdsperiode goed blijken te zijn, bijv. correct, volledig, geaccepteerd.

- β (bèta): faalsnelheid. Deze meet hoeveel items per tijdsperiode fout blijken te zijn, bijv. onjuist, onvolledig, afgewezen.

- δ (delta): voltooiingssnelheid. Deze meet hoeveel items per tijdsperiode worden bediend, ongeacht of het resultaat goed of fout is: succes + fout.

- σ (sigma): uitvalsnelheid. Deze meet hoeveel items per tijdsperiode de wachtrij binnenkomen en die daarna verlaten zonder te worden bediend, bijv. opgaven, afhakers.

Voltooiingssnelheid = successnelheid + faalsnelheid:

- δ = α + β (uitgesproken: delta is gelijk aan alfa plus bèta)

Totale snelheid = voltooiingssnelheid + uitvalsnelheid:

- χ = δ + σ (uitgesproken: chi is gelijk aan delta plus sigma)

Totale snelheid = successnelheid + faalsnelheid + uitvalsnelheid:

- χ = α + β + σ (uitgesproken: chi is gelijk aan alfa plus bèta plus sigma)

![Diagram: items verlaten het systeem als succes α, fout β of uitval σ; δ = α + β, χ = δ + σ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-sigma-skip-chi-departure.svg)

Elk item dat in χ wordt geteld, is het systeem binnengekomen, dus in evenwichtstoestand is de totale snelheid gelijk aan de aankomstsnelheid: χ ≈ λ. Daarom meten doorvoersnelheden uitvoer, en geen capaciteit.

### Verduidelijking van de bedieningssnelheid

Afhankelijk van de context en de beoefenaar kan de term "bedieningssnelheid" ofwel
"totale snelheid" ofwel "successnelheid" betekenen.

Dit heeft historische wortels en kan leiden tot verwarring en fouten, vooral in
contexten en bij beoefenaars die wachtrijtheorie gebruiken waar een aanzienlijke behoefte
bestaat om fouten en uitval te volgen.

- Theoretische visie: De bedieningssnelheid is een zuivere maat voor snelheid (bijv. taken per seconde), ongeacht of de taken successen, fouten, uitval enz. zijn.

- Verwerkingsvisie: De bedieningssnelheid omvat alles waaraan de wachtrij verwerkingstijd besteedt, dat wil zeggen successen of fouten, maar geen uitval.

- Technologische visie: In toegepaste vakgebieden zoals software-engineering meet de bedieningssnelheid alleen successen, terwijl de foutsnelheid fouten meet en de uitvalsnelheid uitvallers.

Daarom behouden wij μ voor capaciteit, en voegen wij snelheden voor waargenomen uitvoer ernaast toe, in plaats van μ te vervangen:

- μ (mu): bedieningssnelheid, ook wel capaciteit. Deze meet hoe snel één server items kan afhandelen terwijl hij bezig is.

- χ (chi): totale snelheid. Deze meet hoeveel items per tijdseenheid de wachtrij verlaten, om welke reden ook: succes, falen, uitval enz.

- α (alfa): successnelheid. Deze meet hoeveel items per tijdsperiode goed blijken te zijn, bijv. correct, volledig, geaccepteerd.

Waarom μ niet vervangen door χ of α? In een stabiele wachtrij verlaat elk item dat binnenkomt de wachtrij uiteindelijk, dus χ ≈ λ. Dan is λ / χ ≈ 1, ongeacht de belasting, wat niets zegt over hoe bezig de servers zijn. Bezettingsgraad vereist capaciteit: ρ = λ / (c μ), wat gelijk is aan het deel van de tijd dat de servers bezig zijn.

### Uitvalsnelheid

Details over de uitvalsnelheid:

- σ (sigma): uitvalsnelheid. Deze meet hoeveel items de wachtrij binnenkomen en die daarna onverwerkt verlaten.

Uitval is wanneer een item de wachtrij binnenkomt en die daarna verlaat zonder noemenswaardige verwerking:

- Opgeven (abandoning): wanneer een klant zich in een wachtrij voegt en die daarna verlaat, om welke reden ook.

- Afhaken (reneging): wanneer een klant die al heeft gewacht besluit te vertrekken omdat hij te veel tijd heeft verspild.

Twee verwante gedragingen zijn geen uitval:

- Afzien (balking): wanneer een klant besluit zich niet in de wachtrij te voegen omdat de wachttijd te lang dreigt te worden. Een item dat afziet, komt het systeem nooit binnen en valt dus buiten de systeemgrens: het wordt niet geteld in λ, χ of σ. Als afzien ertoe doet, bijvoorbeeld als gemiste verkoop, tel het dan apart als afgewezen aankomsten.

- Rijwisselen (jockeying): wanneer een klant wisselt tussen parallelle wachtrijen, zoals kassarijen, om een kortere wachttijd te krijgen.

### Foutratio

De belangrijkste notatie die het succes van een wachtrij samenvat:

- ε (epsilon): foutratio = aantal fouten / (aantal successen + aantal fouten) = β / (α + β) = β / δ

Uitval wordt niet meegeteld, omdat een uitgevallen item nooit is bediend, dus het was goed noch fout. Volg uitval apart via σ.

![Diagram: de voltooiingssnelheid δ is de successnelheid α plus de faalsnelheid β, en de foutenverhouding ε is de faalsnelheid β gedeeld door de voltooiingssnelheid δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Voorbeelden:

- ε = 0 betekent geen fouten.

- ε = 0,1 betekent dat 10% van de bedieningen een fout bevat.

- ε = 1 betekent dat elke bediening een fout bevat.

### Doorlooptijd, staptijd, werktijd, wachttijd

Wij volgen vier tijden:

- τ (tau): doorlooptijd = van het begin van de wachtrij tot het einde van de wachtrij

- θ (thèta): staptijd = van de ene voltooiing tot de volgende voltooiing; één staptijd is één tussenruimte, en de gemiddelde staptijd is de gemiddelde tussenruimte

- φ (phi): werktijd = tijd besteed aan daadwerkelijk werk, ook wel verwerkingstijd

- ω (omega): wachttijd = tijd die niet aan daadwerkelijk werk wordt besteed, ook wel wachtende tijd

![Diagram: de doorlooptijd τ is de wachttijd ω gevolgd door de werktijd φ, dus τ = ω + φ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time.svg)

Voorbeelden:

- τ = 5s betekent dat een item aan de wachtrij wordt toegevoegd en 5 seconden later wordt bediend.

- ω = 4s betekent dat een item 4 seconden in de wachtrij wacht, waarna het werk begint.

- φ = 1s betekent dat een item 1 seconde werk kost en dan klaar is.

- θ = 1s betekent dat er 1 seconde zit tussen de ene voltooiing en de volgende voltooiing.

Verbanden:

- τ = ω + φ: doorlooptijd is wachttijd plus werktijd. In de voorbeelden is 5s = 4s + 1s.

- gemiddelde θ ≈ 1 / χ: in evenwichtstoestand is de gemiddelde staptijd het omgekeerde van de totale snelheid. Eén enkele tussenruimte zegt weinig over de snelheid; het gemiddelde van veel tussenruimtes wel. In de voorbeelden geldt: als de gemiddelde staptijd 1s is, dan is χ ≈ 1 item per seconde.

### Kendall-notatie

De Kendall-notatie is een andere notatie uit de wachtrijtheorie, geschreven als A/S/c/K/N/D:

- A: het aankomstproces, dat wil zeggen de verdeling van de tijd tussen aankomsten.

- S: het bedieningsproces, dat wil zeggen de verdeling van de bedieningstijden.

- c: het aantal servers.

- K: de capaciteit, dat wil zeggen het maximale aantal items dat in het systeem is toegestaan, wachtend of in bediening, voordat nieuwe aankomsten worden afgewezen.

- N: de populatie, dat wil zeggen het aantal potentiële klanten.

- D: de discipline, dat wil zeggen het wachtrijtype, zoals FIFO of LIFO.

Gangbare letters voor A en S:

- M: markoviaans, ook wel geheugenloos, dat wil zeggen exponentieel verdeelde tijden, die voortkomen uit poissonaankomsten.

- D: deterministisch, dat wil zeggen constante tijden.

- G: algemeen, dat wil zeggen een willekeurige verdeling.

Wanneer de laatste drie worden weggelaten, zijn de standaardwaarden K = ∞, N = ∞, D = FIFO. Zo betekent "M/M/1" bijvoorbeeld poissonaankomsten, exponentieel verdeelde bedieningstijden, één server, onbeperkte capaciteit, onbeperkte populatie en first in, first out.

Ook:

- n: het aantal items in het systeem.

## Wachtrijwiskunde

De wiskundige secties gebruiken handboeksymbolen, zodat u ze met andere bronnen kunt vergelijken: S is de gemiddelde bedieningstijd, wat onze φ is, en μ = 1 / S is de capaciteit van één server.

### De bezettingscurve

Het allerbelangrijkste resultaat van de wachtrijtheorie: naarmate de bezettingsgraad 100% nadert, groeit de wachttijd onbegrensd, en het snelst aan het einde.

Voor een M/M/1-wachtrij, waarbij S de gemiddelde bedieningstijd is:

- Doorlooptijd τ = S / (1 − ρ)

- Wachttijd ω = S × ρ / (1 − ρ)

| Bezettingsgraad ρ | Doorlooptijd τ | Wachttijd ω |
| ----------------- | -------------- | ----------- |
| 50%               | 2 × S          | 1 × S       |
| 70%               | 3,3 × S        | 2,3 × S     |
| 80%               | 5 × S          | 4 × S       |
| 90%               | 10 × S         | 9 × S       |
| 95%               | 20 × S         | 19 × S      |
| 99%               | 100 × S        | 99 × S      |

Voorbeeld: een codereview kost 1 uur werk. Als reviewers voor 80% bezet zijn, duurt een review ongeveer 5 uur van aanvraag tot afronding. Als reviewers voor 95% bezet zijn, duurt het ongeveer 20 uur, ook al zijn de reviewers maar 15 procentpunt drukker.

Daarom is "houd iedereen voor 100% bezig" een recept voor lange doorlooptijden, en daarom waarschuwen de [inzichten](#inzichten) hieronder tegen plannen op een hoge bezettingsgraad.

### De formule van Kingman

De formule van Kingman, ook wel de VUT-vergelijking, benadert de wachttijd voor een wachtrij met één server en willekeurige verdelingen van aankomsten en bediening (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

De drie factoren zijn:

- U: de bezettingsfactor ρ / (1 − ρ), wat de bezettingscurve hierboven is.

- V: de variabiliteitsfactor (ca² + cs²) / 2, waarbij ca de variatiecoëfficiënt is van de tijd tussen aankomsten en cs de variatiecoëfficiënt van de bedieningstijden. De variatiecoëfficiënt is de standaardafwijking gedeeld door het gemiddelde.

- T: de tijdsfactor S, de gemiddelde bedieningstijd.

Voorbeeld: voor een M/M/1-wachtrij is ca = cs = 1, dus V = 1, en de formule geeft dezelfde wachttijd als de bezettingscurve. Als u werkitems uniformer maakt, bijvoorbeeld door grote tickets op te splitsen zodat cs daalt van 1 naar bijna 0, dan daalt V naar ongeveer 0,5, en halveert de wachttijd ongeveer bij dezelfde bezettingsgraad.

De formule van Kingman laat de drie hefbomen zien om de wachttijd te verminderen:

- Verlaag de bezettingsgraad, bijvoorbeeld door capaciteit toe te voegen of onderhanden werk te beperken.

- Verminder de variabiliteit, bijvoorbeeld door kleinere batches, uniformere werkitems of gelijkmatigere aankomsten.

- Verkort de bedieningstijd, bijvoorbeeld door automatisering.

### Pooling en Erlang C

Eén gedeelde wachtrij die meerdere servers voedt, is beter dan afzonderlijke wachtrijen die elk één server voeden. Daarom gebruiken banken één rij voor veel loketmedewerkers, en daarom is een gedeelde supportwachtrij beter dan wachtrijen per medewerker.

Voorbeeld: twee servers doen elk 1 uur over een item, en items komen in totaal aan met 1,6 items per uur, dus de bezettingsgraad is 80%.

- Afzonderlijke wachtrijen: elke server is een M/M/1-wachtrij met 0,8 aankomsten per uur, dus de doorlooptijd is 1 / (1 − 0,8) = 5 uur.

- Gedeelde wachtrij: beide servers delen een M/M/2-wachtrij, dus de doorlooptijd is ongeveer 2,8 uur, wat ongeveer 44% minder is, met dezelfde mensen en hetzelfde werk.

De Erlang C-formule berekent de kans dat een aankomend item moet wachten in een M/M/c-wachtrij, met aangeboden belasting a = λ / μ en bezettingsgraad ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Wachttijd ω = P(wait) / (c μ − λ)

Klantenserviceteams gebruiken Erlang C om te bepalen hoeveel medewerkers zij moeten inroosteren om een doel te halen, zoals "80% van de oproepen binnen 20 seconden beantwoord".

Pooling heeft grenzen: het werkt het best wanneer elke server elk item kan afhandelen. Als items specialisten vereisen, kan een gedeelde wachtrij routeringsregels nodig hebben.

## Activiteiten volgen

### Voorbeelden van activiteiten

Stel dat wij iets hebben dat wij willen volgen, en dat wij het iets algemeens noemen, zoals "Activiteit", afgekort als "A".

Wij kunnen wachtrijnotatie efficiënt gebruiken om de activiteit te beschrijven en hoe die door een wachtrij beweegt.

Voorbeelden:

- Aκ: aantal van de activiteit: hoeveel items er in de wachtrij zijn.

- Aλ: aankomstsnelheid van de activiteit: hoeveel items er per tijdseenheid binnenkomen.

- Aχ: totale snelheid van de activiteit: hoeveel items er per tijdseenheid de wachtrij verlaten.

- Aα: successnelheid van de activiteit: hoeveel items er per tijdseenheid goed zijn.

- Aβ: faalsnelheid van de activiteit, ook wel foutsnelheid: hoeveel items er per tijdseenheid fout zijn.

- Aμ: bedieningssnelheid van de activiteit, ook wel capaciteit: hoeveel items één server per tijdseenheid kan voltooien terwijl hij bezig is.

- Aσ: uitvalsnelheid van de activiteit: hoeveel items er per tijdseenheid worden opgegeven.

- Aρ: bezettingsgraad van de activiteit: het deel van de beschikbare tijd dat de servers bezig zijn, dat wil zeggen bezette tijd ÷ beschikbare tijd, of λ / (c μ).

- Aε: foutratio van de activiteit: hoeveel items er met fouten worden voltooid ten opzichte van het totaal.

- Aτ: doorlooptijd van de activiteit: hoeveel tijd er verstrijkt van aangevraagd tot voltooid.

- Aω: wachttijd van de activiteit: hoeveel tijd er verstrijkt van aangevraagd tot gestart.

- Aφ: werktijd van de activiteit: hoeveel tijd er verstrijkt van gestart tot voltooid.

- Aθ: staptijd van de activiteit: hoeveel tijd er verstrijkt van voltooid tot de volgende voltooiing.

### De wet van Little

De wet van Little is een stelling van John Little die zegt: het gemiddelde aantal L klanten op lange termijn in een stationair systeem is gelijk aan de gemiddelde effectieve aankomstsnelheid λ op lange termijn, vermenigvuldigd met de gemiddelde tijd W die een klant in het systeem doorbrengt.

Voorbeeld van notatie:

- L: gemiddeld aantal klanten in het systeem op lange termijn. Wij geven de voorkeur aan κ (kappa).

- λ: gemiddelde effectieve aankomstsnelheid op lange termijn, dat wil zeggen items die het systeem daadwerkelijk binnenkomen, dus zonder afzieners.

- W: gemiddelde tijd op lange termijn dat een item in het systeem is. Wij geven de voorkeur aan τ (tau).

- L = λ W is de wet van Little. Wij geven de voorkeur aan κ = λ τ (kappa = lambda \* tau).

De wet van Little is opmerkelijk algemeen: hij geldt ongeacht de verdeling van aankomsten, de verdeling van bediening, het aantal servers of het wachtrijtype.

Aannames van de wet van Little:

- Alle meeteenheden zijn consistent.

- Het systeem is stabiel, dat wil zeggen dat de gemiddelde aankomstsnelheid gelijk is aan de gemiddelde vertreksnelheid over de meetperiode, en het aantal items aan het begin en aan het einde ongeveer gelijk is.

- Items die vroegtijdig vertrekken, bijvoorbeeld door afhaken, worden ofwel consequent meegeteld in zowel λ als τ, ofwel consequent uitgesloten van beide.

Voorbeeld: een team heeft gemiddeld κ = 20 tickets in behandeling, en tickets komen aan met λ = 4 per week; in evenwichtstoestand rondt het team ook χ = 4 per week af. Het gemiddelde ticket duurt dus τ = κ / λ = 5 weken. Om de doorlooptijd te halveren zonder sneller te werken, halveert u het onderhanden werk.

### Kritieke prestatie-indicatoren (KPI's)

Wij volgen doorgaans veel zaken over de activiteiten in de wachtrij, en wij willen de resultaten samenvatten door een korte lijst te kiezen van de meest relevante voor onze projecten.

Wij hebben veel projecten gebouwd, en wij zijn van mening dat de waardevolste samenvattende indicatoren zijn:

- Dτ = doorlooptijd van levering. Productteams zeggen misschien "van concept tot klant" of "van idee tot implementatie".

- Dα = successnelheid van levering. Devopsteams zeggen misschien "uitrolfrequentie" of "wij leveren X keer per dag".

- Dε = foutratio van levering. Kwaliteitsteams zeggen misschien "percentage mislukte wijzigingen" of "percentage terugdraaiingen".

- Rτ = doorlooptijd van herstel. Site reliability engineers zeggen misschien "hersteltijd na mislukte uitrol" of "mean time to restore (MTTR)".

## Dienstmetrieken

Nuttige termen:

- **Service Level Indicator (SLI):** is de metriek (bijv. 99,9% beschikbaarheid)
- **Service Level Objective (SLO):** het interne doel voor die metriek (bijv. streven naar 99,95% beschikbaarheid)
- **Service Level Agreement (SLA):** de formele, contractuele belofte aan de klant (bijv. 99,9% beschikbaarheid met boetes als die niet wordt gehaald).

### Gemiddelde tijd tot reactie, reparatie, herstel, oplossing

MTTR staat voor vier verschillende metingen:

| Metriek                                        | Focus                | Meet                                         | Start                                    | Einde                                    |
| ---------------------------------------------- | -------------------- | -------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| **Mean Time To Respond** (tijd tot reactie)    | Eerste reactie       | Tijd tot bevestiging en begin van actie      | Wanneer het incident wordt ontdekt/gemeld | Wanneer het team eraan begint te werken |
| **Mean Time To Repair** (tijd tot reparatie)   | Technische oplossing | Tijd om het defecte onderdeel te repareren   | Wanneer het reparatiewerk begint         | Wanneer het onderdeel gerepareerd is     |
| **Mean Time To Recover** (tijd tot herstel)    | Herstel van de dienst | Tijd om de volledige dienst te herstellen   | Wanneer het incident/de storing begint   | Wanneer de dienst volledig werkt         |
| **Mean Time To Resolve** (tijd tot oplossing)  | Volledige afhandeling | Totale tijd van ontdekking tot afsluiting   | Wanneer het incident wordt ontdekt       | Wanneer het incident volledig is afgesloten |

**Belangrijke verschillen:**

**Reactie** meet de paraatheid van het team en de effectiviteit van de alarmering. Een korte reactietijd betekent dat uw monitoring en uw consignatieprocessen goed werken, ook als de daadwerkelijke oplossing langer duurt.

**Reparatie** is strikt technisch: hoe lang duurt het om het defecte onderdeel daadwerkelijk te repareren zodra men eraan werkt? Het sluit de tijd voor ontdekking, triage en verificatie uit.

**Herstel** gaat over de beschikbaarheid van de dienst vanuit het perspectief van de klant. Het systeem kan "gerepareerd" zijn maar nog niet "hersteld" als u nog gegevens moet terugzetten, caches moet opwarmen of functionaliteit moet verifiëren.

**Oplossing** is het meest omvattend: het omvat de volledige levenscyclus van het incident, van de eerste ontdekking tot de verificatie na het incident en de afsluiting.

Voorbeeldscenario:

- 02:00 — Storing begint
- 02:05 — Alarm gaat af, incident wordt ontdekt
- 02:15 — Dienstdoende bevestigt en begint te werken → Reactietijd: 10 min (02:05 tot 02:15)
- 02:45 — Oorzaak gevonden, oplossing uitgerold → Reparatietijd: 30 min (02:15 tot 02:45)
- 03:00 — Dienst geverifieerd als werkend voor gebruikers → Hersteltijd: 60 min (02:00 tot 03:00)
- 03:30 — Incidentticket gesloten na verificatie → Oplossingstijd: 85 min (02:05 tot 03:30)

Verwante metrieken:

- MTBF (mean time before failure, gemiddelde tijd tussen storingen)
- MTTF (mean time to failure, gemiddelde tijd tot storing)
- MTTA (mean time to acknowledge, gemiddelde tijd tot bevestiging)

### DORA-metrieken

De metrieken van DevOps Research and Assessment (DORA) zijn branchestandaard kritieke prestatie-indicatoren (KPI's), specifiek voor devopsteams in software-engineering. Zie [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA gebruikt nu vijf metrieken, in twee groepen.

Doorvoermetrieken:

- **Change Lead Time** (doorlooptijd van wijzigingen) - Tijd om code voor een functie te implementeren, te testen en te leveren (gemeten van commit tot uitrol in productie). Wees specifiek over wat u bedoelt met begin en einde. Sommige teams meten bijvoorbeeld graag vanaf het moment dat een ontwikkelaar aan een ticket begint tot het moment dat de ontwikkelaar het werk naar een proces voor continue integratie pusht; deze aanpak is doorgaans effectiever voor het meten van persoonlijke productiviteit.

- **Deployment Frequency** (uitrolfrequentie) - Aantal uitrollen in een bepaalde tijdsduur. Wees specifiek over wat u bedoelt met uitrol en hoe u de frequentie volgt. Sommige teams rollen bijvoorbeeld uit naar een vloot productieservers en volgen de volledige uitrol, terwijl andere teams uitrollen naar één server voor gebruikersacceptatietests (UAT) en bijhouden wanneer de projectmanager een e-mail naar de gebruikers stuurt met de aankondiging dat zij kunnen gaan testen.

- **Failed Deployment Recovery Time** (hersteltijd na mislukte uitrol) - Tijd die nodig is om te herstellen van een uitrol die een storing in productie veroorzaakt. Dit heette vroeger Mean Time to Recovery (MTTR) of Time to Restore Service. Wees specifiek over wat u bedoelt met herstel. Sommige teams tellen herstel bijvoorbeeld als volledige oplossing, dat wil zeggen de totale tijd vanaf het moment dat een incident wordt ontdekt tot het moment dat het incident volledig is afgesloten; deze aanpak wordt beter omschreven als Mean Time To Resolve.

Instabiliteitsmetrieken:

- **Change Failure Rate** (percentage mislukte wijzigingen) - Percentage uitrollen dat een storing in productie veroorzaakt en onmiddellijk herstel vereist, zoals een terugdraaiing of een hotfix. Wees specifiek over wat u bedoelt met storing. Sommige teams tellen bijvoorbeeld ook een storing wanneer zij aan een werkticket beginnen en dan beseffen dat het werkticket onvoldoende informatie bevat om verder te gaan, zodat het team het werkticket terugstuurt naar het specificatieteam.

- **Deployment Rework Rate** (percentage herwerkte uitrollen) - Percentage uitrollen dat ongepland is, bijvoorbeeld om een productie-incident op te lossen. Dit is het aantal ongeplande uitrollen gedeeld door het totale aantal uitrollen. DORA heeft deze metriek in 2024 toegevoegd.

Eerdere DORA-rapporten bespraken ook **Reliability** (betrouwbaarheid) als metriek voor operationele prestaties: een bredere, vaak kwalitatieve beoordeling van de consistentie van de dienst, zoals beschikbaarheid, uptime, latentie, nauwkeurigheid en serviceniveaudoelen. Betrouwbaarheid helpt aan te tonen dat een hoge snelheid niet ten koste gaat van het vermogen van het systeem.

## Wachtrij van wachtrijen

Wachtrijtheorie is eenvoudig uit te breiden naar een wachtrij van wachtrijen, zoals een proces op hoger niveau dat fasen, stadia of poorten op lager niveau bevat.

### Double Diamond als wachtrij van wachtrijen

Neem bijvoorbeeld het innovatieprocesmodel "Double Diamond", dat vier fasen specificeert:

1. Ontdekken: Begrijp het probleem in plaats van alleen aan te nemen wat het is.
2. Definiëren: Definieer de uitdaging met de inzichten uit de ontdekkingsfase.
3. Ontwikkelen: Geef verschillende antwoorden op het duidelijk gedefinieerde probleem.
4. Opleveren: Test verschillende oplossingen op kleine schaal en verbeter ze daarna.

Wachtrijtheorie kan dit modelleren als één proceswachtrij die vier fasewachtrijen bevat:

- De aankomstsnelheid van het proces is de aankomstsnelheid van fase 1.
- De successnelheid van het proces is de successnelheid van fase 4.
- Het aantal fouten van het proces is de som van de aantallen fouten van de fasen.
- Het aantal uitvallers van het proces is de som van de aantallen uitvallers van de fasen.
- De doorlooptijd van het proces is de som van de doorlooptijden van de fasen.
- De maximale doorvoer van het proces is de doorvoer van de traagste fase, ook wel de bottleneck.

### De trechter als wachtrij van wachtrijen

In ons praktische werk gebruiken wij vaak het woord "trechter" om losjes een wachtrij van wachtrijen te beschrijven die het aantal items in elke fase doorgaans vermindert:

- Wervingswachtrij met een benaderingsfase, een gespreksfase en een aanbiedingsfase. Voor dit soort wachtrij streven wij ernaar de aankomstsnelheid van fase 1 te maximaliseren, dat wil zeggen onze benadering te vergroten, bijvoorbeeld via promoties.

- Aankoopwachtrij met een zoekfase voor de klant, een winkelwagenfase en een betaalfase. Voor dit soort wachtrij streven wij ernaar de uitvalsnelheid van fase 2 te minimaliseren, dat wil zeggen het aantal verlaten winkelwagens te verminderen, bijvoorbeeld via herinneringen.

- Programmeerwachtrij met een integratiefase, een fase voor gebruikersacceptatie en een fase voor uitrol in productie. Voor dit soort wachtrij streven wij ernaar de foutsnelheid van de fase voor uitrol in productie te minimaliseren, bijvoorbeeld via canary-telemetrie.

## Inzichten

Zeven inzichten in wachtrijtheorie, van Bob Wescott, auteur van "The Every Computer Performance Book" (zie ook [de samenvatting van Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Hoe trager het bedieningscentrum, hoe lager de maximale bezettingsgraad waarop u bij piekbelasting moet plannen.

2. Het is erg moeilijk om de laatste 15% van wat dan ook te benutten.

3. Hoe dichter u bij de rand bent, hoe hoger de prijs voor een vergissing.

4. De toename van de responstijd wordt begrensd door het aantal dat kan wachten.

5. Onthoud dat dit een gemiddelde is, geen maximum.

6. Er is een menselijk ontkenningseffect bij meerdere bedieningscentra.

7. Presenteer kleine verbeteringen in het best mogelijke licht.

## Epiloog

### Zie ook

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Gebieden op Wikipedia waar wij wachtrijen in veel projecten gebruiken:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Inleidingen door John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Inleidingen met meer details:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formules:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Dank

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Dit boek is uitstekend voor devops op hoog niveau en ligt direct ten grondslag aan onze keuze van KPI's. De KPI's op deze pagina sluiten aan bij de aanbevelingen van het boek.

## Projectinformatie

- Pakket: queue-theory
- Versie: 3.0.0
- Aangemaakt: 2019-01-25T04:17:56Z
- Bijgewerkt: 2026-11-23T15:33:48Z
- Licentie: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, of neem contact met ons op voor andere voorwaarden (zie [LICENSE.md](LICENSE.md))
- Contact: Joel Parker Henderson <joel@joelparkerhenderson.com>
