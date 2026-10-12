---
displayed_sidebar: notesSideBar
---

# Kafka

## Consumer Group
- Consumers in a consumer group will not read duplicated messages from the same topic
- If we want the consumers to do so, we can add more partition in the topic, 1:1 to consumers
- Offsets record in topics, to save which consumer group has consumed which record