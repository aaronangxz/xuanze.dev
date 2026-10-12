---
displayed_sidebar: notesSideBar
---

# When You Visit a URL
URL - Uniform Resource Locator

## 1. DNS Lookup
- First thing is to resolve IP address of the domain name.

Check browser cache -> OS cache -> ISP cache -> TLD (Top level domain) Server -> Authorative Name Server -> Root Server

## 2. Browser Initiates TCP Connection

- Client sends `SYN` 
- Server sends `SYN + ACK` 
- Client sends `ACK`
- See `Networking/HTTP` for HTTPS initialization
- Initialized

| Message | Description |
| ------- | ----------- |
| SYN | Used to initiate and establish a connection. It also helps you to synchronize sequence numbers between devices. |
| ACK | Helps to confirm to the other side that it has received the SYN. |
| SYN-ACK | SYN message from local device and ACK of the earlier packet. |

## 3. Request Response Process

- Client sends request
- Server sends response

References:
- https://www.freecodecamp.org/news/what-happens-when-you-hit-url-in-your-browser/