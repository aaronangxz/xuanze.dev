---
displayed_sidebar: notesSideBar
---

# Database

## Sharding
**Pros**
- Increased read/write throughput
- High availability - Others remains functional if one shard is down
- Facilitates horizontal scaling
- Balanced traffic load
- Improve performance

**Cons**
- Requires shard key
- Higher complexity to manage

## Sharding strategy
- MOD
    - Use modulo to split
    - Evenly splitted
- HASH
    - Use a hashed value to split
- RANGE
    - Specific range of rows to individual shards
    - Data with timestamp
    - But most recent shard will get more IO
- TAG
    - Matches specific values

## Master & Slave
- 1 Master + many slaves
- Optimize IO without caching
- Master for write, slaves for read
- Uses `Replication`
- Asynchronous replication can fail at times

References:
- https://towardsdev.com/databases-a-system-design-perspective-a2ba2c2d7223
- https://levelup.gitconnected.com/database-concerns-in-large-system-design-3f84b6331ff9