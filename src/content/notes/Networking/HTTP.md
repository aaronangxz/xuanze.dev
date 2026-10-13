---
displayed_sidebar: notesSideBar
---

# HTTP
Hypertext Transfer Protocol
- Top-level application protocol that exchanges information between a client computer and a local or remote web server.

### HTTP 1.0 / 1.1/  2.0

|   | HTTP 1.0 | HTTP 1.1 | HTTP 2.0 |
| - | -------- | -------- | -------- |
| Persistent | No | Yes | Yes |
| Multiple requests | No, 1 per TCP connection | Yes, head-of-line (HOL) blocking - previous requests block the queue | Binary Framing Layer - parallel streams of data encoded and re-assembled (multiplexing) |
| Handling buffer overflow | No | Yes, state receive window in TCP ACK | Flow control based on each streams |
| Resource Request | No | Resource Inlining - include the resource directly within the HTML | Server Push - push resource alongside HTML |
| Compression | No | Header not compressed | HPACK to compress headers | 

### HTTP Method
#### POST vs PUT vs PATCH
| Method| Operation |  Example |
| ----- | ----------- | -- |
| POST  | Creates a child resource          | Creates new user and generates userid |
| PUT   | Creates (If nil) / Replaces the resource with idempotency  | Update this user via userid |
| PATCH | Updates part of the resource      | Update username of this user via userid |

### HTTP Resp Codes
#### 1xx Informational Responses
- Server informs the client that the request is in motion
#### 2xx Successful Responses
- Announces a successful operation

| Code | Description |
| ---- | ----------- |
| 200 OK | Success |
| 201 Created | Success. After POST/PUT |


#### 3xx Redirection Responses
- Appear during redirections and forwardings

| Code | Description |
| ---- | ----------- |
| 301 Moved Permanently | The URL of the requested resource has been changed permanently. The new URL is given in the response. |
| 302 Found | URI of requested resource has been changed temporarily |
| 304 Not Modified | Cached, response has not been modified |

#### 4xx Client Error Responses
- The server has received the request, but cannot perform it.

| Code | Description |
| ---- | ----------- |
| 400 Bad Request | Will not process request due to client error (invalid) |
| 401 Unauthorized | Not aunthenticated |
| 403 Forbidden | Does not have access rights to the content |
| 404 Not Found | Server can not find the requested resource |
| 408 Request Timeout | Server would like to shut down this unused connection |

#### 5xx Server Error Responses
- Server has failed to perform the request.

| Code | Description |
| ---- | ----------- |
| 500 Internal Server Error | The server has encountered a situation it does not know how to handle |
| 502 Bad Gateway | Server, while working as a gateway to get a response needed to handle the request, got an invalid response |
| 503 Service Unavailable | The server is not ready to handle the request |

### HTTP / HTTPS
HTTPS is HTTP + Encryption (TLS / SSL)

#### TLS / SSL

TLS: Transport Layer Security 

SSL: Secure Sockets Layer

SSL replaced by TLS

### HTTPS Encryption Steps
1. TLS Handshake
- Contains information such as TLS version to support
- Uses asymmetric key - two different keys are used on the two ends of the conversation

2. Certificate Exchange 
- Exchange SSL certificate, containing owner name, domain, public key, digital signature (cipher text signed by CA with private key), validity
- Client verifies certificate / certificate authority (CA)
- Verify digital signature by decrypting with the certificate's CA public key

3. Key Exchange
- Creates a session key
- Encrypt with server's public key and send to server
 - Server receives and decrypt with private key

4. Done!
- Session key used for both encryption and decryption
- Uses symmetric key
- Valid until next session
