---
displayed_sidebar: notesSideBar
---

# Message Queues

## Purpose
- Decouple processes for asynchronous communication.

## Types
- Brokered: Uses an intermediary (e.g., RabbitMQ, Kafka).
- Brokerless: Direct communication between producers and consumers.

## Messaging Patterns
- Point-to-Point: Direct message from producer to consumer.
- Publish/Subscribe: Broadcasts messages to multiple subscribers.

## Message Persistence
- Ensuring messages are not lost.
- Durable queues: Messages persist until processed.

## Dead-letter Queues (DLQ)
- Handling failed message delivery.
