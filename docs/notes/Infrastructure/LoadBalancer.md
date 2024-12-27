---
displayed_sidebar: notesSideBar
---

# Load Balancer

## Categories

### Layer 4 (L4) Load Balancer
- A.K.A Network Load Balancing
- Happens on Transport Layer
- Decision will be based on the TCP or UDP ports that packets use along with their source and destination IP addresses.
- Performs Network Address Translation (NAT) on the request packet.
- Maximizes the utilization and availability by distributing the traffic across IP addresses, switches, and routers.

### Layer 7 (L7) Load Balancer
- A.K.A Application Load Balancer / HTTP(S) Load Balancer
- Happens on Application Layer
- Uses information such as HTTP header, cookies, uniform resource identifier, SSL session ID, and HTML form data to decide the routing request across the servers.  

### Global Server Load Balancing (GSLB)
- Distribute across servers globally
- DNS load balancing / CDN caching

## Static Algorithms

### Round Robin
- Distributed across the servers in a sequential or rotational manner
- Doesn’t consider the load already on a server so there is a risk that one of the servers receives a lot of requests and becomes overloaded

### Weighted Round Robin
- Similar to round robin, plus each of the resources in a list is provided a weighted score
- Some of the servers get a bigger share of the overall request. 

### Source IP Hash
- Request is sent to the server based on the client’s IP address.

### URL Hash
- Request is sent to the server based on the client’s URL.
- Cache the hash value and subsequent requests will map to the same server.

### Randomized algorithm
- Maps requests to a random destination.
- Works well with server cluster with similar configurations.

## Dynamic Algorithms

### Least Connection
- Request will be directed to the server with the fewest number of requests or active connections.
- Load balancer needs to do some additional computing to identify the server with the least number of connections.
- Most useful when there is a huge number of persistent connections in the traffic unevenly distributed between the servers.

### Weighted Least Connection
- Request will be directed to the server with the fewest number of requests or active connections and relative capacity of server.
- Server are weighted based on processing capabilities

### Least Response Time
- Request is forwarded to the server with the fewest active connections and the least average response time. 