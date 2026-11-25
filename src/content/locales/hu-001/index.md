# Sorbanállás-elmélet

A sorbanállás-elmélet a várakozási sorok matematikai vizsgálata. A
sorbanállás-elméletet a szoftverfejlesztésben használjuk, például gyakorlataink és
folyamataink elemzésére és optimalizálására, így ügyfélszolgálatunk reagálási
gyorsaságára, a projektmenedzsment kanbantervezésére, a folyamatok közötti
kommunikáció üzenetsoraira és a DevOps folyamatos telepítési folyamatláncaira.

Tartalom:

- [Bevezetés](#bevezetés)
  - [Az ügyfélszolgálat reagálási gyorsasága](#az-ügyfélszolgálat-reagálási-gyorsasága)
  - [Kanbantervezés a projektmenedzsmentben](#kanbantervezés-a-projektmenedzsmentben)
  - [Üzenetsorok a folyamatok közötti kommunikációban](#üzenetsorok-a-folyamatok-közötti-kommunikációban)
  - [Folyamatos telepítési folyamatláncok a DevOpsban](#folyamatos-telepítési-folyamatláncok-a-devopsban)
- [A sorbanállás terminológiája](#a-sorbanállás-terminológiája)
  - [Sortípusok és kiszolgálási típusok](#sortípusok-és-kiszolgálási-típusok)
- [A sorbanállás-elmélet jelölései](#a-sorbanállás-elmélet-jelölései)
  - [Darabszám](#darabszám)
  - [Érkezési ráta, kiszolgálási ráta, távozási ráta](#érkezési-ráta-kiszolgálási-ráta-távozási-ráta)
  - [Kihasználtsági arány, más néven forgalmi intenzitás](#kihasználtsági-arány-más-néven-forgalmi-intenzitás)
  - [Áteresztési ráták: távozási ráta, befejezési ráta, sikerességi ráta, hibaráta, kihagyási ráta](#áteresztési-ráták-távozási-ráta-befejezési-ráta-sikerességi-ráta-hibaráta-kihagyási-ráta)
  - [A kiszolgálási ráta fogalmának tisztázása](#a-kiszolgálási-ráta-fogalmának-tisztázása)
  - [Kihagyási ráta](#kihagyási-ráta)
  - [Hibaarány](#hibaarány)
  - [Átfutási idő, várakozási idő, munkaidő, lépésidő](#átfutási-idő-várakozási-idő-munkaidő-lépésidő)
  - [Kendall-féle jelölés](#kendall-féle-jelölés)
- [A sorbanállás matematikája](#a-sorbanállás-matematikája)
  - [A kihasználtsági görbe](#a-kihasználtsági-görbe)
  - [Kingman képlete](#kingman-képlete)
  - [Összevonás és Erlang C](#összevonás-és-erlang-c)
- [Tevékenységkövetés](#tevékenységkövetés)
  - [Tevékenységpéldák](#tevékenységpéldák)
  - [Little törvénye](#little-törvénye)
  - [Kulcsfontosságú teljesítménymutatók (KPI-k)](#kulcsfontosságú-teljesítménymutatók-kpi-k)
- [Szolgáltatási metrikák](#szolgáltatási-metrikák)
  - [Átlagos idő a reagálásig, javításig, helyreállításig, lezárásig](#átlagos-idő-a-reagálásig-javításig-helyreállításig-lezárásig)
  - [DORA-metrikák](#dora-metrikák)
- [Sorok sora](#sorok-sora)
  - [A Double Diamond sorok sora](#a-double-diamond-sorok-sora)
  - [Tölcsér típusú sorok sora](#tölcsér-típusú-sorok-sora)
- [Meglátások](#meglátások)
- [Epilógus](#epilógus)
  - [További források](#további-források)
  - [Köszönetnyilvánítás](#köszönetnyilvánítás)
- [Nyilvántartás](#nyilvántartás)

## Bevezetés

A sorbanállás-elméletet projektjeinkben számos célra használjuk:

- Az ügyfélszolgálat reagálási gyorsasága

- Kanbantervezés a projektmenedzsmentben

- Üzenetsorok a folyamatok közötti kommunikációban

- Folyamatos telepítési folyamatláncok a DevOpsban

### Az ügyfélszolgálat reagálási gyorsasága

Például elemezni szeretnénk, hogyan kérnek az ügyfelek értékesítési és támogatási segítséget, és milyen gyorsan válaszolunk.

Néhány releváns termék például: [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Kanbantervezés a projektmenedzsmentben

Például nyomon szeretnénk követni az átfutási időket és az előrehaladási időket, miközben egy új funkció ötlete a tervezéstől a szállításig fejlődik.

Néhány releváns termék például: [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Üzenetsorok a folyamatok közötti kommunikációban

Például maximalizálni szeretnénk az áteresztőképességet és minimalizálni a terhelést, miközben egyik program kéréseket küld egy másik programnak.

Néhány releváns termék például: [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Folyamatos telepítési folyamatláncok a DevOpsban

Például biztosítani szeretnénk, hogy folyamatos integrációs szerverünknek legyen kapacitása szoftverünk tesztelésére, majd telepítésére.

Néhány releváns termék például: [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## A sorbanállás terminológiája

A sorbanállás terminológiája nagy téma. Ez a szakasz néhány általunk gyakran használt kifejezést tartalmaz. A példákban egy sorban várakozó ügyfél képét használjuk.

### Sortípusok és kiszolgálási típusok

A sortípusok és a kiszolgálási típusok azt írják le, hogyan választja ki a sor, mely elemeket dolgozza fel.

- First In First Out (FIFO): azt az ügyfelet szolgálja ki, aki a leghosszabb ideje várakozik.

- Last In First Out (LIFO): azt az ügyfelet szolgálja ki, aki a legrövidebb ideje várakozik.

- Prioritás: az ügyfeleket prioritási szintjük alapján szolgálja ki; ezek a szintek alapulhatnak státuszon, sürgősségen, fizetésen stb.

- Shortest Job First (SJF): azt az ügyfelet szolgálja ki, akinek a legkevesebb kiszolgálásra van szüksége.

- Longest Job First (LJF): azt az ügyfelet szolgálja ki, akinek a legtöbb kiszolgálásra van szüksége.

- Shortest Remaining Processing Time (SRPT): mint az SJF, de egy újonnan érkezett rövid feladat megszakíthat egy már kiszolgálás alatt álló hosszabb feladatot.

- Round Robin: minden ügyfelet egy rövid időszeletig szolgál ki, majd a következő ügyfélre lép, és ezt ismétli.

- Időosztás, más néven Processor Sharing (PS): mindenkit egyszerre szolgál ki; a kiszolgálási kapacitás egyenletesen oszlik meg minden várakozó között.

Az SJF és az SRPT minimalizálja az átlagos várakozást, de a hosszú feladatokat a végtelenségig kiéheztethetik, ezért a valós rendszerek gyakran öregítést vagy prioritási korlátokat vezetnek be.

## A sorbanállás-elmélet jelölései

A sorbanállás-elmélet görög betűket használó jelöléseket alkalmaz.

Csapataink a népszerű jelölések egy részét használják; emellett néhány saját jelölést is bevezetünk, amelyek a szoftverprojektekben segítenek.

A mi jelölésünk és az egyes szimbólumok jelentése:

| A mi jelölésünk | Jelentés |
| --------------- | -------- |
| κ (kappa) | a rendszerben lévő elemek száma, a várakozók és a feldolgozás alatt állók együtt |
| λ (lambda) | a rendszerbe belépő elemek érkezési rátája |
| χ (khí) | a rendszerből kilépő elemek távozási rátája |
| μ (mű) | kiszolgálási ráta, más néven kapacitás: milyen gyorsan dolgozik egy kiszolgáló, amíg foglalt |
| ρ (rhó) | kihasználtság: az idő azon hányada, amikor a kiszolgálók foglaltak, λ / (c μ) |
| α (alfa) | sikerességi ráta: a helyesnek bizonyuló megfigyelt kimenet |
| β (béta) | hibaráta: a hibásnak bizonyuló megfigyelt kimenet |
| δ (delta) | befejezési ráta: siker + hiba, kiszolgált elemek, akár helyes, akár hibás az eredmény |
| σ (szigma) | kihagyási ráta: belépett, majd kiszolgálatlanul távozó elemek |
| ε (epszilon) | hibaarány: β / δ = β / (α + β) |
| τ (tau) | a rendszerben töltött idő, más néven átfutási idő |
| ω (ómega) | várakozási idő, más néven a sorban töltött idő |
| φ (fí) | munkaidő, más néven a processzorban töltött idő, más néven kiszolgálási idő |
| θ (théta) | lépésidő két befejezés között; az átlagos lépésidő ≈ 1 / χ állandósult állapotban |

### Darabszám

Gyakran számoljuk az elemeket, és ezt a jelölést használjuk:

- κ (kappa): a rendszerben lévő elemek száma, vagyis a várakozó elemek és a feldolgozás alatt álló elemek együtt.

![Ábra: κ elem van a rendszerben](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Példa:

- κ = 10 azt jelenti, hogy pontosan 10

- κ ≈ 10 azt jelenti, hogy körülbelül 10

- κ < 10 azt jelenti, hogy kevesebb mint 10

- κ > 10 azt jelenti, hogy több mint 10

- κ ≪ 10 azt jelenti, hogy jóval kevesebb mint 10

- κ ≫ 10 azt jelenti, hogy jóval több mint 10

A κ (kappa) darabszám egyetlen pillanat pillanatfelvétele.

Az átlagos κ̅ (kappa felülvonással) darabszám olyan számítás, amely egy meghatározott időszak mérési eredményeit átlagolja, például két héten át óránként mérve.

### Érkezési ráta, kiszolgálási ráta, távozási ráta

A legfontosabb jelölés:

- λ (lambda): érkezési ráta. Azt méri, milyen gyorsan lépnek be az elemek a rendszerbe.

- μ (mű): kiszolgálási ráta, más néven kapacitás. Ez azt méri, milyen gyorsan tud egy kiszolgáló elemeket kezelni, amíg foglalt.

- χ (khí): távozási ráta. Azt méri, milyen gyorsan hagyják el az elemek a rendszert.

![Ábra: az elemek λ rátával érkeznek, μ rátával szolgálják ki őket, és χ rátával távoznak](https://queue-theory.github.io/images/queue-theory-lambda-arrival-mu-service-chi-departure.svg)

Általános példák hagyományos, egy kiszolgálós sorokra:

- λ < μ azt jelenti, hogy az érkezési ráta kisebb a kiszolgálási rátánál; a sor stabil, vagyis egy véges átlagos méret körül ingadozik.

- λ = μ azt jelenti, hogy az érkezési ráta egyenlő a kiszolgálási rátával; a legkisebb véletlenszerűség mellett is a sor elsodródik, és korlátlanul nő.

- λ > μ azt jelenti, hogy az érkezési ráta nagyobb a kiszolgálási rátánál; a sor egyenletesen nő, időegységenként körülbelül λ − μ elemmel.

Az az intuitív elképzelés, hogy „λ = μ mellett a sor mérete változatlan marad”, csak akkor igaz, ha az érkezések és a kiszolgálás tökéletesen szabályosak, mint egy metronóm. A valós érkezések hullámzóak, így egy csendesebb időszakban elvesztegetett üresjárati idő soha nem pótolható, és a sor a következő hullám során nő.

Vegye figyelembe, hogy a sorbanállás-elmélet egyes gyakorlói a „kiszolgálási ráta” kifejezést a kapacitás helyett a megfigyelt kimenetre értik; részletek: [a kiszolgálási ráta fogalmának tisztázása](#a-kiszolgálási-ráta-fogalmának-tisztázása).

### Kihasználtsági arány, más néven forgalmi intenzitás

A sort összefoglaló legfontosabb jelölés:

- ρ (rhó): kihasználtsági arány, vagyis az idő azon hányada, amikor a kiszolgálók foglaltak = λ / μ egy kiszolgáló esetén, vagy λ / (c μ) c kiszolgáló esetén

Példák:

- ρ < 1 azt jelenti, hogy a kiszolgálóknak van szabad kapacitásuk; a sor stabil. Minél közelebb kerül a ρ az 1-hez, annál hosszabbak a várakozások; részletek: [a kihasználtsági görbe](#a-kihasználtsági-görbe).

- ρ = 1 azt jelenti, hogy a kiszolgálók folyamatosan foglaltak; a sor instabil, és korlátlanul nő.

- ρ > 1 azt jelenti, hogy az érkezések meghaladják a kapacitást; a sor egyre nagyobb.

### Áteresztési ráták: távozási ráta, befejezési ráta, sikerességi ráta, hibaráta, kihagyási ráta

Az áteresztési ráták a megfigyelt kimenetet mérik, vagyis azokat az elemeket, amelyek ténylegesen elhagyják a sort. Öt fő kategóriájuk van:

- χ (khí): távozási ráta. Azt méri, milyen gyorsan hagyják el az elemek a rendszert.

- α (alfa): sikerességi ráta. Ez azt méri, időszakonként hány elem bizonyul helyesnek, például pontosnak, teljesnek, elfogadottnak.

- β (béta): hibaráta. Ez azt méri, időszakonként hány elem bizonyul hibásnak, például pontatlannak, hiányosnak, elutasítottnak.

- δ (delta): befejezési ráta. Ez azt méri, időszakonként hány elemet szolgálnak ki.

- σ (szigma): kihagyási ráta. Ez azt méri, időszakonként hány elem lép be a sorba, majd távozik kiszolgálás nélkül, például feladások, visszalépések.

![Ábra: távozási ráta χ = befejezési ráta δ + kihagyási ráta σ; befejezési ráta δ = sikerességi ráta α + hibaráta β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Befejezési ráta = sikerességi ráta + hibaráta:

- δ = α + β (kiejtve: delta egyenlő alfa plusz béta)

Teljes ráta = befejezési ráta + kihagyási ráta:

- χ = δ + σ (kiejtve: khí egyenlő delta plusz szigma)

Teljes ráta = sikerességi ráta + hibaráta + kihagyási ráta:

- χ = α + β + σ (kiejtve: khí egyenlő alfa plusz béta plusz szigma)

Minden χ-ben számolt elem belépett a rendszerbe, így állandósult állapotban a teljes ráta egyenlő az érkezési rátával: χ ≈ λ. Ezért mérik az áteresztési ráták a kimenetet, nem pedig a kapacitást.

### A kiszolgálási ráta fogalmának tisztázása

A kontextustól és a gyakorlótól függően a „kiszolgálási ráta” kifejezés jelentheti
a „teljes rátát” vagy a „sikerességi rátát”.

Ennek történeti gyökerei vannak, és zavart és hibákat okozhat, különösen olyan
kontextusokban és olyan gyakorlóknál, akik a sorbanállás-elméletet ott alkalmazzák,
ahol jelentős igény van a hibák és a kihagyások nyomon követésére.

- Elméleti nézőpont: A kiszolgálási ráta a sebesség tiszta mérőszáma (például feladat másodpercenként), függetlenül attól, hogy a feladatok sikeresek, hibásak, kihagyottak stb.

- Feldolgozási nézőpont: A kiszolgálási ráta mindazt tartalmazza, amelynek feldolgozásával a sor időt tölt, vagyis a sikereket vagy a hibákat, de a kihagyásokat nem.

- Technológiai nézőpont: Az alkalmazott területeken, például a szoftvermérnökségben, a kiszolgálási ráta csak a sikereket méri, míg a hibaráta a hibákat, a kihagyási ráta pedig a kihagyásokat.

Ezért a μ-t megtartjuk a kapacitásra, és mellé vesszük fel a megfigyelt kimeneti rátákat, ahelyett hogy lecserélnénk:

- μ (mű): kiszolgálási ráta, más néven kapacitás. Ez azt méri, milyen gyorsan tud egy kiszolgáló elemeket kezelni, amíg foglalt.

- χ (khí): távozási ráta. Azt méri, milyen gyorsan hagyják el az elemek a rendszert.

- α (alfa): sikerességi ráta. Ez azt méri, időszakonként hány elem bizonyul helyesnek, például pontosnak, teljesnek, elfogadottnak.

Miért ne cserélnénk le a μ-t χ-re vagy α-ra? Egy stabil sorban minden belépő elem végül távozik, így χ ≈ λ. Ekkor λ / χ ≈ 1, bármekkora is a terhelés, ami semmit sem árul el arról, mennyire foglaltak a kiszolgálók. A kihasználtsághoz kapacitás kell: ρ = λ / (c μ), ami egyenlő az idő azon hányadával, amikor a kiszolgálók foglaltak.

### Kihagyási ráta

A kihagyási ráta részletei:

- σ (szigma): kihagyási ráta. Ez azt méri, hány elem lép be a sorba, majd távozik feldolgozás nélkül.

Kihagyásról akkor beszélünk, amikor egy elem belép a sorba, majd jelentős feldolgozás nélkül távozik:

- Feladás (abandoning): amikor egy ügyfél beáll egy sorba, majd bármilyen okból távozik.

- Visszalépés (reneging): amikor egy már várakozó ügyfél úgy dönt, hogy távozik, mert túl sok időt vesztegetett el.

Két kapcsolódó viselkedés nem számít kihagyásnak:

- Elriadás (balking): amikor egy ügyfél úgy dönt, hogy be sem áll a sorba, mert a várakozási idő túl hosszúnak ígérkezik. Az elriadt elem soha nem lép be a rendszerbe, így a rendszer határán kívül esik: nem számít bele a λ-ba, a χ-be vagy a σ-ba. Ha az elriadások számítanak, például elmaradt eladások miatt, akkor számolja őket külön, elutasított érkezésekként.

- Sorváltogatás (jockeying): amikor egy ügyfél párhuzamos sorok között vált, például pénztársorok között, rövidebb várakozást remélve.

### Hibaarány

A sor sikerességét összefoglaló legfontosabb jelölés:

- ε (epszilon): hibaarány = hibák száma / a befejezettek száma = β / δ = β / (α + β)

A kihagyások nem számítanak bele, mert egy kihagyott elemet soha nem szolgáltak ki, így az sem helyes, sem hibás nem volt. A kihagyásokat külön kövesse a σ segítségével.

![Ábra: a hibaarány ε a hibaráta β osztva a befejezési rátával δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Példák:

- ε = 0 azt jelenti, hogy nincs hiba.

- ε = 0.1 azt jelenti, hogy a kiszolgálások 10%-ában hiba van.

- ε = 1 azt jelenti, hogy minden kiszolgálásban hiba van.

### Átfutási idő, várakozási idő, munkaidő, lépésidő

Négy időt követünk nyomon:

- τ (tau): a rendszerben töltött idő, más néven átfutási idő, más néven az elejétől a végéig.

- θ (théta): lépésidő = az egyik befejezéstől a következő befejezésig; egy lépésidő egy köz, az átlagos lépésidő pedig az átlagos köz

- ω (ómega): várakozási idő = a tényleges munka nélkül töltött idő, más néven függőben lévő idő

- φ (fí): munkaidő = a tényleges munkával töltött idő, más néven feldolgozási idő

![Ábra: átfutási idő τ, várakozási idő ω, munkaidő φ, lépésidő θ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time-theta-step-time.svg)

Példák:

- τ = 5s azt jelenti, hogy egy elem belép a rendszerbe, majd 5 másodperccel később kilép belőle.

- ω = 4s azt jelenti, hogy egy elem 4 másodpercig várakozik a sorban, majd megkezdődik a munka.

- φ = 1s azt jelenti, hogy egy elem 1 másodpercnyi munkát igényel, majd elkészül.

- θ = 1s azt jelenti, hogy 1 másodperc telik el az egyik befejezés és a következő befejezés között.

Összefüggések:

- τ = ω + φ: az átfutási idő a várakozási idő és a munkaidő összege. A példákban 5s = 4s + 1s.

- átlagos θ ≈ 1 / χ: állandósult állapotban az átlagos lépésidő a teljes ráta reciproka. Egyetlen köz keveset árul el a rátáról; sok köz átlaga viszont igen. A példákban, ha az átlagos lépésidő 1s, akkor χ ≈ 1 elem másodpercenként.

### Kendall-féle jelölés

A Kendall-féle jelölés a sorbanállás-elmélet egy másik jelölése, A/S/c/K/N/D formában írva:

- A: az érkezési folyamat, vagyis az érkezések közötti idő eloszlása.

- S: a kiszolgálási folyamat, vagyis a kiszolgálási idők eloszlása.

- c: a kiszolgálók száma.

- K: a kapacitás, vagyis a rendszerben megengedett elemek maximális száma, várakozók vagy kiszolgálás alatt állók, mielőtt az új érkezéseket elutasítják.

- N: a populáció, vagyis a lehetséges ügyfelek száma.

- D: a fegyelem, vagyis a sortípus, például FIFO vagy LIFO.

Az A és az S szokásos betűi:

- M: Markov-féle, más néven emlékezet nélküli, vagyis exponenciális idők, amelyek Poisson-érkezésekből adódnak.

- D: Determinisztikus, vagyis állandó idők.

- G: Általános (General), vagyis bármilyen eloszlás.

Ha az utolsó hármat elhagyják, az alapértelmezések K = ∞, N = ∞, D = FIFO. Például az „M/M/1” Poisson-érkezéseket, exponenciális kiszolgálási időket, egy kiszolgálót, korlátlan kapacitást, korlátlan populációt és first in first out sorrendet jelent.

Továbbá:

- n: a rendszerben lévő elemek száma.

## A sorbanállás matematikája

A matematikai szakaszok tankönyvi szimbólumokat használnak, hogy Ön összevethesse őket más forrásokkal: az S az átlagos kiszolgálási idő, ami a mi φ-nk, a μ = 1 / S pedig egy kiszolgáló kapacitása.

### A kihasználtsági görbe

A sorbanállás-elmélet egyetlen legfontosabb eredménye: ahogy a kihasználtság megközelíti a 100%-ot, a várakozási idő korlátlanul nő, és a végén nő a leggyorsabban.

Egy M/M/1 sor esetén, ahol S az átlagos kiszolgálási idő:

- Átfutási idő τ = S / (1 − ρ)

- Várakozási idő ω = S × ρ / (1 − ρ)

| Kihasználtság ρ | Átfutási idő τ | Várakozási idő ω |
| --- | --- | --- |
| 50% | 2 × S | 1 × S |
| 70% | 3.3 × S | 2.3 × S |
| 80% | 5 × S | 4 × S |
| 90% | 10 × S | 9 × S |
| 95% | 20 × S | 19 × S |
| 99% | 100 × S | 99 × S |

Példa: egy kódáttekintés 1 óra munkát igényel. Ha az áttekintők 80%-ban foglaltak, egy áttekintés a kéréstől a befejezésig körülbelül 5 órát vesz igénybe. Ha az áttekintők 95%-ban foglaltak, körülbelül 20 órát, pedig az áttekintők csak 15 százalékponttal foglaltabbak.

Ezért receptje a hosszú átfutási időknek a „mindenki legyen 100%-ban leterhelve” elv, és ezért figyelmeztetnek az alábbi [meglátások](#meglátások) a magas kihasználtságra való tervezés ellen.

### Kingman képlete

Kingman képlete, más néven a VUT-egyenlet, közelíti a várakozási időt egy kiszolgálós sor esetén, tetszőleges érkezési és kiszolgálási eloszlásokkal (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

A három tényező:

- U: a kihasználtsági tényező ρ / (1 − ρ), ami a fenti kihasználtsági görbe.

- V: a változékonysági tényező (ca² + cs²) / 2, ahol ca az érkezések közötti idő relatív szórása, cs pedig a kiszolgálási idők relatív szórása. A relatív szórás a szórás osztva az átlaggal.

- T: az időtényező S, az átlagos kiszolgálási idő.

Példa: egy M/M/1 sor esetén ca = cs = 1, így V = 1, és a képlet ugyanazt a várakozási időt adja, mint a kihasználtsági görbe. Ha Ön egységesebbé teszi a munkaelemeket, például a nagy jegyek felosztásával, úgy, hogy a cs 1-ről közel 0-ra csökken, akkor a V körülbelül 0.5-re csökken, és a várakozási idő azonos kihasználtság mellett nagyjából a felére esik.

Kingman képlete a várakozási idő csökkentésének három karját mutatja meg:

- A kihasználtság csökkentése, például kapacitás hozzáadásával vagy a folyamatban lévő munka korlátozásával.

- A változékonyság csökkentése, például kisebb kötegekkel, egységesebb munkaelemekkel vagy egyenletesebb érkezésekkel.

- A kiszolgálási idő csökkentése, például automatizálással.

### Összevonás és Erlang C

Egy közös sor, amely több kiszolgálót lát el, jobb, mint külön sorok, amelyek mindegyike egy-egy kiszolgálót lát el. Ezért használnak a bankok egyetlen sort, amely sok pénztárost lát el, és ezért jobb egy közös támogatási sor, mint az ügyintézőnkénti sorok.

Példa: két kiszolgáló elemenként 1 órát dolgozik, az elemek összesen óránként 1.6 elem ütemben érkeznek, így a kihasználtság 80%.

- Külön sorok: minden kiszolgáló egy M/M/1 sor óránként 0.8 érkezéssel, így az átfutási idő 1 / (1 − 0.8) = 5 óra.

- Összevont sor: mindkét kiszolgáló egy M/M/2 sort oszt meg, így az átfutási idő körülbelül 2.8 óra, ami körülbelül 44%-kal kevesebb, ugyanazokkal az emberekkel és ugyanazzal a munkával.

Az Erlang C képlet kiszámítja annak valószínűségét, hogy egy érkező elemnek várakoznia kell egy M/M/c sorban, a = λ / μ felajánlott terheléssel és ρ = a / c kihasználtsággal:

- P(várakozás) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Várakozási idő ω = P(várakozás) / (c μ − λ)

Az ügyfélszolgálati csapatok az Erlang C segítségével döntik el, hány ügyintézőt állítsanak be egy cél teljesítéséhez, például „a hívások 80%-át 20 másodpercen belül fogadják”.

Az összevonásnak vannak korlátai: akkor működik a legjobban, ha bármely kiszolgáló bármely elemet kezelni tud. Ha az elemekhez szakemberek kellenek, akkor egy összevont sornak útválasztási szabályokra lehet szüksége.

## Tevékenységkövetés

### Tevékenységpéldák

Tegyük fel, hogy van valami, amit nyomon szeretnénk követni, és valami általános néven nevezzük, például „Tevékenység” (Activity), rövidítve „A”.

A sorbanállási jelölést hatékonyan használhatjuk a tevékenység leírására, és arra, hogyan halad át egy soron.

Példák:

- Aκ: a tevékenység darabszáma: hány elem van a sorban.

- Aλ: a tevékenység érkezési rátája: hány elem érkezik időegységenként.

- Aχ: a tevékenység teljes rátája: hány elem lép ki a sorból időegységenként.

- Aα: a tevékenység sikerességi rátája: hány elem helyes időegységenként.

- Aβ: a tevékenység hibarátája: hány elem hibás időegységenként.

- Aμ: a tevékenység kiszolgálási rátája, más néven kapacitás: hány elemet tud egy kiszolgáló befejezni időegységenként, amíg foglalt.

- Aσ: a tevékenység kihagyási rátája: hány elemet adnak fel időegységenként.

- Aρ: a tevékenység kihasználtsági aránya: a rendelkezésre álló idő azon hányada, amikor a kiszolgálók foglaltak, vagyis foglalt idő ÷ rendelkezésre álló idő, vagy λ / (c μ).

- Aε: a tevékenység hibaaránya: hány elem készül el hibával az összeshez képest.

- Aτ: a tevékenység átfutási ideje: mennyi idő telik el a kéréstől a befejezésig.

- Aω: a tevékenység várakozási ideje: mennyi idő telik el a kéréstől a megkezdésig.

- Aφ: a tevékenység munkaideje: mennyi idő telik el a megkezdéstől a befejezésig.

- Aθ: a tevékenység lépésideje: mennyi idő telik el az egyik befejezéstől a következő befejezésig.

### Little törvénye

Little törvénye John Little tétele, amely kimondja: egy stacionárius rendszerben lévő ügyfelek hosszú távú átlagos L száma egyenlő a hosszú távú átlagos tényleges λ érkezési ráta és az ügyfél által a rendszerben töltött átlagos W idő szorzatával.

Példa jelölés:

- L: a rendszerben lévő ügyfelek hosszú távú átlagos száma. Mi a κ-t (kappa) részesítjük előnyben.

- λ: a hosszú távú átlagos tényleges érkezési ráta, vagyis a ténylegesen a rendszerbe lépő elemek, tehát az elriadások nélkül.

- W: az az átlagos idő hosszú távon, amelyet egy elem a rendszerben tölt. Mi a τ-t (tau) részesítjük előnyben.

- L = λ W Little törvénye. Mi a κ = λ τ alakot részesítjük előnyben (kappa = lambda \* tau).

Little törvénye figyelemre méltóan általános: érvényes az érkezési eloszlástól, a kiszolgálási eloszlástól, a kiszolgálók számától és a sortípustól függetlenül.

Little törvényének feltevései:

- Minden mértékegység konzisztens.

- A rendszer stabil, vagyis a mérési időszak alatt az átlagos érkezési ráta egyenlő az átlagos távozási rátával, és az elemek száma az elején és a végén nagyjából azonos.

- A korán távozó elemeket, például a visszalépők esetén, vagy következetesen beszámítják a λ-ba és a τ-ba is, vagy következetesen kizárják mindkettőből.

Példa: egy csapatnál átlagosan κ = 20 jegy van folyamatban, és a jegyek λ = 4 ütemben érkeznek hetente; állandósult állapotban a csapat szintén χ = 4 jegyet fejez be hetente. Így az átlagos jegy τ = κ / λ = 5 hétig tart. Ha gyorsabb munka nélkül szeretné felére csökkenteni az átfutási időt, csökkentse felére a folyamatban lévő munkát.

### Kulcsfontosságú teljesítménymutatók (KPI-k)

A sorban lévő tevékenységekről jellemzően sok mindent követünk nyomon, és az eredményeket úgy szeretnénk összefoglalni, hogy projektjeinkhez kiválasztjuk a legrelevánsabbak rövid listáját.

Sok projektet építettünk, és úgy gondoljuk, hogy a legértékesebb összefoglaló mutatók a következők:

- Dτ = Szállítási átfutási idő. A termékcsapatok mondhatják úgy, hogy „a koncepciótól az ügyfélig” vagy „az ötlettől a megvalósításig”.

- Dα = Szállítási sikerességi ráta. A DevOps-csapatok mondhatják úgy, hogy „telepítési gyakoriság” vagy „naponta X alkalommal szállítunk”.

- Dε = Szállítási hibaarány. A minőségügyi csapatok mondhatják úgy, hogy „változtatási hibaráta” vagy „visszaállítások aránya”.

- Rτ = Helyreállítási átfutási idő. A megbízhatósági mérnökök (SRE) mondhatják úgy, hogy „sikertelen telepítés utáni helyreállítási idő” vagy „átlagos helyreállítási idő (MTTR)”.

## Szolgáltatási metrikák

Hasznos fogalmak:

- **Service Level Indicator (SLI):** a metrika (például 99.9% rendelkezésre állás)
- **Service Level Objective (SLO):** a belső cél az adott metrikára (például 99.95% rendelkezésre állásra törekvés)
- **Service Level Agreement (SLA):** az ügyfélnek tett formális, szerződéses ígéret (például 99.9% rendelkezésre állás, kötbérrel, ha nem teljesül).

### Átlagos idő a reagálásig, javításig, helyreállításig, lezárásig

Az MTTR négy különböző mérést jelöl:

| Metrika | Fókusz | Mit mér | Kezdet | Vég |
| --- | --- | --- | --- | --- |
| **Mean Time To Respond** (átlagos reagálási idő) | Első reakció | A tudomásulvételig és a cselekvés megkezdéséig eltelt idő | Amikor az incidenst észlelik/bejelentik | Amikor a csapat elkezd dolgozni rajta |
| **Mean Time To Repair** (átlagos javítási idő) | Technikai javítás | A hibás elem kijavításáig eltelt idő | Amikor a javítási munka elkezdődik | Amikor az elem ki van javítva |
| **Mean Time To Recover** (átlagos helyreállítási idő) | A szolgáltatás helyreállítása | A teljes szolgáltatás helyreállításáig eltelt idő | Amikor az incidens/kiesés elkezdődik | Amikor a szolgáltatás teljesen működőképes |
| **Mean Time To Resolve** (átlagos lezárási idő) | Teljes megoldás | Az észleléstől a lezárásig eltelt teljes idő | Amikor az incidenst észlelik | Amikor az incidens teljesen le van zárva |

**Fő különbségek:**

**A reagálás** a csapat felkészültségét és a riasztás hatékonyságát méri. Az alacsony reagálási idő azt jelenti, hogy az Ön monitorozási és ügyeleti folyamatai jól működnek, még akkor is, ha a tényleges javítás tovább tart.

**A javítás** szűken technikai: mennyi ideig tart ténylegesen kijavítani a hibás dolgot, miután elkezdtek dolgozni rajta? Nem tartalmazza az észlelési időt, az osztályozást (triage) és az ellenőrzést.

**A helyreállítás** a szolgáltatás rendelkezésre állásáról szól az ügyfél szemszögéből. A rendszer lehet „megjavítva”, de még nem „helyreállítva”, ha még adatokat kell visszaállítani, gyorsítótárakat kell feltölteni vagy a működést kell ellenőrizni.

**A lezárás** a legátfogóbb: az incidens teljes életciklusát lefedi az első észleléstől az incidens utáni ellenőrzésig és lezárásig.

Példaforgatókönyv:

- 2:00 AM — Kiesés kezdődik
- 2:05 AM — Riasztás indul, az incidenst észlelik
- 2:15 AM — Az ügyeletes tudomásul veszi, és elkezd dolgozni → Reagálási idő: 10 perc (2:05-től 2:15-ig)
- 2:45 AM — A kiváltó ok azonosítva, a javítás telepítve → Javítási idő: 30 perc (2:15-től 2:45-ig)
- 3:00 AM — A szolgáltatás működése a felhasználók számára ellenőrizve → Helyreállítási idő: 60 perc (2:00-tól 3:00-ig)
- 3:30 AM — Az incidensjegy ellenőrzés után lezárva → Lezárási idő: 85 perc (2:05-től 3:30-ig)

Kapcsolódó metrikák:

- MTBF (átlagos idő a meghibásodások között)
- MTTF (átlagos idő a meghibásodásig)
- MTTA (átlagos idő a tudomásulvételig)

### DORA-metrikák

A DevOps Research and Assessment (DORA) metrikák iparági standard kulcsfontosságú teljesítménymutatók (KPI-k), kifejezetten szoftvermérnöki DevOps-csapatok számára. Részletek: [dora.dev](https://dora.dev/guides/dora-metrics/).

A DORA jelenleg öt metrikát használ, két csoportban.

Áteresztési metrikák:

- **Change Lead Time** (változtatási átfutási idő) – Egy funkció kódjának megvalósításához, teszteléséhez és szállításához szükséges idő (a commit-tól az éles környezetbe való telepítésig mérve). Határozza meg pontosan, mit ért kezdet és vég alatt. Például egyes csapatok szívesen mérnek attól, hogy egy fejlesztő elkezd dolgozni egy jegyen, addig, amíg a fejlesztő be nem küldi a munkát egy folyamatos integrációs folyamatba; ez a megközelítés általában hatékonyabb az egyéni produktivitás mérésére.

- **Deployment Frequency** (telepítési gyakoriság) – A telepítések száma egy adott időtartam alatt. Határozza meg pontosan, mit ért telepítés alatt, és hogyan követi a gyakoriságot. Például egyes csapatok éles szerverek egész flottájára telepítenek, és a teljes bevezetést követik, míg más csapatok egyetlen felhasználói átvételi teszt (UAT) szerverre telepítenek, és azt követik, mikor küld a projektmenedzser e-mailes bejelentést a felhasználóknak a tesztelés kipróbálására.

- **Failed Deployment Recovery Time** (sikertelen telepítés utáni helyreállítási idő) – Az az idő, amely egy éles hibát okozó telepítésből való helyreállításhoz szükséges. Ezt korábban Mean Time to Recovery (MTTR) vagy Time to Restore Service néven ismerték. Határozza meg pontosan, mit ért helyreállítás alatt. Például egyes csapatok a helyreállítást teljes megoldásnak tekintik, vagyis az incidens észlelésétől a teljes lezárásáig eltelt teljes időnek; ezt a megközelítést pontosabban a Mean Time To Resolve írja le.

Instabilitási metrikák:

- **Change Failure Rate** (változtatási hibaráta) – Azon telepítések aránya, amelyek éles hibát okoznak, és azonnali beavatkozást igényelnek, például visszaállítást vagy gyorsjavítást. Határozza meg pontosan, mit ért hiba alatt. Például egyes csapatok akkor is hibát számolnak, amikor elkezdenek dolgozni egy munkajegyen, majd rájönnek, hogy a munkajegy nem tartalmaz elég információt a folytatáshoz, ezért a csapat visszautasítja a munkajegyet a specifikációs csapatnak.

- **Deployment Rework Rate** (telepítési átdolgozási ráta) – A nem tervezett telepítések aránya, például egy éles incidens javítására. Ez a nem tervezett telepítések száma osztva az összes telepítés számával. A DORA 2024-ben vette fel ezt a metrikát.

A korábbi DORA-jelentések a **Reliability** (megbízhatóság) fogalmát is tárgyalták mint működési teljesítménymetrikát: a szolgáltatás konzisztenciájának tágabb, gyakran kvalitatív értékelése, például a rendelkezésre állás, az üzemidő, a késleltetés, a pontosság és a szolgáltatásszint-célok tekintetében. A megbízhatóság segít megmutatni, hogy a nagy sebesség nem a rendszer képességeinek rovására megy.

## Sorok sora

A sorbanállás-elmélet könnyen kiterjeszthető sorok sorára, például egy magasabb szintű folyamatra, amely alacsonyabb szintű szakaszokat, fázisokat vagy kapukat tartalmaz.

### A Double Diamond sorok sora

Vegyük például a „Double Diamond” innovációs folyamatmodellt, amely négy szakaszt határoz meg:

1. Felfedezés (Discover): A probléma megértése ahelyett, hogy csupán feltételeznénk, mi az.
2. Meghatározás (Define): A felfedezési szakasz meglátásai alapján a kihívás meghatározása.
3. Kidolgozás (Develop): Különböző válaszok adása a világosan meghatározott problémára.
4. Átadás (Deliver): Különböző megoldások kis léptékű tesztelése, majd továbbfejlesztése.

A sorbanállás-elmélet ezt egyetlen folyamatsorként modellezheti, amely négy szakaszsort tartalmaz:

- A folyamat érkezési rátája az 1. szakasz érkezési rátája.
- A folyamat sikerességi rátája a 4. szakasz sikerességi rátája.
- A folyamat hibaszáma a szakaszok hibaszámainak összege.
- A folyamat kihagyásszáma a szakaszok kihagyásszámainak összege.
- A folyamat átfutási ideje a szakaszok átfutási idejeinek összege.
- A folyamat maximális áteresztőképessége a leglassabb szakasz, más néven a szűk keresztmetszet áteresztőképessége.

### Tölcsér típusú sorok sora

Gyakorlati munkánkban gyakran használjuk a „tölcsér” szót olyan sorok sorának laza leírására, amelyek minden szakaszban csökkentik az elemek számát:

- Toborzási sor, amely megkeresési szakaszt, interjúszakaszt és ajánlati szakaszt használ. Az ilyen sornál az 1. szakasz érkezési rátájának maximalizálására törekszünk, vagyis a megkeresések növelésére, például promóciók révén.

- Vásárlási sor, amely vevői keresési szakaszt, kosárszakaszt és fizetési szakaszt használ. Az ilyen sornál a 2. szakasz kihagyási rátájának minimalizálására törekszünk, vagyis a kosárelhagyás csökkentésére, például emlékeztetők révén.

- Programozási sor, amely integrációs szakaszt, felhasználói átvételi szakaszt és éles bevezetési szakaszt használ. Az ilyen sornál az éles bevezetési szakasz hibarátájának minimalizálására törekszünk, például canary telemetria révén.

## Meglátások

Hét meglátás a sorbanállás-elméletről Bob Wescott-tól, a „The Every Computer Performance Book” szerzőjétől (további információ: [Kottke összefoglalója](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Minél lassabb a kiszolgálóközpont, annál alacsonyabb maximális kihasználtsággal érdemes tervezni csúcsterhelés idején.

2. Bárminek az utolsó 15%-át nagyon nehéz kihasználni.

3. Minél közelebb van a határhoz, annál magasabb az ára a tévedésnek.

4. A válaszidő növekedését a várakozni képesek száma korlátozza.

5. Ne feledje, hogy ez átlag, nem maximum.

6. Több kiszolgálóközpont esetén fellép egy emberi tagadási hatás.

7. A kis javulásokat a legjobb színben tüntesse fel.

## Epilógus

### További források

Wikipédia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Wikipédia-területek, ahol sok projektben sorokat használunk:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

John D. Cook bevezetői:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Részletesebb bevezetők:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Képletek:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Köszönetnyilvánítás

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Ez a könyv kiváló a magas szintű DevOps témában, és közvetlenül megalapozza a KPI-k kiválasztását. Az ezen az oldalon szereplő KPI-k összhangban vannak a könyv ajánlásaival.

## Nyilvántartás

- Csomag: queue-theory
- Verzió: 3.0.0
- Létrehozva: 2019-01-25T04:17:56Z
- Frissítve: 2026-11-23T15:33:48Z
- Licenc: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, vagy más feltételekért vegye fel velünk a kapcsolatot (részletek: [LICENSE.md](LICENSE.md))
- Kapcsolat: Joel Parker Henderson <joel@joelparkerhenderson.com>
