---
displayed_sidebar: notesSideBar
---

# Multi Threading

## Threads & Processes

Process - Program being executed

Threads - Lightweight processes within a process

| Process | Threads |
| ------- | ------- |
| Process is heavy weight or resource intensive. | Thread is light weight, taking lesser resources than a process.|
| Process switching needs interaction with operating system. | Thread switching does not need to interact with operating system. |
| In multiple processing environments, each process executes the same code but has its own memory and file resources. | All threads can share same set of open files, child processes. |
| If one process is blocked, then no other process can execute until the first process is unblocked. | While one thread is blocked and waiting, a second thread in the same task can run. |
| Multiple processes without using threads use more resources. | Multiple threaded processes use fewer resources. |
| In multiple processes each process operates independently of the others. | One thread can read, write or change another thread's data. |
## Semaphore
-  initialized with the number of resources present in the system and is used for process synchronization
### Counting semaphores
- initialized with the number of resources available.
- whenever a process needs some resource, then the `wait()` (SEMPEND) function is called and the value of the semaphore variable is decreased by one
- The process then uses the resource and after using the resource, the `signal()` (SEMPOST) function is called and the value of the semaphore variable is increased by one
- when semaphore goes to 0 i.e all the resources are taken by the process and there is no resource left to be used, then if some other process wants to use resources then that process has to wait for its turn. 
### Binary semaphores
- value of the semaphore variable will be 0 or 1
- if some process wants to use some resource then the `wait()` function is called and the value of the semaphore is changed to 0 from 1
- when it releases the resource then the `signal()` function is called and the value of the semaphore variable is increased to 1
- If at a particular instant of time, the value of the semaphore variable is 0 and some other process wants to use the same resource then it has to wait for the release of the resource by the previous process.
- similar to mutex but locking is not performed.
## Mutex
Mutex - Mutual Exclusion Object
- give access to a resource to only one process at a time
- system will create a mutex object with a unique name or ID.
- whenever the process wants to use that resource, then the process occupies a lock on the object. 
- After locking, the process uses the resource and finally releases the mutex object.

| Mutex | Semaphore |
| ----- | --------- |
| locking mechanism |  signaling mechanism |
| object | integer |
| no subtype | Counting, Binary |
| only modified by current process |any process can modify values |

## Deadlock
A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process. 
- Process 1 is holding `resource a` and waiting for `resource b`, but process 2 is holding `resource b` but also waiting for `resource a`

### Conditions:
| Condition |  |
| ----- | --------- |
| Mutual Exclusion | Two or more resources are non-shareable (Only one process can use at a time) |
| Hold and Wait | A process is holding at least one resource and waiting for resources |
| No Preemption | A resource cannot be taken from a process unless the process releases the resource |
| Circular Wait | A set of processes are waiting for each other in circular form |

### How to handle

1. Prevention - Avoiding the conditions above
2. Detection - Do preemption once it occurrs
3. Ignore - If it happens very rarely, just reboot

## Task Scheduler

|   | Preemptive | Non-preemptive |
| - | ---------- | -------------- |
| Basic | Resource allocated to a process for a limited time | Resource allocated to a process until it completes or switches state |
| Interrupt | Can be interrupted | Cannot be interrupted |
| Starvation | Low priority process may starve if high priority process is frequently in ready state | Process that uses CPU for a long time will starve those that use shorter time |