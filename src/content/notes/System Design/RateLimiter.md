---
displayed_sidebar: notesSideBar
---

# Rate Limiter

## Algorithms

### Fixed window algorithm
The system uses a window size of n seconds (typically using human-friendly values, such as 60 or 3600 seconds) to track the fixed window algorithm rate. Each incoming request increments the counter for the window. It discards the request if the counter exceeds a threshold. The current timestamp floor typically defines the windows, so 12:00:03, with a 60-second window length, would be in the 12:00:00 window.

Pros: ensures more recent requests get processed without being starved by old requests

Cons: a single burst of traffic that occurs near the boundary of a window can result in the processing of twice the rate of requests because it will allow requests for both the current and next windows within a short time. If many consumers wait for a reset window, they may stampede your API at the same time at the top of the hour. 

### Sliding window algorithm
Sliding Window is a hybrid approach that combines the fixed window algorithm’s low processing cost and the sliding log’s improved boundary conditions. Like the fixed window algorithm, we track a counter for each fixed window. Next, we account for a weighted value of the previous window’s request rate based on the current timestamp to smooth out bursts of traffic. For example, if the current window is 25% through, we weigh the previous window’s count by 75%. The relatively small number of data points needed to track per key allows us to scale and distribute across large clusters.

Pros: flexibility to scale rate limiting with good performance.
### Token bucket algorithm
The token bucket algorithm maintains a fixed capacity bucket where a tokens are added at a fixed rate. The tokens in most cases is a single request or in some cases, it can be network packets. When the bucket is full, the service is considered to have reached its limit and responds with backpressure. This algorithm is used when there is a case where not all inputs correspond to 1:1 with requests. For instance, a request to a service can make multiple database calls and then return a result. Each database call may take one token.

### Leaky-bucket algorithm
Leaky bucket (closely related to token bucket) is an algorithm that provides a simple, intuitive approach to rate limiting via a queue, which you can think of as a bucket holding the requests. When registering a request, the system appends it to the end of the queue. Processing for the first item on the queue occurs at a regular interval or first in, first out (FIFO). If the queue is full, then additional requests are discarded (or leaked).

Pros: smooths out bursts of requests and processes them at an approximately average rate

Cons: a burst of traffic can fill up the queue with old requests and starve more recent requests from being processed. No guarantee that requests get processed in a fixed amount of time

## Other Ways

- Channels
- Ticker
- Cache 

References
- https://ayada.dev/posts/ways-to-rate-limit-requests-in-go/
- https://konghq.com/blog/how-to-design-a-scalable-rate-limiting-algorithm