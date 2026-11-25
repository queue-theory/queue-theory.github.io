# Rindu teorija

Rindu teorija ir gaidīšanas rindu jeb rindu matemātiska izpēte. Mēs izmantojam rindu teoriju savā programmatūras izstrādē, piemēram, lai analizētu un optimizētu savu praksi un procesus: klientu apkalpošanas reaģētspēju, projektu vadības „Kanban“ plānošanu, starpprocesu saziņas ziņojumu rindas un „DevOps“ nepārtrauktās izvietošanas konveijerus.

Saturs:

- [Ievads](#ievads)
  - [Klientu apkalpošanas reaģētspēja](#klientu-apkalpošanas-reaģētspēja)
  - [Projektu vadības „Kanban“ plānošana](#projektu-vadības-kanban-plānošana)
  - [Starpprocesu saziņas ziņojumu rindas](#starpprocesu-saziņas-ziņojumu-rindas)
  - [„DevOps“ nepārtrauktās izvietošanas konveijeri](#devops-nepārtrauktās-izvietošanas-konveijeri)
- [Rindu terminoloģija](#rindu-terminoloģija)
  - [Rindu veidi un apkalpošanas veidi](#rindu-veidi-un-apkalpošanas-veidi)
- [Rindu teorijas apzīmējumi](#rindu-teorijas-apzīmējumi)
  - [Skaits](#skaits)
  - [Ierašanās ātrums, apkalpošanas ātrums](#ierašanās-ātrums-apkalpošanas-ātrums)
  - [Noslodzes koeficients jeb satiksmes intensitāte](#noslodzes-koeficients-jeb-satiksmes-intensitāte)
  - [Caurlaidspējas ātrumi: kopējais ātrums, pabeigšanas ātrums, veiksmes ātrums, neveiksmes ātrums, izlaišanas ātrums](#caurlaidspējas-ātrumi-kopējais-ātrums-pabeigšanas-ātrums-veiksmes-ātrums-neveiksmes-ātrums-izlaišanas-ātrums)
  - [Apkalpošanas ātruma jēdziena precizējums](#apkalpošanas-ātruma-jēdziena-precizējums)
  - [Izlaišanas ātrums](#izlaišanas-ātrums)
  - [Kļūdu attiecība](#kļūdu-attiecība)
  - [Izpildes laiks, soļa laiks, darba laiks, gaidīšanas laiks](#izpildes-laiks-soļa-laiks-darba-laiks-gaidīšanas-laiks)
  - [Kendala apzīmējumi](#kendala-apzīmējumi)
- [Rindu matemātika](#rindu-matemātika)
  - [Noslodzes līkne](#noslodzes-līkne)
  - [Kingmena formula](#kingmena-formula)
  - [Apvienošana un „Erlang C“](#apvienošana-un-erlang-c)
- [Darbību uzskaite](#darbību-uzskaite)
  - [Darbību piemēri](#darbību-piemēri)
  - [Litla likums](#litla-likums)
  - [Galvenie darbības rādītāji (KPI)](#galvenie-darbības-rādītāji-kpi)
- [Pakalpojumu metrikas](#pakalpojumu-metrikas)
  - [Vidējais reaģēšanas, labošanas, atkopšanās, atrisināšanas laiks](#vidējais-reaģēšanas-labošanas-atkopšanās-atrisināšanas-laiks)
  - [DORA metrikas](#dora-metrikas)
- [Rindu rinda](#rindu-rinda)
  - [„Double Diamond“ rindu rinda](#double-diamond-rindu-rinda)
  - [Piltuves rindu rinda](#piltuves-rindu-rinda)
- [Atziņas](#atziņas)
- [Epilogs](#epilogs)
  - [Skatiet arī](#skatiet-arī)
  - [Pateicības](#pateicības)
- [Projekta informācija](#projekta-informācija)

## Ievads

Mēs izmantojam rindu teoriju savos projektos daudziem mērķiem:

- Klientu apkalpošanas reaģētspēja

- Projektu vadības „Kanban“ plānošana

- Starpprocesu saziņas ziņojumu rindas

- „DevOps“ nepārtrauktās izvietošanas konveijeri

### Klientu apkalpošanas reaģētspēja

Piemēram, mēs vēlamies analizēt, kā klienti lūdz palīdzību pārdošanas un atbalsta jautājumos un cik ātri mēs reaģējam.

Daži saistīti produkti, piem., [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Projektu vadības „Kanban“ plānošana

Piemēram, mēs vēlamies sekot izpildes laikiem un virzības laikiem, kamēr jaunas funkcijas ideja attīstās no projektēšanas līdz piegādei.

Daži saistīti produkti, piem., [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Starpprocesu saziņas ziņojumu rindas

Piemēram, mēs vēlamies maksimāli palielināt caurlaidspēju un maksimāli samazināt spiedienu, kad viena programma sūta pieprasījumus citai programmai.

Daži saistīti produkti, piem., [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### „DevOps“ nepārtrauktās izvietošanas konveijeri

Piemēram, mēs vēlamies nodrošināt, ka mūsu nepārtrauktās integrācijas serverim ir pietiekama jauda, lai testētu mūsu programmatūru un pēc tam to izvietotu.

Daži saistīti produkti, piem., [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Rindu terminoloģija

Rindu terminoloģija ir plaša tēma. Šajā sadaļā ir daļa no mūsu biežāk lietotās terminoloģijas. Piemēros izmantosim ideju par klientu, kas gaida rindā.

### Rindu veidi un apkalpošanas veidi

Rindu veidi un apkalpošanas veidi apraksta, kā rinda izvēlas, kurus elementus apstrādāt.

- Pirmais iekšā, pirmais ārā (FIFO): apkalpo klientu, kurš gaidījis visilgāk.

- Pēdējais iekšā, pirmais ārā (LIFO): apkalpo klientu, kurš gaidījis visīsāk.

- Prioritāte: apkalpo klientus pēc to prioritātes līmeņa; šie līmeņi var būt balstīti uz statusu, steidzamību, maksājumu u. c.

- Īsākais darbs pirmais (SJF): apkalpo klientu, kuram vajag vismazāk apkalpošanas.

- Garākais darbs pirmais (LJF): apkalpo klientu, kuram vajag visvairāk apkalpošanas.

- Īsākais atlikušais apstrādes laiks (SRPT): kā SJF, taču tikko ieradies īss darbs var izspiest garāku darbu, kas jau tiek apkalpots.

- Cikliskā apkalpošana („Round Robin“): apkalpo katru klientu īsu laika kvantu, tad pāriet pie nākamā klienta un atkārto.

- Laika dalīšana jeb procesora dalīšana (PS): apkalpo visus vienlaikus; apkalpošanas jauda tiek vienmērīgi sadalīta starp visiem gaidītājiem.

SJF un SRPT samazina vidējo gaidīšanu, taču gari darbi var tikt atlikti bezgalīgi, tāpēc reālās sistēmās bieži pievieno novecošanu vai prioritātes ierobežojumus.

## Rindu teorijas apzīmējumi

Rindu teorijā izmanto apzīmējumus ar grieķu burtiem.

Mūsu komandas izmanto daļu no populārajiem apzīmējumiem; mēs arī pievienojam savus apzīmējumus, kas palīdz programmatūras projektos.

Mūsu apzīmējumi un katra simbola nozīme:

| Mūsu apzīmējumi | Nozīme |
| --------------- | ------ |
| κ (kapa) | elementu skaits sistēmā: gaidošie un apstrādājamie |
| λ (lambda) | sistēmā ienākošo elementu ierašanās ātrums |
| μ (mī) | apkalpošanas ātrums jeb jauda: cik ātri strādā viens aizņemts serveris |
| ρ (ro) | noslodze: laika daļa, kad serveri ir aizņemti, λ / (c μ) |
| χ (hī) | caurlaidspēja jeb aiziešanas ātrums: novērotā izvade jebkura iemesla dēļ |
| α (alfa) | veiksmes ātrums: novērotā izvade, kas izrādās pareiza |
| β (beta) | neveiksmes ātrums: novērotā izvade, kas izrādās nepareiza |
| δ (delta) | pabeigšanas ātrums: veiksme + neveiksme, apkalpotie elementi neatkarīgi no tā, vai rezultāts ir pareizs vai nepareizs |
| σ (sigma) | izlaišanas ātrums: elementi, kas ienāca, bet aizgāja neapkalpoti |
| ε (epsilons) | kļūdu attiecība: β / (α + β) = β / δ |
| τ (tau) | laiks sistēmā jeb izpildes laiks |
| ω (omega) | gaidīšanas laiks jeb laiks rindā |
| φ (fī) | darba laiks jeb laiks procesorā jeb apkalpošanas laiks |
| θ (teta) | soļa laiks starp pabeigšanām; līdzsvara stāvoklī vidējais soļa laiks ≈ 1 / χ |

### Skaits

Mēs bieži skaitām elementus un lietojam šādu apzīmējumu:

- κ (kapa): elementu skaits sistēmā, t. i., gaidošie elementi plus apstrādājamie elementi.

![Diagramma: elementi ierodas ar ātrumu λ, sistēmā ir κ elementu, un elementi aiziet ar caurlaidspēju χ](https://queue-theory.github.io/images/queue-theory-rates-lambda-input-rate-kappa-item-count-chi-output-rate.svg)

Piemērs:

- κ = 10 nozīmē tieši 10

- κ ≈ 10 nozīmē aptuveni 10

- κ < 10 nozīmē mazāk nekā 10

- κ > 10 nozīmē vairāk nekā 10

- κ ≪ 10 nozīmē daudz mazāk nekā 10

- κ ≫ 10 nozīmē daudz vairāk nekā 10

Skaits κ (kapa) ir viena brīža momentuzņēmums.

Vidējais skaits κ̅ (kapa ar svītru) ir aprēķins, kas vidēji aprēķina mērījumus noteiktā laika periodā, piemēram, mērot katru stundu divu nedēļu laikā.

### Ierašanās ātrums, apkalpošanas ātrums

Svarīgākie apzīmējumi:

- λ (lambda): ierašanās ātrums. Tas mēra, cik ātri rindā ienāk jauni elementi.

- μ (mī): apkalpošanas ātrums jeb jauda. Tas mēra, cik ātri viens serveris var apstrādāt elementus, kamēr tas ir aizņemts.

Vispārīgu likumsakarību piemēri tradicionālām rindām ar vienu serveri:

- λ < μ nozīmē, ka ierašanās ātrums ir mazāks par apkalpošanas ātrumu; rinda ir stabila, t. i., tās lielums svārstās ap galīgu vidējo vērtību.

- λ = μ nozīmē, ka ierašanās ātrums ir vienāds ar apkalpošanas ātrumu; ja ir kaut kāda nejaušība, rinda dreifē un aug neierobežoti.

- λ > μ nozīmē, ka ierašanās ātrums ir lielāks par apkalpošanas ātrumu; rinda pastāvīgi aug, aptuveni par λ − μ elementiem laika vienībā.

Intuitīvā doma, ka „λ = μ uztur rindu nemainīgā lielumā“, ir patiesa tikai tad, ja ierašanās un apkalpošana ir pilnīgi regulāras, kā metronoms. Reālas ierašanās notiek uzliesmojumos, tāpēc klusuma brīdī zaudēto dīkstāves laiku nekad nevar atgūt, un nākamā uzliesmojuma laikā rinda aug.

Ņemiet vērā, ka daži rindu teorijas praktiķi ar „apkalpošanas ātrumu“ saprot novēroto izvadi, nevis jaudu; skatiet [apkalpošanas ātruma jēdziena precizējumu](#apkalpošanas-ātruma-jēdziena-precizējums).

### Noslodzes koeficients jeb satiksmes intensitāte

Svarīgākais apzīmējums, kas raksturo rindu:

- ρ (ro): noslodzes koeficients, t. i., laika daļa, kad serveri ir aizņemti = λ / μ vienam serverim vai λ / (c μ) c serveriem

Piemēri:

- ρ < 1 nozīmē, ka serveriem ir brīva jauda; rinda ir stabila. Jo tuvāk ρ ir 1, jo ilgāka gaidīšana; skatiet [noslodzes līkni](#noslodzes-līkne).

- ρ = 1 nozīmē, ka serveri ir aizņemti visu laiku; rinda ir nestabila un aug neierobežoti.

- ρ > 1 nozīmē, ka ierašanās pārsniedz jaudu; rinda kļūst lielāka.

### Caurlaidspējas ātrumi: kopējais ātrums, pabeigšanas ātrums, veiksmes ātrums, neveiksmes ātrums, izlaišanas ātrums

Caurlaidspējas ātrumi mēra novēroto izvadi, t. i., elementus, kas faktiski atstāj rindu. Tie iedalās piecās plašās kategorijās:

- χ (hī): kopējais ātrums. Tas mēra, cik elementu laika vienībā atstāj rindu jebkura iemesla dēļ: veiksme, neveiksme, izlaišana u. c.

- α (alfa): veiksmes ātrums. Tas mēra, cik elementu laika periodā izrādās pareizi, piem., precīzi, pabeigti, pieņemti.

- β (beta): neveiksmes ātrums. Tas mēra, cik elementu laika periodā izrādās nepareizi, piem., neprecīzi, nepabeigti, noraidīti.

- δ (delta): pabeigšanas ātrums. Tas mēra, cik elementu laika periodā tiek apkalpoti neatkarīgi no tā, vai rezultāts ir pareizs vai nepareizs: veiksme + neveiksme.

- σ (sigma): izlaišanas ātrums. Tas mēra, cik elementu laika periodā ienāk rindā un pēc tam aiziet neapkalpoti, piem., pamešana, atteikšanās.

Pabeigšanas ātrums = veiksmes ātrums + neveiksmes ātrums:

- δ = α + β (izrunā: delta ir vienāds ar alfa plus beta)

Kopējais ātrums = pabeigšanas ātrums + izlaišanas ātrums:

- χ = δ + σ (izrunā: hī ir vienāds ar delta plus sigma)

Kopējais ātrums = veiksmes ātrums + neveiksmes ātrums + izlaišanas ātrums:

- χ = α + β + σ (izrunā: hī ir vienāds ar alfa plus beta plus sigma)

![Diagramma: elementi atstāj sistēmu kā veiksme α, neveiksme β vai izlaišana σ; pabeigti δ = α + β, tātad χ = δ + σ](https://queue-theory.github.io/images/queue-theory-output-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Katrs χ ieskaitītais elements ir ienācis sistēmā, tāpēc līdzsvara stāvoklī kopējais ātrums ir vienāds ar ierašanās ātrumu: χ ≈ λ. Tāpēc caurlaidspējas ātrumi mēra izvadi, nevis jaudu.

### Apkalpošanas ātruma jēdziena precizējums

Atkarībā no konteksta un praktiķa termins „apkalpošanas ātrums“ var nozīmēt vai nu „kopējo ātrumu“, vai „veiksmes ātrumu“.

Tam ir vēsturiskas saknes, un tas var radīt neskaidrības un kļūdas, īpaši kontekstos un praktiķiem, kas izmanto rindu teoriju, kur ļoti svarīgi ir sekot neveiksmēm un izlaišanām.

- Teorētiskais skatījums: apkalpošanas ātrums ir tīrs ātruma mērījums (piem., darbi sekundē) neatkarīgi no tā, vai darbi ir veiksmes, neveiksmes, izlaišanas u. c.

- Apstrādes skatījums: apkalpošanas ātrums ietver visu, kā apstrādei rinda velta laiku, t. i., veiksmes vai neveiksmes, bet neietver izlaišanas.

- Tehnoloģiskais skatījums: lietišķajās jomās, piemēram, programmatūras inženierijā, apkalpošanas ātrums mēra tikai veiksmes, savukārt kļūdu ātrums mēra neveiksmes, un izlaišanas ātrums mēra izlaišanas gadījumus.

Tāpēc mēs saglabājam μ jaudai un pievienojam novērotās izvades ātrumus līdzās tam, nevis aizstājam to:

- μ (mī): apkalpošanas ātrums jeb jauda. Tas mēra, cik ātri viens serveris var apstrādāt elementus, kamēr tas ir aizņemts.

- χ (hī): kopējais ātrums. Tas mēra, cik elementu laika vienībā atstāj rindu jebkura iemesla dēļ: veiksme, neveiksme, izlaišana u. c.

- α (alfa): veiksmes ātrums. Tas mēra, cik elementu laika periodā izrādās pareizi, piem., precīzi, pabeigti, pieņemti.

Kāpēc neaizstāt μ ar χ vai α? Stabilā rindā katrs elements, kas ienāk, galu galā aiziet, tāpēc χ ≈ λ. Tad λ / χ ≈ 1 neatkarīgi no slodzes, un tas neko nepasaka par to, cik aizņemti ir serveri. Noslodzei vajadzīga jauda: ρ = λ / (c μ), kas ir vienāds ar laika daļu, kad serveri ir aizņemti.

### Izlaišanas ātrums

Sīkāk par izlaišanas ātrumu:

- σ (sigma): izlaišanas ātrums. Tas mēra, cik elementu ienāk rindā un pēc tam aiziet neapstrādāti.

Izlaišana ir tad, kad elements ienāk rindā un pēc tam aiziet bez jebkādas būtiskas apstrādes:

- Pamešana: kad klients iestājas rindā un pēc tam jebkura iemesla dēļ aiziet.

- Atteikšanās: kad klients, kurš jau gaidījis, nolemj aiziet, jo ir iztērējis pārāk daudz laika.

Divas saistītas uzvedības nav izlaišanas:

- Atturēšanās: kad klients nolemj neiestāties rindā, jo gaidīšanas laiks draud būt pārāk ilgs. Atturējies elements nekad neienāk sistēmā, tāpēc tas atrodas ārpus sistēmas robežām: to neieskaita ne λ, ne χ, ne σ. Ja atturēšanās ir svarīga, piemēram, zaudētu pārdošanu dēļ, tad skaitiet tās atsevišķi kā atraidītas ierašanās.

- Pārlēkšana starp rindām: kad klients pārvietojas starp paralēlām rindām, piemēram, kasēm, cenšoties gaidīt īsāk.

### Kļūdu attiecība

Svarīgākais apzīmējums, kas raksturo rindas veiksmi:

- ε (epsilons): kļūdu attiecība = neveiksmju skaits / (veiksmju skaits + neveiksmju skaits) = β / (α + β) = β / δ

Izlaišanas netiek iekļautas, jo izlaists elements nekad netika apkalpots, tāpēc tas nebija ne pareizs, ne nepareizs. Izlaišanām sekojiet atsevišķi, izmantojot σ.

![Diagramma: pabeigšanas ātrums δ ir veiksmes ātrums α plus neveiksmes ātrums β, un kļūdu attiecība ε ir neveiksmes ātrums β, dalīts ar pabeigšanas ātrumu δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Piemēri:

- ε = 0 nozīmē, ka kļūdu nav.

- ε = 0,1 nozīmē, ka 10 % apkalpošanu ir kļūda.

- ε = 1 nozīmē, ka katrai apkalpošanai ir kļūda.

### Izpildes laiks, soļa laiks, darba laiks, gaidīšanas laiks

Mēs sekojam četriem laikiem:

- τ (tau): izpildes laiks = no rindas sākuma līdz rindas beigām

- θ (teta): soļa laiks = no vienas pabeigšanas līdz nākamajai pabeigšanai; viens soļa laiks ir viena atstarpe, un vidējais soļa laiks ir vidējā atstarpe

- φ (fī): darba laiks = laiks, kas pavadīts, veicot faktisku darbu, jeb apstrādes laiks

- ω (omega): gaidīšanas laiks = laiks, kas pavadīts, neveicot faktisku darbu, jeb nogaides laiks

![Diagramma: izpildes laiks τ ir gaidīšanas laiks ω, kam seko darba laiks φ, tātad τ = ω + φ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-wait-time-work-time.svg)

Piemēri:

- τ = 5s nozīmē, ka elements tiek pievienots rindai un apkalpots 5 sekundes vēlāk.

- ω = 4s nozīmē, ka elements gaida rindā 4 sekundes, un tad sākas darbs.

- φ = 1s nozīmē, ka elementam vajag 1 sekundi darba, un tad tas ir pabeigts.

- θ = 1s nozīmē, ka starp vienu pabeigšanu un nākamo pabeigšanu ir 1 sekunde.

Sakarības:

- τ = ω + φ: izpildes laiks ir gaidīšanas laiks plus darba laiks. Piemēros 5s = 4s + 1s.

- vidējais θ ≈ 1 / χ: līdzsvara stāvoklī vidējais soļa laiks ir kopējā ātruma apgrieztā vērtība. Viena atstarpe maz ko pasaka par ātrumu; daudzu atstarpju vidējā vērtība pasaka. Piemēros, ja vidējais soļa laiks ir 1s, tad χ ≈ 1 elements sekundē.

### Kendala apzīmējumi

Kendala apzīmējumi ir cits rindu teorijas apzīmējumu veids, ko raksta kā A/S/c/K/N/D:

- A: ierašanās process, t. i., laika starp ierašanām sadalījums.

- S: apkalpošanas process, t. i., apkalpošanas laiku sadalījums.

- c: serveru skaits.

- K: ietilpība, t. i., maksimālais sistēmā atļautais elementu skaits, gaidošu vai apkalpojamu, pirms jaunas ierašanās tiek atraidītas.

- N: populācija, t. i., potenciālo klientu skaits.

- D: disciplīna, t. i., rindas veids, piemēram, FIFO vai LIFO.

Bieži lietotie burti A un S:

- M: Markova jeb bez atmiņas, t. i., eksponenciāli laiki, kas rodas no Puasona ierašanām.

- D: deterministisks, t. i., nemainīgi laiki.

- G: vispārīgs, t. i., jebkurš sadalījums.

Ja pēdējie trīs ir izlaisti, noklusējuma vērtības ir K = ∞, N = ∞, D = FIFO. Piemēram, „M/M/1“ nozīmē Puasona ierašanās, eksponenciālus apkalpošanas laikus, vienu serveri, neierobežotu ietilpību, neierobežotu populāciju un principu „pirmais iekšā, pirmais ārā“.

Arī:

- n: elementu skaits sistēmā.

## Rindu matemātika

Matemātikas sadaļās izmantoti mācību grāmatu simboli, lai Jūs varētu tos salīdzināt ar citiem avotiem: S ir vidējais apkalpošanas laiks, t. i., mūsu φ, un μ = 1 / S ir viena servera jauda.

### Noslodzes līkne

Pats svarīgākais rezultāts rindu teorijā: noslodzei tuvojoties 100 %, gaidīšanas laiks aug neierobežoti, un visstraujāk tas aug pašās beigās.

M/M/1 rindai, kur S ir vidējais apkalpošanas laiks:

- Izpildes laiks τ = S / (1 − ρ)

- Gaidīšanas laiks ω = S × ρ / (1 − ρ)

| Noslodze ρ | Izpildes laiks τ | Gaidīšanas laiks ω |
| ---------- | ---------------- | ------------------ |
| 50 %       | 2 × S            | 1 × S              |
| 70 %       | 3,3 × S          | 2,3 × S            |
| 80 %       | 5 × S            | 4 × S              |
| 90 %       | 10 × S           | 9 × S              |
| 95 %       | 20 × S           | 19 × S             |
| 99 %       | 100 × S          | 99 × S             |

Piemērs: koda pārskatīšanai vajag 1 stundu darba. Ja pārskatītāji ir aizņemti 80 %, pārskatīšana no pieprasījuma līdz pabeigšanai aizņem aptuveni 5 stundas. Ja pārskatītāji ir aizņemti 95 %, tā aizņem aptuveni 20 stundas, lai gan pārskatītāji ir aizņemti tikai par 15 procentpunktiem vairāk.

Tāpēc princips „visiem jābūt aizņemtiem 100 %“ ir recepte ilgiem izpildes laikiem, un tāpēc turpmāk sniegtās [atziņas](#atziņas) brīdina neplānot augstu noslodzi.

### Kingmena formula

Kingmena formula jeb VUT vienādojums aptuveni novērtē gaidīšanas laiku viena servera rindā ar jebkādiem ierašanās un apkalpošanas sadalījumiem (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Trīs faktori ir:

- U: noslodzes faktors ρ / (1 − ρ), t. i., iepriekš aprakstītā noslodzes līkne.

- V: mainīguma faktors (ca² + cs²) / 2, kur ca ir laika starp ierašanām variācijas koeficients un cs ir apkalpošanas laiku variācijas koeficients. Variācijas koeficients ir standartnovirze, dalīta ar vidējo vērtību.

- T: laika faktors S, vidējais apkalpošanas laiks.

Piemērs: M/M/1 rindai ca = cs = 1, tāpēc V = 1, un formula dod tādu pašu gaidīšanas laiku kā noslodzes līkne. Ja Jūs padarāt darba elementus vienveidīgākus, piemēram, sadalot lielus pieteikumus tā, lai cs samazinātos no 1 līdz gandrīz 0, tad V samazinās līdz aptuveni 0,5, un gaidīšanas laiks pie tās pašas noslodzes samazinās aptuveni uz pusi.

Kingmena formula parāda trīs sviras gaidīšanas laika samazināšanai:

- Samaziniet noslodzi, piemēram, pievienojot jaudu vai ierobežojot nepabeigto darbu.

- Samaziniet mainīgumu, piemēram, ar mazākām partijām, vienveidīgākiem darba elementiem vai vienmērīgākām ierašanām.

- Samaziniet apkalpošanas laiku, piemēram, ar automatizāciju.

### Apvienošana un „Erlang C“

Viena kopīga rinda, kas apgādā vairākus serverus, ir labāka nekā atsevišķas rindas, no kurām katra apgādā vienu serveri. Tāpēc bankas izmanto vienu rindu, kas apgādā daudzus kasierus, un tāpēc kopīga atbalsta rinda ir labāka par atsevišķām katra darbinieka rindām.

Piemērs: diviem serveriem katram vajag 1 stundu uz elementu, un elementi kopumā ierodas ar ātrumu 1,6 elementi stundā, tāpēc noslodze ir 80 %.

- Atsevišķas rindas: katrs serveris ir M/M/1 rinda ar 0,8 ierašanām stundā, tāpēc izpildes laiks ir 1 / (1 − 0,8) = 5 stundas.

- Apvienota rinda: abi serveri kopīgi izmanto M/M/2 rindu, tāpēc izpildes laiks ir aptuveni 2,8 stundas, t. i., par aptuveni 44 % mazāk, ar tiem pašiem cilvēkiem un to pašu darbu.

„Erlang C“ formula aprēķina varbūtību, ka ienākošam elementam M/M/c rindā būs jāgaida, ja piedāvātā slodze ir a = λ / μ un noslodze ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Gaidīšanas laiks ω = P(wait) / (c μ − λ)

Klientu apkalpošanas komandas izmanto „Erlang C“, lai izlemtu, cik darbinieku nodarbināt, lai sasniegtu mērķi, piemēram, „80 % zvanu atbildēti 20 sekunžu laikā“.

Apvienošanai ir robežas: tā darbojas vislabāk, ja jebkurš serveris var apstrādāt jebkuru elementu. Ja elementiem vajag speciālistus, tad apvienotai rindai var būt vajadzīgi maršrutēšanas noteikumi.

## Darbību uzskaite

### Darbību piemēri

Pieņemsim, ka mums ir kaut kas, kam vēlamies sekot, un mēs to saucam vispārīgā vārdā, piemēram, „Darbība“, saīsināti „A“.

Mēs varam efektīvi izmantot rindu apzīmējumus, lai aprakstītu darbību un to, kā tā virzās caur rindu.

Piemēri:

- Aκ: darbības skaits: cik elementu ir rindā.

- Aλ: darbības ierašanās ātrums: cik elementu ienāk laika vienībā.

- Aχ: darbības kopējais ātrums: cik elementu iziet no rindas laika vienībā.

- Aα: darbības veiksmes ātrums: cik elementu ir pareizi laika vienībā.

- Aβ: darbības neveiksmes ātrums jeb kļūdu ātrums: cik elementu ir nepareizi laika vienībā.

- Aμ: darbības apkalpošanas ātrums jeb jauda: cik elementu viens serveris var pabeigt laika vienībā, kamēr tas ir aizņemts.

- Aσ: darbības izlaišanas ātrums: cik elementu tiek pamesti laika vienībā.

- Aρ: darbības noslodzes koeficients: pieejamā laika daļa, kad serveri ir aizņemti, t. i., aizņemtais laiks ÷ pieejamais laiks jeb λ / (c μ).

- Aε: darbības kļūdu attiecība: cik elementu pabeigti ar kļūdām attiecībā pret kopējo skaitu.

- Aτ: darbības izpildes laiks: cik laika paiet no pieprasījuma līdz pabeigšanai.

- Aω: darbības gaidīšanas laiks: cik laika paiet no pieprasījuma līdz sākumam.

- Aφ: darbības darba laiks: cik laika paiet no sākuma līdz pabeigšanai.

- Aθ: darbības soļa laiks: cik laika paiet no vienas pabeigšanas līdz nākamajai pabeigšanai.

### Litla likums

Litla likums ir Džona Litla teorēma, kas nosaka: ilgtermiņa vidējais klientu skaits L stacionārā sistēmā ir vienāds ar ilgtermiņa vidējo efektīvo ierašanās ātrumu λ, reizinātu ar vidējo laiku W, ko klients pavada sistēmā.

Apzīmējumu piemērs:

- L: ilgtermiņa vidējais klientu skaits sistēmā. Mēs dodam priekšroku κ (kapa).

- λ: ilgtermiņa vidējais efektīvais ierašanās ātrums, t. i., elementi, kas faktiski ienāk sistēmā, tātad bez atturējušajiem.

- W: ilgtermiņa vidējais laiks, ko elements pavada sistēmā. Mēs dodam priekšroku τ (tau).

- L = λ W ir Litla likums. Mēs dodam priekšroku κ = λ τ (kapa = lambda \* tau).

Litla likums ir ievērojami vispārīgs: tas ir spēkā neatkarīgi no ierašanās sadalījuma, apkalpošanas sadalījuma, serveru skaita vai rindas veida.

Litla likuma pieņēmumi:

- Visas mērvienības ir saskaņotas.

- Sistēma ir stabila, t. i., mērīšanas periodā vidējais ierašanās ātrums ir vienāds ar vidējo aiziešanas ātrumu, un elementu skaits sākumā un beigās ir aptuveni vienāds.

- Elementi, kas aiziet agri, piemēram, atsakoties gaidīt, tiek vai nu konsekventi ieskaitīti gan λ, gan τ, vai konsekventi izslēgti no abiem.

Piemērs: komandai vidēji ir κ = 20 pieteikumu darbā, un pieteikumi ierodas ar ātrumu λ = 4 nedēļā; līdzsvara stāvoklī komanda arī pabeidz χ = 4 nedēļā. Tātad vidējais pieteikums aizņem τ = κ / λ = 5 nedēļas. Lai samazinātu izpildes laiku uz pusi, nestrādājot ātrāk, samaziniet nepabeigto darbu uz pusi.

### Galvenie darbības rādītāji (KPI)

Mēs parasti sekojam daudzām lietām par darbībām rindā un vēlamies rezultātus apkopot, izvēloties īsu sarakstu ar mūsu projektiem būtiskākajiem.

Mēs esam izveidojuši daudzus projektus un uzskatām, ka vērtīgākie kopsavilkuma rādītāji ir:

- Dτ = piegādes izpildes laiks. Produktu komandas var teikt „no koncepcijas līdz klientam“ vai „no idejas līdz īstenošanai“.

- Dα = piegādes veiksmes ātrums. „DevOps“ komandas var teikt „izvietošanas biežums“ vai „mēs piegādājam X reizes dienā“.

- Dε = piegādes kļūdu attiecība. Kvalitātes komandas var teikt „izmaiņu neveiksmju īpatsvars“ vai „atritināšanas gadījumu procentuālā daļa“.

- Rτ = atjaunošanas izpildes laiks. Vietņu uzticamības inženieri var teikt „atkopšanās laiks pēc neveiksmīgas izvietošanas“ vai „vidējais atjaunošanas laiks (MTTR)“.

## Pakalpojumu metrikas

Noderīgi termini:

- **Pakalpojuma līmeņa rādītājs (SLI):** ir metrika (piem., 99,9 % darbspējas laiks)
- **Pakalpojuma līmeņa mērķis (SLO):** iekšējais mērķis šai metrikai (piem., tiekties uz 99,95 % darbspējas laiku)
- **Pakalpojuma līmeņa līgums (SLA):** formāls, līgumisks solījums klientam (piem., 99,9 % darbspējas laiks ar sodiem, ja tas netiek sasniegts).

### Vidējais reaģēšanas, labošanas, atkopšanās, atrisināšanas laiks

MTTR apzīmē četrus dažādus mērījumus:

| Metrika                               | Fokuss                     | Mēra                                          | Sākums                                       | Beigas                                         |
| ------------------------------------- | -------------------------- | --------------------------------------------- | -------------------------------------------- | ---------------------------------------------- |
| **Vidējais reaģēšanas laiks**         | Sākotnējā reakcija         | Laiks, lai apstiprinātu un sāktu rīkoties     | Kad incidents tiek atklāts / ziņots          | Kad komanda sāk pie tā strādāt                 |
| **Vidējais labošanas laiks**          | Tehniskais labojums        | Laiks, lai salabotu bojāto elementu           | Kad sākas labošanas darbs                    | Kad elements ir salabots                       |
| **Vidējais atkopšanās laiks**         | Pakalpojuma atjaunošana    | Laiks, lai pilnībā atjaunotu pakalpojumu      | Kad sākas incidents / pārtraukums            | Kad pakalpojums pilnībā darbojas               |
| **Vidējais atrisināšanas laiks**      | Pilnīga atrisināšana       | Kopējais laiks no atklāšanas līdz slēgšanai   | Kad incidents tiek atklāts                   | Kad incidents ir pilnībā slēgts                |

**Galvenās atšķirības:**

**Reaģēšana** mēra komandas gatavību un brīdinājumu efektivitāti. Īss reaģēšanas laiks nozīmē, ka Jūsu uzraudzības un dežūru procesi darbojas labi, pat ja pats labojums aizņem ilgāk.

**Labošana** ir šauri tehniska – cik ilgs laiks faktiski vajadzīgs, lai salabotu bojāto lietu, kad pie tās jau strādājat? Tā neietver atklāšanas laiku, šķirošanu un pārbaudi.

**Atkopšanās** attiecas uz pakalpojuma pieejamību no klienta skatpunkta. Sistēma var būt „salabota“, bet vēl ne „atkopusies“, ja Jums vēl jāatjauno dati, jāiesilda kešatmiņas vai jāpārbauda funkcionalitāte.

**Atrisināšana** ir visaptverošākā – tā aptver visu incidenta dzīves ciklu no pirmās atklāšanas līdz pēcincidenta pārbaudei un slēgšanai.

Scenārija piemērs:

- 02.00 – sākas pārtraukums
- 02.05 – nostrādā brīdinājums, incidents tiek atklāts
- 02.15 – dežurants apstiprina un sāk darbu → reaģēšanas laiks: 10 min (no 02.05 līdz 02.15)
- 02.45 – noteikts pamatcēlonis, izvietots labojums → labošanas laiks: 30 min (no 02.15 līdz 02.45)
- 03.00 – pārbaudīts, ka pakalpojums darbojas lietotājiem → atkopšanās laiks: 60 min (no 02.00 līdz 03.00)
- 03.30 – pēc pārbaudes slēgts incidenta pieteikums → atrisināšanas laiks: 85 min (no 02.05 līdz 03.30)

Saistītās metrikas:

- MTBF (vidējais laiks līdz atteicei, angl. mean time before failure)
- MTTF (vidējais laiks līdz atteicei, angl. mean time to failure)
- MTTA (vidējais apstiprināšanas laiks, angl. mean time to acknowledge)

### DORA metrikas

„DevOps Research and Assessment“ (DORA) metrikas ir nozares standarta galvenie darbības rādītāji (KPI), kas īpaši paredzēti programmatūras inženierijas „DevOps“ komandām. Skatiet [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA tagad izmanto piecas metrikas divās grupās.

Caurlaidspējas metrikas:

- **Izmaiņu izpildes laiks** – laiks, lai īstenotu, testētu un piegādātu funkcijas kodu (mēra no iesūtīšanas (angl. commit) līdz izvietošanai ražošanas vidē). Precīzi nosakiet, ko saprotat ar sākumu un beigām. Piemēram, dažas komandas labprāt mēra no brīža, kad izstrādātājs sāk darbu pie pieteikuma, līdz brīdim, kad izstrādātājs nodod darbu nepārtrauktās integrācijas procesam; šī pieeja parasti ir efektīvāka personas produktivitātes mērīšanai.

- **Izvietošanas biežums** – izvietošanu skaits noteiktā laika periodā. Precīzi nosakiet, ko saprotat ar izvietošanu un kā sekojat biežumam. Piemēram, dažas komandas izvieto ražošanas serveru parkā un seko visai izlaišanai, savukārt citas komandas izvieto vienā lietotāju pieņemšanas testēšanas (UAT) serverī un seko tam, kad projekta vadītājs nosūta lietotājiem e-pasta paziņojumu ar aicinājumu sākt testēšanu.

- **Atkopšanās laiks pēc neveiksmīgas izvietošanas** – laiks, kas nepieciešams, lai atkoptos pēc izvietošanas, kas izraisījusi kļūmi ražošanas vidē. Agrāk to sauca par vidējo atkopšanās laiku (MTTR) vai pakalpojuma atjaunošanas laiku. Precīzi nosakiet, ko saprotat ar atkopšanos. Piemēram, dažas komandas par atkopšanos uzskata pilnīgu atrisināšanu, t. i., kopējo laiku no incidenta atklāšanas līdz tā pilnīgai slēgšanai; šo pieeju precīzāk sauc par vidējo atrisināšanas laiku.

Nestabilitātes metrikas:

- **Izmaiņu neveiksmju īpatsvars** – procentuālā daļa izvietošanu, kas izraisa kļūmi ražošanas vidē un prasa tūlītēju novēršanu, piemēram, atritināšanu vai steidzamu labojumu. Precīzi nosakiet, ko saprotat ar neveiksmi. Piemēram, dažas komandas par neveiksmi uzskata arī gadījumu, kad tās sāk darbu pie darba pieteikuma un tad saprot, ka tajā nav pietiekami daudz informācijas, lai turpinātu, tāpēc komanda atgriež darba pieteikumu specifikāciju komandai.

- **Izvietošanu pārstrādes īpatsvars** – procentuālā daļa izvietošanu, kas ir neplānotas, piemēram, lai novērstu ražošanas incidentu. Tās ir neplānotās izvietošanas, dalītas ar visām izvietošanām. DORA pievienoja šo metriku 2024. gadā.

Agrākajos DORA ziņojumos tika aplūkota arī **uzticamība** kā darbības veiktspējas metrika: plašāks, bieži kvalitatīvs pakalpojuma konsekvences novērtējums, piemēram, pieejamība, darbspējas laiks, latentums, precizitāte un pakalpojuma līmeņa mērķi. Uzticamība palīdz parādīt, ka liels ātrums netiek sasniegts uz sistēmas spēju rēķina.

## Rindu rinda

Rindu teoriju ir viegli paplašināt līdz rindu rindai, piemēram, augstāka līmeņa procesam, kas ietver zemāka līmeņa posmus, fāzes vai vārtus.

### „Double Diamond“ rindu rinda

Piemēram, aplūkosim „Double Diamond“ (dubultā dimanta) inovāciju procesa modeli, kas nosaka četrus posmus:

1. Atklāt: izprast problēmu, nevis tikai pieņemt, kas tā ir.
2. Definēt: balstoties uz atklāšanas fāzes atziņām, definēt izaicinājumu.
3. Attīstīt: sniegt dažādas atbildes uz skaidri definēto problēmu.
4. Piegādāt: testēt dažādus risinājumus nelielā mērogā un tad tos uzlabot.

Rindu teorija to var modelēt kā vienu procesa rindu, kas ietver četras posmu rindas:

- Procesa ierašanās ātrums ir 1. posma ierašanās ātrums.
- Procesa veiksmes ātrums ir 4. posma veiksmes ātrums.
- Procesa kļūdu skaits ir posmu kļūdu skaitu summa.
- Procesa izlaišanu skaits ir posmu izlaišanu skaitu summa.
- Procesa izpildes laiks ir posmu izpildes laiku summa.
- Procesa maksimālā caurlaidspēja ir lēnākā posma jeb vājās vietas (angl. bottleneck) caurlaidspēja.

### Piltuves rindu rinda

Praktiskajā darbā mēs bieži lietojam vārdu „piltuve“, lai brīvi aprakstītu rindu rindu, kurā elementu skaits katrā posmā parasti samazinās:

- Pieņemšanas darbā rinda ar uzrunāšanas posmu, intervijas posmu un piedāvājuma posmu. Šāda veida rindā mēs cenšamies maksimāli palielināt 1. posma ierašanās ātrumu, t. i., paplašināt uzrunāšanu, piemēram, ar reklāmas pasākumiem.

- Pirkšanas rinda ar klienta meklēšanas posmu, iepirkumu groza posmu un maksājuma posmu. Šāda veida rindā mēs cenšamies maksimāli samazināt 2. posma izlaišanas ātrumu, t. i., samazināt grozu pamešanu, piemēram, ar atgādinājumiem.

- Programmēšanas rinda ar integrācijas posmu, lietotāju pieņemšanas posmu un ražošanas izlaišanas posmu. Šāda veida rindā mēs cenšamies maksimāli samazināt ražošanas izlaišanas posma kļūdu ātrumu, piemēram, ar „canary“ telemetriju.

## Atziņas

Septiņas atziņas par rindu teoriju, ko sniedzis Bobs Veskots (Bob Wescott), grāmatas „The Every Computer Performance Book“ autors (skatiet arī [Kottke kopsavilkumu](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Jo lēnāks ir apkalpošanas centrs, jo zemāku maksimālo noslodzi maksimumslodzes laikā Jums vajadzētu plānot.

2. Ir ļoti grūti izmantot pēdējos 15 % no jebkā.

3. Jo tuvāk esat robežai, jo augstāka ir kļūdas cena.

4. Reaģēšanas laika pieaugumu ierobežo to skaits, kas var gaidīt.

5. Atcerieties, ka šī ir vidējā vērtība, nevis maksimums.

6. Vairākos apkalpošanas centros pastāv cilvēciskā nolieguma efekts.

7. Parādiet nelielus uzlabojumus to labākajā gaismā.

## Epilogs

### Skatiet arī

Vikipēdija:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Vikipēdijas jomas, kurās mēs izmantojam rindas daudzos projektos:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Džona D. Kuka (John D. Cook) ievadi:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Detalizētāki ievadi:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formulas:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Pateicības

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Šī grāmata ir lieliska augsta līmeņa „DevOps“ tēmām, un tā tieši nosaka mūsu KPI izvēli. Šajā lapā minētie KPI atbilst grāmatas ieteikumiem.

## Projekta informācija

- Pakotne: queue-theory
- Versija: 3.0.0
- Izveidots: 2019-01-25T04:17:56Z
- Atjaunināts: 2026-11-23T15:33:48Z
- Licence: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, vai, lūdzu, sazinieties ar mums par citiem noteikumiem (skatiet [LICENSE.md](LICENSE.md))
- Kontakts: Joel Parker Henderson <joel@joelparkerhenderson.com>
