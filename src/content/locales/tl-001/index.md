# Teorya ng pila

Ang teorya ng pila ay ang pag-aaral sa matematika ng mga hanay ng naghihintay, o mga pila. Ginagamit namin ang teorya ng pila sa aming pagbuo ng software, para sa mga layunin tulad ng pagsusuri at pagpapahusay ng aming mga gawi at proseso, gaya ng pagtugon ng aming serbisyo sa customer, pagpaplanong kanban sa pamamahala ng proyekto, mga message queue para sa komunikasyon sa pagitan ng mga proseso, at mga pipeline ng tuloy-tuloy na deployment sa DevOps.

Nilalaman:

- [Panimula](#panimula)
  - [Pagtugon sa serbisyo sa customer](#pagtugon-sa-serbisyo-sa-customer)
  - [Pagpaplanong kanban sa pamamahala ng proyekto](#pagpaplanong-kanban-sa-pamamahala-ng-proyekto)
  - [Mga message queue para sa komunikasyon sa pagitan ng mga proseso](#mga-message-queue-para-sa-komunikasyon-sa-pagitan-ng-mga-proseso)
  - [Mga pipeline ng tuloy-tuloy na deployment sa DevOps](#mga-pipeline-ng-tuloy-tuloy-na-deployment-sa-devops)
- [Terminolohiya ng pila](#terminolohiya-ng-pila)
  - [Mga uri ng pila at mga uri ng serbisyo](#mga-uri-ng-pila-at-mga-uri-ng-serbisyo)
- [Notasyon ng teorya ng pila](#notasyon-ng-teorya-ng-pila)
  - [Bilang](#bilang)
  - [Rate ng pagdating, rate ng serbisyo, rate ng pag-alis](#rate-ng-pagdating-rate-ng-serbisyo-rate-ng-pag-alis)
  - [Ratio ng utilisasyon, o intensidad ng trapiko](#ratio-ng-utilisasyon-o-intensidad-ng-trapiko)
  - [Mga rate ng throughput: kabuuang rate, rate ng pagkumpleto, rate ng tagumpay, rate ng pagkabigo, rate ng paglaktaw](#mga-rate-ng-throughput-kabuuang-rate-rate-ng-pagkumpleto-rate-ng-tagumpay-rate-ng-pagkabigo-rate-ng-paglaktaw)
  - [Paglilinaw sa rate ng serbisyo](#paglilinaw-sa-rate-ng-serbisyo)
  - [Rate ng paglaktaw](#rate-ng-paglaktaw)
  - [Ratio ng error](#ratio-ng-error)
  - [Lead time, step time, tagal ng trabaho, tagal ng paghihintay](#lead-time-step-time-tagal-ng-trabaho-tagal-ng-paghihintay)
  - [Notasyon ni Kendall](#notasyon-ni-kendall)
- [Matematika ng pila](#matematika-ng-pila)
  - [Ang kurba ng utilisasyon](#ang-kurba-ng-utilisasyon)
  - [Pormula ni Kingman](#pormula-ni-kingman)
  - [Pagsasama-sama ng pila at Erlang C](#pagsasama-sama-ng-pila-at-erlang-c)
- [Pagsubaybay sa aktibidad](#pagsubaybay-sa-aktibidad)
  - [Mga halimbawa ng aktibidad](#mga-halimbawa-ng-aktibidad)
  - [Batas ni Little](#batas-ni-little)
  - [Mga pangunahing tagapagpahiwatig ng pagganap (KPI)](#mga-pangunahing-tagapagpahiwatig-ng-pagganap-kpi)
- [Mga sukatan ng serbisyo](#mga-sukatan-ng-serbisyo)
  - [Karaniwang tagal ng pagtugon, pagkukumpuni, pagbawi, paglutas](#karaniwang-tagal-ng-pagtugon-pagkukumpuni-pagbawi-paglutas)
  - [Mga sukatan ng DORA](#mga-sukatan-ng-dora)
- [Pila ng mga pila](#pila-ng-mga-pila)
  - [Pila ng mga pila na Double Diamond](#pila-ng-mga-pila-na-double-diamond)
  - [Pila ng mga pila na hugis-funnel](#pila-ng-mga-pila-na-hugis-funnel)
- [Mga kabatiran](#mga-kabatiran)
- [Pangwakas](#pangwakas)
  - [Tingnan din](#tingnan-din)
  - [Pasasalamat](#pasasalamat)
- [Pagsubaybay](#pagsubaybay)

## Panimula

Ginagamit namin ang teorya ng pila sa aming mga proyekto para sa maraming layunin:

- Pagtugon sa serbisyo sa customer

- Pagpaplanong kanban sa pamamahala ng proyekto

- Mga message queue para sa komunikasyon sa pagitan ng mga proseso

- Mga pipeline ng tuloy-tuloy na deployment sa DevOps

### Pagtugon sa serbisyo sa customer

Halimbawa, nais naming suriin kung paano humihingi ang mga customer ng tulong sa pagbebenta at tulong sa suporta, at kung gaano kabilis kami tumutugon.

Ilan sa mga kaugnay na produkto ay, halimbawa, [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Pagpaplanong kanban sa pamamahala ng proyekto

Halimbawa, nais naming subaybayan ang mga lead time at tagal ng pag-usad habang umuunlad ang isang bagong ideya ng feature mula disenyo hanggang paghahatid.

Ilan sa mga kaugnay na produkto ay, halimbawa, [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Mga message queue para sa komunikasyon sa pagitan ng mga proseso

Halimbawa, nais naming pataasin hangga't maaari ang throughput at pababain hangga't maaari ang presyon habang nagpapadala ang isang programa ng mga kahilingan sa isa pang programa.

Ilan sa mga kaugnay na produkto ay, halimbawa, [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Mga pipeline ng tuloy-tuloy na deployment sa DevOps

Halimbawa, nais naming tiyakin na may sapat na kapasidad ang aming continuous integration server upang subukin ang aming software at pagkatapos ay i-deploy ito.

Ilan sa mga kaugnay na produkto ay, halimbawa, [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Terminolohiya ng pila

Malawak na paksa ang terminolohiya ng pila. Naglalaman ang bahaging ito ng ilan sa aming karaniwang terminolohiya. Para sa mga halimbawa, gagamitin namin ang ideya ng isang customer na naghihintay sa pila.

### Mga uri ng pila at mga uri ng serbisyo

Inilalarawan ng mga uri ng pila at mga uri ng serbisyo kung paano pinipili ng pila kung aling mga item ang ipoproseso.

- First In First Out (FIFO): pagsilbihan ang customer na pinakamatagal nang naghihintay.

- Last In First Out (LIFO): pagsilbihan ang customer na pinakamaikling panahon pa lamang naghihintay.

- Priyoridad: pagsilbihan ang mga customer batay sa antas ng kanilang priyoridad; maaaring nakabatay ang mga antas na ito sa katayuan, pagkaapurahan, bayad, at iba pa.

- Shortest Job First (SJF): pagsilbihan ang customer na nangangailangan ng pinakamaliit na dami ng serbisyo.

- Longest Job First (LJF): pagsilbihan ang customer na nangangailangan ng pinakamalaking dami ng serbisyo.

- Shortest Remaining Processing Time (SRPT): katulad ng SJF, ngunit maaaring unahan ng isang bagong dating na maikling trabaho ang isang mas mahabang trabahong kasalukuyang pinagsisilbihan.

- Round Robin: pagsilbihan ang bawat customer sa loob ng maikling hati ng oras, pagkatapos ay lumipat sa susunod na customer, at ulitin.

- Time Sharing, o Processor Sharing (PS): pagsilbihan ang lahat nang sabay-sabay; pantay na hinahati ang kapasidad ng serbisyo sa lahat ng naghihintay.

Pinaliliit ng SJF at SRPT ang karaniwang paghihintay, ngunit maaari nilang pabayaang maghintay nang walang katapusan ang mahahabang trabaho, kaya madalas na nagdaragdag ang mga totoong sistema ng aging o ng mga hangganan sa priyoridad.

## Notasyon ng teorya ng pila

Gumagamit ang teorya ng pila ng notasyong may mga letrang Griyego.

Ginagamit ng aming mga koponan ang ilan sa mga sikat na notasyon; nagdaragdag din kami ng ilang pasadyang notasyon na tumutulong sa amin sa mga proyekto ng software.

Aming notasyon at ang kahulugan ng bawat simbolo:

| Aming notasyon | Kahulugan |
| -------------- | --------- |
| κ (kappa) | bilang ng mga item sa sistema, mga naghihintay at mga pinagtatrabahuhan |
| λ (lambda) | rate ng pagdating ng mga item na pumapasok sa sistema |
| χ (chi) | rate ng pag-alis ng mga item na lumalabas sa sistema |
| μ (mu) | rate ng serbisyo, o kapasidad: kung gaano kabilis gumagana ang isang server habang abala |
| ρ (rho) | utilisasyon: ang bahagi ng oras na abala ang mga server, λ / (c μ) |
| α (alpha) | rate ng tagumpay: nasusukat na output na lumalabas na tama |
| β (beta) | rate ng pagkabigo: nasusukat na output na lumalabas na mali |
| δ (delta) | rate ng pagkumpleto: tagumpay + pagkabigo, mga item na napagsilbihan, tama man o mali ang kinalabasan |
| σ (sigma) | rate ng paglaktaw: mga item na pumasok, pagkatapos ay umalis nang hindi napagsilbihan |
| ε (epsilon) | ratio ng error: β / (α + β) = β / δ |
| τ (tau) | tagal sa sistema, o lead time |
| ω (omega) | tagal ng paghihintay, o tagal sa pila |
| φ (phi) | tagal ng trabaho, o tagal sa processor, o tagal ng serbisyo |
| θ (theta) | step time sa pagitan ng mga pagkumpleto; karaniwang step time ≈ 1 / χ sa steady state |

### Bilang

Madalas kaming nagbibilang ng mga item, at ginagamit namin ang notasyong ito:

- κ (kappa): bilang ng mga item sa sistema, ibig sabihin ay mga item na naghihintay at mga item na pinagtatrabahuhan.

![Diagram: may κ na item sa sistema](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

![Diagram: dumarating ang mga item sa rate na λ at umaalis sa rate na χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-rate-chi-departure-rate.svg)

Halimbawa:

- κ = 10 ay nangangahulugang eksaktong 10

- κ ≈ 10 ay nangangahulugang humigit-kumulang 10

- κ < 10 ay nangangahulugang mas kaunti sa 10

- κ > 10 ay nangangahulugang higit sa 10

- κ ≪ 10 ay nangangahulugang mas kaunti nang malaki sa 10

- κ ≫ 10 ay nangangahulugang mas marami nang malaki sa 10

Ang bilang na κ (kappa) ay isang snapshot sa isang sandali.

Ang karaniwang bilang na κ̅ (kappa na may guhit) ay isang kalkulasyon na kumukuha ng average ng mga sukat sa isang tiyak na yugto ng panahon, tulad ng pagsukat tuwing oras sa loob ng dalawang linggo.

### Rate ng pagdating, rate ng serbisyo, rate ng pag-alis

Ang pinakamahalagang notasyon:

- λ (lambda): rate ng pagdating. Sinusukat nito kung gaano kabilis pumapasok ang mga item sa sistema.

- μ (mu): rate ng serbisyo, o kapasidad. Sinusukat nito kung gaano kabilis kayang asikasuhin ng isang server ang mga item habang ito ay abala.

- χ (chi): rate ng pag-alis. Sinusukat nito kung gaano kabilis lumalabas ang mga item sa sistema.

Mga halimbawa ng pangkalahatang tuntunin para sa mga tradisyonal na pila na may iisang server:

- λ < μ ay nangangahulugang mas mababa ang rate ng pagdating kaysa sa rate ng serbisyo; matatag ang pila, ibig sabihin ay pabago-bago ito sa paligid ng isang may-hangganang karaniwang laki.

- λ = μ ay nangangahulugang magkapantay ang rate ng pagdating at ang rate ng serbisyo; kung may kahit kaunting pagkasapalaran, unti-unting lumilihis ang pila at lumalaki nang walang hangganan.

- λ > μ ay nangangahulugang mas mataas ang rate ng pagdating kaysa sa rate ng serbisyo; patuloy na lumalaki ang pila, nang humigit-kumulang λ − μ item bawat yunit ng oras.

Ang intuwitibong ideya na “pinananatili ng λ = μ ang parehong laki ng pila” ay totoo lamang kapag ganap na regular ang mga pagdating at ang serbisyo, tulad ng isang metronome. Pabugso-bugso ang mga totoong pagdating, kaya hindi na kailanman mababawi ang oras na nasayang sa pagiging idle sa panahon ng katahimikan, at lumalaki ang pila sa susunod na bugso.

Pakitandaan po na may ilang practitioner ng teorya ng pila na gumagamit ng “rate ng serbisyo” upang tukuyin ang nasusukat na output sa halip na ang kapasidad; pakitingnan ang [paglilinaw sa rate ng serbisyo](#paglilinaw-sa-rate-ng-serbisyo).

### Ratio ng utilisasyon, o intensidad ng trapiko

Ang pinakamahalagang notasyon na nagbubuod sa isang pila:

- ρ (rho): ratio ng utilisasyon, ibig sabihin ay ang bahagi ng oras na abala ang mga server = λ / μ para sa isang server, o λ / (c μ) para sa c na server

Mga halimbawa:

- ρ < 1 ay nangangahulugang may ekstrang kapasidad ang mga server; matatag ang pila. Habang lumalapit ang ρ sa 1, humahaba ang mga paghihintay; pakitingnan ang [kurba ng utilisasyon](#ang-kurba-ng-utilisasyon).

- ρ = 1 ay nangangahulugang abala ang mga server sa lahat ng oras; hindi matatag ang pila at lumalaki ito nang walang hangganan.

- ρ > 1 ay nangangahulugang lumalampas ang mga pagdating sa kapasidad; lumalaki ang pila.

### Mga rate ng throughput: kabuuang rate, rate ng pagkumpleto, rate ng tagumpay, rate ng pagkabigo, rate ng paglaktaw

Sinusukat ng mga rate ng throughput ang nasusukat na output, ibig sabihin ay ang mga item na talagang lumalabas sa pila. Nahahati ang mga ito sa limang malalawak na kategorya:

- χ (chi): kabuuang rate. Sinusukat nito kung ilang item bawat oras ang lumalabas sa pila sa anumang dahilan: tagumpay, pagkabigo, paglaktaw, at iba pa.

- α (alpha): rate ng tagumpay. Sinusukat nito kung ilang item bawat yugto ng oras ang lumalabas na tama, halimbawa, wasto, kumpleto, tinanggap.

- β (beta): rate ng pagkabigo. Sinusukat nito kung ilang item bawat yugto ng oras ang lumalabas na mali, halimbawa, hindi wasto, hindi kumpleto, tinanggihan.

- δ (delta): rate ng pagkumpleto. Sinusukat nito kung ilang item bawat yugto ng oras ang napagsisilbihan, tama man o mali ang kinalabasan: tagumpay + pagkabigo.

- σ (sigma): rate ng paglaktaw. Sinusukat nito kung ilang item bawat yugto ng oras ang pumapasok sa pila, pagkatapos ay umaalis nang hindi napagsisilbihan, halimbawa ay pag-abandona at pag-urong.

Rate ng pagkumpleto = rate ng tagumpay + rate ng pagkabigo:

- δ = α + β (binibigkas: delta ay katumbas ng alpha dagdag beta)

Kabuuang rate = rate ng pagkumpleto + rate ng paglaktaw:

- χ = δ + σ (binibigkas: chi ay katumbas ng delta dagdag sigma)

Kabuuang rate = rate ng tagumpay + rate ng pagkabigo + rate ng paglaktaw:

- χ = α + β + σ (binibigkas: chi ay katumbas ng alpha dagdag beta dagdag sigma)

![Diagram: umaalis ang mga item sa sistema bilang tagumpay α, pagkabigo β, o paglaktaw σ; δ = α + β, χ = δ + σ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-sigma-skip-chi-departure.svg)

Pumasok sa sistema ang bawat item na binilang sa χ, kaya sa steady state ay katumbas ng kabuuang rate ang rate ng pagdating: χ ≈ λ. Iyan ang dahilan kung bakit output ang sinusukat ng mga rate ng throughput, hindi kapasidad.

### Paglilinaw sa rate ng serbisyo

Depende sa konteksto at sa practitioner, maaaring mangahulugan ang terminong “rate ng serbisyo” ng alinman sa
“kabuuang rate” o “rate ng tagumpay”.

May makasaysayang ugat ito at maaaring humantong sa kalituhan at mga pagkakamali, lalo na sa mga
konteksto at practitioner na gumagamit ng teorya ng pila kung saan may malaking pangangailangang
subaybayan ang mga pagkabigo at paglaktaw.

- Teoretikal na Pananaw: Ang rate ng serbisyo ay purong sukat ng bilis (halimbawa, mga trabaho bawat segundo), anuman kung ang mga trabaho ay tagumpay, pagkabigo, paglaktaw, at iba pa.

- Pananaw ng Pagproseso: Kasama sa rate ng serbisyo ang anumang pinaglalaanan ng oras ng pila sa pagproseso, ibig sabihin ay mga tagumpay o pagkabigo, ngunit hindi kasama ang mga paglaktaw.

- Pananaw ng Teknolohiya: Sa mga inilalapat na larangan tulad ng software engineering, mga tagumpay lamang ang sinusukat ng rate ng serbisyo, samantalang ang mga pagkabigo ang sinusukat ng rate ng error, at ang mga paglaktaw ang sinusukat ng rate ng paglaktaw.

Kaya pinananatili namin ang μ para sa kapasidad, at nagdaragdag kami ng mga rate ng nasusukat na output sa tabi nito, sa halip na palitan ito:

- μ (mu): rate ng serbisyo, o kapasidad. Sinusukat nito kung gaano kabilis kayang asikasuhin ng isang server ang mga item habang ito ay abala.

- χ (chi): kabuuang rate. Sinusukat nito kung ilang item bawat oras ang lumalabas sa pila sa anumang dahilan: tagumpay, pagkabigo, paglaktaw, at iba pa.

- α (alpha): rate ng tagumpay. Sinusukat nito kung ilang item bawat yugto ng oras ang lumalabas na tama, halimbawa, wasto, kumpleto, tinanggap.

Bakit hindi palitan ang μ ng χ o α? Sa isang matatag na pila, ang bawat item na pumapasok ay kalaunang umaalis, kaya χ ≈ λ. Kung gayon, λ / χ ≈ 1 anuman ang karga, na walang sinasabi tungkol sa kung gaano kaabala ang mga server. Nangangailangan ng kapasidad ang utilisasyon: ρ = λ / (c μ), na katumbas ng bahagi ng oras na abala ang mga server.

### Rate ng paglaktaw

Mga detalye ng rate ng paglaktaw:

- σ (sigma): rate ng paglaktaw. Sinusukat nito kung ilang item ang pumapasok sa pila, pagkatapos ay umaalis nang hindi napoproseso.

Ang paglaktaw ay kapag pumasok ang isang item sa pila, pagkatapos ay umalis nang walang makabuluhang pagproseso:

- Pag-abandona: kapag sumali ang isang customer sa pila, pagkatapos ay umalis, sa anumang dahilan.

- Pag-urong (reneging): kapag nagpasya ang isang customer na naghintay na na umalis dahil masyado nang maraming oras ang nasayang niya.

May dalawang kaugnay na pag-uugali na hindi itinuturing na paglaktaw:

- Pag-atras (balking): kapag nagpasya ang isang customer na huwag sumali sa pila dahil nagbabanta na masyadong mahaba ang paghihintay. Hindi kailanman pumapasok sa sistema ang isang umatras na item, kaya nasa labas ito ng hangganan ng sistema: hindi ito binibilang sa λ, χ, o σ. Kung mahalaga ang mga pag-atras, tulad ng mga nawalang benta, bilangin ang mga ito nang hiwalay bilang mga pagdating na hindi tinanggap.

- Paglipat-lipat (jockeying): kapag lumilipat ang isang customer sa pagitan ng magkakaagapay na pila, tulad ng mga linya sa checkout, upang subukang makakuha ng mas maikling paghihintay.

### Ratio ng error

Ang pinakamahalagang notasyon na nagbubuod sa tagumpay ng isang pila:

- ε (epsilon): ratio ng error = bilang ng pagkabigo / (bilang ng tagumpay + bilang ng pagkabigo) = β / (α + β) = β / δ

Hindi kasama ang mga paglaktaw, dahil ang isang nilaktawang item ay hindi kailanman napagsilbihan, kaya hindi ito tama o mali. Subaybayan ang mga paglaktaw nang hiwalay sa pamamagitan ng σ.

![Diagram: ang rate ng pagkumpleto δ ay ang rate ng tagumpay α dagdag ang rate ng pagkabigo β, at ang ratio ng error ε ay ang rate ng pagkabigo β hinati sa rate ng pagkumpleto δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Mga halimbawa:

- ε = 0 ay nangangahulugang walang error.

- ε = 0.1 ay nangangahulugang 10% ng mga serbisyo ang may error.

- ε = 1 ay nangangahulugang may error ang bawat serbisyo.

### Lead time, step time, tagal ng trabaho, tagal ng paghihintay

Apat na tagal ang aming sinusubaybayan:

- τ (tau): lead time = mula sa simula ng pila hanggang sa pagtatapos ng pila

- θ (theta): step time = mula sa isang pagtatapos hanggang sa susunod na pagtatapos; ang isang step time ay isang puwang, at ang karaniwang step time ay ang karaniwang puwang

- φ (phi): tagal ng trabaho = oras na ginugol sa aktuwal na trabaho, o tagal ng pagproseso

- ω (omega): tagal ng paghihintay = oras na hindi ginugol sa aktuwal na trabaho, o tagal ng pagkabinbin

![Diagram: ang lead time τ ay ang tagal ng paghihintay ω na sinusundan ng tagal ng trabaho φ, kaya τ = ω + φ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time.svg)

Mga halimbawa:

- τ = 5s ay nangangahulugang idinagdag ang isang item sa pila, pagkatapos ay napagsilbihan pagkalipas ng 5 segundo.

- ω = 4s ay nangangahulugang naghihintay ang isang item sa pila nang 4 na segundo, pagkatapos ay nagsisimula ang trabaho.

- φ = 1s ay nangangahulugang tumatagal ng 1 segundo ng trabaho ang isang item, pagkatapos ay kumpleto na ito.

- θ = 1s ay nangangahulugang may 1 segundo sa pagitan ng isang pagkumpleto at ng susunod na pagkumpleto.

Mga ugnayan:

- τ = ω + φ: ang lead time ay ang tagal ng paghihintay at tagal ng trabaho. Sa mga halimbawa, 5s = 4s + 1s.

- karaniwang θ ≈ 1 / χ: sa steady state, ang karaniwang step time ay ang kabaligtaran ng kabuuang rate. Kaunti lamang ang sinasabi ng iisang puwang tungkol sa rate; mas marami ang sinasabi ng karaniwan ng maraming puwang. Sa mga halimbawa, kung 1s ang karaniwang step time, kung gayon χ ≈ 1 item bawat segundo.

### Notasyon ni Kendall

Ang notasyon ni Kendall ay ibang notasyon ng teorya ng pila, na isinusulat bilang A/S/c/K/N/D:

- A: ang proseso ng pagdating, ibig sabihin ay ang distribusyon ng oras sa pagitan ng mga pagdating.

- S: ang proseso ng serbisyo, ibig sabihin ay ang distribusyon ng mga tagal ng serbisyo.

- c: ang bilang ng mga server.

- K: ang kapasidad, ibig sabihin ay ang pinakamaraming bilang ng mga item na pinapayagan sa sistema, naghihintay man o pinagsisilbihan, bago tanggihan ang mga bagong pagdating.

- N: ang populasyon, ibig sabihin ay ang bilang ng mga posibleng customer.

- D: ang disiplina, ibig sabihin ay ang uri ng pila, tulad ng FIFO o LIFO.

Mga karaniwang letra para sa A at S:

- M: Markovian, o walang memorya, ibig sabihin ay mga eksponensiyal na tagal, na nagmumula sa mga pagdating na Poisson.

- D: Deterministic, ibig sabihin ay mga di-nagbabagong tagal.

- G: General, ibig sabihin ay anumang distribusyon.

Kapag inalis ang huling tatlo, ang mga default ay K = ∞, N = ∞, D = FIFO. Halimbawa, ang “M/M/1” ay nangangahulugang mga pagdating na Poisson, mga eksponensiyal na tagal ng serbisyo, isang server, walang limitasyong kapasidad, walang limitasyong populasyon, at first in first out.

Gayundin:

- n: ang bilang ng mga item sa sistema.

## Matematika ng pila

Gumagamit ang mga bahagi ng matematika ng mga simbolo ng aklat-aralin, upang maihambing ninyo ang mga ito sa ibang sanggunian: ang S ay ang karaniwang tagal ng serbisyo, na siyang aming φ, at ang μ = 1 / S ay ang kapasidad ng isang server.

### Ang kurba ng utilisasyon

Ang pinakamahalagang resulta sa teorya ng pila: habang lumalapit sa 100% ang utilisasyon, lumalaki nang walang hangganan ang tagal ng paghihintay, at pinakamabilis itong lumalaki sa dulo.

Para sa isang M/M/1 na pila, kung saan ang S ay ang karaniwang tagal ng serbisyo:

- Lead time τ = S / (1 − ρ)

- Tagal ng paghihintay ω = S × ρ / (1 − ρ)

| Utilisasyon ρ | Lead time τ | Tagal ng paghihintay ω |
| ------------- | ----------- | ---------------------- |
| 50%           | 2 × S       | 1 × S                  |
| 70%           | 3.3 × S     | 2.3 × S                |
| 80%           | 5 × S       | 4 × S                  |
| 90%           | 10 × S      | 9 × S                  |
| 95%           | 20 × S      | 19 × S                 |
| 99%           | 100 × S     | 99 × S                 |

Halimbawa: tumatagal ng 1 oras ng trabaho ang isang code review. Kung 80% na abala ang mga reviewer, tumatagal ang isang review nang humigit-kumulang 5 oras mula sa kahilingan hanggang sa pagkatapos. Kung 95% na abala ang mga reviewer, tumatagal ito nang humigit-kumulang 20 oras, kahit na 15 percentage point lamang ang idinagdag sa pagiging abala ng mga reviewer.

Ito ang dahilan kung bakit resipe para sa mahahabang lead time ang “panatilihing 100% abala ang lahat”, at kung bakit nagbababala ang mga [kabatiran](#mga-kabatiran) sa ibaba laban sa pagpaplano para sa mataas na utilisasyon.

### Pormula ni Kingman

Tinatantiya ng pormula ni Kingman, na kilala rin bilang VUT equation, ang tagal ng paghihintay para sa isang pila na may iisang server na may anumang distribusyon ng pagdating at serbisyo (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Ang tatlong salik ay:

- U: salik ng utilisasyon ρ / (1 − ρ), na siyang kurba ng utilisasyon sa itaas.

- V: salik ng pagkakaiba-iba (ca² + cs²) / 2, kung saan ang ca ay ang coefficient of variation ng oras sa pagitan ng mga pagdating, at ang cs ay ang coefficient of variation ng mga tagal ng serbisyo. Ang coefficient of variation ay ang standard deviation na hinati sa mean.

- T: salik ng oras S, ang karaniwang tagal ng serbisyo.

Halimbawa: para sa isang M/M/1 na pila, ca = cs = 1, kaya V = 1, at nagbibigay ang pormula ng parehong tagal ng paghihintay gaya ng kurba ng utilisasyon. Kung gagawin ninyong mas magkakapareho ang mga item ng trabaho, tulad ng paghahati sa malalaking ticket upang bumaba ang cs mula 1 hanggang malapit sa 0, bababa ang V sa humigit-kumulang 0.5, at halos mangangalahati ang tagal ng paghihintay sa parehong utilisasyon.

Ipinapakita ng pormula ni Kingman ang tatlong panghila para mabawasan ang tagal ng paghihintay:

- Bawasan ang utilisasyon, tulad ng pagdaragdag ng kapasidad o paglilimita sa trabahong kasalukuyang isinasagawa.

- Bawasan ang pagkakaiba-iba, tulad ng mas maliliit na batch, mas magkakaparehong item ng trabaho, o mas maayos na daloy ng pagdating.

- Bawasan ang tagal ng serbisyo, tulad ng sa pamamagitan ng automation.

### Pagsasama-sama ng pila at Erlang C

Mas mabuti ang isang pinagsasaluhang pila na nagpapakain sa ilang server kaysa sa magkakahiwalay na pila na bawat isa ay nagpapakain sa isang server. Ito ang dahilan kung bakit gumagamit ang mga bangko ng isang linya na nagpapakain sa maraming teller, at kung bakit mas mahusay ang isang pinagsasaluhang pila ng suporta kaysa sa mga pila para sa bawat ahente.

Halimbawa: tumatagal ang bawat isa sa dalawang server nang 1 oras bawat item, at dumarating ang mga item sa 1.6 item bawat oras sa kabuuan, kaya 80% ang utilisasyon.

- Magkakahiwalay na pila: ang bawat server ay isang M/M/1 na pila na may 0.8 pagdating bawat oras, kaya ang lead time ay 1 / (1 − 0.8) = 5 oras.

- Pinagsamang pila: pinagsasaluhan ng dalawang server ang isang M/M/2 na pila, kaya ang lead time ay humigit-kumulang 2.8 oras, na humigit-kumulang 44% na mas mababa, sa parehong mga tao at parehong trabaho.

Kinakalkula ng pormula ng Erlang C ang probabilidad na kailangang maghintay ang isang dumarating na item sa isang M/M/c na pila, na may inaalok na karga a = λ / μ at utilisasyon ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Tagal ng paghihintay ω = P(wait) / (c μ − λ)

Ginagamit ng mga koponan sa serbisyo sa customer ang Erlang C upang pagpasyahan kung ilang ahente ang itatalaga upang maabot ang isang target, tulad ng “80% ng mga tawag ay nasagot sa loob ng 20 segundo”.

May mga limitasyon ang pagsasama-sama ng pila: pinakamahusay itong gumagana kapag kayang asikasuhin ng anumang server ang anumang item. Kung nangangailangan ang mga item ng mga espesyalista, maaaring mangailangan ng mga tuntunin sa pagruruta ang isang pinagsamang pila.

## Pagsubaybay sa aktibidad

### Mga halimbawa ng aktibidad

Ipagpalagay na may isang bagay na nais naming subaybayan, at tinatawag namin ito sa isang pangkalahatang pangalan tulad ng “Aktibidad” at dinadaglat bilang “A”.

Mahusay naming magagamit ang notasyon ng pila upang ilarawan ang aktibidad at kung paano ito gumagalaw sa isang pila.

Mga halimbawa:

- Aκ: Bilang ng aktibidad: kung ilang item ang nasa pila.

- Aλ: Rate ng pagdating ng aktibidad: kung ilang item ang dumarating bawat yunit ng oras.

- Aχ: Kabuuang rate ng aktibidad: kung ilang item ang lumalabas sa pila bawat yunit ng oras.

- Aα: Rate ng tagumpay ng aktibidad: kung ilang item ang tama bawat yunit ng oras.

- Aβ: Rate ng pagkabigo ng aktibidad, o rate ng error: kung ilang item ang mali bawat yunit ng oras.

- Aμ: Rate ng serbisyo ng aktibidad, o kapasidad: kung ilang item ang kayang kumpletuhin ng isang server bawat yunit ng oras habang abala.

- Aσ: Rate ng paglaktaw ng aktibidad: kung ilang item ang inabandona bawat yunit ng oras.

- Aρ: Ratio ng utilisasyon ng aktibidad: ang bahagi ng magagamit na oras na abala ang mga server, ibig sabihin ay oras na abala ÷ magagamit na oras, o λ / (c μ).

- Aε: Ratio ng error ng aktibidad: kung ilang item ang nakumpleto nang may error kumpara sa kabuuan.

- Aτ: Lead time ng aktibidad: kung gaano katagal ang lumilipas mula sa paghiling hanggang sa pagkumpleto.

- Aω: Tagal ng paghihintay ng aktibidad: kung gaano katagal ang lumilipas mula sa paghiling hanggang sa pagsisimula.

- Aφ: Tagal ng trabaho ng aktibidad: kung gaano katagal ang lumilipas mula sa pagsisimula hanggang sa pagkumpleto.

- Aθ: Step time ng aktibidad: kung gaano katagal ang lumilipas mula sa isang pagkumpleto hanggang sa susunod na pagkumpleto.

### Batas ni Little

Ang batas ni Little ay isang teorema ni John Little na nagsasaad na: ang pangmatagalang karaniwang bilang L ng mga customer sa isang matatag na sistema ay katumbas ng pangmatagalang karaniwang epektibong rate ng pagdating λ na pinarami sa karaniwang tagal W na ginugugol ng isang customer sa sistema.

Halimbawang notasyon:

- L: pangmatagalang karaniwang bilang ng mga customer sa sistema. Mas gusto namin ang κ (kappa).

- λ: pangmatagalang karaniwang epektibong rate ng pagdating, ibig sabihin ay mga item na talagang pumapasok sa sistema, kaya hindi kasama ang mga pag-atras.

- W: pangmatagalang karaniwang tagal ng isang item sa sistema. Mas gusto namin ang τ (tau).

- L = λ W ang batas ni Little. Mas gusto namin ang κ = λ τ (kappa = lambda \* tau).

Kapansin-pansing pangkalahatan ang batas ni Little: totoo ito anuman ang distribusyon ng pagdating, ang distribusyon ng serbisyo, ang bilang ng mga server, o ang uri ng pila.

Mga palagay ng batas ni Little:

- Magkakatugma ang lahat ng yunit ng pagsukat.

- Matatag ang sistema, ibig sabihin ay katumbas ng karaniwang rate ng pagdating ang karaniwang rate ng paglabas sa buong panahon ng pagsukat, at halos pareho ang bilang ng mga item sa simula at sa katapusan.

- Ang mga item na maagang umaalis, tulad ng sa pamamagitan ng pag-urong, ay alinman sa palagiang binibilang sa parehong λ at τ, o palagiang hindi isinasama sa dalawa.

Halimbawa: may karaniwang κ = 20 ticket na kasalukuyang isinasagawa ang isang koponan, at dumarating ang mga ticket sa λ = 4 bawat linggo; sa steady state, natatapos din ng koponan ang χ = 4 bawat linggo. Kaya tumatagal ang karaniwang ticket nang τ = κ / λ = 5 linggo. Upang mahati ang lead time nang hindi nagtatrabaho nang mas mabilis, hatiin ang trabahong kasalukuyang isinasagawa.

### Mga pangunahing tagapagpahiwatig ng pagganap (KPI)

Karaniwang sinusubaybayan namin ang maraming bagay tungkol sa mga aktibidad sa pila, at nais naming ibuod ang mga resulta sa pamamagitan ng pagpili ng maikling listahan ng mga pinakaangkop para sa aming mga proyekto.

Marami na kaming nabuong proyekto, at naniniwala kami na ang mga pinakamahalagang buod na tagapagpahiwatig ay:

- Dτ = Lead time ng paghahatid. Maaaring sabihin ng mga product team ang “mula konsepto hanggang customer” o “mula ideya hanggang implementasyon”.

- Dα = Rate ng tagumpay ng paghahatid. Maaaring sabihin ng mga DevOps team ang “deployment frequency” o “nagpapadala kami nang X beses bawat araw”.

- Dε = Ratio ng error ng paghahatid. Maaaring sabihin ng mga quality team ang “change fail rate” o “porsiyento ng mga rollback”.

- Rτ = Lead time ng pagpapanumbalik. Maaaring sabihin ng mga site reliability engineer ang “failed deployment recovery time” o “mean time to restore (MTTR)”.

## Mga sukatan ng serbisyo

Mga kapaki-pakinabang na termino:

- **Service Level Indicator (SLI):** ang sukatan (halimbawa, 99.9% uptime)
- **Service Level Objective (SLO):** ang panloob na target para sa sukatang iyon (halimbawa, layuning makamit ang 99.95% uptime)
- **Service Level Agreement (SLA):** ang pormal at kontraktuwal na pangako sa customer (halimbawa, 99.9% uptime na may mga multa kung hindi maabot).

### Karaniwang tagal ng pagtugon, pagkukumpuni, pagbawi, paglutas

Kumakatawan ang MTTR sa apat na magkakaibang sukat:

| Sukatan                  | Pokus                      | Sinusukat                                         | Simula                                           | Wakas                                              |
| ------------------------ | -------------------------- | ------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------- |
| **Mean Time To Respond** | Unang reaksiyon            | Oras upang kilalanin at simulan ang pagkilos      | Kapag natukoy/naiulat ang insidente              | Kapag nagsimulang magtrabaho rito ang koponan      |
| **Mean Time To Repair**  | Teknikal na pag-aayos      | Oras upang ayusin ang sirang item                 | Kapag nagsimula ang pagkukumpuni                 | Kapag naayos na ang item                           |
| **Mean Time To Recover** | Pagpapanumbalik ng serbisyo | Oras upang ibalik ang buong serbisyo             | Kapag nagsimula ang insidente/pagkawala ng serbisyo | Kapag ganap nang gumagana ang serbisyo          |
| **Mean Time To Resolve** | Ganap na paglutas          | Kabuuang oras mula sa pagtukoy hanggang pagsasara | Kapag natukoy ang insidente                      | Kapag ganap nang naisara ang insidente             |

**Mga pangunahing pagkakaiba:**

Sinusukat ng **Respond** ang kahandaan ng koponan at ang bisa ng mga alerto. Ang mababang tagal ng pagtugon ay nangangahulugang mahusay na gumagana ang inyong monitoring at mga proseso ng on-call, kahit na mas matagal ang aktuwal na pag-aayos.

Makitid na teknikal ang **Repair**—gaano katagal bago talagang maayos ang sirang bagay kapag pinagtatrabahuhan na ninyo ito? Hindi nito isinasama ang oras ng pagtukoy, triage, at beripikasyon.

Ang **Recover** ay tungkol sa pagkakaroon ng serbisyo mula sa pananaw ng customer. Maaaring “naayos” na ang sistema ngunit hindi pa “nakabawi” kung kailangan pa ninyong ibalik ang datos, painitin ang mga cache, o beripikahin ang paggana.

Ang **Resolve** ang pinakakomprehensibo—saklaw nito ang buong lifecycle ng insidente mula sa unang pagtukoy hanggang sa beripikasyon pagkatapos ng insidente at pagsasara.

Halimbawang senaryo:

- 2:00 AM — Nagsimula ang pagkawala ng serbisyo
- 2:05 AM — Tumunog ang alerto, natukoy ang insidente
- 2:15 AM — Kinilala ng naka-on-call at nagsimulang magtrabaho → Tagal ng pagtugon: 10 min (2:05 hanggang 2:15)
- 2:45 AM — Natukoy ang ugat na sanhi, na-deploy ang pag-aayos → Tagal ng pagkukumpuni: 30 min (2:15 hanggang 2:45)
- 3:00 AM — Naberipika na gumagana ang serbisyo para sa mga user → Tagal ng pagbawi: 60 min (2:00 hanggang 3:00)
- 3:30 AM — Naisara ang ticket ng insidente pagkatapos ng beripikasyon → Tagal ng paglutas: 85 min (2:05 hanggang 3:30)

Mga kaugnay na sukatan:

- MTBF (mean time before failure)
- MTTF (mean time to failure)
- MTTA (mean time to acknowledge)

### Mga sukatan ng DORA

Ang mga sukatan ng DevOps Research and Assessment (DORA) ay mga pamantayang pang-industriya na pangunahing tagapagpahiwatig ng pagganap (KPI) na partikular para sa mga DevOps team sa software engineering. Pakitingnan ang [dora.dev](https://dora.dev/guides/dora-metrics/).

Limang sukatan na ngayon ang ginagamit ng DORA, sa dalawang pangkat.

Mga sukatan ng throughput:

- **Change Lead Time** - Oras upang ipatupad, subukin, at ihatid ang code para sa isang feature (sinusukat mula sa commit hanggang sa deployment sa production). Maging tiyak po kung ano ang ibig ninyong sabihin sa simula at wakas. Halimbawa, may ilang koponan na gustong sumukat mula nang simulan ng isang developer ang trabaho sa isang ticket, hanggang nang i-push ng developer ang trabaho sa isang continuous integration process; mas epektibo ang ganitong paraan sa pagsukat ng produktibidad ng tao.

- **Deployment Frequency** - Bilang ng mga deployment sa isang takdang tagal ng panahon. Maging tiyak po kung ano ang ibig ninyong sabihin sa deployment at kung paano ninyo sinusubaybayan ang dalas. Halimbawa, may ilang koponan na nagde-deploy sa isang hanay ng mga production server at sinusubaybayan ang buong rollout, samantalang ang ibang koponan ay nagde-deploy sa iisang user acceptance test (UAT) server at sinusubaybayan kung kailan nagpapadala ang project manager ng anunsiyo sa email sa mga user upang subukin ito.

- **Failed Deployment Recovery Time** - Oras na kinakailangan upang makabawi mula sa isang deployment na nagdudulot ng pagkabigo sa production. Dati itong tinatawag na Mean Time to Recovery (MTTR) o Time to Restore Service. Maging tiyak po kung ano ang ibig ninyong sabihin sa pagbawi. Halimbawa, may ilang koponan na itinuturing ang pagbawi bilang ganap na paglutas, ibig sabihin ay ang kabuuang oras mula nang matukoy ang isang insidente hanggang nang ganap itong maisara; mas angkop na ilarawan ang ganitong paraan bilang Mean Time To Resolve.

Mga sukatan ng kawalang-katatagan:

- **Change Failure Rate** - Porsiyento ng mga deployment na nagdudulot ng pagkabigo sa production at nangangailangan ng agarang lunas, tulad ng rollback o hotfix. Maging tiyak po kung ano ang ibig ninyong sabihin sa pagkabigo. Halimbawa, may ilang koponan na nagbibilang din ng pagkabigo kapag nagsimula sila sa isang work ticket at saka napagtanto na kulang ang impormasyon ng work ticket upang magpatuloy, kaya ibinabalik ng koponan ang work ticket sa specification team.

- **Deployment Rework Rate** - Porsiyento ng mga deployment na hindi planado, tulad ng upang ayusin ang isang insidente sa production. Ito ang mga hindi planadong deployment na hinati sa kabuuang bilang ng mga deployment. Idinagdag ng DORA ang sukatang ito noong 2024.

Tinalakay din ng mga naunang ulat ng DORA ang **Reliability** bilang sukatan ng pagganap sa operasyon: isang mas malawak, kadalasang kuwalitatibo, na pagtatasa ng pagkakapare-pareho ng serbisyo, tulad ng availability, uptime, latency, katumpakan, at mga service level objective. Tumutulong ang Reliability na ipakita na hindi nakakamit ang mataas na bilis kapalit ng kakayahan ng sistema.

## Pila ng mga pila

Madaling palawakin ang teorya ng pila sa isang pila ng mga pila, tulad ng isang proseso sa mas mataas na antas na naglalaman ng mga yugto, o mga bahagi, o mga tarangkahan sa mas mababang antas.

### Pila ng mga pila na Double Diamond

Halimbawa, isaalang-alang ang modelo ng proseso ng inobasyon na “Double Diamond”, na nagtatakda ng apat na yugto:

1. Discover: Unawain ang isyu sa halip na basta ipagpalagay kung ano ito.
2. Define: Gamit ang kabatiran mula sa yugto ng pagtuklas, tukuyin ang hamon.
3. Develop: Magbigay ng iba't ibang sagot sa malinaw na natukoy na problema.
4. Deliver: Subukin ang iba't ibang solusyon sa maliit na saklaw at pagkatapos ay pahusayin ang mga ito.

Maaaring imodelo ito ng teorya ng pila bilang isang pila ng proseso na naglalaman ng apat na pila ng yugto:

- Ang rate ng pagdating ng proseso ay ang rate ng pagdating ng yugto 1.
- Ang rate ng tagumpay ng proseso ay ang rate ng tagumpay ng yugto 4.
- Ang bilang ng error ng proseso ay ang kabuuan ng mga bilang ng error ng mga yugto.
- Ang bilang ng paglaktaw ng proseso ay ang kabuuan ng mga bilang ng paglaktaw ng mga yugto.
- Ang lead time ng proseso ay ang kabuuan ng mga lead time ng mga yugto.
- Ang pinakamataas na throughput ng proseso ay ang throughput ng pinakamabagal na yugto, na kilala rin bilang bottleneck.

### Pila ng mga pila na hugis-funnel

Sa aming praktikal na trabaho, madalas naming gamitin ang salitang “funnel” upang maluwag na ilarawan ang isang pila ng mga pila na may tendensiyang bawasan ang bilang ng item sa bawat yugto:

- Pila ng pagkuha ng empleyado na gumagamit ng yugto ng outreach, yugto ng panayam, at yugto ng alok. Para sa ganitong uri ng pila, nilalayon naming pataasin hangga't maaari ang rate ng pagdating ng yugto 1, ibig sabihin ay pagpapalawak ng aming outreach, tulad ng sa pamamagitan ng mga promosyon.

- Pila ng pagbili na gumagamit ng yugto ng paghahanap ng customer, yugto ng shopping cart, at yugto ng pagbabayad. Para sa ganitong uri ng pila, nilalayon naming pababain hangga't maaari ang rate ng paglaktaw ng yugto 2, ibig sabihin ay pagbabawas ng pag-abandona sa cart, tulad ng sa pamamagitan ng mga paalala.

- Pila ng programming na gumagamit ng yugto ng integration, yugto ng user acceptance, at yugto ng production rollout. Para sa ganitong uri ng pila, nilalayon naming pababain hangga't maaari ang rate ng error ng yugto ng production rollout, tulad ng sa pamamagitan ng canary telemetry.

## Mga kabatiran

Pitong kabatiran sa teorya ng pila, ni Bob Wescott, may-akda ng “The Every Computer Performance Book” (pakitingnan din ang [buod ni Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Habang mas mabagal ang service center, mas mababang pinakamataas na utilisasyon ang dapat ninyong planuhin sa pinakamataas na karga.

2. Napakahirap gamitin ang huling 15% ng anumang bagay.

3. Habang mas malapit kayo sa gilid, mas mataas ang halaga ng pagkakamali.

4. Nalilimitahan ang pagtaas ng tagal ng pagtugon ng bilang na maaaring maghintay.

5. Pakitandaan po na ito ay karaniwan, hindi pinakamataas.

6. May epekto ng pagtanggi ng tao sa maraming service center.

7. Ipakita ang maliliit na pagpapahusay sa pinakamainam nitong anyo.

## Pangwakas

### Tingnan din

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Mga larangan sa Wikipedia kung saan gumagamit kami ng mga pila sa maraming proyekto:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Mga panimula ni John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Mga panimula na may higit pang detalye:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Mga pormula:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Pasasalamat

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Napakahusay ng aklat na ito para sa DevOps sa mataas na antas, at direktang humuhubog sa aming pagpili ng mga KPI. Naaayon ang mga KPI sa pahinang ito sa mga rekomendasyon ng aklat.

## Pagsubaybay

- Pakete: queue-theory
- Bersiyon: 3.0.0
- Nilikha: 2019-01-25T04:17:56Z
- Na-update: 2026-11-23T15:33:48Z
- Lisensiya: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, o pakikontak po kami para sa ibang mga tuntunin (pakitingnan ang [LICENSE.md](LICENSE.md))
- Kontak: Joel Parker Henderson <joel@joelparkerhenderson.com>
