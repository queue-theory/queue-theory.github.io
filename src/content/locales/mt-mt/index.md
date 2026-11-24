# Teorija tal-kjuwijiet

It-teorija tal-kjuwijiet hija l-istudju matematiku tal-linji ta’ stennija, jew kjuwijiet. Aħna nużaw it-teorija tal-kjuwijiet fl-iżvilupp tas-software tagħna għal skopijiet bħall-analiżi u l-ottimizzazzjoni tal-prattiki u l-proċessi tagħna, pereżempju r-rispons tas-servizz lill-klijenti, l-ippjanar kanban fil-ġestjoni tal-proġetti, il-kjuwijiet tal-messaġġi għall-komunikazzjoni bejn il-proċessi, u l-pipelines DevOps ta’ skjerament kontinwu.

Werrej:

- [Introduzzjoni](#introduzzjoni)
  - [Rispons tas-servizz lill-klijenti](#rispons-tas-servizz-lill-klijenti)
  - [Ippjanar kanban fil-ġestjoni tal-proġetti](#ippjanar-kanban-fil-ġestjoni-tal-proġetti)
  - [Kjuwijiet tal-messaġġi għall-komunikazzjoni bejn il-proċessi](#kjuwijiet-tal-messaġġi-għall-komunikazzjoni-bejn-il-proċessi)
  - [Pipelines DevOps ta’ skjerament kontinwu](#pipelines-devops-ta-skjerament-kontinwu)
- [Terminoloġija tal-kjuwijiet](#terminoloġija-tal-kjuwijiet)
  - [Tipi ta’ kjuwijiet u tipi ta’ servizz](#tipi-ta-kjuwijiet-u-tipi-ta-servizz)
- [Notazzjoni tat-teorija tal-kjuwijiet](#notazzjoni-tat-teorija-tal-kjuwijiet)
  - [Għadd](#għadd)
  - [Rata ta’ wasla, rata ta’ servizz](#rata-ta-wasla-rata-ta-servizz)
  - [Proporzjon ta’ utilizzazzjoni jew intensità tat-traffiku](#proporzjon-ta-utilizzazzjoni-jew-intensità-tat-traffiku)
  - [Rati ta’ throughput: rata totali, rata ta’ suċċess, rata ta’ falliment, rata ta’ qbiż](#rati-ta-throughput-rata-totali-rata-ta-suċċess-rata-ta-falliment-rata-ta-qbiż)
  - [Diżambigwazzjoni tar-rata ta’ servizz](#diżambigwazzjoni-tar-rata-ta-servizz)
  - [Rata ta’ qbiż](#rata-ta-qbiż)
  - [Proporzjon ta’ żbalji](#proporzjon-ta-żbalji)
  - [Ħin ta’ twassil, ħin tal-pass, ħin tax-xogħol, ħin ta’ stennija](#ħin-ta-twassil-ħin-tal-pass-ħin-tax-xogħol-ħin-ta-stennija)
  - [Notazzjoni standard](#notazzjoni-standard)
- [Matematika tal-kjuwijiet](#matematika-tal-kjuwijiet)
  - [Il-kurva tal-utilizzazzjoni](#il-kurva-tal-utilizzazzjoni)
  - [Il-formula ta’ Kingman](#il-formula-ta-kingman)
  - [Il-ġbir f’kju wieħed u Erlang C](#il-ġbir-fkju-wieħed-u-erlang-c)
- [Segwitu tal-attivitajiet](#segwitu-tal-attivitajiet)
  - [Eżempji ta’ attivitajiet](#eżempji-ta-attivitajiet)
  - [Il-Liġi ta’ Little](#il-liġi-ta-little)
  - [Indikaturi ewlenin tal-prestazzjoni (KPIs)](#indikaturi-ewlenin-tal-prestazzjoni-kpis)
- [Metriċi tas-servizz](#metriċi-tas-servizz)
  - [Ħin medju għar-rispons, it-tiswija, l-irkupru, ir-riżoluzzjoni](#ħin-medju-għar-rispons-it-tiswija-l-irkupru-ir-riżoluzzjoni)
  - [Metriċi DORA](#metriċi-dora)
- [Kju ta’ kjuwijiet](#kju-ta-kjuwijiet)
  - [Kju ta’ kjuwijiet Double Diamond](#kju-ta-kjuwijiet-double-diamond)
  - [Kju ta’ kjuwijiet f’forma ta’ lembut](#kju-ta-kjuwijiet-fforma-ta-lembut)
- [Għarfien](#għarfien)
- [Epilogu](#epilogu)
  - [Ara wkoll](#ara-wkoll)
  - [Ringrazzjamenti](#ringrazzjamenti)
- [Informazzjoni tal-proġett](#informazzjoni-tal-proġett)

## Introduzzjoni

Aħna nużaw it-teorija tal-kjuwijiet fil-proġetti tagħna għal ħafna skopijiet:

- Rispons tas-servizz lill-klijenti

- Ippjanar kanban fil-ġestjoni tal-proġetti

- Kjuwijiet tal-messaġġi għall-komunikazzjoni bejn il-proċessi

- Pipelines DevOps ta’ skjerament kontinwu

### Rispons tas-servizz lill-klijenti

Pereżempju, irridu nanalizzaw kif il-klijenti jitolbu għajnuna fil-bejgħ u għajnuna teknika, u kemm nirrispondu malajr.

Xi prodotti rilevanti huma pereżempju [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Ippjanar kanban fil-ġestjoni tal-proġetti

Pereżempju, irridu nsegwu l-ħinijiet ta’ twassil u l-ħinijiet ta’ progress hekk kif idea għal funzjoni ġdida tevolvi mid-disinn sal-kunsinna.

Xi prodotti rilevanti huma pereżempju [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Kjuwijiet tal-messaġġi għall-komunikazzjoni bejn il-proċessi

Pereżempju, irridu nimmassimizzaw it-throughput u nimminimizzaw il-pressjoni hekk kif programm wieħed jibgħat talbiet lil programm ieħor.

Xi prodotti rilevanti huma pereżempju [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Pipelines DevOps ta’ skjerament kontinwu

Pereżempju, irridu niżguraw li s-server tal-integrazzjoni kontinwa tagħna għandu l-kapaċità li jittestja s-software tagħna u mbagħad jiskjerah.

Xi prodotti rilevanti huma pereżempju [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Terminoloġija tal-kjuwijiet

It-terminoloġija tal-kjuwijiet hija suġġett kbir. Din it-taqsima fiha xi wħud mit-termini komuni tagħna. Għall-eżempji, se nużaw l-idea ta’ klijent li qed jistenna fil-kju.

### Tipi ta’ kjuwijiet u tipi ta’ servizz

It-tipi ta’ kjuwijiet u t-tipi ta’ servizz jiddeskrivu kif il-kju jagħżel liema oġġetti jipproċessa.

- First In First Out (FIFO): isservi lill-klijent li ilu jistenna l-itwal żmien.

- Last In First Out (LIFO): isservi lill-klijent li ilu jistenna l-iqsar żmien.

- Prijorità: isservi lill-klijenti skont il-livell ta’ prijorità tagħhom; dawn il-livelli jistgħu jkunu bbażati fuq l-istatus, l-urġenza, il-ħlas, eċċ.

- Shortest Job First (SJF): isservi lill-klijent li jeħtieġ l-inqas ammont ta’ servizz.

- Longest Job First (LJF): isservi lill-klijent li jeħtieġ l-akbar ammont ta’ servizz.

- Shortest Remaining Processing Time (SRPT): bħal SJF, iżda xogħol qasir li għadu kemm wasal jista’ jieħu post xogħol itwal li diġà jinsab fis-servizz.

- Round Robin: isservi lil kull klijent għal porzjon qasir ta’ ħin, imbagħad jgħaddi għall-klijent li jmiss, u jirrepeti.

- Time Sharing jew Processor Sharing (PS): isservi lil kulħadd fl-istess ħin; il-kapaċità tas-servizz titqassam b’mod ugwali fost dawk kollha li qed jistennew.

SJF u SRPT jimminimizzaw l-istennija medja, iżda jistgħu jħallu xogħlijiet twal jistennew għal dejjem, għalhekk is-sistemi reali spiss iżidu l-aging jew limiti fuq il-prijorità.

## Notazzjoni tat-teorija tal-kjuwijiet

It-teorija tal-kjuwijiet tuża notazzjoni b’ittri Griegi.

It-timijiet tagħna jużaw parti min-notazzjoni popolari; aħna nżidu wkoll xi notazzjoni personalizzata li tgħinna fil-proġetti tas-software.

Tabella ta’ korrispondenza min-notazzjoni tagħna għan-notazzjoni standard tal-kotba tat-test:

| Tagħna | Standard | Tifsira |
| ------ | -------- | ------- |
| κ | L | għadd medju ta’ oġġetti fis-sistema, dawk li qed jistennew flimkien ma’ dawk li qed jinħadmu |
| λ | λ | rata ta’ wasla tal-oġġetti li jidħlu fis-sistema |
| μ | μ | rata ta’ servizz jew kapaċità: kemm jaħdem malajr server wieħed meta jkun okkupat |
| ρ | ρ | utilizzazzjoni: il-proporzjon tal-ħin li fih is-servers ikunu okkupati, λ / (c μ) |
| χ | X | throughput jew rata ta’ tluq: l-output osservat, għal kwalunkwe raġuni |
| α | xejn | rata ta’ suċċess: l-output osservat li joħroġ tajjeb |
| β | xejn | rata ta’ falliment: l-output osservat li joħroġ ħażin |
| δ | xejn | rata ta’ qbiż jew rata ta’ abbandun: oġġetti li daħlu, imbagħad telqu mingħajr servizz |
| ε | xejn | proporzjon ta’ żbalji β / (α + β) |
| τ | W | ħin medju fis-sistema jew ħin ta’ twassil |
| ω | Wq | ħin medju ta’ stennija fil-kju |
| φ | S | ħin medju ta’ servizz jew ħin tax-xogħol; μ = 1 / S |
| θ | xejn | ħin tal-pass bejn tlestijiet; il-ħin medju tal-pass ≈ 1 / χ fi stat stabbli |

Jekk jogħġbok oqgħod attent għal kunflitti fis-simboli meta taqra sorsi oħra: σ normalment tfisser id-devjazzjoni standard, u din hija r-raġuni għaliex aħna nużaw δ għar-rata ta’ qbiż; u θ spiss tfisser ir-rata ta’ abbandun fil-mudelli Erlang-A taċ-ċentri tat-telefonati, filwaqt li aħna nużaw θ għall-ħin tal-pass.

### Għadd

Aħna ngħoddu l-oġġetti spiss, u nużaw din in-notazzjoni:

- κ (kappa): għadd ta’ oġġetti fis-sistema, jiġifieri l-oġġetti li qed jistennew flimkien mal-oġġetti li qed jinħadmu

Eżempju:

- κ = 100 tfisser li hemm 100 oġġett fis-sistema.

- κ > 100 tfisser li hemm aktar minn 100 oġġett fis-sistema.

- κ ≫ 100 tfisser li hemm ħafna aktar minn 100 oġġett fis-sistema.

Għadd bħal κ = 100 huwa ritratt ta’ mument wieħed. Fil-Liġi ta’ Little, κ tfisser l-għadd medju fit-tul, li huwa L tal-kotba tat-test. Is-simbolu tal-kotba tat-test għall-oġġetti biss li qed jistennew fil-kju huwa Lq.

### Rata ta’ wasla, rata ta’ servizz

L-aktar notazzjoni importanti:

- λ (lambda): rata ta’ wasla. Din tkejjel kemm qed jidħlu malajr oġġetti ġodda fil-kju.

- μ (mu): rata ta’ servizz jew kapaċità. Din tkejjel kemm jista’ server wieħed jipproċessa oġġetti malajr meta jkun okkupat.

Eżempji ta’ regoli ġenerali għal kjuwijiet tradizzjonali b’server wieħed:

- λ < μ tfisser li r-rata ta’ wasla hija inqas mir-rata ta’ servizz; il-kju huwa stabbli, jiġifieri jvarja madwar daqs medju finit.

- λ = μ tfisser li r-rata ta’ wasla hija ugwali għar-rata ta’ servizz; b’kwalunkwe ammont ta’ każwalità, il-kju jinġibed u jikber mingħajr limitu.

- λ > μ tfisser li r-rata ta’ wasla hija akbar mir-rata ta’ servizz; il-kju jikber b’mod kostanti, b’madwar λ − μ oġġetti għal kull unità ta’ ħin.

L-idea intwittiva li “λ = μ iżżomm il-kju tal-istess daqs” hija vera biss meta l-wasliet u s-servizz ikunu perfettament regolari, bħal metronomu. Il-wasliet reali jiġu f’mewġiet, għalhekk il-ħin wieqaf li jintilef waqt perjodu kwiet qatt ma jista’ jiġi rkuprat, u l-kju jikber waqt il-mewġa li jmiss.

Jekk jogħġbok kun konxju li xi prattikanti tat-teorija tal-kjuwijiet jużaw “rata ta’ servizz” biex ifissru l-output osservat minflok il-kapaċità; ara d-[diżambigwazzjoni tar-rata ta’ servizz](#diżambigwazzjoni-tar-rata-ta-servizz).

### Proporzjon ta’ utilizzazzjoni jew intensità tat-traffiku

L-aktar notazzjoni importanti li tiġbor fil-qosor kju:

- ρ (rho): proporzjon ta’ utilizzazzjoni, jiġifieri l-proporzjon tal-ħin li fih is-servers ikunu okkupati = λ / μ għal server wieħed, jew λ / (c μ) għal c servers

Eżempji:

- ρ < 1 tfisser li s-servers għandhom kapaċità żejda; il-kju huwa stabbli. Iktar ma ρ toqrob lejn 1, iktar ikunu twal l-istennijiet; ara [il-kurva tal-utilizzazzjoni](#il-kurva-tal-utilizzazzjoni).

- ρ = 1 tfisser li s-servers ikunu okkupati il-ħin kollu; il-kju mhuwiex stabbli u jikber mingħajr limitu.

- ρ > 1 tfisser li l-wasliet jaqbżu l-kapaċità; il-kju qed jikber.

### Rati ta’ throughput: rata totali, rata ta’ suċċess, rata ta’ falliment, rata ta’ qbiż

Ir-rati ta’ throughput ikejlu l-output osservat, jiġifieri l-oġġetti li fil-fatt joħorġu mill-kju. Huma maqsuma f’erba’ kategoriji ġenerali:

- χ (chi): rata totali. Din tkejjel kemm-il oġġett għal kull perjodu ta’ ħin joħroġ mill-kju għal kwalunkwe raġuni: suċċess, falliment, qbiż, eċċ.

- α (alpha): rata ta’ suċċess. Din tkejjel kemm-il oġġett għal kull perjodu ta’ ħin joħroġ tajjeb, pereżempju korrett, komplut, aċċettat.

- β (beta): rata ta’ falliment. Din tkejjel kemm-il oġġett għal kull perjodu ta’ ħin joħroġ ħażin, pereżempju skorrett, mhux komplut, miċħud.

- δ (delta): rata ta’ qbiż jew rata ta’ abbandun. Din tkejjel kemm-il oġġett għal kull perjodu ta’ ħin jidħol fil-kju, imbagħad jitlaq mingħajr ma jiġi moqdi, pereżempju abbandunar, irtirar.

Rata totali = rata ta’ suċċess + rata ta’ falliment + rata ta’ qbiż:

- χ = α + β + δ (tinqara: chi daqs alpha flimkien ma’ beta flimkien ma’ delta)

Kull oġġett li jingħadd f’χ daħal fis-sistema, għalhekk fi stat stabbli r-rata totali hija ugwali għar-rata ta’ wasla: χ ≈ λ. Din hija r-raġuni għaliex ir-rati ta’ throughput ikejlu l-output, mhux il-kapaċità.

### Diżambigwazzjoni tar-rata ta’ servizz

Skont il-kuntest u l-prattikant, it-terminu “rata ta’ servizz” jista’ jfisser jew
“rata totali” jew “rata ta’ suċċess”.

Dan għandu għeruq storiċi u jista’ jwassal għal konfużjoni u żbalji, speċjalment f’kuntesti u għal prattikanti li jużaw it-teorija tal-kjuwijiet fejn hemm bżonn sinifikanti li jiġu segwiti l-fallimenti u l-qbiżiet.

- Perspettiva teoretika: ir-rata ta’ servizz hija kejl pur tal-veloċità (pereżempju, xogħlijiet kull sekonda), irrispettivament minn jekk ix-xogħlijiet humiex suċċessi, fallimenti, qbiżiet, eċċ.

- Perspettiva tal-ipproċessar: ir-rata ta’ servizz tinkludi kull ma l-kju jqatta’ ħin jipproċessa, jiġifieri suċċessi jew fallimenti, iżda ma tinkludix il-qbiżiet.

- Perspettiva teknoloġika: f’oqsma applikati bħall-inġinerija tas-software, ir-rata ta’ servizz tkejjel is-suċċessi biss, filwaqt li r-rata ta’ żbalji tkejjel il-fallimenti, u r-rata ta’ qbiż tkejjel l-abbandunar.

Għalhekk inżommu μ għall-kapaċità, u nżidu r-rati tal-output osservat magħha, minflok ma nissostitwuha:

- μ (mu): rata ta’ servizz jew kapaċità. Din tkejjel kemm jista’ server wieħed jipproċessa oġġetti malajr meta jkun okkupat.

- χ (chi): rata totali. Din tkejjel kemm-il oġġett għal kull perjodu ta’ ħin joħroġ mill-kju għal kwalunkwe raġuni: suċċess, falliment, qbiż, eċċ.

- α (alpha): rata ta’ suċċess. Din tkejjel kemm-il oġġett għal kull perjodu ta’ ħin joħroġ tajjeb, pereżempju korrett, komplut, aċċettat.

Għaliex ma nissostitwux μ b’χ jew b’α? F’kju stabbli, kull oġġett li jidħol eventwalment joħroġ, għalhekk χ ≈ λ. Imbagħad λ / χ ≈ 1 tkun xi tkun it-tagħbija, u dan ma jgħid xejn dwar kemm huma okkupati s-servers. L-utilizzazzjoni teħtieġ il-kapaċità: ρ = λ / (c μ), li hija ugwali għall-proporzjon tal-ħin li fih is-servers ikunu okkupati.

### Rata ta’ qbiż

Dettalji dwar ir-rata ta’ qbiż:

- δ (delta): rata ta’ qbiż jew rata ta’ abbandun. Din tkejjel kemm-il oġġett jidħol fil-kju, imbagħad jitlaq mingħajr ma jiġi pproċessat.

Qbiż iseħħ meta oġġett jidħol fil-kju, imbagħad jitlaq mingħajr ebda pproċessar sinifikanti:

- Abbandunar: meta klijent jidħol f’kju, imbagħad jitlaq, għal kwalunkwe raġuni.

- Irtirar (reneging): meta klijent li diġà stenna jiddeċiedi li jitlaq għax ħela wisq ħin.

Żewġ imġiba relatati mhumiex qbiżiet:

- Rifjut (balking): meta klijent jiddeċiedi li ma jidħolx fil-kju għax il-ħin ta’ stennija jhedded li jkun twil wisq. Oġġett rifjutat qatt ma jidħol fis-sistema, għalhekk ikun barra mill-konfini tas-sistema: ma jingħaddx f’λ, f’χ jew f’δ. Jekk ir-rifjuti huma importanti, bħal bejgħ mitluf, imbagħad għoddhom separatament bħala wasliet li ntbagħtu lura.

- Qlib (jockeying): meta klijent jaqleb bejn kjuwijiet paralleli, bħall-kaxxi f’supermarket, biex jipprova jistenna inqas.

### Proporzjon ta’ żbalji

L-aktar notazzjoni importanti li tiġbor fil-qosor is-suċċess ta’ kju:

- ε (epsilon): proporzjon ta’ żbalji = għadd ta’ fallimenti / (għadd ta’ suċċessi + għadd ta’ fallimenti) = β / (α + β)

Il-qbiżiet huma esklużi, għax oġġett maqbuż qatt ma ġie moqdi, għalhekk la kien tajjeb u lanqas ħażin. Il-qbiżiet jiġu segwiti separatament permezz ta’ δ.

Eżempji:

- ε = 0 tfisser l-ebda żball.

- ε = 0.1 tfisser li 10% tas-servizzi għandhom żball.

- ε = 1 tfisser li kull servizz għandu żball.

### Ħin ta’ twassil, ħin tal-pass, ħin tax-xogħol, ħin ta’ stennija

Aħna nsegwu erba’ ħinijiet:

- τ (tau): ħin ta’ twassil = mill-bidu tal-kju sat-tmiem tal-kju

- θ (theta): ħin tal-pass = minn tlestija waħda sat-tlestija li jmiss; ħin tal-pass wieħed huwa distakk wieħed, u l-ħin medju tal-pass huwa d-distakk medju

- φ (phi): ħin tax-xogħol = ħin li jintuża biex isir xogħol reali, jew ħin tal-ipproċessar

- ω (omega): ħin ta’ stennija = ħin li fih ma jsir l-ebda xogħol reali, jew ħin pendenti

Eżempji:

- τ = 5s tfisser li oġġett jiżdied mal-kju, imbagħad jiġi moqdi 5 sekondi wara.

- ω = 4s tfisser li oġġett jistenna fil-kju għal 4 sekondi, imbagħad jibda x-xogħol.

- φ = 1s tfisser li oġġett jieħu sekonda xogħol, imbagħad ikun komplut.

- θ = 1s tfisser li hemm sekonda bejn tlestija waħda u t-tlestija li jmiss.

Relazzjonijiet:

- τ = ω + φ: il-ħin ta’ twassil huwa l-ħin ta’ stennija flimkien mal-ħin tax-xogħol. Fl-eżempji, 5s = 4s + 1s.

- θ medju ≈ 1 / χ: fi stat stabbli, il-ħin medju tal-pass huwa l-invers tar-rata totali. Distakk wieħed jgħid ftit dwar ir-rata; il-medja ta’ ħafna distakki tgħid ħafna. Fl-eżempji, jekk il-ħin medju tal-pass huwa 1s, imbagħad χ ≈ oġġett wieħed kull sekonda.

### Notazzjoni standard

In-notazzjoni standard għat-teorija tal-kjuwijiet tiddeskrivi kju billi tuża n-notazzjoni ta’ Kendall, miktuba bħala A/S/c/K/N/D:

- A: il-proċess tal-wasla, jiġifieri d-distribuzzjoni tal-ħin bejn il-wasliet.

- S: il-proċess tas-servizz, jiġifieri d-distribuzzjoni tal-ħinijiet tas-servizz.

- c: in-numru ta’ servers.

- K: il-kapaċità, jiġifieri n-numru massimu ta’ oġġetti permessi fis-sistema, li qed jistennew jew li qed jiġu moqdija, qabel ma l-wasliet il-ġodda jintbagħtu lura.

- N: il-popolazzjoni, jiġifieri n-numru ta’ klijenti potenzjali.

- D: id-dixxiplina, jiġifieri t-tip ta’ kju, bħal FIFO jew LIFO.

Ittri komuni għal A u S:

- M: Markovjan jew mingħajr memorja, jiġifieri ħinijiet esponenzjali, li jirriżultaw minn wasliet Poisson.

- D: Deterministiku, jiġifieri ħinijiet kostanti.

- G: Ġenerali, jiġifieri kwalunkwe distribuzzjoni.

Meta l-aħħar tlieta jitħallew barra, il-valuri awtomatiċi huma K = ∞, N = ∞, D = FIFO. Pereżempju, “M/M/1” tfisser wasliet Poisson, ħinijiet tas-servizz esponenzjali, server wieħed, kapaċità bla limitu, popolazzjoni bla limitu, u l-ewwel li jidħol l-ewwel li joħroġ.

In-notazzjoni standard tuża wkoll n biex tfisser in-numru ta’ oġġetti fis-sistema.

## Matematika tal-kjuwijiet

It-taqsimiet tal-matematika jużaw is-simboli tal-kotba tat-test, sabiex ikun possibbli li jitqabblu ma’ sorsi oħra: S huwa l-ħin medju tas-servizz, li huwa φ tagħna, u μ = 1 / S hija l-kapaċità ta’ server wieħed. Ara t-tabella ta’ korrispondenza fin-[notazzjoni tat-teorija tal-kjuwijiet](#notazzjoni-tat-teorija-tal-kjuwijiet).

### Il-kurva tal-utilizzazzjoni

L-iktar riżultat importanti fit-teorija tal-kjuwijiet: hekk kif l-utilizzazzjoni toqrob lejn 100%, il-ħin ta’ stennija jikber mingħajr limitu, u jikber l-aktar malajr fl-aħħar.

Għal kju M/M/1, fejn S huwa l-ħin medju tas-servizz:

- Ħin ta’ twassil τ = S / (1 − ρ)

- Ħin ta’ stennija ω = S × ρ / (1 − ρ)

| Utilizzazzjoni ρ | Ħin ta’ twassil τ | Ħin ta’ stennija ω |
| ---------------- | ----------------- | ------------------ |
| 50% | 2 × S | 1 × S |
| 70% | 3.3 × S | 2.3 × S |
| 80% | 5 × S | 4 × S |
| 90% | 10 × S | 9 × S |
| 95% | 20 × S | 19 × S |
| 99% | 100 × S | 99 × S |

Eżempju: reviżjoni tal-kodiċi tieħu siegħa xogħol. Jekk ir-reviżuri jkunu okkupati 80% tal-ħin, reviżjoni tieħu madwar 5 sigħat mit-talba sat-tlestija. Jekk ir-reviżuri jkunu okkupati 95% tal-ħin, tieħu madwar 20 siegħa, għalkemm ir-reviżuri huma biss 15-il punt perċentwali aktar okkupati.

Din hija r-raġuni għaliex “żomm lil kulħadd okkupat 100%” hija riċetta għal ħinijiet ta’ twassil twal, u għaliex l-[għarfien](#għarfien) hawn taħt iwissi kontra l-ippjanar għal utilizzazzjoni għolja.

### Il-formula ta’ Kingman

Il-formula ta’ Kingman, magħrufa wkoll bħala l-ekwazzjoni VUT, tagħti approssimazzjoni tal-ħin ta’ stennija għal kju b’server wieħed bi kwalunkwe distribuzzjoni tal-wasliet u tas-servizz (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

It-tliet fatturi huma:

- U: fattur tal-utilizzazzjoni ρ / (1 − ρ), li huwa l-kurva tal-utilizzazzjoni ta’ hawn fuq.

- V: fattur tal-varjabbiltà (ca² + cs²) / 2, fejn ca huwa l-koeffiċjent tal-varjazzjoni tal-ħin bejn il-wasliet, u cs huwa l-koeffiċjent tal-varjazzjoni tal-ħinijiet tas-servizz. Il-koeffiċjent tal-varjazzjoni huwa d-devjazzjoni standard diviża bil-medja.

- T: fattur tal-ħin S, il-ħin medju tas-servizz.

Eżempju: għal kju M/M/1, ca = cs = 1, għalhekk V = 1, u l-formula tagħti l-istess ħin ta’ stennija bħall-kurva tal-utilizzazzjoni. Jekk l-oġġetti tax-xogħol isiru aktar uniformi, pereżempju billi l-biljetti kbar jinqasmu sabiex cs jinżel minn 1 għal qrib 0, imbagħad V jinżel għal madwar 0.5, u l-ħin ta’ stennija bejn wieħed u ieħor jonqos bin-nofs bl-istess utilizzazzjoni.

Il-formula ta’ Kingman turi t-tliet lievi biex jitnaqqas il-ħin ta’ stennija:

- Naqqas l-utilizzazzjoni, pereżempju billi żżid il-kapaċità jew tillimita x-xogħol li jkun għaddej.

- Naqqas il-varjabbiltà, pereżempju b’lottijiet iżgħar, oġġetti tax-xogħol aktar uniformi, jew wasliet aktar regolari.

- Naqqas il-ħin tas-servizz, pereżempju permezz tal-awtomazzjoni.

### Il-ġbir f’kju wieħed u Erlang C

Kju wieħed komuni li jitma’ diversi servers huwa aħjar minn kjuwijiet separati li kull wieħed minnhom jitma’ server wieħed. Din hija r-raġuni għaliex il-banek jużaw linja waħda li titma’ ħafna kaxxiera, u għaliex kju komuni tal-appoġġ huwa aħjar minn kju għal kull aġent.

Eżempju: żewġ servers kull wieħed jieħu siegħa għal kull oġġett, u l-oġġetti jaslu b’rata ta’ 1.6 oġġetti fis-siegħa b’kollox, għalhekk l-utilizzazzjoni hija 80%.

- Kjuwijiet separati: kull server huwa kju M/M/1 b’0.8 wasliet fis-siegħa, għalhekk il-ħin ta’ twassil huwa 1 / (1 − 0.8) = 5 sigħat.

- Kju komuni: iż-żewġ servers jaqsmu kju M/M/2, għalhekk il-ħin ta’ twassil huwa madwar 2.8 sigħat, li huwa madwar 44% inqas, bl-istess nies u bl-istess xogħol.

Il-formula Erlang C tikkalkula l-probabbiltà li oġġett li jasal ikollu jistenna f’kju M/M/c, b’tagħbija offruta a = λ / μ u utilizzazzjoni ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Ħin ta’ stennija ω = P(wait) / (c μ − λ)

It-timijiet tas-servizz lill-klijenti jużaw Erlang C biex jiddeċiedu kemm-il aġent għandhom ikollhom biex jilħqu mira, bħal “80% tat-telefonati jitwieġbu fi żmien 20 sekonda”.

Il-ġbir f’kju wieħed għandu l-limiti tiegħu: jaħdem l-aħjar meta kwalunkwe server ikun jista’ jipproċessa kwalunkwe oġġett. Jekk l-oġġetti jeħtieġu speċjalisti, imbagħad kju komuni jista’ jeħtieġ regoli ta’ rotta.

## Segwitu tal-attivitajiet

### Eżempji ta’ attivitajiet

Ejja ngħidu li għandna xi ħaġa li rridu nsegwu, u nsejħulha b’isem ġeneriku bħal “Attività”, imqassar għal “A”.

Nistgħu nużaw in-notazzjoni tal-kjuwijiet b’mod effiċjenti biex niddeskrivu l-attività u kif timxi minn ġo kju.

Eżempji:

- Aκ: għadd tal-attività: kemm-il oġġett hemm fil-kju.

- Aλ: rata ta’ wasla tal-attività: kemm-il oġġett jidħol għal kull unità ta’ ħin.

- Aχ: rata totali tal-attività: kemm-il oġġett joħroġ mill-kju għal kull unità ta’ ħin.

- Aα: rata ta’ suċċess tal-attività: kemm-il oġġett ikun tajjeb għal kull unità ta’ ħin.

- Aβ: rata ta’ falliment tal-attività jew rata ta’ żbalji: kemm-il oġġett ikun ħażin għal kull unità ta’ ħin.

- Aμ: rata ta’ servizz tal-attività jew kapaċità: kemm-il oġġett jista’ jlesti server wieħed għal kull unità ta’ ħin meta jkun okkupat.

- Aδ: rata ta’ qbiż tal-attività jew rata ta’ abbandun: kemm-il oġġett jiġi abbandunat għal kull unità ta’ ħin.

- Aρ: proporzjon ta’ utilizzazzjoni tal-attività: il-proporzjon tal-ħin disponibbli li fih is-servers ikunu okkupati, jiġifieri ħin okkupat ÷ ħin disponibbli, jew λ / (c μ).

- Aε: proporzjon ta’ żbalji tal-attività: kemm-il oġġett jitlesta bi żbalji meta mqabbel mat-total.

- Aτ: ħin ta’ twassil tal-attività: kemm jgħaddi ħin mit-talba sat-tlestija.

- Aω: ħin ta’ stennija tal-attività: kemm jgħaddi ħin mit-talba sal-bidu.

- Aφ: ħin tax-xogħol tal-attività: kemm jgħaddi ħin mill-bidu sat-tlestija.

- Aθ: ħin tal-pass tal-attività: kemm jgħaddi ħin minn tlestija waħda sat-tlestija li jmiss.

### Il-Liġi ta’ Little

Il-liġi ta’ Little hija teorema ta’ John Little li tgħid: in-numru medju fit-tul L ta’ klijenti f’sistema stazzjonarja huwa ugwali għar-rata medja effettiva ta’ wasla fit-tul λ immultiplikata bil-ħin medju W li klijent iqatta’ fis-sistema.

Eżempju ta’ notazzjoni:

- L: numru medju fit-tul ta’ klijenti fis-sistema. Aħna nippreferu κ (kappa).

- λ: rata medja effettiva ta’ wasla fit-tul, jiġifieri l-oġġetti li fil-fatt jidħlu fis-sistema, għalhekk mingħajr ir-rifjuti.

- W: ħin medju fit-tul li oġġett iqatta’ fis-sistema. Aħna nippreferu τ (tau).

- L = λ W hija l-liġi ta’ Little. Aħna nippreferu κ = λ τ (kappa = lambda \* tau).

Il-liġi ta’ Little hija ġenerali b’mod notevoli: tapplika irrispettivament mid-distribuzzjoni tal-wasliet, mid-distribuzzjoni tas-servizz, min-numru ta’ servers, jew mit-tip ta’ kju.

Is-suppożizzjonijiet tal-liġi ta’ Little:

- L-unitajiet tal-kejl kollha huma konsistenti.

- Is-sistema hija stabbli, jiġifieri r-rata medja ta’ wasla hija ugwali għar-rata medja ta’ tluq matul il-perjodu tal-kejl, u n-numru ta’ oġġetti huwa bejn wieħed u ieħor l-istess fil-bidu u fl-aħħar.

- L-oġġetti li jitilqu kmieni, pereżempju bl-irtirar, jew jingħaddu b’mod konsistenti kemm f’λ kif ukoll f’τ, jew jiġu esklużi b’mod konsistenti mit-tnejn.

Eżempju: tim għandu bħala medja κ = 20 biljett għaddejjin, u l-biljetti jaslu b’λ = 4 fil-ġimgħa; fi stat stabbli, it-tim ilesti wkoll χ = 4 fil-ġimgħa. Għalhekk il-biljett medju jieħu τ = κ / λ = 5 ġimgħat. Biex jitnaqqas il-ħin ta’ twassil bin-nofs mingħajr ma wieħed jaħdem aktar malajr, naqqas ix-xogħol li jkun għaddej bin-nofs.

### Indikaturi ewlenin tal-prestazzjoni (KPIs)

Normalment insegwu ħafna affarijiet dwar l-attivitajiet fil-kju, u rridu niġbru fil-qosor ir-riżultati billi nagħżlu lista qasira tal-aktar rilevanti għall-proġetti tagħna.

Bnejna ħafna proġetti, u nemmnu li l-aktar indikaturi sommarji siewja huma:

- Dτ = ħin ta’ twassil tal-kunsinna. It-timijiet tal-prodott jistgħu jgħidu “mill-kunċett sal-klijent” jew “mill-idea sal-implimentazzjoni”.

- Dα = rata ta’ suċċess tal-kunsinna. It-timijiet DevOps jistgħu jgħidu “frekwenza tal-iskjerament” jew “nikkunsinnaw X darbiet kuljum”.

- Dε = proporzjon ta’ żbalji tal-kunsinna. It-timijiet tal-kwalità jistgħu jgħidu “rata ta’ falliment tal-bidliet” jew “perċentwal ta’ rollbacks”.

- Rτ = ħin ta’ twassil tar-restawr. L-inġiniera tal-affidabbiltà tas-sit jistgħu jgħidu “ħin ta’ rkupru minn skjerament fallut” jew “ħin medju għar-restawr (MTTR)”.

## Metriċi tas-servizz

Termini utli:

- **Service Level Indicator (SLI):** huwa l-metrika (pereżempju, 99.9% uptime)
- **Service Level Objective (SLO):** il-mira interna għal dik il-metrika (pereżempju, immira għal 99.95% uptime)
- **Service Level Agreement (SLA):** il-wegħda formali u kuntrattwali lill-klijent (pereżempju, 99.9% uptime b’penali jekk ma tintlaħaqx).

### Ħin medju għar-rispons, it-tiswija, l-irkupru, ir-riżoluzzjoni

MTTR tirrappreżenta erba’ kejliet differenti:

| Metrika | Fokus | Tkejjel | Bidu | Tmiem |
| ------- | ----- | ------- | ---- | ----- |
| **Mean Time To Respond** | Reazzjoni inizjali | Ħin biex l-inċident jiġi rikonoxxut u tibda l-azzjoni | Meta l-inċident jiġi skopert/irrappurtat | Meta t-tim jibda jaħdem fuqu |
| **Mean Time To Repair** | Tiswija teknika | Ħin biex jissewwa l-oġġett miksur | Meta jibda x-xogħol tat-tiswija | Meta l-oġġett jissewwa |
| **Mean Time To Recover** | Restawr tas-servizz | Ħin biex is-servizz jiġi rrestawrat kompletament | Meta jibda l-inċident/il-qtugħ | Meta s-servizz ikun kompletament operattiv |
| **Mean Time To Resolve** | Riżoluzzjoni kompluta | Ħin totali mill-iskoperta sal-għeluq | Meta l-inċident jiġi skopert | Meta l-inċident jingħalaq kompletament |

**Distinzjonijiet ewlenin:**

**Respond** tkejjel kemm it-tim huwa lest u kemm l-allerti huma effettivi. Ħin ta’ rispons baxx ifisser li l-proċessi tal-monitoraġġ u tad-dmir fuq sejħa qed jaħdmu tajjeb, anki jekk it-tiswija nfisha tieħu aktar.

**Repair** hija strettament teknika: kemm jieħu ħin biex il-ħaġa miksura fil-fatt tissewwa ladarba jkun beda x-xogħol fuqha? Teskludi l-ħin tal-iskoperta, it-triage u l-verifika.

**Recover** tirrigwarda d-disponibbiltà tas-servizz mill-perspettiva tal-klijent. Is-sistema tista’ tkun “issewwiet” iżda mhux ukoll “irkuprat” jekk għad hemm bżonn li tiġi rrestawrata d-data, li jissaħħnu l-caches, jew li tiġi vverifikata l-funzjonalità.

**Resolve** hija l-aktar komprensiva: tkopri ċ-ċiklu kollu tal-inċident mill-ewwel skoperta sal-verifika ta’ wara l-inċident u l-għeluq.

Xenarju ta’ eżempju:

- 2:00 AM — Jibda l-qtugħ
- 2:05 AM — Tinxtegħel allerta, l-inċident jiġi skopert
- 2:15 AM — Il-persuna fuq sejħa tirrikonoxxi u tibda x-xogħol → Ħin ta’ rispons: 10 min (2:05 sa 2:15)
- 2:45 AM — Il-kawża ewlenija tiġi identifikata, it-tiswija tiġi skjerata → Ħin ta’ tiswija: 30 min (2:15 sa 2:45)
- 3:00 AM — Is-servizz jiġi vverifikat li qed jaħdem għall-utenti → Ħin ta’ rkupru: 60 min (2:00 sa 3:00)
- 3:30 AM — Il-biljett tal-inċident jingħalaq wara l-verifika → Ħin ta’ riżoluzzjoni: 85 min (2:05 sa 3:30)

Metriċi relatati:

- MTBF (ħin medju qabel falliment)
- MTTF (ħin medju sal-falliment)
- MTTA (ħin medju sar-rikonoxximent)

### Metriċi DORA

Il-metriċi DevOps Research and Assessment (DORA) huma indikaturi ewlenin tal-prestazzjoni (KPIs) standard tal-industrija, speċifikament għal timijiet DevOps tal-inġinerija tas-software. Ara [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA issa tuża ħames metriċi, f’żewġ gruppi.

Metriċi tat-throughput:

- **Change Lead Time** - Il-ħin biex jiġi implimentat, ittestjat u kkunsinnat kodiċi għal funzjoni (imkejjel mill-commit sal-iskjerament fil-produzzjoni). Jekk jogħġbok kun speċifiku dwar x’tifhem b’bidu u tmiem. Pereżempju, xi timijiet jippreferu jkejlu minn meta żviluppatur jibda x-xogħol fuq biljett, sa meta l-iżviluppatur jibgħat ix-xogħol lil proċess ta’ integrazzjoni kontinwa; dan l-approċċ għandu t-tendenza li jkun aktar effettiv biex titkejjel il-produttività tal-persuna.

- **Deployment Frequency** - In-numru ta’ skjeramenti f’perjodu ta’ ħin partikolari. Jekk jogħġbok kun speċifiku dwar x’tifhem bi skjerament u kif qed issegwi l-frekwenza. Pereżempju, xi timijiet jagħmlu skjerament fuq flotta ta’ servers tal-produzzjoni u jsegwu t-tnedija sħiħa, filwaqt li timijiet oħra jagħmlu skjerament fuq server wieħed tat-test tal-aċċettazzjoni tal-utent (UAT) u jsegwu meta l-maniġer tal-proġett jibgħat email ta’ avviż lill-utenti biex jippruvaw jittestjaw.

- **Failed Deployment Recovery Time** - Il-ħin li jittieħed biex isir irkupru minn skjerament li jikkawża falliment fil-produzzjoni. Qabel dan kien jissejjaħ Mean Time to Recovery (MTTR) jew Time to Restore Service. Jekk jogħġbok kun speċifiku dwar x’tifhem b’irkupru. Pereżempju, xi timijiet jgħoddu l-irkupru bħala riżoluzzjoni kompluta, jiġifieri l-ħin totali minn meta inċident jiġi skopert sa meta inċident jingħalaq kompletament; dan l-approċċ huwa deskritt aħjar bħala Mean Time To Resolve.

Metriċi tal-instabbiltà:

- **Change Failure Rate** - Il-perċentwal ta’ skjeramenti li jikkawżaw falliment fil-produzzjoni u li jeħtieġu rimedju immedjat, bħal rollback jew hotfix. Jekk jogħġbok kun speċifiku dwar x’tifhem b’falliment. Pereżempju, xi timijiet jgħoddu wkoll falliment meta jibdew fuq biljett tax-xogħol u mbagħad jindunaw li l-biljett ma fihx biżżejjed informazzjoni biex ikomplu, għalhekk it-tim jirrifjuta l-biljett u jibagħtu lura lit-tim tal-ispeċifikazzjoni.

- **Deployment Rework Rate** - Il-perċentwal ta’ skjeramenti li mhumiex ippjanati, bħal biex jissewwa inċident fil-produzzjoni. Dan huwa n-numru ta’ skjeramenti mhux ippjanati diviż bin-numru totali ta’ skjeramenti. DORA żiedet din il-metrika fl-2024.

Rapporti DORA preċedenti ddiskutew ukoll ir-**Reliability** bħala metrika tal-prestazzjoni operattiva: valutazzjoni usa’, spiss kwalitattiva, tal-konsistenza tas-servizz, bħad-disponibbiltà, l-uptime, il-latenza, il-preċiżjoni, u l-objettivi tal-livell tas-servizz. L-affidabbiltà tgħin biex turi li veloċità għolja ma tiġix a spejjeż tal-kapaċità tas-sistema.

## Kju ta’ kjuwijiet

It-teorija tal-kjuwijiet hija faċli biex tiġi estiża għal kju ta’ kjuwijiet, bħal proċess ta’ livell ogħla li fih stadji, jew fażijiet, jew bibien ta’ livell aktar baxx.

### Kju ta’ kjuwijiet Double Diamond

Pereżempju, ikkunsidra l-mudell tal-proċess tal-innovazzjoni “Double Diamond”, li jispeċifika erba’ stadji:

1. Skopri: ifhem il-problema minflok ma tassumi biss x’inhi.
2. Iddefinixxi: bl-għarfien mill-fażi tal-iskoperta, iddefinixxi l-isfida.
3. Iżviluppa: agħti tweġibiet differenti għall-problema definita b’mod ċar.
4. Ikkunsinna: ittestja soluzzjonijiet differenti fuq skala żgħira u mbagħad tejjibhom.

It-teorija tal-kjuwijiet tista’ timmudella dan bħala kju wieħed tal-proċess li fih erba’ kjuwijiet tal-istadji:

- Ir-rata ta’ wasla tal-proċess hija r-rata ta’ wasla tal-istadju 1.
- Ir-rata ta’ suċċess tal-proċess hija r-rata ta’ suċċess tal-istadju 4.
- L-għadd ta’ żbalji tal-proċess huwa s-somma tal-għadd ta’ żbalji tal-istadji.
- L-għadd ta’ qbiżiet tal-proċess huwa s-somma tal-għadd ta’ qbiżiet tal-istadji.
- Il-ħin ta’ twassil tal-proċess huwa s-somma tal-ħinijiet ta’ twassil tal-istadji.
- It-throughput massimu tal-proċess huwa t-throughput tal-iktar stadju bil-mod, magħruf ukoll bħala l-konġestjoni (bottleneck).

### Kju ta’ kjuwijiet f’forma ta’ lembut

Fix-xogħol prattiku tagħna, spiss nużaw il-kelma “lembut” biex niddeskrivu b’mod ġenerali kju ta’ kjuwijiet li għandu t-tendenza li jnaqqas l-għadd ta’ oġġetti f’kull stadju:

- Kju tar-reklutaġġ li juża stadju ta’ kuntatt, stadju ta’ intervista, u stadju ta’ offerta. Għal dan it-tip ta’ kju, għandna l-għan li nimmassimizzaw ir-rata ta’ wasla tal-istadju 1, jiġifieri li nżidu l-kuntatt tagħna, pereżempju permezz ta’ promozzjonijiet.

- Kju tax-xiri li juża stadju ta’ tfittxija mill-klijent, stadju tal-karrettun tax-xiri, u stadju tal-ħlas. Għal dan it-tip ta’ kju, għandna l-għan li nimminimizzaw ir-rata ta’ qbiż tal-istadju 2, jiġifieri li nnaqqsu l-abbandun tal-karrettun, pereżempju permezz ta’ tfakkiriet.

- Kju tal-ipprogrammar li juża stadju ta’ integrazzjoni, stadju ta’ aċċettazzjoni mill-utent, u stadju ta’ tnedija fil-produzzjoni. Għal dan it-tip ta’ kju, għandna l-għan li nimminimizzaw ir-rata ta’ żbalji tal-istadju tat-tnedija fil-produzzjoni, pereżempju permezz ta’ telemetrija canary.

## Għarfien

Seba’ għarfiet dwar it-teorija tal-kjuwijiet, minn Bob Wescott, awtur ta’ “The Every Computer Performance Book” (ara wkoll [is-sommarju ta’ Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Iktar ma ċ-ċentru tas-servizz ikun bil-mod, iktar għandha tkun baxxa l-utilizzazzjoni massima li għandek tippjana għaliha fit-tagħbija massima.

2. Huwa diffiċli ħafna li tuża l-aħħar 15% ta’ kwalunkwe ħaġa.

3. Iktar ma tkun qrib it-tarf, iktar ikun għoli l-prezz tal-iżball.

4. Iż-żidiet fil-ħin ta’ rispons huma limitati min-numru ta’ dawk li jistgħu jistennew.

5. Ftakar li din hija medja, mhux massimu.

6. Hemm effett ta’ ċaħda umana f’ċentri tas-servizz multipli.

7. Uri t-titjib żgħir fl-aħjar dawl tiegħu.

## Epilogu

### Ara wkoll

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Oqsma fuq Wikipedia fejn nużaw il-kjuwijiet f’ħafna proġetti:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Introduzzjonijiet minn John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Introduzzjonijiet b’aktar dettall:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formuli:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Ringrazzjamenti

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Dan il-ktieb huwa eċċellenti għal DevOps ta’ livell għoli, u jinfluwenza direttament l-għażla tagħna tal-KPIs. Il-KPIs f’din il-paġna jaqblu mar-rakkomandazzjonijiet tal-ktieb.

## Informazzjoni tal-proġett

- Pakkett: queue-theory
- Verżjoni: 3.0.0
- Maħluq: 2019-01-25T04:17:56Z
- Aġġornat: 2026-11-23T15:33:48Z
- Liċenzja: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, jew jekk jogħġbok ikkuntattjana għal termini oħra (ara [LICENSE.md](LICENSE.md))
- Kuntatt: Joel Parker Henderson <joel@joelparkerhenderson.com>
