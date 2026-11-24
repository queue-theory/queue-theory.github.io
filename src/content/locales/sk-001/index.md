# Teória front

Teória front je matematické štúdium čakacích radov, čiže front. Teóriu front používame pri vývoji softvéru na účely, ako je analýza a optimalizácia našich postupov a procesov, napríklad rýchlosti reakcie zákazníckeho servisu, kanbanového plánovania v projektovom riadení, front správ na komunikáciu medzi procesmi a DevOps pipeline priebežného nasadzovania.

Obsah:

- [Úvod](#úvod)
  - [Rýchlosť reakcie zákazníckeho servisu](#rýchlosť-reakcie-zákazníckeho-servisu)
  - [Kanbanové plánovanie v projektovom riadení](#kanbanové-plánovanie-v-projektovom-riadení)
  - [Fronty správ na komunikáciu medzi procesmi](#fronty-správ-na-komunikáciu-medzi-procesmi)
  - [DevOps pipeline priebežného nasadzovania](#devops-pipeline-priebežného-nasadzovania)
- [Terminológia front](#terminológia-front)
  - [Typy front a typy obsluhy](#typy-front-a-typy-obsluhy)
- [Notácia teórie front](#notácia-teórie-front)
  - [Počet](#počet)
  - [Intenzita príchodov, intenzita obsluhy](#intenzita-príchodov-intenzita-obsluhy)
  - [Pomer vyťaženia alias intenzita prevádzky](#pomer-vyťaženia-alias-intenzita-prevádzky)
  - [Miery priepustnosti: celková miera, miera úspechu, miera zlyhaní, miera vynechaní](#miery-priepustnosti-celková-miera-miera-úspechu-miera-zlyhaní-miera-vynechaní)
  - [Rozlíšenie významov intenzity obsluhy](#rozlíšenie-významov-intenzity-obsluhy)
  - [Miera vynechaní](#miera-vynechaní)
  - [Pomer chýb](#pomer-chýb)
  - [Priebežný čas, čas kroku, pracovný čas, čas čakania](#priebežný-čas-čas-kroku-pracovný-čas-čas-čakania)
  - [Štandardná notácia](#štandardná-notácia)
- [Matematika front](#matematika-front)
  - [Krivka vyťaženia](#krivka-vyťaženia)
  - [Kingmanov vzorec](#kingmanov-vzorec)
  - [Združovanie a Erlang C](#združovanie-a-erlang-c)
- [Sledovanie aktivít](#sledovanie-aktivít)
  - [Príklady aktivít](#príklady-aktivít)
  - [Littleov zákon](#littleov-zákon)
  - [Kľúčové ukazovatele výkonnosti (KPI)](#kľúčové-ukazovatele-výkonnosti-kpi)
- [Metriky služieb](#metriky-služieb)
  - [Mean Time To Respond, Repair, Recover, Resolve](#mean-time-to-respond-repair-recover-resolve)
  - [Metriky DORA](#metriky-dora)
- [Front front](#front-front)
  - [Front front Double Diamond](#front-front-double-diamond)
  - [Lievikový front front](#lievikový-front-front)
- [Postrehy](#postrehy)
- [Doslov](#doslov)
  - [Pozri aj](#pozri-aj)
  - [Poďakovanie](#poďakovanie)
- [Sledovanie](#sledovanie)

## Úvod

Teóriu front používame v našich projektoch na mnohé účely:

- Rýchlosť reakcie zákazníckeho servisu

- Kanbanové plánovanie v projektovom riadení

- Fronty správ na komunikáciu medzi procesmi

- DevOps pipeline priebežného nasadzovania

### Rýchlosť reakcie zákazníckeho servisu

Napríklad chceme analyzovať, ako zákazníci žiadajú o pomoc s predajom a o podporu a ako rýchlo reagujeme.

Niektoré relevantné produkty sú napr. [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Kanbanové plánovanie v projektovom riadení

Napríklad chceme sledovať priebežné časy a časy postupu, keď sa nápad na novú funkciu vyvíja od návrhu po dodanie.

Niektoré relevantné produkty sú napr. [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Fronty správ na komunikáciu medzi procesmi

Napríklad chceme maximalizovať priepustnosť a minimalizovať tlak, keď jeden program posiela požiadavky inému programu.

Niektoré relevantné produkty sú napr. [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### DevOps pipeline priebežného nasadzovania

Napríklad chceme zabezpečiť, aby náš server priebežnej integrácie mal kapacitu na testovanie nášho softvéru a jeho následné nasadenie.

Niektoré relevantné produkty sú napr. [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Terminológia front

Terminológia front je rozsiahla téma. Táto časť obsahuje niektoré z našich bežných pojmov. V príkladoch použijeme predstavu zákazníka, ktorý čaká v rade.

### Typy front a typy obsluhy

Typy front a typy obsluhy opisujú, ako front vyberá, ktoré položky spracuje.

- First In First Out (FIFO): obslúžiť zákazníka, ktorý čaká najdlhšie.

- Last In First Out (LIFO): obslúžiť zákazníka, ktorý čaká najkratšie.

- Priorita: obsluhovať zákazníkov podľa úrovne ich priority; tieto úrovne môžu vychádzať zo statusu, naliehavosti, platby atď.

- Shortest Job First (SJF): obslúžiť zákazníka, ktorý potrebuje najmenší objem obsluhy.

- Longest Job First (LJF): obslúžiť zákazníka, ktorý potrebuje najväčší objem obsluhy.

- Shortest Remaining Processing Time (SRPT): ako SJF, ale novo prichádzajúca krátka úloha môže predbehnúť dlhšiu úlohu, ktorá sa už obsluhuje.

- Round Robin: obsluhovať každého zákazníka krátky časový úsek, potom prejsť na ďalšieho zákazníka a opakovať.

- Time Sharing alias Processor Sharing (PS): obsluhovať všetkých naraz; kapacita obsluhy sa rovnomerne rozdeľuje medzi všetkých čakajúcich.

SJF a SRPT minimalizujú priemerné čakanie, ale dlhé úlohy môžu nechať hladovať donekonečna, preto reálne systémy často pridávajú starnutie (aging) alebo limity priority.

## Notácia teórie front

Teória front používa notáciu s gréckymi písmenami.

Naše tímy používajú časť bežne rozšírenej notácie; pridávame aj vlastnú notáciu, ktorá nám pomáha pri softvérových projektoch.

Prevodník z našej notácie na štandardnú učebnicovú notáciu:

| Naša | Štandardná | Význam                                                                         |
| ---- | ---------- | ------------------------------------------------------------------------------ |
| κ    | L          | priemerný počet položiek v systéme, čakajúcich plus rozpracovaných             |
| λ    | λ          | intenzita príchodov položiek, ktoré vstupujú do systému                        |
| μ    | μ          | intenzita obsluhy alias kapacita: ako rýchlo pracuje jeden server, keď je vyťažený |
| ρ    | ρ          | vyťaženie: podiel času, keď sú servery vyťažené, λ / (c μ)                     |
| χ    | X          | priepustnosť alias intenzita odchodov: pozorovaný výstup z akéhokoľvek dôvodu  |
| α    | žiadna     | miera úspechu: pozorovaný výstup, ktorý dopadne správne                        |
| β    | žiadna     | miera zlyhaní: pozorovaný výstup, ktorý dopadne nesprávne                      |
| δ    | žiadna     | miera vynechaní alias miera odpadnutia: položky, ktoré vstúpili a odišli neobslúžené |
| ε    | žiadna     | pomer chýb β / (α + β)                                                         |
| τ    | W          | priemerný čas v systéme alias priebežný čas                                    |
| ω    | Wq         | priemerný čas čakania vo fronte                                                |
| φ    | S          | priemerný čas obsluhy alias pracovný čas; μ = 1 / S                            |
| θ    | žiadna     | čas kroku medzi dokončeniami; priemerný čas kroku ≈ 1 / χ v ustálenom stave    |

Pri čítaní iných zdrojov si dajte pozor na kolízie symbolov: σ zvyčajne znamená smerodajnú odchýlku, preto pre mieru vynechaní používame δ, a θ v modeloch call centier Erlang-A často znamená mieru opustenia, kým my θ používame pre čas kroku.

### Počet

Položky počítame často a používame túto notáciu:

- κ (kappa): počet položiek v systéme, teda čakajúce položky plus rozpracované položky

Príklad:

- κ = 100 znamená, že v systéme je 100 položiek.

- κ > 100 znamená, že v systéme je viac ako 100 položiek.

- κ ≫ 100 znamená, že v systéme je oveľa viac ako 100 položiek.

Počet ako κ = 100 je snímka v jednom okamihu. V Littleovom zákone κ znamená dlhodobý priemerný počet, čo je učebnicové L. Učebnicový symbol iba pre položky čakajúce v rade je Lq.

### Intenzita príchodov, intenzita obsluhy

Najdôležitejšia notácia:

- λ (lambda): intenzita príchodov. Meria, ako rýchlo prichádzajú do frontu nové položky.

- μ (mí): intenzita obsluhy alias kapacita. Meria, ako rýchlo dokáže jeden server spracúvať položky, keď je vyťažený.

Príklady všeobecných pravidiel pre tradičné fronty s jedným serverom:

- λ < μ znamená, že intenzita príchodov je menšia ako intenzita obsluhy; front je stabilný, teda kolíše okolo konečnej priemernej veľkosti.

- λ = μ znamená, že intenzita príchodov sa rovná intenzite obsluhy; pri akejkoľvek náhodnosti sa front posúva a rastie bez obmedzenia.

- λ > μ znamená, že intenzita príchodov je väčšia ako intenzita obsluhy; front rovnomerne rastie, približne o λ − μ položiek za jednotku času.

Intuitívna predstava, že „λ = μ udržiava front v rovnakej veľkosti“, platí iba vtedy, keď sú príchody a obsluha dokonale pravidelné ako metronóm. Reálne príchody prichádzajú v nárazoch, takže čas nečinnosti stratený počas útlmu sa už nikdy nedá dohnať a front počas ďalšieho nárazu rastie.

Uvedomte si, že niektorí odborníci na teóriu front používajú výraz „intenzita obsluhy“ vo význame pozorovaného výstupu, nie kapacity; pozrite si [rozlíšenie významov intenzity obsluhy](#rozlíšenie-významov-intenzity-obsluhy).

### Pomer vyťaženia alias intenzita prevádzky

Najdôležitejšia notácia, ktorá zhŕňa front:

- ρ (ró): pomer vyťaženia, teda podiel času, keď sú servery vyťažené = λ / μ pre jeden server alebo λ / (c μ) pre c serverov

Príklady:

- ρ < 1 znamená, že servery majú voľnú kapacitu; front je stabilný. Čím viac sa ρ blíži k 1, tým dlhšie je čakanie; pozrite si [krivku vyťaženia](#krivka-vyťaženia).

- ρ = 1 znamená, že servery sú vyťažené neustále; front je nestabilný a rastie bez obmedzenia.

- ρ > 1 znamená, že príchody prevyšujú kapacitu; front sa zväčšuje.

### Miery priepustnosti: celková miera, miera úspechu, miera zlyhaní, miera vynechaní

Miery priepustnosti merajú pozorovaný výstup, teda položky, ktoré skutočne opustia front. Delia sa do štyroch širokých kategórií:

- χ (chí): celková miera. Meria, koľko položiek za jednotku času opustí front z akéhokoľvek dôvodu: úspech, zlyhanie, vynechanie atď.

- α (alfa): miera úspechu. Meria, koľko položiek za časové obdobie dopadne správne, napr. správne, úplné, prijaté.

- β (beta): miera zlyhaní. Meria, koľko položiek za časové obdobie dopadne nesprávne, napr. nesprávne, neúplné, zamietnuté.

- δ (delta): miera vynechaní alias miera odpadnutia. Meria, koľko položiek za časové obdobie vstúpi do frontu a potom odíde bez obsluhy, napr. opustenia, odstúpenia.

Celková miera = miera úspechu + miera zlyhaní + miera vynechaní:

- χ = α + β + δ (vyslovuje sa: chí sa rovná alfa plus beta plus delta)

Každá položka započítaná v χ vstúpila do systému, takže v ustálenom stave sa celková miera rovná intenzite príchodov: χ ≈ λ. Preto miery priepustnosti merajú výstup, nie kapacitu.

### Rozlíšenie významov intenzity obsluhy

V závislosti od kontextu a odborníka môže výraz „intenzita obsluhy“ znamenať buď „celkovú mieru“, alebo „mieru úspechu“.

Má to historické korene a môže to viesť k nejasnostiam a chybám, najmä v kontextoch a u odborníkov, ktorí používajú teóriu front tam, kde je výrazná potreba sledovať zlyhania a vynechania.

- Teoretický pohľad: Intenzita obsluhy je čisté meranie rýchlosti (napr. úloh za sekundu) bez ohľadu na to, či sú úlohy úspechy, zlyhania, vynechania atď.

- Procesný pohľad: Intenzita obsluhy zahŕňa všetko, čo front spracúva, teda úspechy alebo zlyhania, ale nezahŕňa vynechania.

- Technologický pohľad: V aplikovaných odboroch, ako je softvérové inžinierstvo, intenzita obsluhy meria iba úspechy, kým miera chýb meria zlyhania a miera vynechaní meria odpadnutia.

Preto ponechávame μ pre kapacitu a popri nej pridávame miery pozorovaného výstupu, namiesto toho, aby sme ju nahradili:

- μ (mí): intenzita obsluhy alias kapacita. Meria, ako rýchlo dokáže jeden server spracúvať položky, keď je vyťažený.

- χ (chí): celková miera. Meria, koľko položiek za jednotku času opustí front z akéhokoľvek dôvodu: úspech, zlyhanie, vynechanie atď.

- α (alfa): miera úspechu. Meria, koľko položiek za časové obdobie dopadne správne, napr. správne, úplné, prijaté.

Prečo nenahradiť μ symbolom χ alebo α? V stabilnom fronte každá položka, ktorá vstúpi, nakoniec aj odíde, takže χ ≈ λ. Potom λ / χ ≈ 1 bez ohľadu na zaťaženie, čo nehovorí nič o tom, ako veľmi sú servery vyťažené. Vyťaženie potrebuje kapacitu: ρ = λ / (c μ), čo sa rovná podielu času, keď sú servery vyťažené.

### Miera vynechaní

Podrobnosti o miere vynechaní:

- δ (delta): miera vynechaní alias miera odpadnutia. Meria, koľko položiek vstúpi do frontu a potom odíde nespracovaných.

Vynechanie nastane, keď položka vstúpi do frontu a potom odíde bez akéhokoľvek významného spracovania:

- Opustenie (abandoning): keď sa zákazník zaradí do frontu a potom z akéhokoľvek dôvodu odíde.

- Odstúpenie (reneging): keď sa zákazník, ktorý už čakal, rozhodne odísť, pretože stratil príliš veľa času.

Dve súvisiace správania nie sú vynechania:

- Odmietnutie (balking): keď sa zákazník rozhodne nezaradiť do frontu, pretože hrozí, že čakanie bude príliš dlhé. Odmietnutá položka nikdy nevstúpi do systému, takže je mimo hranice systému: nezapočítava sa do λ, χ ani δ. Ak sú odmietnutia dôležité, napríklad ako stratené predaje, počítajte ich samostatne ako odvrátené príchody.

- Prestupovanie (jockeying): keď zákazník prechádza medzi paralelnými frontami, napríklad pokladňami, aby získal kratšie čakanie.

### Pomer chýb

Najdôležitejšia notácia, ktorá zhŕňa úspešnosť frontu:

- ε (epsilon): pomer chýb = počet zlyhaní / (počet úspechov + počet zlyhaní) = β / (α + β)

Vynechania sú vylúčené, pretože vynechaná položka nikdy nebola obslúžená, takže nebola ani správna, ani nesprávna. Vynechania sledujte samostatne pomocou δ.

Príklady:

- ε = 0 znamená žiadne chyby.

- ε = 0,1 znamená, že 10 % obslúh má chybu.

- ε = 1 znamená, že každá obsluha má chybu.

### Priebežný čas, čas kroku, pracovný čas, čas čakania

Sledujeme štyri časy:

- τ (tau): priebežný čas = od začiatku frontu po koniec frontu

- θ (théta): čas kroku = od jedného dokončenia po ďalšie dokončenie; jeden čas kroku je jedna medzera a priemerný čas kroku je priemerná medzera

- φ (fí): pracovný čas = čas strávený skutočnou prácou alias čas spracovania

- ω (omega): čas čakania = čas strávený bez skutočnej práce alias čas nečinnosti

Príklady:

- τ = 5 s znamená, že položka je pridaná do frontu a obslúžená o 5 sekúnd neskôr.

- ω = 4 s znamená, že položka čaká vo fronte 4 sekundy a potom sa začne práca.

- φ = 1 s znamená, že položka si vyžaduje 1 sekundu práce a potom je hotová.

- θ = 1 s znamená, že medzi jedným dokončením a ďalším dokončením uplynie 1 sekunda.

Vzťahy:

- τ = ω + φ: priebežný čas je čas čakania plus pracovný čas. V príkladoch 5 s = 4 s + 1 s.

- priemerné θ ≈ 1 / χ: v ustálenom stave je priemerný čas kroku prevrátenou hodnotou celkovej miery. Jedna medzera o miere veľa nevypovedá; priemer mnohých medzier áno. Ak je v príkladoch priemerný čas kroku 1 s, potom χ ≈ 1 položka za sekundu.

### Štandardná notácia

Štandardná notácia teórie front opisuje front pomocou Kendallovej notácie, zapísanej ako A/S/c/K/N/D:

- A: proces príchodov, teda rozdelenie času medzi príchodmi.

- S: proces obsluhy, teda rozdelenie časov obsluhy.

- c: počet serverov.

- K: kapacita, teda maximálny počet položiek povolených v systéme, čakajúcich alebo obsluhovaných, predtým ako sú nové príchody odmietnuté.

- N: populácia, teda počet potenciálnych zákazníkov.

- D: disciplína, teda typ frontu, napríklad FIFO alebo LIFO.

Bežné písmená pre A a S:

- M: markovovský alias bez pamäti, teda exponenciálne časy, ktoré vznikajú z poissonovských príchodov.

- D: deterministický, teda konštantné časy.

- G: všeobecný, teda akékoľvek rozdelenie.

Keď sú posledné tri vynechané, predvolené hodnoty sú K = ∞, N = ∞, D = FIFO. Napríklad „M/M/1“ znamená poissonovské príchody, exponenciálne časy obsluhy, jeden server, neobmedzenú kapacitu, neobmedzenú populáciu a first in first out.

Štandardná notácia tiež používa n na označenie počtu položiek v systéme.

## Matematika front

Matematické časti používajú učebnicové symboly, aby ste ich mohli porovnať s inými zdrojmi: S je priemerný čas obsluhy, čo je naše φ, a μ = 1 / S je kapacita jedného servera. Pozrite si prevodník v časti [notácia teórie front](#notácia-teórie-front).

### Krivka vyťaženia

Najdôležitejší výsledok teórie front: keď sa vyťaženie blíži k 100 %, čas čakania rastie bez obmedzenia a najrýchlejšie rastie na konci.

Pre front M/M/1, kde S je priemerný čas obsluhy:

- Priebežný čas τ = S / (1 − ρ)

- Čas čakania ω = S × ρ / (1 − ρ)

| Vyťaženie ρ | Priebežný čas τ | Čas čakania ω |
| ----------- | --------------- | ------------- |
| 50 %        | 2 × S           | 1 × S         |
| 70 %        | 3,3 × S         | 2,3 × S       |
| 80 %        | 5 × S           | 4 × S         |
| 90 %        | 10 × S          | 9 × S         |
| 95 %        | 20 × S          | 19 × S        |
| 99 %        | 100 × S         | 99 × S        |

Príklad: revízia kódu si vyžaduje 1 hodinu práce. Ak sú revízori vyťažení na 80 %, revízia trvá od požiadavky po dokončenie približne 5 hodín. Ak sú revízori vyťažení na 95 %, trvá približne 20 hodín, hoci revízori sú vyťažení iba o 15 percentuálnych bodov viac.

Preto je „udržiavať všetkých na 100 % vyťažených“ receptom na dlhé priebežné časy a preto [postrehy](#postrehy) nižšie varujú pred plánovaním vysokého vyťaženia.

### Kingmanov vzorec

Kingmanov vzorec, alias rovnica VUT, aproximuje čas čakania pre front s jedným serverom a ľubovoľným rozdelením príchodov a obsluhy (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Tri faktory sú:

- U: faktor vyťaženia ρ / (1 − ρ), čo je vyššie uvedená krivka vyťaženia.

- V: faktor variability (ca² + cs²) / 2, kde ca je variačný koeficient času medzi príchodmi a cs je variačný koeficient časov obsluhy. Variačný koeficient je smerodajná odchýlka vydelená priemerom.

- T: časový faktor S, priemerný čas obsluhy.

Príklad: pre front M/M/1 platí ca = cs = 1, takže V = 1, a vzorec dáva rovnaký čas čakania ako krivka vyťaženia. Ak pracovné položky zjednotíte, napríklad rozdelením veľkých tiketov tak, aby cs kleslo z 1 takmer na 0, potom V klesne približne na 0,5 a čas čakania sa pri rovnakom vyťažení zhruba skráti na polovicu.

Kingmanov vzorec ukazuje tri páky na skrátenie času čakania:

- Znížiť vyťaženie, napríklad pridaním kapacity alebo obmedzením rozpracovanej práce.

- Znížiť variabilitu, napríklad menšími dávkami, jednotnejšími pracovnými položkami alebo plynulejšími príchodmi.

- Skrátiť čas obsluhy, napríklad automatizáciou.

### Združovanie a Erlang C

Jeden spoločný front, ktorý zásobuje viacero serverov, je lepší ako samostatné fronty, z ktorých každý zásobuje jeden server. Preto banky používajú jeden rad, ktorý zásobuje mnohé priehradky, a preto spoločný front podpory prekonáva fronty pre jednotlivých agentov.

Príklad: dva servery spracujú každý jednu položku za 1 hodinu a položky prichádzajú celkovo rýchlosťou 1,6 položky za hodinu, takže vyťaženie je 80 %.

- Samostatné fronty: každý server je front M/M/1 s 0,8 príchodu za hodinu, takže priebežný čas je 1 / (1 − 0,8) = 5 hodín.

- Združený front: oba servery zdieľajú front M/M/2, takže priebežný čas je približne 2,8 hodiny, čo je asi o 44 % menej, s rovnakými ľuďmi a rovnakou prácou.

Vzorec Erlang C počíta pravdepodobnosť, že prichádzajúca položka musí čakať vo fronte M/M/c, s ponúkaným zaťažením a = λ / μ a vyťažením ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Čas čakania ω = P(wait) / (c μ − λ)

Tímy zákazníckeho servisu používajú Erlang C na rozhodnutie, koľko agentov nasadiť, aby splnili cieľ, napríklad „80 % hovorov prijatých do 20 sekúnd“.

Združovanie má svoje hranice: najlepšie funguje, keď ktorýkoľvek server dokáže spracovať ktorúkoľvek položku. Ak položky vyžadujú špecialistov, združený front môže potrebovať pravidlá smerovania.

## Sledovanie aktivít

### Príklady aktivít

Predpokladajme, že máme niečo, čo chceme sledovať, a nazveme to všeobecne, napríklad „Aktivita“, so skratkou „A“.

Na opis aktivity a toho, ako sa pohybuje frontom, môžeme efektívne použiť notáciu front.

Príklady:

- Aκ: počet aktivít: koľko položiek je vo fronte.

- Aλ: intenzita príchodov aktivít: koľko položiek prichádza za jednotku času.

- Aχ: celková miera aktivít: koľko položiek opustí front za jednotku času.

- Aα: miera úspechu aktivít: koľko položiek je správnych za jednotku času.

- Aβ: miera zlyhaní aktivít alias miera chýb: koľko položiek je nesprávnych za jednotku času.

- Aμ: intenzita obsluhy aktivít alias kapacita: koľko položiek dokáže jeden server dokončiť za jednotku času, keď je vyťažený.

- Aδ: miera vynechaní aktivít alias miera odpadnutia: koľko položiek je opustených za jednotku času.

- Aρ: pomer vyťaženia aktivít: podiel dostupného času, keď sú servery vyťažené, teda čas vyťaženia ÷ dostupný čas, alebo λ / (c μ).

- Aε: pomer chýb aktivít: koľko položiek je dokončených s chybami v porovnaní s celkovým počtom.

- Aτ: priebežný čas aktivít: koľko času uplynie od vyžiadania po dokončenie.

- Aω: čas čakania aktivít: koľko času uplynie od vyžiadania po začatie.

- Aφ: pracovný čas aktivít: koľko času uplynie od začatia po dokončenie.

- Aθ: čas kroku aktivít: koľko času uplynie od dokončenia po ďalšie dokončenie.

### Littleov zákon

Littleov zákon je veta Johna Littla, ktorá hovorí: dlhodobý priemerný počet L zákazníkov v stacionárnom systéme sa rovná dlhodobej priemernej efektívnej intenzite príchodov λ vynásobenej priemerným časom W, ktorý zákazník strávi v systéme.

Príklad notácie:

- L: dlhodobý priemerný počet zákazníkov v systéme. Uprednostňujeme κ (kappa).

- λ: dlhodobá priemerná efektívna intenzita príchodov, teda položky, ktoré skutočne vstúpia do systému, bez odmietnutí.

- W: dlhodobý priemerný čas, ktorý je položka v systéme. Uprednostňujeme τ (tau).

- L = λ W je Littleov zákon. Uprednostňujeme κ = λ τ (kappa = lambda \* tau).

Littleov zákon je pozoruhodne všeobecný: platí bez ohľadu na rozdelenie príchodov, rozdelenie obsluhy, počet serverov či typ frontu.

Predpoklady Littleovho zákona:

- Všetky jednotky merania sú konzistentné.

- Systém je stabilný, teda priemerná intenzita príchodov sa počas obdobia merania rovná priemernej intenzite odchodov a počet položiek je na začiatku a na konci približne rovnaký.

- Položky, ktoré odídu predčasne, napríklad odstúpením, sa buď konzistentne započítavajú do λ aj τ, alebo sa z oboch konzistentne vylučujú.

Príklad: tím má v priemere κ = 20 rozpracovaných tiketov a tikety prichádzajú rýchlosťou λ = 4 za týždeň; v ustálenom stave tím tiež dokončí χ = 4 za týždeň. Priemerný tiket teda trvá τ = κ / λ = 5 týždňov. Ak chcete skrátiť priebežný čas na polovicu bez rýchlejšej práce, znížte rozpracovanú prácu na polovicu.

### Kľúčové ukazovatele výkonnosti (KPI)

O aktivitách vo fronte zvyčajne sledujeme mnoho vecí a výsledky chceme zhrnúť výberom krátkeho zoznamu tých najrelevantnejších pre naše projekty.

Vytvorili sme mnoho projektov a domnievame sa, že najcennejšie súhrnné ukazovatele sú:

- Dτ = priebežný čas dodania. Produktové tímy môžu hovoriť „od konceptu po zákazníka“ alebo „od nápadu po implementáciu“.

- Dα = miera úspechu dodania. DevOps tímy môžu hovoriť „frekvencia nasadení“ alebo „dodávame X-krát denne“.

- Dε = pomer chýb dodania. Tímy kvality môžu hovoriť „miera zlyhania zmien“ alebo „percento návratov“.

- Rτ = priebežný čas obnovy. Inžinieri spoľahlivosti lokality (SRE) môžu hovoriť „čas obnovy po neúspešnom nasadení“ alebo „mean time to restore (MTTR)“.

## Metriky služieb

Užitočné pojmy:

- **Service Level Indicator (SLI):** je metrika (napr. 99,9 % dostupnosti)
- **Service Level Objective (SLO):** interný cieľ pre túto metriku (napr. cieľ 99,95 % dostupnosti)
- **Service Level Agreement (SLA):** formálny, zmluvný prísľub zákazníkovi (napr. 99,9 % dostupnosti so sankciami pri nesplnení).

### Mean Time To Respond, Repair, Recover, Resolve

MTTR predstavuje štyri rôzne merania:

| Metrika                  | Zameranie            | Meria                                         | Začiatok                                 | Koniec                                  |
| ------------------------ | -------------------- | --------------------------------------------- | ---------------------------------------- | --------------------------------------- |
| **Mean Time To Respond** | Prvotná reakcia      | Čas do potvrdenia a začatia krokov            | Keď je incident zistený/nahlásený        | Keď na ňom tím začne pracovať           |
| **Mean Time To Repair**  | Technická oprava     | Čas na opravu pokazenej položky               | Keď sa začnú opravné práce               | Keď je položka opravená                 |
| **Mean Time To Recover** | Obnovenie služby     | Čas na obnovenie plnej služby                 | Keď sa začne incident/výpadok            | Keď je služba plne funkčná              |
| **Mean Time To Resolve** | Úplné vyriešenie     | Celkový čas od zistenia po uzavretie          | Keď je incident zistený                  | Keď je incident úplne uzavretý          |

**Kľúčové rozdiely:**

**Respond** meria pripravenosť tímu a účinnosť upozornení. Krátky čas reakcie znamená, že vaše monitorovanie a procesy pohotovosti fungujú dobre, aj keď samotná oprava trvá dlhšie.

**Repair** je úzko technický — ako dlho skutočne trvá oprava pokazenej veci, keď na nej už pracujete? Nezahŕňa čas zistenia, triedenie ani overenie.

**Recover** sa týka dostupnosti služby z pohľadu zákazníka. Systém môže byť „opravený“, ale ešte nie „obnovený“, ak ešte musíte obnoviť údaje, zahriať vyrovnávacie pamäte alebo overiť funkčnosť.

**Resolve** je najkomplexnejší — zachytáva celý životný cyklus incidentu od prvého zistenia cez overenie po incidente až po uzavretie.

Príklad scenára:

- 2:00 — Začína sa výpadok
- 2:05 — Spustí sa upozornenie, incident je zistený
- 2:15 — Pohotovosť potvrdí a začne pracovať → Čas reakcie: 10 min (2:05 až 2:15)
- 2:45 — Zistená hlavná príčina, oprava nasadená → Čas opravy: 30 min (2:15 až 2:45)
- 3:00 — Overené, že služba funguje pre používateľov → Čas obnovy: 60 min (2:00 až 3:00)
- 3:30 — Tiket incidentu uzavretý po overení → Čas vyriešenia: 85 min (2:05 až 3:30)

Súvisiace metriky:

- MTBF (mean time before failure, stredný čas pred poruchou)
- MTTF (mean time to failure, stredný čas do poruchy)
- MTTA (mean time to acknowledge, stredný čas do potvrdenia)

### Metriky DORA

Metriky DevOps Research and Assessment (DORA) sú priemyselným štandardom kľúčových ukazovateľov výkonnosti (KPI) špeciálne pre DevOps tímy v softvérovom inžinierstve. Pozrite si [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA teraz používa päť metrík v dvoch skupinách.

Metriky priepustnosti:

- **Change Lead Time** (priebežný čas zmeny) - Čas na implementáciu, otestovanie a dodanie kódu pre funkciu (merané od commitu po nasadenie do produkcie). Presne určte, čo myslíte začiatkom a koncom. Niektoré tímy napríklad radi merajú od chvíle, keď vývojár začne pracovať na tikete, po chvíľu, keď vývojár odošle prácu do procesu priebežnej integrácie; tento prístup býva účinnejší na meranie produktivity jednotlivca.

- **Deployment Frequency** (frekvencia nasadení) - Počet nasadení za dané časové obdobie. Presne určte, čo myslíte nasadením a ako sledujete frekvenciu. Niektoré tímy napríklad nasadzujú na flotilu produkčných serverov a sledujú celé zavedenie, kým iné tímy nasadzujú na jediný server používateľského akceptačného testovania (UAT) a sledujú, kedy projektový manažér pošle používateľom e-mailové oznámenie, aby vyskúšali testovanie.

- **Failed Deployment Recovery Time** (čas obnovy po neúspešnom nasadení) - Čas potrebný na zotavenie z nasadenia, ktoré spôsobí zlyhanie v produkcii. Predtým sa nazýval Mean Time to Recovery (MTTR) alebo Time to Restore Service. Presne určte, čo myslíte obnovou. Niektoré tímy napríklad považujú obnovu za úplné vyriešenie, teda celkový čas od zistenia incidentu po jeho úplné uzavretie; tento prístup lepšie vystihuje Mean Time To Resolve.

Metriky nestability:

- **Change Failure Rate** (miera zlyhania zmien) - Percento nasadení, ktoré spôsobia zlyhanie v produkcii a vyžadujú okamžitú nápravu, napríklad návrat (rollback) alebo rýchlu opravu (hotfix). Presne určte, čo myslíte zlyhaním. Niektoré tímy napríklad za zlyhanie považujú aj situáciu, keď začnú pracovať na tikete a potom zistia, že tiket neobsahuje dostatok informácií na pokračovanie, takže tím tiket vráti tímu špecifikácie.

- **Deployment Rework Rate** (miera prepracovania nasadení) - Percento nasadení, ktoré sú neplánované, napríklad na opravu produkčného incidentu. Ide o neplánované nasadenia vydelené celkovým počtom nasadení. DORA pridala túto metriku v roku 2024.

Staršie správy DORA sa zaoberali aj metrikou **Reliability** (spoľahlivosť) ako metrikou prevádzkovej výkonnosti: širším, často kvalitatívnym hodnotením konzistentnosti služby, napríklad dostupnosti, prevádzkyschopnosti, latencie, presnosti a cieľov úrovne služieb. Spoľahlivosť pomáha ukázať, že vysoká rýchlosť nejde na úkor schopností systému.

## Front front

Teóriu front je ľahké rozšíriť na front front, napríklad na proces vyššej úrovne, ktorý obsahuje fázy, etapy alebo brány nižšej úrovne.

### Front front Double Diamond

Uvažujme napríklad o modeli inovačného procesu „Double Diamond“, ktorý určuje štyri fázy:

1. Objaviť: Pochopiť problém namiesto toho, aby sme len predpokladali, o čo ide.
2. Definovať: S poznatkami z fázy objavovania definovať výzvu.
3. Rozvinúť: Dať rôzne odpovede na jasne definovaný problém.
4. Dodať: Otestovať rôzne riešenia v malom rozsahu a potom ich zlepšiť.

Teória front to môže modelovať ako jeden procesný front, ktorý obsahuje štyri fázové fronty:

- Intenzita príchodov procesu je intenzita príchodov fázy 1.
- Miera úspechu procesu je miera úspechu fázy 4.
- Počet chýb procesu je súčet počtov chýb jednotlivých fáz.
- Počet vynechaní procesu je súčet počtov vynechaní jednotlivých fáz.
- Priebežný čas procesu je súčet priebežných časov jednotlivých fáz.
- Maximálna priepustnosť procesu je priepustnosť najpomalšej fázy, alias úzkeho hrdla.

### Lievikový front front

V našej praxi často používame slovo „lievik“ na voľný opis frontu front, ktorý má tendenciu znižovať počet položiek v každej fáze:

- Front náboru, ktorý používa fázu oslovenia, fázu pohovoru a fázu ponuky. Pri tomto druhu frontu sa snažíme maximalizovať intenzitu príchodov fázy 1, teda zvýšiť oslovenie, napríklad pomocou propagácie.

- Nákupný front, ktorý používa fázu vyhľadávania zákazníka, fázu nákupného košíka a fázu platby. Pri tomto druhu frontu sa snažíme minimalizovať mieru vynechaní fázy 2, teda znížiť opúšťanie košíkov, napríklad pomocou pripomienok.

- Programovací front, ktorý používa fázu integrácie, fázu používateľskej akceptácie a fázu zavedenia do produkcie. Pri tomto druhu frontu sa snažíme minimalizovať mieru chýb fázy zavedenia do produkcie, napríklad pomocou kanárikovej telemetrie.

## Postrehy

Sedem postrehov k teórii front od Boba Wescotta, autora knihy „The Every Computer Performance Book“ (pozrite si aj [Kottkeho zhrnutie](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Čím pomalšie je centrum obsluhy, tým nižšie maximálne vyťaženie by ste mali plánovať pri špičkovom zaťažení.

2. Je veľmi ťažké využiť posledných 15 % čohokoľvek.

3. Čím bližšie ste k hrane, tým vyššia je cena za omyl.

4. Nárast času odozvy je obmedzený počtom tých, ktorí môžu čakať.

5. Pamätajte, že ide o priemer, nie o maximum.

6. Pri viacerých centrách obsluhy existuje ľudský efekt popierania.

7. Malé zlepšenia ukazujte v čo najlepšom svetle.

## Doslov

### Pozri aj

Wikipédia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Oblasti na Wikipédii, v ktorých používame fronty v mnohých projektoch:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Úvody od Johna D. Cooka:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Podrobnejšie úvody:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Vzorce:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Poďakovanie

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Táto kniha je vynikajúca pre DevOps na vysokej úrovni a priamo ovplyvňuje náš výber KPI. KPI na tejto stránke sú v súlade s odporúčaniami knihy.

## Sledovanie

- Balík: queue-theory
- Verzia: 3.0.0
- Vytvorené: 2019-01-25T04:17:56Z
- Aktualizované: 2026-11-23T15:33:48Z
- Licencia: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0` alebo nás, prosím, kontaktujte kvôli iným podmienkam (pozrite si [LICENSE.md](LICENSE.md))
- Kontakt: Joel Parker Henderson <joel@joelparkerhenderson.com>
