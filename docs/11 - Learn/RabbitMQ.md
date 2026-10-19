# Exchange
Um **Exchange** é o componente do RabbitMQ responsável por **receber mensagens de Producers e determinar para quais Queues elas devem ser encaminhadas**.
O Producer publica a mensagem no Exchange, e não precisa conhecer diretamente os Consumers.
```
Producer
   │
   │ mensagem
   ▼
Exchange
   │
   │ roteamento
   ▼
Queue
```
O Exchange decide o destino utilizando principalmente:
- tipo do Exchange;
- `routing key`
- `bindings`
Uma analogia simples:
> O Exchange é como uma central de distribuição. Ele recebe uma encomenda e decide para qual fila ela deve ser encaminhada.

Exemplo:
```
Complaint Service
       │
       │ ComplaintCreated
       ▼
   Exchange
       │
       ├───────────────┐
       ▼               ▼
Notification Queue   Logging Queue
```
O `Complaint Service` não precisa saber que existe `Notification Service` e `Logging Service`.
Ele simplesmente publica:
```
ComplaintCreated
```
O Exchange faz o roteamento.
# Queue
Uma **Queue** é uma fila de mensagens que **armazena mensagens até que um Consumer possa processá-las**.
```
Exchange
   │
   ▼
┌─────────────────┐
│      Queue      │
├─────────────────┤
│ Message A       │
│ Message B       │
│ Message C       │
└────────┬────────┘
         │
         ▼
      Consumer
```
A Queue permite que o Producer e o Consumer sejam independentes.
Por exemplo:
```
Producer
   │
   │ publica
   ▼
Queue
   │
   │ mensagem fica aguardando
   │
   ▼
Consumer
```
Se o consumer estiver ocupado ou temporariamente indisponível, as mensagens podem permanecer na Queue para serem processadas posteriormente, conforme a configuração de durabilidade/persistência e o estado do broker.
Uma analogia simples:
> A Queue é como uma fila de tarefas esperando alguém para executá-las.
