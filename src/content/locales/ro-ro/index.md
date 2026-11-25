# Teoria cozilor de așteptare

Teoria cozilor de așteptare este studiul matematic al șirurilor de așteptare, adică al cozilor. Folosim teoria cozilor în dezvoltarea noastră de software, în scopuri precum analiza și optimizarea practicilor și proceselor noastre, de exemplu promptitudinea serviciului pentru clienți, planificarea kanban în managementul proiectelor, cozile de mesaje pentru comunicarea între procese și pipeline-urile de implementare continuă DevOps.

Cuprins:

- [Introducere](#introducere)
  - [Promptitudinea serviciului pentru clienți](#promptitudinea-serviciului-pentru-clienți)
  - [Planificarea kanban în managementul proiectelor](#planificarea-kanban-în-managementul-proiectelor)
  - [Cozi de mesaje pentru comunicarea între procese](#cozi-de-mesaje-pentru-comunicarea-între-procese)
  - [Pipeline-uri de implementare continuă DevOps](#pipeline-uri-de-implementare-continuă-devops)
- [Terminologia cozilor](#terminologia-cozilor)
  - [Tipuri de cozi și tipuri de servire](#tipuri-de-cozi-și-tipuri-de-servire)
- [Notația teoriei cozilor](#notația-teoriei-cozilor)
  - [Număr](#număr)
  - [Rata de sosire, rata de servire, rata de plecare](#rata-de-sosire-rata-de-servire-rata-de-plecare)
  - [Raportul de utilizare, adică intensitatea traficului](#raportul-de-utilizare-adică-intensitatea-traficului)
  - [Ratele de debit: rata de plecare, rata de finalizare, rata de succes, rata de eșec, rata de abandon](#ratele-de-debit-rata-de-plecare-rata-de-finalizare-rata-de-succes-rata-de-eșec-rata-de-abandon)
  - [Dezambiguizarea ratei de servire](#dezambiguizarea-ratei-de-servire)
  - [Rata de abandon](#rata-de-abandon)
  - [Raportul de erori](#raportul-de-erori)
  - [Timpul de livrare, timpul de așteptare, timpul de lucru, timpul de pas](#timpul-de-livrare-timpul-de-așteptare-timpul-de-lucru-timpul-de-pas)
  - [Notația Kendall](#notația-kendall)
- [Matematica cozilor](#matematica-cozilor)
  - [Curba utilizării](#curba-utilizării)
  - [Formula lui Kingman](#formula-lui-kingman)
  - [Gruparea și Erlang C](#gruparea-și-erlang-c)
- [Urmărirea activităților](#urmărirea-activităților)
  - [Exemple de activități](#exemple-de-activități)
  - [Legea lui Little](#legea-lui-little)
  - [Indicatori-cheie de performanță (KPI)](#indicatori-cheie-de-performanță-kpi)
- [Metrici de servicii](#metrici-de-servicii)
  - [Timpul mediu de răspuns, reparare, recuperare, rezolvare](#timpul-mediu-de-răspuns-reparare-recuperare-rezolvare)
  - [Metricile DORA](#metricile-dora)
- [Coadă de cozi](#coadă-de-cozi)
  - [Coada de cozi Double Diamond](#coada-de-cozi-double-diamond)
  - [Coada de cozi tip pâlnie](#coada-de-cozi-tip-pâlnie)
- [Observații](#observații)
- [Epilog](#epilog)
  - [Consultați și](#consultați-și)
  - [Mulțumiri](#mulțumiri)
- [Informații despre proiect](#informații-despre-proiect)

## Introducere

Folosim teoria cozilor în proiectele noastre în multe scopuri:

- Promptitudinea serviciului pentru clienți

- Planificarea kanban în managementul proiectelor

- Cozi de mesaje pentru comunicarea între procese

- Pipeline-uri de implementare continuă DevOps

### Promptitudinea serviciului pentru clienți

De exemplu, dorim să analizăm modul în care clienții solicită ajutor pentru vânzări și asistență, precum și cât de repede răspundem.

Câteva produse relevante sunt, de exemplu, [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Planificarea kanban în managementul proiectelor

De exemplu, dorim să urmărim timpii de livrare și timpii de progres pe măsură ce ideea unei funcționalități noi evoluează de la proiectare la livrare.

Câteva produse relevante sunt, de exemplu, [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Cozi de mesaje pentru comunicarea între procese

De exemplu, dorim să maximizăm debitele și să minimizăm presiunile atunci când un program trimite cereri către alt program.

Câteva produse relevante sunt, de exemplu, [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Pipeline-uri de implementare continuă DevOps

De exemplu, dorim să ne asigurăm că serverul nostru de integrare continuă are capacitatea de a testa software-ul nostru și apoi de a-l implementa.

Câteva produse relevante sunt, de exemplu, [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Terminologia cozilor

Terminologia cozilor este un subiect vast. Această secțiune conține o parte din terminologia noastră uzuală. Pentru exemple, vom folosi ideea unui client care așteaptă la coadă.

### Tipuri de cozi și tipuri de servire

Tipurile de cozi și tipurile de servire descriu modul în care coada alege ce elemente să proceseze.

- First In First Out (FIFO), primul intrat, primul ieșit: se servește clientul care așteaptă de cel mai mult timp.

- Last In First Out (LIFO), ultimul intrat, primul ieșit: se servește clientul care așteaptă de cel mai puțin timp.

- Prioritate: clienții sunt serviți în funcție de nivelul lor de prioritate; aceste niveluri se pot baza pe statut, urgență, plată etc.

- Shortest Job First (SJF), cea mai scurtă sarcină mai întâi: se servește clientul care are nevoie de cea mai mică cantitate de servire.

- Longest Job First (LJF), cea mai lungă sarcină mai întâi: se servește clientul care are nevoie de cea mai mare cantitate de servire.

- Shortest Remaining Processing Time (SRPT), cel mai scurt timp de procesare rămas: ca SJF, dar o sarcină scurtă nou sosită poate întrerupe o sarcină mai lungă aflată deja în servire.

- Round Robin: fiecare client este servit pentru o scurtă cuantă de timp, apoi se trece la clientul următor și se repetă.

- Partajarea timpului, cunoscută și ca Processor Sharing (PS): toată lumea este servită în același timp; capacitatea de servire este distribuită în mod egal între toți cei care așteaptă.

SJF și SRPT minimizează așteptarea medie, dar pot înfometa la nesfârșit sarcinile lungi, așa că sistemele reale adaugă adesea îmbătrânirea (aging) sau plafoane de prioritate.

## Notația teoriei cozilor

Teoria cozilor folosește o notație cu litere grecești.

Echipele noastre folosesc o parte din notația populară; adăugăm și o notație proprie care ne ajută în proiectele software.

Notația noastră și semnificația fiecărui simbol:

| Notația noastră | Semnificație |
| --------------- | ------------ |
| κ (kappa) | numărul de elemente din sistem, cele care așteaptă plus cele în lucru |
| λ (lambda) | rata de sosire a elementelor care intră în sistem |
| χ (chi) | rata de plecare a elementelor care ies din sistem |
| μ (mu) | rata de servire, adică capacitatea: cât de repede lucrează un server cât este ocupat |
| ρ (rho) | utilizarea: fracțiunea de timp în care serverele sunt ocupate, λ / (c μ) |
| α (alpha) | rata de succes: producția observată care se dovedește corectă |
| β (beta) | rata de eșec: producția observată care se dovedește greșită |
| δ (delta) | rata de finalizare: succes + eșec, elemente servite, indiferent dacă rezultatul este corect sau greșit |
| σ (sigma) | rata de abandon: elemente care au intrat, apoi au plecat neservite |
| ε (epsilon) | raportul de erori: β / (α + β) = β / δ |
| τ (tau) | timpul în sistem, adică timpul de livrare |
| ω (omega) | timpul de așteptare, adică timpul în coadă |
| φ (phi) | timpul de lucru, adică timpul în procesor, adică timpul de servire |
| θ (theta) | timpul de pas între finalizări; timpul mediu de pas ≈ 1 / χ în regim staționar |

### Număr

Numărăm des elemente și folosim această notație:

- κ (kappa): numărul de elemente din sistem, adică elementele care așteaptă plus elementele în lucru.

![Diagramă: în sistem sunt κ elemente](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Exemplu:

- κ = 10 înseamnă exact 10

- κ ≈ 10 înseamnă aproximativ 10

- κ < 10 înseamnă mai puțin de 10

- κ > 10 înseamnă mai mult de 10

- κ ≪ 10 înseamnă mult mai puțin de 10

- κ ≫ 10 înseamnă mult mai mult de 10

Numărul κ (kappa) este o instantanee a unui moment.

Numărul mediu κ̅ (kappa cu bară) este un calcul care face media măsurătorilor pe o perioadă de timp specifică, de exemplu măsurând în fiecare oră timp de două săptămâni.

### Rata de sosire, rata de servire, rata de plecare

Cea mai importantă notație:

- λ (lambda): rata de sosire. Aceasta măsoară cât de repede intră elementele în sistem.

- μ (mu): rata de servire, adică capacitatea. Aceasta măsoară cât de repede poate gestiona un server elementele cât timp este ocupat.

- χ (chi): rata de plecare. Aceasta măsoară cât de repede ies elementele din sistem.

![Diagramă: elementele sosesc cu rata λ, sunt servite cu rata μ și pleacă cu rata χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-mu-service-chi-departure.svg)

Exemple de generalități pentru cozile tradiționale cu un singur server:

- λ < μ înseamnă că rata de sosire este mai mică decât rata de servire; coada este stabilă, adică fluctuează în jurul unei dimensiuni medii finite.

- λ = μ înseamnă că rata de sosire este egală cu rata de servire; la orice grad de aleatoriu, coada derivă și crește fără limită.

- λ > μ înseamnă că rata de sosire este mai mare decât rata de servire; coada crește constant, cu aproximativ λ − μ elemente pe unitatea de timp.

Ideea intuitivă că „λ = μ menține coada la aceeași dimensiune” este adevărată doar atunci când sosirile și servirea sunt perfect regulate, ca un metronom. Sosirile reale vin în rafale, așa că timpul inactiv pierdut într-o perioadă de acalmie nu mai poate fi recuperat niciodată, iar coada crește în timpul rafalei următoare.

Vă rugăm să rețineți că unii practicieni ai teoriei cozilor folosesc „rata de servire” în sensul de producție observată, nu de capacitate; consultați [dezambiguizarea ratei de servire](#dezambiguizarea-ratei-de-servire).

### Raportul de utilizare, adică intensitatea traficului

Cea mai importantă notație care rezumă o coadă:

- ρ (rho): raportul de utilizare, adică fracțiunea de timp în care serverele sunt ocupate = λ / μ pentru un server sau λ / (c μ) pentru c servere

Exemple:

- ρ < 1 înseamnă că serverele au capacitate disponibilă; coada este stabilă. Cu cât ρ se apropie mai mult de 1, cu atât așteptările sunt mai lungi; consultați [curba utilizării](#curba-utilizării).

- ρ = 1 înseamnă că serverele sunt ocupate tot timpul; coada este instabilă și crește fără limită.

- ρ > 1 înseamnă că sosirile depășesc capacitatea; coada se mărește.

### Ratele de debit: rata de plecare, rata de finalizare, rata de succes, rata de eșec, rata de abandon

Ratele de debit măsoară producția observată, adică elementele care părăsesc efectiv coada. Ele se împart în cinci categorii mari:

- χ (chi): rata de plecare. Aceasta măsoară cât de repede ies elementele din sistem.

- α (alpha): rata de succes. Aceasta măsoară câte elemente pe perioadă de timp se dovedesc corecte, de exemplu exacte, complete, acceptate.

- β (beta): rata de eșec. Aceasta măsoară câte elemente pe perioadă de timp se dovedesc greșite, de exemplu inexacte, incomplete, respinse.

- δ (delta): rata de finalizare. Aceasta măsoară câte elemente pe perioadă de timp sunt servite.

- σ (sigma): rata de abandon. Aceasta măsoară câte elemente pe perioadă de timp intră în coadă, apoi pleacă fără a fi servite, de exemplu abandonuri, renunțări.

![Diagramă: rata de plecare χ = rata de finalizare δ + rata de abandon σ; rata de finalizare δ = rata de succes α + rata de eșec β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Rata de finalizare = rata de succes + rata de eșec:

- δ = α + β (se pronunță: delta egal alpha plus beta)

Rata totală = rata de finalizare + rata de abandon:

- χ = δ + σ (se pronunță: chi egal delta plus sigma)

Rata totală = rata de succes + rata de eșec + rata de abandon:

- χ = α + β + σ (se pronunță: chi egal alpha plus beta plus sigma)

Fiecare element numărat în χ a intrat în sistem, așa că în regim staționar rata totală este egală cu rata de sosire: χ ≈ λ. De aceea ratele de debit măsoară producția, nu capacitatea.

### Dezambiguizarea ratei de servire

În funcție de context și de practician, termenul „rată de servire” poate însemna fie
„rata totală”, fie „rata de succes”.

Aceasta are rădăcini istorice și poate duce la confuzii și greșeli, mai ales în
contexte și la practicieni care folosesc teoria cozilor acolo unde există o nevoie
semnificativă de a urmări eșecurile și abandonurile.

- Perspectiva teoretică: rata de servire este o măsurare pură a vitezei (de exemplu, sarcini pe secundă), indiferent dacă sarcinile sunt succese, eșecuri, abandonuri etc.

- Perspectiva procesării: rata de servire include tot ceea ce coada petrece timp procesând, adică succesele sau eșecurile, dar nu include abandonurile.

- Perspectiva tehnologică: în domenii aplicate precum ingineria software, rata de servire măsoară doar succesele, în timp ce rata de erori măsoară eșecurile, iar rata de abandon măsoară abandonurile.

Prin urmare, păstrăm μ pentru capacitate și adăugăm alături ratele de producție observată, în loc să îl înlocuim:

- μ (mu): rata de servire, adică capacitatea. Aceasta măsoară cât de repede poate gestiona un server elementele cât timp este ocupat.

- χ (chi): rata de plecare. Aceasta măsoară cât de repede ies elementele din sistem.

- α (alpha): rata de succes. Aceasta măsoară câte elemente pe perioadă de timp se dovedesc corecte, de exemplu exacte, complete, acceptate.

De ce să nu înlocuim μ cu χ sau α? Într-o coadă stabilă, fiecare element care intră pleacă în cele din urmă, așa că χ ≈ λ. Atunci λ / χ ≈ 1 indiferent de încărcare, ceea ce nu spune nimic despre cât de ocupate sunt serverele. Utilizarea are nevoie de capacitate: ρ = λ / (c μ), care este egală cu fracțiunea de timp în care serverele sunt ocupate.

### Rata de abandon

Detalii despre rata de abandon:

- σ (sigma): rata de abandon. Aceasta măsoară câte elemente intră în coadă, apoi pleacă fără a fi procesate.

Un abandon are loc atunci când un element intră în coadă, apoi pleacă fără nicio procesare semnificativă:

- Abandonarea (abandoning): atunci când un client intră într-o coadă, apoi pleacă, din orice motiv.

- Renunțarea (reneging): atunci când un client care a așteptat deja decide să plece pentru că a pierdut prea mult timp.

Două comportamente înrudite nu sunt abandonuri:

- Refuzul (balking): atunci când un client decide să nu intre în coadă pentru că timpul de așteptare amenință să fie prea lung. Un element refuzat nu intră niciodată în sistem, deci se află în afara granițelor sistemului: nu este numărat în λ, χ sau σ. Dacă refuzurile contează, de exemplu ca vânzări pierdute, atunci numărați-le separat ca sosiri respinse.

- Schimbarea cozii (jockeying): atunci când un client trece de la o coadă paralelă la alta, de exemplu între casele de marcat, încercând să obțină o așteptare mai scurtă.

### Raportul de erori

Cea mai importantă notație care rezumă succesul unei cozi:

- ε (epsilon): raportul de erori = numărul de eșecuri / (numărul de succese + numărul de eșecuri) = β / (α + β) = β / δ

Abandonurile sunt excluse, deoarece un element abandonat nu a fost niciodată servit, deci nu a fost nici corect, nici greșit. Urmăriți abandonurile separat prin σ.

![Diagramă: raportul de erori ε este rata de eșec β împărțită la rata de finalizare δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Exemple:

- ε = 0 înseamnă nicio eroare.

- ε = 0,1 înseamnă că 10% dintre serviri au o eroare.

- ε = 1 înseamnă că fiecare servire are o eroare.

### Timpul de livrare, timpul de așteptare, timpul de lucru, timpul de pas

Urmărim patru timpi:

- τ (tau): timpul în sistem, adică timpul de livrare, adică de la început până la sfârșit.

- θ (theta): timpul de pas = de la o finalizare până la următoarea finalizare; un timp de pas este un interval, iar timpul mediu de pas este intervalul mediu

- ω (omega): timpul de așteptare = timpul petrecut fără muncă efectivă, cunoscut și ca timp în așteptare

- φ (phi): timpul de lucru = timpul petrecut făcând muncă efectivă, cunoscut și ca timp de procesare

![Diagramă: timpul de livrare τ, timpul de așteptare ω, timpul de lucru φ, timpul de pas θ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time-theta-step-time.svg)

Exemple:

- τ = 5s înseamnă că un element intră în sistem, apoi iese din sistem 5 secunde mai târziu.

- ω = 4s înseamnă că un element așteaptă în coadă 4 secunde, apoi începe lucrul.

- φ = 1s înseamnă că un element necesită 1 secundă de lucru, apoi este finalizat.

- θ = 1s înseamnă că există 1 secundă între o finalizare și următoarea finalizare.

Relații:

- τ = ω + φ: timpul de livrare este timpul de așteptare plus timpul de lucru. În exemple, 5s = 4s + 1s.

- θ mediu ≈ 1 / χ: în regim staționar, timpul mediu de pas este inversul ratei totale. Un singur interval spune puțin despre rată; media multor intervale spune mult. În exemple, dacă timpul mediu de pas este 1s, atunci χ ≈ 1 element pe secundă.

### Notația Kendall

Notația Kendall este o altă notație a teoriei cozilor, scrisă ca A/S/c/K/N/D:

- A: procesul de sosire, adică distribuția timpului dintre sosiri.

- S: procesul de servire, adică distribuția timpilor de servire.

- c: numărul de servere.

- K: capacitatea, adică numărul maxim de elemente permise în sistem, care așteaptă sau sunt servite, înainte ca sosirile noi să fie respinse.

- N: populația, adică numărul de clienți potențiali.

- D: disciplina, adică tipul de coadă, de exemplu FIFO sau LIFO.

Litere uzuale pentru A și S:

- M: markovian, adică fără memorie, ceea ce înseamnă timpi exponențiali, care rezultă din sosiri Poisson.

- D: determinist, adică timpi constanți.

- G: general, adică orice distribuție.

Când ultimele trei sunt omise, valorile implicite sunt K = ∞, N = ∞, D = FIFO. De exemplu, „M/M/1” înseamnă sosiri Poisson, timpi de servire exponențiali, un server, capacitate nelimitată, populație nelimitată și primul intrat, primul ieșit.

De asemenea:

- n: numărul de elemente din sistem.

## Matematica cozilor

Secțiunile de matematică folosesc simbolurile din manuale, astfel încât să le puteți compara cu alte surse: S este timpul mediu de servire, adică φ al nostru, iar μ = 1 / S este capacitatea unui server.

### Curba utilizării

Cel mai important rezultat din teoria cozilor: pe măsură ce utilizarea se apropie de 100%, timpul de așteptare crește fără limită și crește cel mai repede la final.

Pentru o coadă M/M/1, unde S este timpul mediu de servire:

- Timpul de livrare τ = S / (1 − ρ)

- Timpul de așteptare ω = S × ρ / (1 − ρ)

| Utilizarea ρ | Timpul de livrare τ | Timpul de așteptare ω |
| ------------ | ------------------- | --------------------- |
| 50%          | 2 × S               | 1 × S                 |
| 70%          | 3,3 × S             | 2,3 × S               |
| 80%          | 5 × S               | 4 × S                 |
| 90%          | 10 × S              | 9 × S                 |
| 95%          | 20 × S              | 19 × S                |
| 99%          | 100 × S             | 99 × S                |

Exemplu: o revizuire de cod necesită 1 oră de lucru. Dacă recenzenții sunt ocupați 80%, o revizuire durează aproximativ 5 ore de la solicitare până la finalizare. Dacă recenzenții sunt ocupați 95%, durează aproximativ 20 de ore, deși recenzenții sunt cu doar 15 puncte procentuale mai ocupați.

De aceea „să-i ținem pe toți ocupați 100%” este o rețetă pentru timpi de livrare lungi și de aceea [observațiile](#observații) de mai jos avertizează împotriva planificării pentru o utilizare ridicată.

### Formula lui Kingman

Formula lui Kingman, cunoscută și ca ecuația VUT, aproximează timpul de așteptare pentru o coadă cu un singur server, cu orice distribuții de sosire și de servire (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Cei trei factori sunt:

- U: factorul de utilizare ρ / (1 − ρ), care este curba utilizării de mai sus.

- V: factorul de variabilitate (ca² + cs²) / 2, unde ca este coeficientul de variație al timpului dintre sosiri, iar cs este coeficientul de variație al timpilor de servire. Coeficientul de variație este abaterea standard împărțită la medie.

- T: factorul de timp S, timpul mediu de servire.

Exemplu: pentru o coadă M/M/1, ca = cs = 1, deci V = 1, iar formula dă același timp de așteptare ca și curba utilizării. Dacă faceți elementele de lucru mai uniforme, de exemplu prin împărțirea tichetelor mari astfel încât cs să scadă de la 1 aproape de 0, atunci V scade la aproximativ 0,5, iar timpul de așteptare se reduce aproximativ la jumătate la aceeași utilizare.

Formula lui Kingman arată cele trei pârghii pentru reducerea timpului de așteptare:

- Reducerea utilizării, de exemplu prin adăugarea de capacitate sau limitarea lucrului în curs.

- Reducerea variabilității, de exemplu prin loturi mai mici, elemente de lucru mai uniforme sau sosiri mai line.

- Reducerea timpului de servire, de exemplu prin automatizare.

### Gruparea și Erlang C

O singură coadă comună care alimentează mai multe servere este mai bună decât cozi separate care alimentează fiecare câte un server. De aceea băncile folosesc un singur șir care alimentează mai multe ghișee și de aceea o coadă comună de asistență este mai bună decât cozile individuale pentru fiecare agent.

Exemplu: două servere au nevoie fiecare de 1 oră per element, iar elementele sosesc în total cu 1,6 elemente pe oră, deci utilizarea este de 80%.

- Cozi separate: fiecare server este o coadă M/M/1 cu 0,8 sosiri pe oră, deci timpul de livrare este 1 / (1 − 0,8) = 5 ore.

- Coadă comună: ambele servere împart o coadă M/M/2, deci timpul de livrare este de aproximativ 2,8 ore, adică cu aproximativ 44% mai puțin, cu aceiași oameni și aceeași muncă.

Formula Erlang C calculează probabilitatea ca un element care sosește să trebuiască să aștepte într-o coadă M/M/c, cu încărcarea oferită a = λ / μ și utilizarea ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Timpul de așteptare ω = P(wait) / (c μ − λ)

Echipele de servicii pentru clienți folosesc Erlang C pentru a decide câți agenți să angajeze pe tură pentru a atinge o țintă, de exemplu „80% dintre apeluri preluate în 20 de secunde”.

Gruparea are limite: funcționează cel mai bine atunci când orice server poate gestiona orice element. Dacă elementele necesită specialiști, atunci o coadă comună poate avea nevoie de reguli de rutare.

## Urmărirea activităților

### Exemple de activități

Să presupunem că avem ceva ce dorim să urmărim și îl numim generic, de exemplu „Activitate”, abreviat „A”.

Putem folosi eficient notația cozilor pentru a descrie activitatea și modul în care aceasta trece printr-o coadă.

Exemple:

- Aκ: numărul activității: câte elemente sunt în coadă.

- Aλ: rata de sosire a activității: câte elemente intră pe unitatea de timp.

- Aχ: rata totală a activității: câte elemente ies din coadă pe unitatea de timp.

- Aα: rata de succes a activității: câte elemente sunt corecte pe unitatea de timp.

- Aβ: rata de eșec a activității, cunoscută și ca rata de erori: câte elemente sunt greșite pe unitatea de timp.

- Aμ: rata de servire a activității, adică capacitatea: câte elemente poate finaliza un server pe unitatea de timp cât este ocupat.

- Aσ: rata de abandon a activității: câte elemente sunt abandonate pe unitatea de timp.

- Aρ: raportul de utilizare a activității: fracțiunea din timpul disponibil în care serverele sunt ocupate, adică timpul ocupat ÷ timpul disponibil, sau λ / (c μ).

- Aε: raportul de erori al activității: câte elemente sunt finalizate cu erori față de total.

- Aτ: timpul de livrare al activității: cât timp trece de la solicitare la finalizare.

- Aω: timpul de așteptare al activității: cât timp trece de la solicitare la începere.

- Aφ: timpul de lucru al activității: cât timp trece de la începere la finalizare.

- Aθ: timpul de pas al activității: cât timp trece de la o finalizare la următoarea finalizare.

### Legea lui Little

Legea lui Little este o teoremă a lui John Little care afirmă: numărul mediu pe termen lung L de clienți dintr-un sistem staționar este egal cu rata medie efectivă de sosire pe termen lung λ înmulțită cu timpul mediu W pe care un client îl petrece în sistem.

Exemplu de notație:

- L: numărul mediu pe termen lung de clienți din sistem. Preferăm κ (kappa).

- λ: rata medie efectivă de sosire pe termen lung, adică elementele care intră efectiv în sistem, deci fără refuzuri.

- W: timpul mediu pe termen lung în care un element se află în sistem. Preferăm τ (tau).

- L = λ W este legea lui Little. Preferăm κ = λ τ (kappa = lambda \* tau).

Legea lui Little este remarcabil de generală: este valabilă indiferent de distribuția sosirilor, de distribuția servirii, de numărul de servere sau de tipul de coadă.

Ipotezele legii lui Little:

- Toate unitățile de măsură sunt consecvente.

- Sistemul este stabil, adică rata medie de sosire este egală cu rata medie de plecare pe perioada de măsurare, iar numărul de elemente este aproximativ același la început și la final.

- Elementele care pleacă devreme, de exemplu prin renunțare, sunt fie numărate consecvent atât în λ, cât și în τ, fie excluse consecvent din ambele.

Exemplu: o echipă are în medie κ = 20 de tichete în lucru, iar tichetele sosesc cu λ = 4 pe săptămână; în regim staționar, echipa finalizează de asemenea χ = 4 pe săptămână. Așadar, tichetul mediu durează τ = κ / λ = 5 săptămâni. Pentru a reduce la jumătate timpul de livrare fără a lucra mai repede, reduceți la jumătate lucrul în curs.

### Indicatori-cheie de performanță (KPI)

De obicei urmărim multe aspecte ale activităților din coadă și dorim să rezumăm rezultatele alegând o listă scurtă cu cele mai relevante pentru proiectele noastre.

Am construit multe proiecte și considerăm că cei mai valoroși indicatori de sinteză sunt:

- Dτ = timpul de livrare (delivery). Echipele de produs pot spune „de la concept la client” sau „de la idee la implementare”.

- Dα = rata de succes a livrărilor. Echipele DevOps pot spune „frecvența implementărilor” sau „livrăm de X ori pe zi”.

- Dε = raportul de erori al livrărilor. Echipele de calitate pot spune „rata de eșec a modificărilor” sau „procentul de reveniri (rollback)”.

- Rτ = timpul de restabilire (restore). Inginerii de fiabilitate a site-urilor pot spune „timpul de recuperare după o implementare eșuată” sau „timpul mediu de restabilire (MTTR)”.

## Metrici de servicii

Termeni utili:

- **Service Level Indicator (SLI), indicatorul nivelului de serviciu:** este metrica (de exemplu, 99,9% disponibilitate)
- **Service Level Objective (SLO), obiectivul nivelului de serviciu:** ținta internă pentru acea metrică (de exemplu, urmărirea unei disponibilități de 99,95%)
- **Service Level Agreement (SLA), acordul privind nivelul de serviciu:** promisiunea formală, contractuală, față de client (de exemplu, 99,9% disponibilitate, cu penalități în caz de nerespectare).

### Timpul mediu de răspuns, reparare, recuperare, rezolvare

MTTR reprezintă patru măsurători diferite:

| Metrică                  | Accent                  | Ce măsoară                                       | Început                                       | Sfârșit                                         |
| ------------------------ | ----------------------- | ------------------------------------------------ | --------------------------------------------- | ----------------------------------------------- |
| **Mean Time To Respond** | Reacția inițială        | Timpul până la confirmare și începerea acțiunii  | Când incidentul este detectat/raportat        | Când echipa începe să lucreze la el             |
| **Mean Time To Repair**  | Remedierea tehnică      | Timpul de reparare a elementului defect          | Când încep lucrările de reparare              | Când elementul este reparat                     |
| **Mean Time To Recover** | Restabilirea serviciului | Timpul de restabilire completă a serviciului    | Când începe incidentul/întreruperea           | Când serviciul este complet operațional         |
| **Mean Time To Resolve** | Rezolvarea completă     | Timpul total de la detectare până la închidere   | Când incidentul este detectat                 | Când incidentul este complet închis             |

**Distincții-cheie:**

**Respond** (răspuns) măsoară pregătirea echipei și eficacitatea alertării. Un timp de răspuns scurt înseamnă că monitorizarea și procesele de gardă funcționează bine, chiar dacă remedierea propriu-zisă durează mai mult.

**Repair** (reparare) este strict tehnic: cât durează efectiv repararea lucrului defect odată ce lucrați la el? Exclude timpul de detectare, trierea și verificarea.

**Recover** (recuperare) se referă la disponibilitatea serviciului din perspectiva clientului. Sistemul poate fi „reparat”, dar încă nu „recuperat”, dacă mai trebuie să restaurați date, să încălziți cache-urile sau să verificați funcționalitatea.

**Resolve** (rezolvare) este cea mai cuprinzătoare: acoperă întregul ciclu de viață al incidentului, de la prima detectare până la verificarea post-incident și închidere.

Exemplu de scenariu:

- 02:00 — Începe întreruperea
- 02:05 — Se declanșează alerta, incidentul este detectat
- 02:15 — Persoana de gardă confirmă și începe lucrul → Timp de răspuns: 10 min (02:05 până la 02:15)
- 02:45 — Cauza principală este identificată, remedierea este implementată → Timp de reparare: 30 min (02:15 până la 02:45)
- 03:00 — Serviciul este verificat ca funcționând pentru utilizatori → Timp de recuperare: 60 min (02:00 până la 03:00)
- 03:30 — Tichetul incidentului este închis după verificare → Timp de rezolvare: 85 min (02:05 până la 03:30)

Metrici înrudite:

- MTBF (mean time before failure, timpul mediu înainte de defectare)
- MTTF (mean time to failure, timpul mediu până la defectare)
- MTTA (mean time to acknowledge, timpul mediu până la confirmare)

### Metricile DORA

Metricile DevOps Research and Assessment (DORA) sunt indicatori-cheie de performanță (KPI) standard în industrie, special pentru echipele DevOps de inginerie software. Consultați [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA folosește acum cinci metrici, în două grupuri.

Metrici de debit:

- **Change Lead Time** (timpul de livrare a modificărilor) - Timpul necesar pentru a implementa, testa și livra codul pentru o funcționalitate (măsurat de la commit până la implementarea în producție). Vă rugăm să precizați clar ce înțelegeți prin început și sfârșit. De exemplu, unele echipe preferă să măsoare de la momentul în care un dezvoltator începe lucrul la un tichet până la momentul în care dezvoltatorul trimite lucrul într-un proces de integrare continuă; această abordare tinde să fie mai eficientă pentru măsurarea productivității individuale.

- **Deployment Frequency** (frecvența implementărilor) - Numărul de implementări într-un interval de timp dat. Vă rugăm să precizați clar ce înțelegeți prin implementare și cum urmăriți frecvența. De exemplu, unele echipe fac o implementare pe o flotă de servere de producție și urmăresc lansarea completă, în timp ce alte echipe fac implementarea pe un singur server de testare de acceptanță de către utilizatori (UAT) și urmăresc momentul în care managerul de proiect trimite utilizatorilor un e-mail de anunț pentru a începe testarea.

- **Failed Deployment Recovery Time** (timpul de recuperare după o implementare eșuată) - Timpul necesar pentru recuperarea după o implementare care provoacă un eșec în producție. Aceasta se numea anterior Mean Time to Recovery (MTTR) sau Time to Restore Service. Vă rugăm să precizați clar ce înțelegeți prin recuperare. De exemplu, unele echipe consideră recuperarea ca fiind rezolvarea completă, adică timpul total de la detectarea unui incident până la închiderea completă a acestuia; această abordare este descrisă mai bine ca Mean Time To Resolve.

Metrici de instabilitate:

- **Change Failure Rate** (rata de eșec a modificărilor) - Procentul de implementări care provoacă un eșec în producție și necesită remediere imediată, de exemplu o revenire (rollback) sau un hotfix. Vă rugăm să precizați clar ce înțelegeți prin eșec. De exemplu, unele echipe numără ca eșec și situația în care încep lucrul la un tichet, apoi își dau seama că tichetul nu are suficiente informații pentru a continua, așa că echipa returnează tichetul echipei de specificații.

- **Deployment Rework Rate** (rata de refacere a implementărilor) - Procentul de implementări neplanificate, de exemplu pentru remedierea unui incident de producție. Aceasta reprezintă implementările neplanificate împărțite la totalul implementărilor. DORA a adăugat această metrică în 2024.

Rapoartele DORA anterioare discutau și **Reliability** (fiabilitatea) ca metrică de performanță operațională: o evaluare mai largă, adesea calitativă, a consecvenței serviciului, cum ar fi disponibilitatea, timpul de funcționare, latența, acuratețea și obiectivele nivelului de serviciu. Fiabilitatea ajută la a arăta că viteza mare nu vine în detrimentul capacității sistemului.

## Coadă de cozi

Teoria cozilor se extinde ușor la o coadă de cozi, de exemplu un proces de nivel superior care conține etape, faze sau porți de nivel inferior.

### Coada de cozi Double Diamond

De exemplu, să considerăm modelul procesului de inovare „Double Diamond” (dublul diamant), care specifică patru etape:

1. Descoperire: înțelegeți problema, în loc să presupuneți doar ce este.
2. Definire: cu informațiile din faza de descoperire, definiți provocarea.
3. Dezvoltare: oferiți răspunsuri diferite la problema clar definită.
4. Livrare: testați diferite soluții la scară mică, apoi îmbunătățiți-le.

Teoria cozilor poate modela acest lucru ca o coadă de proces care conține patru cozi de etapă:

- Rata de sosire a procesului este rata de sosire a etapei 1.
- Rata de succes a procesului este rata de succes a etapei 4.
- Numărul de erori al procesului este suma numerelor de erori ale etapelor.
- Numărul de abandonuri al procesului este suma numerelor de abandonuri ale etapelor.
- Timpul de livrare al procesului este suma timpilor de livrare ai etapelor.
- Debitul maxim al procesului este debitul celei mai lente etape, cunoscută și ca gâtul de sticlă.

### Coada de cozi tip pâlnie

În munca noastră practică, folosim frecvent cuvântul „pâlnie” pentru a descrie în mod liber o coadă de cozi care tinde să reducă numărul de elemente la fiecare etapă:

- Coada de recrutare, care folosește o etapă de contactare, o etapă de interviu și o etapă de ofertă. Pentru acest tip de coadă, urmărim maximizarea ratei de sosire a etapei 1, adică intensificarea contactării, de exemplu prin promovări.

- Coada de cumpărare, care folosește o etapă de căutare a clientului, o etapă de coș de cumpărături și o etapă de plată. Pentru acest tip de coadă, urmărim minimizarea ratei de abandon a etapei 2, adică reducerea abandonării coșului, de exemplu prin mementouri.

- Coada de programare, care folosește o etapă de integrare, o etapă de acceptanță de către utilizatori și o etapă de lansare în producție. Pentru acest tip de coadă, urmărim minimizarea ratei de erori a etapei de lansare în producție, de exemplu prin telemetrie canary.

## Observații

Șapte observații despre teoria cozilor, de Bob Wescott, autorul cărții „The Every Computer Performance Book” (consultați și [rezumatul lui Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Cu cât centrul de servire este mai lent, cu atât utilizarea maximă pe care ar trebui să o planificați la sarcina de vârf este mai mică.

2. Este foarte greu să folosiți ultimele 15% din orice.

3. Cu cât sunteți mai aproape de limită, cu atât prețul unei greșeli este mai mare.

4. Creșterile timpului de răspuns sunt limitate de numărul celor care pot aștepta.

5. Rețineți că aceasta este o medie, nu un maxim.

6. Există un efect uman de negare în centrele de servire multiple.

7. Prezentați micile îmbunătățiri în cea mai bună lumină.

## Epilog

### Consultați și

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Domenii Wikipedia în care folosim cozi în multe proiecte:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Introduceri de John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Introduceri mai detaliate:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formule:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Mulțumiri

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Această carte este excelentă pentru DevOps la nivel înalt și ne influențează direct alegerea KPI-urilor. KPI-urile de pe această pagină sunt aliniate cu recomandările cărții.

## Informații despre proiect

- Pachet: queue-theory
- Versiune: 3.0.0
- Creat: 2019-01-25T04:17:56Z
- Actualizat: 2026-11-23T15:33:48Z
- Licență: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0` sau vă rugăm să ne contactați pentru alte condiții (consultați [LICENSE.md](LICENSE.md))
- Contact: Joel Parker Henderson <joel@joelparkerhenderson.com>
