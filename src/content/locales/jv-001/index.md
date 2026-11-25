# Teori antrian

Teori antrian punika kajian matematika babagan barisan tiyang ingkang ngentosi,
utawi antrian. Kita ngginakaken teori antrian wonten ing pangembangan piranti
lunak, kangge ancas kados ta nganalisis saha ngoptimalaken laku lan proses kita,
kados ta kacekatan layanan pelanggan, perencanaan kanban wonten ing manajemen
proyek, antrian pesen kangge komunikasi antarproses, saha pipeline deployment
lestantun DevOps.

Daftar isi:

- [Pambuka](#pambuka)
  - [Kacekatan layanan pelanggan](#kacekatan-layanan-pelanggan)
  - [Perencanaan kanban wonten ing manajemen proyek](#perencanaan-kanban-wonten-ing-manajemen-proyek)
  - [Antrian pesen kangge komunikasi antarproses](#antrian-pesen-kangge-komunikasi-antarproses)
  - [Pipeline deployment lestantun DevOps](#pipeline-deployment-lestantun-devops)
- [Istilah antrian](#istilah-antrian)
  - [Jinis antrian lan jinis layanan](#jinis-antrian-lan-jinis-layanan)
- [Notasi teori antrian](#notasi-teori-antrian)
  - [Cacah](#cacah)
  - [Laju kadhatengan, laju layanan, laju budhal](#laju-kadhatengan-laju-layanan-laju-budhal)
  - [Rasio utilisasi utawi intensitas lalu lintas](#rasio-utilisasi-utawi-intensitas-lalu-lintas)
  - [Laju throughput: laju total, laju rampung, laju kasil, laju gagal, laju lompat](#laju-throughput-laju-total-laju-rampung-laju-kasil-laju-gagal-laju-lompat)
  - [Disambiguasi laju layanan](#disambiguasi-laju-layanan)
  - [Laju lompat](#laju-lompat)
  - [Rasio kalepatan](#rasio-kalepatan)
  - [Lead time, wekdal langkah, wekdal makarya, wekdal ngentosi](#lead-time-wekdal-langkah-wekdal-makarya-wekdal-ngentosi)
  - [Notasi Kendall](#notasi-kendall)
- [Matematika antrian](#matematika-antrian)
  - [Kurva utilisasi](#kurva-utilisasi)
  - [Rumus Kingman](#rumus-kingman)
  - [Panggabungan antrian lan Erlang C](#panggabungan-antrian-lan-erlang-c)
- [Pamantauan aktivitas](#pamantauan-aktivitas)
  - [Tuladha aktivitas](#tuladha-aktivitas)
  - [Hukum Little](#hukum-little)
  - [Indikator kinerja utama (KPI)](#indikator-kinerja-utama-kpi)
- [Metrik layanan](#metrik-layanan)
  - [Wekdal rata-rata kangge nanggapi, ndandosi, mulihaken, ngrampungaken](#wekdal-rata-rata-kangge-nanggapi-ndandosi-mulihaken-ngrampungaken)
  - [Metrik DORA](#metrik-dora)
- [Antrian saking antrian](#antrian-saking-antrian)
  - [Antrian saking antrian Double Diamond](#antrian-saking-antrian-double-diamond)
  - [Antrian saking antrian awujud corong](#antrian-saking-antrian-awujud-corong)
- [Wawasan](#wawasan)
- [Panutup](#panutup)
  - [Priksani ugi](#priksani-ugi)
  - [Panuwun](#panuwun)
- [Cathetan](#cathetan)

## Pambuka

Kita ngginakaken teori antrian wonten ing proyek-proyek kita kangge kathah ancas:

- Kacekatan layanan pelanggan

- Perencanaan kanban wonten ing manajemen proyek

- Antrian pesen kangge komunikasi antarproses

- Pipeline deployment lestantun DevOps

### Kacekatan layanan pelanggan

Tuladhanipun, kita kepengin nganalisis kados pundi pelanggan nyuwun pitulungan babagan sadean saha pitulungan dhukungan, saha sepinten cepet kita nanggapi.

Sawetawis produk ingkang gayut, tuladhanipun [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Perencanaan kanban wonten ing manajemen proyek

Tuladhanipun, kita kepengin mantau lead time saha wekdal lampah nalika gagasan fitur enggal ngrembaka saking desain dumugi pangiriman.

Sawetawis produk ingkang gayut, tuladhanipun [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Antrian pesen kangge komunikasi antarproses

Tuladhanipun, kita kepengin ngageng-agengaken throughput saha ngalit-alitaken tekanan nalika satunggal program ngintun panyuwunan dhateng program sanesipun.

Sawetawis produk ingkang gayut, tuladhanipun [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Pipeline deployment lestantun DevOps

Tuladhanipun, kita kepengin mesthekaken bilih server integrasi lestantun kita gadhah kapasitas kangge nguji piranti lunak kita, lajeng nge-deploy.

Sawetawis produk ingkang gayut, tuladhanipun [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Istilah antrian

Istilah antrian punika jejer ingkang ageng. Pérangan punika ngewrat sawetawis istilah ingkang limrah kita ginakaken. Kangge tuladha, kita ngginakaken gagasan pelanggan ingkang ngentosi wonten ing antrian.

### Jinis antrian lan jinis layanan

Jinis antrian lan jinis layanan nggambaraken kados pundi antrian milih item pundi ingkang dipunproses.

- First In First Out (FIFO): ngladosi pelanggan ingkang sampun ngentosi paling dangu.

- Last In First Out (LIFO): ngladosi pelanggan ingkang sampun ngentosi paling sekedhap.

- Prioritas: ngladosi pelanggan adhedhasar tataran prioritasipun; tataran punika saged adhedhasar status, kawigatosan, pambayaran, lan sanesipun.

- Shortest Job First (SJF): ngladosi pelanggan ingkang mbetahaken layanan paling sekedhik.

- Longest Job First (LJF): ngladosi pelanggan ingkang mbetahaken layanan paling kathah.

- Shortest Remaining Processing Time (SRPT): kados SJF, nanging padamelan cekak ingkang nembe dhateng saged nyelani padamelan ingkang langkung dangu ingkang sampun dipunladosi.

- Round Robin: ngladosi saben pelanggan sajroning irisan wekdal ingkang cekak, lajeng pindhah dhateng pelanggan salajengipun, saha dipunbaleni.

- Time Sharing utawi Processor Sharing (PS): ngladosi sedaya tiyang ing wekdal ingkang sami; kapasitas layanan dipunbagi rata dhateng sedaya ingkang ngentosi.

SJF lan SRPT ngalit-alitaken rata-rata wekdal ngentosi, nanging saged ndadosaken padamelan ingkang dangu boten nate dipunladosi, satemah sistem ingkang nyata asring nambahi aging utawi watesan prioritas.

## Notasi teori antrian

Teori antrian ngginakaken notasi kanthi aksara Yunani.

Tim-tim kita ngginakaken sawetawis notasi ingkang kondhang; kita ugi nambahi sawetawis notasi piyambak ingkang mbiyantu kita wonten ing proyek piranti lunak.

Notasi kita lan teges saben simbol:

| Notasi kita | Teges |
| ----------- | ----- |
| κ (kappa) | cacah item wonten ing sistem, ingkang ngentosi tuwin ingkang dipungarap |
| λ (lambda) | laju kadhatengan item ingkang mlebet sistem |
| χ (chi) | laju budhal item ingkang medal saking sistem |
| μ (mu) | laju layanan utawi kapasitas: sepinten cepet satunggal server makarya nalika sibuk |
| ρ (rho) | utilisasi: perangan wekdal server sibuk, λ / (c μ) |
| α (alpha) | laju kasil: asil ingkang dipunamati ingkang leres |
| β (beta) | laju gagal: asil ingkang dipunamati ingkang lepat |
| δ (delta) | laju rampung: kasil + gagal, item ingkang sampun dipunladosi, mboten dados kasil utawi gagal |
| σ (sigma) | laju lompat: item ingkang mlebet, lajeng medal tanpa dipunladosi |
| ε (epsilon) | rasio kalepatan: β / (α + β) = β / δ |
| τ (tau) | wekdal wonten ing sistem utawi lead time |
| ω (omega) | wekdal ngentosi utawi wekdal wonten ing antrian |
| φ (phi) | wekdal makarya utawi wekdal wonten ing prosesor utawi wekdal layanan |
| θ (theta) | wekdal langkah ing antawisipun rampungan; rata-rata wekdal langkah ≈ 1 / χ ing kawontenan ajeg |

### Cacah

Kita asring ngetang item, saha kita ngginakaken notasi punika:

- κ (kappa): cacah item wonten ing sistem, tegesipun item ingkang ngentosi tuwin item ingkang saweg dipungarap.

![Diagram: wonten κ item wonten ing sistem](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Tuladha:

- κ = 10 tegesipun persis 10

- κ ≈ 10 tegesipun kirang langkung 10

- κ < 10 tegesipun kirang saking 10

- κ > 10 tegesipun langkung saking 10

- κ ≪ 10 tegesipun kathah kirangipun saking 10

- κ ≫ 10 tegesipun kathah langkungipun saking 10

Cacah κ (kappa) punika potret ing satunggal wekdal.

Cacah rata-rata κ̅ (kappa nganggé garis) punika etungan ingkang ngrata-rata asil pangukuran ing satunggal periode wekdal, tuladhanipun ngukur saben jam salaminipun kalih minggu.

### Laju kadhatengan, laju layanan, laju budhal

Notasi ingkang paling wigati:

- λ (lambda): laju kadhatengan. Punika ngukur sepinten cepet item mlebet sistem.

- μ (mu): laju layanan utawi kapasitas. Punika ngukur sepinten cepet satunggal server saged ngrampungaken item nalika sibuk.

- χ (chi): laju budhal. Punika ngukur sepinten cepet item medal saking sistem.

![Diagram: item dugi kanthi laju λ, dipunladosi kanthi laju μ, saha medal kanthi laju χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-rate-mu-service-rate-chi-departure-rate.svg)

Tuladha kawontenan umum kangge antrian tradisional kanthi satunggal server:

- λ < μ tegesipun laju kadhatengan langkung alit tinimbang laju layanan; antrian ajeg, tegesipun ukuranipun mobah-mosik ing sakiwa-tengenipun rata-rata ingkang winates.

- λ = μ tegesipun laju kadhatengan sami kaliyan laju layanan; menawi wonten acak-acakan sekedhik kemawon, antrian ngeli saha mindhak tanpa wates.

- λ > μ tegesipun laju kadhatengan langkung ageng tinimbang laju layanan; antrian mindhak ajeg, kirang langkung λ − μ item saben satuan wekdal.

Gagasan intuitif bilih „λ = μ ndadosaken ukuran antrian tetep sami“ namung leres menawi kadhatengan saha layanan babar pisan ajeg, kados metronom. Kadhatengan ingkang nyata punika ngempal-ngempal, satemah wekdal nganggur ingkang ical nalika sepi boten saged wangsul malih, saha antrian mindhak nalika kempalan salajengipun.

Mangga dipungatosaken bilih sawetawis praktisi teori antrian ngginakaken „laju layanan“ kangge asil ingkang dipunamati, sanes kapasitas; mangga priksani [disambiguasi laju layanan](#disambiguasi-laju-layanan).

### Rasio utilisasi utawi intensitas lalu lintas

Notasi ingkang paling wigati ingkang ngringkes satunggal antrian:

- ρ (rho): rasio utilisasi, tegesipun perangan wekdal server sibuk = λ / μ kangge satunggal server, utawi λ / (c μ) kangge c server

Tuladha:

- ρ < 1 tegesipun server taksih gadhah kapasitas luwih; antrian ajeg. Saya celak ρ dhateng 1, saya dangu wekdal ngentosi; mangga priksani [kurva utilisasi](#kurva-utilisasi).

- ρ = 1 tegesipun server sibuk sawanci-wanci; antrian boten ajeg saha mindhak tanpa wates.

- ρ > 1 tegesipun kadhatengan ngluwihi kapasitas; antrian saya ageng.

### Laju throughput: laju total, laju rampung, laju kasil, laju gagal, laju lompat

Laju throughput ngukur asil ingkang dipunamati, tegesipun item ingkang saestu medal saking antrian. Laju punika wonten gangsal golongan ageng:

- χ (chi): laju budhal. Punika ngukur sepinten cepet item medal saking sistem.

- α (alpha): laju kasil. Punika ngukur sepinten item saben periode wekdal ingkang dados leres, tuladhanipun trep, jangkep, dipuntampi.

- β (beta): laju gagal. Punika ngukur sepinten item saben periode wekdal ingkang dados lepat, tuladhanipun boten trep, boten jangkep, dipuntolak.

- δ (delta): laju rampung. Punika ngukur sepinten item saben periode wekdal ingkang dipunladosi.

- σ (sigma): laju lompat. Punika ngukur sepinten item saben periode wekdal ingkang mlebet antrian, lajeng medal tanpa dipunladosi, tuladhanipun nilaraken antrian, mundur saking antrian.

Laju rampung = laju kasil + laju gagal:

- δ = α + β (dipunwaos: delta sami kaliyan alpha tambah beta)

Laju total = laju rampung + laju lompat:

- χ = δ + σ (dipunwaos: chi sami kaliyan delta tambah sigma)

Laju total = laju kasil + laju gagal + laju lompat:

- χ = α + β + σ (dipunwaos: chi sami kaliyan alpha tambah beta tambah sigma)

![Diagram: laju budhal χ = laju rampung δ + laju lompat σ; laju rampung δ = laju kasil α + laju gagal β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Saben item ingkang dipunetang wonten ing χ sampun mlebet sistem, satemah ing kawontenan ajeg laju total sami kaliyan laju kadhatengan: χ ≈ λ. Punika sababipun laju throughput ngukur asil, sanes kapasitas.

### Disambiguasi laju layanan

Gumantung kontèks saha praktisinipun, istilah „laju layanan“ saged ateges
„laju total“ utawi „laju kasil“.

Bab punika gadhah oyot sajarah saha saged njalari bingung tuwin kalepatan, langkung-langkung
kangge kontèks saha praktisi ingkang ngginakaken teori antrian ingkang mbetahaken sanget
mantau kagagalan saha lompatan.

- Pandangan Teoretis: Laju layanan punika ukuran kacepetan murni (tuladhanipun, padamelan saben detik), boten preduli padamelan punika kasil, gagal, lompat, lan sanesipun.

- Pandangan Pamrosesan: Laju layanan ngewrat punapa kemawon ingkang dipunproses antrian, tegesipun kasil utawi gagal, nanging boten ngewrat lompatan.

- Pandangan Teknologi: Wonten ing bidang terapan kados rekayasa piranti lunak, laju layanan namung ngukur kasil, dene laju kalepatan ngukur kagagalan, saha laju lompat ngukur ingkang dipunlompati.

Pramila kita tetep ngginakaken μ kangge kapasitas, saha kita nambahi laju asil ingkang dipunamati ing sandhingipun, tinimbang nggentosi:

- μ (mu): laju layanan utawi kapasitas. Punika ngukur sepinten cepet satunggal server saged ngrampungaken item nalika sibuk.

- χ (chi): laju budhal. Punika ngukur sepinten cepet item medal saking sistem.

- α (alpha): laju kasil. Punika ngukur sepinten item saben periode wekdal ingkang dados leres, tuladhanipun trep, jangkep, dipuntampi.

Kenging punapa μ boten dipungentosi χ utawi α? Wonten ing antrian ingkang ajeg, saben item ingkang mlebet pungkasanipun medal, satemah χ ≈ λ. Lajeng λ / χ ≈ 1 punapa kemawon bebanipun, ingkang boten nedahaken punapa-punapa babagan sepinten sibuk server. Utilisasi mbetahaken kapasitas: ρ = λ / (c μ), ingkang sami kaliyan perangan wekdal server sibuk.

### Laju lompat

Katrangan laju lompat:

- σ (sigma): laju lompat. Punika ngukur sepinten item ingkang mlebet antrian, lajeng medal tanpa dipunproses.

Lompat inggih punika nalika satunggal item mlebet antrian, lajeng medal tanpa pamrosesan ingkang wigati:

- Nilaraken (abandoning): nalika pelanggan mlebet antrian, lajeng medal, kanthi alesan punapa kemawon.

- Mundur (reneging): nalika pelanggan ingkang sampun ngentosi mutusaken medal amargi sampun kecalan wekdal kathah sanget.

Wonten kalih tumindak ingkang gegayutan nanging sanes lompat:

- Wurung (balking): nalika pelanggan mutusaken boten mlebet antrian amargi wekdal ngentosi katingal badhe dangu sanget. Item ingkang wurung boten nate mlebet sistem, satemah wonten ing sanjawining wates sistem: boten dipunetang wonten ing λ, χ, utawi σ. Menawi wurung punika wigati, kados ta sadean ingkang ical, mangga dipunetang piyambak minangka kadhatengan ingkang dipuntolak.

- Pindhah-pindhah (jockeying): nalika pelanggan pindhah ing antawisipun antrian ingkang sejajar, kados ta jalur kasir, kangge ngupadi wekdal ngentosi ingkang langkung cekak.

### Rasio kalepatan

Notasi ingkang paling wigati ingkang ngringkes kasilipun satunggal antrian:

- ε (epsilon): rasio kalepatan = cacah gagal / (cacah kasil + cacah gagal) = β / (α + β) = β / δ

Lompatan boten dipunlebetaken, amargi item ingkang dipunlompati boten nate dipunladosi, satemah boten leres saha boten lepat. Mangga lompatan dipunpantau piyambak lumantar σ.

![Diagram: rasio kalepatan ε punika laju gagal β dipunbagi laju rampung δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Tuladha:

- ε = 0 tegesipun boten wonten kalepatan.

- ε = 0,1 tegesipun 10% layanan wonten kalepatanipun.

- ε = 1 tegesipun saben layanan wonten kalepatanipun.

### Lead time, wekdal langkah, wekdal makarya, wekdal ngentosi

Kita mantau sekawan wekdal:

- τ (tau): lead time = saking wiwitan antrian dumugi pungkasan antrian

- θ (theta): wekdal langkah = saking satunggal rampungan dumugi rampungan salajengipun; satunggal wekdal langkah punika satunggal longkangan, saha rata-rata wekdal langkah punika rata-rata longkangan

- φ (phi): wekdal makarya = wekdal ingkang dipunginakaken kangge makarya saestu utawi wekdal pamrosesan

- ω (omega): wekdal ngentosi = wekdal ingkang boten dipunginakaken kangge makarya saestu utawi wekdal tundha

![Diagram: lead time τ punika wekdal ngentosi ω dipuntutugaken wekdal makarya φ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time.svg)

Tuladha:

- τ = 5s tegesipun satunggal item dipunlebetaken dhateng antrian, lajeng dipunladosi 5 detik salajengipun.

- ω = 4s tegesipun satunggal item ngentosi wonten ing antrian 4 detik, lajeng padamelan dipunwiwiti.

- φ = 1s tegesipun satunggal item mbetahaken 1 detik padamelan, lajeng rampung.

- θ = 1s tegesipun wonten 1 detik ing antawisipun satunggal rampungan saha rampungan salajengipun.

Gegayutan:

- τ = ω + φ: lead time punika wekdal ngentosi tambah wekdal makarya. Wonten ing tuladha, 5s = 4s + 1s.

- rata-rata θ ≈ 1 / χ: ing kawontenan ajeg, rata-rata wekdal langkah punika kuwalikipun laju total. Satunggal longkangan boten nedahaken kathah babagan laju; rata-rata saking kathah longkangan nedahaken. Wonten ing tuladha, menawi rata-rata wekdal langkah 1s, lajeng χ ≈ 1 item saben detik.

### Notasi Kendall

Notasi Kendall punika notasi sanes kangge teori antrian, ingkang dipunserat A/S/c/K/N/D:

- A: proses kadhatengan, tegesipun distribusi wekdal ing antawisipun kadhatengan.

- S: proses layanan, tegesipun distribusi wekdal layanan.

- c: cacah server.

- K: kapasitas, tegesipun cacah item paling kathah ingkang kepareng wonten ing sistem, ngentosi utawi saweg dipunladosi, saderengipun kadhatengan enggal dipuntolak.

- N: populasi, tegesipun cacah pelanggan ingkang saged dhateng.

- D: disiplin, tegesipun jinis antrian, kados ta FIFO utawi LIFO.

Aksara ingkang limrah kangge A lan S:

- M: Markovian utawi tanpa memori, tegesipun wekdal eksponensial, ingkang tuwuh saking kadhatengan Poisson.

- D: Deterministik, tegesipun wekdal ingkang ajeg.

- G: General (umum), tegesipun distribusi punapa kemawon.

Menawi tigang ingkang pungkasan boten dipunserat, gawanipun inggih punika K = ∞, N = ∞, D = FIFO. Tuladhanipun, „M/M/1“ tegesipun kadhatengan Poisson, wekdal layanan eksponensial, satunggal server, kapasitas tanpa wates, populasi tanpa wates, saha first in first out.

Saha:

- n: cacah item wonten ing sistem.

## Matematika antrian

Pérangan matematika ngginakaken simbol buku ajar, supados panjenengan saged mbandhingaken kaliyan sumber sanes: S punika rata-rata wekdal layanan, inggih punika φ kita, saha μ = 1 / S punika kapasitas satunggal server.

### Kurva utilisasi

Asil ingkang paling wigati wonten ing teori antrian: nalika utilisasi nyelaki 100%, wekdal ngentosi mindhak tanpa wates, saha mindhakipun paling cepet ing pungkasan.

Kangge antrian M/M/1, ing pundi S punika rata-rata wekdal layanan:

- Lead time τ = S / (1 − ρ)

- Wekdal ngentosi ω = S × ρ / (1 − ρ)

| Utilisasi ρ | Lead time τ | Wekdal ngentosi ω |
| ----------- | ----------- | ----------------- |
| 50%         | 2 × S       | 1 × S             |
| 70%         | 3,3 × S     | 2,3 × S           |
| 80%         | 5 × S       | 4 × S             |
| 90%         | 10 × S      | 9 × S             |
| 95%         | 20 × S      | 19 × S            |
| 99%         | 100 × S     | 99 × S            |

Tuladha: review kode mbetahaken 1 jam padamelan. Menawi para reviewer sibuk 80%, satunggal review mbetahaken kirang langkung 5 jam saking panyuwunan dumugi rampung. Menawi para reviewer sibuk 95%, mbetahaken kirang langkung 20 jam, senajan para reviewer namung langkung sibuk 15 poin persen.

Punika sababipun „ndadosaken sedaya tiyang sibuk 100%“ punika resep kangge lead time ingkang dangu, saha sababipun [wawasan](#wawasan) ing ngandhap punika ngengetaken supados boten ngrencanakaken utilisasi ingkang inggil.

### Rumus Kingman

Rumus Kingman, utawi persamaan VUT, ngira-ira wekdal ngentosi kangge antrian satunggal server kanthi distribusi kadhatengan saha layanan punapa kemawon (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Tigang faktoripun inggih punika:

- U: faktor utilisasi ρ / (1 − ρ), inggih punika kurva utilisasi ing nginggil.

- V: faktor variabilitas (ca² + cs²) / 2, ing pundi ca punika koefisien variasi wekdal ing antawisipun kadhatengan, saha cs punika koefisien variasi wekdal layanan. Koefisien variasi punika simpangan baku dipunbagi rata-rata.

- T: faktor wekdal S, rata-rata wekdal layanan.

Tuladha: kangge antrian M/M/1, ca = cs = 1, satemah V = 1, saha rumus punika maringi wekdal ngentosi ingkang sami kaliyan kurva utilisasi. Menawi panjenengan ndadosaken item padamelan langkung seragam, kados ta kanthi mecah tiket ingkang ageng satemah cs mandhap saking 1 dumugi celak 0, lajeng V mandhap dados kirang langkung 0,5, saha wekdal ngentosi kirang langkung dados separo ing utilisasi ingkang sami.

Rumus Kingman nedahaken tigang tuas kangge ngirangi wekdal ngentosi:

- Ngirangi utilisasi, kados ta kanthi nambahi kapasitas utawi matesi padamelan ingkang saweg lumampah.

- Ngirangi variabilitas, kados ta kanthi batch ingkang langkung alit, item padamelan ingkang langkung seragam, utawi kadhatengan ingkang langkung alon-alon.

- Ngirangi wekdal layanan, kados ta kanthi otomatisasi.

### Panggabungan antrian lan Erlang C

Satunggal antrian sesarengan ingkang nyaosi pinten-pinten server langkung sae tinimbang antrian piyambak-piyambak ingkang saben-saben nyaosi satunggal server. Punika sababipun bank ngginakaken satunggal antrian kangge kathah teller, saha sababipun antrian dhukungan sesarengan langkung sae tinimbang antrian saben agen.

Tuladha: kalih server saben-saben mbetahaken 1 jam saben item, saha item dhateng 1,6 item saben jam gunggungipun, satemah utilisasi 80%.

- Antrian piyambak-piyambak: saben server punika antrian M/M/1 kanthi 0,8 kadhatengan saben jam, satemah lead time 1 / (1 − 0,8) = 5 jam.

- Antrian gabungan: kalih server sesarengan ngginakaken antrian M/M/2, satemah lead time kirang langkung 2,8 jam, inggih punika kirang langkung 44% langkung sekedhik, kanthi tiyang ingkang sami saha padamelan ingkang sami.

Rumus Erlang C ngetang probabilitas bilih item ingkang dhateng kedah ngentosi wonten ing antrian M/M/c, kanthi beban ingkang dipunsaosaken a = λ / μ saha utilisasi ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Wekdal ngentosi ω = P(wait) / (c μ − λ)

Tim layanan pelanggan ngginakaken Erlang C kangge nemtokaken pinten agen ingkang kedah dipunsiagakaken kangge nggayuh target, kados ta „80% telpon dipunwangsuli sajroning 20 detik“.

Panggabungan antrian gadhah watesan: paling sae menawi server punapa kemawon saged ngrampungaken item punapa kemawon. Menawi item mbetahaken spesialis, antrian gabungan saged mbetahaken aturan routing.

## Pamantauan aktivitas

### Tuladha aktivitas

Upaminipun kita gadhah satunggal bab ingkang kepengin kita pantau, saha kita paringi nama umum kados ta „Aktivitas“ ingkang dipuncekak „A“.

Kita saged ngginakaken notasi antrian kanthi efisien kangge nggambaraken aktivitas punika saha kados pundi lampahipun lumantar antrian.

Tuladha:

- Aκ: cacah aktivitas: pinten item wonten ing antrian.

- Aλ: laju kadhatengan aktivitas: pinten item ingkang dhateng saben satuan wekdal.

- Aχ: laju total aktivitas: pinten item medal saking antrian saben satuan wekdal.

- Aα: laju kasil aktivitas: pinten item ingkang leres saben satuan wekdal.

- Aβ: laju gagal aktivitas utawi laju kalepatan: pinten item ingkang lepat saben satuan wekdal.

- Aμ: laju layanan aktivitas utawi kapasitas: pinten item ingkang saged dipunrampungaken satunggal server saben satuan wekdal nalika sibuk.

- Aσ: laju lompat aktivitas: pinten item ingkang dipuntilar saben satuan wekdal.

- Aρ: rasio utilisasi aktivitas: perangan wekdal ingkang kasedhiya nalika server sibuk, tegesipun wekdal sibuk ÷ wekdal ingkang kasedhiya, utawi λ / (c μ).

- Aε: rasio kalepatan aktivitas: pinten item ingkang dipunrampungaken kanthi kalepatan dipunbandhingaken kaliyan gunggungipun.

- Aτ: lead time aktivitas: pinten wekdal ingkang lumampah saking dipunsuwun dumugi rampung.

- Aω: wekdal ngentosi aktivitas: pinten wekdal ingkang lumampah saking dipunsuwun dumugi dipunwiwiti.

- Aφ: wekdal makarya aktivitas: pinten wekdal ingkang lumampah saking dipunwiwiti dumugi rampung.

- Aθ: wekdal langkah aktivitas: pinten wekdal ingkang lumampah saking rampung dumugi rampungan salajengipun.

### Hukum Little

Hukum Little punika teorema saking John Little ingkang ngandharaken: rata-rata jangka panjang cacah pelanggan L wonten ing sistem ingkang stasioner sami kaliyan rata-rata jangka panjang laju kadhatengan efektif λ dipunping rata-rata wekdal W ingkang dipunginakaken satunggal pelanggan wonten ing sistem.

Tuladha notasi:

- L: rata-rata jangka panjang cacah pelanggan wonten ing sistem. Kita langkung remen κ (kappa).

- λ: rata-rata jangka panjang laju kadhatengan efektif, tegesipun item ingkang saestu mlebet sistem, dados boten kalebet ingkang wurung.

- W: rata-rata jangka panjang wekdal satunggal item wonten ing sistem. Kita langkung remen τ (tau).

- L = λ W punika hukum Little. Kita langkung remen κ = λ τ (kappa = lambda \* tau).

Hukum Little punika umum sanget: tetep leres boten preduli distribusi kadhatengan, distribusi layanan, cacah server, utawi jinis antrian.

Asumsi hukum Little:

- Sedaya satuan ukuran konsisten.

- Sistem ajeg, tegesipun rata-rata laju kadhatengan sami kaliyan rata-rata laju medal sajroning periode pangukuran, saha cacah item kirang langkung sami ing wiwitan tuwin ing pungkasan.

- Item ingkang medal langkung rumiyin, kados ta amargi mundur, dipunetang kanthi konsisten wonten ing λ saha τ, utawi dipunicali kanthi konsisten saking kalihipun.

Tuladha: satunggal tim gadhah rata-rata κ = 20 tiket ingkang saweg dipungarap, saha tiket dhateng kanthi λ = 4 saben minggu; ing kawontenan ajeg, tim punika ugi ngrampungaken χ = 4 saben minggu. Dados rata-rata tiket mbetahaken τ = κ / λ = 5 minggu. Kangge ngirangi lead time dados separo tanpa makarya langkung cepet, mangga padamelan ingkang saweg lumampah dipunkirangi dados separo.

### Indikator kinerja utama (KPI)

Limrahipun kita mantau kathah bab babagan aktivitas wonten ing antrian, saha kita kepengin ngringkes asilipun kanthi milih daftar cekak ingkang paling gayut kaliyan proyek-proyek kita.

Kita sampun damel kathah proyek, saha kita pitados bilih indikator ringkesan ingkang paling aji inggih punika:

- Dτ = Lead time pangiriman. Tim produk saged matur „saking konsep dumugi pelanggan“ utawi „saking gagasan dumugi implementasi“.

- Dα = Laju kasil pangiriman. Tim DevOps saged matur „frekuensi deployment“ utawi „kita ngintun X kaping saben dinten“.

- Dε = Rasio kalepatan pangiriman. Tim kualitas saged matur „change fail rate“ utawi „persentase rollback“.

- Rτ = Lead time pamulihan. Site reliability engineer saged matur „wekdal pamulihan deployment ingkang gagal“ utawi „mean time to restore (MTTR)“.

## Metrik layanan

Istilah ingkang migunani:

- **Service Level Indicator (SLI):** inggih punika metrikipun (tuladhanipun, uptime 99,9%)
- **Service Level Objective (SLO):** target internal kangge metrik punika (tuladhanipun, ngancas uptime 99,95%)
- **Service Level Agreement (SLA):** janji resmi miturut kontrak dhateng pelanggan (tuladhanipun, uptime 99,9% kanthi paukuman menawi boten kagayuh).

### Wekdal rata-rata kangge nanggapi, ndandosi, mulihaken, ngrampungaken

MTTR nggambaraken sekawan pangukuran ingkang benten:

| Metrik                                 | Fokus                | Ngukur                                          | Wiwit                                         | Rampung                                        |
| -------------------------------------- | -------------------- | ----------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |
| **Wekdal rata-rata kangge nanggapi**   | Tanggapan wiwitan    | Wekdal kangge ngakeni saha miwiti tumindak     | Nalika insiden dipunpanggihaken/dipunlapuraken | Nalika tim miwiti nggarap                      |
| **Wekdal rata-rata kangge ndandosi**   | Pandandosan teknis   | Wekdal kangge ndandosi item ingkang risak       | Nalika padamelan pandandosan dipunwiwiti      | Nalika item sampun dipundandosi                |
| **Wekdal rata-rata kangge mulihaken**  | Pamulihan layanan    | Wekdal kangge mulihaken layanan kanthi jangkep  | Nalika insiden/gangguan dipunwiwiti            | Nalika layanan sampun lumampah kanthi jangkep  |
| **Wekdal rata-rata kangge ngrampungaken** | Pangrampungan jangkep | Wekdal gunggung saking deteksi dumugi panutupan | Nalika insiden dipunpanggihaken              | Nalika insiden sampun katutup kanthi jangkep   |

**Bentenipun ingkang baku:**

**Nanggapi** ngukur kasiagaan tim saha efektivitas tandha bebaya. Wekdal tanggapan ingkang cekak tegesipun proses monitoring saha piket panjenengan lumampah sae, senajan pandandosanipun saestu mbetahaken wekdal langkung dangu.

**Ndandosi** punika winates teknis—sepinten dangu wekdal kangge saestu ndandosi bab ingkang risak sasampunipun panjenengan nggarap? Punika boten ngewrat wekdal deteksi, triase, saha verifikasi.

**Mulihaken** punika babagan kasedhiyan layanan saking sudut pandang pelanggan. Sistem saged sampun „dipundandosi“ nanging dereng „pulih“ menawi panjenengan taksih kedah mulihaken data, manasi cache, utawi verifikasi fungsi.

**Ngrampungaken** punika ingkang paling jangkep—ngewrat sedaya siklus gesang insiden saking deteksi kaping sepisan, lumantar verifikasi sasampunipun insiden, dumugi panutupan.

Tuladha skenario:

- 2:00 enjing — Gangguan dipunwiwiti
- 2:05 enjing — Tandha bebaya muni, insiden dipunpanggihaken
- 2:15 enjing — Petugas piket ngakeni saha miwiti nggarap → Wekdal tanggapan: 10 menit (2:05 dumugi 2:15)
- 2:45 enjing — Sabab dhasar kapanggihaken, pandandosan dipun-deploy → Wekdal pandandosan: 30 menit (2:15 dumugi 2:45)
- 3:00 enjing — Layanan sampun dipunverifikasi lumampah kangge pangguna → Wekdal pamulihan: 60 menit (2:00 dumugi 3:00)
- 3:30 enjing — Tiket insiden katutup sasampunipun verifikasi → Wekdal pangrampungan: 85 menit (2:05 dumugi 3:30)

Metrik ingkang gegayutan:

- MTBF (mean time before failure, wekdal rata-rata saderengipun gagal)
- MTTF (mean time to failure, wekdal rata-rata dumugi gagal)
- MTTA (mean time to acknowledge, wekdal rata-rata kangge ngakeni)

### Metrik DORA

Metrik DevOps Research and Assessment (DORA) punika indikator kinerja utama (KPI) standar industri mligi kangge tim DevOps rekayasa piranti lunak. Mangga priksani [dora.dev](https://dora.dev/guides/dora-metrics/).

Samangke DORA ngginakaken gangsal metrik, wonten ing kalih golongan.

Metrik throughput:

- **Lead time owah-owahan (Change Lead Time)** - Wekdal kangge ngimplementasikaken, nguji, saha ngintun kode kangge satunggal fitur (dipunukur saking commit dumugi deployment wonten ing produksi). Mangga dipuntegesi kanthi cetha punapa ingkang panjenengan karsakaken kaliyan wiwitan saha pungkasan. Tuladhanipun, sawetawis tim remen ngukur saking nalika developer miwiti nggarap tiket, dumugi nalika developer ngintun padamelan dhateng proses integrasi lestantun; cara punika langkung efektif kangge ngukur produktivitas tiyang.

- **Frekuensi deployment (Deployment Frequency)** - Cacah deployment sajroning dangunipun wekdal tartamtu. Mangga dipuntegesi kanthi cetha punapa ingkang panjenengan karsakaken kaliyan deployment saha kados pundi panjenengan mantau frekuensinipun. Tuladhanipun, sawetawis tim nindakaken deployment dhateng armada server produksi saha mantau rollout jangkep, dene tim sanes nindakaken deployment dhateng satunggal server user acceptance test (UAT) saha mantau nalika manajer proyek ngintun email wara-wara dhateng pangguna supados nyobi nguji.

- **Wekdal pamulihan deployment ingkang gagal (Failed Deployment Recovery Time)** - Wekdal ingkang dipunbetahaken kangge pulih saking deployment ingkang njalari kagagalan wonten ing produksi. Rumiyin punika dipunwastani Mean Time to Recovery (MTTR) utawi Time to Restore Service. Mangga dipuntegesi kanthi cetha punapa ingkang panjenengan karsakaken kaliyan pamulihan. Tuladhanipun, sawetawis tim ngetang pamulihan minangka pangrampungan jangkep, tegesipun wekdal gunggung saking nalika insiden dipunpanggihaken dumugi nalika insiden katutup kanthi jangkep; cara punika langkung trep dipunwastani wekdal rata-rata kangge ngrampungaken.

Metrik instabilitas:

- **Laju kagagalan owah-owahan (Change Failure Rate)** - Persentase deployment ingkang njalari kagagalan wonten ing produksi saha mbetahaken pandandosan enggal, kados ta rollback utawi hotfix. Mangga dipuntegesi kanthi cetha punapa ingkang panjenengan karsakaken kaliyan kagagalan. Tuladhanipun, sawetawis tim ugi ngetang kagagalan nalika miwiti tiket padamelan lajeng mangertos bilih tiket padamelan punika boten gadhah katrangan ingkang cekap kangge nglajengaken, satemah tim punika mangsulaken tiket padamelan dhateng tim spesifikasi.

- **Laju garap ulang deployment (Deployment Rework Rate)** - Persentase deployment ingkang boten dipunrencanakaken, kados ta kangge ndandosi insiden produksi. Punika deployment ingkang boten dipunrencanakaken dipunbagi gunggung deployment. DORA nambahi metrik punika ing taun 2024.

Laporan DORA ingkang langkung rumiyin ugi ngrembag **Keandalan (Reliability)** minangka metrik kinerja operasional: pambiji ingkang langkung wiyar, asring kualitatif, babagan konsistensi layanan, kados ta kasedhiyan, uptime, latensi, akurasi, saha service level objective. Keandalan mbiyantu nedahaken bilih kacepetan ingkang inggil boten ngurbanaken kamampuan sistem.

## Antrian saking antrian

Teori antrian gampil dipunjembaraken dados antrian saking antrian, kados ta proses tataran nginggil ingkang ngewrat tahap, fase, utawi gapura tataran ngandhap.

### Antrian saking antrian Double Diamond

Tuladhanipun, mangga dipungatosaken model proses inovasi „Double Diamond“, ingkang nemtokaken sekawan tahap:

1. Discover (manggihaken): Mangertosi perkawis punika, sanes namung ngira-ira punapa perkawisipun.
2. Define (nemtokaken): Kanthi wawasan saking fase panemuan, nemtokaken tantanganipun.
3. Develop (ngembangaken): Maringi wangsulan ingkang benten-benten dhateng perkawis ingkang sampun dipuntemtokaken kanthi cetha.
4. Deliver (ngintun): Nguji solusi ingkang benten-benten ing skala alit lajeng ndandosi.

Teori antrian saged nggambaraken punika minangka satunggal antrian proses ingkang ngewrat sekawan antrian tahap:

- Laju kadhatengan proses punika laju kadhatengan tahap 1.
- Laju kasil proses punika laju kasil tahap 4.
- Cacah kalepatan proses punika gunggung cacah kalepatan sedaya tahap.
- Cacah lompat proses punika gunggung cacah lompat sedaya tahap.
- Lead time proses punika gunggung lead time sedaya tahap.
- Throughput paling ageng proses punika throughput tahap ingkang paling alon, utawi bottleneck.

### Antrian saking antrian awujud corong

Wonten ing padamelan praktis kita, kita asring ngginakaken tembung „corong“ (funnel) kangge nggambaraken kanthi longgar antrian saking antrian ingkang cenderung ngirangi cacah item ing saben tahap:

- Antrian rekrutmen ingkang ngginakaken tahap pendekatan, tahap wawancara, saha tahap tawaran. Kangge antrian jinis punika, kita ngancas ngageng-agengaken laju kadhatengan tahap 1, tegesipun nambahi pendekatan kita, kados ta lumantar promosi.

- Antrian tumbas ingkang ngginakaken tahap pados pelanggan, tahap kranjang blanja, saha tahap pambayaran. Kangge antrian jinis punika, kita ngancas ngalit-alitaken laju lompat tahap 2, tegesipun ngirangi kranjang ingkang dipuntilar, kados ta lumantar pangeling-eling.

- Antrian pemrograman ingkang ngginakaken tahap integrasi, tahap user acceptance, saha tahap rollout produksi. Kangge antrian jinis punika, kita ngancas ngalit-alitaken laju kalepatan tahap rollout produksi, kados ta lumantar telemetri canary.

## Wawasan

Pitung wawasan babagan teori antrian, saking Bob Wescott, panganggit „The Every Computer Performance Book“ (mangga priksani ugi [ringkesan Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Saya alon pusat layanan, saya andhap utilisasi paling inggil ingkang kedah panjenengan rencanakaken ing beban puncak.

2. Awrat sanget ngginakaken 15% ingkang pungkasan saking punapa kemawon.

3. Saya celak panjenengan dhateng pinggir, saya awis reginipun menawi lepat.

4. Mindhakipun wekdal tanggapan winates dening cacah ingkang saged ngentosi.

5. Mangga dipunengeti bilih punika rata-rata, sanes paling inggil.

6. Wonten efek panulakan manungsa wonten ing pinten-pinten pusat layanan.

7. Mangga tedahaken pandandosan alit kanthi cara ingkang paling sae.

## Panutup

### Priksani ugi

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Bidang Wikipedia ing pundi kita ngginakaken antrian wonten ing kathah proyek:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Pambuka saking John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Pambuka ingkang langkung rinci:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Rumus:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Panuwun

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Buku punika sae sanget kangge DevOps tataran nginggil, saha langsung dados dhasar pilihan KPI kita. KPI wonten ing kaca punika jumbuh kaliyan pitutur saking buku punika.

## Cathetan

- Paket: queue-theory
- Versi: 3.0.0
- Dipundamel: 2019-01-25T04:17:56Z
- Dipunanyari: 2026-11-23T15:33:48Z
- Lisensi: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, utawi mangga hubungi kita kangge katemtuan sanesipun (mangga priksani [LICENSE.md](LICENSE.md))
- Kontak: Joel Parker Henderson <joel@joelparkerhenderson.com>
