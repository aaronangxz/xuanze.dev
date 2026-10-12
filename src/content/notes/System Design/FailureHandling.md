---
displayed_sidebar: notesSideBar
---

# Failure Handling

## Write Ahead Log

## Monitoring

## Database Operations

### Ensure Atomicity

### Do not rely on HTTP/RPC calls to dependencies
- Instead of calling other endpoint to perform DB write, publish message to topics
- Dependencies can consume from topic and perform the write operation

### Change Fata Capture (CDC)
- Can be dome with Kafka Connect
- Publishes a messgae to topic when changes occur

### Ability to roll back on failure

### Idempotency
- Use cached idempotency key during transactions

### Cache data
- If DB service is down, data will persist in cache
- Once service is back up, DB will look into cache and perform operations

### Snapshots

## Microservices

### Circuit Breaker
- Activates when certain type of error occurs in a short period