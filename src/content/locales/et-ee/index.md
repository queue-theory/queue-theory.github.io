# Järjekorrateooria

Järjekorrateooria on ootejärjekordade ehk järjekordade matemaatiline uurimine.
Kasutame järjekorrateooriat oma tarkvaraarenduses, et analüüsida ja optimeerida
oma praktikaid ja protsesse, näiteks klienditeeninduse reageerimisvõimet,
projektijuhtimise kanban-planeerimist, protsessidevahelise suhtluse
sõnumijärjekordi ning DevOpsi pideva juurutamise konveiereid.

Sisukord:

- [Sissejuhatus](#sissejuhatus)
  - [Klienditeeninduse reageerimisvõime](#klienditeeninduse-reageerimisvõime)
  - [Projektijuhtimise kanban-planeerimine](#projektijuhtimise-kanban-planeerimine)
  - [Protsessidevahelise suhtluse sõnumijärjekorrad](#protsessidevahelise-suhtluse-sõnumijärjekorrad)
  - [DevOpsi pideva juurutamise konveierid](#devopsi-pideva-juurutamise-konveierid)
- [Järjekorra terminoloogia](#järjekorra-terminoloogia)
  - [Järjekorra tüübid ja teenindustüübid](#järjekorra-tüübid-ja-teenindustüübid)
- [Järjekorrateooria tähistus](#järjekorrateooria-tähistus)
  - [Arv](#arv)
  - [Saabumiskiirus, teeninduskiirus, lahkumiskiirus](#saabumiskiirus-teeninduskiirus-lahkumiskiirus)
  - [Kasutusaste ehk liiklusintensiivsus](#kasutusaste-ehk-liiklusintensiivsus)
  - [Läbilaskekiirused: lahkumiskiirus, lõpetamiskiirus, õnnestumiskiirus, ebaõnnestumiskiirus, vahelejätmiskiirus](#läbilaskekiirused-lahkumiskiirus-lõpetamiskiirus-õnnestumiskiirus-ebaõnnestumiskiirus-vahelejätmiskiirus)
  - [Teeninduskiiruse mõiste täpsustamine](#teeninduskiiruse-mõiste-täpsustamine)
  - [Vahelejätmiskiirus](#vahelejätmiskiirus)
  - [Veasuhe](#veasuhe)
  - [Läbimisaeg, ooteaeg, tööaeg, sammuaeg](#läbimisaeg-ooteaeg-tööaeg-sammuaeg)
  - [Kendalli tähistus](#kendalli-tähistus)
- [Järjekordade matemaatika](#järjekordade-matemaatika)
  - [Kasutusastme kõver](#kasutusastme-kõver)
  - [Kingmani valem](#kingmani-valem)
  - [Järjekordade ühendamine ja Erlang C](#järjekordade-ühendamine-ja-erlang-c)
- [Tegevuste jälgimine](#tegevuste-jälgimine)
  - [Tegevuste näited](#tegevuste-näited)
  - [Little'i seadus](#littlei-seadus)
  - [Peamised tulemusnäitajad (KPI-d)](#peamised-tulemusnäitajad-kpi-d)
- [Teenusemõõdikud](#teenusemõõdikud)
  - [Keskmine aeg reageerimiseni, parandamiseni, taastumiseni, lahendamiseni](#keskmine-aeg-reageerimiseni-parandamiseni-taastumiseni-lahendamiseni)
  - [DORA mõõdikud](#dora-mõõdikud)
- [Järjekordade järjekord](#järjekordade-järjekord)
  - [Topeltteemandi järjekordade järjekord](#topeltteemandi-järjekordade-järjekord)
  - [Lehtri järjekordade järjekord](#lehtri-järjekordade-järjekord)
- [Tähelepanekud](#tähelepanekud)
- [Järelsõna](#järelsõna)
  - [Vaadake ka](#vaadake-ka)
  - [Tänusõnad](#tänusõnad)
- [Projekti andmed](#projekti-andmed)

## Sissejuhatus

Kasutame järjekorrateooriat oma projektides mitmel eesmärgil:

- Klienditeeninduse reageerimisvõime

- Projektijuhtimise kanban-planeerimine

- Protsessidevahelise suhtluse sõnumijärjekorrad

- DevOpsi pideva juurutamise konveierid

### Klienditeeninduse reageerimisvõime

Näiteks soovime analüüsida, kuidas kliendid küsivad müügi- ja tugiabi ning kui kiiresti me neile vastame.

Asjakohased tooted on näiteks [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Projektijuhtimise kanban-planeerimine

Näiteks soovime jälgida läbimisaegu ja edenemisaegu, kui uue funktsiooni idee areneb kavandamisest tarnimiseni.

Asjakohased tooted on näiteks [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Protsessidevahelise suhtluse sõnumijärjekorrad

Näiteks soovime maksimeerida läbilaskevõimet ja minimeerida survet, kui üks programm saadab päringuid teisele programmile.

Asjakohased tooted on näiteks [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### DevOpsi pideva juurutamise konveierid

Näiteks soovime tagada, et meie pideva integratsiooni serveril oleks piisavalt võimsust, et meie tarkvara testida ja seejärel juurutada.

Asjakohased tooted on näiteks [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Järjekorra terminoloogia

Järjekorra terminoloogia on suur teema. Selles jaotises on osa meie levinumast terminoloogiast. Näidetes kasutame järjekorras ootava kliendi ideed.

### Järjekorra tüübid ja teenindustüübid

Järjekorra tüübid ja teenindustüübid kirjeldavad, kuidas järjekord valib, milliseid üksusi töödelda.

- Esimesena sisse, esimesena välja (First In First Out, FIFO): teenindatakse klienti, kes on oodanud kõige kauem.

- Viimasena sisse, esimesena välja (Last In First Out, LIFO): teenindatakse klienti, kes on oodanud kõige lühemat aega.

- Prioriteet: kliente teenindatakse nende prioriteeditaseme alusel; need tasemed võivad põhineda staatusel, kiireloomulisusel, maksel jne.

- Lühim töö esimesena (Shortest Job First, SJF): teenindatakse klienti, kes vajab kõige vähem teenindust.

- Pikim töö esimesena (Longest Job First, LJF): teenindatakse klienti, kes vajab kõige rohkem teenindust.

- Lühim järelejäänud töötlemisaeg (Shortest Remaining Processing Time, SRPT): nagu SJF, kuid äsja saabunud lühike töö võib katkestada pikema töö, mis on juba teenindamisel.

- Ringmeetod (Round Robin): iga klienti teenindatakse lühikese ajalõigu jooksul, seejärel liigutakse järgmise kliendi juurde ja korratakse.

- Ajajaotus ehk protsessori jagamine (Processor Sharing, PS): kõiki teenindatakse samal ajal; teenindusvõimsus jaotatakse võrdselt kõigi ootajate vahel.

SJF ja SRPT minimeerivad keskmist ooteaega, kuid võivad pikki töid lõputult nälgida, seetõttu lisavad päris süsteemid sageli vananemise või prioriteedipiirangud.

## Järjekorrateooria tähistus

Järjekorrateooria kasutab kreeka tähtedega tähistust.

Meie meeskonnad kasutavad osa levinud tähistusest; lisame ka omapoolset tähistust, mis aitab meid tarkvaraprojektides.

Meie tähistus ja iga sümboli tähendus:

| Meie tähistus | Tähendus |
| ------------- | -------- |
| κ (kapa) | süsteemis olevate üksuste arv, ootavad pluss töös olevad |
| λ (lambda) | süsteemi sisenevate üksuste saabumiskiirus |
| χ (hii) | süsteemist väljuvate üksuste lahkumiskiirus |
| μ (müü) | teeninduskiirus ehk võimsus: kui kiiresti üks teenindaja hõivatuna töötab |
| ρ (roo) | kasutusaste: osa ajast, mil teenindajad on hõivatud, λ / (c μ) |
| α (alfa) | õnnestumiskiirus: täheldatud väljund, mis osutub õigeks |
| β (beeta) | ebaõnnestumiskiirus: täheldatud väljund, mis osutub valeks |
| δ (delta) | lõpetamiskiirus: õnnestumine + ebaõnnestumine, teenindatud üksused, olgu tulemus õige või vale |
| σ (sigma) | vahelejätmiskiirus: sisenenud, kuid teenindamata üksused |
| ε (epsilon) | veasuhe: β / δ = β / (α + β) |
| τ (tau) | aeg süsteemis ehk läbimisaeg |
| ω (oomega) | ooteaeg ehk aeg järjekorras |
| φ (fii) | tööaeg ehk aeg protsessoris ehk teenindusaeg |
| θ (teeta) | sammuaeg lõpetamiste vahel; keskmine sammuaeg ≈ 1 / χ püsiseisundis |

### Arv

Loendame üksusi sageli ja kasutame järgmist tähistust:

- κ (kapa): süsteemis olevate üksuste arv, st ootavad üksused pluss töös olevad üksused.

![Diagramm: süsteemis on κ üksust](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Näide:

- κ = 10 tähendab täpselt 10

- κ ≈ 10 tähendab umbes 10

- κ < 10 tähendab vähem kui 10

- κ > 10 tähendab rohkem kui 10

- κ ≪ 10 tähendab palju vähem kui 10

- κ ≫ 10 tähendab palju rohkem kui 10

Arv κ (kapa) on hetktõmmis ühest hetkest.

Keskmine arv κ̅ (kapa kriipsuga) on arvutus, mis võtab keskmise mõõtmistest teatud ajavahemiku jooksul, näiteks mõõtes iga tunni tagant kahe nädala vältel.

### Saabumiskiirus, teeninduskiirus, lahkumiskiirus

Kõige olulisem tähistus:

- λ (lambda): saabumiskiirus. See mõõdab, kui kiiresti üksused süsteemi sisenevad.

- μ (müü): teeninduskiirus ehk võimsus. See mõõdab, kui kiiresti üks teenindaja suudab hõivatuna üksusi käsitleda.

- χ (hii): lahkumiskiirus. See mõõdab, kui kiiresti üksused süsteemist väljuvad.

![Diagramm: üksused saabuvad kiirusega λ, teenindatakse kiirusega μ ja lahkuvad kiirusega χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-mu-service-chi-departure.svg)

Üldised näited traditsiooniliste ühe teenindajaga järjekordade kohta:

- λ < μ tähendab, et saabumiskiirus on väiksem kui teeninduskiirus; järjekord on stabiilne, st see kõigub lõpliku keskmise suuruse ümber.

- λ = μ tähendab, et saabumiskiirus võrdub teeninduskiirusega; vähimagi juhuslikkuse korral järjekord triivib ja kasvab piiramatult.

- λ > μ tähendab, et saabumiskiirus on suurem kui teeninduskiirus; järjekord kasvab ühtlaselt, umbes λ − μ üksuse võrra ajaühikus.

Intuitiivne arusaam, et „λ = μ hoiab järjekorra sama suurena“, kehtib ainult siis, kui saabumised ja teenindus on täiesti korrapärased nagu metronoom. Päris saabumised tulevad pursetena, nii et vaikse perioodi jooksul kaotatud jõudeaega ei saa kunagi tagasi ja järjekord kasvab järgmise purske ajal.

Pidage meeles, et mõned järjekorrateooria praktikud kasutavad mõistet „teeninduskiirus“ täheldatud väljundi, mitte võimsuse tähenduses; vaadake [teeninduskiiruse mõiste täpsustamist](#teeninduskiiruse-mõiste-täpsustamine).

### Kasutusaste ehk liiklusintensiivsus

Kõige olulisem tähistus, mis järjekorda kokku võtab:

- ρ (roo): kasutusaste, st osa ajast, mil teenindajad on hõivatud = λ / μ ühe teenindaja korral või λ / (c μ) c teenindaja korral

Näited:

- ρ < 1 tähendab, et teenindajatel on vaba võimsust; järjekord on stabiilne. Mida lähemale ρ jõuab 1-le, seda pikemad on ooteajad; vaadake [kasutusastme kõverat](#kasutusastme-kõver).

- ρ = 1 tähendab, et teenindajad on kogu aeg hõivatud; järjekord on ebastabiilne ja kasvab piiramatult.

- ρ > 1 tähendab, et saabumised ületavad võimsust; järjekord suureneb.

### Läbilaskekiirused: lahkumiskiirus, lõpetamiskiirus, õnnestumiskiirus, ebaõnnestumiskiirus, vahelejätmiskiirus

Läbilaskekiirused mõõdavad täheldatud väljundit, st üksusi, mis tegelikult järjekorrast lahkuvad. Need jagunevad viieks laiaks kategooriaks:

- χ (hii): lahkumiskiirus. See mõõdab, kui kiiresti üksused süsteemist väljuvad.

- α (alfa): õnnestumiskiirus. See mõõdab, mitu üksust ajaühikus osutub õigeks, nt korrektseks, täielikuks, aktsepteerituks.

- β (beeta): ebaõnnestumiskiirus. See mõõdab, mitu üksust ajaühikus osutub valeks, nt ebakorrektseks, puudulikuks, tagasilükatuks.

- δ (delta): lõpetamiskiirus. See mõõdab, mitu üksust ajaühikus teenindatakse.

- σ (sigma): vahelejätmiskiirus. See mõõdab, mitu üksust ajaühikus siseneb järjekorda ja lahkub seejärel teenindamata, nt loobumised, ootamisest loobumised.

![Diagramm: lahkumiskiirus χ = lõpetamiskiirus δ + vahelejätmiskiirus σ; lõpetamiskiirus δ = õnnestumiskiirus α + ebaõnnestumiskiirus β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Lõpetamiskiirus = õnnestumiskiirus + ebaõnnestumiskiirus:

- δ = α + β (hääldatakse: delta võrdub alfa pluss beeta)

Kogukiirus = lõpetamiskiirus + vahelejätmiskiirus:

- χ = δ + σ (hääldatakse: hii võrdub delta pluss sigma)

Kogukiirus = õnnestumiskiirus + ebaõnnestumiskiirus + vahelejätmiskiirus:

- χ = α + β + σ (hääldatakse: hii võrdub alfa pluss beeta pluss sigma)

Iga χ-s loendatud üksus on süsteemi sisenenud, seega püsiseisundis võrdub kogukiirus saabumiskiirusega: χ ≈ λ. Seetõttu mõõdavad läbilaskekiirused väljundit, mitte võimsust.

### Teeninduskiiruse mõiste täpsustamine

Olenevalt kontekstist ja praktikust võib mõiste „teeninduskiirus“ tähendada kas
„kogukiirust“ või „õnnestumiskiirust“.

Sellel on ajaloolised juured ja see võib põhjustada segadust ja vigu, eriti
kontekstides ja praktikutel, kes kasutavad järjekorrateooriat olukordades, kus
on märkimisväärne vajadus jälgida ebaõnnestumisi ja vahelejätmisi.

- Teoreetiline vaade: teeninduskiirus on puhas kiiruse mõõt (nt tööd sekundis), olenemata sellest, kas tööd on õnnestumised, ebaõnnestumised, vahelejätmised jne.

- Töötlemise vaade: teeninduskiirus hõlmab kõike, mille töötlemisele järjekord aega kulutab, st õnnestumisi või ebaõnnestumisi, kuid ei hõlma vahelejätmisi.

- Tehnoloogiline vaade: rakendusvaldkondades, näiteks tarkvaratehnikas, mõõdab teeninduskiirus ainult õnnestumisi, veakiirus aga ebaõnnestumisi ja vahelejätmiskiirus vahelejätmisi.

Seetõttu jätame μ võimsuse tähistamiseks ja lisame selle kõrvale täheldatud väljundi kiirused, selle asendamise asemel:

- μ (müü): teeninduskiirus ehk võimsus. See mõõdab, kui kiiresti üks teenindaja suudab hõivatuna üksusi käsitleda.

- χ (hii): lahkumiskiirus. See mõõdab, kui kiiresti üksused süsteemist väljuvad.

- α (alfa): õnnestumiskiirus. See mõõdab, mitu üksust ajaühikus osutub õigeks, nt korrektseks, täielikuks, aktsepteerituks.

Miks mitte asendada μ χ või α-ga? Stabiilses järjekorras lahkub iga sisenenud üksus lõpuks, seega χ ≈ λ. Siis λ / χ ≈ 1 olenemata koormusest, mis ei ütle midagi selle kohta, kui hõivatud teenindajad on. Kasutusaste vajab võimsust: ρ = λ / (c μ), mis võrdub osaga ajast, mil teenindajad on hõivatud.

### Vahelejätmiskiirus

Vahelejätmiskiiruse üksikasjad:

- σ (sigma): vahelejätmiskiirus. See mõõdab, mitu üksust siseneb järjekorda ja lahkub seejärel töötlemata.

Vahelejätmine on see, kui üksus siseneb järjekorda ja lahkub seejärel ilma märkimisväärse töötlemiseta:

- Loobumine (abandoning): kui klient liitub järjekorraga ja lahkub seejärel mis tahes põhjusel.

- Ootamisest loobumine (reneging): kui klient, kes on juba oodanud, otsustab lahkuda, sest on raisanud liiga palju aega.

Kaks seotud käitumist ei ole vahelejätmised:

- Eemaletõrjumine (balking): kui klient otsustab järjekorraga mitte liituda, sest ooteaeg ähvardab olla liiga pikk. Eemaletõrjutud üksus ei sisene kunagi süsteemi, seega on see väljaspool süsteemi piiri: seda ei loendata λ-s, χ-s ega σ-s. Kui eemaletõrjumised on olulised, näiteks kaotatud müük, siis loendage neid eraldi tagasilükatud saabumistena.

- Järjekorra vahetamine (jockeying): kui klient vahetab paralleelsete järjekordade vahel, näiteks kassaridade vahel, püüdes saada lühemat ooteaega.

### Veasuhe

Kõige olulisem tähistus, mis järjekorra edukust kokku võtab:

- ε (epsilon): veasuhe = ebaõnnestumiste arv / lõpetatute arv = β / δ = β / (α + β)

Vahelejätmised jäetakse välja, sest vahele jäetud üksust ei teenindatud kunagi, seega ei olnud see ei õige ega vale. Jälgige vahelejätmisi eraldi σ abil.

![Diagramm: veasuhe ε on ebaõnnestumiskiirus β jagatud lõpetamiskiirusega δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Näited:

- ε = 0 tähendab, et vigu ei ole.

- ε = 0,1 tähendab, et 10% teenindustest on veaga.

- ε = 1 tähendab, et igal teenindusel on viga.

### Läbimisaeg, ooteaeg, tööaeg, sammuaeg

Jälgime nelja aega:

- τ (tau): aeg süsteemis ehk läbimisaeg ehk algusest lõpuni.

- θ (teeta): sammuaeg = ühest lõpetamisest järgmise lõpetamiseni; üks sammuaeg on üks vahe ja keskmine sammuaeg on keskmine vahe

- ω (oomega): ooteaeg = aeg, mil tegelikku tööd ei tehta, ehk ootel olemise aeg

- φ (fii): tööaeg = tegeliku töö tegemisele kulunud aeg ehk töötlemisaeg

![Diagramm: läbimisaeg τ, ooteaeg ω, tööaeg φ, sammuaeg θ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time-theta-step-time.svg)

Näited:

- τ = 5 s tähendab, et üksus siseneb süsteemi ja väljub sellest 5 sekundit hiljem.

- ω = 4 s tähendab, et üksus ootab järjekorras 4 sekundit ja seejärel algab töö.

- φ = 1 s tähendab, et üksusele kulub 1 sekund tööd ja seejärel on see valmis.

- θ = 1 s tähendab, et ühe lõpetamise ja järgmise lõpetamise vahel on 1 sekund.

Seosed:

- τ = ω + φ: läbimisaeg on ooteaeg pluss tööaeg. Näidetes 5 s = 4 s + 1 s.

- keskmine θ ≈ 1 / χ: püsiseisundis on keskmine sammuaeg kogukiiruse pöördväärtus. Üksik vahe ütleb kiiruse kohta vähe; paljude vahede keskmine ütleb rohkem. Näidetes, kui keskmine sammuaeg on 1 s, siis χ ≈ 1 üksus sekundis.

### Kendalli tähistus

Kendalli tähistus on järjekorrateooria teistsugune tähistus, mida kirjutatakse kujul A/S/c/K/N/D:

- A: saabumisprotsess, st saabumistevaheliste aegade jaotus.

- S: teenindusprotsess, st teenindusaegade jaotus.

- c: teenindajate arv.

- K: mahutavus, st süsteemis lubatud üksuste maksimaalne arv, ootavad või teenindatavad, enne kui uued saabujad tagasi lükatakse.

- N: populatsioon, st potentsiaalsete klientide arv.

- D: distsipliin, st järjekorra tüüp, näiteks FIFO või LIFO.

Levinud tähed A ja S jaoks:

- M: Markovi ehk mälutu, st eksponentsiaalsed ajad, mis tulenevad Poissoni saabumistest.

- D: deterministlik, st konstantsed ajad.

- G: üldine, st mis tahes jaotus.

Kui kolm viimast jäetakse ära, on vaikeväärtused K = ∞, N = ∞, D = FIFO. Näiteks „M/M/1“ tähendab Poissoni saabumisi, eksponentsiaalseid teenindusaegu, ühte teenindajat, piiramatut mahutavust, piiramatut populatsiooni ja põhimõtet „esimesena sisse, esimesena välja“.

Samuti:

- n: süsteemis olevate üksuste arv.

## Järjekordade matemaatika

Matemaatika jaotistes kasutatakse õpikute sümboleid, et saaksite neid teiste allikatega võrrelda: S on keskmine teenindusaeg, mis on meie φ, ja μ = 1 / S on ühe teenindaja võimsus.

### Kasutusastme kõver

Järjekorrateooria kõige olulisem tulemus: kui kasutusaste läheneb 100%-le, kasvab ooteaeg piiramatult ja see kasvab kõige kiiremini lõpus.

M/M/1 järjekorra korral, kus S on keskmine teenindusaeg:

- Läbimisaeg τ = S / (1 − ρ)

- Ooteaeg ω = S × ρ / (1 − ρ)

| Kasutusaste ρ | Läbimisaeg τ | Ooteaeg ω |
| ------------- | ------------ | --------- |
| 50%           | 2 × S        | 1 × S     |
| 70%           | 3,3 × S      | 2,3 × S   |
| 80%           | 5 × S        | 4 × S     |
| 90%           | 10 × S       | 9 × S     |
| 95%           | 20 × S       | 19 × S    |
| 99%           | 100 × S      | 99 × S    |

Näide: koodiülevaatus võtab 1 tunni tööd. Kui ülevaatajad on 80% hõivatud, võtab ülevaatus taotlemisest valmimiseni umbes 5 tundi. Kui ülevaatajad on 95% hõivatud, võtab see umbes 20 tundi, kuigi ülevaatajad on hõivatud vaid 15 protsendipunkti võrra rohkem.

Seetõttu on „hoidke kõik 100% hõivatud“ pikkade läbimisaegade retsept ja seetõttu hoiatavad allpool toodud [tähelepanekud](#tähelepanekud) kõrge kasutusastme planeerimise eest.

### Kingmani valem

Kingmani valem ehk VUT-võrrand annab ligikaudse ooteaja ühe teenindajaga järjekorra jaoks mis tahes saabumis- ja teenindusjaotuste korral (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Kolm tegurit on:

- U: kasutusastme tegur ρ / (1 − ρ), mis on ülaltoodud kasutusastme kõver.

- V: varieeruvuse tegur (ca² + cs²) / 2, kus ca on saabumistevaheliste aegade variatsioonikordaja ja cs on teenindusaegade variatsioonikordaja. Variatsioonikordaja on standardhälve jagatud keskmisega.

- T: aja tegur S, keskmine teenindusaeg.

Näide: M/M/1 järjekorra korral ca = cs = 1, seega V = 1 ja valem annab sama ooteaja kui kasutusastme kõver. Kui muudate tööüksused ühtlasemaks, näiteks jagades suured piletid nii, et cs langeb 1-lt peaaegu 0-ni, siis langeb V umbes 0,5-ni ja ooteaeg sama kasutusastme juures ligikaudu poolitub.

Kingmani valem näitab kolme hooba ooteaja vähendamiseks:

- Vähendage kasutusastet, näiteks võimsust lisades või pooleliolevat tööd piirates.

- Vähendage varieeruvust, näiteks väiksemate partiide, ühtlasemate tööüksuste või ühtlasemate saabumiste abil.

- Vähendage teenindusaega, näiteks automatiseerimise abil.

### Järjekordade ühendamine ja Erlang C

Üks ühine järjekord, mis teenindab mitut teenindajat, on parem kui eraldi järjekorrad, millest igaüks teenindab ühte teenindajat. Seetõttu kasutavad pangad ühte järjekorda, mis teenindab mitut kassapidajat, ja seetõttu on ühine tugijärjekord parem kui iga agendi eraldi järjekord.

Näide: kaks teenindajat kulutavad kumbki 1 tunni üksuse kohta ja üksusi saabub kokku 1,6 tunnis, seega on kasutusaste 80%.

- Eraldi järjekorrad: iga teenindaja on M/M/1 järjekord 0,8 saabumisega tunnis, seega on läbimisaeg 1 / (1 − 0,8) = 5 tundi.

- Ühendatud järjekord: mõlemad teenindajad jagavad M/M/2 järjekorda, seega on läbimisaeg umbes 2,8 tundi, mis on umbes 44% vähem samade inimeste ja sama tööga.

Erlang C valem arvutab tõenäosuse, et saabuv üksus peab M/M/c järjekorras ootama, pakutava koormuse a = λ / μ ja kasutusastme ρ = a / c korral:

- P(ootamine) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Ooteaeg ω = P(ootamine) / (c μ − λ)

Klienditeeninduse meeskonnad kasutavad Erlang C-d, et otsustada, mitu agenti on vaja eesmärgi täitmiseks, näiteks „80% kõnedest vastatakse 20 sekundi jooksul“.

Järjekordade ühendamisel on piirid: see toimib kõige paremini, kui iga teenindaja saab käsitleda iga üksust. Kui üksused vajavad spetsialiste, võib ühendatud järjekord vajada suunamisreegleid.

## Tegevuste jälgimine

### Tegevuste näited

Oletame, et meil on midagi, mida soovime jälgida, ja nimetame seda üldiselt näiteks „Tegevuseks“ (Activity) ning lühendame seda tähega „A“.

Saame järjekorra tähistust tõhusalt kasutada, et kirjeldada tegevust ja seda, kuidas see järjekorras liigub.

Näited:

- Aκ: tegevuse arv: mitu üksust on järjekorras.

- Aλ: tegevuse saabumiskiirus: mitu üksust saabub ajaühikus.

- Aχ: tegevuse kogukiirus: mitu üksust väljub järjekorrast ajaühikus.

- Aα: tegevuse õnnestumiskiirus: mitu üksust on ajaühikus õiged.

- Aβ: tegevuse ebaõnnestumiskiirus ehk veakiirus: mitu üksust on ajaühikus valed.

- Aμ: tegevuse teeninduskiirus ehk võimsus: mitu üksust suudab üks teenindaja hõivatuna ajaühikus lõpetada.

- Aσ: tegevuse vahelejätmiskiirus: mitmest üksusest loobutakse ajaühikus.

- Aρ: tegevuse kasutusaste: osa saadaolevast ajast, mil teenindajad on hõivatud, st hõivatud aeg ÷ saadaolev aeg ehk λ / (c μ).

- Aε: tegevuse veasuhe: mitu üksust lõpetatakse vigadega võrreldes koguarvuga.

- Aτ: tegevuse läbimisaeg: kui palju aega möödub taotlemisest lõpetamiseni.

- Aω: tegevuse ooteaeg: kui palju aega möödub taotlemisest alustamiseni.

- Aφ: tegevuse tööaeg: kui palju aega möödub alustamisest lõpetamiseni.

- Aθ: tegevuse sammuaeg: kui palju aega möödub ühest lõpetamisest järgmise lõpetamiseni.

### Little'i seadus

Little'i seadus on John Little'i teoreem, mis ütleb: statsionaarses süsteemis olevate klientide pikaajaline keskmine arv L võrdub pikaajalise keskmise efektiivse saabumiskiirusega λ korrutatuna keskmise ajaga W, mille klient süsteemis veedab.

Tähistuse näide:

- L: süsteemis olevate klientide pikaajaline keskmine arv. Eelistame κ (kapa).

- λ: pikaajaline keskmine efektiivne saabumiskiirus, st üksused, mis tegelikult süsteemi sisenevad, seega ilma eemaletõrjumisteta.

- W: pikaajaline keskmine aeg, mille üksus süsteemis veedab. Eelistame τ (tau).

- L = λ W on Little'i seadus. Eelistame κ = λ τ (kapa = lambda \* tau).

Little'i seadus on märkimisväärselt üldine: see kehtib olenemata saabumisjaotusest, teenindusjaotusest, teenindajate arvust või järjekorra tüübist.

Little'i seaduse eeldused:

- Kõik mõõtühikud on kooskõlas.

- Süsteem on stabiilne, st keskmine saabumiskiirus võrdub mõõteperioodi jooksul keskmise väljumiskiirusega ning üksuste arv on alguses ja lõpus ligikaudu sama.

- Varakult lahkuvad üksused, näiteks ootamisest loobumise tõttu, loendatakse järjepidevalt nii λ-s kui ka τ-s või jäetakse järjepidevalt mõlemast välja.

Näide: meeskonnal on keskmiselt κ = 20 pooleliolevat piletit ja pileteid saabub λ = 4 nädalas; püsiseisundis lõpetab meeskond samuti χ = 4 nädalas. Seega võtab keskmine pilet τ = κ / λ = 5 nädalat. Et läbimisaega poole võrra vähendada ilma kiiremini töötamata, vähendage pooleliolevat tööd poole võrra.

### Peamised tulemusnäitajad (KPI-d)

Tavaliselt jälgime järjekorras olevate tegevuste kohta paljusid asju ja soovime tulemused kokku võtta, valides meie projektide jaoks lühinimekirja kõige asjakohasematest.

Oleme ehitanud palju projekte ja usume, et kõige väärtuslikumad koondnäitajad on:

- Dτ = tarne läbimisaeg. Tootemeeskonnad võivad öelda „kontseptsioonist kliendini“ või „ideest teostuseni“.

- Dα = tarne õnnestumiskiirus. DevOpsi meeskonnad võivad öelda „juurutamise sagedus“ või „tarnime X korda päevas“.

- Dε = tarne veasuhe. Kvaliteedimeeskonnad võivad öelda „muudatuste ebaõnnestumise määr“ või „tagasivõtmiste protsent“.

- Rτ = taastamise läbimisaeg. Saidi töökindluse insenerid võivad öelda „ebaõnnestunud juurutusest taastumise aeg“ või „keskmine taastamisaeg (MTTR)“.

## Teenusemõõdikud

Kasulikud mõisted:

- **Teenustaseme indikaator (Service Level Indicator, SLI):** on mõõdik (nt 99,9% tööaeg)
- **Teenustaseme eesmärk (Service Level Objective, SLO):** selle mõõdiku sisemine siht (nt püüdlus 99,95% tööaja poole)
- **Teenustaseme leping (Service Level Agreement, SLA):** ametlik lepinguline lubadus kliendile (nt 99,9% tööaeg koos trahvidega, kui see ei täitu).

### Keskmine aeg reageerimiseni, parandamiseni, taastumiseni, lahendamiseni

MTTR tähistab nelja erinevat mõõtmist:

| Mõõdik                                            | Fookus                | Mõõdab                                       | Algus                                     | Lõpp                                       |
| ------------------------------------------------- | --------------------- | -------------------------------------------- | ----------------------------------------- | ------------------------------------------ |
| **Keskmine aeg reageerimiseni (Mean Time To Respond)** | Esmane reaktsioon     | Aeg teadvustamiseks ja tegutsemise alustamiseks | Kui intsident tuvastatakse/teatatakse     | Kui meeskond alustab sellega tööd          |
| **Keskmine aeg parandamiseni (Mean Time To Repair)**   | Tehniline parandus    | Aeg katkise üksuse parandamiseks             | Kui parandustöö algab                     | Kui üksus on parandatud                    |
| **Keskmine aeg taastumiseni (Mean Time To Recover)**   | Teenuse taastamine    | Aeg täieliku teenuse taastamiseks            | Kui intsident/katkestus algab             | Kui teenus on täielikult töökorras         |
| **Keskmine aeg lahendamiseni (Mean Time To Resolve)**  | Täielik lahendamine   | Koguaeg tuvastamisest sulgemiseni            | Kui intsident tuvastatakse                | Kui intsident on täielikult suletud        |

**Peamised erinevused:**

**Reageerimine** mõõdab meeskonna valmisolekut ja häirete tõhusust. Lühike reageerimisaeg tähendab, et teie seire ja valveprotsessid toimivad hästi, isegi kui tegelik parandus võtab kauem aega.

**Parandamine** on kitsalt tehniline – kui kaua võtab katkise asja tegelik parandamine aega, kui te sellega juba tegelete? See ei hõlma tuvastamisaega, triaaži ega kontrollimist.

**Taastumine** puudutab teenuse kättesaadavust kliendi vaatenurgast. Süsteem võib olla „parandatud“, kuid veel mitte „taastunud“, kui teil on vaja veel andmeid taastada, vahemälusid soojendada või funktsionaalsust kontrollida.

**Lahendamine** on kõige põhjalikum – see hõlmab kogu intsidendi elutsüklit alates esmasest tuvastamisest kuni intsidendijärgse kontrollimise ja sulgemiseni.

Näidisstsenaarium:

- 2.00 — algab katkestus
- 2.05 — häire käivitub, intsident tuvastatakse
- 2.15 — valvetöötaja kinnitab ja alustab tööd → reageerimisaeg: 10 min (2.05–2.15)
- 2.45 — algpõhjus on tuvastatud, parandus juurutatud → parandamisaeg: 30 min (2.15–2.45)
- 3.00 — kontrollitud, et teenus toimib kasutajatele → taastumisaeg: 60 min (2.00–3.00)
- 3.30 — intsidendipilet suletakse pärast kontrollimist → lahendamisaeg: 85 min (2.05–3.30)

Seotud mõõdikud:

- MTBF (keskmine aeg rikkeni, mean time before failure)
- MTTF (keskmine tõrketa tööaeg, mean time to failure)
- MTTA (keskmine aeg teadvustamiseni, mean time to acknowledge)

### DORA mõõdikud

DevOps Research and Assessment (DORA) mõõdikud on valdkonna standardsed peamised tulemusnäitajad (KPI-d) spetsiaalselt tarkvaratehnika DevOpsi meeskondadele. Vaadake [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA kasutab nüüd viit mõõdikut kahes rühmas.

Läbilaskevõime mõõdikud:

- **Muudatuse läbimisaeg (Change Lead Time)** – aeg funktsiooni koodi teostamiseks, testimiseks ja tarnimiseks (mõõdetuna kinnistamisest kuni juurutamiseni tootmiskeskkonnas). Määratlege täpselt, mida mõtlete alguse ja lõpu all. Näiteks mõned meeskonnad eelistavad mõõta ajast, mil arendaja alustab pileti kallal tööd, kuni ajani, mil arendaja saadab töö pideva integratsiooni protsessi; see lähenemine kipub olema tõhusam isiku tootlikkuse mõõtmiseks.

- **Juurutamise sagedus (Deployment Frequency)** – juurutuste arv antud ajavahemikus. Määratlege täpselt, mida mõtlete juurutamise all ja kuidas sagedust jälgite. Näiteks mõned meeskonnad juurutavad tootmisserverite pargile ja jälgivad kogu levitamist, samas kui teised meeskonnad juurutavad ühele kasutaja vastuvõtutesti (UAT) serverile ja jälgivad, millal projektijuht saadab kasutajatele testimiseks e-kirjaga teate.

- **Ebaõnnestunud juurutusest taastumise aeg (Failed Deployment Recovery Time)** – aeg, mis kulub taastumiseks juurutusest, mis põhjustab tootmises tõrke. Varem nimetati seda keskmiseks taastumisajaks (Mean Time to Recovery, MTTR) või teenuse taastamise ajaks (Time to Restore Service). Määratlege täpselt, mida mõtlete taastumise all. Näiteks mõned meeskonnad loevad taastumiseks täielikku lahendamist, st koguaega intsidendi tuvastamisest kuni intsidendi täieliku sulgemiseni; seda lähenemist kirjeldab paremini keskmine aeg lahendamiseni (Mean Time To Resolve).

Ebastabiilsuse mõõdikud:

- **Muudatuste ebaõnnestumise määr (Change Failure Rate)** – nende juurutuste protsent, mis põhjustavad tootmises tõrke ja vajavad kohest heastamist, näiteks tagasivõtmist või kiirparandust. Määratlege täpselt, mida mõtlete ebaõnnestumise all. Näiteks mõned meeskonnad loevad ebaõnnestumiseks ka olukorra, kui nad alustavad tööpiletiga ja mõistavad siis, et tööpiletis ei ole jätkamiseks piisavalt teavet, nii et meeskond lükkab tööpileti tagasi spetsifikatsioonimeeskonnale.

- **Juurutuste ümbertöötamise määr (Deployment Rework Rate)** – plaaniväliste juurutuste protsent, näiteks tootmisintsidendi parandamiseks. See on plaanivälised juurutused jagatud juurutuste koguarvuga. DORA lisas selle mõõdiku 2024. aastal.

Varasemates DORA aruannetes käsitleti ka **töökindlust (Reliability)** kui operatiivse tulemuslikkuse mõõdikut: laiemat, sageli kvalitatiivset hinnangut teenuse järjepidevusele, näiteks kättesaadavusele, tööajale, latentsusele, täpsusele ja teenustaseme eesmärkidele. Töökindlus aitab näidata, et suur kiirus ei tule süsteemi võimekuse arvelt.

## Järjekordade järjekord

Järjekorrateooriat on lihtne laiendada järjekordade järjekorrale, näiteks kõrgema taseme protsessile, mis sisaldab madalama taseme etappe, faase või väravaid.

### Topeltteemandi järjekordade järjekord

Näiteks vaadelge „Topeltteemandi“ (Double Diamond) innovatsiooniprotsessi mudelit, mis määratleb neli etappi:

1. Avastamine: mõistke probleemi, selle asemel et lihtsalt eeldada, mis see on.
2. Määratlemine: avastamisfaasi teadmiste põhjal määratlege väljakutse.
3. Arendamine: andke selgelt määratletud probleemile erinevaid vastuseid.
4. Tarnimine: testige erinevaid lahendusi väikeses mahus ja seejärel täiustage neid.

Järjekorrateooria saab seda modelleerida kui ühte protsessijärjekorda, mis sisaldab nelja etapijärjekorda:

- Protsessi saabumiskiirus on 1. etapi saabumiskiirus.
- Protsessi õnnestumiskiirus on 4. etapi õnnestumiskiirus.
- Protsessi vigade arv on etappide vigade arvude summa.
- Protsessi vahelejätmiste arv on etappide vahelejätmiste arvude summa.
- Protsessi läbimisaeg on etappide läbimisaegade summa.
- Protsessi maksimaalne läbilaskevõime on aeglaseima etapi ehk kitsaskoha läbilaskevõime.

### Lehtri järjekordade järjekord

Oma praktilises töös kasutame sageli sõna „lehter“, et ligikaudselt kirjeldada järjekordade järjekorda, mis kipub igas etapis üksuste arvu vähendama:

- Värbamisjärjekord, mis kasutab pöördumise etappi, intervjuuetappi ja pakkumise etappi. Seda tüüpi järjekorra puhul püüame maksimeerida 1. etapi saabumiskiirust, st suurendada oma pöördumisi, näiteks kampaaniate abil.

- Ostujärjekord, mis kasutab kliendi otsingu etappi, ostukorvi etappi ja makse etappi. Seda tüüpi järjekorra puhul püüame minimeerida 2. etapi vahelejätmiskiirust, st vähendada ostukorvi hülgamist, näiteks meeldetuletuste abil.

- Programmeerimisjärjekord, mis kasutab integratsiooni etappi, kasutaja vastuvõtu etappi ja tootmisse levitamise etappi. Seda tüüpi järjekorra puhul püüame minimeerida tootmisse levitamise etapi veakiirust, näiteks kanaaritelemeetria abil.

## Tähelepanekud

Seitse tähelepanekut järjekorrateooria kohta Bob Wescottilt, kes on raamatu „The Every Computer Performance Book“ autor (vaadake ka [Kottke kokkuvõtet](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Mida aeglasem on teeninduskeskus, seda madalamat maksimaalset kasutusastet tuleks tippkoormuse jaoks planeerida.

2. Millegi viimase 15% kasutamine on väga raske.

3. Mida lähemal olete piirile, seda kõrgem on eksimise hind.

4. Reageerimisaja kasvu piirab nende arv, kes saavad oodata.

5. Pidage meeles, et see on keskmine, mitte maksimum.

6. Mitme teeninduskeskuse puhul esineb inimlik eitamisefekt.

7. Näidake väikesi parandusi nende parimas valguses.

## Järelsõna

### Vaadake ka

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Wikipedia valdkonnad, kus kasutame järjekordi paljudes projektides:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

John D. Cooki sissejuhatused:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Põhjalikumad sissejuhatused:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Valemid:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Tänusõnad

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). See raamat on suurepärane kõrgetasemelise DevOpsi jaoks ja on otseselt mõjutanud meie KPI-de valikut. Sellel lehel olevad KPI-d on kooskõlas raamatu soovitustega.

## Projekti andmed

- Pakett: queue-theory
- Versioon: 3.0.0
- Loodud: 2019-01-25T04:17:56Z
- Uuendatud: 2026-11-23T15:33:48Z
- Litsents: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0` või võtke meiega ühendust muude tingimuste osas (vaadake [LICENSE.md](LICENSE.md))
- Kontakt: Joel Parker Henderson <joel@joelparkerhenderson.com>
