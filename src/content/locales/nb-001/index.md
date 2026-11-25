# Køteori

Køteori er den matematiske studien av ventelinjer, eller køer. Vi bruker køteori i vår programvareutvikling, til formål som å analysere og optimalisere våre praksiser og prosesser, for eksempel responstiden i kundeservice, kanban-planlegging i prosjektledelse, meldingskøer for kommunikasjon mellom prosesser og DevOps-pipelines for kontinuerlig utrulling.

Innhold:

- [Innledning](#innledning)
  - [Responstid i kundeservice](#responstid-i-kundeservice)
  - [Kanban-planlegging i prosjektledelse](#kanban-planlegging-i-prosjektledelse)
  - [Meldingskøer for kommunikasjon mellom prosesser](#meldingskøer-for-kommunikasjon-mellom-prosesser)
  - [DevOps-pipelines for kontinuerlig utrulling](#devops-pipelines-for-kontinuerlig-utrulling)
- [Køterminologi](#køterminologi)
  - [Køtyper og tjenestetyper](#køtyper-og-tjenestetyper)
- [Notasjon i køteori](#notasjon-i-køteori)
  - [Antall](#antall)
  - [Ankomstrate, tjenesterate, avgangsrate](#ankomstrate-tjenesterate-avgangsrate)
  - [Utnyttelsesgrad, også kalt trafikkintensitet](#utnyttelsesgrad-også-kalt-trafikkintensitet)
  - [Gjennomstrømningsrater: total rate, fullføringsrate, suksessrate, feilrate, overhoppsrate](#gjennomstrømningsrater-total-rate-fullføringsrate-suksessrate-feilrate-overhoppsrate)
  - [Tvetydighet i begrepet tjenesterate](#tvetydighet-i-begrepet-tjenesterate)
  - [Overhoppsrate](#overhoppsrate)
  - [Feilandel](#feilandel)
  - [Ledetid, stegtid, arbeidstid, ventetid](#ledetid-stegtid-arbeidstid-ventetid)
  - [Kendalls notasjon](#kendalls-notasjon)
- [Kømatematikk](#kømatematikk)
  - [Utnyttelseskurven](#utnyttelseskurven)
  - [Kingmans formel](#kingmans-formel)
  - [Sammenslåing av køer og Erlang C](#sammenslåing-av-køer-og-erlang-c)
- [Aktivitetssporing](#aktivitetssporing)
  - [Aktivitetseksempler](#aktivitetseksempler)
  - [Littles lov](#littles-lov)
  - [Nøkkelindikatorer (KPI-er)](#nøkkelindikatorer-kpi-er)
- [Tjenestemetrikker](#tjenestemetrikker)
  - [Gjennomsnittlig tid til respons, reparasjon, gjenoppretting, løsning](#gjennomsnittlig-tid-til-respons-reparasjon-gjenoppretting-løsning)
  - [DORA-metrikker](#dora-metrikker)
- [Kø av køer](#kø-av-køer)
  - [Double Diamond som kø av køer](#double-diamond-som-kø-av-køer)
  - [Trakt som kø av køer](#trakt-som-kø-av-køer)
- [Innsikter](#innsikter)
- [Epilog](#epilog)
  - [Se også](#se-også)
  - [Takk](#takk)
- [Prosjektinformasjon](#prosjektinformasjon)

## Innledning

Vi bruker køteori i prosjektene våre til mange formål:

- Responstid i kundeservice

- Kanban-planlegging i prosjektledelse

- Meldingskøer for kommunikasjon mellom prosesser

- DevOps-pipelines for kontinuerlig utrulling

### Responstid i kundeservice

Vi ønsker for eksempel å analysere hvordan kunder ber om hjelp med salg og brukerstøtte, og hvor raskt vi svarer.

Noen relevante produkter er f.eks. [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Kanban-planlegging i prosjektledelse

Vi ønsker for eksempel å følge ledetidene og fremdriftstidene mens en ny idé til en funksjon utvikler seg fra design til levering.

Noen relevante produkter er f.eks. [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Meldingskøer for kommunikasjon mellom prosesser

Vi ønsker for eksempel å maksimere gjennomstrømningen og minimere trykket når ett program sender forespørsler til et annet program.

Noen relevante produkter er f.eks. [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### DevOps-pipelines for kontinuerlig utrulling

Vi ønsker for eksempel å sikre at serveren vår for kontinuerlig integrasjon har kapasitet til å teste programvaren vår og deretter rulle den ut.

Noen relevante produkter er f.eks. [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Køterminologi

Køterminologi er et stort tema. Denne delen inneholder noe av vår vanlige terminologi. I eksemplene bruker vi bildet av en kunde som står i kø.

### Køtyper og tjenestetyper

Køtyper og tjenestetyper beskriver hvordan køen velger hvilke elementer den skal behandle.

- First In First Out (FIFO): betjen kunden som har ventet lengst.

- Last In First Out (LIFO): betjen kunden som har ventet kortest.

- Prioritet: betjen kundene etter prioritetsnivå; nivåene kan være basert på status, hast, betaling osv.

- Shortest Job First (SJF): betjen kunden som trenger minst tjeneste.

- Longest Job First (LJF): betjen kunden som trenger mest tjeneste.

- Shortest Remaining Processing Time (SRPT): som SJF, men en nylig ankommet kort jobb kan avbryte en lengre jobb som allerede er under behandling.

- Round Robin: betjen hver kunde i en kort tidsluke, gå så videre til neste kunde, og gjenta.

- Tidsdeling, også kalt Processor Sharing (PS): betjen alle samtidig; tjenestekapasiteten fordeles jevnt mellom alle som venter.

SJF og SRPT minimerer den gjennomsnittlige ventetiden, men de kan la lange jobber vente i det uendelige, så virkelige systemer legger ofte til aldring eller tak på prioritet.

## Notasjon i køteori

Køteori bruker notasjon med greske bokstaver.

Teamene våre bruker noe av den populære notasjonen; vi legger også til noe egen notasjon som hjelper oss med programvareprosjekter.

Vår notasjon og hva hvert symbol betyr:

| Vår notasjon | Betydning |
| ------------ | --------- |
| κ (kappa) | antall elementer i systemet, de som venter pluss de som behandles |
| λ (lambda) | ankomstrate for elementer som kommer inn i systemet |
| χ (khi) | avgangsrate for elementer som forlater systemet |
| μ (my) | tjenesterate, også kalt kapasitet: hvor raskt én server arbeider når den er opptatt |
| ρ (rho) | utnyttelse: andelen av tiden serverne er opptatt, λ / (c μ) |
| α (alfa) | suksessrate: observert utdata som viser seg å være riktig |
| β (beta) | feilrate: observert utdata som viser seg å være feil |
| δ (delta) | fullføringsrate: suksess + feil, elementer som er betjent, uansett om resultatet er riktig eller galt |
| σ (sigma) | overhoppsrate: elementer som kom inn og deretter gikk uten å bli betjent |
| ε (epsilon) | feilforhold: β / (α + β) = β / δ |
| τ (tau) | tid i systemet, også kalt ledetid |
| ω (omega) | ventetid, også kalt tid i køen |
| φ (fi) | arbeidstid, også kalt tid i prosessoren, også kalt tjenestetid |
| θ (theta) | stegtid mellom fullføringer; gjennomsnittlig stegtid ≈ 1 / χ i stabil tilstand |

### Antall

Vi teller ofte elementer, og vi bruker denne notasjonen:

- κ (kappa): antall elementer i systemet, det vil si elementer som venter pluss elementer som behandles.

![Diagram: κ elementer er i systemet](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Eksempel:

- κ = 10 betyr nøyaktig 10

- κ ≈ 10 betyr omtrent 10

- κ < 10 betyr mindre enn 10

- κ > 10 betyr mer enn 10

- κ ≪ 10 betyr mye mindre enn 10

- κ ≫ 10 betyr mye mer enn 10

Antallet κ (kappa) er et øyeblikksbilde.

Gjennomsnittlig antall κ̅ (kappa med strek) er en beregning som tar gjennomsnittet av målinger over en bestemt tidsperiode, for eksempel målinger hver time i to uker.

### Ankomstrate, tjenesterate, avgangsrate

Den viktigste notasjonen:

- λ (lambda): ankomstrate. Den måler hvor raskt elementer kommer inn i systemet.

- μ (my): tjenesterate, også kalt kapasitet. Den måler hvor raskt én server kan håndtere elementer når den er opptatt.

- χ (khi): avgangsrate. Den måler hvor raskt elementer forlater systemet.

![Diagram: elementer ankommer med raten λ, betjenes med raten μ og forlater systemet med raten χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-rate-mu-service-rate-chi-departure-rate.svg)

Eksempler på generelle regler for tradisjonelle køer med én server:

- λ < μ betyr at ankomstraten er lavere enn tjenesteraten; køen er stabil, det vil si at den svinger rundt en endelig gjennomsnittlig lengde.

- λ = μ betyr at ankomstraten er lik tjenesteraten; med den minste tilfeldighet driver køen og vokser uten grense.

- λ > μ betyr at ankomstraten er høyere enn tjenesteraten; køen vokser jevnt, med omtrent λ − μ elementer per tidsenhet.

Den intuitive ideen om at «λ = μ holder køen like lang» er bare sann når ankomster og tjeneste er helt regelmessige, som en metronom. Virkelige ankomster kommer i støt, så ledig tid som går tapt i en rolig periode, kan aldri hentes inn igjen, og køen vokser under neste støt.

Vær oppmerksom på at noen som bruker køteori, bruker «tjenesterate» om observert utdata i stedet for kapasitet; se [tvetydighet i begrepet tjenesterate](#tvetydighet-i-begrepet-tjenesterate).

### Utnyttelsesgrad, også kalt trafikkintensitet

Den viktigste notasjonen som oppsummerer en kø:

- ρ (rho): utnyttelsesgrad, det vil si andelen av tiden serverne er opptatt = λ / μ for én server, eller λ / (c μ) for c servere

Eksempler:

- ρ < 1 betyr at serverne har ledig kapasitet; køen er stabil. Jo nærmere ρ kommer 1, desto lengre blir ventetidene; se [utnyttelseskurven](#utnyttelseskurven).

- ρ = 1 betyr at serverne er opptatt hele tiden; køen er ustabil og vokser uten grense.

- ρ > 1 betyr at ankomstene overstiger kapasiteten; køen blir lengre.

### Gjennomstrømningsrater: total rate, fullføringsrate, suksessrate, feilrate, overhoppsrate

Gjennomstrømningsrater måler observert utdata, det vil si elementer som faktisk forlater køen. De finnes i fem brede kategorier:

- χ (khi): avgangsrate. Den måler hvor raskt elementer forlater systemet.

- α (alfa): suksessrate. Den måler hvor mange elementer per tidsperiode som viser seg å være riktige, f.eks. korrekte, fullstendige, godkjente.

- β (beta): feilrate. Den måler hvor mange elementer per tidsperiode som viser seg å være feil, f.eks. ukorrekte, ufullstendige, avviste.

- δ (delta): fullføringsrate. Den måler hvor mange elementer per tidsperiode som blir betjent.

- σ (sigma): overhoppsrate. Den måler hvor mange elementer per tidsperiode som kommer inn i køen og deretter går uten å bli betjent, f.eks. avbrudd og frafall.

Fullføringsrate = suksessrate + feilrate:

- δ = α + β (uttales: delta er lik alfa pluss beta)

Total rate = fullføringsrate + overhoppsrate:

- χ = δ + σ (uttales: khi er lik delta pluss sigma)

Total rate = suksessrate + feilrate + overhoppsrate:

- χ = α + β + σ (uttales: khi er lik alfa pluss beta pluss sigma)

![Diagram: avgangsrate χ = fullføringsrate δ + overhoppsrate σ; fullføringsrate δ = suksessrate α + feilrate β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Hvert element som telles i χ, kom inn i systemet, så i stabil tilstand er den totale raten lik ankomstraten: χ ≈ λ. Det er derfor gjennomstrømningsrater måler utdata, ikke kapasitet.

### Tvetydighet i begrepet tjenesterate

Avhengig av sammenheng og fagperson kan begrepet «tjenesterate» bety enten «total rate» eller «suksessrate».

Dette har historiske røtter og kan føre til forvirring og feil, særlig i sammenhenger og for fagfolk som bruker køteori der det er et betydelig behov for å følge feil og overhopp.

- Teoretisk syn: Tjenesteraten er et rent mål på hastighet (f.eks. jobber per sekund), uavhengig av om jobbene er suksesser, feil, overhopp osv.

- Behandlingssyn: Tjenesteraten omfatter det køen bruker tid på å behandle, det vil si suksesser eller feil, men ikke overhopp.

- Teknologisyn: I anvendte fagfelt som programvareutvikling måler tjenesteraten bare suksesser, mens feilraten måler feil og overhoppsraten måler overhopp.

Derfor beholder vi μ for kapasitet, og vi legger til observerte utdatarater ved siden av den i stedet for å erstatte den:

- μ (my): tjenesterate, også kalt kapasitet. Den måler hvor raskt én server kan håndtere elementer når den er opptatt.

- χ (khi): avgangsrate. Den måler hvor raskt elementer forlater systemet.

- α (alfa): suksessrate. Den måler hvor mange elementer per tidsperiode som viser seg å være riktige, f.eks. korrekte, fullstendige, godkjente.

Hvorfor ikke erstatte μ med χ eller α? I en stabil kø forlater hvert element som kommer inn, til slutt køen, så χ ≈ λ. Da er λ / χ ≈ 1 uansett belastning, noe som ikke sier noe om hvor opptatt serverne er. Utnyttelse krever kapasitet: ρ = λ / (c μ), som er lik andelen av tiden serverne er opptatt.

### Overhoppsrate

Detaljer om overhoppsrate:

- σ (sigma): overhoppsrate. Den måler hvor mange elementer som kommer inn i køen og deretter går uten å bli behandlet.

Et overhopp er når et element kommer inn i køen og deretter går uten noen vesentlig behandling:

- Oppgivelse (abandoning): når en kunde stiller seg i en kø og deretter går, uansett årsak.

- Frafall (reneging): når en kunde som allerede har ventet, bestemmer seg for å gå fordi vedkommende har kastet bort for mye tid.

To beslektede atferder er ikke overhopp:

- Avvisning ved inngangen (balking): når en kunde bestemmer seg for ikke å stille seg i køen fordi ventetiden truer med å bli for lang. Et element som avstår, kommer aldri inn i systemet, så det er utenfor systemgrensen: det telles ikke i λ, χ eller σ. Hvis slike tilfeller betyr noe, for eksempel tapt salg, bør De telle dem separat som avviste ankomster.

- Køhopping (jockeying): når en kunde bytter mellom parallelle køer, for eksempel kassekøer, for å prøve å få kortere ventetid.

### Feilandel

Den viktigste notasjonen som oppsummerer en køs suksess:

- ε (epsilon): feilandel = antall feil / (antall suksesser + antall feil) = β / (α + β) = β / δ

Overhopp er utelatt, fordi et overhoppet element aldri ble betjent, så det var verken riktig eller feil. Følg overhopp separat via σ.

![Diagram: feilforholdet ε er feilraten β delt på fullføringsraten δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Eksempler:

- ε = 0 betyr ingen feil.

- ε = 0,1 betyr at 10 % av tjenestene har en feil.

- ε = 1 betyr at hver tjeneste har en feil.

### Ledetid, stegtid, arbeidstid, ventetid

Vi følger fire tider:

- τ (tau): ledetid = fra starten av køen til slutten av køen

- θ (theta): stegtid = fra én fullføring til neste fullføring; én stegtid er ett mellomrom, og den gjennomsnittlige stegtiden er det gjennomsnittlige mellomrommet

- φ (fi): arbeidstid = tid brukt på faktisk arbeid, også kalt behandlingstid

- ω (omega): ventetid = tid som ikke brukes på faktisk arbeid, også kalt ventende tid

![Diagram: ledetiden τ er ventetiden ω etterfulgt av arbeidstiden φ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time.svg)

Eksempler:

- τ = 5s betyr at et element legges i køen og blir betjent 5 sekunder senere.

- ω = 4s betyr at et element venter i køen i 4 sekunder, og deretter starter arbeidet.

- φ = 1s betyr at et element krever 1 sekund arbeid og deretter er ferdig.

- θ = 1s betyr at det går 1 sekund mellom én fullføring og den neste.

Sammenhenger:

- τ = ω + φ: ledetid er ventetid pluss arbeidstid. I eksemplene er 5s = 4s + 1s.

- gjennomsnittlig θ ≈ 1 / χ: i stabil tilstand er den gjennomsnittlige stegtiden den inverse av den totale raten. Ett enkelt mellomrom sier lite om raten; gjennomsnittet av mange mellomrom sier mer. I eksemplene, hvis den gjennomsnittlige stegtiden er 1s, er χ ≈ 1 element per sekund.

### Kendalls notasjon

Kendalls notasjon er en annen notasjon i køteori, skrevet som A/S/c/K/N/D:

- A: ankomstprosessen, det vil si fordelingen av tiden mellom ankomster.

- S: tjenesteprosessen, det vil si fordelingen av tjenestetider.

- c: antall servere.

- K: kapasiteten, det vil si det største antallet elementer som tillates i systemet, ventende eller under betjening, før nye ankomster blir avvist.

- N: populasjonen, det vil si antallet potensielle kunder.

- D: disiplinen, det vil si køtypen, for eksempel FIFO eller LIFO.

Vanlige bokstaver for A og S:

- M: Markovsk, også kalt hukommelsesløs, det vil si eksponentielle tider, som oppstår fra Poisson-ankomster.

- D: Deterministisk, det vil si konstante tider.

- G: Generell, det vil si en hvilken som helst fordeling.

Når de tre siste utelates, er standardverdiene K = ∞, N = ∞, D = FIFO. For eksempel betyr «M/M/1» Poisson-ankomster, eksponentielle tjenestetider, én server, ubegrenset kapasitet, ubegrenset populasjon og først inn, først ut.

Også:

- n: antall elementer i systemet.

## Kømatematikk

Matematikkdelene bruker lærebøkenes symboler, slik at De kan sammenligne dem med andre kilder: S er den gjennomsnittlige tjenestetiden, som er vår φ, og μ = 1 / S er kapasiteten til én server.

### Utnyttelseskurven

Det aller viktigste resultatet i køteori: når utnyttelsen nærmer seg 100 %, vokser ventetiden uten grense, og den vokser raskest helt på slutten.

For en M/M/1-kø, der S er den gjennomsnittlige tjenestetiden:

- Ledetid τ = S / (1 − ρ)

- Ventetid ω = S × ρ / (1 − ρ)

| Utnyttelse ρ | Ledetid τ | Ventetid ω |
| ------------ | --------- | ---------- |
| 50 %         | 2 × S     | 1 × S      |
| 70 %         | 3,3 × S   | 2,3 × S    |
| 80 %         | 5 × S     | 4 × S      |
| 90 %         | 10 × S    | 9 × S      |
| 95 %         | 20 × S    | 19 × S     |
| 99 %         | 100 × S   | 99 × S     |

Eksempel: en kodegjennomgang krever 1 times arbeid. Hvis de som gjennomgår, er opptatt 80 % av tiden, tar en gjennomgang omtrent 5 timer fra forespørsel til ferdig. Hvis de er opptatt 95 % av tiden, tar den omtrent 20 timer, selv om de bare er 15 prosentpoeng mer opptatt.

Det er derfor «hold alle 100 % opptatt» er en oppskrift på lange ledetider, og derfor advarer [innsiktene](#innsikter) nedenfor mot å planlegge for høy utnyttelse.

### Kingmans formel

Kingmans formel, også kalt VUT-ligningen, gir en tilnærming til ventetiden for en kø med én server og vilkårlige ankomst- og tjenestefordelinger (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

De tre faktorene er:

- U: utnyttelsesfaktoren ρ / (1 − ρ), som er utnyttelseskurven ovenfor.

- V: variabilitetsfaktoren (ca² + cs²) / 2, der ca er variasjonskoeffisienten for tiden mellom ankomster, og cs er variasjonskoeffisienten for tjenestetidene. Variasjonskoeffisienten er standardavviket delt på gjennomsnittet.

- T: tidsfaktoren S, den gjennomsnittlige tjenestetiden.

Eksempel: for en M/M/1-kø er ca = cs = 1, så V = 1, og formelen gir samme ventetid som utnyttelseskurven. Hvis De gjør arbeidselementene mer ensartede, for eksempel ved å dele opp store oppgaver slik at cs faller fra 1 til nesten 0, faller V til omtrent 0,5, og ventetiden blir omtrent halvert ved samme utnyttelse.

Kingmans formel viser de tre spakene for å redusere ventetiden:

- Reduser utnyttelsen, for eksempel ved å legge til kapasitet eller begrense pågående arbeid.

- Reduser variabiliteten, for eksempel med mindre partier, mer ensartede arbeidselementer eller jevnere ankomster.

- Reduser tjenestetiden, for eksempel ved automatisering.

### Sammenslåing av køer og Erlang C

Én felles kø som forsyner flere servere, er bedre enn separate køer som hver forsyner én server. Det er derfor banker bruker én kø som forsyner mange kasserere, og derfor slår en felles brukerstøttekø køer per medarbeider.

Eksempel: to servere bruker hver 1 time per element, og elementene ankommer med 1,6 elementer per time totalt, så utnyttelsen er 80 %.

- Separate køer: hver server er en M/M/1-kø med 0,8 ankomster per time, så ledetiden er 1 / (1 − 0,8) = 5 timer.

- Felles kø: begge serverne deler en M/M/2-kø, så ledetiden er omtrent 2,8 timer, som er omtrent 44 % mindre, med de samme menneskene og det samme arbeidet.

Erlang C-formelen beregner sannsynligheten for at et ankommende element må vente i en M/M/c-kø, med tilbudt last a = λ / μ og utnyttelse ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Ventetid ω = P(wait) / (c μ − λ)

Kundeserviceteam bruker Erlang C til å bestemme hvor mange medarbeidere de skal bemanne med for å nå et mål, for eksempel «80 % av samtalene besvart innen 20 sekunder».

Sammenslåing har grenser: den fungerer best når hvilken som helst server kan håndtere hvilket som helst element. Hvis elementene krever spesialister, kan en felles kø trenge regler for ruting.

## Aktivitetssporing

### Aktivitetseksempler

Anta at vi har noe vi ønsker å følge, og at vi kaller det noe generelt, for eksempel «Aktivitet», forkortet til «A».

Vi kan effektivt bruke kønotasjon til å beskrive aktiviteten og hvordan den beveger seg gjennom en kø.

Eksempler:

- Aκ: antall i aktiviteten: hvor mange elementer som er i køen.

- Aλ: ankomstrate for aktiviteten: hvor mange elementer som kommer inn per tidsenhet.

- Aχ: total rate for aktiviteten: hvor mange elementer som går ut av køen per tidsenhet.

- Aα: suksessrate for aktiviteten: hvor mange elementer som er riktige per tidsenhet.

- Aβ: feilrate for aktiviteten, også kalt feilfrekvens: hvor mange elementer som er feil per tidsenhet.

- Aμ: tjenesterate for aktiviteten, også kalt kapasitet: hvor mange elementer én server kan fullføre per tidsenhet når den er opptatt.

- Aσ: overhoppsrate for aktiviteten: hvor mange elementer som oppgis per tidsenhet.

- Aρ: utnyttelsesgrad for aktiviteten: andelen av tilgjengelig tid serverne er opptatt, det vil si opptatt tid ÷ tilgjengelig tid, eller λ / (c μ).

- Aε: feilandel for aktiviteten: hvor mange elementer som fullføres med feil, sammenlignet med totalen.

- Aτ: ledetid for aktiviteten: hvor mye tid som går fra forespurt til fullført.

- Aω: ventetid for aktiviteten: hvor mye tid som går fra forespurt til startet.

- Aφ: arbeidstid for aktiviteten: hvor mye tid som går fra startet til fullført.

- Aθ: stegtid for aktiviteten: hvor mye tid som går fra én fullføring til neste fullføring.

### Littles lov

Littles lov er et teorem av John Little som sier: det langsiktige gjennomsnittlige antallet L kunder i et stasjonært system er lik den langsiktige gjennomsnittlige effektive ankomstraten λ multiplisert med den gjennomsnittlige tiden W som en kunde tilbringer i systemet.

Eksempel på notasjon:

- L: langsiktig gjennomsnittlig antall kunder i systemet. Vi foretrekker κ (kappa).

- λ: langsiktig gjennomsnittlig effektiv ankomstrate, det vil si elementer som faktisk kommer inn i systemet, altså uten avvisninger ved inngangen.

- W: langsiktig gjennomsnittlig tid et element er i systemet. Vi foretrekker τ (tau).

- L = λ W er Littles lov. Vi foretrekker κ = λ τ (kappa = lambda \* tau).

Littles lov er bemerkelsesverdig generell: den gjelder uavhengig av ankomstfordelingen, tjenestefordelingen, antall servere eller køtypen.

Forutsetninger for Littles lov:

- Alle måleenheter er konsistente.

- Systemet er stabilt, det vil si at den gjennomsnittlige ankomstraten er lik den gjennomsnittlige avgangsraten i måleperioden, og at antallet elementer er omtrent det samme i begynnelsen og på slutten.

- Elementer som går tidlig, for eksempel ved frafall, telles enten konsistent med i både λ og τ, eller utelates konsistent fra begge.

Eksempel: et team har i gjennomsnitt κ = 20 saker under arbeid, og sakene ankommer med λ = 4 per uke; i stabil tilstand fullfører teamet også χ = 4 per uke. Den gjennomsnittlige saken tar altså τ = κ / λ = 5 uker. For å halvere ledetiden uten å arbeide raskere, halver det pågående arbeidet.

### Nøkkelindikatorer (KPI-er)

Vi følger vanligvis mange forhold ved aktivitetene i køen, og vi ønsker å oppsummere resultatene ved å velge en kort liste over de mest relevante for prosjektene våre.

Vi har bygget mange prosjekter, og vi mener at de mest verdifulle oppsummerende indikatorene er:

- Dτ = ledetid for levering. Produktteam kan si «fra konsept til kunde» eller «fra idé til implementering».

- Dα = suksessrate for levering. DevOps-team kan si «utrullingsfrekvens» eller «vi leverer X ganger per dag».

- Dε = feilandel for levering. Kvalitetsteam kan si «feilrate for endringer» eller «prosentandel tilbakerullinger».

- Rτ = ledetid for gjenoppretting. Ingeniører innen nettstedspålitelighet kan si «gjenopprettingstid etter mislykket utrulling» eller «gjennomsnittlig tid til gjenoppretting (MTTR)».

## Tjenestemetrikker

Nyttige begreper:

- **Service Level Indicator (SLI):** er metrikken (f.eks. 99,9 % oppetid)
- **Service Level Objective (SLO):** det interne målet for den metrikken (f.eks. sikt mot 99,95 % oppetid)
- **Service Level Agreement (SLA):** det formelle, kontraktsfestede løftet til kunden (f.eks. 99,9 % oppetid med sanksjoner hvis det ikke nås).

### Gjennomsnittlig tid til respons, reparasjon, gjenoppretting, løsning

MTTR står for fire forskjellige målinger:

| Metrikk                  | Fokus                     | Måler                                   | Start                                  | Slutt                                 |
| ------------------------ | ------------------------- | --------------------------------------- | -------------------------------------- | ------------------------------------- |
| **Mean Time To Respond** | Første reaksjon           | Tid til å bekrefte og begynne å handle  | Når hendelsen oppdages/rapporteres     | Når teamet begynner å arbeide med den |
| **Mean Time To Repair**  | Teknisk retting           | Tid til å rette det som er ødelagt      | Når reparasjonsarbeidet begynner       | Når elementet er rettet               |
| **Mean Time To Recover** | Gjenoppretting av tjenesten | Tid til å gjenopprette full tjeneste  | Når hendelsen/avbruddet begynner       | Når tjenesten er helt i drift         |
| **Mean Time To Resolve** | Fullstendig løsning       | Total tid fra oppdagelse til avslutning | Når hendelsen oppdages                 | Når hendelsen er helt avsluttet       |

**Viktige forskjeller:**

**Respond** måler teamets beredskap og hvor effektiv varslingen er. En kort responstid betyr at overvåkingen og vaktordningene Deres fungerer godt, selv om selve rettingen tar lengre tid.

**Repair** er snevert teknisk – hvor lang tid tar det faktisk å rette det som er ødelagt, når De først arbeider med det? Den utelater tid til oppdagelse, triage og verifisering.

**Recover** handler om tjenestens tilgjengelighet sett fra kundens perspektiv. Systemet kan være «reparert», men ennå ikke «gjenopprettet», hvis De fortsatt må gjenopprette data, varme opp hurtigbuffere eller verifisere funksjonalitet.

**Resolve** er den mest omfattende – den fanger hele livssyklusen til hendelsen, fra første oppdagelse gjennom verifisering etter hendelsen og avslutning.

Eksempelscenario:

- 02.00 — Avbruddet begynner
- 02.05 — Varselet utløses, hendelsen oppdages
- 02.15 — Vakthavende bekrefter og begynner arbeidet → Responstid: 10 min (02.05 til 02.15)
- 02.45 — Rotårsaken er funnet, rettingen er rullet ut → Reparasjonstid: 30 min (02.15 til 02.45)
- 03.00 — Tjenesten er verifisert som fungerende for brukerne → Gjenopprettingstid: 60 min (02.00 til 03.00)
- 03.30 — Hendelsessaken lukkes etter verifisering → Løsningstid: 85 min (02.05 til 03.30)

Relaterte metrikker:

- MTBF (gjennomsnittlig tid før feil)
- MTTF (gjennomsnittlig tid til feil)
- MTTA (gjennomsnittlig tid til bekreftelse)

### DORA-metrikker

DevOps Research and Assessment (DORA)-metrikker er bransjestandardiserte nøkkelindikatorer (KPI-er) spesielt for DevOps-team innen programvareutvikling. Se [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA bruker nå fem metrikker, i to grupper.

Gjennomstrømningsmetrikker:

- **Change Lead Time** – Tiden det tar å implementere, teste og levere kode for en funksjon (målt fra commit til utrulling i produksjon). Vær presis om hva De mener med start og slutt. Noen team liker for eksempel å måle fra når en utvikler begynner arbeidet med en sak, til når utvikleren sender arbeidet til en prosess for kontinuerlig integrasjon; denne tilnærmingen er ofte mer effektiv for å måle personlig produktivitet.

- **Deployment Frequency** – Antall utrullinger i et gitt tidsrom. Vær presis om hva De mener med utrulling, og hvordan De følger frekvensen. Noen team ruller for eksempel ut til en flåte av produksjonsservere og følger hele utrullingen, mens andre team ruller ut til én enkelt server for brukerakseptansetest (UAT) og følger når prosjektlederen sender en e-postkunngjøring til brukerne om å begynne å teste.

- **Failed Deployment Recovery Time** – Tiden det tar å gjenopprette etter en utrulling som forårsaker en feil i produksjon. Denne ble tidligere kalt Mean Time to Recovery (MTTR) eller Time to Restore Service. Vær presis om hva De mener med gjenoppretting. Noen team regner for eksempel gjenoppretting som fullstendig løsning, det vil si den totale tiden fra en hendelse oppdages til den er helt avsluttet; denne tilnærmingen beskrives bedre som Mean Time To Resolve.

Ustabilitetsmetrikker:

- **Change Failure Rate** – Prosentandelen av utrullinger som forårsaker en feil i produksjon og krever umiddelbar utbedring, for eksempel en tilbakerulling eller en hurtigretting. Vær presis om hva De mener med feil. Noen team regner for eksempel også som feil når de begynner på en arbeidssak og så innser at saken ikke har nok informasjon til å gå videre, slik at teamet sender saken tilbake til spesifikasjonsteamet.

- **Deployment Rework Rate** – Prosentandelen av utrullinger som er uplanlagte, for eksempel for å rette en hendelse i produksjon. Dette er uplanlagte utrullinger delt på totale utrullinger. DORA la til denne metrikken i 2024.

Tidligere DORA-rapporter drøftet også **Reliability** som en metrikk for driftsytelse: en bredere, ofte kvalitativ, vurdering av tjenestens stabilitet, for eksempel tilgjengelighet, oppetid, latens, nøyaktighet og tjenestenivåmål. Pålitelighet bidrar til å vise at høy hastighet ikke går på bekostning av systemets evne.

## Kø av køer

Køteori er lett å utvide til en kø av køer, for eksempel en prosess på høyere nivå som inneholder trinn, faser eller porter på lavere nivå.

### Double Diamond som kø av køer

Tenk for eksempel på innovasjonsprosessmodellen «Double Diamond», som angir fire trinn:

1. Oppdag: Forstå problemet i stedet for bare å anta hva det er.
2. Definer: Definer utfordringen med innsikt fra oppdagelsesfasen.
3. Utvikle: Gi ulike svar på det tydelig definerte problemet.
4. Lever: Test ulike løsninger i liten skala og forbedre dem deretter.

Køteori kan modellere dette som én prosesskø som inneholder fire trinnkøer:

- Prosessens ankomstrate er ankomstraten til trinn 1.
- Prosessens suksessrate er suksessraten til trinn 4.
- Prosessens antall feil er summen av trinnenes antall feil.
- Prosessens antall overhopp er summen av trinnenes antall overhopp.
- Prosessens ledetid er summen av trinnenes ledetider.
- Prosessens maksimale gjennomstrømning er gjennomstrømningen til det tregeste trinnet, også kalt flaskehalsen.

### Trakt som kø av køer

I det praktiske arbeidet vårt bruker vi ofte ordet «trakt» løst om en kø av køer som har en tendens til å redusere antallet elementer i hvert trinn:

- En rekrutteringskø med et trinn for oppsøkende arbeid, et intervjutrinn og et tilbudstrinn. For en slik kø sikter vi mot å maksimere ankomstraten i trinn 1, det vil si å øke det oppsøkende arbeidet, for eksempel gjennom kampanjer.

- En innkjøpskø med et trinn for kundesøk, et handlekurvtrinn og et betalingstrinn. For en slik kø sikter vi mot å minimere overhoppsraten i trinn 2, det vil si å redusere forlatte handlekurver, for eksempel gjennom påminnelser.

- En programmeringskø med et integrasjonstrinn, et trinn for brukeraksept og et trinn for utrulling i produksjon. For en slik kø sikter vi mot å minimere feilraten i trinnet for utrulling i produksjon, for eksempel gjennom kanari-telemetri.

## Innsikter

Sju innsikter i køteori, av Bob Wescott, forfatter av «The Every Computer Performance Book» (se også [Kottkes sammendrag](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Jo tregere tjenestesenteret er, desto lavere maksimal utnyttelse bør De planlegge for ved toppbelastning.

2. Det er svært vanskelig å utnytte de siste 15 % av noe som helst.

3. Jo nærmere De er kanten, desto høyere er prisen for å ta feil.

4. Økninger i responstid begrenses av hvor mange som kan vente.

5. Husk at dette er et gjennomsnitt, ikke et maksimum.

6. Det finnes en menneskelig fornektelseseffekt ved flere tjenestesentre.

7. Vis små forbedringer i sitt beste lys.

## Epilog

### Se også

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Områder på Wikipedia der vi bruker køer i mange prosjekter:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Introduksjoner av John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Mer detaljerte introduksjoner:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formler:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Takk

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Denne boken er utmerket for DevOps på et overordnet nivå, og den ligger direkte til grunn for vårt valg av KPI-er. KPI-ene på denne siden samsvarer med bokens anbefalinger.

## Prosjektinformasjon

- Pakke: queue-theory
- Versjon: 3.0.0
- Opprettet: 2019-01-25T04:17:56Z
- Oppdatert: 2026-11-23T15:33:48Z
- Lisens: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, eller vennligst kontakt oss for andre vilkår (se [LICENSE.md](LICENSE.md))
- Kontakt: Joel Parker Henderson <joel@joelparkerhenderson.com>
