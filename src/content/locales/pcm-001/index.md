# Di theory of queue

Queue theory na di math wey dey study line wey people or tins dey wait for, wey dem dey call queue. We dey use queue theory for our software development, for purpose like to analyze and improve our practice and process dem, like how our customer service dey respond quick, kanban planning for project management, message queue for communication between process dem, and devops pipeline for continuous deployment.

Wetin dey inside:

- [Introduction](#introduction)
  - [How customer service dey respond quick](#how-customer-service-dey-respond-quick)
  - [Kanban planning for project management](#kanban-planning-for-project-management)
  - [Message queue for communication between process dem](#message-queue-for-communication-between-process-dem)
  - [Devops pipeline for continuous deployment](#devops-pipeline-for-continuous-deployment)
- [Queue words wey we dey use](#queue-words-wey-we-dey-use)
  - [Types of queue and types of service](#types-of-queue-and-types-of-service)
- [Notation for queue theory](#notation-for-queue-theory)
  - [Count](#count)
  - [Arrival rate, service rate](#arrival-rate-service-rate)
  - [Utilization ratio wey dem still dey call traffic intensity](#utilization-ratio-wey-dem-still-dey-call-traffic-intensity)
  - [Throughput rate dem: total rate, finish rate, success rate, failure rate, skip rate](#throughput-rate-dem-total-rate-finish-rate-success-rate-failure-rate-skip-rate)
  - [Wetin service rate mean](#wetin-service-rate-mean)
  - [Skip rate](#skip-rate)
  - [Error ratio](#error-ratio)
  - [Lead time, step time, work time, wait time](#lead-time-step-time-work-time-wait-time)
  - [Kendall notation](#kendall-notation)
- [Queue math](#queue-math)
  - [Di utilization curve](#di-utilization-curve)
  - [Kingman formula](#kingman-formula)
  - [Pooling and Erlang C](#pooling-and-erlang-c)
- [How to track activity](#how-to-track-activity)
  - [Example of activity](#example-of-activity)
  - [Little Law](#little-law)
  - [Key performance indicators (KPIs)](#key-performance-indicators-kpis)
- [Service metrics](#service-metrics)
  - [Mean Time To Respond, Repair, Recover, Resolve](#mean-time-to-respond-repair-recover-resolve)
  - [DORA metrics](#dora-metrics)
- [Queue wey get queue inside](#queue-wey-get-queue-inside)
  - [Double Diamond as queue wey get queue inside](#double-diamond-as-queue-wey-get-queue-inside)
  - [Funnel as queue wey get queue inside](#funnel-as-queue-wey-get-queue-inside)
- [Wetin we don learn](#wetin-we-don-learn)
- [Last word](#last-word)
  - [Make you still look](#make-you-still-look)
  - [Thank you](#thank-you)
- [Project information](#project-information)

## Introduction

We dey use queue theory for our project dem for plenty purpose:

- How customer service dey respond quick

- Kanban planning for project management

- Message queue for communication between process dem

- Devops pipeline for continuous deployment

### How customer service dey respond quick

For example, we wan analyze how customer dem dey ask for sales help and support help, and how fast we dey respond.

Some product wey concern dis na, for example, [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Kanban planning for project management

For example, we wan track di lead time and progress time as new feature idea dey grow from design reach delivery.

Some product wey concern dis na, for example, [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Message queue for communication between process dem

For example, we wan make throughput big as e fit be and make pressure small as e fit be, as one program dey send request to another program.

Some product wey concern dis na, for example, [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Devops pipeline for continuous deployment

For example, we wan make sure say our continuous integration server get enough capacity to test our software and then deploy am.

Some product wey concern dis na, for example, [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Queue words wey we dey use

Queue terminology na big topic. Dis section get some of di common words wey we dey use. For di example dem, we go use di idea of customer wey dey wait for line.

### Types of queue and types of service

Types of queue and types of service dey describe how di queue dey choose which item e go process.

- First In First Out (FIFO): serve di customer wey don wait pass everybody.

- Last In First Out (LIFO): serve di customer wey wait di shortest time.

- Priority: serve customer dem based on dia priority level; dis level fit depend on status, how urgent e be, payment, and so on.

- Shortest Job First (SJF): serve di customer wey need di smallest amount of service.

- Longest Job First (LJF): serve di customer wey need di biggest amount of service.

- Shortest Remaining Processing Time (SRPT): e be like SJF, but short job wey just arrive fit push comot longer job wey dem don already dey serve.

- Round Robin: serve each customer for small time, then move go di next customer, and do am again.

- Time Sharing, wey dem still dey call Processor Sharing (PS): serve everybody at di same time; di service capacity dey share equally among everybody wey dey wait.

SJF and SRPT dey reduce di average waiting time, but dem fit make long job wait forever, so real system dem dey often add aging or priority cap.

## Notation for queue theory

Queue theory dey use notation wey get Greek letter dem.

Our team dem dey use some of di popular notation; we still add some custom notation wey dey help us for software project dem.

Our own notation and wetin each symbol mean:

| Our own notation | Wetin e mean |
| ---------------- | ------------ |
| κ (kappa) | number of item dem for di system, di ones wey dey wait plus di ones wey dem dey work on |
| λ (lambda) | arrival rate of item wey dey enter di system |
| μ (mu) | service rate, wey dem still dey call capacity: how fast one server dey work wen e dey busy |
| ρ (rho) | utilization: di fraction of time wey di server dem dey busy, λ / (c μ) |
| χ (chi) | throughput, wey dem still dey call departure rate: output wey we see, for any reason |
| α (alpha) | success rate: output wey we see wey come out correct |
| β (beta) | failure rate: output wey we see wey come out wrong |
| δ (delta) | finish rate: success + failure, item dem wey dem don serve, whether di result correct or wrong |
| σ (sigma) | skip rate: item wey enter, then comot without service |
| ε (epsilon) | error ratio: β / (α + β) = β / δ |
| τ (tau) | time for di system, wey dem still dey call lead time |
| ω (omega) | wait time, wey dem still dey call time for di queue |
| φ (phi) | work time, wey dem still dey call time for di processor, wey dem still dey call service time |
| θ (theta) | step time between one completion and di next; mean step time ≈ 1 / χ for steady state |

### Count

We dey count item often, and we dey use dis notation:

- κ (kappa): di count of item for di system, wey mean di item dem wey dey wait plus di item dem wey dem dey work on.

![Diagram: item dem dey arrive for rate λ, κ item dey for di system, and item dem dey comot with throughput χ](https://queue-theory.github.io/images/queue-theory-rates-lambda-input-rate-kappa-item-count-chi-output-rate.svg)

Example:

- κ = 10 mean say e dey exactly 10

- κ ≈ 10 mean say e dey about 10

- κ < 10 mean say e dey less than 10

- κ > 10 mean say e dey more than 10

- κ ≪ 10 mean say e dey far less than 10

- κ ≫ 10 mean say e dey far more than 10

Di count κ (kappa) na snapshot for one moment.

Di average count κ̅ (kappa bar) na calculation wey dey take di average of measurement for one particular time, like to measure every hour for two weeks.

### Arrival rate, service rate

Di notation wey important pass:

- λ (lambda): arrival rate. Dis one dey measure how fast new item dem dey enter di queue.

- μ (mu): service rate, wey dem still dey call capacity. Dis one dey measure how fast one server fit handle item wen e dey busy.

Example of general tins for traditional queue wey get one server:

- λ < μ mean say di arrival rate small pass di service rate; di queue dey stable, wey mean say e dey go up and down around one finite average size.

- λ = μ mean say di arrival rate equal di service rate; if any randomness at all dey, di queue go dey drift and grow without limit.

- λ > μ mean say di arrival rate big pass di service rate; di queue dey grow steady, by about λ − μ item for every time unit.

Di idea wey be like say "λ = μ go keep di queue for di same size" na true only wen arrival and service dey regular perfectly, like metronome. Real arrival dey come in burst, so idle time wey waste during quiet period no fit ever come back, and di queue go grow during di next burst.

Make you know say some people wey dey practice queue theory dey use "service rate" to mean di output wey dem see instead of capacity; please see [wetin service rate mean](#wetin-service-rate-mean).

### Utilization ratio wey dem still dey call traffic intensity

Di notation wey important pass wey dey summarize queue:

- ρ (rho): utilization ratio, wey mean di fraction of time wey di server dem dey busy = λ / μ for one server, or λ / (c μ) for c server dem

Example:

- ρ < 1 mean say di server dem get extra capacity; di queue dey stable. Di closer ρ dey reach 1, di longer di waiting; please see [di utilization curve](#di-utilization-curve).

- ρ = 1 mean say di server dem dey busy all di time; di queue no stable and e dey grow without limit.

- ρ > 1 mean say arrival pass capacity; di queue dey grow bigger.

### Throughput rate dem: total rate, finish rate, success rate, failure rate, skip rate

Throughput rate dem dey measure di output wey we see, wey mean item dem wey really comot from di queue. Dem dey come in five big category:

- χ (chi): total rate. Dis one dey measure how many item for every time period dey comot from di queue for any reason: success, failure, skip, and so on.

- α (alpha): success rate. Dis one dey measure how many item for every time period come out correct, for example correct, complete, accepted.

- β (beta): failure rate. Dis one dey measure how many item for every time period come out wrong, for example incorrect, incomplete, rejected.

- δ (delta): finish rate. Dis one dey measure how many item for every time period dem serve, whether di result correct or wrong: success + failure.

- σ (sigma): skip rate. Dis one dey measure how many item for every time period enter di queue, then comot without service, for example abandonment, reneging.

Finish rate = success rate + failure rate:

- δ = α + β (you go talk am: delta equals alpha plus beta)

Total rate = finish rate + skip rate:

- χ = δ + σ (you go talk am: chi equals delta plus sigma)

Total rate = success rate + failure rate + skip rate:

- χ = α + β + σ (you go talk am: chi equals alpha plus beta plus sigma)

![Diagram: item dem dey comot from di system as success α, failure β, or skip σ; finish δ = α + β, so χ = δ + σ](https://queue-theory.github.io/images/queue-theory-output-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Every item wey dem count for χ don enter di system, so for steady state di total rate equal di arrival rate: χ ≈ λ. Na why throughput rate dem dey measure output, no be capacity.

### Wetin service rate mean

Depending on di context and di person wey dey practice am, di word "service rate" fit mean either "total rate" or "success rate".

Dis one get historical root and e fit cause confusion and mistake, especially for context and practitioner wey dey use queue theory where dem really need to track failure and skip.

- Theoretical View: Di service rate na pure measurement of speed (for example, job for every second), no matter whether di job dem na success, failure, skip, and so on.

- Processing View: Di service rate include anytin wey di queue dey spend time to process, wey mean success or failure, but e no include skip.

- Technology View: For applied field like software engineering, di service rate dey measure only success, but di error rate dey measure failure, and di skip rate dey measure skip.

So we dey keep μ for capacity, and we dey add di output rate dem wey we see join am, instead of to replace am:

- μ (mu): service rate, wey dem still dey call capacity. Dis one dey measure how fast one server fit handle item wen e dey busy.

- χ (chi): total rate. Dis one dey measure how many item for every time period dey comot from di queue for any reason: success, failure, skip, and so on.

- α (alpha): success rate. Dis one dey measure how many item for every time period come out correct, for example correct, complete, accepted.

Why we no go replace μ with χ or α? For stable queue, every item wey enter go comot at di end, so χ ≈ λ. Then λ / χ ≈ 1 no matter di load, and dis one no talk anytin about how busy di server dem dey. Utilization need capacity: ρ = λ / (c μ), wey equal di fraction of time wey di server dem dey busy.

### Skip rate

Di details of skip rate:

- σ (sigma): skip rate. Dis one dey measure how many item enter di queue, then comot without dem process am.

Skip na wen item enter di queue, then comot without any serious processing:

- Abandoning: wen customer join queue, then comot, for any reason.

- Reneging: wen customer wey don already wait decide to comot becos e don waste too much time.

Two behavior wey relate to am no be skip:

- Balking: wen customer decide say e no go join di queue becos di waiting time fit too long. Item wey balk never enter di system, so e dey outside di system boundary: dem no dey count am for λ, χ, or σ. If balk dey important, like sales wey lost, then make you count dem separate as arrival wey dem turn back.

- Jockeying: wen customer dey change from one parallel queue go another, like checkout lane, dey try find shorter waiting.

### Error ratio

Di notation wey important pass wey dey summarize di success of queue:

- ε (epsilon): error ratio = failure count / (success count + failure count) = β / (α + β) = β / δ

Skip no dey inside, becos dem never serve item wey skip, so e no correct and e no wrong. Make you track skip separate with σ.

![Diagram: di finish rate δ na di success rate α plus di failure rate β, and di error ratio ε na di failure rate β divide by di finish rate δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Example:

- ε = 0 mean say error no dey.

- ε = 0.1 mean say 10% of di service dem get error.

- ε = 1 mean say every service get error.

### Lead time, step time, work time, wait time

We dey track four kind time:

- τ (tau): lead time = from di start of di queue reach di finish of di queue

- θ (theta): step time = from one finish reach di next finish; one step time na one gap, and di mean step time na di average gap

- φ (phi): work time = di time wey dem spend to do real work, wey dem still dey call processing time

- ω (omega): wait time = di time wey pass without real work, wey dem still dey call pending time

![Diagram: di lead time τ na di wait time ω and then di work time φ, so τ = ω + φ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-wait-time-work-time.svg)

Example:

- τ = 5s mean say dem add item to di queue, then serve am 5 second later.

- ω = 4s mean say item wait for di queue for 4 second, then work start.

- φ = 1s mean say item take 1 second of work, then e complete.

- θ = 1s mean say 1 second dey between one completion and di next completion.

How dem relate:

- τ = ω + φ: lead time na wait time plus work time. For di example dem, 5s = 4s + 1s.

- mean θ ≈ 1 / χ: for steady state, di mean step time na di inverse of di total rate. One single gap no talk much about di rate; di average of plenty gap dey talk am. For di example dem, if di mean step time na 1s, then χ ≈ 1 item for every second.

### Kendall notation

Kendall notation na another notation for queueing theory, wey dem dey write as A/S/c/K/N/D:

- A: di arrival process, wey mean di distribution of time between arrival dem.

- S: di service process, wey mean di distribution of service time dem.

- c: di number of server dem.

- K: di capacity, wey mean di maximum number of item wey dem allow for di system, wey dey wait or wey dem dey serve, before dem go begin turn new arrival back.

- N: di population, wey mean di number of customer dem wey fit come.

- D: di discipline, wey mean di type of queue, like FIFO or LIFO.

Common letter dem for A and S:

- M: Markovian, wey dem still dey call memoryless, wey mean exponential time dem, wey dey come from Poisson arrival.

- D: Deterministic, wey mean constant time dem.

- G: General, wey mean any distribution.

Wen dem no write di last three, di default na K = ∞, N = ∞, D = FIFO. For example, "M/M/1" mean Poisson arrival, exponential service time, one server, capacity wey no get limit, population wey no get limit, and first in first out.

Also:

- n: di number of item for di system.

## Queue math

Di math section dem dey use textbook symbol, so dat you fit compare dem with other source: S na di average service time, wey be our φ, and μ = 1 / S na di capacity of one server.

### Di utilization curve

Di one result wey important pass for queue theory: as utilization dey near 100%, wait time dey grow without limit, and e dey grow fastest for di end.

For M/M/1 queue, where S na di average service time:

- Lead time τ = S / (1 − ρ)

- Wait time ω = S × ρ / (1 − ρ)

| Utilization ρ | Lead time τ | Wait time ω |
| ------------- | ----------- | ----------- |
| 50%           | 2 × S       | 1 × S       |
| 70%           | 3.3 × S     | 2.3 × S     |
| 80%           | 5 × S       | 4 × S       |
| 90%           | 10 × S      | 9 × S       |
| 95%           | 20 × S      | 19 × S      |
| 99%           | 100 × S     | 99 × S      |

Example: one code review dey take 1 hour of work. If di reviewer dem dey 80% busy, review go take about 5 hour from request reach done. If di reviewer dem dey 95% busy, e go take about 20 hour, even though di reviewer dem dey only 15 percentage point more busy.

Na why "make everybody dey 100% busy" na recipe for long lead time, and na why di [wetin we don learn](#wetin-we-don-learn) wey dey below dey warn against planning for high utilization.

### Kingman formula

Kingman formula, wey dem still dey call di VUT equation, dey estimate wait time for queue wey get one server with any arrival and service distribution (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Di three factor dem na:

- U: utilization factor ρ / (1 − ρ), wey be di utilization curve wey dey above.

- V: variability factor (ca² + cs²) / 2, where ca na di coefficient of variation of time between arrival dem, and cs na di coefficient of variation of service time dem. Di coefficient of variation na di standard deviation divide by di mean.

- T: time factor S, di average service time.

Example: for M/M/1 queue, ca = cs = 1, so V = 1, and di formula go give di same wait time as di utilization curve. If you make di work item dem more uniform, like to split big ticket so dat cs go drop from 1 reach near 0, then V go drop reach about 0.5, and di wait time go reduce by about half for di same utilization.

Kingman formula dey show di three lever wey fit reduce wait time:

- Reduce utilization, like to add capacity or to limit work in progress.

- Reduce variability, like with smaller batch, work item dem wey more uniform, or arrival wey smooth pass.

- Reduce service time, like with automation.

### Pooling and Erlang C

One queue wey dem share wey dey feed plenty server better pass separate queue dem wey each one dey feed one server. Na why bank dey use one line wey dey feed plenty teller, and na why one support queue wey everybody share dey beat queue for each agent.

Example: two server, each one dey take 1 hour for every item, and item dem dey arrive at 1.6 item for every hour in total, so utilization na 80%.

- Separate queue dem: each server na M/M/1 queue with 0.8 arrival for every hour, so di lead time na 1 / (1 − 0.8) = 5 hour.

- Pooled queue: di two server dem dey share one M/M/2 queue, so di lead time na about 2.8 hour, wey be about 44% less, with di same people and di same work.

Di Erlang C formula dey calculate di probability say item wey dey arrive go need to wait for M/M/c queue, with offered load a = λ / μ and utilization ρ = a / c:

- P(wait) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Wait time ω = P(wait) / (c μ − λ)

Customer service team dem dey use Erlang C to decide how many agent dem go put for work to meet one target, like "80% of call wey dem answer inside 20 second".

Pooling get limit: e dey work best wen any server fit handle any item. If item dem need specialist, then pooled queue fit need routing rule.

## How to track activity

### Example of activity

Make we say we get sometin wey we wan track, and we call am one general name like "Activity", and we short am as "A".

We fit use queue notation well well to describe di activity and how e dey move pass queue.

Example:

- Aκ: Activity count: how many item dey for di queue.

- Aλ: Activity arrival rate: how many item dey enter for every time unit.

- Aχ: Activity total rate: how many item dey comot from di queue for every time unit.

- Aα: Activity success rate: how many item correct for every time unit.

- Aβ: Activity failure rate, wey dem still dey call error rate: how many item wrong for every time unit.

- Aμ: Activity service rate, wey dem still dey call capacity: how many item one server fit complete for every time unit wen e dey busy.

- Aσ: Activity skip rate: how many item dem abandon for every time unit.

- Aρ: Activity utilization ratio: di fraction of available time wey di server dem dey busy, wey mean busy time ÷ available time, or λ / (c μ).

- Aε: Activity error ratio: how many item dem complete with error compared to di total.

- Aτ: Activity lead time: how much time pass from wen dem request am reach wen dem complete am.

- Aω: Activity wait time: how much time pass from wen dem request am reach wen dem start am.

- Aφ: Activity work time: how much time pass from wen dem start am reach wen dem complete am.

- Aθ: Activity step time: how much time pass from one completion reach di next completion.

### Little Law

Little law na theorem by John Little wey talk say: di long-term average number L of customer dem for stationary system equal di long-term average effective arrival rate λ multiply by di average time W wey one customer dey spend for di system.

Example notation:

- L: di long-term average number of customer dem for di system. We prefer κ (kappa).

- λ: di long-term average effective arrival rate, wey mean di item dem wey really enter di system, so e no include balk.

- W: di long-term average time wey one item dey for di system. We prefer τ (tau).

- L = λ W na Little law. We prefer κ = λ τ (kappa = lambda \* tau).

Little law dey general well well: e dey hold no matter di arrival distribution, di service distribution, di number of server dem, or di type of queue.

Wetin Little law assume:

- All di measurement unit dem dey consistent.

- Di system dey stable, wey mean say di average arrival rate equal di average departure rate for di measurement period, and di number of item dem be like di same for di beginning and for di end.

- Item dem wey comot early, like through reneging, dem either count dem consistently for both λ and τ, or dem comot dem consistently from both.

Example: one team get on average κ = 20 ticket wey dey in progress, and ticket dem dey arrive at λ = 4 for every week; for steady state, di team still dey finish χ = 4 for every week. So di average ticket dey take τ = κ / λ = 5 week. To cut lead time into half without to work faster, cut work in progress into half.

### Key performance indicators (KPIs)

We dey usually track plenty tins about di activity dem for di queue, and we wan summarize di result by choosing short list of di ones wey concern our project dem pass.

We don build plenty project, and we believe say di summary indicator dem wey get value pass na:

- Dτ = Delivery lead time. Product team dem fit talk "from concept reach customer" or "from idea reach implementation".

- Dα = Delivery success rate. Devops team dem fit talk "deployment frequency" or "we dey ship X times every day".

- Dε = Delivery error ratio. Quality team dem fit talk "change fail rate" or "percentage of rollback".

- Rτ = Restore lead time. Site reliability engineer dem fit talk "failed deployment recovery time" or "mean time to restore (MTTR)".

## Service metrics

Word dem wey dey useful:

- **Service Level Indicator (SLI):** na di metric (for example, 99.9% uptime)
- **Service Level Objective (SLO):** di internal target for dat metric (for example, aim for 99.95% uptime)
- **Service Level Agreement (SLA):** di formal promise wey dey for contract to di customer (for example, 99.9% uptime with penalty if dem miss am).

### Mean Time To Respond, Repair, Recover, Resolve

MTTR dey represent four different measurement:

| Metric                   | Focus                | Wetin e dey measure                          | Start                                    | Finish                                  |
| ------------------------ | -------------------- | -------------------------------------------- | ---------------------------------------- | --------------------------------------- |
| **Mean Time To Respond** | First reaction       | Time to acknowledge and begin action         | Wen dem detect or report di incident     | Wen di team start to work on am         |
| **Mean Time To Repair**  | Technical fix        | Time to fix di item wey spoil                | Wen repair work begin                    | Wen dem don fix di item                 |
| **Mean Time To Recover** | Service restoration  | Time to bring back full service              | Wen di incident or outage start          | Wen di service dey work fully           |
| **Mean Time To Resolve** | Complete resolution  | Total time from detection reach closure      | Wen dem detect di incident               | Wen dem don close di incident fully     |

**Di main difference dem:**

**Respond** dey measure how ready di team dey and how well di alerting dey work. Low response time mean say your monitoring and on-call process dem dey work well, even if di real fix dey take longer.

**Repair** na only technical matter—how long e dey take to really fix di tin wey spoil once you don start to work on am? E no include detection time, triage, and verification.

**Recover** na about service availability from di customer point of view. Di system fit don "repair" but e never "recover" if you still need to restore data, warm up cache, or verify say e dey work.

**Resolve** na di one wey cover everytin pass—e dey capture di whole incident lifecycle from di first detection through di verification after di incident reach closure.

Example scenario:

- 2:00 AM — Outage begin
- 2:05 AM — Alert fire, dem detect di incident
- 2:15 AM — On-call acknowledge am and start work → Response time: 10 min (2:05 reach 2:15)
- 2:45 AM — Dem find di root cause, dem deploy di fix → Repair time: 30 min (2:15 reach 2:45)
- 3:00 AM — Dem verify say di service dey work for user dem → Recovery time: 60 min (2:00 reach 3:00)
- 3:30 AM — Dem close di incident ticket after verification → Resolution time: 85 min (2:05 reach 3:30)

Metric dem wey relate:

- MTBF (mean time before failure)
- MTTF (mean time to failure)
- MTTA (mean time to acknowledge)

### DORA metrics

DevOps Research and Assessment (DORA) metrics na industry standard key performance indicators (KPIs) specially for software engineering devops team dem. Please see [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA now dey use five metric, for two group.

Throughput metric dem:

- **Change Lead Time** - Di time to implement, test, and deliver code for one feature (dem dey measure am from commit reach deployment for production). Make you talk clear wetin you mean by start and finish. For example, some team dem like to measure from wen developer start work on one ticket, reach wen di developer push di work go continuous integration process; dis approach dey usually work better to measure how productive one person dey.

- **Deployment Frequency** - Di number of deployment for one given period of time. Make you talk clear wetin you mean by deployment and how you dey track frequency. For example, some team dem dey do deployment to one fleet of production server and dem dey track di full rollout, but other team dem dey do deployment to one single user acceptance test (UAT) server and dem dey track wen di project manager send email announcement to di user dem make dem try test am.

- **Failed Deployment Recovery Time** - Di time wey e dey take to recover from deployment wey cause failure for production. Before, dem dey call dis one Mean Time to Recovery (MTTR) or Time to Restore Service. Make you talk clear wetin you mean by recovery. For example, some team dem dey count recovery as complete resolution, wey mean di total time from wen dem detect incident reach wen dem close di incident fully; di better name for dis approach na Mean Time To Resolve.

Instability metric dem:

- **Change Failure Rate** - Di percentage of deployment wey cause failure for production and need quick remediation, like rollback or hotfix. Make you talk clear wetin you mean by failure. For example, some team dem still dey count failure wen dem start on one work ticket and then realize say di work ticket no get enough information to continue, so di team go return di work ticket back to di specification team.

- **Deployment Rework Rate** - Di percentage of deployment wey dem no plan, like to fix production incident. Dis one na di deployment dem wey dem no plan divide by di total deployment dem. DORA add dis metric for 2024.

Di DORA report dem wey come before still discuss **Reliability** as operational performance metric: assessment of how consistent di service dey wey wide pass, and wey often dey qualitative, like availability, uptime, latency, accuracy, and service level objectives. Reliability dey help show say high velocity no dey come at di expense of system capability.

## Queue wey get queue inside

E easy to extend queue theory to queue wey get queue inside, like higher-level process wey contain lower-level stage dem, or phase dem, or gate dem.

### Double Diamond as queue wey get queue inside

For example, make you consider di "Double Diamond" innovation process model, wey get four stage:

1. Discover: Understand di issue instead of just to assume wetin e be.
2. Define: With di insight wey you get from di discovery phase, define di challenge.
3. Develop: Give different answer to di problem wey dem don define clear.
4. Deliver: Test different solution dem for small scale, then improve dem.

Queue theory fit model dis as one process queue wey contain four stage queue:

- Di arrival rate of di process na di arrival rate of stage 1.
- Di success rate of di process na di success rate of stage 4.
- Di error count of di process na di sum of di error count of di stage dem.
- Di skip count of di process na di sum of di skip count of di stage dem.
- Di lead time of di process na di sum of di lead time of di stage dem.
- Di maximum throughput of di process na di throughput of di stage wey slow pass, wey dem still dey call di bottleneck.

### Funnel as queue wey get queue inside

For our practical work, we dey use di word "funnel" often to loosely describe queue wey get queue inside wey dey tend to reduce di item count for each stage:

- Hiring queue wey dey use outreach stage, interview stage, and offer stage. For dis kind queue, we dey aim to make di stage 1 arrival rate big as e fit be, wey mean to increase our outreach, like through promotion.

- Purchasing queue wey dey use customer search stage, shopping cart stage, and payment stage. For dis kind queue, we dey aim to make di stage 2 skip rate small as e fit be, wey mean to reduce cart abandonment, like through reminder.

- Programming queue wey dey use integration stage, user acceptance stage, and production rollout stage. For dis kind queue, we dey aim to make di error rate of di production rollout stage small as e fit be, like through canary telemetry.

## Wetin we don learn

Seven insight about queue theory, by Bob Wescott, di author of "The Every Computer Performance Book" (please still see [Kottke's summary](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Di slower di service center, di lower di maximum utilization wey you suppose plan for at peak load.

2. E hard well well to use di last 15% of anytin.

3. Di closer you dey to di edge, di higher di price wey you go pay if you dey wrong.

4. How response time fit increase get limit, based on di number wey fit wait.

5. Make you remember say dis na average, no be maximum.

6. Human denial effect dey for multiple service center.

7. Make you show small improvement dem for dia best light.

## Last word

### Make you still look

Wikipedia:

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Wikipedia area dem where we dey use queue for plenty project:

- [Project management](https://en.wikipedia.org/wiki/Project_management)

- [Message queue](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Introduction dem by John D. Cook:

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Introduction dem wey get more detail:

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - By Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. By J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - By Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - By Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Formula dem:

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Thank you

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. By Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Dis book dey excellent for high-level devops, and e dey directly guide how we take choose our KPIs. Di KPIs for dis page dey agree with wetin di book recommend.

## Project information

- Package: queue-theory
- Version: 3.0.0
- Wen dem create am: 2019-01-25T04:17:56Z
- Wen dem update am: 2026-11-23T15:33:48Z
- License: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, or please contact us for other terms (please see [LICENSE.md](LICENSE.md))
- Contact: Joel Parker Henderson <joel@joelparkerhenderson.com>
