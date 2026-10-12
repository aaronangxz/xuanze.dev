---
displayed_sidebar: notesSideBar
---

# Go Concurrency

> What is the difference between concurrency and parallelism

Concurrency is two lines of customers ordering from a single cashier (lines take turns ordering); 

Parallelism is two lines of customers ordering from two cashiers (each line gets its own cashier)

## Goroutine
- Independently executing function, launched by a go statement
- Has its own call stack, which grows and shrinks as required
- Very cheap
- Not a thread (`a very cheap thread`)
- There might be only one thread in a program with thousands of goroutines
- Goroutines are multiplexed dynamically onto threads as needed to keep all the goroutines running

## Channels
- Provides a connection between two goroutines, allowing them to communicate
```go   
    // Declaring and initializing.
    var c chan int
    c = make(chan int)
    // or
    c := make(chan int)
    // Sending on a channel.
    c <- 1
    // Receiving from a channel.
    // The "arrow" indicates the direction of data flow.
    value = <-c
```
## Select
- Provides another way to handle multiple channels
- It's like a switch, but each case is a communication
- All channels are evaluated
- Selection blocks until one communication can proceed
- If multiple can proceed, select chooses pseudo-randomly
- A default clause, if present, executes immediately if no channel is ready

```go
select {
    case v1 := <-c1:
        fmt.Printf("received %v from c1\n", v1)
    case v2 := <-c2:
        fmt.Printf("received %v from c2\n", v1)
    case c3 <- 23:
        fmt.Printf("sent %v to c3\n", 23)
    default:
        fmt.Printf("no one was ready to communicate\n")
    }
```