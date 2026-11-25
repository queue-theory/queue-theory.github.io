# Biðraðafræði

Biðraðafræði er stærðfræðileg rannsókn á biðröðum. Við notum biðraðafræði í
hugbúnaðarþróun okkar, til dæmis til að greina og bæta starfshætti okkar og
ferla, svo sem viðbragðsflýti þjónustuversins, kanbanskipulag í
verkefnastjórnun, skilaboðabiðraðir í samskiptum milli ferla og samfelldar
útgáfuleiðslur í DevOps.

Efnisyfirlit:

- [Inngangur](#inngangur)
  - [Viðbragðsflýtir þjónustuvers](#viðbragðsflýtir-þjónustuvers)
  - [Kanbanskipulag í verkefnastjórnun](#kanbanskipulag-í-verkefnastjórnun)
  - [Skilaboðabiðraðir í samskiptum milli ferla](#skilaboðabiðraðir-í-samskiptum-milli-ferla)
  - [Samfelldar útgáfuleiðslur í DevOps](#samfelldar-útgáfuleiðslur-í-devops)
- [Hugtök um biðraðir](#hugtök-um-biðraðir)
  - [Tegundir biðraða og þjónustu](#tegundir-biðraða-og-þjónustu)
- [Táknmál biðraðafræðinnar](#táknmál-biðraðafræðinnar)
  - [Fjöldi](#fjöldi)
  - [Komutíðni, þjónustutíðni, brottfaratíðni](#komutíðni-þjónustutíðni-brottfaratíðni)
  - [Nýtingarhlutfall, öðru nafni álagsstyrkur](#nýtingarhlutfall-öðru-nafni-álagsstyrkur)
  - [Gegnumstreymistíðni: brottfaratíðni, lokatíðni, árangurstíðni, villutíðni, slepptíðni](#gegnumstreymistíðni-brottfaratíðni-lokatíðni-árangurstíðni-villutíðni-slepptíðni)
  - [Margræðni hugtaksins þjónustutíðni](#margræðni-hugtaksins-þjónustutíðni)
  - [Slepptíðni](#slepptíðni)
  - [Villuhlutfall](#villuhlutfall)
  - [Heildartími, biðtími, vinnutími, skreftími](#heildartími-biðtími-vinnutími-skreftími)
  - [Táknmál Kendalls](#táknmál-kendalls)
- [Stærðfræði biðraða](#stærðfræði-biðraða)
  - [Nýtingarferillinn](#nýtingarferillinn)
  - [Formúla Kingmans](#formúla-kingmans)
  - [Samnýting og Erlang C](#samnýting-og-erlang-c)
- [Rakning virkni](#rakning-virkni)
  - [Dæmi um virkni](#dæmi-um-virkni)
  - [Lögmál Littles](#lögmál-littles)
  - [Lykilmælikvarðar (KPI)](#lykilmælikvarðar-kpi)
- [Þjónustumælikvarðar](#þjónustumælikvarðar)
  - [Meðaltími til viðbragðs, viðgerðar, endurheimtar, lausnar](#meðaltími-til-viðbragðs-viðgerðar-endurheimtar-lausnar)
  - [DORA-mælikvarðar](#dora-mælikvarðar)
- [Biðröð biðraða](#biðröð-biðraða)
  - [Biðröð biðraða í Double Diamond](#biðröð-biðraða-í-double-diamond)
  - [Trektarbiðröð biðraða](#trektarbiðröð-biðraða)
- [Innsýn](#innsýn)
- [Eftirmáli](#eftirmáli)
  - [Sjá einnig](#sjá-einnig)
  - [Þakkir](#þakkir)
- [Skráning](#skráning)

## Inngangur

Við notum biðraðafræði í verkefnum okkar í margvíslegum tilgangi:

- Viðbragðsflýtir þjónustuvers

- Kanbanskipulag í verkefnastjórnun

- Skilaboðabiðraðir í samskiptum milli ferla

- Samfelldar útgáfuleiðslur í DevOps

### Viðbragðsflýtir þjónustuvers

Við viljum til dæmis greina hvernig viðskiptavinir óska eftir aðstoð við sölu og þjónustu, og hversu hratt við bregðumst við.

Nokkrar viðeigandi vörur eru t.d. [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Kanbanskipulag í verkefnastjórnun

Við viljum til dæmis fylgjast með heildartíma og framvindutíma á meðan hugmynd að nýjum eiginleika þróast frá hönnun til afhendingar.

Nokkrar viðeigandi vörur eru t.d. [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Skilaboðabiðraðir í samskiptum milli ferla

Við viljum til dæmis hámarka gegnumstreymi og lágmarka álag þegar eitt forrit sendir beiðnir til annars forrits.

Nokkrar viðeigandi vörur eru t.d. [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Samfelldar útgáfuleiðslur í DevOps

Við viljum til dæmis tryggja að samþættingarþjónninn okkar hafi næga afkastagetu til að prófa hugbúnaðinn okkar og gefa hann síðan út.

Nokkrar viðeigandi vörur eru t.d. [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Hugtök um biðraðir

Hugtök um biðraðir eru umfangsmikið efni. Í þessum hluta eru nokkur af þeim hugtökum sem við notum oftast. Í dæmunum notum við hugmyndina um viðskiptavin sem bíður í röð.

### Tegundir biðraða og þjónustu

Tegundir biðraða og þjónustu lýsa því hvernig biðröðin velur hvaða atriði eru afgreidd.

- First In First Out (FIFO), fyrst inn, fyrst út: þjóna þeim viðskiptavini sem hefur beðið lengst.

- Last In First Out (LIFO), síðast inn, fyrst út: þjóna þeim viðskiptavini sem hefur beðið skemmst.

- Forgangur: þjóna viðskiptavinum eftir forgangsstigi þeirra; stigin geta byggst á stöðu, brýnd, greiðslu o.s.frv.

- Shortest Job First (SJF), stysta verkið fyrst: þjóna þeim viðskiptavini sem þarf minnsta þjónustu.

- Longest Job First (LJF), lengsta verkið fyrst: þjóna þeim viðskiptavini sem þarf mesta þjónustu.

- Shortest Remaining Processing Time (SRPT), stysti eftirstandandi vinnslutími: eins og SJF, en nýkomið stutt verk getur ýtt lengra verki, sem þegar er í þjónustu, til hliðar.

- Round Robin, hringekja: þjóna hverjum viðskiptavini í stutta tímasneið, færa sig síðan til næsta viðskiptavinar og endurtaka.

- Time Sharing, öðru nafni Processor Sharing (PS), tímadeiling: þjóna öllum samtímis; þjónustugetunni er skipt jafnt á milli allra sem bíða.

SJF og SRPT lágmarka meðalbiðina, en þau geta svelt löng verk endalaust, svo raunveruleg kerfi bæta oft við öldrun eða forgangsþökum.

## Táknmál biðraðafræðinnar

Biðraðafræði notar táknmál með grískum bókstöfum.

Teymin okkar nota hluta af algengasta táknmálinu; við bætum einnig við eigin táknum sem nýtast okkur í hugbúnaðarverkefnum.

Okkar táknmál og merking hvers tákns:

| Okkar táknmál | Merking |
| ------------- | ------- |
| κ (kappa) | fjöldi atriða í kerfinu, þau sem bíða auk þeirra sem unnið er að |
| λ (lambda) | komutíðni atriða sem koma inn í kerfið |
| χ (chi) | brottfaratíðni atriða sem fara út úr kerfinu |
| μ (mu) | þjónustutíðni, öðru nafni afkastageta: hve hratt einn þjónn vinnur meðan hann er upptekinn |
| ρ (rho) | nýting: hlutfall tímans sem þjónarnir eru uppteknir, λ / (c μ) |
| α (alfa) | árangurstíðni: mæld afköst sem reynast rétt |
| β (beta) | villutíðni: mæld afköst sem reynast röng |
| δ (delta) | lokatíðni: árangur + villur, atriði sem fengu þjónustu, hvort sem niðurstaðan var rétt eða röng |
| σ (sigma) | slepptíðni: atriði sem komu inn og fóru óafgreidd |
| ε (epsilon) | villuhlutfall: β / (α + β) = β / δ |
| τ (tá) | tími í kerfinu, öðru nafni heildartími |
| ω (ómega) | biðtími, öðru nafni tími í biðröðinni |
| φ (fí) | vinnutími, öðru nafni tími í örgjörvanum, öðru nafni þjónustutími |
| θ (þeta) | skreftími milli loka; meðalskreftími ≈ 1 / χ í jafnvægisástandi |

### Fjöldi

Við teljum atriði oft og notum þetta tákn:

- κ (kappa): fjöldi atriða í kerfinu, þ.e. atriði sem bíða auk atriða sem unnið er að.

![Skýringarmynd: κ atriði eru í kerfinu](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Dæmi:

- κ = 10 merkir nákvæmlega 10

- κ ≈ 10 merkir um það bil 10

- κ < 10 merkir færri en 10

- κ > 10 merkir fleiri en 10

- κ ≪ 10 merkir miklu færri en 10

- κ ≫ 10 merkir miklu fleiri en 10

Fjöldinn κ (kappa) er skyndimynd á einu augnabliki.

Meðalfjöldinn κ̅ (kappa með striki) er útreikningur sem tekur meðaltal mælinga yfir tiltekið tímabil, til dæmis með því að mæla á klukkustundar fresti í tvær vikur.

### Komutíðni, þjónustutíðni, brottfaratíðni

Mikilvægasta táknmálið:

- λ (lambda): komutíðni. Hún mælir hversu hratt atriði koma inn í kerfið.

- μ (mu): þjónustutíðni, öðru nafni afkastageta. Hún mælir hve hratt einn þjónn getur afgreitt atriði meðan hann er upptekinn.

- χ (chi): brottfaratíðni. Hún mælir hversu hratt atriði fara út úr kerfinu.

![Skýringarmynd: atriði koma með tíðninni λ, fá þjónustu með tíðninni μ og fara með tíðninni χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-mu-service-chi-departure.svg)

Dæmi um almenn atriði fyrir hefðbundnar biðraðir með einum þjóni:

- λ < μ merkir að komutíðnin er lægri en þjónustutíðnin; biðröðin er stöðug, þ.e. hún sveiflast í kringum endanlega meðalstærð.

- λ = μ merkir að komutíðnin er jöfn þjónustutíðninni; við minnstu slembni rekur biðröðin af leið og vex takmarkalaust.

- λ > μ merkir að komutíðnin er hærri en þjónustutíðnin; biðröðin vex jafnt og þétt, um það bil λ − μ atriði á hverja tímaeiningu.

Sú innsæja hugmynd að „λ = μ haldi biðröðinni jafnstórri“ á aðeins við þegar komur og þjónusta eru fullkomlega reglulegar, eins og taktmælir. Raunverulegar komur eru gusukenndar, svo aðgerðalaus tími sem tapast í lægð verður aldrei endurheimtur, og biðröðin vex í næstu gusu.

Athugið að sumir sem stunda biðraðafræði nota „þjónustutíðni“ um mæld afköst fremur en afkastagetu; sjá [margræðni hugtaksins þjónustutíðni](#margræðni-hugtaksins-þjónustutíðni).

### Nýtingarhlutfall, öðru nafni álagsstyrkur

Mikilvægasta táknið sem dregur biðröð saman:

- ρ (rho): nýtingarhlutfall, þ.e. hlutfall tímans sem þjónarnir eru uppteknir = λ / μ fyrir einn þjón, eða λ / (c μ) fyrir c þjóna

Dæmi:

- ρ < 1 merkir að þjónarnir hafa umframgetu; biðröðin er stöðug. Því nær 1 sem ρ kemst, þeim mun lengri verður biðin; sjá [nýtingarferilinn](#nýtingarferillinn).

- ρ = 1 merkir að þjónarnir eru uppteknir allan tímann; biðröðin er óstöðug og vex takmarkalaust.

- ρ > 1 merkir að komur eru umfram afkastagetu; biðröðin stækkar.

### Gegnumstreymistíðni: brottfaratíðni, lokatíðni, árangurstíðni, villutíðni, slepptíðni

Gegnumstreymistíðni mælir mæld afköst, þ.e. atriði sem fara raunverulega úr biðröðinni. Hún skiptist í fimm meginflokka:

- χ (chi): brottfaratíðni. Hún mælir hversu hratt atriði fara út úr kerfinu.

- α (alfa): árangurstíðni. Hún mælir hve mörg atriði á tímabil reynast rétt, t.d. rétt, fullunnin, samþykkt.

- β (beta): villutíðni. Hún mælir hve mörg atriði á tímabil reynast röng, t.d. röng, ófullgerð, hafnað.

- δ (delta): lokatíðni. Hún mælir hve mörg atriði á tímabil fá þjónustu.

- σ (sigma): slepptíðni. Hún mælir hve mörg atriði á tímabil koma inn í biðröðina og fara síðan án þess að fá þjónustu, t.d. brotthvörf, uppgjafir.

![Skýringarmynd: brottfaratíðni χ = lokatíðni δ + slepptíðni σ; lokatíðni δ = árangurstíðni α + villutíðni β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Lokatíðni = árangurstíðni + villutíðni:

- δ = α + β (borið fram: delta jafngildir alfa plús beta)

Heildartíðni = lokatíðni + slepptíðni:

- χ = δ + σ (borið fram: chi jafngildir delta plús sigma)

Heildartíðni = árangurstíðni + villutíðni + slepptíðni:

- χ = α + β + σ (borið fram: chi jafngildir alfa plús beta plús sigma)

Hvert atriði sem talið er í χ kom inn í kerfið, svo í jafnvægisástandi er heildartíðnin jöfn komutíðninni: χ ≈ λ. Þess vegna mælir gegnumstreymistíðni afköst, ekki afkastagetu.

### Margræðni hugtaksins þjónustutíðni

Eftir samhengi og iðkanda getur hugtakið „þjónustutíðni“ merkt annaðhvort
„heildartíðni“ eða „árangurstíðni“.

Þetta á sér sögulegar rætur og getur valdið ruglingi og mistökum, einkum í
samhengi og hjá iðkendum biðraðafræði þar sem mikil þörf er á að fylgjast með
villum og sleppingum.

- Fræðilegt sjónarhorn: Þjónustutíðnin er hreinn mælikvarði á hraða (t.d. verk á sekúndu), óháð því hvort verkin eru árangur, villur, sleppingar o.s.frv.

- Vinnslusjónarhorn: Þjónustutíðnin nær yfir allt sem biðröðin ver tíma í að vinna, þ.e. árangur eða villur, en ekki sleppingar.

- Tæknilegt sjónarhorn: Í hagnýtum greinum eins og hugbúnaðarverkfræði mælir þjónustutíðnin aðeins árangur, en villutíðnin mælir villur og slepptíðnin mælir slepptar færslur.

Þess vegna höldum við μ fyrir afkastagetu og bætum mældri afkastatíðni við hlið hennar í stað þess að skipta henni út:

- μ (mu): þjónustutíðni, öðru nafni afkastageta. Hún mælir hve hratt einn þjónn getur afgreitt atriði meðan hann er upptekinn.

- χ (chi): brottfaratíðni. Hún mælir hversu hratt atriði fara út úr kerfinu.

- α (alfa): árangurstíðni. Hún mælir hve mörg atriði á tímabil reynast rétt, t.d. rétt, fullunnin, samþykkt.

Hvers vegna ekki að skipta μ út fyrir χ eða α? Í stöðugri biðröð fer hvert atriði sem kemur inn að lokum út, svo χ ≈ λ. Þá er λ / χ ≈ 1 óháð álagi, sem segir ekkert um hve uppteknir þjónarnir eru. Nýting krefst afkastagetu: ρ = λ / (c μ), sem jafngildir hlutfalli tímans sem þjónarnir eru uppteknir.

### Slepptíðni

Nánar um slepptíðni:

- σ (sigma): slepptíðni. Hún mælir hve mörg atriði koma inn í biðröðina og fara síðan án þess að vera unnin.

Slepping á sér stað þegar atriði kemur inn í biðröðina og fer síðan án nokkurrar teljandi vinnslu:

- Brotthvarf (abandoning): þegar viðskiptavinur fer í biðröð og yfirgefur hana síðan, af hvaða ástæðu sem er.

- Uppgjöf (reneging): þegar viðskiptavinur sem hefur þegar beðið ákveður að fara vegna þess að hann hefur sóað of miklum tíma.

Tvær skyldar hegðanir eru ekki sleppingar:

- Frávísun við komu (balking): þegar viðskiptavinur ákveður að fara ekki í biðröðina vegna þess að biðtíminn virðist ætla að verða of langur. Atriði sem hættir við komu kemur aldrei inn í kerfið, svo það er utan marka kerfisins: það er ekki talið í λ, χ eða σ. Ef slíkar frávísanir skipta máli, til dæmis töpuð sala, skal telja þær sérstaklega sem komur sem var vísað frá.

- Raðaskipti (jockeying): þegar viðskiptavinur skiptir á milli samhliða biðraða, til dæmis afgreiðslukassa, til að reyna að fá styttri bið.

### Villuhlutfall

Mikilvægasta táknið sem dregur saman árangur biðraðar:

- ε (epsilon): villuhlutfall = fjöldi villna / (fjöldi árangurs + fjöldi villna) = β / (α + β) = β / δ

Sleppingar eru undanskildar, því atriði sem var sleppt fékk aldrei þjónustu, svo það var hvorki rétt né rangt. Fylgist með sleppingum sérstaklega með σ.

![Skýringarmynd: villuhlutfallið ε er villutíðnin β deilt með lokatíðninni δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Dæmi:

- ε = 0 merkir engar villur.

- ε = 0,1 merkir að 10 % þjónustu er með villu.

- ε = 1 merkir að öll þjónusta er með villu.

### Heildartími, biðtími, vinnutími, skreftími

Við fylgjumst með fjórum tímum:

- τ (tá): tími í kerfinu, öðru nafni heildartími, öðru nafni frá upphafi til enda.

- θ (þeta): skreftími = frá einum lokum til næstu loka; einn skreftími er eitt bil og meðalskreftíminn er meðalbilið

- ω (ómega): biðtími = tími sem fer ekki í raunverulega vinnu, öðru nafni bið

- φ (fí): vinnutími = tími sem fer í raunverulega vinnu, öðru nafni vinnslutími

![Skýringarmynd: heildartími τ, biðtími ω, vinnutími φ, skreftími θ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time-theta-step-time.svg)

Dæmi:

- τ = 5 s merkir að atriði kemur inn í kerfið og fer úr því 5 sekúndum síðar.

- ω = 4 s merkir að atriði bíður í biðröðinni í 4 sekúndur og síðan hefst vinnan.

- φ = 1 s merkir að atriði tekur 1 sekúndu af vinnu og er þá lokið.

- θ = 1 s merkir að 1 sekúnda líður frá einum lokum til næstu loka.

Tengsl:

- τ = ω + φ: heildartími er biðtími auk vinnutíma. Í dæmunum er 5 s = 4 s + 1 s.

- meðal-θ ≈ 1 / χ: í jafnvægisástandi er meðalskreftíminn andhverfa heildartíðninnar. Stakt bil segir lítið um tíðnina; meðaltal margra bila segir meira. Í dæmunum, ef meðalskreftíminn er 1 s, þá er χ ≈ 1 atriði á sekúndu.

### Táknmál Kendalls

Táknmál Kendalls er annað táknmál biðraðafræðinnar, ritað A/S/c/K/N/D:

- A: komuferlið, þ.e. dreifing tímans milli koma.

- S: þjónustuferlið, þ.e. dreifing þjónustutíma.

- c: fjöldi þjóna.

- K: afkastagetan, þ.e. hámarksfjöldi atriða sem leyfður er í kerfinu, sem bíða eða eru í þjónustu, áður en nýjum komum er vísað frá.

- N: þýðið, þ.e. fjöldi mögulegra viðskiptavina.

- D: reglan, þ.e. tegund biðraðarinnar, svo sem FIFO eða LIFO.

Algengir bókstafir fyrir A og S:

- M: Markovískt, öðru nafni minnislaust, þ.e. veldisvísisdreifðir tímar, sem leiðir af Poisson-komum.

- D: Ákvarðað (deterministic), þ.e. fastir tímar.

- G: Almennt (general), þ.e. hvaða dreifing sem er.

Þegar þremur síðustu er sleppt eru sjálfgefin gildi K = ∞, N = ∞, D = FIFO. Til dæmis merkir „M/M/1“ Poisson-komur, veldisvísisdreifða þjónustutíma, einn þjón, ótakmarkaða afkastagetu, ótakmarkað þýði og fyrst inn, fyrst út.

Einnig:

- n: fjöldi atriða í kerfinu.

## Stærðfræði biðraða

Í stærðfræðihlutunum eru notuð tákn kennslubóka, svo að hægt sé að bera þau saman við aðrar heimildir: S er meðalþjónustutíminn, sem er okkar φ, og μ = 1 / S er afkastageta eins þjóns.

### Nýtingarferillinn

Mikilvægasta einstaka niðurstaða biðraðafræðinnar: þegar nýting nálgast 100 % vex biðtíminn takmarkalaust, og hann vex hraðast undir lokin.

Fyrir M/M/1-biðröð, þar sem S er meðalþjónustutíminn:

- Heildartími τ = S / (1 − ρ)

- Biðtími ω = S × ρ / (1 − ρ)

| Nýting ρ | Heildartími τ | Biðtími ω |
| -------- | ------------- | --------- |
| 50 %     | 2 × S         | 1 × S     |
| 70 %     | 3,3 × S       | 2,3 × S   |
| 80 %     | 5 × S         | 4 × S     |
| 90 %     | 10 × S        | 9 × S     |
| 95 %     | 20 × S        | 19 × S    |
| 99 %     | 100 × S       | 99 × S    |

Dæmi: kóðarýni tekur 1 klukkustund af vinnu. Ef rýnendur eru 80 % uppteknir tekur rýni um 5 klukkustundir frá beiðni til loka. Ef rýnendur eru 95 % uppteknir tekur hún um 20 klukkustundir, jafnvel þótt rýnendurnir séu aðeins 15 prósentustigum uppteknari.

Þess vegna er „höldum öllum 100 % uppteknum“ uppskrift að löngum heildartíma, og þess vegna vara [innsýnin](#innsýn) hér að neðan við því að skipuleggja fyrir mikla nýtingu.

### Formúla Kingmans

Formúla Kingmans, öðru nafni VUT-jafnan, nálgar biðtíma í biðröð með einum þjóni fyrir hvaða dreifingu koma og þjónustu sem er (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Þættirnir þrír eru:

- U: nýtingarþáttur ρ / (1 − ρ), sem er nýtingarferillinn hér að ofan.

- V: breytileikaþáttur (ca² + cs²) / 2, þar sem ca er breytistuðull tímans milli koma og cs er breytistuðull þjónustutímanna. Breytistuðullinn er staðalfrávikið deilt með meðaltalinu.

- T: tímaþáttur S, meðalþjónustutíminn.

Dæmi: fyrir M/M/1-biðröð er ca = cs = 1, svo V = 1, og formúlan gefur sama biðtíma og nýtingarferillinn. Ef verkatriði eru gerð einsleitari, til dæmis með því að skipta stórum verkbeiðnum svo að cs lækki úr 1 niður undir 0, þá lækkar V niður í um 0,5 og biðtíminn helmingast nokkurn veginn við sömu nýtingu.

Formúla Kingmans sýnir þrjár leiðir til að stytta biðtíma:

- Minnka nýtingu, til dæmis með því að bæta við afkastagetu eða takmarka verk í vinnslu.

- Minnka breytileika, til dæmis með minni lotum, einsleitari verkatriðum eða jafnari komum.

- Stytta þjónustutíma, til dæmis með sjálfvirkni.

### Samnýting og Erlang C

Ein sameiginleg biðröð sem fæðir marga þjóna er betri en aðskildar biðraðir sem hver fæðir einn þjón. Þess vegna nota bankar eina röð sem fæðir marga gjaldkera, og þess vegna er sameiginleg þjónustubiðröð betri en biðraðir fyrir hvern starfsmann.

Dæmi: tveir þjónar taka hvor 1 klukkustund á hvert atriði, og atriði koma inn með samtals 1,6 atriðum á klukkustund, svo nýtingin er 80 %.

- Aðskildar biðraðir: hvor þjónn er M/M/1-biðröð með 0,8 komum á klukkustund, svo heildartíminn er 1 / (1 − 0,8) = 5 klukkustundir.

- Sameiginleg biðröð: báðir þjónar deila M/M/2-biðröð, svo heildartíminn er um 2,8 klukkustundir, sem er um 44 % minna, með sama fólki og sömu vinnu.

Erlang C-formúlan reiknar líkurnar á því að atriði sem kemur þurfi að bíða í M/M/c-biðröð, með boðið álag a = λ / μ og nýtingu ρ = a / c:

- P(bið) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Biðtími ω = P(bið) / (c μ − λ)

Þjónustuteymi nota Erlang C til að ákveða hve marga starfsmenn þarf á vakt til að ná markmiði, svo sem „80 % símtala svarað innan 20 sekúndna“.

Samnýting hefur sín takmörk: hún virkar best þegar hvaða þjónn sem er getur afgreitt hvaða atriði sem er. Ef atriði krefjast sérfræðinga gæti sameiginleg biðröð þurft reglur um beiningu.

## Rakning virkni

### Dæmi um virkni

Segjum að við höfum eitthvað sem við viljum fylgjast með og köllum það almennu nafni, til dæmis „Virkni“ (Activity), skammstafað „A“.

Við getum notað táknmál biðraða á skilvirkan hátt til að lýsa virkninni og hvernig hún fer í gegnum biðröð.

Dæmi:

- Aκ: fjöldi virkni: hve mörg atriði eru í biðröðinni.

- Aλ: komutíðni virkni: hve mörg atriði koma inn á hverja tímaeiningu.

- Aχ: heildartíðni virkni: hve mörg atriði fara úr biðröðinni á hverja tímaeiningu.

- Aα: árangurstíðni virkni: hve mörg atriði eru rétt á hverja tímaeiningu.

- Aβ: villutíðni virkni: hve mörg atriði eru röng á hverja tímaeiningu.

- Aμ: þjónustutíðni virkni, öðru nafni afkastageta: hve mörgum atriðum einn þjónn getur lokið á hverja tímaeiningu meðan hann er upptekinn.

- Aσ: slepptíðni virkni: hve mörg atriði eru yfirgefin á hverja tímaeiningu.

- Aρ: nýtingarhlutfall virkni: hlutfall tiltæks tíma sem þjónarnir eru uppteknir, þ.e. upptekinn tími ÷ tiltækur tími, eða λ / (c μ).

- Aε: villuhlutfall virkni: hve mörgum atriðum er lokið með villum miðað við heildina.

- Aτ: heildartími virkni: hve langur tími líður frá beiðni til loka.

- Aω: biðtími virkni: hve langur tími líður frá beiðni til upphafs.

- Aφ: vinnutími virkni: hve langur tími líður frá upphafi til loka.

- Aθ: skreftími virkni: hve langur tími líður frá einum lokum til næstu loka.

### Lögmál Littles

Lögmál Littles er setning eftir John Little sem segir: meðalfjöldi L viðskiptavina til langs tíma í kyrrstæðu kerfi er jafn meðalvirkri komutíðni λ til langs tíma margfaldaðri með meðaltímanum W sem viðskiptavinur ver í kerfinu.

Dæmi um táknmál:

- L: meðalfjöldi viðskiptavina í kerfinu til langs tíma. Við kjósum κ (kappa).

- λ: meðalvirk komutíðni til langs tíma, þ.e. atriði sem koma raunverulega inn í kerfið, að frátöldum frávísunum við komu.

- W: meðaltími sem atriði er í kerfinu til langs tíma. Við kjósum τ (tá).

- L = λ W er lögmál Littles. Við kjósum κ = λ τ (kappa = lambda \* tá).

Lögmál Littles er einstaklega almennt: það gildir óháð dreifingu koma, dreifingu þjónustu, fjölda þjóna eða tegund biðraðar.

Forsendur lögmáls Littles:

- Allar mælieiningar eru samræmdar.

- Kerfið er stöðugt, þ.e. meðalkomutíðnin er jöfn meðalbrottfarartíðninni á mælitímabilinu, og fjöldi atriða er nokkurn veginn sá sami í upphafi og við lok.

- Atriði sem fara snemma, til dæmis vegna uppgjafar, eru annaðhvort talin á samræmdan hátt bæði í λ og τ, eða undanskilin á samræmdan hátt úr hvoru tveggja.

Dæmi: teymi er að meðaltali með κ = 20 verkbeiðnir í vinnslu, og verkbeiðnir berast með λ = 4 á viku; í jafnvægisástandi lýkur teymið einnig χ = 4 á viku. Því tekur meðalverkbeiðni τ = κ / λ = 5 vikur. Til að helminga heildartímann án þess að vinna hraðar skal helminga verk í vinnslu.

### Lykilmælikvarðar (KPI)

Við fylgjumst yfirleitt með mörgu varðandi virknina í biðröðinni og viljum draga niðurstöðurnar saman með því að velja stuttan lista yfir þá mælikvarða sem eiga best við verkefni okkar.

Við höfum unnið mörg verkefni og teljum að verðmætustu samantektarmælikvarðarnir séu:

- Dτ = heildartími afhendingar. Vöruteymi gætu sagt „frá hugmynd til viðskiptavinar“ eða „frá hugmynd til innleiðingar“.

- Dα = árangurstíðni afhendingar. DevOps-teymi gætu sagt „útgáfutíðni“ eða „við gefum út X sinnum á dag“.

- Dε = villuhlutfall afhendingar. Gæðateymi gætu sagt „hlutfall misheppnaðra breytinga“ eða „hlutfall afturkallana“.

- Rτ = heildartími endurheimtar. Áreiðanleikaverkfræðingar gætu sagt „endurheimtartími eftir misheppnaða útgáfu“ eða „meðaltími til endurheimtar (MTTR)“.

## Þjónustumælikvarðar

Gagnleg hugtök:

- **Service Level Indicator (SLI):** er mælikvarðinn (t.d. 99,9 % uppitími)
- **Service Level Objective (SLO):** innra markmiðið fyrir þann mælikvarða (t.d. stefnt að 99,95 % uppitíma)
- **Service Level Agreement (SLA):** formlega, samningsbundna loforðið til viðskiptavinarins (t.d. 99,9 % uppitími með viðurlögum ef það næst ekki).

### Meðaltími til viðbragðs, viðgerðar, endurheimtar, lausnar

MTTR stendur fyrir fjórar ólíkar mælingar:

| Mælikvarði                       | Áhersla                  | Mælir                                      | Upphaf                                 | Lok                                      |
| -------------------------------- | ------------------------ | ------------------------------------------ | -------------------------------------- | ---------------------------------------- |
| **Meðaltími til viðbragðs**      | Fyrstu viðbrögð          | Tími til að staðfesta og hefja aðgerðir    | Þegar atvik greinist/er tilkynnt       | Þegar teymið hefst handa                 |
| **Meðaltími til viðgerðar**      | Tæknileg lagfæring       | Tími til að laga það sem bilaði            | Þegar viðgerðarvinna hefst             | Þegar búið er að laga                    |
| **Meðaltími til endurheimtar**   | Endurreisn þjónustu      | Tími til að endurreisa fulla þjónustu      | Þegar atvik/rof hefst                  | Þegar þjónustan er að fullu starfhæf     |
| **Meðaltími til lausnar**        | Fullnaðarlausn           | Heildartími frá greiningu til lokunar      | Þegar atvik greinist                   | Þegar atviki er að fullu lokað           |

**Helsti munurinn:**

**Viðbragð** mælir viðbúnað teymisins og árangur viðvarana. Stuttur viðbragðstími merkir að vöktun og bakvaktarferli virka vel, jafnvel þótt sjálf lagfæringin taki lengri tíma.

**Viðgerð** er þröngt tæknileg — hve langan tíma tekur í raun að laga það sem bilaði þegar vinna við það er hafin? Hún nær ekki yfir tíma til greiningar, forgangsröðunar og sannprófunar.

**Endurheimt** snýst um aðgengi þjónustunnar frá sjónarhóli viðskiptavinarins. Kerfið gæti verið „viðgert“ en ekki enn „endurheimt“ ef enn þarf að endurheimta gögn, hita upp skyndiminni eða sannprófa virkni.

**Lausn** er víðtækust — hún nær yfir allan lífsferil atviksins, frá fyrstu greiningu til sannprófunar eftir atvik og lokunar.

Dæmi:

- Kl. 2:00 — Rof hefst
- Kl. 2:05 — Viðvörun fer af stað, atvikið greinist
- Kl. 2:15 — Bakvakt staðfestir og hefst handa → Viðbragðstími: 10 mín. (2:05 til 2:15)
- Kl. 2:45 — Rótarorsök fundin, lagfæring gefin út → Viðgerðartími: 30 mín. (2:15 til 2:45)
- Kl. 3:00 — Staðfest að þjónustan virki fyrir notendur → Endurheimtartími: 60 mín. (2:00 til 3:00)
- Kl. 3:30 — Atviksbeiðni lokað eftir sannprófun → Lausnartími: 85 mín. (2:05 til 3:30)

Skyldir mælikvarðar:

- MTBF (mean time before failure, meðaltími fram að bilun)
- MTTF (mean time to failure, meðaltími til bilunar)
- MTTA (mean time to acknowledge, meðaltími til staðfestingar)

### DORA-mælikvarðar

DevOps Research and Assessment (DORA) mælikvarðar eru staðlaðir lykilmælikvarðar (KPI) í greininni, sérstaklega ætlaðir DevOps-teymum í hugbúnaðarverkfræði. Sjá [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA notar nú fimm mælikvarða í tveimur flokkum.

Mælikvarðar á gegnumstreymi:

- **Heildartími breytinga** (Change Lead Time) – Tími til að útfæra, prófa og afhenda kóða fyrir eiginleika (mældur frá commit til útgáfu í raunumhverfi). Skilgreinið nákvæmlega hvað er átt við með upphafi og lokum. Sum teymi kjósa til dæmis að mæla frá því að forritari hefur vinnu við verkbeiðni þar til forritarinn sendir vinnuna í ferli samfelldrar samþættingar; þessi nálgun hentar oft betur til að mæla afköst einstaklinga.

- **Útgáfutíðni** (Deployment Frequency) – Fjöldi útgáfna á tilteknu tímabili. Skilgreinið nákvæmlega hvað er átt við með útgáfu og hvernig fylgst er með tíðninni. Sum teymi gefa til dæmis út á flota netþjóna í raunumhverfi og fylgjast með allri útrúllunni, en önnur teymi gefa út á einn netþjón fyrir notendaprófanir (UAT) og skrá hvenær verkefnastjórinn sendir notendum tölvupóst um að hefja prófanir.

- **Endurheimtartími eftir misheppnaða útgáfu** (Failed Deployment Recovery Time) – Tíminn sem tekur að ná sér eftir útgáfu sem veldur bilun í raunumhverfi. Þetta hét áður Mean Time to Recovery (MTTR) eða Time to Restore Service. Skilgreinið nákvæmlega hvað er átt við með endurheimt. Sum teymi telja til dæmis endurheimt vera fullnaðarlausn, þ.e. heildartímann frá því að atvik greinist þar til því er að fullu lokað; þeirri nálgun er betur lýst sem meðaltíma til lausnar.

Mælikvarðar á óstöðugleika:

- **Hlutfall misheppnaðra breytinga** (Change Failure Rate) – Hlutfall útgáfna sem valda bilun í raunumhverfi og krefjast tafarlausra úrbóta, svo sem afturköllunar eða bráðalagfæringar. Skilgreinið nákvæmlega hvað er átt við með bilun. Sum teymi telja til dæmis einnig bilun þegar þau hefja vinnu við verkbeiðni og átta sig síðan á því að hún inniheldur ekki nægar upplýsingar til að halda áfram, svo teymið sendir verkbeiðnina aftur til forskriftarteymisins.

- **Hlutfall endurvinnsluútgáfna** (Deployment Rework Rate) – Hlutfall útgáfna sem eru ófyrirséðar, til dæmis til að laga atvik í raunumhverfi. Þetta eru ófyrirséðar útgáfur deilt með heildarfjölda útgáfna. DORA bætti þessum mælikvarða við árið 2024.

Eldri DORA-skýrslur fjölluðu einnig um **áreiðanleika** (Reliability) sem mælikvarða á rekstrarárangur: víðtækara, oft eigindlegt mat á stöðugleika þjónustu, svo sem aðgengi, uppitíma, biðtíma (latency), nákvæmni og þjónustustigsmarkmiðum. Áreiðanleiki hjálpar til við að sýna að mikill hraði kemur ekki á kostnað getu kerfisins.

## Biðröð biðraða

Auðvelt er að útvíkka biðraðafræði í biðröð biðraða, svo sem ferli á hærra stigi sem inniheldur áfanga, stig eða hlið á lægra stigi.

### Biðröð biðraða í Double Diamond

Lítum til dæmis á nýsköpunarferlislíkanið „Double Diamond“ (tvöfaldi demanturinn), sem tilgreinir fjóra áfanga:

1. Uppgötva (Discover): Skilja vandann í stað þess að gefa sér einfaldlega hver hann er.
2. Skilgreina (Define): Skilgreina áskorunina út frá innsýn úr uppgötvunaráfanganum.
3. Þróa (Develop): Setja fram ólík svör við vandanum sem hefur verið skýrt skilgreindur.
4. Afhenda (Deliver): Prófa ólíkar lausnir í smáum stíl og bæta þær síðan.

Biðraðafræði getur líkt eftir þessu sem einni ferlisbiðröð sem inniheldur fjórar áfangabiðraðir:

- Komutíðni ferlisins er komutíðni áfanga 1.
- Árangurstíðni ferlisins er árangurstíðni áfanga 4.
- Villufjöldi ferlisins er summa villufjölda áfanganna.
- Sleppifjöldi ferlisins er summa sleppifjölda áfanganna.
- Heildartími ferlisins er summa heildartíma áfanganna.
- Hámarksgegnumstreymi ferlisins er gegnumstreymi hægasta áfangans, öðru nafni flöskuhálsinn.

### Trektarbiðröð biðraða

Í hagnýtu starfi okkar notum við oft orðið „trekt“ til að lýsa lauslega biðröð biðraða þar sem fjöldi atriða hefur tilhneigingu til að minnka í hverjum áfanga:

- Ráðningarbiðröð með áfanga til að ná til umsækjenda, viðtalsáfanga og tilboðsáfanga. Fyrir þess konar biðröð stefnum við að því að hámarka komutíðni áfanga 1, þ.e. að auka útbreiðslustarfið, til dæmis með kynningum.

- Kaupabiðröð með leitaráfanga viðskiptavinar, innkaupakörfuáfanga og greiðsluáfanga. Fyrir þess konar biðröð stefnum við að því að lágmarka slepptíðni áfanga 2, þ.e. að fækka yfirgefnum innkaupakörfum, til dæmis með áminningum.

- Forritunarbiðröð með samþættingaráfanga, áfanga notendasamþykkis og útrúlluáfanga í raunumhverfi. Fyrir þess konar biðröð stefnum við að því að lágmarka villutíðni útrúlluáfangans í raunumhverfi, til dæmis með fjarmælingum úr kanarífuglaútgáfum.

## Innsýn

Sjö atriði um innsýn í biðraðafræði, eftir Bob Wescott, höfund „The Every Computer Performance Book“ (sjá einnig [samantekt Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Því hægari sem þjónustustöðin er, þeim mun lægri hámarksnýtingu ætti að gera ráð fyrir við hámarksálag.

2. Það er mjög erfitt að nýta síðustu 15 % af nokkrum hlut.

3. Því nær brúninni sem komið er, þeim mun hærra er gjaldið fyrir að hafa rangt fyrir sér.

4. Aukning svartíma takmarkast af fjöldanum sem getur beðið.

5. Munið að þetta er meðaltal, ekki hámark.

6. Í mörgum þjónustustöðvum gætir mannlegrar afneitunar.

7. Sýnið litlar umbætur í sem bestu ljósi.

## Eftirmáli

### Sjá einnig

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Svið á Wikipedia þar sem við notum biðraðir í mörgum verkefnum:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Inngangsefni eftir John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Ítarlegra inngangsefni:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formúlur:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Þakkir

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Þessi bók er afbragðsgóð um DevOps á háu stigi og liggur beint til grundvallar vali okkar á lykilmælikvörðum. Lykilmælikvarðarnir á þessari síðu eru í samræmi við ráðleggingar bókarinnar.

## Skráning

- Pakki: queue-theory
- Útgáfa: 3.0.0
- Stofnað: 2019-01-25T04:17:56Z
- Uppfært: 2026-11-23T15:33:48Z
- Leyfi: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, eða hafið samband við okkur um aðra skilmála (nánar: [LICENSE.md](LICENSE.md))
- Tengiliður: Joel Parker Henderson <joel@joelparkerhenderson.com>
