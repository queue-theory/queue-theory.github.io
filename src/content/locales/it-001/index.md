# Teoria delle code

La teoria delle code è lo studio matematico delle file d'attesa, o code. Usiamo
la teoria delle code nel nostro sviluppo software per scopi come analizzare e
ottimizzare le nostre pratiche e i nostri processi, ad esempio la reattività del
nostro servizio clienti, la pianificazione kanban nella gestione dei progetti, le
code di messaggi per la comunicazione tra processi e le pipeline devops di
rilascio continuo.

Indice:

- [Introduzione](#introduzione)
  - [Reattività del servizio clienti](#reattività-del-servizio-clienti)
  - [Pianificazione kanban nella gestione dei progetti](#pianificazione-kanban-nella-gestione-dei-progetti)
  - [Code di messaggi per la comunicazione tra processi](#code-di-messaggi-per-la-comunicazione-tra-processi)
  - [Pipeline devops di rilascio continuo](#pipeline-devops-di-rilascio-continuo)
- [Terminologia delle code](#terminologia-delle-code)
  - [Tipi di coda e tipi di servizio](#tipi-di-coda-e-tipi-di-servizio)
- [Notazione della teoria delle code](#notazione-della-teoria-delle-code)
  - [Conteggio](#conteggio)
  - [Tasso di arrivo, tasso di servizio](#tasso-di-arrivo-tasso-di-servizio)
  - [Rapporto di utilizzo, detto anche intensità di traffico](#rapporto-di-utilizzo-detto-anche-intensità-di-traffico)
  - [Tassi di throughput: tasso totale, tasso di completamento, tasso di successo, tasso di fallimento, tasso di abbandono](#tassi-di-throughput-tasso-totale-tasso-di-completamento-tasso-di-successo-tasso-di-fallimento-tasso-di-abbandono)
  - [Ambiguità del tasso di servizio](#ambiguità-del-tasso-di-servizio)
  - [Tasso di abbandono](#tasso-di-abbandono)
  - [Rapporto di errore](#rapporto-di-errore)
  - [Lead time, tempo di passo, tempo di lavoro, tempo di attesa](#lead-time-tempo-di-passo-tempo-di-lavoro-tempo-di-attesa)
  - [Notazione di Kendall](#notazione-di-kendall)
- [Matematica delle code](#matematica-delle-code)
  - [La curva di utilizzo](#la-curva-di-utilizzo)
  - [La formula di Kingman](#la-formula-di-kingman)
  - [Pooling ed Erlang C](#pooling-ed-erlang-c)
- [Monitoraggio delle attività](#monitoraggio-delle-attività)
  - [Esempi di attività](#esempi-di-attività)
  - [La legge di Little](#la-legge-di-little)
  - [Indicatori chiave di prestazione (KPI)](#indicatori-chiave-di-prestazione-kpi)
- [Metriche di servizio](#metriche-di-servizio)
  - [Mean Time To Respond, Repair, Recover, Resolve](#mean-time-to-respond-repair-recover-resolve)
  - [Metriche DORA](#metriche-dora)
- [Coda di code](#coda-di-code)
  - [Double Diamond come coda di code](#double-diamond-come-coda-di-code)
  - [Imbuto come coda di code](#imbuto-come-coda-di-code)
- [Spunti](#spunti)
- [Epilogo](#epilogo)
  - [Si veda anche](#si-veda-anche)
  - [Ringraziamenti](#ringraziamenti)
- [Informazioni sul progetto](#informazioni-sul-progetto)

## Introduzione

Usiamo la teoria delle code nei nostri progetti per molti scopi:

- Reattività del servizio clienti

- Pianificazione kanban nella gestione dei progetti

- Code di messaggi per la comunicazione tra processi

- Pipeline devops di rilascio continuo

### Reattività del servizio clienti

Ad esempio, vogliamo analizzare come i clienti chiedono assistenza commerciale e supporto, e quanto rapidamente rispondiamo.

Alcuni prodotti pertinenti sono ad es. [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Pianificazione kanban nella gestione dei progetti

Ad esempio, vogliamo monitorare i lead time e i tempi di avanzamento mentre l'idea di una nuova funzionalità evolve dalla progettazione alla consegna.

Alcuni prodotti pertinenti sono ad es. [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Code di messaggi per la comunicazione tra processi

Ad esempio, vogliamo massimizzare il throughput e minimizzare la pressione quando un programma invia richieste a un altro programma.

Alcuni prodotti pertinenti sono ad es. [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Pipeline devops di rilascio continuo

Ad esempio, vogliamo assicurarci che il nostro server di integrazione continua abbia la capacità di testare il nostro software e poi rilasciarlo.

Alcuni prodotti pertinenti sono ad es. [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Terminologia delle code

La terminologia delle code è un argomento vasto. Questa sezione contiene parte della terminologia che usiamo comunemente. Negli esempi useremo l'idea di un cliente in attesa in fila.

### Tipi di coda e tipi di servizio

I tipi di coda e i tipi di servizio descrivono come la coda sceglie quali elementi elaborare.

- First In First Out (FIFO): servire il cliente che attende da più tempo.

- Last In First Out (LIFO): servire il cliente che attende da meno tempo.

- Priorità: servire i clienti in base al loro livello di priorità; questi livelli possono basarsi su status, urgenza, pagamento, ecc.

- Shortest Job First (SJF): servire il cliente che ha bisogno della minore quantità di servizio.

- Longest Job First (LJF): servire il cliente che ha bisogno della maggiore quantità di servizio.

- Shortest Remaining Processing Time (SRPT): come SJF, ma un lavoro breve appena arrivato può interrompere un lavoro più lungo già in servizio.

- Round Robin: servire ciascun cliente per un breve intervallo di tempo, poi passare al cliente successivo, e ripetere.

- Time Sharing, detto anche Processor Sharing (PS): servire tutti contemporaneamente; la capacità di servizio è distribuita in modo uniforme tra tutti coloro che attendono.

SJF e SRPT minimizzano l'attesa media, ma possono lasciare i lavori lunghi in attesa indefinitamente (starvation), quindi i sistemi reali aggiungono spesso un meccanismo di invecchiamento (aging) o limiti di priorità.

## Notazione della teoria delle code

La teoria delle code usa una notazione con lettere greche.

I nostri team usano parte della notazione più diffusa; aggiungiamo anche una notazione personalizzata che ci aiuta nei progetti software.

La nostra notazione e il significato di ogni simbolo:

| La nostra notazione | Significato |
| ------------------- | ----------- |
| κ (kappa) | numero di elementi nel sistema, in attesa più in lavorazione |
| λ (lambda) | tasso di arrivo degli elementi che entrano nel sistema |
| χ (chi) | tasso di uscita degli elementi che escono dal sistema |
| μ (mu) | tasso di servizio, detto anche capacità: quanto velocemente lavora un servente occupato |
| ρ (rho) | utilizzo: la frazione di tempo in cui i serventi sono occupati, λ / (c μ) |
| α (alfa) | tasso di successo: output osservato che risulta corretto |
| β (beta) | tasso di fallimento: output osservato che risulta errato |
| δ (delta) | tasso di completamento: successo + fallimento, elementi serviti, con esito corretto o errato |
| σ (sigma) | tasso di abbandono: elementi entrati e poi usciti senza essere serviti |
| ε (epsilon) | rapporto di errore: β / (α + β) = β / δ |
| τ (tau) | tempo nel sistema, detto anche lead time |
| ω (omega) | tempo di attesa, detto anche tempo in coda |
| φ (phi) | tempo di lavoro, detto anche tempo nel processore, detto anche tempo di servizio |
| θ (theta) | tempo di passo tra completamenti; tempo di passo medio ≈ 1 / χ a regime |

### Conteggio

Contiamo spesso gli elementi e usiamo questa notazione:

- κ (kappa): numero di elementi nel sistema, cioè elementi in attesa più elementi in lavorazione.

![Diagramma: gli elementi arrivano al tasso λ, κ elementi sono nel sistema e gli elementi escono con il throughput χ](https://queue-theory.github.io/images/queue-theory-rates-lambda-input-rate-kappa-item-count-chi-output-rate.svg)

Esempio:

- κ = 10 significa esattamente 10

- κ ≈ 10 significa circa 10

- κ < 10 significa meno di 10

- κ > 10 significa più di 10

- κ ≪ 10 significa molto meno di 10

- κ ≫ 10 significa molto più di 10

Il conteggio κ (kappa) è un'istantanea in un dato momento.

Il conteggio medio κ̅ (kappa con barra) è un calcolo che fa la media di misurazioni su uno specifico periodo di tempo, ad esempio misurando ogni ora per due settimane.

### Tasso di arrivo, tasso di servizio

La notazione più importante:

- λ (lambda): tasso di arrivo. Misura quanto velocemente arrivano nuovi elementi nella coda.

- μ (mu): tasso di servizio, detto anche capacità. Misura quanto velocemente un servente può gestire gli elementi mentre è occupato.

Esempi di regole generali per code tradizionali con un solo servente:

- λ < μ significa che il tasso di arrivo è minore del tasso di servizio; la coda è stabile, cioè oscilla intorno a una dimensione media finita.

- λ = μ significa che il tasso di arrivo è uguale al tasso di servizio; con una qualsiasi casualità, la coda deriva e cresce senza limite.

- λ > μ significa che il tasso di arrivo è maggiore del tasso di servizio; la coda cresce costantemente, di circa λ − μ elementi per unità di tempo.

L'idea intuitiva che "λ = μ mantiene la coda della stessa dimensione" è vera solo quando arrivi e servizio sono perfettamente regolari, come un metronomo. Gli arrivi reali sono irregolari, a raffiche, quindi il tempo di inattività perso durante una pausa non si può mai recuperare, e la coda cresce durante la raffica successiva.

Tenga presente che alcuni professionisti della teoria delle code usano "tasso di servizio" per indicare l'output osservato anziché la capacità; si veda [ambiguità del tasso di servizio](#ambiguità-del-tasso-di-servizio).

### Rapporto di utilizzo, detto anche intensità di traffico

La notazione più importante che riassume una coda:

- ρ (rho): rapporto di utilizzo, cioè la frazione di tempo in cui i serventi sono occupati = λ / μ per un servente, oppure λ / (c μ) per c serventi

Esempi:

- ρ < 1 significa che i serventi hanno capacità di riserva; la coda è stabile. Più ρ si avvicina a 1, più lunghe sono le attese; si veda [la curva di utilizzo](#la-curva-di-utilizzo).

- ρ = 1 significa che i serventi sono sempre occupati; la coda è instabile e cresce senza limite.

- ρ > 1 significa che gli arrivi superano la capacità; la coda si sta allungando.

### Tassi di throughput: tasso totale, tasso di completamento, tasso di successo, tasso di fallimento, tasso di abbandono

I tassi di throughput misurano l'output osservato, cioè gli elementi che lasciano effettivamente la coda. Si dividono in cinque grandi categorie:

- χ (chi): tasso totale. Misura quanti elementi per unità di tempo escono dalla coda per qualsiasi motivo: successo, fallimento, abbandono, ecc.

- α (alfa): tasso di successo. Misura quanti elementi per periodo di tempo risultano corretti, ad es. esatti, completi, accettati.

- β (beta): tasso di fallimento. Misura quanti elementi per periodo di tempo risultano errati, ad es. inesatti, incompleti, rifiutati.

- δ (delta): tasso di completamento. Misura quanti elementi per periodo di tempo vengono serviti, con esito corretto o errato: successo + fallimento.

- σ (sigma): tasso di abbandono. Misura quanti elementi per periodo di tempo entrano nella coda e poi escono senza essere serviti, ad es. abbandoni, rinunce.

Tasso di completamento = tasso di successo + tasso di fallimento:

- δ = α + β (si pronuncia: delta uguale alfa più beta)

Tasso totale = tasso di completamento + tasso di abbandono:

- χ = δ + σ (si pronuncia: chi uguale delta più sigma)

Tasso totale = tasso di successo + tasso di fallimento + tasso di abbandono:

- χ = α + β + σ (si pronuncia: chi uguale alfa più beta più sigma)

![Diagramma: gli elementi lasciano il sistema come successo α, fallimento β o abbandono σ; completati δ = α + β, quindi χ = δ + σ](https://queue-theory.github.io/images/queue-theory-output-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Ogni elemento contato in χ è entrato nel sistema, quindi a regime il tasso totale è uguale al tasso di arrivo: χ ≈ λ. Per questo i tassi di throughput misurano l'output, non la capacità.

### Ambiguità del tasso di servizio

A seconda del contesto e del professionista, il termine "tasso di servizio" può indicare
il "tasso totale" oppure il "tasso di successo".

Ciò ha radici storiche e può causare confusione ed errori, specialmente in
contesti e per professionisti che usano la teoria delle code dove è molto importante
monitorare fallimenti e abbandoni.

- Visione teorica: il tasso di servizio è una pura misura di velocità (ad es. lavori al secondo), indipendentemente dal fatto che i lavori siano successi, fallimenti, abbandoni, ecc.

- Visione dell'elaborazione: il tasso di servizio include tutto ciò che la coda impiega tempo a elaborare, cioè successi o fallimenti, ma non include gli abbandoni.

- Visione tecnologica: in campi applicati come l'ingegneria del software, il tasso di servizio misura solo i successi, mentre il tasso di errore misura i fallimenti e il tasso di abbandono misura gli abbandoni.

Perciò manteniamo μ per la capacità e vi aggiungiamo i tassi di output osservato, invece di sostituirlo:

- μ (mu): tasso di servizio, detto anche capacità. Misura quanto velocemente un servente può gestire gli elementi mentre è occupato.

- χ (chi): tasso totale. Misura quanti elementi per unità di tempo escono dalla coda per qualsiasi motivo: successo, fallimento, abbandono, ecc.

- α (alfa): tasso di successo. Misura quanti elementi per periodo di tempo risultano corretti, ad es. esatti, completi, accettati.

Perché non sostituire μ con χ o α? In una coda stabile, ogni elemento che entra prima o poi esce, quindi χ ≈ λ. Allora λ / χ ≈ 1 qualunque sia il carico, il che non dice nulla su quanto siano occupati i serventi. L'utilizzo richiede la capacità: ρ = λ / (c μ), che è uguale alla frazione di tempo in cui i serventi sono occupati.

### Tasso di abbandono

Dettagli sul tasso di abbandono:

- σ (sigma): tasso di abbandono. Misura quanti elementi entrano nella coda e poi escono senza essere elaborati.

Un abbandono si ha quando un elemento entra nella coda e poi esce senza alcuna elaborazione significativa:

- Abbandono (abandoning): quando un cliente entra in una coda e poi se ne va, per qualsiasi motivo.

- Rinuncia (reneging): quando un cliente che ha già atteso decide di andarsene perché ha perso troppo tempo.

Due comportamenti correlati non sono abbandoni:

- Desistenza (balking): quando un cliente decide di non entrare nella coda perché il tempo di attesa rischia di essere troppo lungo. Un elemento che desiste non entra mai nel sistema, quindi è fuori dal confine del sistema: non viene contato in λ, χ o σ. Se le desistenze sono importanti, ad esempio come vendite perse, allora le conti separatamente come arrivi respinti.

- Cambio di coda (jockeying): quando un cliente passa da una coda parallela all'altra, ad esempio tra le casse, cercando di ottenere un'attesa più breve.

### Rapporto di errore

La notazione più importante che riassume il successo di una coda:

- ε (epsilon): rapporto di errore = numero di fallimenti / (numero di successi + numero di fallimenti) = β / (α + β) = β / δ

Gli abbandoni sono esclusi, perché un elemento abbandonato non è mai stato servito, quindi non è stato né corretto né errato. Monitori gli abbandoni separatamente tramite σ.

![Diagramma: il tasso di completamento δ è il tasso di successo α più il tasso di fallimento β, e il rapporto di errore ε è il tasso di fallimento β diviso per il tasso di completamento δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Esempi:

- ε = 0 significa nessun errore.

- ε = 0,1 significa che il 10% dei servizi presenta un errore.

- ε = 1 significa che ogni servizio presenta un errore.

### Lead time, tempo di passo, tempo di lavoro, tempo di attesa

Monitoriamo quattro tempi:

- τ (tau): lead time = dall'ingresso nella coda all'uscita dalla coda

- θ (theta): tempo di passo = da un completamento al completamento successivo; un tempo di passo è un intervallo, e il tempo di passo medio è l'intervallo medio

- φ (phi): tempo di lavoro = tempo dedicato al lavoro effettivo, detto anche tempo di elaborazione

- ω (omega): tempo di attesa = tempo trascorso senza lavoro effettivo, detto anche tempo di sospensione

![Diagramma: il lead time τ è il tempo di attesa ω seguito dal tempo di lavoro φ, quindi τ = ω + φ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time.svg)

Esempi:

- τ = 5s significa che un elemento viene aggiunto alla coda e poi servito 5 secondi dopo.

- ω = 4s significa che un elemento attende in coda per 4 secondi, poi inizia il lavoro.

- φ = 1s significa che un elemento richiede 1 secondo di lavoro, poi è completato.

- θ = 1s significa che passa 1 secondo tra un completamento e il completamento successivo.

Relazioni:

- τ = ω + φ: il lead time è il tempo di attesa più il tempo di lavoro. Negli esempi, 5s = 4s + 1s.

- θ medio ≈ 1 / χ: a regime, il tempo di passo medio è l'inverso del tasso totale. Un singolo intervallo dice poco sul tasso; la media di molti intervalli dice molto. Negli esempi, se il tempo di passo medio è 1s, allora χ ≈ 1 elemento al secondo.

### Notazione di Kendall

La notazione di Kendall è un'altra notazione della teoria delle code, scritta come A/S/c/K/N/D:

- A: il processo di arrivo, cioè la distribuzione del tempo tra gli arrivi.

- S: il processo di servizio, cioè la distribuzione dei tempi di servizio.

- c: il numero di serventi.

- K: la capacità, cioè il numero massimo di elementi ammessi nel sistema, in attesa o in servizio, prima che i nuovi arrivi vengano respinti.

- N: la popolazione, cioè il numero di clienti potenziali.

- D: la disciplina, cioè il tipo di coda, come FIFO o LIFO.

Lettere comuni per A e S:

- M: markoviano, detto anche senza memoria, cioè tempi esponenziali, che derivano da arrivi di Poisson.

- D: deterministico, cioè tempi costanti.

- G: generale, cioè qualsiasi distribuzione.

Quando le ultime tre sono omesse, i valori predefiniti sono K = ∞, N = ∞, D = FIFO. Ad esempio, "M/M/1" significa arrivi di Poisson, tempi di servizio esponenziali, un servente, capacità illimitata, popolazione illimitata e first in first out.

Inoltre:

- n: il numero di elementi nel sistema.

## Matematica delle code

Le sezioni di matematica usano i simboli dei manuali, così che Lei possa confrontarle con altre fonti: S è il tempo medio di servizio, che corrisponde al nostro φ, e μ = 1 / S è la capacità di un servente.

### La curva di utilizzo

Il risultato più importante della teoria delle code: quando l'utilizzo si avvicina al 100%, il tempo di attesa cresce senza limite, e cresce più rapidamente alla fine.

Per una coda M/M/1, dove S è il tempo medio di servizio:

- Lead time τ = S / (1 − ρ)

- Tempo di attesa ω = S × ρ / (1 − ρ)

| Utilizzo ρ | Lead time τ | Tempo di attesa ω |
| ---------- | ----------- | ----------------- |
| 50%        | 2 × S       | 1 × S             |
| 70%        | 3,3 × S     | 2,3 × S           |
| 80%        | 5 × S       | 4 × S             |
| 90%        | 10 × S      | 9 × S             |
| 95%        | 20 × S      | 19 × S            |
| 99%        | 100 × S     | 99 × S            |

Esempio: una code review richiede 1 ora di lavoro. Se i revisori sono occupati all'80%, una revisione richiede circa 5 ore dalla richiesta al completamento. Se i revisori sono occupati al 95%, richiede circa 20 ore, anche se i revisori sono occupati solo 15 punti percentuali in più.

Ecco perché "tenere tutti occupati al 100%" è una ricetta per lead time lunghi, e perché gli [spunti](#spunti) più avanti mettono in guardia dal pianificare per un utilizzo elevato.

### La formula di Kingman

La formula di Kingman, detta anche equazione VUT, approssima il tempo di attesa per una coda con un solo servente e distribuzioni di arrivo e di servizio qualsiasi (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

I tre fattori sono:

- U: fattore di utilizzo ρ / (1 − ρ), che è la curva di utilizzo vista sopra.

- V: fattore di variabilità (ca² + cs²) / 2, dove ca è il coefficiente di variazione del tempo tra gli arrivi e cs è il coefficiente di variazione dei tempi di servizio. Il coefficiente di variazione è la deviazione standard divisa per la media.

- T: fattore tempo S, il tempo medio di servizio.

Esempio: per una coda M/M/1, ca = cs = 1, quindi V = 1, e la formula dà lo stesso tempo di attesa della curva di utilizzo. Se si rendono gli elementi di lavoro più uniformi, ad esempio suddividendo i ticket grandi in modo che cs scenda da 1 a quasi 0, allora V scende a circa 0,5 e il tempo di attesa si dimezza approssimativamente a parità di utilizzo.

La formula di Kingman mostra le tre leve per ridurre il tempo di attesa:

- Ridurre l'utilizzo, ad esempio aggiungendo capacità o limitando il lavoro in corso.

- Ridurre la variabilità, ad esempio con lotti più piccoli, elementi di lavoro più uniformi o arrivi più regolari.

- Ridurre il tempo di servizio, ad esempio tramite l'automazione.

### Pooling ed Erlang C

Un'unica coda condivisa che alimenta più serventi è meglio di code separate che alimentano ciascuna un solo servente. Per questo le banche usano un'unica fila che alimenta molti sportelli, e per questo una coda di supporto condivisa batte le code per singolo operatore.

Esempio: due serventi impiegano ciascuno 1 ora per elemento, e gli elementi arrivano in totale a 1,6 elementi all'ora, quindi l'utilizzo è dell'80%.

- Code separate: ogni servente è una coda M/M/1 con 0,8 arrivi all'ora, quindi il lead time è 1 / (1 − 0,8) = 5 ore.

- Coda condivisa: entrambi i serventi condividono una coda M/M/2, quindi il lead time è di circa 2,8 ore, cioè circa il 44% in meno, con le stesse persone e lo stesso lavoro.

La formula Erlang C calcola la probabilità che un elemento in arrivo debba attendere in una coda M/M/c, con carico offerto a = λ / μ e utilizzo ρ = a / c:

- P(attesa) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Tempo di attesa ω = P(attesa) / (c μ − λ)

I team del servizio clienti usano Erlang C per decidere quanti operatori impiegare per raggiungere un obiettivo, come "80% delle chiamate risposte entro 20 secondi".

Il pooling ha dei limiti: funziona al meglio quando qualsiasi servente può gestire qualsiasi elemento. Se gli elementi richiedono specialisti, una coda condivisa può aver bisogno di regole di instradamento.

## Monitoraggio delle attività

### Esempi di attività

Supponiamo di avere qualcosa che vogliamo monitorare, e di chiamarlo con un nome generico come "Attività", abbreviato in "A".

Possiamo usare in modo efficiente la notazione delle code per descrivere l'attività e il modo in cui attraversa una coda.

Esempi:

- Aκ: conteggio dell'attività: quanti elementi ci sono nella coda.

- Aλ: tasso di arrivo dell'attività: quanti elementi arrivano per unità di tempo.

- Aχ: tasso totale dell'attività: quanti elementi escono dalla coda per unità di tempo.

- Aα: tasso di successo dell'attività: quanti elementi sono corretti per unità di tempo.

- Aβ: tasso di fallimento dell'attività, detto anche tasso di errore: quanti elementi sono errati per unità di tempo.

- Aμ: tasso di servizio dell'attività, detto anche capacità: quanti elementi un servente può completare per unità di tempo mentre è occupato.

- Aσ: tasso di abbandono dell'attività: quanti elementi vengono abbandonati per unità di tempo.

- Aρ: rapporto di utilizzo dell'attività: la frazione del tempo disponibile in cui i serventi sono occupati, cioè tempo occupato ÷ tempo disponibile, oppure λ / (c μ).

- Aε: rapporto di errore dell'attività: quanti elementi sono completati con errori rispetto al totale.

- Aτ: lead time dell'attività: quanto tempo trascorre dalla richiesta al completamento.

- Aω: tempo di attesa dell'attività: quanto tempo trascorre dalla richiesta all'inizio.

- Aφ: tempo di lavoro dell'attività: quanto tempo trascorre dall'inizio al completamento.

- Aθ: tempo di passo dell'attività: quanto tempo trascorre da un completamento al completamento successivo.

### La legge di Little

La legge di Little è un teorema di John Little che afferma: il numero medio di lungo periodo L di clienti in un sistema stazionario è uguale al tasso di arrivo effettivo medio di lungo periodo λ moltiplicato per il tempo medio W che un cliente trascorre nel sistema.

Esempio di notazione:

- L: numero medio di lungo periodo di clienti nel sistema. Preferiamo κ (kappa).

- λ: tasso di arrivo effettivo medio di lungo periodo, cioè gli elementi che entrano effettivamente nel sistema, quindi escluse le desistenze.

- W: tempo medio di lungo periodo che un elemento trascorre nel sistema. Preferiamo τ (tau).

- L = λ W è la legge di Little. Preferiamo κ = λ τ (kappa = lambda \* tau).

La legge di Little è straordinariamente generale: vale indipendentemente dalla distribuzione degli arrivi, dalla distribuzione del servizio, dal numero di serventi o dal tipo di coda.

Ipotesi della legge di Little:

- Tutte le unità di misura sono coerenti.

- Il sistema è stabile, cioè il tasso medio di arrivo è uguale al tasso medio di uscita nel periodo di misurazione, e il numero di elementi è più o meno lo stesso all'inizio e alla fine.

- Gli elementi che escono in anticipo, ad esempio per rinuncia, sono contati in modo coerente sia in λ sia in τ, oppure esclusi in modo coerente da entrambi.

Esempio: un team ha in media κ = 20 ticket in corso, e i ticket arrivano a λ = 4 a settimana; a regime, il team ne completa anche χ = 4 a settimana. Quindi il ticket medio richiede τ = κ / λ = 5 settimane. Per dimezzare il lead time senza lavorare più velocemente, dimezzi il lavoro in corso.

### Indicatori chiave di prestazione (KPI)

Di solito monitoriamo molti aspetti delle attività nella coda, e vogliamo riassumere i risultati scegliendo una breve lista di quelli più pertinenti per i nostri progetti.

Abbiamo realizzato molti progetti e riteniamo che gli indicatori di sintesi più preziosi siano:

- Dτ = lead time di consegna. I team di prodotto possono dire "dal concetto al cliente" o "dall'idea all'implementazione".

- Dα = tasso di successo della consegna. I team devops possono dire "frequenza di rilascio" o "rilasciamo X volte al giorno".

- Dε = rapporto di errore della consegna. I team di qualità possono dire "tasso di fallimento delle modifiche" o "percentuale di rollback".

- Rτ = lead time di ripristino. I site reliability engineer possono dire "tempo di ripristino da un rilascio fallito" o "tempo medio di ripristino (MTTR)".

## Metriche di servizio

Termini utili:

- **Service Level Indicator (SLI):** è la metrica (ad es. 99,9% di uptime)
- **Service Level Objective (SLO):** l'obiettivo interno per quella metrica (ad es. puntare al 99,95% di uptime)
- **Service Level Agreement (SLA):** la promessa formale e contrattuale al cliente (ad es. 99,9% di uptime con penali se non viene rispettata).

### Mean Time To Respond, Repair, Recover, Resolve

MTTR rappresenta quattro misurazioni diverse:

| Metrica                  | Focus                    | Misura                                       | Inizio                                       | Fine                                          |
| ------------------------ | ------------------------ | -------------------------------------------- | -------------------------------------------- | --------------------------------------------- |
| **Mean Time To Respond** | Reazione iniziale        | Tempo per prendere in carico e iniziare      | Quando l'incidente viene rilevato/segnalato  | Quando il team inizia a lavorarci             |
| **Mean Time To Repair**  | Correzione tecnica       | Tempo per riparare l'elemento guasto         | Quando inizia il lavoro di riparazione       | Quando l'elemento è riparato                  |
| **Mean Time To Recover** | Ripristino del servizio  | Tempo per ripristinare il servizio completo  | Quando inizia l'incidente/il disservizio     | Quando il servizio è pienamente operativo     |
| **Mean Time To Resolve** | Risoluzione completa     | Tempo totale dal rilevamento alla chiusura   | Quando l'incidente viene rilevato            | Quando l'incidente è completamente chiuso     |

**Distinzioni chiave:**

**Respond** misura la prontezza del team e l'efficacia degli avvisi. Un tempo di risposta basso significa che i Suoi processi di monitoraggio e di reperibilità funzionano bene, anche se la correzione vera e propria richiede più tempo.

**Repair** è strettamente tecnico: quanto tempo serve effettivamente per riparare ciò che si è guastato, una volta che Lei ci sta lavorando? Esclude il tempo di rilevamento, il triage e la verifica.

**Recover** riguarda la disponibilità del servizio dal punto di vista del cliente. Il sistema potrebbe essere "riparato" ma non ancora "ripristinato" se Lei deve ancora recuperare dati, riscaldare le cache o verificare la funzionalità.

**Resolve** è la più completa: copre l'intero ciclo di vita dell'incidente, dal primo rilevamento fino alla verifica e alla chiusura successive all'incidente.

Scenario di esempio:

- 2:00 — Inizia il disservizio
- 2:05 — Scatta l'avviso, l'incidente viene rilevato
- 2:15 — Il reperibile prende in carico e inizia a lavorare → Tempo di risposta: 10 min (dalle 2:05 alle 2:15)
- 2:45 — Causa principale individuata, correzione rilasciata → Tempo di riparazione: 30 min (dalle 2:15 alle 2:45)
- 3:00 — Servizio verificato come funzionante per gli utenti → Tempo di ripristino: 60 min (dalle 2:00 alle 3:00)
- 3:30 — Ticket dell'incidente chiuso dopo la verifica → Tempo di risoluzione: 85 min (dalle 2:05 alle 3:30)

Metriche correlate:

- MTBF (mean time before failure)
- MTTF (mean time to failure)
- MTTA (mean time to acknowledge)

### Metriche DORA

Le metriche DevOps Research and Assessment (DORA) sono indicatori chiave di prestazione (KPI) standard del settore, specifici per i team devops di ingegneria del software. Si veda [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA usa ora cinque metriche, in due gruppi.

Metriche di throughput:

- **Change Lead Time** - Tempo per implementare, testare e consegnare il codice di una funzionalità (misurato dal commit al rilascio in produzione). Sia specifico su cosa intende per inizio e fine. Ad esempio, alcuni team preferiscono misurare da quando uno sviluppatore inizia a lavorare su un ticket a quando lo sviluppatore invia il lavoro a un processo di integrazione continua; questo approccio tende a essere più efficace per misurare la produttività delle persone.

- **Deployment Frequency** - Numero di rilasci in un determinato intervallo di tempo. Sia specifico su cosa intende per rilascio e su come monitora la frequenza. Ad esempio, alcuni team eseguono un rilascio su un parco di server di produzione e monitorano l'intero rollout, mentre altri team eseguono un rilascio su un singolo server di user acceptance test (UAT) e monitorano quando il project manager invia un'e-mail di annuncio agli utenti per invitarli a provare.

- **Failed Deployment Recovery Time** - Tempo necessario per riprendersi da un rilascio che causa un guasto in produzione. In precedenza si chiamava Mean Time to Recovery (MTTR) o Time to Restore Service. Sia specifico su cosa intende per ripristino. Ad esempio, alcuni team considerano il ripristino come risoluzione completa, cioè il tempo totale da quando un incidente viene rilevato a quando un incidente è completamente chiuso; questo approccio è descritto meglio come Mean Time To Resolve.

Metriche di instabilità:

- **Change Failure Rate** - Percentuale di rilasci che causano un guasto in produzione e richiedono un intervento immediato, come un rollback o un hotfix. Sia specifico su cosa intende per guasto. Ad esempio, alcuni team contano un fallimento anche quando iniziano un ticket di lavoro e poi si rendono conto che il ticket non contiene abbastanza informazioni per procedere, quindi il team respinge il ticket al team delle specifiche.

- **Deployment Rework Rate** - Percentuale di rilasci non pianificati, ad esempio per correggere un incidente in produzione. È il numero di rilasci non pianificati diviso per il numero totale di rilasci. DORA ha aggiunto questa metrica nel 2024.

I precedenti report DORA trattavano anche l'**affidabilità** (Reliability) come metrica di prestazione operativa: una valutazione più ampia, spesso qualitativa, della coerenza del servizio, come disponibilità, uptime, latenza, accuratezza e obiettivi di livello di servizio. L'affidabilità aiuta a mostrare che un'elevata velocità non va a scapito della capacità del sistema.

## Coda di code

La teoria delle code si estende facilmente a una coda di code, come un processo di livello superiore che contiene fasi, stadi o gate di livello inferiore.

### Double Diamond come coda di code

Ad esempio, si consideri il modello di processo di innovazione "Double Diamond", che specifica quattro fasi:

1. Discover (scoprire): comprendere il problema invece di limitarsi a supporre di cosa si tratti.
2. Define (definire): con gli spunti della fase di scoperta, definire la sfida.
3. Develop (sviluppare): dare risposte diverse al problema chiaramente definito.
4. Deliver (consegnare): testare soluzioni diverse su piccola scala e poi migliorarle.

La teoria delle code può modellare tutto ciò come una coda di processo che contiene quattro code di fase:

- Il tasso di arrivo del processo è il tasso di arrivo della fase 1.
- Il tasso di successo del processo è il tasso di successo della fase 4.
- Il numero di errori del processo è la somma dei numeri di errori delle fasi.
- Il numero di abbandoni del processo è la somma dei numeri di abbandoni delle fasi.
- Il lead time del processo è la somma dei lead time delle fasi.
- Il throughput massimo del processo è il throughput della fase più lenta, detta anche collo di bottiglia.

### Imbuto come coda di code

Nel nostro lavoro pratico usiamo spesso la parola "imbuto" (funnel) per descrivere in modo informale una coda di code che tende a ridurre il numero di elementi a ogni fase:

- Coda di assunzione che usa una fase di contatto, una fase di colloquio e una fase di offerta. Per questo tipo di coda, puntiamo a massimizzare il tasso di arrivo della fase 1, cioè ad aumentare i contatti, ad esempio tramite promozioni.

- Coda di acquisto che usa una fase di ricerca del cliente, una fase del carrello e una fase di pagamento. Per questo tipo di coda, puntiamo a minimizzare il tasso di abbandono della fase 2, cioè a ridurre l'abbandono del carrello, ad esempio tramite promemoria.

- Coda di programmazione che usa una fase di integrazione, una fase di accettazione da parte degli utenti e una fase di rollout in produzione. Per questo tipo di coda, puntiamo a minimizzare il tasso di errore della fase di rollout in produzione, ad esempio tramite telemetria canary.

## Spunti

Sette spunti sulla teoria delle code, di Bob Wescott, autore di "The Every Computer Performance Book" (si veda anche il [riassunto di Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Più lento è il centro di servizio, più basso è l'utilizzo massimo per cui pianificare al carico di picco.

2. È molto difficile usare l'ultimo 15% di qualsiasi cosa.

3. Più si è vicini al limite, più alto è il prezzo di un errore.

4. Gli aumenti del tempo di risposta sono limitati dal numero di coloro che possono attendere.

5. Ricordi che questa è una media, non un massimo.

6. Nei centri di servizio multipli c'è un effetto umano di negazione.

7. Presenti i piccoli miglioramenti nella luce migliore.

## Epilogo

### Si veda anche

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Aree di Wikipedia in cui usiamo le code in molti progetti:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Introduzioni di John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Introduzioni più dettagliate:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formule:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Ringraziamenti

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Questo libro è eccellente per il devops ad alto livello e orienta direttamente la nostra scelta dei KPI. I KPI di questa pagina sono in linea con le raccomandazioni del libro.

## Informazioni sul progetto

- Pacchetto: queue-theory
- Versione: 3.0.0
- Creato: 2019-01-25T04:17:56Z
- Aggiornato: 2026-11-23T15:33:48Z
- Licenza: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, oppure ci contatti per altre condizioni (si veda [LICENSE.md](LICENSE.md))
- Contatto: Joel Parker Henderson <joel@joelparkerhenderson.com>
