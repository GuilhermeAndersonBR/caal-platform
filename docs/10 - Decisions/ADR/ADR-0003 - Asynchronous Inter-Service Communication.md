# ADR-0003 — Asynchronous Inter-Service Communication

## Status

Accepted

## Context

O sistema utiliza uma arquitetura baseada em microsserviços.
A comunicação fortemente acoplada entre serviços através de chamadas
HTTP pode aumentar o acoplamento temporal entre os componentes.

O sistema também possui operações naturalmente assíncronas, como:

- envio de notificações;
- auditoria;
- processamento de eventos;
- futuras integrações;
- processamento de tarefas secundárias.

## Decision

RabbitMQ será utilizado como message broker para comunicação
assíncrona entre os serviços.

Eventos de domínio serão publicados em exchanges e consumidos por
filas pertencentes aos serviços interessados.

Os produtores não deverão depender diretamente das filas dos
consumidores.

Um topic exchange será utilizado inicialmente para roteamento de
eventos.

Os eventos utilizarão um envelope padronizado contendo:

- eventId
- eventType
- version
- occurredAt
- producer
- correlationId
- payload

## Communication Rules

Comunicação assíncrona:

- eventos de domínio;
- notificações;
- auditoria;
- processamento desacoplado;
- tarefas que não exigem resposta imediata.

Comunicação síncrona:

- consultas que exigem resposta imediata;
- operações que dependem de uma resposta antes de continuar;
- casos em que eventual consistency não seja aceitável.

## Consequences

### Positive

- Menor acoplamento temporal entre serviços.
- Possibilidade de múltiplos consumidores para o mesmo evento.
- Facilidade para adicionar novos consumidores.
- Introdução prática de Event-Driven Architecture.

### Negative

- Maior complexidade operacional.
- Eventual consistency.
- Necessidade de idempotência.
- Necessidade de mecanismos de retry e tratamento de falhas.
- Debugging distribuído mais complexo.