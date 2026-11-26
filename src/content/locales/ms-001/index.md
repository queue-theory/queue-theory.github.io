# Teori baris gilir

Teori baris gilir ialah kajian matematik tentang barisan menunggu, atau baris gilir. Kami menggunakan teori baris gilir dalam pembangunan perisian kami untuk tujuan seperti menganalisis dan mengoptimumkan amalan dan proses kami, contohnya kepantasan respons khidmat pelanggan, perancangan kanban dalam pengurusan projek, baris gilir mesej untuk komunikasi antara proses, dan saluran paip pengerahan berterusan DevOps.

Kandungan:

- [Pengenalan](#pengenalan)
  - [Kepantasan respons khidmat pelanggan](#kepantasan-respons-khidmat-pelanggan)
  - [Perancangan kanban dalam pengurusan projek](#perancangan-kanban-dalam-pengurusan-projek)
  - [Baris gilir mesej untuk komunikasi antara proses](#baris-gilir-mesej-untuk-komunikasi-antara-proses)
  - [Saluran paip pengerahan berterusan DevOps](#saluran-paip-pengerahan-berterusan-devops)
- [Istilah baris gilir](#istilah-baris-gilir)
  - [Jenis baris gilir dan jenis perkhidmatan](#jenis-baris-gilir-dan-jenis-perkhidmatan)
- [Tatatanda teori baris gilir](#tatatanda-teori-baris-gilir)
  - [Kiraan](#kiraan)
  - [Kadar ketibaan, kadar perkhidmatan, kadar pemergian](#kadar-ketibaan-kadar-perkhidmatan-kadar-pemergian)
  - [Nisbah penggunaan atau keamatan trafik](#nisbah-penggunaan-atau-keamatan-trafik)
  - [Kadar daya pemprosesan: kadar pemergian, kadar selesai, kadar kejayaan, kadar kegagalan, kadar langkau](#kadar-daya-pemprosesan-kadar-pemergian-kadar-selesai-kadar-kejayaan-kadar-kegagalan-kadar-langkau)
  - [Penjelasan istilah kadar perkhidmatan](#penjelasan-istilah-kadar-perkhidmatan)
  - [Kadar langkau](#kadar-langkau)
  - [Nisbah ralat](#nisbah-ralat)
  - [Masa pendahuluan, masa menunggu, masa kerja, masa langkah](#masa-pendahuluan-masa-menunggu-masa-kerja-masa-langkah)
  - [Tatatanda Kendall](#tatatanda-kendall)
- [Matematik baris gilir](#matematik-baris-gilir)
  - [Lengkung penggunaan](#lengkung-penggunaan)
  - [Formula Kingman](#formula-kingman)
  - [Pengumpulan dan Erlang C](#pengumpulan-dan-erlang-c)
- [Penjejakan aktiviti](#penjejakan-aktiviti)
  - [Contoh aktiviti](#contoh-aktiviti)
  - [Hukum Little](#hukum-little)
  - [Petunjuk prestasi utama (KPI)](#petunjuk-prestasi-utama-kpi)
- [Metrik perkhidmatan](#metrik-perkhidmatan)
  - [Purata Masa untuk Bertindak Balas, Membaiki, Memulihkan, Menyelesaikan](#purata-masa-untuk-bertindak-balas-membaiki-memulihkan-menyelesaikan)
  - [Metrik DORA](#metrik-dora)
- [Baris gilir bagi baris gilir](#baris-gilir-bagi-baris-gilir)
  - [Baris gilir bagi baris gilir Double Diamond](#baris-gilir-bagi-baris-gilir-double-diamond)
  - [Baris gilir bagi baris gilir corong](#baris-gilir-bagi-baris-gilir-corong)
- [Kitaran ganas kerja berlebihan](#kitaran-ganas-kerja-berlebihan)
- [Pandangan](#pandangan)
- [Aliran proses](#aliran-proses)
  - [Parameter kelakuan](#parameter-kelakuan)
  - [Parameter kebolehubahan](#parameter-kebolehubahan)
- [Epilog](#epilog)
  - [Lihat juga](#lihat-juga)
  - [Kredit](#kredit)
- [Maklumat projek](#maklumat-projek)

## Pengenalan

Kami menggunakan teori baris gilir dalam projek kami untuk pelbagai tujuan:

- Kepantasan respons khidmat pelanggan

- Perancangan kanban dalam pengurusan projek

- Baris gilir mesej untuk komunikasi antara proses

- Saluran paip pengerahan berterusan DevOps

### Kepantasan respons khidmat pelanggan

Sebagai contoh, kami ingin menganalisis cara pelanggan meminta bantuan jualan dan bantuan sokongan, dan seberapa pantas kami bertindak balas.

Beberapa produk yang berkaitan, contohnya [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Perancangan kanban dalam pengurusan projek

Sebagai contoh, kami ingin menjejaki masa pendahuluan dan masa kemajuan ketika idea ciri baharu berkembang daripada reka bentuk hingga penghantaran.

Beberapa produk yang berkaitan, contohnya [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Baris gilir mesej untuk komunikasi antara proses

Sebagai contoh, kami ingin memaksimumkan daya pemprosesan dan meminimumkan tekanan apabila satu program menghantar permintaan kepada program lain.

Beberapa produk yang berkaitan, contohnya [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Saluran paip pengerahan berterusan DevOps

Sebagai contoh, kami ingin memastikan pelayan integrasi berterusan kami mempunyai kapasiti untuk menguji perisian kami dan kemudian mengerahkannya.

Beberapa produk yang berkaitan, contohnya [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Istilah baris gilir

Istilah baris gilir ialah topik yang luas. Bahagian ini mengandungi sebahagian istilah yang biasa kami gunakan. Untuk contoh, kami akan menggunakan idea pelanggan yang menunggu dalam barisan.

### Jenis baris gilir dan jenis perkhidmatan

Jenis baris gilir dan jenis perkhidmatan menerangkan cara baris gilir memilih item yang hendak diproses.

- Masuk Dahulu Keluar Dahulu (FIFO): layan pelanggan yang telah menunggu paling lama.

- Masuk Akhir Keluar Dahulu (LIFO): layan pelanggan yang telah menunggu paling sekejap.

- Keutamaan: layan pelanggan berdasarkan tahap keutamaan mereka; tahap ini boleh berdasarkan status, kesegeraan, bayaran, dan sebagainya.

- Kerja Terpendek Dahulu (SJF): layan pelanggan yang memerlukan jumlah perkhidmatan paling sedikit.

- Kerja Terpanjang Dahulu (LJF): layan pelanggan yang memerlukan jumlah perkhidmatan paling banyak.

- Baki Masa Pemprosesan Terpendek (SRPT): seperti SJF, tetapi kerja pendek yang baru tiba boleh mendahului kerja yang lebih panjang yang sedang dilayan.

- Round Robin: layan setiap pelanggan untuk satu potongan masa yang singkat, kemudian beralih kepada pelanggan seterusnya, dan ulang.

- Perkongsian Masa atau Perkongsian Pemproses (PS): layan semua orang pada masa yang sama; kapasiti perkhidmatan diagihkan secara sama rata kepada semua yang menunggu.

SJF dan SRPT meminimumkan purata masa menunggu, tetapi boleh menyebabkan kerja panjang tertangguh tanpa had, jadi sistem sebenar sering menambah penuaan atau had keutamaan.

## Tatatanda teori baris gilir

Teori baris gilir menggunakan tatatanda dengan huruf Yunani.

Pasukan kami menggunakan sebahagian tatatanda yang popular; kami juga menambah tatatanda tersendiri yang membantu kami dalam projek perisian.

Tatatanda kami dan maksud setiap simbol:

| Tatatanda kami | Maksud |
| -------------- | ------ |
| κ (kappa) | bilangan item dalam sistem, iaitu yang menunggu ditambah yang sedang dikerjakan |
| λ (lambda) | kadar ketibaan item yang memasuki sistem |
| χ (chi) | kadar pemergian item yang keluar daripada sistem |
| μ (mu) | kadar perkhidmatan atau kapasiti: kepantasan satu pelayan bekerja ketika sibuk |
| ρ (rho) | penggunaan: pecahan masa pelayan sibuk, λ / (c μ) |
| α (alpha) | kadar kejayaan: output yang diperhatikan yang ternyata betul |
| β (beta) | kadar kegagalan: output yang diperhatikan yang ternyata salah |
| δ (delta) | kadar selesai: kejayaan + kegagalan, item yang telah dilayan, sama ada hasilnya betul atau salah |
| σ (sigma) | kadar langkau: item yang masuk, kemudian keluar tanpa dilayan |
| ε (epsilon) | nisbah ralat: β / δ = β / (α + β) |
| τ (tau) | masa dalam sistem atau masa pendahuluan |
| ω (omega) | masa menunggu atau masa dalam baris gilir |
| φ (phi) | masa kerja atau masa dalam pemproses atau masa perkhidmatan |
| θ (theta) | masa langkah antara penyiapan; purata masa langkah ≈ 1 / χ dalam keadaan mantap |

### Kiraan

Kami kerap mengira item, dan kami menggunakan tatatanda ini:

- κ (kappa): kiraan item dalam sistem, iaitu item yang menunggu ditambah item yang sedang dikerjakan.

![Rajah: terdapat κ item dalam sistem](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Contoh:

- κ = 10 bermaksud tepat 10

- κ ≈ 10 bermaksud kira-kira 10

- κ < 10 bermaksud kurang daripada 10

- κ > 10 bermaksud lebih daripada 10

- κ ≪ 10 bermaksud jauh kurang daripada 10

- κ ≫ 10 bermaksud jauh lebih daripada 10

Kiraan κ (kappa) ialah syot kilat pada satu ketika.

Kiraan purata κ̅ (kappa bar) ialah pengiraan yang memurnikan ukuran sepanjang tempoh masa tertentu, contohnya mengukur setiap jam selama dua minggu.

### Kadar ketibaan, kadar perkhidmatan, kadar pemergian

Tatatanda yang paling penting:

- λ (lambda): kadar ketibaan. Ini mengukur sepantas mana item memasuki sistem.

- μ (mu): kadar perkhidmatan atau kapasiti. Ini mengukur seberapa pantas satu pelayan boleh mengendalikan item ketika ia sibuk.

- χ (chi): kadar pemergian. Ini mengukur sepantas mana item keluar daripada sistem.

![Rajah: item tiba pada kadar λ, dilayan pada kadar μ dan pergi pada kadar χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-mu-service-chi-departure.svg)

Contoh kelaziman umum untuk baris gilir tradisional dengan satu pelayan:

- λ < μ bermaksud kadar ketibaan kurang daripada kadar perkhidmatan; baris gilir stabil, iaitu ia berubah-ubah di sekitar saiz purata yang terhingga.

- λ = μ bermaksud kadar ketibaan sama dengan kadar perkhidmatan; dengan sebarang kerawakan sekalipun, baris gilir hanyut dan berkembang tanpa had.

- λ > μ bermaksud kadar ketibaan lebih besar daripada kadar perkhidmatan; baris gilir berkembang secara berterusan, kira-kira λ − μ item bagi setiap unit masa.

Idea intuitif bahawa “λ = μ mengekalkan saiz baris gilir” hanya benar apabila ketibaan dan perkhidmatan teratur sepenuhnya, seperti metronom. Ketibaan sebenar datang secara mendadak, jadi masa terbiar yang hilang semasa waktu lengang tidak dapat diperoleh semula, dan baris gilir berkembang semasa lonjakan seterusnya.

Sila ambil perhatian bahawa sesetengah pengamal teori baris gilir menggunakan “kadar perkhidmatan” untuk bermaksud output yang diperhatikan dan bukannya kapasiti; sila lihat [penjelasan istilah kadar perkhidmatan](#penjelasan-istilah-kadar-perkhidmatan).

### Nisbah penggunaan atau keamatan trafik

Tatatanda paling penting yang meringkaskan sesuatu baris gilir:

- ρ (rho): nisbah penggunaan, iaitu pecahan masa pelayan sibuk = λ / μ untuk satu pelayan, atau λ / (c μ) untuk c pelayan

Contoh:

- ρ < 1 bermaksud pelayan mempunyai kapasiti lebihan; baris gilir stabil. Semakin hampir ρ kepada 1, semakin lama masa menunggu; sila lihat [lengkung penggunaan](#lengkung-penggunaan).

- ρ = 1 bermaksud pelayan sibuk sepanjang masa; baris gilir tidak stabil dan berkembang tanpa had.

- ρ > 1 bermaksud ketibaan melebihi kapasiti; baris gilir semakin besar.

### Kadar daya pemprosesan: kadar pemergian, kadar selesai, kadar kejayaan, kadar kegagalan, kadar langkau

Kadar daya pemprosesan mengukur output yang diperhatikan, iaitu item yang benar-benar meninggalkan baris gilir. Kadar ini terbahagi kepada lima kategori umum:

- χ (chi): kadar pemergian. Ini mengukur sepantas mana item keluar daripada sistem.

- α (alpha): kadar kejayaan. Ini mengukur bilangan item bagi setiap tempoh masa yang ternyata betul, contohnya tepat, lengkap, diterima.

- β (beta): kadar kegagalan. Ini mengukur bilangan item bagi setiap tempoh masa yang ternyata salah, contohnya tidak tepat, tidak lengkap, ditolak.

- δ (delta): kadar selesai. Ini mengukur bilangan item bagi setiap tempoh masa yang dilayan.

- σ (sigma): kadar langkau. Ini mengukur bilangan item bagi setiap tempoh masa yang memasuki baris gilir, kemudian keluar tanpa dilayan, contohnya peninggalan, penarikan diri.

![Rajah: kadar pemergian χ = kadar selesai δ + kadar langkau σ; kadar selesai δ = kadar kejayaan α + kadar kegagalan β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Kadar selesai = kadar kejayaan + kadar kegagalan:

- δ = α + β (disebut: delta sama dengan alpha tambah beta)

Kadar jumlah = kadar selesai + kadar langkau:

- χ = δ + σ (disebut: chi sama dengan delta tambah sigma)

Kadar jumlah = kadar kejayaan + kadar kegagalan + kadar langkau:

- χ = α + β + σ (disebut: chi sama dengan alpha tambah beta tambah sigma)

Setiap item yang dikira dalam χ telah memasuki sistem, jadi dalam keadaan mantap kadar jumlah sama dengan kadar ketibaan: χ ≈ λ. Sebab itulah kadar daya pemprosesan mengukur output, bukan kapasiti.

### Penjelasan istilah kadar perkhidmatan

Bergantung pada konteks dan pengamal, istilah “kadar perkhidmatan” boleh bermaksud sama ada “kadar jumlah” atau “kadar kejayaan”.

Hal ini mempunyai akar sejarah dan boleh menyebabkan kekeliruan dan kesilapan, terutamanya bagi konteks dan pengamal yang menggunakan teori baris gilir yang mempunyai keperluan ketara untuk menjejaki kegagalan dan langkau.

- Pandangan Teori: Kadar perkhidmatan ialah ukuran kelajuan semata-mata (contohnya kerja sesaat), tanpa mengira sama ada kerja itu kejayaan, kegagalan, langkau, dan sebagainya.

- Pandangan Pemprosesan: Kadar perkhidmatan merangkumi apa sahaja yang diproses oleh baris gilir dengan menggunakan masa, iaitu kejayaan atau kegagalan, tetapi tidak merangkumi langkau.

- Pandangan Teknologi: Dalam bidang gunaan seperti kejuruteraan perisian, kadar perkhidmatan hanya mengukur kejayaan, manakala kadar ralat mengukur kegagalan, dan kadar langkau mengukur item yang dilangkau.

Oleh itu, kami mengekalkan μ untuk kapasiti, dan kami menambah kadar output yang diperhatikan di sampingnya, dan bukannya menggantikannya:

- μ (mu): kadar perkhidmatan atau kapasiti. Ini mengukur seberapa pantas satu pelayan boleh mengendalikan item ketika ia sibuk.

- χ (chi): kadar pemergian. Ini mengukur sepantas mana item keluar daripada sistem.

- α (alpha): kadar kejayaan. Ini mengukur bilangan item bagi setiap tempoh masa yang ternyata betul, contohnya tepat, lengkap, diterima.

Mengapa tidak menggantikan μ dengan χ atau α? Dalam baris gilir yang stabil, setiap item yang masuk akhirnya akan keluar, jadi χ ≈ λ. Maka λ / χ ≈ 1 tanpa mengira beban, dan ini tidak memberitahu apa-apa tentang seberapa sibuk pelayan. Penggunaan memerlukan kapasiti: ρ = λ / (c μ), yang sama dengan pecahan masa pelayan sibuk.

### Kadar langkau

Butiran kadar langkau:

- σ (sigma): kadar langkau. Ini mengukur bilangan item yang memasuki baris gilir, kemudian keluar tanpa diproses.

Langkau berlaku apabila sesuatu item memasuki baris gilir, kemudian keluar tanpa sebarang pemprosesan yang ketara:

- Pengabaian: apabila pelanggan menyertai baris gilir, kemudian pergi, atas apa jua sebab.

- Penarikan diri: apabila pelanggan yang telah menunggu memutuskan untuk pergi kerana mereka telah membuang terlalu banyak masa.

Dua tingkah laku yang berkaitan bukan langkau:

- Keengganan: apabila pelanggan memutuskan untuk tidak menyertai baris gilir kerana masa menunggu dijangka terlalu lama. Item yang enggan tidak pernah memasuki sistem, jadi ia berada di luar sempadan sistem: ia tidak dikira dalam λ, χ, atau σ. Jika keengganan penting, seperti jualan yang hilang, sila kira secara berasingan sebagai ketibaan yang ditolak.

- Bertukar barisan: apabila pelanggan bertukar antara baris gilir selari, seperti lorong kaunter bayaran, untuk mendapatkan masa menunggu yang lebih singkat.

### Nisbah ralat

Tatatanda paling penting yang meringkaskan kejayaan sesuatu baris gilir:

- ε (epsilon): nisbah ralat = kiraan kegagalan / bilangan selesai = β / δ = β / (α + β)

Langkau dikecualikan, kerana item yang dilangkau tidak pernah dilayan, jadi ia bukan betul dan bukan juga salah. Sila jejaki langkau secara berasingan melalui σ.

![Rajah: nisbah ralat ε ialah kadar kegagalan β dibahagi kadar selesai δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Contoh:

- ε = 0 bermaksud tiada ralat.

- ε = 0.1 bermaksud 10% perkhidmatan mempunyai ralat.

- ε = 1 bermaksud setiap perkhidmatan mempunyai ralat.

### Masa pendahuluan, masa menunggu, masa kerja, masa langkah

Kami menjejaki empat jenis masa:

- τ (tau): masa dalam sistem atau masa pendahuluan atau dari awal hingga akhir.

- θ (theta): masa langkah = dari satu penyiapan hingga penyiapan seterusnya; satu masa langkah ialah satu jurang, dan purata masa langkah ialah purata jurang

- ω (omega): masa menunggu = masa yang digunakan tanpa melakukan kerja sebenar atau masa tertangguh

- φ (phi): masa kerja = masa yang digunakan untuk melakukan kerja sebenar atau masa pemprosesan

![Rajah: masa pendahuluan τ, masa menunggu ω, masa kerja φ, masa langkah θ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time-theta-step-time.svg)

Contoh:

- τ = 5s bermaksud sesuatu item memasuki sistem, kemudian keluar daripada sistem 5 saat kemudian.

- ω = 4s bermaksud sesuatu item menunggu dalam baris gilir selama 4 saat, kemudian kerja bermula.

- φ = 1s bermaksud sesuatu item memerlukan 1 saat kerja, kemudian ia siap.

- θ = 1s bermaksud terdapat 1 saat antara satu penyiapan dengan penyiapan seterusnya.

Hubungan:

- τ = ω + φ: masa pendahuluan ialah masa menunggu ditambah masa kerja. Dalam contoh, 5s = 4s + 1s.

- purata θ ≈ 1 / χ: dalam keadaan mantap, purata masa langkah ialah songsangan kadar jumlah. Satu jurang tidak banyak memberitahu tentang kadar; purata banyak jurang memberitahunya. Dalam contoh, jika purata masa langkah ialah 1s, maka χ ≈ 1 item sesaat.

### Tatatanda Kendall

Tatatanda Kendall ialah tatatanda lain bagi teori baris gilir, yang ditulis sebagai A/S/c/K/N/D:

- A: proses ketibaan, iaitu taburan masa antara ketibaan.

- S: proses perkhidmatan, iaitu taburan masa perkhidmatan.

- c: bilangan pelayan.

- K: kapasiti, iaitu bilangan maksimum item yang dibenarkan dalam sistem, yang menunggu atau sedang dilayan, sebelum ketibaan baharu ditolak.

- N: populasi, iaitu bilangan bakal pelanggan.

- D: disiplin, iaitu jenis baris gilir, seperti FIFO atau LIFO.

Huruf biasa untuk A dan S:

- M: Markovian atau tanpa ingatan, iaitu masa eksponen, yang terhasil daripada ketibaan Poisson.

- D: Berketentuan, iaitu masa yang tetap.

- G: Umum, iaitu sebarang taburan.

Apabila tiga yang terakhir ditinggalkan, nilai lalainya ialah K = ∞, N = ∞, D = FIFO. Sebagai contoh, “M/M/1” bermaksud ketibaan Poisson, masa perkhidmatan eksponen, satu pelayan, kapasiti tanpa had, populasi tanpa had, dan masuk dahulu keluar dahulu.

Selain itu:

- n: bilangan item dalam sistem.

## Matematik baris gilir

Bahagian matematik menggunakan simbol buku teks, supaya anda boleh membandingkannya dengan sumber lain: S ialah purata masa perkhidmatan, iaitu φ kami, dan μ = 1 / S ialah kapasiti satu pelayan.

### Lengkung penggunaan

Hasil tunggal paling penting dalam teori baris gilir: apabila penggunaan menghampiri 100%, masa menunggu berkembang tanpa had, dan ia berkembang paling pantas di penghujungnya.

Untuk baris gilir M/M/1, dengan S ialah purata masa perkhidmatan:

- Masa pendahuluan τ = S / (1 − ρ)

- Masa menunggu ω = S × ρ / (1 − ρ)

| Penggunaan ρ | Masa pendahuluan τ | Masa menunggu ω |
| ------------ | ------------------ | --------------- |
| 50%          | 2 × S              | 1 × S           |
| 70%          | 3.3 × S            | 2.3 × S         |
| 80%          | 5 × S              | 4 × S           |
| 90%          | 10 × S             | 9 × S           |
| 95%          | 20 × S             | 19 × S          |
| 99%          | 100 × S            | 99 × S          |

Contoh: semakan kod memerlukan 1 jam kerja. Jika penyemak sibuk 80%, semakan mengambil masa kira-kira 5 jam dari permintaan hingga siap. Jika penyemak sibuk 95%, ia mengambil masa kira-kira 20 jam, walaupun penyemak hanya 15 mata peratusan lebih sibuk.

Sebab itulah “pastikan semua orang sibuk 100%” ialah resipi untuk masa pendahuluan yang panjang, dan sebab itulah [pandangan](#pandangan) di bawah memberi amaran supaya tidak merancang untuk penggunaan yang tinggi.

### Formula Kingman

Formula Kingman, atau persamaan VUT, menganggarkan masa menunggu bagi baris gilir satu pelayan dengan sebarang taburan ketibaan dan perkhidmatan (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Tiga faktornya ialah:

- U: faktor penggunaan ρ / (1 − ρ), iaitu lengkung penggunaan di atas.

- V: faktor kebolehubahan (ca² + cs²) / 2, dengan ca ialah pekali variasi masa antara ketibaan, dan cs ialah pekali variasi masa perkhidmatan. Pekali variasi ialah sisihan piawai dibahagi dengan min.

- T: faktor masa S, iaitu purata masa perkhidmatan.

Contoh: untuk baris gilir M/M/1, ca = cs = 1, jadi V = 1, dan formula ini memberikan masa menunggu yang sama dengan lengkung penggunaan. Jika anda menjadikan item kerja lebih seragam, seperti dengan memecahkan tiket besar supaya cs turun daripada 1 kepada hampir 0, maka V turun kepada kira-kira 0.5, dan masa menunggu berkurang kira-kira separuh pada penggunaan yang sama.

Formula Kingman menunjukkan tiga tuil untuk mengurangkan masa menunggu:

- Kurangkan penggunaan, seperti dengan menambah kapasiti atau mengehadkan kerja dalam proses.

- Kurangkan kebolehubahan, seperti dengan kelompok yang lebih kecil, item kerja yang lebih seragam, atau ketibaan yang lebih lancar.

- Kurangkan masa perkhidmatan, seperti melalui automasi.

### Pengumpulan dan Erlang C

Satu baris gilir dikongsi yang menyalurkan kepada beberapa pelayan adalah lebih baik daripada baris gilir berasingan yang masing-masing menyalurkan kepada satu pelayan. Sebab itulah bank menggunakan satu barisan yang menyalurkan kepada ramai juruwang, dan sebab itulah baris gilir sokongan yang dikongsi mengatasi baris gilir bagi setiap ejen.

Contoh: dua pelayan masing-masing mengambil masa 1 jam bagi setiap item, dan item tiba pada kadar 1.6 item sejam secara keseluruhan, jadi penggunaan ialah 80%.

- Baris gilir berasingan: setiap pelayan ialah baris gilir M/M/1 dengan 0.8 ketibaan sejam, jadi masa pendahuluan ialah 1 / (1 − 0.8) = 5 jam.

- Baris gilir terkumpul: kedua-dua pelayan berkongsi baris gilir M/M/2, jadi masa pendahuluan ialah kira-kira 2.8 jam, iaitu kira-kira 44% kurang, dengan orang yang sama dan kerja yang sama.

Formula Erlang C mengira kebarangkalian bahawa item yang tiba perlu menunggu dalam baris gilir M/M/c, dengan beban yang ditawarkan a = λ / μ dan penggunaan ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Masa menunggu ω = P(wait) / (c μ − λ)

Pasukan khidmat pelanggan menggunakan Erlang C untuk menentukan bilangan ejen yang perlu ditugaskan bagi mencapai sasaran, seperti “80% panggilan dijawab dalam masa 20 saat”.

Pengumpulan mempunyai hadnya: ia berfungsi paling baik apabila mana-mana pelayan boleh mengendalikan mana-mana item. Jika item memerlukan pakar, maka baris gilir terkumpul mungkin memerlukan peraturan penghalaan.

## Penjejakan aktiviti

### Contoh aktiviti

Katakan kami mempunyai sesuatu yang ingin kami jejaki, dan kami menamakannya dengan sesuatu yang umum seperti “Aktiviti” dan disingkatkan sebagai “A”.

Kami boleh menggunakan tatatanda baris gilir secara cekap untuk menerangkan aktiviti tersebut dan cara ia bergerak melalui baris gilir.

Contoh:

- Aκ: Kiraan aktiviti: berapa banyak item dalam baris gilir.

- Aλ: Kadar ketibaan aktiviti: berapa banyak item yang masuk bagi setiap unit masa.

- Aχ: Kadar jumlah aktiviti: berapa banyak item yang keluar dari baris gilir bagi setiap unit masa.

- Aα: Kadar kejayaan aktiviti: berapa banyak item yang betul bagi setiap unit masa.

- Aβ: Kadar kegagalan aktiviti atau kadar ralat: berapa banyak item yang salah bagi setiap unit masa.

- Aμ: Kadar perkhidmatan aktiviti atau kapasiti: berapa banyak item yang boleh disiapkan oleh satu pelayan bagi setiap unit masa ketika sibuk.

- Aσ: kadar langkau aktiviti: berapa banyak item yang diabaikan bagi setiap unit masa.

- Aρ: Nisbah penggunaan aktiviti: pecahan masa tersedia ketika pelayan sibuk, iaitu masa sibuk ÷ masa tersedia, atau λ / (c μ).

- Aε: Nisbah ralat aktiviti: berapa banyak item yang disiapkan dengan ralat berbanding jumlah keseluruhan.

- Aτ: Masa pendahuluan aktiviti: berapa lama masa berlalu dari diminta hingga disiapkan.

- Aω: Masa menunggu aktiviti: berapa lama masa berlalu dari diminta hingga dimulakan.

- Aφ: Masa kerja aktiviti: berapa lama masa berlalu dari dimulakan hingga disiapkan.

- Aθ: Masa langkah aktiviti: berapa lama masa berlalu dari satu penyiapan hingga penyiapan seterusnya.

### Hukum Little

Hukum Little ialah teorem oleh John Little yang menyatakan: purata jangka panjang bilangan pelanggan L dalam sistem pegun adalah sama dengan purata jangka panjang kadar ketibaan berkesan λ didarab dengan purata masa W yang dihabiskan oleh pelanggan dalam sistem.

Contoh tatatanda:

- L: purata jangka panjang bilangan pelanggan dalam sistem. Kami lebih suka κ (kappa).

- λ: purata jangka panjang kadar ketibaan berkesan, iaitu item yang benar-benar memasuki sistem, jadi tidak termasuk keengganan.

- W: purata jangka panjang masa sesuatu item berada dalam sistem. Kami lebih suka τ (tau).

- L = λ W ialah Hukum Little. Kami lebih suka κ = λ τ (kappa = lambda \* tau).

Hukum Little sangat umum: ia berlaku tanpa mengira taburan ketibaan, taburan perkhidmatan, bilangan pelayan, atau jenis baris gilir.

Andaian Hukum Little:

- Semua unit ukuran adalah konsisten.

- Sistem adalah stabil, iaitu purata kadar ketibaan sama dengan purata kadar pelepasan sepanjang tempoh pengukuran, dan bilangan item lebih kurang sama pada permulaan dan pada penghujungnya.

- Item yang keluar awal, seperti melalui penarikan diri, sama ada dikira secara konsisten dalam kedua-dua λ dan τ, atau dikecualikan secara konsisten daripada kedua-duanya.

Contoh: sebuah pasukan mempunyai purata κ = 20 tiket dalam proses, dan tiket tiba pada λ = 4 seminggu; dalam keadaan mantap, pasukan itu juga menyiapkan χ = 4 seminggu. Jadi purata tiket mengambil masa τ = κ / λ = 5 minggu. Untuk memendekkan masa pendahuluan sebanyak separuh tanpa bekerja lebih pantas, sila kurangkan kerja dalam proses sebanyak separuh.

### Petunjuk prestasi utama (KPI)

Kami biasanya menjejaki banyak perkara tentang aktiviti dalam baris gilir, dan kami ingin meringkaskan hasilnya dengan memilih senarai pendek petunjuk yang paling relevan untuk projek kami.

Kami telah membina banyak projek, dan kami percaya petunjuk ringkasan yang paling bernilai ialah:

- Dτ = Masa pendahuluan penghantaran. Pasukan produk mungkin menyebut “dari konsep hingga pelanggan” atau “dari idea hingga pelaksanaan”.

- Dα = Kadar kejayaan penghantaran. Pasukan DevOps mungkin menyebut “kekerapan pengerahan” atau “kami menghantar X kali sehari”.

- Dε = Nisbah ralat penghantaran. Pasukan kualiti mungkin menyebut “kadar kegagalan perubahan” atau “peratusan pengembalian semula (rollback)”.

- Rτ = Masa pendahuluan pemulihan. Jurutera kebolehpercayaan tapak mungkin menyebut “masa pemulihan pengerahan yang gagal” atau “purata masa untuk memulihkan (MTTR)”.

## Metrik perkhidmatan

Istilah yang berguna:

- **Petunjuk Tahap Perkhidmatan (SLI):** ialah metrik itu sendiri (contohnya masa operasi 99.9%)
- **Objektif Tahap Perkhidmatan (SLO):** sasaran dalaman untuk metrik tersebut (contohnya menyasarkan masa operasi 99.95%)
- **Perjanjian Tahap Perkhidmatan (SLA):** janji rasmi yang berkontrak kepada pelanggan (contohnya masa operasi 99.9% dengan penalti jika tidak dicapai).

### Purata Masa untuk Bertindak Balas, Membaiki, Memulihkan, Menyelesaikan

MTTR mewakili empat ukuran yang berbeza:

| Metrik                                 | Fokus                    | Mengukur                                        | Mula                                         | Tamat                                         |
| -------------------------------------- | ------------------------ | ----------------------------------------------- | -------------------------------------------- | --------------------------------------------- |
| **Purata Masa untuk Bertindak Balas**  | Reaksi awal              | Masa untuk mengakui dan memulakan tindakan      | Apabila insiden dikesan/dilaporkan           | Apabila pasukan mula mengusahakannya          |
| **Purata Masa untuk Membaiki**         | Pembaikan teknikal       | Masa untuk membaiki item yang rosak             | Apabila kerja pembaikan bermula              | Apabila item telah dibaiki                    |
| **Purata Masa untuk Memulihkan**       | Pemulihan perkhidmatan   | Masa untuk memulihkan perkhidmatan sepenuhnya   | Apabila insiden/gangguan bermula             | Apabila perkhidmatan beroperasi sepenuhnya    |
| **Purata Masa untuk Menyelesaikan**    | Penyelesaian lengkap     | Jumlah masa dari pengesanan hingga penutupan    | Apabila insiden dikesan                      | Apabila insiden ditutup sepenuhnya            |

**Perbezaan utama:**

**Bertindak balas** mengukur kesediaan pasukan dan keberkesanan amaran. Masa tindak balas yang rendah bermaksud proses pemantauan dan atas panggilan anda berfungsi dengan baik, walaupun pembaikan sebenar mengambil masa lebih lama.

**Membaiki** adalah teknikal secara sempit—berapa lama masa yang diperlukan untuk benar-benar membaiki perkara yang rosak sebaik sahaja anda mengusahakannya? Ia tidak termasuk masa pengesanan, triaj, dan pengesahan.

**Memulihkan** adalah tentang ketersediaan perkhidmatan dari perspektif pelanggan. Sistem mungkin telah “dibaiki” tetapi belum “dipulihkan” jika anda masih perlu memulihkan data, memanaskan cache, atau mengesahkan kefungsian.

**Menyelesaikan** adalah yang paling menyeluruh—ia merangkumi keseluruhan kitaran hayat insiden dari pengesanan pertama hingga pengesahan selepas insiden dan penutupan.

Contoh senario:

- 2:00 pagi — Gangguan bermula
- 2:05 pagi — Amaran berbunyi, insiden dikesan
- 2:15 pagi — Petugas atas panggilan mengakui dan mula bekerja → Masa tindak balas: 10 minit (2:05 hingga 2:15)
- 2:45 pagi — Punca utama dikenal pasti, pembaikan dikerahkan → Masa pembaikan: 30 minit (2:15 hingga 2:45)
- 3:00 pagi — Perkhidmatan disahkan berfungsi untuk pengguna → Masa pemulihan: 60 minit (2:00 hingga 3:00)
- 3:30 pagi — Tiket insiden ditutup selepas pengesahan → Masa penyelesaian: 85 minit (2:05 hingga 3:30)

Metrik berkaitan:

- MTBF (mean time before failure, purata masa sebelum kegagalan)
- MTTF (mean time to failure, purata masa hingga kegagalan)
- MTTA (mean time to acknowledge, purata masa untuk mengakui)

### Metrik DORA

Metrik DevOps Research and Assessment (DORA) ialah petunjuk prestasi utama (KPI) standard industri khusus untuk pasukan DevOps kejuruteraan perisian. Sila lihat [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA kini menggunakan lima metrik, dalam dua kumpulan.

Metrik daya pemprosesan:

- **Masa Pendahuluan Perubahan** - Masa untuk melaksanakan, menguji, dan menghantar kod bagi sesuatu ciri (diukur dari commit hingga pengerahan dalam pengeluaran). Sila nyatakan dengan jelas maksud anda tentang mula dan tamat. Sebagai contoh, sesetengah pasukan suka mengukur dari saat pembangun mula mengusahakan sesuatu tiket, hingga saat pembangun menolak kerja itu ke proses integrasi berterusan; pendekatan ini cenderung lebih berkesan untuk mengukur produktiviti individu.

- **Kekerapan Pengerahan** - Bilangan pengerahan dalam sesuatu tempoh masa. Sila nyatakan dengan jelas maksud anda tentang pengerahan dan cara anda menjejaki kekerapan. Sebagai contoh, sesetengah pasukan melakukan pengerahan ke sekumpulan pelayan pengeluaran dan menjejaki pelancaran penuh, manakala pasukan lain melakukan pengerahan ke satu pelayan ujian penerimaan pengguna (UAT) dan menjejaki saat pengurus projek menghantar pengumuman e-mel kepada pengguna untuk mencuba ujian.

- **Masa Pemulihan Pengerahan yang Gagal** - Masa yang diambil untuk pulih daripada pengerahan yang menyebabkan kegagalan dalam pengeluaran. Ini dahulunya dipanggil Purata Masa untuk Pemulihan (MTTR) atau Masa untuk Memulihkan Perkhidmatan. Sila nyatakan dengan jelas maksud anda tentang pemulihan. Sebagai contoh, sesetengah pasukan menganggap pemulihan sebagai penyelesaian lengkap, iaitu jumlah masa dari saat insiden dikesan hingga saat insiden ditutup sepenuhnya; pendekatan ini lebih tepat digambarkan sebagai Purata Masa untuk Menyelesaikan.

Metrik ketidakstabilan:

- **Kadar Kegagalan Perubahan** - Peratusan pengerahan yang menyebabkan kegagalan dalam pengeluaran dan memerlukan pemulihan segera, seperti pengembalian semula (rollback) atau pembaikan segera (hotfix). Sila nyatakan dengan jelas maksud anda tentang kegagalan. Sebagai contoh, sesetengah pasukan juga mengira kegagalan apabila mereka mula mengusahakan tiket kerja kemudian menyedari tiket kerja itu tidak mempunyai maklumat yang mencukupi untuk diteruskan, jadi pasukan menolak tiket kerja itu kembali kepada pasukan spesifikasi.

- **Kadar Kerja Semula Pengerahan** - Peratusan pengerahan yang tidak dirancang, seperti untuk membaiki insiden pengeluaran. Ini ialah pengerahan yang tidak dirancang dibahagi dengan jumlah pengerahan. DORA menambah metrik ini pada tahun 2024.

Laporan DORA terdahulu juga membincangkan **Kebolehpercayaan** sebagai metrik prestasi operasi: penilaian yang lebih luas, sering kualitatif, tentang ketekalan perkhidmatan, seperti ketersediaan, masa operasi, kependaman, ketepatan, dan objektif tahap perkhidmatan. Kebolehpercayaan membantu menunjukkan bahawa halaju yang tinggi tidak datang dengan mengorbankan keupayaan sistem.

## Baris gilir bagi baris gilir

Teori baris gilir mudah dilanjutkan kepada baris gilir bagi baris gilir, seperti proses peringkat tinggi yang mengandungi tahap, fasa, atau gerbang peringkat rendah.

### Baris gilir bagi baris gilir Double Diamond

Sebagai contoh, pertimbangkan model proses inovasi “Double Diamond”, yang menetapkan empat tahap:

1. Teroka: Fahami isu itu dan bukannya sekadar menganggap apa isu itu.
2. Takrif: Dengan pandangan daripada fasa penerokaan, takrifkan cabaran itu.
3. Bangunkan: Berikan jawapan yang berbeza kepada masalah yang telah ditakrifkan dengan jelas.
4. Hantar: Uji penyelesaian yang berbeza pada skala kecil kemudian tambah baiknya.

Teori baris gilir boleh memodelkan ini sebagai satu baris gilir proses yang mengandungi empat baris gilir tahap:

- Kadar ketibaan proses ialah kadar ketibaan tahap 1.
- Kadar kejayaan proses ialah kadar kejayaan tahap 4.
- Kiraan ralat proses ialah jumlah kiraan ralat semua tahap.
- Kiraan langkau proses ialah jumlah kiraan langkau semua tahap.
- Masa pendahuluan proses ialah jumlah masa pendahuluan semua tahap.
- Daya pemprosesan maksimum proses ialah daya pemprosesan tahap yang paling perlahan, atau kesesakan (bottleneck).

### Baris gilir bagi baris gilir corong

Dalam kerja praktikal kami, kami kerap menggunakan perkataan “corong” untuk menerangkan secara longgar baris gilir bagi baris gilir yang cenderung mengurangkan kiraan item pada setiap tahap:

- Baris gilir pengambilan pekerja yang menggunakan tahap jangkauan, tahap temu duga, dan tahap tawaran. Untuk baris gilir jenis ini, kami berhasrat untuk memaksimumkan kadar ketibaan tahap 1, iaitu meningkatkan jangkauan kami, seperti melalui promosi.

- Baris gilir pembelian yang menggunakan tahap carian pelanggan, tahap troli beli-belah, dan tahap pembayaran. Untuk baris gilir jenis ini, kami berhasrat untuk meminimumkan kadar langkau tahap 2, iaitu mengurangkan pengabaian troli, seperti melalui peringatan.

- Baris gilir pengaturcaraan yang menggunakan tahap integrasi, tahap penerimaan pengguna, dan tahap pelancaran pengeluaran. Untuk baris gilir jenis ini, kami berhasrat untuk meminimumkan kadar ralat tahap pelancaran pengeluaran, seperti melalui telemetri canary.

## Kitaran ganas kerja berlebihan

Apabila kadar ketibaan meningkat, ini mengenakan lebih tekanan pada sistem dan menolak sistem lebih dekat kepada kapasitinya (iaitu penggunaan 100%). Ini menyebabkan masa kitaran meningkat dengan pantas menuju ketakterhinggaan, dan kerja dalam proses bertambah, yang seterusnya menyebabkan hasil menjadi lebih perlahan.

Ini mendorong corak biasa dalam industri yang kami panggil “kitaran ganas kerja berlebihan”: apabila hasil menjadi cukup buruk, pengurus meluluskan lebih banyak sumber (seperti kerja lebih masa atau pengambilan bantuan tambahan), yang menambah baik kapasiti sistem. Tetapi sebaik sahaja sistem pulih, pengurus menamatkan kerja lebih masa, dan beban berlebihan bermula semula. Gelung ini boleh berlaku dengan pantas dan membinasakan. Penyelesaiannya ialah pengurus meluangkan masa untuk memahami sistem, kapasiti dan penggunaan.

## Pandangan

Tujuh pandangan tentang teori baris gilir, oleh Bob Wescott, pengarang “The Every Computer Performance Book” (sila lihat juga [ringkasan Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Semakin perlahan pusat perkhidmatan, semakin rendah penggunaan maksimum yang patut anda rancang pada beban puncak.

2. Amat sukar untuk menggunakan 15% terakhir daripada apa-apa sahaja.

3. Semakin hampir anda ke tepi, semakin tinggi harga yang perlu dibayar jika tersilap.

4. Peningkatan masa tindak balas dihadkan oleh bilangan yang boleh menunggu.

5. Sila ingat bahawa ini ialah purata, bukan maksimum.

6. Terdapat kesan penafian manusia dalam pelbagai pusat perkhidmatan.

7. Tunjukkan penambahbaikan kecil dalam cahaya terbaiknya.

## Aliran proses

Aliran proses ialah satu jujukan proses. Item, atau operasi, atau tugas, dsb. bergerak melalui aliran proses.

Contohnya, barisan pembuatan terdiri daripada beberapa stesen secara bersiri yang dilalui oleh tugas. Hospital mengandungi banyak jujukan operasi yang saling bersambung (kemasukan, rawatan di dalam bilik, persediaan pembedahan, pembedahan, pemulihan, dsb.) yang dilalui oleh pesakit. Bank melibatkan jujukan operasi yang dilalui oleh wang. Memahami aliran adalah asas untuk mereka bentuk dan mengurus sistem operasi yang berkesan.

### Parameter kelakuan

Kelakuan aliran proses bergantung pada dua parameter:

- Kadar kesesakan: kapasiti aliran (iaitu kadar proses yang mempunyai penggunaan tertinggi).

- Masa proses mentah: jumlah masa yang dihabiskan oleh entiti untuk diproses dalam aliran (iaitu purata masa yang diperlukan oleh sesuatu entiti untuk melalui aliran kosong).

### Parameter kebolehubahan

Kebolehubahan aliran proses bergantung pada dua parameter:

- Kebolehubahan aliran: kebolehubahan dalam masa antara ketibaan entiti ke sistem.

- Kebolehubahan proses: kebolehubahan dalam masa proses di sistem.

Pertimbangkan aliran proses yang mengalami kedua-dua kebolehubahan aliran dan kebolehubahan proses. Seperti yang dijangka, kebolehubahan aliran yang keluar daripada sesebuah stesen bergantung pada kebolehubahan aliran yang masuk ke dalamnya dan kebolehubahan proses yang tercipta di stesen itu sendiri. Berapa banyak ia bergantung pada setiap satu merupakan fungsi penggunaan sistem.

Kebolehubahan ialah faktor dominan yang menjejaskan prestasi aliran proses berbanding prestasi kes terbaik. Oleh itu, memahami kebolehubahan dan mencari cara untuk menyingkirkannya merupakan teras kepada banyak metodologi penambahbaikan operasi.

## Epilog

### Lihat juga

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Bidang Wikipedia tempat kami menggunakan baris gilir dalam banyak projek:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Pengenalan oleh John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Pengenalan dengan lebih terperinci:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formula:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Kredit

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Buku ini sangat baik untuk DevOps peringkat tinggi, dan secara langsung mempengaruhi pilihan KPI kami. KPI dalam halaman ini selaras dengan cadangan buku tersebut.

[Supply Chain Science. By Waler Hopp](https://archive.org/details/supplychainscien0000hopp). Buku ini menerangkan baris gilir dan aliran proses, termasuk jenis matematik yang serupa, dengan penekanan pada pengurusan perniagaan.

## Maklumat projek

- Pakej: queue-theory
- Versi: 3.0.0
- Dicipta: 2019-01-25T04:17:56Z
- Dikemas kini: 2026-11-23T15:33:48Z
- Lesen: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, atau sila hubungi kami untuk terma lain (sila lihat [LICENSE.md](LICENSE.md))
- Hubungi: Joel Parker Henderson <joel@joelparkerhenderson.com>
