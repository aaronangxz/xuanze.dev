---
displayed_sidebar: notesSideBar
---

# Caching

## Purpose
- Store frequently accessed data to reduce latency.

## Types
- Memory Cache: In-memory data storage (e.g., Redis, Memcached).
- Browser Cache: Stores web resources for faster access. 

## Cache Invalidation
- Ensuring cache consistency.
- Write-through: Data written to both cache and storage.
- Write-back: Data written to cache first, then to storage.

## Cache Eviction Policies:
- LRU (Least Recently Used): Evicts the least recently accessed items.
- LFU (Least Frequently Used): Evicts the least frequently accessed items.
- FIFO (First In, First Out): Evicts items in order of insertion.
