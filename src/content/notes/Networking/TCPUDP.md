---
displayed_sidebar: notesSideBar
---

# TCP / UDP

|    TCP   |    UDP   |
| -------- | -------- |
| Reliable data transfer | Unreliable data transfer |
| Flow control: sender won’t overwhelm receiver | No flow control |
| Congestion control: throttle sender when network is overloaded | No congestion control |
| Does not provide: timing, minimum throughput guarantee, security | Does not provide: timing, throughput guarantee or security |
| Connection oriented | Datagram oriented |
| Extensive error checking mechanism | Basic error checksum |
| With ACK segment | No ACK segment |
| Packets arrive in sequence | No sequencing |
| Slower than UDP | Faster than TCP |
| Retransmission of lost packets | No retransmission |
| SYN, ACK, SYN-ACK handshakes | No handshakes |
| Used by HTTP, HTTPS, FRP, SMTP | Used by DNS, DHCP, VoIP |
| Byte stream | Message Stream | 