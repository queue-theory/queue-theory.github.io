# Teoría de colas

La teoría de colas es el estudio matemático de las líneas de espera, o colas.
Usamos la teoría de colas en nuestro desarrollo de software con fines como
analizar y optimizar nuestras prácticas y procesos, por ejemplo la capacidad de
respuesta de nuestro servicio al cliente, la planificación kanban de la gestión
de proyectos, las colas de mensajes de comunicación entre procesos y los
pipelines de despliegue continuo de devops.

Contenido:

- [Introducción](#introducción)
  - [Capacidad de respuesta del servicio al cliente](#capacidad-de-respuesta-del-servicio-al-cliente)
  - [Planificación kanban de la gestión de proyectos](#planificación-kanban-de-la-gestión-de-proyectos)
  - [Colas de mensajes de comunicación entre procesos](#colas-de-mensajes-de-comunicación-entre-procesos)
  - [Pipelines de despliegue continuo de devops](#pipelines-de-despliegue-continuo-de-devops)
- [Terminología de colas](#terminología-de-colas)
  - [Tipos de cola y tipos de servicio](#tipos-de-cola-y-tipos-de-servicio)
- [Notación de la teoría de colas](#notación-de-la-teoría-de-colas)
  - [Recuento](#recuento)
  - [Tasa de llegada, tasa de servicio, tasa de salida](#tasa-de-llegada-tasa-de-servicio-tasa-de-salida)
  - [Razón de utilización, también llamada intensidad de tráfico](#razón-de-utilización-también-llamada-intensidad-de-tráfico)
  - [Tasas de rendimiento: tasa de salida, tasa de finalización, tasa de éxito, tasa de fallo, tasa de omisión](#tasas-de-rendimiento-tasa-de-salida-tasa-de-finalización-tasa-de-éxito-tasa-de-fallo-tasa-de-omisión)
  - [Desambiguación de la tasa de servicio](#desambiguación-de-la-tasa-de-servicio)
  - [Tasa de omisión](#tasa-de-omisión)
  - [Razón de errores](#razón-de-errores)
  - [Tiempo de entrega, tiempo de espera, tiempo de trabajo, tiempo de paso](#tiempo-de-entrega-tiempo-de-espera-tiempo-de-trabajo-tiempo-de-paso)
  - [Notación de Kendall](#notación-de-kendall)
- [Matemáticas de colas](#matemáticas-de-colas)
  - [La curva de utilización](#la-curva-de-utilización)
  - [Fórmula de Kingman](#fórmula-de-kingman)
  - [Agrupación y Erlang C](#agrupación-y-erlang-c)
- [Seguimiento de actividades](#seguimiento-de-actividades)
  - [Ejemplos de actividades](#ejemplos-de-actividades)
  - [Ley de Little](#ley-de-little)
  - [Indicadores clave de desempeño (KPI)](#indicadores-clave-de-desempeño-kpi)
- [Métricas de servicio](#métricas-de-servicio)
  - [Tiempo medio para responder, reparar, recuperar, resolver](#tiempo-medio-para-responder-reparar-recuperar-resolver)
  - [Métricas DORA](#métricas-dora)
- [Cola de colas](#cola-de-colas)
  - [Cola de colas del Doble Diamante](#cola-de-colas-del-doble-diamante)
  - [Cola de colas en embudo](#cola-de-colas-en-embudo)
- [El círculo vicioso del exceso de trabajo](#el-círculo-vicioso-del-exceso-de-trabajo)
- [Ideas clave](#ideas-clave)
- [Flujo de proceso](#flujo-de-proceso)
  - [Parámetros de comportamiento](#parámetros-de-comportamiento)
  - [Parámetros de variabilidad](#parámetros-de-variabilidad)
- [Epílogo](#epílogo)
  - [Ver también](#ver-también)
  - [Créditos](#créditos)
- [Seguimiento](#seguimiento)


## Introducción

Usamos la teoría de colas en nuestros proyectos con muchos fines:

- Capacidad de respuesta del servicio al cliente

- Planificación kanban de la gestión de proyectos

- Colas de mensajes de comunicación entre procesos

- Pipelines de despliegue continuo de devops

### Capacidad de respuesta del servicio al cliente

Por ejemplo, queremos analizar cómo los clientes solicitan ayuda de ventas y ayuda de soporte, y con qué rapidez respondemos.

Algunos productos relevantes son, por ejemplo, [Salesforce](https://wikipedia.org/wiki/Salesforce), [LiveChat](https://wikipedia.org/wiki/LiveChat), [Zendesk](https://wikipedia.org/wiki/Zendesk).

### Planificación kanban de la gestión de proyectos

Por ejemplo, queremos hacer un seguimiento de los tiempos de entrega y los tiempos de avance mientras la idea de una nueva funcionalidad evoluciona desde el diseño hasta la entrega.

Algunos productos relevantes son, por ejemplo, [Asana](<https://wikipedia.org/wiki/Asana_(software)>), [Jira](<https://wikipedia.org/wiki/Jira_(software)>), [Microsoft Project](https://wikipedia.org/wiki/Microsoft_Project).

### Colas de mensajes de comunicación entre procesos

Por ejemplo, queremos maximizar el rendimiento y minimizar las presiones mientras un programa envía solicitudes a otro programa.

Algunos productos relevantes son, por ejemplo, [RabbitMQ](https://wikipedia.org/wiki/RabbitMQ), [ActiveMQ](https://wikipedia.org/wiki/Apache_ActiveMQ), [ZeroMQ](https://wikipedia.org/wiki/ZeroMQ).

### Pipelines de despliegue continuo de devops

Por ejemplo, queremos asegurarnos de que nuestro servidor de integración continua tenga capacidad para probar nuestro software y luego desplegarlo.

Algunos productos relevantes son, por ejemplo, [Jenkins](<https://wikipedia.org/wiki/Jenkins_(software)>), [Bamboo](<https://wikipedia.org/wiki/Bamboo_(software)>), [Azure DevOps](https://wikipedia.org/wiki/Microsoft_Visual_Studio#Azure_DevOps).

## Terminología de colas

La terminología de colas es un tema amplio. Esta sección contiene parte de nuestra terminología común. Para los ejemplos, usaremos la idea de un cliente que espera en una cola.

### Tipos de cola y tipos de servicio

Los tipos de cola y los tipos de servicio describen cómo la cola elige qué elementos procesar.

- Primero en entrar, primero en salir (FIFO): atender al cliente que lleva más tiempo esperando.

- Último en entrar, primero en salir (LIFO): atender al cliente que lleva menos tiempo esperando.

- Prioridad: atender a los clientes según su nivel de prioridad; estos niveles pueden basarse en estado, urgencia, pago, etc.

- Trabajo más corto primero (SJF): atender al cliente que necesita la menor cantidad de servicio.

- Trabajo más largo primero (LJF): atender al cliente que necesita la mayor cantidad de servicio.

- Menor tiempo de procesamiento restante (SRPT): como SJF, pero un trabajo corto recién llegado puede interrumpir a un trabajo más largo que ya está en servicio.

- Round robin: atender a cada cliente durante un intervalo corto, luego pasar al siguiente cliente, y repetir.

- Tiempo compartido, también llamado procesador compartido (PS): atender a todos al mismo tiempo; la capacidad de servicio se reparte por igual entre todos los que esperan.

SJF y SRPT minimizan la espera media, pero pueden dejar sin atender a los trabajos largos de forma indefinida, por lo que los sistemas reales suelen añadir envejecimiento o límites de prioridad.

## Notación de la teoría de colas

La teoría de colas usa una notación con letras griegas.

Nuestros equipos usan parte de la notación más popular; también añadimos notación propia que nos ayuda en los proyectos de software.

Nuestra notación y lo que significa cada símbolo:

| Nuestra notación | Significado |
| ---------------- | ----------- |
| κ (kappa) | número de elementos en el sistema, en espera más en atención |
| λ (lambda) | tasa de llegada de los elementos que entran al sistema |
| χ (ji) | tasa de salida de los elementos que salen del sistema |
| μ (mu) | tasa de servicio, también llamada capacidad: qué rapidez trabaja un servidor mientras está ocupado |
| ρ (rho) | utilización: la fracción del tiempo en que los servidores están ocupados, λ / (c μ) |
| α (alfa) | tasa de éxito: producción observada que resulta bien |
| β (beta) | tasa de fallo: producción observada que resulta mal |
| δ (delta) | tasa de finalización: éxito + fallo, elementos atendidos que resultan bien o mal |
| σ (sigma) | tasa de omisión: elementos que entraron y luego salieron sin ser atendidos |
| ε (épsilon) | razón de errores: β / δ = β / (α + β) |
| τ (tau) | tiempo en el sistema, también llamado tiempo de entrega |
| ω (omega) | tiempo de espera, también llamado tiempo en la cola |
| φ (fi) | tiempo de trabajo, también llamado tiempo en el procesador, también llamado tiempo de servicio |
| θ (theta) | tiempo de paso por finalizaciones; tiempo de paso medio ≈ 1 / χ en estado estacionario |

### Recuento

Contamos elementos con frecuencia, y usamos esta notación:

- κ (kappa): recuento de elementos en el sistema, es decir, los elementos en espera más los elementos en atención.

![Diagrama: hay κ elementos en el sistema](https://queue-theory.github.io/images/queue-theory-kappa-item-count.svg)

Ejemplo:

- κ = 10 significa exactamente 10

- κ ≈ 10 significa aproximadamente 10

- κ < 10 significa menos de 10

- κ > 10 significa más de 10

- κ ≪ 10 significa mucho menos de 10

- κ ≫ 10 significa mucho más de 10

El recuento κ (kappa) es una instantánea de un momento.

El recuento medio κ̅ (kappa con barra) es un cálculo que promedia mediciones durante un periodo específico, por ejemplo midiendo cada hora durante dos semanas.

### Tasa de llegada, tasa de servicio, tasa de salida

La notación más importante:

- λ (lambda): tasa de llegada. Mide qué tan rápido entran los elementos al sistema.

- μ (mu): tasa de servicio, también llamada capacidad. Mide con qué rapidez un servidor puede atender elementos mientras está ocupado.

- χ (ji): tasa de salida. Mide qué tan rápido salen los elementos del sistema.

![Diagrama: los elementos llegan a la tasa λ, se atienden a la tasa μ y salen a la tasa χ](https://queue-theory.github.io/images/queue-theory-lambda-arrival-mu-service-chi-departure.svg)

Ejemplos de generalidades para colas tradicionales con un servidor:

- λ < μ significa que la tasa de llegada es menor que la tasa de servicio; la cola es estable, es decir, fluctúa alrededor de un tamaño medio finito.

- λ = μ significa que la tasa de llegada es igual a la tasa de servicio; con cualquier aleatoriedad, la cola deriva y crece sin límite.

- λ > μ significa que la tasa de llegada es mayor que la tasa de servicio; la cola crece de forma constante, en unos λ − μ elementos por unidad de tiempo.

La idea intuitiva de que "λ = μ mantiene la cola del mismo tamaño" solo es cierta cuando las llegadas y el servicio son perfectamente regulares, como un metrónomo. Las llegadas reales vienen en ráfagas, así que el tiempo ocioso perdido durante una pausa nunca se recupera, y la cola crece durante la siguiente ráfaga.

Tenga en cuenta que algunos especialistas en teoría de colas usan "tasa de servicio" para referirse a la producción observada en lugar de la capacidad; consulte la [desambiguación de la tasa de servicio](#desambiguación-de-la-tasa-de-servicio).

### Razón de utilización, también llamada intensidad de tráfico

La notación más importante que resume una cola:

- ρ (rho): razón de utilización, es decir, la fracción del tiempo en que los servidores están ocupados = λ / μ para un servidor, o λ / (c μ) para c servidores

Ejemplos:

- ρ < 1 significa que los servidores tienen capacidad de sobra; la cola es estable. Cuanto más se acerca ρ a 1, más largas son las esperas; ver [la curva de utilización](#la-curva-de-utilización).

- ρ = 1 significa que los servidores están ocupados todo el tiempo; la cola es inestable y crece sin límite.

- ρ > 1 significa que las llegadas superan la capacidad; la cola está creciendo.

### Tasas de rendimiento: tasa de salida, tasa de finalización, tasa de éxito, tasa de fallo, tasa de omisión

Las tasas de rendimiento miden la producción observada, es decir, los elementos que realmente salen de la cola. Se agrupan en cinco categorías amplias:

- χ (ji): tasa de salida. Mide qué tan rápido salen los elementos del sistema.

- α (alfa): tasa de éxito. Mide cuántos elementos por periodo resultan bien, p. ej. correctos, completos, aceptados.

- β (beta): tasa de fallo. Mide cuántos elementos por periodo resultan mal, p. ej. incorrectos, incompletos, rechazados.

- δ (delta): tasa de finalización. Mide cuántos elementos por periodo son atendidos.

- σ (sigma): tasa de omisión. Mide cuántos elementos por periodo entran a la cola y luego salen sin ser atendidos, p. ej. abandonos, deserciones.

![Diagrama: tasa de salida χ = tasa de finalización δ + tasa de omisión σ; tasa de finalización δ = tasa de éxito α + tasa de fallo β](https://queue-theory.github.io/images/queue-theory-chi-departure-delta-done-alpha-success-beta-failure-sigma-skip.svg)

Tasa de finalización = tasa de éxito + tasa de fallo:

- δ = α + β (se lee: delta es igual a alfa más beta)

Tasa total = tasa de finalización + tasa de omisión:

- χ = δ + σ (se lee: ji es igual a delta más sigma)

Tasa total = tasa de éxito + tasa de fallo + tasa de omisión:

- χ = α + β + σ (se lee: ji es igual a alfa más beta más sigma)

Cada elemento contado en χ entró en el sistema, así que en estado estacionario la tasa total es igual a la tasa de llegada: χ ≈ λ. Por eso las tasas de rendimiento miden la producción, no la capacidad.

### Desambiguación de la tasa de servicio

Según el contexto y el especialista, el término "tasa de servicio" puede significar
"tasa total" o "tasa de éxito".

Esto tiene raíces históricas y puede causar confusión y errores, sobre todo en
contextos y para especialistas que usan la teoría de colas donde hay una necesidad
importante de hacer un seguimiento de los fallos y las omisiones.

- Visión teórica: la tasa de servicio es una medida pura de velocidad (p. ej., trabajos por segundo), sin importar si los trabajos son éxitos, fallos, omisiones, etc.

- Visión de procesamiento: la tasa de servicio incluye todo lo que la cola dedica tiempo a procesar, es decir, éxitos o fallos, pero no incluye las omisiones.

- Visión tecnológica: en campos aplicados como la ingeniería de software, la tasa de servicio mide solo los éxitos, mientras que la tasa de errores mide las fallos, y la tasa de omisión mide las omisiones.

Por eso conservamos μ para la capacidad, y añadimos tasas de producción observada junto a ella, en lugar de sustituirla:

- μ (mu): tasa de servicio, también llamada capacidad. Mide con qué rapidez un servidor puede atender elementos mientras está ocupado.

- χ (ji): tasa de salida. Mide qué tan rápido salen los elementos del sistema.

- α (alfa): tasa de éxito. Mide cuántos elementos por periodo resultan bien, p. ej. correctos, completos, aceptados.

¿Por qué no sustituir μ por χ o α? En una cola estable, todo elemento que entra acaba saliendo, así que χ ≈ λ. Entonces λ / χ ≈ 1 sea cual sea la carga, lo cual no dice nada sobre lo ocupados que están los servidores. La utilización necesita la capacidad: ρ = λ / (c μ), que es igual a la fracción del tiempo en que los servidores están ocupados.

### Tasa de omisión

Detalles de la tasa de omisión:

- σ (sigma): tasa de omisión. Mide cuántos elementos entran a la cola y luego salen sin ser atendidos.

Una omisión ocurre cuando un elemento entra en la cola y luego sale sin ningún procesamiento significativo:

- Abandono: cuando un cliente entra en una cola y luego se va, por cualquier motivo.

- Deserción (reneging): cuando un cliente que ya ha esperado decide irse porque ha perdido demasiado tiempo.

Dos comportamientos relacionados no son omisiones:

- Desistimiento (balking): cuando un cliente decide no entrar a la cola porque el tiempo de espera amenaza con ser demasiado largo. Un elemento que desiste nunca entra al sistema, así que queda fuera de los límites del sistema: no se cuenta en λ, χ ni σ. Si los desistimientos importan, como las ventas perdidas, cuéntelos por separado como llegadas rechazadas.

- Cambio de cola (jockeying): el cliente se queda en el sistema; ocurre cuando un cliente se cambia entre colas paralelas, como las cajas de un supermercado, para intentar esperar menos.

### Razón de errores

La notación más importante que resume el éxito de una cola:

- ε (épsilon): razón de errores = recuento de fallos / recuento de finalizados = β / δ = β / (α + β)

Las omisiones se excluyen, porque un elemento omitido nunca fue atendido, así que no resultó ni bien ni mal. Dé seguimiento a las omisiones por separado mediante σ.

![Diagrama: la razón de errores ε es la tasa de falla β dividida entre la tasa de finalización δ](https://queue-theory.github.io/images/queue-theory-delta-done-alpha-success-beta-failure-epsilon-error.svg)

Ejemplos:

- ε = 0 significa que no hay errores.

- ε = 0,1 significa que el 10% de los servicios tiene un error.

- ε = 1 significa que todos los servicios tienen un error.

### Tiempo de entrega, tiempo de espera, tiempo de trabajo, tiempo de paso

Hacemos un seguimiento de cuatro tiempos:

- τ (tau): tiempo en el sistema, también llamado tiempo de entrega, también llamado de principio a fin.

- θ (theta): tiempo de paso = desde una finalización hasta la siguiente finalización; un tiempo de paso es un intervalo, y el tiempo de paso medio es la media de los intervalos

- ω (omega): tiempo de espera = tiempo en que no se hace trabajo real, también llamado tiempo pendiente

- φ (fi): tiempo de trabajo = tiempo dedicado a hacer trabajo real, también llamado tiempo de procesamiento

![Diagrama: tiempo de entrega τ, tiempo de espera ω, tiempo de trabajo φ, tiempo de paso θ](https://queue-theory.github.io/images/queue-theory-tau-total-time-equals-omega-wait-time-phi-work-time-theta-step-time.svg)

Ejemplos:

- τ = 5 s significa que un elemento entra al sistema y sale de él 5 segundos después.

- ω = 4 s significa que un elemento espera en la cola 4 segundos y luego empieza el trabajo.

- φ = 1 s significa que un elemento requiere 1 segundo de trabajo y luego queda completo.

- θ = 1 s significa que hay 1 segundo entre una finalización y la siguiente.

Relaciones:

- τ = ω + φ: el tiempo de entrega es el tiempo de espera más el tiempo de trabajo. En los ejemplos, 5 s = 4 s + 1 s.

- θ medio ≈ 1 / χ: en estado estacionario, el tiempo de paso medio es el inverso de la tasa total. Un solo intervalo dice poco sobre la tasa; la media de muchos intervalos sí lo dice. En los ejemplos, si el tiempo de paso medio es 1 s, entonces χ ≈ 1 elemento por segundo.

### Notación de Kendall

La notación de Kendall es otra notación de la teoría de colas que se escribe como A/S/c/K/N/D:

- A: el proceso de llegada, es decir, la distribución del tiempo entre llegadas.

- S: el proceso de servicio, es decir, la distribución de los tiempos de servicio.

- c: el número de servidores.

- K: la capacidad, es decir, el número máximo de elementos permitidos en el sistema, esperando o siendo atendidos, antes de rechazar nuevas llegadas.

- N: la población, es decir, el número de clientes potenciales.

- D: la disciplina, es decir, el tipo de cola, como FIFO o LIFO.

Letras comunes para A y S:

- M: markoviano, o sin memoria, es decir, tiempos exponenciales, que surgen de llegadas de Poisson.

- D: determinista, es decir, tiempos constantes.

- G: general, es decir, cualquier distribución.

Cuando se omiten los tres últimos, los valores predeterminados son K = ∞, N = ∞, D = FIFO. Por ejemplo, "M/M/1" significa llegadas de Poisson, tiempos de servicio exponenciales, un servidor, capacidad ilimitada, población ilimitada, y primero en entrar, primero en salir.

Además:

- n: el número de elementos en el sistema.

## Matemáticas de colas

Las secciones de matemáticas usan símbolos de libros de texto, para que pueda compararlos con otras fuentes: S es el tiempo media de servicio, que es nuestra φ, y μ = 1 / S es la capacidad de un servidor.

### La curva de utilización

El resultado más importante de la teoría de colas: a medida que la utilización se acerca al 100%, el tiempo de espera crece sin límite, y crece más rápido al final.

Para una cola M/M/1, donde S es el tiempo medio de servicio:

- Tiempo de entrega τ = S / (1 − ρ)

- Tiempo de espera ω = S × ρ / (1 − ρ)

| Utilización ρ | Tiempo de entrega τ | Tiempo de espera ω |
| ------------- | ------------------- | ------------------ |
| 50%           | 2 × S               | 1 × S              |
| 70%           | 3,3 × S             | 2,3 × S            |
| 80%           | 5 × S               | 4 × S              |
| 90%           | 10 × S              | 9 × S              |
| 95%           | 20 × S              | 19 × S             |
| 99%           | 100 × S             | 99 × S             |

Ejemplo: una revisión de código requiere 1 hora de trabajo. Si los revisores están ocupados el 80% del tiempo, una revisión tarda unas 5 horas desde la solicitud hasta que se termina. Si los revisores están ocupados el 95% del tiempo, tarda unas 20 horas, aunque los revisores estén solo 15 puntos porcentuales más ocupados.

Por eso "mantener a todos ocupados al 100%" es la receta para tiempos de entrega largos, y por eso las [ideas clave](#ideas-clave) de más abajo advierten contra planificar una utilización alta.

### Fórmula de Kingman

La fórmula de Kingman, también llamada ecuación VUT, aproxima el tiempo de espera de una cola de un solo servidor con cualquier distribución de llegadas y de servicio (G/G/1):

- ω ≈ (ρ / (1 − ρ)) × ((ca² + cs²) / 2) × S

Los tres factores son:

- U: factor de utilización ρ / (1 − ρ), que es la curva de utilización de arriba.

- V: factor de variabilidad (ca² + cs²) / 2, donde ca es el coeficiente de variación del tiempo entre llegadas, y cs es el coeficiente de variación de los tiempos de servicio. El coeficiente de variación es la desviación estándar dividida por la media.

- T: factor de tiempo S, el tiempo medio de servicio.

Ejemplo: para una cola M/M/1, ca = cs = 1, así que V = 1, y la fórmula da el mismo tiempo de espera que la curva de utilización. Si hace más uniformes los elementos de trabajo, por ejemplo dividiendo los tickets grandes para que cs baje de 1 a casi 0, entonces V baja a cerca de 0,5, y el tiempo de espera se reduce aproximadamente a la mitad con la misma utilización.

La fórmula de Kingman muestra las tres palancas para reducir el tiempo de espera:

- Reducir la utilización, por ejemplo añadiendo capacidad o limitando el trabajo en curso.

- Reducir la variabilidad, por ejemplo con lotes más pequeños, elementos de trabajo más uniformes o llegadas más regulares.

- Reducir el tiempo de servicio, por ejemplo mediante la automatización.

### Agrupación y Erlang C

Una sola cola compartida que alimenta a varios servidores es mejor que colas separadas que alimentan a un servidor cada una. Por eso los bancos usan una sola cola para muchas ventanillas, y por eso una cola de soporte compartida supera a las colas por agente.

Ejemplo: dos servidores tardan cada uno 1 hora por elemento, y los elementos llegan a 1,6 elementos por hora en total, así que la utilización es del 80%.

- Colas separadas: cada servidor es una cola M/M/1 con 0,8 llegadas por hora, así que el tiempo de entrega es 1 / (1 − 0,8) = 5 horas.

- Cola agrupada: ambos servidores comparten una cola M/M/2, así que el tiempo de entrega es de unas 2,8 horas, alrededor de un 44% menos, con las mismas personas y el mismo trabajo.

La fórmula Erlang C calcula la probabilidad de que un elemento que llega tenga que esperar en una cola M/M/c, con carga ofrecida a = λ / μ y utilización ρ = a / c:

- P(espera) = ((aᶜ / c!) / (1 − ρ)) / (Σₖ₌₀ᶜ⁻¹ (aᵏ / k!) + (aᶜ / c!) / (1 − ρ))

- Tiempo de espera ω = P(espera) / (c μ − λ)

Los equipos de servicio al cliente usan Erlang C para decidir cuántos agentes asignar para cumplir una meta, como "atender el 80% de las llamadas en menos de 20 segundos".

La agrupación tiene límites: funciona mejor cuando cualquier servidor puede gestionar cualquier elemento. Si los elementos necesitan especialistas, una cola agrupada puede requerir reglas de enrutamiento.

## Seguimiento de actividades

### Ejemplos de actividades

Supongamos que tenemos algo de lo que queremos hacer un seguimiento, y le damos un nombre genérico como "Actividad", abreviado como "A".

Podemos usar la notación de colas de forma eficiente para describir la actividad y cómo avanza por una cola.

Ejemplos:

- Aκ: recuento de la actividad: cuántos elementos hay en la cola.

- Aλ: tasa de llegada de la actividad: cuántos elementos entran por unidad de tiempo.

- Aχ: tasa de salida de la actividad: cuántos elementos salen por unidad de tiempo.

- Aδ: tasa de finalización de la actividad: cuántos elementos se atienden (bien o mal) por unidad de tiempo.

- Aα: tasa de éxito de la actividad: cuántos elementos están bien por unidad de tiempo.

- Aβ: tasa de fallo de la actividad, también llamada tasa de errores: cuántos elementos están mal por unidad de tiempo.

- Aμ: tasa de servicio de la actividad, también llamada capacidad: cuántos elementos puede completar un servidor por unidad de tiempo mientras está ocupado.

- Aσ: tasa de omisión de la actividad: cuántos elementos se abandonan por unidad de tiempo.

- Aρ: razón de utilización de la actividad: la fracción del tiempo disponible en que los servidores están ocupados, es decir, tiempo ocupado ÷ tiempo disponible, o λ / (c μ).

- Aε: razón de errores de la actividad: cuántos elementos se completan con errores frente al total.

- Aτ: tiempo de entrega de la actividad: cuánto tiempo transcurre desde la solicitud hasta la finalización.

- Aω: tiempo de espera de la actividad: cuánto tiempo transcurre desde la solicitud hasta el inicio.

- Aφ: tiempo de trabajo de la actividad: cuánto tiempo transcurre desde el inicio hasta la finalización.

- Aθ: tiempo de paso de la actividad: cuánto tiempo transcurre desde una finalización hasta la siguiente.

### Ley de Little

La ley de Little es un teorema de John Little que establece: el número medio a largo plazo L de clientes en un sistema estacionario es igual a la tasa media de llegada efectiva a largo plazo λ multiplicada por el tiempo medio W que un cliente pasa en el sistema.

Notación de ejemplo:

- L: número medio a largo plazo de clientes en el sistema. Preferimos κ (kappa).

- λ: tasa media de llegada efectiva a largo plazo, es decir, los elementos que realmente entran al sistema, sin contar los desistimientos.

- W: tiempo medio a largo plazo que un elemento está en el sistema. Preferimos τ (tau).

- L = λ W es la ley de Little. Preferimos κ = λ τ (kappa = lambda \* tau).

La ley de Little es notablemente general: se cumple sin importar la distribución de llegadas, la distribución de servicio, el número de servidores o el tipo de cola.

Supuestos de la ley de Little:

- Todas las unidades de medida son coherentes.

- El sistema es estable, es decir, la tasa media de llegada es igual a la tasa media de salida durante el periodo de medición, y el número de elementos es aproximadamente el mismo al principio y al final.

- Los elementos que salen antes de tiempo, por ejemplo por deserción, se cuentan de forma coherente tanto en λ como en τ, o se excluyen de forma coherente de ambos.

Ejemplo: un equipo tiene de media κ = 20 tickets en curso, y los tickets llegan a λ = 4 por semana; en estado estacionario, el equipo también termina χ = 4 por semana. Así que el ticket medio tarda τ = κ / λ = 5 semanas. Para reducir el tiempo de entrega a la mitad sin trabajar más rápido, reduzca a la mitad el trabajo en curso.

### Indicadores clave de desempeño (KPI)

Normalmente hacemos un seguimiento de muchas cosas sobre las actividades de la cola, y queremos resumir los resultados eligiendo una lista corta de las más relevantes para nuestros proyectos.

Hemos construido muchos proyectos, y creemos que los indicadores de resumen más valiosos son:

- Dτ = Tiempo de entrega del producto. Los equipos de producto pueden decir "del concepto al cliente" o "de la idea a la implementación".

- Dα = Tasa de éxito de la entrega. Los equipos de devops pueden decir "frecuencia de despliegue" o "publicamos X veces al día".

- Dε = Razón de errores de la entrega. Los equipos de calidad pueden decir "tasa de fallos de cambios" o "porcentaje de reversiones".

- Rτ = Tiempo de entrega de la restauración. Los ingenieros de fiabilidad de sitios pueden decir "tiempo de recuperación de despliegues fallidos" o "tiempo medio de restauración (MTTR)".

## Métricas de servicio

Términos útiles:

- **Indicador de nivel de servicio (SLI):** la métrica (p. ej., 99,9% de tiempo de actividad)
- **Objetivo de nivel de servicio (SLO):** la meta interna para esa métrica (p. ej., buscar un 99,95% de tiempo de actividad)
- **Acuerdo de nivel de servicio (SLA):** la promesa formal y contractual al cliente (p. ej., 99,9% de tiempo de actividad con penalizaciones si no se cumple).

### Tiempo medio para responder, reparar, recuperar, resolver

MTTR representa cuatro medidas diferentes:

| Métrica                            | Enfoque                  | Mide                                         | Inicio                                          | Fin                                                |
| ---------------------------------- | ------------------------ | -------------------------------------------- | ----------------------------------------------- | -------------------------------------------------- |
| **Tiempo medio para responder**    | Reacción inicial         | Tiempo para reconocer y empezar a actuar     | Cuando se detecta o notifica el incidente        | Cuando el equipo empieza a trabajar en él          |
| **Tiempo medio para reparar**      | Arreglo técnico          | Tiempo para arreglar el elemento dañado      | Cuando empieza el trabajo de reparación         | Cuando el elemento queda arreglado                 |
| **Tiempo medio para recuperar**    | Restauración del servicio| Tiempo para restaurar el servicio completo   | Cuando empieza el incidente o la interrupción   | Cuando el servicio está totalmente operativo       |
| **Tiempo medio para resolver**     | Resolución completa      | Tiempo total desde la detección hasta el cierre | Cuando se detecta el incidente               | Cuando el incidente queda totalmente cerrado       |

**Diferencias clave:**

**Responder** mide la preparación del equipo y la eficacia de las alertas. Un tiempo de respuesta bajo significa que sus procesos de monitorización y de guardia funcionan bien, aunque el arreglo en sí tarde más.

**Reparar** es estrictamente técnico: ¿cuánto tiempo tarda en arreglarse lo que está dañado una vez que se está trabajando en ello? Excluye el tiempo de detección, el triaje y la verificación.

**Recuperar** trata de la disponibilidad del servicio desde la perspectiva del cliente. El sistema puede estar "reparado" pero todavía no "recuperado" si aún necesita restaurar datos, calentar cachés o verificar la funcionalidad.

**Resolver** es lo más completo: abarca todo el ciclo de vida del incidente, desde la primera detección hasta la verificación y el cierre posteriores al incidente.

Escenario de ejemplo:

- 2:00 — Empieza la interrupción
- 2:05 — Se dispara una alerta, se detecta el incidente
- 2:15 — La persona de guardia lo reconoce y empieza a trabajar → Tiempo de respuesta: 10 min (2:05 a 2:15)
- 2:45 — Se identifica la causa raíz y se despliega el arreglo → Tiempo de reparación: 30 min (2:15 a 2:45)
- 3:00 — Se verifica que el servicio funciona para los usuarios → Tiempo de recuperación: 60 min (2:00 a 3:00)
- 3:30 — Se cierra el ticket del incidente tras la verificación → Tiempo de resolución: 85 min (2:05 a 3:30)

Métricas relacionadas:

- MTBF (tiempo medio entre fallos)
- MTTF (tiempo medio hasta el fallo)
- MTTA (tiempo medio para reconocer)

### Métricas DORA

Las métricas de DevOps Research and Assessment (DORA) son indicadores clave de desempeño (KPI) estándar de la industria, específicos para equipos de devops de ingeniería de software. Ver [dora.dev](https://dora.dev/guides/dora-metrics/).

DORA usa ahora cinco métricas, en dos grupos.

Métricas de rendimiento:

- **Tiempo de entrega de cambios** - Tiempo para implementar, probar y entregar el código de una funcionalidad (medido desde el commit hasta el despliegue en producción). Sea específico sobre lo que entiende por inicio y fin. Por ejemplo, a algunos equipos les gusta medir desde que un desarrollador empieza a trabajar en un ticket hasta que el desarrollador envía el trabajo a un proceso de integración continua; este enfoque suele ser más eficaz para medir la productividad de las personas.

- **Frecuencia de despliegue** - Número de despliegues en un periodo determinado. Sea específico sobre lo que entiende por despliegue y cómo mide la frecuencia. Por ejemplo, algunos equipos despliegan a una flota de servidores de producción y hacen un seguimiento del lanzamiento completo, mientras que otros equipos despliegan a un solo servidor de pruebas de aceptación de usuario (UAT) y registran cuándo el jefe de proyecto envía un anuncio por correo electrónico a los usuarios para que prueben.

- **Tiempo de recuperación de despliegues fallidos** - Tiempo que se tarda en recuperarse de un despliegue que causa un fallo en producción. Antes se llamaba tiempo medio de recuperación (MTTR) o tiempo para restaurar el servicio. Sea específico sobre lo que entiende por recuperación. Por ejemplo, algunos equipos cuentan la recuperación como la resolución completa, es decir, el tiempo total desde que se detecta un incidente hasta que se cierra por completo; este enfoque se describe mejor como tiempo medio para resolver.

Métricas de inestabilidad:

- **Tasa de fallos de cambios** - Porcentaje de despliegues que causan un fallo en producción y necesitan corrección inmediata, como una reversión o un parche urgente. Sea específico sobre lo que entiende por fallo. Por ejemplo, algunos equipos también cuentan un fallo cuando empiezan un ticket de trabajo y se dan cuenta de que el ticket no tiene suficiente información para avanzar, así que el equipo lo devuelve al equipo de especificaciones.

- **Tasa de retrabajo de despliegues** - Porcentaje de despliegues no planificados, por ejemplo para arreglar un incidente en producción. Es el número de despliegues no planificados dividido por el total de despliegues. DORA añadió esta métrica en 2024.

Los informes anteriores de DORA también trataban la **fiabilidad** como métrica de desempeño operativo: una evaluación más amplia, a menudo cualitativa, de la consistencia del servicio, como la disponibilidad, el tiempo de actividad, la latencia, la precisión y los objetivos de nivel de servicio. La fiabilidad ayuda a mostrar que una velocidad alta no se logra a costa de la capacidad del sistema.

## Cola de colas

La teoría de colas se extiende fácilmente a una cola de colas, como un proceso de nivel superior que contiene etapas, fases o puertas de nivel inferior.

### Cola de colas del Doble Diamante

Por ejemplo, considere el modelo de proceso de innovación del "Doble Diamante", que especifica cuatro etapas:

1. Descubrir: entender el problema en lugar de solo suponer cuál es.
2. Definir: con lo aprendido en la fase de descubrimiento, definir el reto.
3. Desarrollar: dar distintas respuestas al problema claramente definido.
4. Entregar: probar distintas soluciones a pequeña escala y luego mejorarlas.

La teoría de colas puede modelar esto como una cola de proceso que contiene cuatro colas de etapa:

- La tasa de llegada del proceso es la tasa de llegada de la etapa 1.
- La tasa de éxito del proceso es la tasa de éxito de la etapa 4.
- El recuento de errores del proceso es la suma de los recuentos de errores de las etapas.
- El recuento de omisiones del proceso es la suma de los recuentos de omisiones de las etapas.
- El tiempo de entrega del proceso es la suma de los tiempos de entrega de las etapas.
- El rendimiento máximo del proceso es el rendimiento de la etapa más lenta, también llamada cuello de botella.

### Cola de colas en embudo

En nuestro trabajo práctico, a menudo usamos la palabra "embudo" para describir de forma general una cola de colas que tiende a reducir el número de elementos en cada etapa:

- Cola de contratación con una etapa de búsqueda de candidatos, una etapa de entrevistas y una etapa de oferta. Para este tipo de cola, buscamos maximizar la tasa de llegada de la etapa 1, es decir, aumentar nuestro alcance, por ejemplo mediante promociones.

- Cola de compra con una etapa de búsqueda del cliente, una etapa de cesta de la compra y una etapa de pago. Para este tipo de cola, buscamos minimizar la tasa de omisión de la etapa 2, es decir, reducir el abandono de la cesta, por ejemplo mediante recordatorios.

- Cola de programación con una etapa de integración, una etapa de aceptación del usuario y una etapa de lanzamiento a producción. Para este tipo de cola, buscamos minimizar la tasa de errores de la etapa de lanzamiento a producción, por ejemplo mediante telemetría canary.

## El círculo vicioso del exceso de trabajo

Cuando aumenta la tasa de llegada, esto presiona más al sistema y lo acerca a su capacidad (es decir, a una utilización del 100 %). Eso hace que los tiempos de ciclo crezcan rápidamente hacia el infinito y que aumente el trabajo en proceso, lo que a su vez produce resultados más lentos.

Esto impulsa un patrón común en la industria al que llamamos «el círculo vicioso del exceso de trabajo»: cuando los resultados empeoran lo suficiente, los directivos autorizan más recursos (como horas extra o ayuda adicional), lo que mejora la capacidad del sistema. Pero en cuanto el sistema se recupera, los directivos suspenden las horas extra y la sobrecarga vuelve a empezar. Este ciclo puede ser rápido y devastador. La solución es que los directivos dediquen tiempo a comprender el sistema, la capacidad y la utilización.

## Ideas clave

Siete ideas clave sobre la teoría de colas, de Bob Wescott, autor de "The Every Computer Performance Book" (ver también [el resumen de Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)):

1. Cuanto más lento es el centro de servicio, menor es la utilización máxima que debería planificar en la carga pico.

2. Es muy difícil usar el último 15% de cualquier cosa.

3. Cuanto más cerca esté del límite, más alto será el precio de equivocarse.

4. Los aumentos del tiempo de respuesta están limitados por el número de elementos que pueden esperar.

5. Recuerde que esto es una media, no un máximo.

6. Existe un efecto humano de negación cuando hay varios centros de servicio.

7. Presente las pequeñas mejoras de la forma más favorable.

## Flujo de proceso

Un flujo de proceso es una secuencia de procesos. Los elementos, o las operaciones, o los trabajos, etc. avanzan a través del flujo de proceso.

Por ejemplo, una línea de manufactura consta de varias estaciones en serie por las que fluyen los trabajos. Un hospital contiene muchas secuencias conectadas de operaciones (admisión, atención en la habitación, preparación quirúrgica, cirugía, recuperación, etc.) por las que fluyen los pacientes. Un banco implica secuencias de operaciones por las que fluye el dinero. Comprender los flujos es fundamental para diseñar y gestionar sistemas de operaciones eficaces.

### Parámetros de comportamiento

El comportamiento de un flujo de proceso depende de dos parámetros:

- Tasa del cuello de botella: la capacidad del flujo (es decir, la tasa del proceso con mayor utilización).

- Tiempo de proceso bruto: el tiempo total que las entidades pasan siendo procesadas en el flujo (es decir, el tiempo promedio que tardaría una entidad en recorrer un flujo vacío).

### Parámetros de variabilidad

La variabilidad de un flujo de proceso depende de dos parámetros:

- Variabilidad del flujo: variabilidad en los tiempos entre llegadas de las entidades a los sistemas.

- Variabilidad del proceso: variabilidad en los tiempos de proceso en los sistemas.

Consideremos un flujo de proceso que presenta tanto variabilidad del flujo como variabilidad del proceso. Como cabría esperar, la variabilidad del flujo que sale de una estación depende tanto de la variabilidad del flujo que entra en ella como de la variabilidad del proceso generada en la propia estación. Cuánto depende de cada una de ellas es función de la utilización del sistema.

La variabilidad es el factor dominante que degrada el desempeño de los flujos de proceso respecto del mejor caso. Por eso, comprender la variabilidad y encontrar maneras de eliminarla está en el centro de muchas metodologías de mejora de las operaciones.

## Epílogo

### Ver también

Wikipedia (en inglés):

- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

- [M/M/1 queue](https://en.wikipedia.org/wiki/M/M/1_queue)

- [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)

- [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

Áreas de Wikipedia donde usamos colas en muchos proyectos:

- [Gestión de proyectos (Project management)](https://en.wikipedia.org/wiki/Project_management)

- [Cola de mensajes (Message queue)](https://en.wikipedia.org/wiki/Message_queue)

- [DevOps](https://en.wikipedia.org/wiki/DevOps)

Introducciones de John D. Cook (en inglés):

- [The science of waiting in line](https://www.johndcook.com/blog/2019/01/23/queueing/)

- [Server utilization: Joel on queuing](https://www.johndcook.com/blog/2009/01/30/server-utilization-joel-on-queuing/)

- [What happens when you add a new teller?](https://www.johndcook.com/blog/2008/10/21/what-happens-when-you-add-a-new-teller/)

Introducciones con más detalle (en inglés):

- [Queuing Theory: Simple Definition, Notation and Terminology](https://www.statisticshowto.com/queuing-theory/)

- [The most important thing to understand about queues - de Dan Slimmon](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/)

- [Operations Research - Notes. de J E Beasley](https://people.brunel.ac.uk/~mastjjb/jeb/or/queue.html)

- [Little’s Law – the basis of Lean and Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)

- [Waiting time, load factor, and queueing theory - de Erik Bernhardsson](https://erikbern.com/2018/03/27/waiting-time-load-factor-and-queueing-theory)

- [Investopedia: Queueing theory](https://www.investopedia.com/terms/q/queuing-theory.asp)

- [It's time for some queueing theory - de Kottke](https://kottke.org/19/01/its-time-for-some-queueing-theory)

Fórmulas (en inglés):

- [Kendall's notation](https://en.wikipedia.org/wiki/Kendall%27s_notation)

- [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula)

- [Erlang C formula](<https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula>)

### Créditos

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. de Nicole Forsgren, Jez Humble, Gene Kim](https://www.amazon.com/dp/B07B9F83WM). Este libro es excelente para devops de alto nivel, e informa directamente nuestra elección de KPI. Los KPI de esta página coinciden con las recomendaciones del libro.

[Supply Chain Science. By Waler Hopp](https://archive.org/details/supplychainscien0000hopp). Este libro explica las colas y los flujos de procesos, incluidas matemáticas similares, con énfasis en la gestión empresarial.

## Seguimiento

- Paquete: queue-theory
- Versión: 3.0.0
- Creado: 2019-01-25T04:17:56Z
- Actualizado: 2026-11-23T15:33:48Z
- Licencia: `MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause OR OGL-UK-3.0 OR CC-BY-SA-4.0`, o contáctenos para otros términos (ver [LICENSE.md](LICENSE.md))
- Contacto: Joel Parker Henderson <joel@joelparkerhenderson.com>
