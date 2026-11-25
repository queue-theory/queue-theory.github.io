# Eilių teorija

Eilių teorija – tai matematinis laukimo eilių, arba eilių, tyrimas. Eilių teoriją taikome savo programinės įrangos kūrime, pavyzdžiui, analizuodami ir optimizuodami savo praktiką ir procesus: klientų aptarnavimo reagavimą, projektų valdymo „Kanban“ planavimą, tarpprocesinio ryšio pranešimų eiles ir „DevOps“ nuolatinio diegimo konvejerius.

Turinys:

- [Įvadas](#įvadas)
  - [Klientų aptarnavimo reagavimas](#klientų-aptarnavimo-reagavimas)
  - [Projektų valdymo „Kanban“ planavimas](#projektų-valdymo-kanban-planavimas)
  - [Tarpprocesinio ryšio pranešimų eilės](#tarpprocesinio-ryšio-pranešimų-eilės)
  - [„DevOps“ nuolatinio diegimo konvejeriai](#devops-nuolatinio-diegimo-konvejeriai)
- [Eilių terminija](#eilių-terminija)
  - [Eilių tipai ir aptarnavimo tipai](#eilių-tipai-ir-aptarnavimo-tipai)
- [Eilių teorijos žymėjimas](#eilių-teorijos-žymėjimas)
  - [Skaičius](#skaičius)
  - [Atvykimo sparta, aptarnavimo sparta, išvykimo sparta](#atvykimo-sparta-aptarnavimo-sparta-išvykimo-sparta)
  - [Apkrovos santykis, dar vadinamas srauto intensyvumu](#apkrovos-santykis-dar-vadinamas-srauto-intensyvumu)
  - [Pralaidumo spartos: bendroji sparta, įvykdymo sparta, sėkmės sparta, nesėkmės sparta, praleidimo sparta](#pralaidumo-spartos-bendroji-sparta-įvykdymo-sparta-sėkmės-sparta-nesėkmės-sparta-praleidimo-sparta)
  - [Aptarnavimo spartos sąvokos patikslinimas](#aptarnavimo-spartos-sąvokos-patikslinimas)
  - [Praleidimo sparta](#praleidimo-sparta)
  - [Klaidų santykis](#klaidų-santykis)
  - [Įgyvendinimo trukmė, žingsnio laikas, darbo laikas, laukimo laikas](#įgyvendinimo-trukmė-žingsnio-laikas-darbo-laikas-laukimo-laikas)
  - [Kendallo žymėjimas](#kendallo-žymėjimas)
- [Eilių matematika](#eilių-matematika)
  - [Apkrovos kreivė](#apkrovos-kreivė)
  - [Kingmano formulė](#kingmano-formulė)
  - [Telkimas ir „Erlang C“](#telkimas-ir-erlang-c)
- [Veiklų stebėjimas](#veiklų-stebėjimas)
  - [Veiklų pavyzdžiai](#veiklų-pavyzdžiai)
  - [Little’o dėsnis](#littleo-dėsnis)
  - [Pagrindiniai veiklos rodikliai (KPI)](#pagrindiniai-veiklos-rodikliai-kpi)
- [Paslaugų metrikos](#paslaugų-metrikos)
  - [Vidutinis reagavimo, taisymo, atsigavimo, išsprendimo laikas](#vidutinis-reagavimo-taisymo-atsigavimo-išsprendimo-laikas)
  - [DORA metrikos](#dora-metrikos)
- [Eilių eilė](#eilių-eilė)
  - [„Double Diamond“ eilių eilė](#double-diamond-eilių-eilė)
  - [Piltuvo eilių eilė](#piltuvo-eilių-eilė)
- [Įžvalgos](#įžvalgos)
- [Epilogas](#epilogas)
  - [Taip pat žr.](#taip-pat-žr)
  - [Padėka](#padėka)
- [Projekto informacija](#projekto-informacija)

## Įvadas

Eilių teoriją savo projektuose taikome daugeliui tikslų:

- Klientų aptarnavimo reagavimas

- Projektų valdymo „Kanban“ planavimas

- Tarpprocesinio ryšio pranešimų eilės

- „DevOps“ nuolatinio diegimo konvejeriai

### Klientų aptarnavimo reagavimas

Pavyzdžiui, norime išanalizuoti, kaip klientai kreipiasi pagalbos dėl pardavimų ir techninės pagalbos ir kaip greitai mes reaguojame.

Keletas susijusių produktų, pvz., [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Projektų valdymo „Kanban“ planavimas

Pavyzdžiui, norime stebėti įgyvendinimo trukmes ir eigos trukmes, kai nauja funkcijos idėja vystosi nuo projektavimo iki pristatymo.

Keletas susijusių produktų, pvz., [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Tarpprocesinio ryšio pranešimų eilės

Pavyzdžiui, norime maksimaliai padidinti pralaidumą ir maksimaliai sumažinti apkrovą, kai viena programa siunčia užklausas kitai programai.

Keletas susijusių produktų, pvz., [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### „DevOps“ nuolatinio diegimo konvejeriai

Pavyzdžiui, norime užtikrinti, kad mūsų nuolatinės integracijos serveris turėtų pakankamai pajėgumų mūsų programinei įrangai išbandyti ir tada ją įdiegti.

Keletas susijusių produktų, pvz., [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Eilių terminija

Eilių terminija – plati tema. Šiame skyriuje pateikiama dalis mūsų dažniausiai vartojamų terminų. Pavyzdžiuose naudosime eilėje laukiančio kliento idėją.

### Eilių tipai ir aptarnavimo tipai

Eilių tipai ir aptarnavimo tipai apibūdina, kaip eilė pasirenka, kuriuos elementus apdoroti.

- Pirmas atėjo, pirmas išėjo (FIFO): aptarnaujamas klientas, kuris laukia ilgiausiai.

- Paskutinis atėjo, pirmas išėjo (LIFO): aptarnaujamas klientas, kuris laukia trumpiausiai.

- Prioritetas: klientai aptarnaujami pagal jų prioriteto lygį; šie lygiai gali priklausyti nuo statuso, skubumo, mokėjimo ir pan.

- Trumpiausias darbas pirmas (SJF): aptarnaujamas klientas, kuriam reikia mažiausiai aptarnavimo.

- Ilgiausias darbas pirmas (LJF): aptarnaujamas klientas, kuriam reikia daugiausiai aptarnavimo.

- Trumpiausias likęs apdorojimo laikas (SRPT): kaip SJF, tačiau ką tik atėjęs trumpas darbas gali išstumti ilgesnį, jau aptarnaujamą darbą.

- Ratinis paskirstymas („Round Robin“): kiekvienas klientas aptarnaujamas trumpą laiko kvantą, tada pereinama prie kito kliento, ir taip kartojama.

- Laiko dalijimas, dar vadinamas procesoriaus dalijimu (PS): visi aptarnaujami vienu metu; aptarnavimo pajėgumas tolygiai paskirstomas visiems laukiantiesiems.

SJF ir SRPT sumažina vidutinį laukimą, tačiau ilgi darbai gali būti neribotai atidėliojami, todėl realiose sistemose dažnai pridedamas senėjimas arba prioriteto ribos.

## Eilių teorijos žymėjimas

Eilių teorijoje vartojamas žymėjimas graikiškomis raidėmis.

Mūsų komandos vartoja dalį populiaraus žymėjimo; be to, pridedame savo žymėjimą, kuris padeda programinės įrangos projektuose.

Mūsų žymėjimas ir kiekvieno simbolio reikšmė:

| Mūsų žymėjimas | Reikšmė |
| -------------- | ------- |
| κ (kapa) | elementų skaičius sistemoje: laukiantys ir apdorojami |
| λ (lambda) | į sistemą patenkančių elementų atvykimo sparta |
| χ (chi) | iš sistemos išeinančių elementų išvykimo sparta |
| μ (miu) | aptarnavimo sparta, dar vadinama pajėgumu: kaip greitai dirba vienas užimtas serveris |
| ρ (ro) | apkrova: laiko dalis, kai serveriai užimti, λ / (c μ) |
| α (alfa) | sėkmės sparta: stebima išeiga, kuri pasirodo esanti teisinga |
| β (beta) | nesėkmės sparta: stebima išeiga, kuri pasirodo esanti klaidinga |
| δ (delta) | įvykdymo sparta: sėkmė + nesėkmė, aptarnauti elementai, nesvarbu, ar rezultatas teisingas, ar klaidingas |
| σ (sigma) | praleidimo sparta: elementai, kurie pateko, bet išėjo neaptarnauti |
| ε (epsilon) | klaidų santykis: β / (α + β) = β / δ |
| τ (tau) | laikas sistemoje, dar vadinamas įgyvendinimo trukme |
| ω (omega) | laukimo laikas, dar vadinamas laiku eilėje |
| φ (fi) | darbo laikas, dar vadinamas laiku procesoriuje, dar vadinamas aptarnavimo laiku |
| θ (teta) | žingsnio laikas tarp užbaigimų; stacionarioje būsenoje vidutinis žingsnio laikas ≈ 1 / χ |

### Skaičius

Elementus skaičiuojame dažnai ir vartojame tokį žymėjimą:

- κ (kapa): elementų skaičius sistemoje, t. y. laukiantys elementai ir apdorojami elementai.

![Diagrama: sistemoje yra κ elementų](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Pavyzdys:

- κ = 10 reiškia lygiai 10

- κ ≈ 10 reiškia maždaug 10

- κ < 10 reiškia mažiau nei 10

- κ > 10 reiškia daugiau nei 10

- κ ≪ 10 reiškia gerokai mažiau nei 10

- κ ≫ 10 reiškia gerokai daugiau nei 10

Skaičius κ (kapa) yra vieno momento momentinė nuotrauka.

Vidutinis skaičius κ̅ (kapa su brūkšniu) yra skaičiavimas, kuris suvidurkina matavimus per tam tikrą laikotarpį, pavyzdžiui, matuojant kas valandą dvi savaites.

### Atvykimo sparta, aptarnavimo sparta, išvykimo sparta

Svarbiausias žymėjimas:

- λ (lambda): atvykimo sparta. Ji parodo, kaip greitai elementai patenka į sistemą.

- μ (miu): aptarnavimo sparta, dar vadinama pajėgumu. Ji parodo, kaip greitai vienas serveris gali apdoroti elementus, kai yra užimtas.

- χ (chi): išvykimo sparta. Ji parodo, kaip greitai elementai išeina iš sistemos.

![Diagrama: elementai atvyksta sparta λ, aptarnaujami sparta μ ir išeina sparta χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-rate-mu-service-rate-chi-departure-rate.svg)

Bendrųjų dėsningumų pavyzdžiai tradicinėms eilėms su vienu serveriu:

- λ < μ reiškia, kad atvykimo sparta mažesnė už aptarnavimo spartą; eilė stabili, t. y. jos dydis svyruoja apie baigtinį vidurkį.

- λ = μ reiškia, kad atvykimo sparta lygi aptarnavimo spartai; esant bent kokiam atsitiktinumui, eilė dreifuoja ir auga neribotai.

- λ > μ reiškia, kad atvykimo sparta didesnė už aptarnavimo spartą; eilė nuolat auga, maždaug λ − μ elementų per laiko vienetą.

Intuityvi mintis, kad „λ = μ išlaiko pastovų eilės dydį“, teisinga tik tada, kai atvykimai ir aptarnavimas visiškai reguliarūs, kaip metronomas. Tikri atvykimai būna pliūpsniais, todėl per atoslūgį prarastas prastovos laikas niekada nebeatgaunamas, o per kitą pliūpsnį eilė auga.

Atkreipkite dėmesį, kad kai kurie eilių teorijos praktikai „aptarnavimo sparta“ vadina stebimą išeigą, o ne pajėgumą; žr. [aptarnavimo spartos sąvokos patikslinimą](#aptarnavimo-spartos-sąvokos-patikslinimas).

### Apkrovos santykis, dar vadinamas srauto intensyvumu

Svarbiausias žymėjimas, apibendrinantis eilę:

- ρ (ro): apkrovos santykis, t. y. laiko dalis, kai serveriai užimti = λ / μ vienam serveriui arba λ / (c μ) c serverių atveju

Pavyzdžiai:

- ρ < 1 reiškia, kad serveriai turi laisvų pajėgumų; eilė stabili. Kuo ρ arčiau 1, tuo ilgesni laukimai; žr. [apkrovos kreivę](#apkrovos-kreivė).

- ρ = 1 reiškia, kad serveriai užimti visą laiką; eilė nestabili ir auga neribotai.

- ρ > 1 reiškia, kad atvykimai viršija pajėgumą; eilė didėja.

### Pralaidumo spartos: bendroji sparta, įvykdymo sparta, sėkmės sparta, nesėkmės sparta, praleidimo sparta

Pralaidumo spartos matuoja stebimą išeigą, t. y. elementus, kurie iš tikrųjų palieka eilę. Jos skirstomos į penkias plačias kategorijas:

- χ (chi): išvykimo sparta. Ji parodo, kaip greitai elementai išeina iš sistemos.

- α (alfa): sėkmės sparta. Ji parodo, kiek elementų per laikotarpį pasirodo esantys teisingi, pvz., tikslūs, užbaigti, priimti.

- β (beta): nesėkmės sparta. Ji parodo, kiek elementų per laikotarpį pasirodo esantys klaidingi, pvz., netikslūs, neužbaigti, atmesti.

- δ (delta): įvykdymo sparta. Ji parodo, kiek elementų per laikotarpį aptarnaujama.

- σ (sigma): praleidimo sparta. Ji parodo, kiek elementų per laikotarpį patenka į eilę, o tada išeina neaptarnauti, pvz., pasitraukimai, atsisakymai.

Įvykdymo sparta = sėkmės sparta + nesėkmės sparta:

- δ = α + β (tariama: delta lygu alfa plius beta)

Bendroji sparta = įvykdymo sparta + praleidimo sparta:

- χ = δ + σ (tariama: chi lygu delta plius sigma)

Bendroji sparta = sėkmės sparta + nesėkmės sparta + praleidimo sparta:

- χ = α + β + σ (tariama: chi lygu alfa plius beta plius sigma)

![Diagrama: išvykimo sparta χ = įvykdymo sparta δ + praleidimo sparta σ; įvykdymo sparta δ = sėkmės sparta α + nesėkmės sparta β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Kiekvienas į χ įskaičiuotas elementas buvo patekęs į sistemą, todėl stacionarioje būsenoje bendroji sparta lygi atvykimo spartai: χ ≈ λ. Štai kodėl pralaidumo spartos matuoja išeigą, o ne pajėgumą.

### Aptarnavimo spartos sąvokos patikslinimas

Priklausomai nuo konteksto ir praktiko, terminas „aptarnavimo sparta“ gali reikšti arba „bendrąją spartą“, arba „sėkmės spartą“.

Tai turi istorines šaknis ir gali sukelti painiavą bei klaidų, ypač kontekstuose ir tiems eilių teoriją taikantiems praktikams, kuriems labai svarbu stebėti nesėkmes ir praleidimus.

- Teorinis požiūris: aptarnavimo sparta yra grynas greičio matas (pvz., darbų per sekundę), nesvarbu, ar darbai yra sėkmės, nesėkmės, praleidimai ir pan.

- Apdorojimo požiūris: aptarnavimo sparta apima viską, ką eilė apdoroja ir kam skiria laiko, t. y. sėkmes ar nesėkmes, bet neapima praleidimų.

- Technologinis požiūris: taikomosiose srityse, pvz., programų inžinerijoje, aptarnavimo sparta matuoja tik sėkmes, o klaidų sparta matuoja nesėkmes, ir praleidimo sparta matuoja praleidimus.

Todėl μ paliekame pajėgumui žymėti, o stebimos išeigos spartas pridedame šalia, užuot jį pakeitę:

- μ (miu): aptarnavimo sparta, dar vadinama pajėgumu. Ji parodo, kaip greitai vienas serveris gali apdoroti elementus, kai yra užimtas.

- χ (chi): išvykimo sparta. Ji parodo, kaip greitai elementai išeina iš sistemos.

- α (alfa): sėkmės sparta. Ji parodo, kiek elementų per laikotarpį pasirodo esantys teisingi, pvz., tikslūs, užbaigti, priimti.

Kodėl nepakeitus μ į χ arba α? Stabilioje eilėje kiekvienas patekęs elementas galiausiai išeina, todėl χ ≈ λ. Tada λ / χ ≈ 1, kad ir kokia būtų apkrova, o tai nieko nepasako apie tai, kiek serveriai užimti. Apkrovai apskaičiuoti reikia pajėgumo: ρ = λ / (c μ), ir tai lygu laiko daliai, kai serveriai užimti.

### Praleidimo sparta

Praleidimo spartos išsamiau:

- σ (sigma): praleidimo sparta. Ji parodo, kiek elementų patenka į eilę, o tada išeina neapdoroti.

Praleidimas – tai atvejis, kai elementas patenka į eilę, o tada išeina be jokio reikšmingo apdorojimo:

- Pasitraukimas: kai klientas prisijungia prie eilės, o tada dėl bet kokios priežasties išeina.

- Atsisakymas: kai jau palaukęs klientas nusprendžia išeiti, nes sugaišo per daug laiko.

Du susiję elgesio būdai nėra praleidimai:

- Atgrasymas: kai klientas nusprendžia neprisijungti prie eilės, nes laukimo laikas grasina būti per ilgas. Atgrasytas elementas niekada nepatenka į sistemą, todėl yra už sistemos ribų: jis neįskaičiuojamas nei į λ, nei į χ, nei į σ. Jei atgrasymai svarbūs, pvz., dėl prarastų pardavimų, skaičiuokite juos atskirai kaip atstumtus atvykimus.

- Šokinėjimas tarp eilių: kai klientas pereina iš vienos lygiagrečios eilės į kitą, pvz., tarp kasų, siekdamas trumpesnio laukimo.

### Klaidų santykis

Svarbiausias žymėjimas, apibendrinantis eilės sėkmę:

- ε (epsilon): klaidų santykis = nesėkmių skaičius / (sėkmių skaičius + nesėkmių skaičius) = β / (α + β) = β / δ

Praleidimai neįtraukiami, nes praleistas elementas niekada nebuvo aptarnautas, todėl jis nebuvo nei teisingas, nei klaidingas. Praleidimus stebėkite atskirai naudodami σ.

![Diagrama: klaidų santykis ε yra nesėkmės sparta β, padalyta iš įvykdymo spartos δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Pavyzdžiai:

- ε = 0 reiškia, kad klaidų nėra.

- ε = 0,1 reiškia, kad 10 % aptarnavimų turi klaidą.

- ε = 1 reiškia, kad kiekvienas aptarnavimas turi klaidą.

### Įgyvendinimo trukmė, žingsnio laikas, darbo laikas, laukimo laikas

Stebime keturis laikus:

- τ (tau): įgyvendinimo trukmė = nuo eilės pradžios iki eilės pabaigos

- θ (teta): žingsnio laikas = nuo vieno užbaigimo iki kito užbaigimo; vienas žingsnio laikas yra vienas tarpas, o vidutinis žingsnio laikas yra vidutinis tarpas

- φ (fi): darbo laikas = laikas, skirtas tikram darbui, dar vadinamas apdorojimo laiku

- ω (omega): laukimo laikas = laikas, kai tikras darbas nedirbamas, dar vadinamas laukimo būsenos laiku

![Diagrama: įgyvendinimo trukmė τ yra laukimo laikas ω, po kurio seka darbo laikas φ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time.svg)

Pavyzdžiai:

- τ = 5s reiškia, kad elementas įtraukiamas į eilę, o aptarnaujamas po 5 sekundžių.

- ω = 4s reiškia, kad elementas eilėje laukia 4 sekundes, o tada pradedamas darbas.

- φ = 1s reiškia, kad elementui reikia 1 sekundės darbo, o tada jis užbaigtas.

- θ = 1s reiškia, kad tarp vieno užbaigimo ir kito užbaigimo praeina 1 sekundė.

Sąryšiai:

- τ = ω + φ: įgyvendinimo trukmė yra laukimo laikas plius darbo laikas. Pavyzdžiuose 5s = 4s + 1s.

- vidutinis θ ≈ 1 / χ: stacionarioje būsenoje vidutinis žingsnio laikas yra atvirkštinis bendrajai spartai. Vienas tarpas mažai ką pasako apie spartą; daugelio tarpų vidurkis pasako. Pavyzdžiuose, jei vidutinis žingsnio laikas yra 1s, tada χ ≈ 1 elementas per sekundę.

### Kendallo žymėjimas

Kendallo žymėjimas yra kitoks eilių teorijos žymėjimas, užrašomas kaip A/S/c/K/N/D:

- A: atvykimo procesas, t. y. laiko tarp atvykimų skirstinys.

- S: aptarnavimo procesas, t. y. aptarnavimo laikų skirstinys.

- c: serverių skaičius.

- K: talpa, t. y. didžiausias leistinas elementų skaičius sistemoje, laukiančių arba aptarnaujamų, prieš pradedant atstumti naujus atvykimus.

- N: populiacija, t. y. potencialių klientų skaičius.

- D: disciplina, t. y. eilės tipas, pvz., FIFO arba LIFO.

Dažnos A ir S raidės:

- M: Markovo, dar vadinamas be atminties, t. y. eksponentiniai laikai, kurie atsiranda iš Puasono atvykimų.

- D: deterministinis, t. y. pastovūs laikai.

- G: bendrasis, t. y. bet koks skirstinys.

Kai trys paskutiniai praleidžiami, numatytosios reikšmės yra K = ∞, N = ∞, D = FIFO. Pavyzdžiui, „M/M/1“ reiškia Puasono atvykimus, eksponentinius aptarnavimo laikus, vieną serverį, neribotą talpą, neribotą populiaciją ir principą „pirmas atėjo, pirmas išėjo“.

Taip pat:

- n: elementų skaičius sistemoje.

## Eilių matematika

Matematikos skyriuose vartojami vadovėliniai simboliai, kad galėtumėte juos palyginti su kitais šaltiniais: S yra vidutinis aptarnavimo laikas, t. y. mūsų φ, o μ = 1 / S yra vieno serverio pajėgumas.

### Apkrovos kreivė

Pats svarbiausias eilių teorijos rezultatas: kai apkrova artėja prie 100 %, laukimo laikas auga neribotai, ir greičiausiai jis auga pačioje pabaigoje.

M/M/1 eilei, kur S yra vidutinis aptarnavimo laikas:

- Įgyvendinimo trukmė τ = S / (1 − ρ)

- Laukimo laikas ω = S × ρ / (1 − ρ)

| Apkrova ρ | Įgyvendinimo trukmė τ | Laukimo laikas ω |
| --------- | --------------------- | ---------------- |
| 50 %      | 2 × S                 | 1 × S            |
| 70 %      | 3,3 × S               | 2,3 × S          |
| 80 %      | 5 × S                 | 4 × S            |
| 90 %      | 10 × S                | 9 × S            |
| 95 %      | 20 × S                | 19 × S           |
| 99 %      | 100 × S               | 99 × S           |

Pavyzdys: kodo peržiūrai reikia 1 valandos darbo. Jei peržiūrėtojai užimti 80 %, peržiūra nuo užklausos iki užbaigimo trunka apie 5 valandas. Jei peržiūrėtojai užimti 95 %, ji trunka apie 20 valandų, nors peržiūrėtojai užimti tik 15 procentinių punktų daugiau.

Štai kodėl principas „visi turi būti užimti 100 %“ yra ilgų įgyvendinimo trukmių receptas ir kodėl toliau pateiktos [įžvalgos](#įžvalgos) įspėja neplanuoti didelės apkrovos.

### Kingmano formulė

Kingmano formulė, dar vadinama VUT lygtimi, apytiksliai įvertina laukimo laiką vieno serverio eilėje su bet kokiais atvykimo ir aptarnavimo skirstiniais (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Trys veiksniai yra:

- U: apkrovos veiksnys ρ / (1 − ρ), t. y. aukščiau aprašyta apkrovos kreivė.

- V: kintamumo veiksnys (ca² + cs²) / 2, kur ca yra laiko tarp atvykimų variacijos koeficientas, o cs yra aptarnavimo laikų variacijos koeficientas. Variacijos koeficientas yra standartinis nuokrypis, padalytas iš vidurkio.

- T: laiko veiksnys S, vidutinis aptarnavimo laikas.

Pavyzdys: M/M/1 eilei ca = cs = 1, todėl V = 1, ir formulė duoda tą patį laukimo laiką kaip apkrovos kreivė. Jei darbo elementus padarysite vienodesnius, pvz., skaidydami didelius bilietus taip, kad cs sumažėtų nuo 1 iki beveik 0, tada V sumažės iki maždaug 0,5, o laukimo laikas, esant tai pačiai apkrovai, sutrumpės maždaug perpus.

Kingmano formulė parodo tris svertus laukimo laikui sumažinti:

- Sumažinkite apkrovą, pvz., pridėdami pajėgumų arba ribodami vykdomą darbą.

- Sumažinkite kintamumą, pvz., mažesnėmis partijomis, vienodesniais darbo elementais arba tolygesniais atvykimais.

- Sumažinkite aptarnavimo laiką, pvz., automatizuodami.

### Telkimas ir „Erlang C“

Viena bendra eilė, aptarnaujama kelių serverių, yra geriau nei atskiros eilės, kurių kiekvieną aptarnauja vienas serveris. Štai kodėl bankai naudoja vieną eilę, iš kurios aptarnauja daug kasininkų, ir kodėl bendra pagalbos eilė pranoksta atskiras kiekvieno darbuotojo eiles.

Pavyzdys: du serveriai kiekvienam elementui skiria po 1 valandą, o elementai iš viso atvyksta po 1,6 elemento per valandą, todėl apkrova yra 80 %.

- Atskiros eilės: kiekvienas serveris yra M/M/1 eilė su 0,8 atvykimo per valandą, todėl įgyvendinimo trukmė yra 1 / (1 − 0,8) = 5 valandos.

- Bendra eilė: abu serveriai dalijasi M/M/2 eile, todėl įgyvendinimo trukmė yra apie 2,8 valandos, t. y. maždaug 44 % mažiau, su tais pačiais žmonėmis ir tuo pačiu darbu.

„Erlang C“ formulė apskaičiuoja tikimybę, kad atvykęs elementas turės laukti M/M/c eilėje, kai pasiūlyta apkrova a = λ / μ, o apkrova ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Laukimo laikas ω = P(wait) / (c μ − λ)

Klientų aptarnavimo komandos naudoja „Erlang C“, kad nuspręstų, kiek darbuotojų reikia tikslui pasiekti, pvz., „80 % skambučių atsiliepiama per 20 sekundžių“.

Telkimas turi ribas: jis veikia geriausiai, kai bet kuris serveris gali apdoroti bet kurį elementą. Jei elementams reikia specialistų, bendrai eilei gali prireikti nukreipimo taisyklių.

## Veiklų stebėjimas

### Veiklų pavyzdžiai

Tarkime, turime kažką, ką norime stebėti, ir pavadiname tai bendriniu žodžiu, pvz., „Veikla“, sutrumpintai „A“.

Galime veiksmingai naudoti eilių žymėjimą, kad aprašytume veiklą ir tai, kaip ji juda per eilę.

Pavyzdžiai:

- Aκ: veiklos skaičius: kiek elementų yra eilėje.

- Aλ: veiklos atvykimo sparta: kiek elementų ateina per laiko vienetą.

- Aχ: veiklos bendroji sparta: kiek elementų išeina iš eilės per laiko vienetą.

- Aα: veiklos sėkmės sparta: kiek elementų yra teisingi per laiko vienetą.

- Aβ: veiklos nesėkmės sparta, dar vadinama klaidų sparta: kiek elementų yra klaidingi per laiko vienetą.

- Aμ: veiklos aptarnavimo sparta, dar vadinama pajėgumu: kiek elementų vienas serveris gali užbaigti per laiko vienetą, kai yra užimtas.

- Aσ: veiklos praleidimo sparta: kiek elementų apleidžiama per laiko vienetą.

- Aρ: veiklos apkrovos santykis: turimo laiko dalis, kai serveriai užimti, t. y. užimtumo laikas ÷ turimas laikas, arba λ / (c μ).

- Aε: veiklos klaidų santykis: kiek elementų užbaigta su klaidomis, palyginti su visais.

- Aτ: veiklos įgyvendinimo trukmė: kiek laiko praeina nuo užklausos iki užbaigimo.

- Aω: veiklos laukimo laikas: kiek laiko praeina nuo užklausos iki pradžios.

- Aφ: veiklos darbo laikas: kiek laiko praeina nuo pradžios iki užbaigimo.

- Aθ: veiklos žingsnio laikas: kiek laiko praeina nuo vieno užbaigimo iki kito užbaigimo.

### Little’o dėsnis

Little’o dėsnis yra Johno Little’o teorema, teigianti: ilgalaikis vidutinis klientų skaičius L stacionarioje sistemoje lygus ilgalaikei vidutinei efektyviajai atvykimo spartai λ, padaugintai iš vidutinio laiko W, kurį klientas praleidžia sistemoje.

Žymėjimo pavyzdys:

- L: ilgalaikis vidutinis klientų skaičius sistemoje. Mes teikiame pirmenybę κ (kapa).

- λ: ilgalaikė vidutinė efektyvioji atvykimo sparta, t. y. elementai, kurie iš tikrųjų patenka į sistemą, taigi be atgrasytųjų.

- W: ilgalaikis vidutinis laikas, kurį elementas praleidžia sistemoje. Mes teikiame pirmenybę τ (tau).

- L = λ W yra Little’o dėsnis. Mes teikiame pirmenybę κ = λ τ (kapa = lambda \* tau).

Little’o dėsnis nepaprastai bendras: jis galioja nepriklausomai nuo atvykimų skirstinio, aptarnavimo skirstinio, serverių skaičiaus ar eilės tipo.

Little’o dėsnio prielaidos:

- Visi matavimo vienetai yra suderinti.

- Sistema stabili, t. y. per matavimo laikotarpį vidutinė atvykimo sparta lygi vidutinei išvykimo spartai, o elementų skaičius pradžioje ir pabaigoje yra maždaug toks pat.

- Anksčiau laiko išeinantys elementai, pvz., atsisakę laukti, yra arba nuosekliai įskaičiuojami ir į λ, ir į τ, arba nuosekliai neįskaičiuojami į abu.

Pavyzdys: komanda vidutiniškai turi κ = 20 vykdomų bilietų, o bilietų atvykimo sparta yra λ = 4 per savaitę; stacionarioje būsenoje komanda taip pat užbaigia χ = 4 per savaitę. Taigi vidutinis bilietas užtrunka τ = κ / λ = 5 savaites. Norėdami perpus sutrumpinti įgyvendinimo trukmę nedirbdami greičiau, perpus sumažinkite vykdomą darbą.

### Pagrindiniai veiklos rodikliai (KPI)

Paprastai stebime daug dalykų apie eilėje esančias veiklas, ir rezultatus norime apibendrinti, atsirinkdami trumpą svarbiausių mūsų projektams rodiklių sąrašą.

Esame sukūrę daug projektų ir manome, kad vertingiausi apibendrinamieji rodikliai yra:

- Dτ = pristatymo įgyvendinimo trukmė. Produktų komandos gali sakyti „nuo koncepcijos iki kliento“ arba „nuo idėjos iki įgyvendinimo“.

- Dα = pristatymo sėkmės sparta. „DevOps“ komandos gali sakyti „diegimų dažnis“ arba „išleidžiame X kartų per dieną“.

- Dε = pristatymo klaidų santykis. Kokybės komandos gali sakyti „pakeitimų nesėkmės dalis“ arba „atšaukimų procentas“.

- Rτ = atkūrimo įgyvendinimo trukmė. Svetainių patikimumo inžinieriai gali sakyti „atsigavimo po nesėkmingo diegimo laikas“ arba „vidutinis atkūrimo laikas (MTTR)“.

## Paslaugų metrikos

Naudingi terminai:

- **Paslaugos lygio rodiklis (SLI):** yra metrika (pvz., 99,9 % veikimo laikas)
- **Paslaugos lygio tikslas (SLO):** vidinis tos metrikos tikslas (pvz., siekti 99,95 % veikimo laiko)
- **Paslaugos lygio sutartis (SLA):** oficialus, sutartinis pažadas klientui (pvz., 99,9 % veikimo laikas su baudomis, jei nepasiekiama).

### Vidutinis reagavimo, taisymo, atsigavimo, išsprendimo laikas

MTTR reiškia keturis skirtingus matavimus:

| Metrika                              | Dėmesys                     | Matuoja                                        | Pradžia                                        | Pabaiga                                      |
| ------------------------------------ | --------------------------- | ---------------------------------------------- | ---------------------------------------------- | -------------------------------------------- |
| **Vidutinis reagavimo laikas**       | Pradinė reakcija            | Laikas patvirtinti ir pradėti veiksmus         | Kai incidentas aptinkamas / pranešamas        | Kai komanda pradeda prie jo dirbti           |
| **Vidutinis taisymo laikas**         | Techninis pataisymas        | Laikas sutaisyti sugedusį elementą             | Kai pradedamas taisymo darbas                  | Kai elementas sutaisytas                     |
| **Vidutinis atsigavimo laikas**      | Paslaugos atkūrimas         | Laikas visiškai atkurti paslaugą               | Kai prasideda incidentas / sutrikimas          | Kai paslauga visiškai veikia                 |
| **Vidutinis išsprendimo laikas**     | Visiškas išsprendimas       | Visas laikas nuo aptikimo iki uždarymo         | Kai incidentas aptinkamas                      | Kai incidentas visiškai uždaromas            |

**Pagrindiniai skirtumai:**

**Reagavimas** matuoja komandos pasirengimą ir įspėjimų veiksmingumą. Trumpas reagavimo laikas reiškia, kad Jūsų stebėsenos ir budėjimo procesai veikia gerai, net jei pats pataisymas užtrunka ilgiau.

**Taisymas** yra siaurai techninis – kiek laiko iš tikrųjų užtrunka sutaisyti sugedusį dalyką, kai jau prie jo dirbate? Jis neapima aptikimo laiko, rūšiavimo ir patikrinimo.

**Atsigavimas** susijęs su paslaugos prieinamumu kliento požiūriu. Sistema gali būti „sutaisyta“, bet dar ne „atsigavusi“, jei Jums dar reikia atkurti duomenis, įšildyti podėlius arba patikrinti funkcionalumą.

**Išsprendimas** yra išsamiausias – jis apima visą incidento gyvavimo ciklą nuo pirmojo aptikimo iki patikrinimo po incidento ir uždarymo.

Scenarijaus pavyzdys:

- 02:00 – prasideda sutrikimas
- 02:05 – suveikia įspėjimas, incidentas aptinkamas
- 02:15 – budintysis patvirtina ir pradeda darbą → reagavimo laikas: 10 min (nuo 02:05 iki 02:15)
- 02:45 – nustatyta pagrindinė priežastis, įdiegtas pataisymas → taisymo laikas: 30 min (nuo 02:15 iki 02:45)
- 03:00 – patikrinta, kad paslauga veikia naudotojams → atsigavimo laikas: 60 min (nuo 02:00 iki 03:00)
- 03:30 – po patikrinimo uždaromas incidento bilietas → išsprendimo laikas: 85 min (nuo 02:05 iki 03:30)

Susijusios metrikos:

- MTBF (vidutinis laikas iki gedimo, angl. mean time before failure)
- MTTF (vidutinis laikas iki gedimo, angl. mean time to failure)
- MTTA (vidutinis patvirtinimo laikas, angl. mean time to acknowledge)

### DORA metrikos

„DevOps Research and Assessment“ (DORA) metrikos yra pramonės standartu tapę pagrindiniai veiklos rodikliai (KPI), skirti specialiai programų inžinerijos „DevOps“ komandoms. Žr. [dora.dev](https://dora.dev/guides/dora-metrics/).

Dabar DORA naudoja penkias metrikas, suskirstytas į dvi grupes.

Pralaidumo metrikos:

- **Pakeitimo įgyvendinimo trukmė** – laikas funkcijos kodui įgyvendinti, išbandyti ir pristatyti (matuojama nuo įsipareigojimo (angl. commit) iki diegimo gamybinėje aplinkoje). Tiksliai apibrėžkite, ką laikote pradžia ir pabaiga. Pavyzdžiui, kai kurios komandos mėgsta matuoti nuo to momento, kai programuotojas pradeda dirbti su bilietu, iki to momento, kai programuotojas perduoda darbą nuolatinės integracijos procesui; šis būdas paprastai veiksmingesnis matuojant asmens produktyvumą.

- **Diegimų dažnis** – diegimų skaičius per tam tikrą laikotarpį. Tiksliai apibrėžkite, ką laikote diegimu ir kaip stebite dažnį. Pavyzdžiui, kai kurios komandos diegia į gamybinių serverių parką ir stebi visą išleidimą, o kitos komandos diegia į vieną naudotojų priėmimo testavimo (UAT) serverį ir stebi, kada projekto vadovas išsiunčia naudotojams el. laišką su kvietimu pradėti testuoti.

- **Atsigavimo po nesėkmingo diegimo laikas** – laikas, per kurį atsigaunama po diegimo, sukėlusio nesėkmę gamybinėje aplinkoje. Anksčiau tai vadinta vidutiniu atsigavimo laiku (MTTR) arba paslaugos atkūrimo laiku. Tiksliai apibrėžkite, ką laikote atsigavimu. Pavyzdžiui, kai kurios komandos atsigavimu laiko visišką išsprendimą, t. y. visą laiką nuo incidento aptikimo iki jo visiško uždarymo; šis būdas tiksliau vadinamas vidutiniu išsprendimo laiku.

Nestabilumo metrikos:

- **Pakeitimų nesėkmės dalis** – procentinė dalis diegimų, kurie sukelia nesėkmę gamybinėje aplinkoje ir reikalauja skubaus taisymo, pvz., atšaukimo arba skubaus pataisymo. Tiksliai apibrėžkite, ką laikote nesėkme. Pavyzdžiui, kai kurios komandos nesėkme taip pat laiko atvejį, kai pradeda dirbti su darbo bilietu ir supranta, kad jame nepakanka informacijos tęsti, todėl komanda grąžina darbo bilietą specifikacijų komandai.

- **Diegimų perdarymo dalis** – procentinė dalis neplanuotų diegimų, pvz., skirtų gamybos incidentui ištaisyti. Tai neplanuoti diegimai, padalyti iš visų diegimų. DORA šią metriką pridėjo 2024 m.

Ankstesnėse DORA ataskaitose taip pat aptartas **patikimumas** kaip operacinio veikimo metrika: platesnis, dažnai kokybinis paslaugos nuoseklumo vertinimas, pvz., prieinamumas, veikimo laikas, delsa, tikslumas ir paslaugos lygio tikslai. Patikimumas padeda parodyti, kad didelis greitis nepasiekiamas sistemos galimybių sąskaita.

## Eilių eilė

Eilių teoriją lengva išplėsti iki eilių eilės, pvz., aukštesnio lygio proceso, kurį sudaro žemesnio lygio etapai, fazės ar vartai.

### „Double Diamond“ eilių eilė

Pavyzdžiui, panagrinėkime „Double Diamond“ (dvigubo deimanto) inovacijų proceso modelį, kuris apibrėžia keturis etapus:

1. Atrasti: suprasti problemą, užuot tik spėjus, kas ji yra.
2. Apibrėžti: remiantis atradimo etapo įžvalgomis, apibrėžti iššūkį.
3. Plėtoti: pateikti skirtingus atsakymus į aiškiai apibrėžtą problemą.
4. Pristatyti: išbandyti skirtingus sprendimus nedideliu mastu ir juos patobulinti.

Eilių teorija tai gali modeliuoti kaip vieną proceso eilę, kurią sudaro keturios etapų eilės:

- Proceso atvykimo sparta yra 1 etapo atvykimo sparta.
- Proceso sėkmės sparta yra 4 etapo sėkmės sparta.
- Proceso klaidų skaičius yra etapų klaidų skaičių suma.
- Proceso praleidimų skaičius yra etapų praleidimų skaičių suma.
- Proceso įgyvendinimo trukmė yra etapų įgyvendinimo trukmių suma.
- Didžiausias proceso pralaidumas yra lėčiausio etapo, dar vadinamo kakleliu (angl. bottleneck), pralaidumas.

### Piltuvo eilių eilė

Praktiniame darbe dažnai vartojame žodį „piltuvas“, kad laisvai apibūdintume eilių eilę, kurioje kiekviename etape elementų skaičius paprastai mažėja:

- Įdarbinimo eilė su paieškos, pokalbio ir pasiūlymo etapais. Tokioje eilėje siekiame maksimaliai padidinti 1 etapo atvykimo spartą, t. y. išplėsti paiešką, pvz., reklaminėmis akcijomis.

- Pirkimo eilė su kliento paieškos, pirkinių krepšelio ir mokėjimo etapais. Tokioje eilėje siekiame maksimaliai sumažinti 2 etapo praleidimo spartą, t. y. sumažinti krepšelių apleidimą, pvz., priminimais.

- Programavimo eilė su integracijos, naudotojų priėmimo ir išleidimo į gamybinę aplinką etapais. Tokioje eilėje siekiame maksimaliai sumažinti išleidimo į gamybinę aplinką etapo klaidų spartą, pvz., „canary“ telemetrija.

## Įžvalgos

Septynios įžvalgos apie eilių teoriją, kurias pateikė Bobas Wescottas, knygos „The Every Computer Performance Book“ autorius (taip pat žr. [Kottke santrauką](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Kuo lėtesnis aptarnavimo centras, tuo mažesnę didžiausią apkrovą piko metu turėtumėte planuoti.

2. Labai sunku išnaudoti paskutinius 15 % bet ko.

3. Kuo arčiau ribos esate, tuo didesnė klaidos kaina.

4. Reagavimo laiko augimą riboja skaičius tų, kurie gali laukti.

5. Atminkite, kad tai vidurkis, o ne maksimumas.

6. Keliuose aptarnavimo centruose pasireiškia žmogiškojo neigimo efektas.

7. Nedidelius patobulinimus parodykite geriausioje šviesoje.

## Epilogas

### Taip pat žr.

Vikipedija:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Vikipedijos sritys, kuriose daugelyje projektų naudojame eiles:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Johno D. Cooko įvadai:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Išsamesni įvadai:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formulės:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Padėka

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Ši knyga puikiai tinka aukšto lygio „DevOps“ temoms ir tiesiogiai lemia mūsų KPI pasirinkimą. Šiame puslapyje pateikti KPI atitinka knygos rekomendacijas.

## Projekto informacija

- Paketas: queue-theory
- Versija: 3.0.0
- Sukurta: 2019-01-25T04:17:56Z
- Atnaujinta: 2026-11-23T15:33:48Z
- Licencija: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, arba susisiekite su mumis dėl kitų sąlygų (žr. [LICENSE.md](LICENSE.md))
- Kontaktas: Joel Parker Henderson <joel@joelparkerhenderson.com>
