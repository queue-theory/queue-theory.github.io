# Ilara-teoria

Ilara-teoria itxaron-lerroen, hau da, ilaren azterketa matematikoa da. Ilara-teoria
gure software-garapenean erabiltzen dugu, besteak beste gure praktikak eta prozesuak
aztertu eta optimizatzeko, hala nola bezeroarentzako arretaren erantzun-gaitasuna,
proiektu-kudeaketako kanban plangintza, prozesuen arteko komunikazioko mezu-ilarak
eta DevOps-en etengabeko hedapen-kanalizazioak.

Aurkibidea:

- [Sarrera](#sarrera)
  - [Bezeroarentzako arretaren erantzun-gaitasuna](#bezeroarentzako-arretaren-erantzun-gaitasuna)
  - [Proiektu-kudeaketako kanban plangintza](#proiektu-kudeaketako-kanban-plangintza)
  - [Prozesuen arteko komunikazioko mezu-ilarak](#prozesuen-arteko-komunikazioko-mezu-ilarak)
  - [DevOps-en etengabeko hedapen-kanalizazioak](#devops-en-etengabeko-hedapen-kanalizazioak)
- [Ilaren terminologia](#ilaren-terminologia)
  - [Ilara motak eta zerbitzu motak](#ilara-motak-eta-zerbitzu-motak)
- [Ilara-teoriaren notazioa](#ilara-teoriaren-notazioa)
  - [Zenbaketa](#zenbaketa)
  - [Iritsiera-tasa, zerbitzu-tasa, irteera-tasa](#iritsiera-tasa-zerbitzu-tasa-irteera-tasa)
  - [Erabilera-ratioa, trafiko-intentsitatea ere deitua](#erabilera-ratioa-trafiko-intentsitatea-ere-deitua)
  - [Ekoizpen-tasak: irteera-tasa, amaitze-tasa, arrakasta-tasa, hutsegite-tasa, saltatze-tasa](#ekoizpen-tasak-irteera-tasa-amaitze-tasa-arrakasta-tasa-hutsegite-tasa-saltatze-tasa)
  - [Zerbitzu-tasaren desanbiguazioa](#zerbitzu-tasaren-desanbiguazioa)
  - [Saltatze-tasa](#saltatze-tasa)
  - [Errore-ratioa](#errore-ratioa)
  - [Entrega-denbora, itxaron-denbora, lan-denbora, urrats-denbora](#entrega-denbora-itxaron-denbora-lan-denbora-urrats-denbora)
  - [Kendall-en notazioa](#kendall-en-notazioa)
- [Ilaren matematika](#ilaren-matematika)
  - [Erabilera-kurba](#erabilera-kurba)
  - [Kingmanen formula](#kingmanen-formula)
  - [Bateratzea eta Erlang C](#bateratzea-eta-erlang-c)
- [Jardueren jarraipena](#jardueren-jarraipena)
  - [Jarduera-adibideak](#jarduera-adibideak)
  - [Littleren legea](#littleren-legea)
  - [Errendimendu-adierazle nagusiak (KPIak)](#errendimendu-adierazle-nagusiak-kpiak)
- [Zerbitzu-metrikak](#zerbitzu-metrikak)
  - [Erantzuteko, konpontzeko, berreskuratzeko eta ebazteko batez besteko denbora](#erantzuteko-konpontzeko-berreskuratzeko-eta-ebazteko-batez-besteko-denbora)
  - [DORA metrikak](#dora-metrikak)
- [Ilaren ilara](#ilaren-ilara)
  - [Diamante Bikoitzaren ilaren ilara](#diamante-bikoitzaren-ilaren-ilara)
  - [Inbutu-ilaren ilara](#inbutu-ilaren-ilara)
- [Gehiegizko lanaren zirkulu zoroztuna](#gehiegizko-lanaren-zirkulu-zoroztuna)
- [Ondorioak](#ondorioak)
- [Prozesu-fluxua](#prozesu-fluxua)
  - [Portaera-parametroak](#portaera-parametroak)
  - [Aldakortasun-parametroak](#aldakortasun-parametroak)
- [Epilogoa](#epilogoa)
  - [Ikus, gainera](#ikus-gainera)
  - [Aitorpenak](#aitorpenak)
- [Proiektuaren datuak](#proiektuaren-datuak)

## Sarrera

Ilara-teoria gure proiektuetan helburu askotarako erabiltzen dugu:

- Bezeroarentzako arretaren erantzun-gaitasuna

- Proiektu-kudeaketako kanban plangintza

- Prozesuen arteko komunikazioko mezu-ilarak

- DevOps-en etengabeko hedapen-kanalizazioak

### Bezeroarentzako arretaren erantzun-gaitasuna

Adibidez, bezeroek salmenta-laguntza eta laguntza teknikoa nola eskatzen duten eta guk zein azkar erantzuten dugun aztertu nahi dugu.

Produktu esanguratsu batzuk, adibidez: [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Proiektu-kudeaketako kanban plangintza

Adibidez, ezaugarri berri baten ideia diseinutik entregara bitartean garatzen den heinean, entrega-denborak eta aurrerapen-denborak jarraitu nahi ditugu.

Produktu esanguratsu batzuk, adibidez: [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Prozesuen arteko komunikazioko mezu-ilarak

Adibidez, programa batek beste programa bati eskaerak bidaltzen dizkionean, ekoizpena maximizatu eta presioak minimizatu nahi ditugu.

Produktu esanguratsu batzuk, adibidez: [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### DevOps-en etengabeko hedapen-kanalizazioak

Adibidez, gure etengabeko integrazioko zerbitzariak gure softwarea probatu eta ondoren hedatzeko gaitasuna duela ziurtatu nahi dugu.

Produktu esanguratsu batzuk, adibidez: [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Ilaren terminologia

Ilaren terminologia gai zabala da. Atal honek gure terminologia ohikoenetako batzuk biltzen ditu. Adibideetan, ilaran itxaroten ari den bezero baten ideia erabiliko dugu.

### Ilara motak eta zerbitzu motak

Ilara motek eta zerbitzu motek deskribatzen dute ilarak nola aukeratzen dituen prozesatu beharreko elementuak.

- Lehena sartzen dena, lehena ateratzen (FIFO, First In First Out): denbora gehien itxaroten daraman bezeroa zerbitzatzen da.

- Azkena sartzen dena, lehena ateratzen (LIFO, Last In First Out): denbora gutxien itxaroten daraman bezeroa zerbitzatzen da.

- Lehentasuna: bezeroak beren lehentasun-mailaren arabera zerbitzatzen dira; maila horiek egoeran, premian, ordainketan eta abarretan oinarri daitezke.

- Lan laburrena lehenik (SJF, Shortest Job First): zerbitzu gutxien behar duen bezeroa zerbitzatzen da.

- Lan luzeena lehenik (LJF, Longest Job First): zerbitzu gehien behar duen bezeroa zerbitzatzen da.

- Geratzen den prozesatze-denbora laburrena (SRPT, Shortest Remaining Processing Time): SJF bezala, baina iritsi berri den lan labur batek dagoeneko zerbitzatzen ari den lan luzeago bat eten dezake.

- Txandakako zerbitzua (Round Robin): bezero bakoitza denbora-tarte labur batez zerbitzatzen da, gero hurrengo bezerora pasatzen da, eta errepikatu egiten da.

- Denbora partekatua, prozesadore-partekatzea (PS, Processor Sharing) ere deitua: denak aldi berean zerbitzatzen dira; zerbitzu-gaitasuna berdin banatzen da itxaroten ari diren guztien artean.

SJF-k eta SRPT-k batez besteko itxaronaldia minimizatzen dute, baina lan luzeak mugagabe gose utz ditzakete; horregatik, benetako sistemek askotan zahartzea edo lehentasun-mugak gehitzen dituzte.

## Ilara-teoriaren notazioa

Ilara-teoriak letra grekoak dituen notazioa erabiltzen du.

Gure taldeek notazio ezagun batzuk erabiltzen dituzte; gainera, software-proiektuetan laguntzen digun notazio pertsonalizatua gehitzen dugu.

Gure notazioa eta ikur bakoitzaren esanahia:

| Gure notazioa | Esanahia |
| ------------- | -------- |
| κ (kappa) | sistemako elementuen kopurua, itxaroten daudenak gehi lantzen ari direnak |
| λ (lambda) | sisteman sartzen diren elementuen iritsiera-tasa |
| χ (chi) | sistematik irteten diren elementuen irteera-tasa |
| μ (mu) | zerbitzu-tasa, gaitasuna ere deitua: zerbitzari bat zein azkar ari den lanean lanpetuta dagoenean |
| ρ (rho) | erabilera: zerbitzariak lanpetuta dauden denboraren zatikia, λ / (c μ) |
| α (alpha) | arrakasta-tasa: zuzena gertatzen den behatutako irteera |
| β (beta) | hutsegite-tasa: okerra gertatzen den behatutako irteera |
| δ (delta) | amaitze-tasa: arrakasta + hutsegitea, zerbitzatutako elementuak, emaitza zuzena zein okerra izan |
| σ (sigma) | saltatze-tasa: sartu eta zerbitzatu gabe joan diren elementuak |
| ε (epsilon) | errore-erlazioa: β / δ = β / (α + β) |
| τ (tau) | sisteman emandako denbora, entrega-denbora ere deitua |
| ω (omega) | itxaron-denbora, ilaran emandako denbora ere deitua |
| φ (phi) | lan-denbora, prozesadorean emandako denbora ere deitua, zerbitzu-denbora ere deitua |
| θ (theta) | amaieren arteko urrats-denbora; urrats-denbora ertaina ≈ 1 / χ egoera egonkorrean |

### Zenbaketa

Elementuak sarritan zenbatzen ditugu, eta notazio hau erabiltzen dugu:

- κ (kappa): sistemako elementuen kopurua, hau da, itxaroten dauden elementuak gehi lantzen ari diren elementuak.

![Diagrama: sisteman κ elementu daude](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Adibidea:

- κ = 10 esan nahi du zehazki 10

- κ ≈ 10 esan nahi du gutxi gorabehera 10

- κ < 10 esan nahi du 10 baino gutxiago

- κ > 10 esan nahi du 10 baino gehiago

- κ ≪ 10 esan nahi du 10 baino askoz gutxiago

- κ ≫ 10 esan nahi du 10 baino askoz gehiago

κ (kappa) kopurua une bateko argazkia da.

Batez besteko κ̅ (kappa barradun) kopurua denbora-tarte zehatz bateko neurketen batez bestekoa egiten duen kalkulua da, adibidez bi astez ordu bakoitzean neurtuta.

### Iritsiera-tasa, zerbitzu-tasa, irteera-tasa

Notaziorik garrantzitsuena:

- λ (lambda): iritsiera-tasa. Elementuak sisteman zein azkar sartzen diren neurtzen du.

- μ (mu): zerbitzu-tasa, gaitasuna ere deitua. Zerbitzari batek, lanpetuta dagoenean, elementuak zein azkar kudea ditzakeen neurtzen du.

- χ (chi): irteera-tasa. Elementuak sistematik zein azkar ateratzen diren neurtzen du.

![Diagrama: elementuak λ tasarekin iristen dira, μ tasarekin zerbitzatzen dira eta χ tasarekin irteten dira](https://queue-theory.github.io/images/queue-theory-lambda-arrival-mu-service-chi-departure.svg)

Zerbitzari bakarreko ilara tradizionalen orokortasunen adibideak:

- λ < μ esan nahi du iritsiera-tasa zerbitzu-tasa baino txikiagoa dela; ilara egonkorra da, hau da, batez besteko tamaina finitu baten inguruan aldatzen da.

- λ = μ esan nahi du iritsiera-tasa zerbitzu-tasaren berdina dela; ausazkotasun txikiena izanda ere, ilara noraezean doa eta mugarik gabe hazten da.

- λ > μ esan nahi du iritsiera-tasa zerbitzu-tasa baino handiagoa dela; ilara etengabe hazten da, denbora-unitateko gutxi gorabehera λ − μ elementu.

«λ = μ izateak ilara tamaina berean mantentzen du» ideia intuitiboa egia da soilik iritsierak eta zerbitzua guztiz erregularrak direnean, metronomo bat bezala. Benetako iritsierak bolada-ka gertatzen dira; beraz, geldialdi batean galdutako denbora hila ezin da inoiz berreskuratu, eta ilara hurrengo boladan hazten da.

Kontuan izan ilara-teoriako aditu batzuek «zerbitzu-tasa» behatutako irteera esateko erabiltzen dutela, eta ez gaitasuna esateko; ikus [zerbitzu-tasaren desanbiguazioa](#zerbitzu-tasaren-desanbiguazioa).

### Erabilera-ratioa, trafiko-intentsitatea ere deitua

Ilara bat laburbiltzen duen notaziorik garrantzitsuena:

- ρ (rho): erabilera-ratioa, hau da, zerbitzariak lanpetuta dauden denboraren zatikia = λ / μ zerbitzari bakarrerako, edo λ / (c μ) c zerbitzaritarako

Adibideak:

- ρ < 1 esan nahi du zerbitzariek soberako gaitasuna dutela; ilara egonkorra da. ρ 1era zenbat eta gehiago hurbildu, orduan eta luzeagoak dira itxaronaldiak; ikus [erabilera-kurba](#erabilera-kurba).

- ρ = 1 esan nahi du zerbitzariak denbora guztian lanpetuta daudela; ilara ezegonkorra da eta mugarik gabe hazten da.

- ρ > 1 esan nahi du iritsierek gaitasuna gainditzen dutela; ilara handitzen ari da.

### Ekoizpen-tasak: irteera-tasa, amaitze-tasa, arrakasta-tasa, hutsegite-tasa, saltatze-tasa

Ekoizpen-tasek behatutako irteera neurtzen dute, hau da, benetan ilaratik ateratzen diren elementuak. Bost kategoria nagusitan banatzen dira:

- χ (chi): irteera-tasa. Elementuak sistematik zein azkar ateratzen diren neurtzen du.

- α (alpha): arrakasta-tasa. Denbora-tarte bakoitzeko zenbat elementu gertatzen diren zuzen neurtzen du, adibidez, zuzenak, osoak, onartuak.

- β (beta): hutsegite-tasa. Denbora-tarte bakoitzeko zenbat elementu gertatzen diren oker neurtzen du, adibidez, okerrak, osatugabeak, baztertuak.

- δ (delta): amaitze-tasa. Denbora-tarte bakoitzeko zenbat elementu zerbitzatzen diren neurtzen du.

- σ (sigma): saltatze-tasa. Denbora-tarte bakoitzeko zenbat elementu sartzen diren ilaran eta gero zerbitzatu gabe joaten diren neurtzen du, adibidez abandonuak eta atzera egiteak.

![Diagrama: irteera-tasa χ = amaitze-tasa δ + saltatze-tasa σ; amaitze-tasa δ = arrakasta-tasa α + hutsegite-tasa β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Amaitze-tasa = arrakasta-tasa + hutsegite-tasa:

- δ = α + β (ahoskatua: delta berdin alpha gehi beta)

Tasa osoa = amaitze-tasa + saltatze-tasa:

- χ = δ + σ (ahoskatua: chi berdin delta gehi sigma)

Tasa osoa = arrakasta-tasa + hutsegite-tasa + saltatze-tasa:

- χ = α + β + σ (ahoskatua: chi berdin alpha gehi beta gehi sigma)

χ-n zenbatutako elementu oro sisteman sartu zen; beraz, egoera egonkorrean tasa osoa iritsiera-tasaren berdina da: χ ≈ λ. Horregatik neurtzen dute ekoizpen-tasek irteera, eta ez gaitasuna.

### Zerbitzu-tasaren desanbiguazioa

Testuinguruaren eta adituaren arabera, «zerbitzu-tasa» terminoak
«tasa osoa» edo «arrakasta-tasa» esan nahi dezake.

Horrek sustrai historikoak ditu, eta nahasmena eta akatsak eragin ditzake, batez ere
hutsegiteak eta saltatzeak jarraitzeko behar handia dagoen testuinguruetan eta
ilara-teoria erabiltzen duten adituen artean.

- Ikuspegi teorikoa: zerbitzu-tasa abiaduraren neurketa hutsa da (adibidez, lanak segundoko), lanak arrakastak, hutsegiteak, saltatzeak edo bestelakoak diren kontuan hartu gabe.

- Prozesatze-ikuspegia: zerbitzu-tasak ilarak prozesatzen denbora ematen duen guztia barne hartzen du, hau da, arrakastak edo hutsegiteak, baina ez ditu saltatzeak barne hartzen.

- Ikuspegi teknologikoa: software-ingeniaritza bezalako arlo aplikatuetan, zerbitzu-tasak arrakastak soilik neurtzen ditu; errore-tasak, berriz, hutsegiteak, eta saltatze-tasak saltatzeak.

Horregatik, μ gaitasunerako gordetzen dugu, eta behatutako irteera-tasak haren ondoan gehitzen ditugu, hura ordeztu beharrean:

- μ (mu): zerbitzu-tasa, gaitasuna ere deitua. Zerbitzari batek, lanpetuta dagoenean, elementuak zein azkar kudea ditzakeen neurtzen du.

- χ (chi): irteera-tasa. Elementuak sistematik zein azkar ateratzen diren neurtzen du.

- α (alpha): arrakasta-tasa. Denbora-tarte bakoitzeko zenbat elementu gertatzen diren zuzen neurtzen du, adibidez, zuzenak, osoak, onartuak.

Zergatik ez ordeztu μ χ-rekin edo α-rekin? Ilara egonkor batean, sartzen den elementu oro azkenean ateratzen da; beraz, χ ≈ λ. Orduan λ / χ ≈ 1 da karga edozein dela ere, eta horrek ez du ezer esaten zerbitzariak zenbateraino dauden lanpetuta. Erabilerak gaitasuna behar du: ρ = λ / (c μ), eta hori zerbitzariak lanpetuta dauden denboraren zatikiaren berdina da.

### Saltatze-tasa

Saltatze-tasaren xehetasunak:

- σ (sigma): saltatze-tasa. Zenbat elementu sartzen diren ilaran eta gero prozesatu gabe joaten diren neurtzen du.

Saltatzea gertatzen da elementu bat ilaran sartu eta gero prozesatze esanguratsurik gabe joaten denean:

- Abandonatzea: bezero bat ilaran sartu eta gero joaten denean, edozein arrazoirengatik.

- Erretiratzea: dagoeneko itxaron duen bezero batek joatea erabakitzen duenean, denbora gehiegi galdu duelako.

Erlazionatutako bi jokabide ez dira saltatzeak:

- Uko egitea: bezero batek ilaran ez sartzea erabakitzen duenean, itxaron-denbora luzeegia izateko arriskua dagoelako. Uko egindako elementu bat ez da inoiz sisteman sartzen; beraz, sistemaren mugetatik kanpo dago: ez da λ-n, χ-n edo σ-n zenbatzen. Ukoek garrantzia badute, adibidez galdutako salmentek, zenbatu itzazu bereiz, baztertutako iritsiera gisa.

- Ilaraz aldatzea: bezero bat ilara paraleloen artean aldatzen denean, adibidez kutxa-lerroen artean, itxaronaldi laburragoa lortzen saiatuz.

### Errore-ratioa

Ilara baten arrakasta laburbiltzen duen notaziorik garrantzitsuena:

- ε (epsilon): errore-ratioa = hutsegite kopurua / amaituen kopurua = β / δ = β / (α + β)

Saltatzeak kanpoan uzten dira, saltatutako elementu bat ez baitzen inoiz zerbitzatu; beraz, ez zen ez zuzena ez okerra izan. Jarraitu saltatzeak bereiz, σ-ren bidez.

![Diagrama: errore-erlazioa ε hutsegite-tasa β amaitze-tasa δ-rekin zatituta](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Adibideak:

- ε = 0 esan nahi du ez dagoela errorerik.

- ε = 0,1 esan nahi du zerbitzuen %10ek errore bat dutela.

- ε = 1 esan nahi du zerbitzu guztiek errore bat dutela.

### Entrega-denbora, itxaron-denbora, lan-denbora, urrats-denbora

Lau denbora jarraitzen ditugu:

- τ (tau): sisteman emandako denbora, entrega-denbora ere deitua, hasieratik amaierara ere deitua.

- θ (theta): urrats-denbora = amaiera batetik hurrengo amaierara; urrats-denbora bat tarte bat da, eta urrats-denbora ertaina batez besteko tartea da

- ω (omega): itxaron-denbora = benetako lana egin gabe emandako denbora, zain-denbora ere deitua

- φ (phi): lan-denbora = benetako lana egiten emandako denbora, prozesatze-denbora ere deitua

![Diagrama: entrega-denbora τ, itxaron-denbora ω, lan-denbora φ, urrats-denbora θ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time-theta-step-time.svg)

Adibideak:

- τ = 5 s esan nahi du elementu bat sisteman sartzen dela eta 5 segundo geroago sistematik irteten dela.

- ω = 4 s esan nahi du elementu batek 4 segundo itxaroten duela ilaran, eta gero lana hasten dela.

- φ = 1 s esan nahi du elementu batek segundo 1eko lana behar duela, eta gero osatuta dagoela.

- θ = 1 s esan nahi du segundo 1 dagoela osaketa baten eta hurrengo osaketaren artean.

Erlazioak:

- τ = ω + φ: entrega-denbora itxaron-denbora gehi lan-denbora da. Adibideetan, 5 s = 4 s + 1 s.

- θ ertaina ≈ 1 / χ: egoera egonkorrean, urrats-denbora ertaina tasa osoaren alderantzizkoa da. Tarte bakar batek gutxi esaten du tasari buruz; tarte askoren batez bestekoak, berriz, asko. Adibideetan, urrats-denbora ertaina 1 s bada, orduan χ ≈ elementu 1 segundoko.

### Kendall-en notazioa

Kendall-en notazioa ilara-teoriaren beste notazio bat da, A/S/c/K/N/D moduan idazten dena:

- A: iritsiera-prozesua, hau da, iritsieren arteko denboraren banaketa.

- S: zerbitzu-prozesua, hau da, zerbitzu-denboren banaketa.

- c: zerbitzari kopurua.

- K: gaitasuna, hau da, sisteman onartzen den elementu kopuru maximoa, itxaroten edo zerbitzatzen, iritsiera berriak baztertu aurretik.

- N: populazioa, hau da, bezero potentzialen kopurua.

- D: diziplina, hau da, ilara mota, adibidez FIFO edo LIFO.

A eta S-rako letra ohikoak:

- M: markovtarra, memoriarik gabea ere deitua, hau da, denbora esponentzialak, Poissonen iritsieretatik sortzen direnak.

- D: deterministikoa, hau da, denbora konstanteak.

- G: orokorra, hau da, edozein banaketa.

Azken hirurak ezabatzen direnean, lehenetsitako balioak K = ∞, N = ∞, D = FIFO dira. Adibidez, «M/M/1»-ek esan nahi du Poissonen iritsierak, zerbitzu-denbora esponentzialak, zerbitzari bat, gaitasun mugagabea, populazio mugagabea eta lehena sartzen dena, lehena ateratzen.

Gainera:

- n: sistemako elementuen kopurua.

## Ilaren matematika

Matematika-atalek testuliburuetako ikurrak erabiltzen dituzte, beste iturri batzuekin alderatu ahal izan ditzazun: S batez besteko zerbitzu-denbora da, hau da, gure φ, eta μ = 1 / S zerbitzari baten gaitasuna da.

### Erabilera-kurba

Ilara-teoriako emaitzarik garrantzitsuena: erabilera %100era hurbiltzen den heinean, itxaron-denbora mugarik gabe hazten da, eta azkenean hazten da azkarren.

M/M/1 ilara baterako, non S batez besteko zerbitzu-denbora den:

- Entrega-denbora τ = S / (1 − ρ)

- Itxaron-denbora ω = S × ρ / (1 − ρ)

| Erabilera ρ | Entrega-denbora τ | Itxaron-denbora ω |
| ----------- | ----------------- | ----------------- |
| %50         | 2 × S             | 1 × S             |
| %70         | 3,3 × S           | 2,3 × S           |
| %80         | 5 × S             | 4 × S             |
| %90         | 10 × S            | 9 × S             |
| %95         | 20 × S            | 19 × S            |
| %99         | 100 × S           | 99 × S            |

Adibidea: kode-berrikuspen batek ordubeteko lana eskatzen du. Berrikusleak %80 lanpetuta badaude, berrikuspen batek 5 ordu inguru behar ditu eskaeratik amaierara. Berrikusleak %95 lanpetuta badaude, 20 ordu inguru behar ditu, nahiz eta berrikusleak 15 puntu portzentual gehiago baino ez egon lanpetuta.

Horregatik da «denak %100 lanpetuta mantendu» entrega-denbora luzeen errezeta, eta horregatik ohartarazten dute beheko [ondorioek](#ondorioak) erabilera handia planifikatzearen aurka.

### Kingmanen formula

Kingmanen formulak, VUT ekuazioa ere deituak, zerbitzari bakarreko ilara baten itxaron-denbora hurbiltzen du, edozein iritsiera- eta zerbitzu-banaketarekin (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Hiru faktoreak hauek dira:

- U: erabilera-faktorea ρ / (1 − ρ), hau da, goiko erabilera-kurba.

- V: aldakortasun-faktorea (ca² + cs²) / 2, non ca iritsieren arteko denboraren aldakuntza-koefizientea den, eta cs zerbitzu-denboren aldakuntza-koefizientea. Aldakuntza-koefizientea desbideratze estandarra zati batez bestekoa da.

- T: denbora-faktorea S, batez besteko zerbitzu-denbora.

Adibidea: M/M/1 ilara baterako, ca = cs = 1; beraz, V = 1, eta formulak erabilera-kurbaren itxaron-denbora bera ematen du. Lan-elementuak uniformeagoak egiten badituzu, adibidez txartel handiak zatituz cs 1etik 0ra hurbil jaitsi dadin, orduan V 0,5 ingurura jaisten da, eta itxaron-denbora gutxi gorabehera erdira jaisten da erabilera berean.

Kingmanen formulak itxaron-denbora murrizteko hiru palankak erakusten ditu:

- Murriztu erabilera, adibidez gaitasuna gehituz edo martxan dagoen lana mugatuz.

- Murriztu aldakortasuna, adibidez sorta txikiagoen, lan-elementu uniformeagoen edo iritsiera leunagoen bidez.

- Murriztu zerbitzu-denbora, adibidez automatizazioaren bidez.

### Bateratzea eta Erlang C

Hainbat zerbitzari elikatzen dituen ilara partekatu bakarra hobea da, bakoitzak zerbitzari bakarra elikatzen duten ilara bereiziak baino. Horregatik erabiltzen dute bankuek leihatila askotara daraman lerro bakarra, eta horregatik da laguntza-ilara partekatu bat agente bakoitzeko ilarak baino hobea.

Adibidea: bi zerbitzarik ordubete behar dute elementu bakoitzeko, eta elementuak orduko 1,6 elementuko erritmoan iristen dira guztira; beraz, erabilera %80 da.

- Ilara bereiziak: zerbitzari bakoitza M/M/1 ilara bat da orduko 0,8 iritsierarekin; beraz, entrega-denbora 1 / (1 − 0,8) = 5 ordu da.

- Ilara bateratua: bi zerbitzariek M/M/2 ilara bat partekatzen dute; beraz, entrega-denbora 2,8 ordu ingurukoa da, hau da, %44 inguru gutxiago, pertsona berekin eta lan berarekin.

Erlang C formulak iristen den elementu batek M/M/c ilara batean itxaron behar izateko probabilitatea kalkulatzen du, a = λ / μ eskainitako kargarekin eta ρ = a / c erabilerarekin:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Itxaron-denbora ω = P(wait) / (c μ − λ)

Bezeroarentzako arreta-taldeek Erlang C erabiltzen dute helburu bat betetzeko zenbat agente jarri behar diren erabakitzeko, adibidez «deien %80 20 segundoren barruan erantzunda».

Bateratzeak mugak ditu: hobekien funtzionatzen du edozein zerbitzarik edozein elementu kudea dezakeenean. Elementuek espezialistak behar badituzte, ilara bateratu batek bideratze-arauak behar izan ditzake.

## Jardueren jarraipena

### Jarduera-adibideak

Demagun jarraitu nahi dugun zerbait daukagula, eta izen generiko batez deitzen diogula, adibidez «Jarduera», «A» laburdurarekin.

Ilara-notazioa modu eraginkorrean erabil dezakegu jarduera eta hura ilara batean zehar nola mugitzen den deskribatzeko.

Adibideak:

- Aκ: jardueraren kopurua: zenbat elementu dauden ilaran.

- Aλ: jardueraren iritsiera-tasa: denbora-unitateko zenbat elementu iristen diren.

- Aχ: jardueraren tasa osoa: denbora-unitateko zenbat elementu ateratzen diren ilaratik.

- Aα: jardueraren arrakasta-tasa: denbora-unitateko zenbat elementu diren zuzenak.

- Aβ: jardueraren hutsegite-tasa, errore-tasa ere deitua: denbora-unitateko zenbat elementu diren okerrak.

- Aμ: jardueraren zerbitzu-tasa, gaitasuna ere deitua: zerbitzari batek, lanpetuta dagoenean, denbora-unitateko zenbat elementu osa ditzakeen.

- Aσ: jardueraren saltatze-tasa: denbora-unitateko zenbat elementu abandonatzen diren.

- Aρ: jardueraren erabilera-ratioa: zerbitzariak lanpetuta dauden denbora erabilgarriaren zatikia, hau da, lanpetutako denbora ÷ denbora erabilgarria, edo λ / (c μ).

- Aε: jardueraren errore-ratioa: zenbat elementu osatzen diren erroreekin, guztizkoarekin alderatuta.

- Aτ: jardueraren entrega-denbora: zenbat denbora igarotzen den eskatzen denetik osatzen denera arte.

- Aω: jardueraren itxaron-denbora: zenbat denbora igarotzen den eskatzen denetik hasten denera arte.

- Aφ: jardueraren lan-denbora: zenbat denbora igarotzen den hasten denetik osatzen denera arte.

- Aθ: jardueraren urrats-denbora: zenbat denbora igarotzen den osatzen denetik hurrengoa osatzen denera arte.

### Littleren legea

Littleren legea John Littleren teorema bat da, eta hau dio: sistema geldikor bateko bezeroen epe luzeko batez besteko L kopurua epe luzeko batez besteko iritsiera-tasa eraginkorra λ bider bezero batek sisteman ematen duen batez besteko W denbora da.

Notazio-adibidea:

- L: sistemako bezeroen epe luzeko batez besteko kopurua. Guk κ (kappa) nahiago dugu.

- λ: epe luzeko batez besteko iritsiera-tasa eraginkorra, hau da, benetan sisteman sartzen diren elementuak, ukoak kanpoan utzita.

- W: elementu bat sisteman dagoen epe luzeko batez besteko denbora. Guk τ (tau) nahiago dugu.

- L = λ W Littleren legea da. Guk κ = λ τ (kappa = lambda \* tau) nahiago dugu.

Littleren legea harrigarriro orokorra da: betetzen da iritsiera-banaketa, zerbitzu-banaketa, zerbitzari kopurua edo ilara mota edozein dela ere.

Littleren legearen hipotesiak:

- Neurketa-unitate guztiak koherenteak dira.

- Sistema egonkorra da, hau da, batez besteko iritsiera-tasa batez besteko irteera-tasaren berdina da neurketa-aldian, eta elementu kopurua gutxi gorabehera berdina da hasieran eta amaieran.

- Goiz joaten diren elementuak, adibidez erretiratzearen bidez, modu koherentean zenbatzen dira bai λ-n bai τ-n, edo modu koherentean kanpoan uzten dira bietatik.

Adibidea: talde batek batez beste κ = 20 txartel ditu martxan, eta txartelak astean λ = 4ko erritmoan iristen dira; egoera egonkorrean, taldeak ere χ = 4 amaitzen ditu astean. Beraz, batez besteko txartelak τ = κ / λ = 5 aste behar ditu. Entrega-denbora erdira murrizteko azkarrago lan egin gabe, murriztu erdira martxan dagoen lana.

### Errendimendu-adierazle nagusiak (KPIak)

Normalean ilarako jarduerei buruzko gauza asko jarraitzen ditugu, eta emaitzak laburbildu nahi ditugu gure proiektuetarako esanguratsuenen zerrenda labur bat aukeratuz.

Proiektu asko eraiki ditugu, eta uste dugu laburpen-adierazle baliotsuenak hauek direla:

- Dτ = entregaren entrega-denbora. Produktu-taldeek «kontzeptutik bezerora» edo «ideiatik inplementaziora» esan dezakete.

- Dα = entregaren arrakasta-tasa. DevOps taldeek «hedapen-maiztasuna» edo «egunean X aldiz argitaratzen dugu» esan dezakete.

- Dε = entregaren errore-ratioa. Kalitate-taldeek «aldaketen hutsegite-tasa» edo «atzera egiteen ehunekoa» esan dezakete.

- Rτ = leheneratzearen entrega-denbora. Gunearen fidagarritasun-ingeniariek «hedapen hutsetik berreskuratzeko denbora» edo «leheneratzeko batez besteko denbora (MTTR)» esan dezakete.

## Zerbitzu-metrikak

Termino erabilgarriak:

- **Zerbitzu-mailaren adierazlea (SLI, Service Level Indicator):** metrika da (adibidez, %99,9ko erabilgarritasuna)
- **Zerbitzu-mailaren helburua (SLO, Service Level Objective):** metrika horren barne-helburua (adibidez, %99,95eko erabilgarritasuna lortzea)
- **Zerbitzu-mailaren akordioa (SLA, Service Level Agreement):** bezeroari egindako promesa formal eta kontraktuala (adibidez, %99,9ko erabilgarritasuna, zigorrekin betetzen ez bada).

### Erantzuteko, konpontzeko, berreskuratzeko eta ebazteko batez besteko denbora

MTTR-k lau neurketa desberdin adierazten ditu:

| Metrika                                | Ardatza                     | Neurtzen duena                                      | Hasiera                                         | Amaiera                                                |
| -------------------------------------- | --------------------------- | --------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| **Erantzuteko batez besteko denbora**  | Hasierako erreakzioa        | Aitortzeko eta jarduten hasteko denbora             | Gertakaria detektatzen edo jakinarazten denean  | Taldea hartan lanean hasten denean                     |
| **Konpontzeko batez besteko denbora**  | Konponketa teknikoa         | Hondatutako elementua konpontzeko denbora           | Konponketa-lana hasten denean                   | Elementua konponduta dagoenean                         |
| **Berreskuratzeko batez besteko denbora** | Zerbitzuaren leheneratzea | Zerbitzu osoa leheneratzeko denbora                 | Gertakaria edo etenaldia hasten denean          | Zerbitzua guztiz martxan dagoenean                     |
| **Ebazteko batez besteko denbora**     | Ebazpen osoa                | Detekziotik itxierara arteko denbora osoa           | Gertakaria detektatzen denean                   | Gertakaria guztiz itxita dagoenean                     |

**Bereizketa nagusiak:**

**Erantzutea** taldearen prestutasuna eta alerten eraginkortasuna neurtzen ditu. Erantzun-denbora baxu batek esan nahi du zure monitorizazio- eta guardia-prozesuek ondo funtzionatzen dutela, nahiz eta benetako konponketak gehiago iraun.

**Konpontzea** hertsiki teknikoa da: zenbat denbora behar da hondatutako gauza benetan konpontzeko, hartan lanean hasi ondoren? Detekzio-denbora, triajea eta egiaztapena kanpoan uzten ditu.

**Berreskuratzea** bezeroaren ikuspegitik zerbitzuaren erabilgarritasunari buruzkoa da. Sistema «konponduta» egon daiteke, baina oraindik ez «berreskuratuta», oraindik datuak leheneratu, cacheak berotu edo funtzionaltasuna egiaztatu behar badituzu.

**Ebaztea** zabalena da: gertakariaren bizi-ziklo osoa hartzen du, lehen detekziotik gertakariaren osteko egiaztapenera eta itxierara arte.

Adibide-eszenatokia:

- 2:00 — Etenaldia hasten da
- 2:05 — Alerta pizten da, gertakaria detektatzen da
- 2:15 — Guardiako pertsonak aitortu eta lanean hasten da → Erantzun-denbora: 10 min (2:05etik 2:15era)
- 2:45 — Erroko kausa identifikatu da, konponketa hedatu da → Konponketa-denbora: 30 min (2:15etik 2:45era)
- 3:00 — Zerbitzuak erabiltzaileentzat funtzionatzen duela egiaztatu da → Berreskuratze-denbora: 60 min (2:00etik 3:00etara)
- 3:30 — Gertakariaren txartela itxi da egiaztapenaren ondoren → Ebazpen-denbora: 85 min (2:05etik 3:30era)

Erlazionatutako metrikak:

- MTBF (hutsegitearen aurreko batez besteko denbora)
- MTTF (hutsegiterainoko batez besteko denbora)
- MTTA (aitortzeko batez besteko denbora)

### DORA metrikak

DevOps Research and Assessment (DORA) metrikak industria-estandarreko errendimendu-adierazle nagusiak (KPIak) dira, berariaz software-ingeniaritzako DevOps taldeentzat. Ikus [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA-k bost metrika erabiltzen ditu orain, bi taldetan.

Ekoizpen-metrikak:

- **Aldaketaren entrega-denbora** - Ezaugarri baterako kodea inplementatu, probatu eta entregatzeko denbora (commit-etik ekoizpeneko hedapenera neurtuta). Zehaztu argi zer esan nahi duzun hasieraz eta amaieraz. Adibidez, talde batzuek garatzaile bat txartel batean lanean hasten denetik garatzaileak lana etengabeko integrazioko prozesu batera bidaltzen duen arte neurtu nahi dute; ikuspegi hori eraginkorragoa izan ohi da pertsonen produktibitatea neurtzeko.

- **Hedapen-maiztasuna** - Denbora-tarte jakin bateko hedapen kopurua. Zehaztu argi zer esan nahi duzun hedapenaz eta maiztasuna nola jarraitzen duzun. Adibidez, talde batzuek ekoizpen-zerbitzarien flota batera egiten dute hedapena eta hedapen osoa jarraitzen dute; beste talde batzuek, berriz, erabiltzaileen onarpen-probetarako (UAT) zerbitzari bakar batera egiten dute hedapena, eta proiektu-kudeatzaileak erabiltzaileei probatzen hasteko iragarpen-mezu elektroniko bat noiz bidaltzen dien jarraitzen dute.

- **Hedapen hutsetik berreskuratzeko denbora** - Ekoizpenean hutsegite bat eragiten duen hedapen batetik berreskuratzeko behar den denbora. Lehen berreskuratzeko batez besteko denbora (MTTR, Mean Time to Recovery) edo zerbitzua leheneratzeko denbora deitzen zen. Zehaztu argi zer esan nahi duzun berreskuratzeaz. Adibidez, talde batzuek berreskuratzea ebazpen osotzat hartzen dute, hau da, gertakari bat detektatzen denetik guztiz ixten den arteko denbora osoa; ikuspegi hori hobeto deskribatzen da ebazteko batez besteko denbora gisa.

Ezegonkortasun-metrikak:

- **Aldaketen hutsegite-tasa** - Ekoizpenean hutsegite bat eragiten duten eta berehalako zuzenketa behar duten hedapenen ehunekoa, adibidez atzera egitea edo presazko zuzenketa bat. Zehaztu argi zer esan nahi duzun hutsegiteaz. Adibidez, talde batzuek hutsegitetzat hartzen dute, halaber, lan-txartel batean hasi eta gero lan-txartelak aurrera egiteko informazio nahikorik ez duela konturatzen direnean, eta, beraz, taldeak lan-txartela zehaztapen-taldeari itzultzen dio.

- **Hedapenen birlan-tasa** - Planifikatu gabeko hedapenen ehunekoa, adibidez ekoizpeneko gertakari bat konpontzeko. Hau planifikatu gabeko hedapenak zati hedapen guztiak da. DORA-k metrika hau 2024an gehitu zuen.

DORA-ren lehenagoko txostenek **fidagarritasuna** ere aztertu zuten eragiketa-errendimenduko metrika gisa: zerbitzuaren koherentziaren ebaluazio zabalagoa eta askotan kualitatiboa, hala nola erabilgarritasuna, martxan egoteko denbora, latentzia, zehaztasuna eta zerbitzu-mailaren helburuak. Fidagarritasunak erakusten laguntzen du abiadura handia ez dela sistemaren gaitasunaren kaltetan lortzen.

## Ilaren ilara

Ilara-teoria erraz heda daiteke ilaren ilara batera, adibidez maila baxuagoko etapak, faseak edo ateak dituen maila altuagoko prozesu batera.

### Diamante Bikoitzaren ilaren ilara

Adibidez, kontuan hartu «Diamante Bikoitza» (Double Diamond) berrikuntza-prozesuaren eredua, lau etapa zehazten dituena:

1. Aurkitu: ulertu arazoa, zer den besterik gabe suposatu beharrean.
2. Definitu: aurkikuntza-faseko ikuspegiarekin, definitu erronka.
3. Garatu: eman erantzun desberdinak argi definitutako arazoari.
4. Entregatu: probatu irtenbide desberdinak eskala txikian eta gero hobetu.

Ilara-teoriak hau eredu dezake lau etapa-ilara dituen prozesu-ilara bakar gisa:

- Prozesuaren iritsiera-tasa 1. etapako iritsiera-tasa da.
- Prozesuaren arrakasta-tasa 4. etapako arrakasta-tasa da.
- Prozesuaren errore kopurua etapen errore kopuruen batura da.
- Prozesuaren saltatze kopurua etapen saltatze kopuruen batura da.
- Prozesuaren entrega-denbora etapen entrega-denboren batura da.
- Prozesuaren ekoizpen maximoa etapa motelenaren ekoizpena da, hau da, botila-lepoa.

### Inbutu-ilaren ilara

Gure lan praktikoan, sarritan erabiltzen dugu «inbutu» hitza etapa bakoitzean elementu kopurua murrizteko joera duen ilaren ilara bat modu librean deskribatzeko:

- Kontratazio-ilara, hurbilketa-etapa, elkarrizketa-etapa eta eskaintza-etapa erabiltzen dituena. Ilara mota honetan, 1. etapako iritsiera-tasa maximizatzea dugu helburu, hau da, gure hurbilketa handitzea, adibidez sustapenen bidez.

- Erosketa-ilara, bezeroaren bilaketa-etapa, erosketa-saskiaren etapa eta ordainketa-etapa erabiltzen dituena. Ilara mota honetan, 2. etapako saltatze-tasa minimizatzea dugu helburu, hau da, saskien abandonua murriztea, adibidez oroigarrien bidez.

- Programazio-ilara, integrazio-etapa, erabiltzaileen onarpen-etapa eta ekoizpeneko hedapen-etapa erabiltzen dituena. Ilara mota honetan, ekoizpeneko hedapen-etaparen errore-tasa minimizatzea dugu helburu, adibidez canary telemetriaren bidez.

## Gehiegizko lanaren zirkulu zoroztuna

Iristeen tasa handitzen denean, sistemari presio handiagoa egiten zaio eta sistema bere ahalmenetik (hau da, %100eko erabileratik) gertuago jartzen da. Horrek ziklo-denborak infiniturantz azkar hazarazten ditu eta prozesuan dagoen lana areagotzen du, eta horrek emaitza motelagoak ekartzen ditu.

Horrek industrian ohikoa den patroi bat eragiten du, “gehiegizko lanaren zirkulu zoroztuna” deitzen diogunari: emaitzak nahikoa txarrak direnean, kudeatzaileek baliabide gehiago baimentzen dituzte (ordu estrak edo laguntza gehigarria kontratatzea, adibidez), eta horrek sistemaren ahalmena hobetzen du. Baina sistema suspertu bezain laster, kudeatzaileek ordu estrak bertan behera uzten dituzte, eta gainkarga berriro hasten da. Begizta hori azkarra eta suntsitzailea izan daiteke. Irtenbidea da kudeatzaileek denbora hartzea sistema, ahalmena eta erabilera ulertzeko.

## Ondorioak

Ilara-teoriari buruzko zazpi ondorio, Bob Wescottenak, «The Every Computer Performance Book» liburuaren egilearenak (ikus, gainera, [Kottkeren laburpena](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Zenbat eta motelagoa izan zerbitzu-zentroa, orduan eta txikiagoa izan behar du gailur-kargarako planifikatzen duzun erabilera maximoak.

2. Oso zaila da edozeren azken %15 erabiltzea.

3. Zenbat eta hurbilago egon ertzetik, orduan eta handiagoa da oker egotearen prezioa.

4. Erantzun-denboraren hazkundeak itxaron dezaketenen kopuruak mugatzen ditu.

5. Gogoratu hau batez bestekoa dela, ez maximoa.

6. Zerbitzu-zentro anitzetan giza ukazio-efektu bat dago.

7. Erakutsi hobekuntza txikiak beren argirik onenean.

## Prozesu-fluxua

Prozesu-fluxua prozesuen sekuentzia da. Elementuak, eragiketak, lanak eta abar prozesu-fluxutik aurrera doaz.

Adibidez, fabrikazio-lerro batek zerbitzu-estazio batzuk ditu seriean, eta lanak haietatik igarotzen dira. Ospitale batek eragiketa-sekuentzia konektatu asko ditu (onarpena, gelako zainketa, ebakuntza-prestaketa, ebakuntza, errekuperazioa eta abar), eta pazienteak haietatik igarotzen dira. Banku batek eragiketa-sekuentziak ditu, eta diruak haietatik egiten du bidea. Fluxuak ulertzea funtsezkoa da eragiketa-sistema eraginkorrak diseinatu eta kudeatzeko.

### Portaera-parametroak

Prozesu-fluxu baten portaera bi parametroren araberakoa da:

- Botila-lepoaren tasa: fluxuaren ahalmena (hau da, erabilera handiena duen prozesuaren tasa).

- Prozesu-denbora gordina: entitateek fluxuan prozesatzen ematen duten denbora osoa (hau da, entitate batek fluxu huts bat zeharkatzeko behar lukeen batez besteko denbora).

### Aldakortasun-parametroak

Prozesu-fluxu baten aldakortasuna bi parametroren araberakoa da:

- Fluxuaren aldakortasuna: entitateak sistemetara iristen diren arteko denboren aldakortasuna.

- Prozesuaren aldakortasuna: sistemetako prozesatze-denboren aldakortasuna.

Pentsa dezagun fluxu-aldakortasuna eta prozesu-aldakortasuna dituen prozesu-fluxu bat. Espero daitekeenez, estazio batetik ateratzen den fluxuaren aldakortasuna estaziora sartzen denaren aldakortasunaren eta estazioan bertan sortzen den prozesuaren aldakortasunaren araberakoa da. Bakoitzaren araberakoa zenbateraino den sistemaren erabileraren funtzioa da.

Aldakortasuna da prozesu-fluxuen errendimendua kasurik onenarekin alderatuta okertzen duen faktore nagusia. Hori dela eta, aldakortasuna ulertzea eta hura kentzeko bideak aurkitzea eragiketak hobetzeko metodologia askoren muinean dago.

## Epilogoa

### Ikus, gainera

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Proiektu askotan ilarak erabiltzen ditugun Wikipediako arloak:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

John D. Cooken sarrerak:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Xehetasun gehiagoko sarrerak:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formulak:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Aitorpenak

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Liburu hau bikaina da goi-mailako DevOps-erako, eta zuzenean eragin du gure KPIen hautaketan. Orri honetako KPIak liburuaren gomendioekin bat datoz.

[Supply Chain Science. By Waler Hopp](https://archive.org/details/supplychainscien0000hopp). Liburu honek ilarak eta prozesu-fluxuak azaltzen ditu, antzeko matematika barne, enpresa-kudeaketan arreta berezia jarrita.

## Proiektuaren datuak

- Paketea: queue-theory
- Bertsioa: 3.0.0
- Sortua: 2019-01-25T04:17:56Z
- Eguneratua: 2026-11-23T15:33:48Z
- Lizentzia: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, edo jarri gurekin harremanetan beste baldintza batzuetarako (ikus [LICENSE.md](LICENSE.md))
- Harremana: Joel Parker Henderson <joel@joelparkerhenderson.com>
