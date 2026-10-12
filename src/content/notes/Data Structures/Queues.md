---
id: queues
sidebar_position: 1
displayed_sidebar: notesSideBar
---

# Queues

### Introduction

A queue is an abstract data structure that contains a collection of elements. Queue implements the **FIFO** mechanism 
i.e. the element that is pushed at the front is popped out first. Some of the principle operations in the stack are −

**Enqueue** - This adds a data value to the back of the queue

**Dequeue** - This removes the data value from the front of the queue

### Complexities

#### Time Complexity

##### Write

O(1)

##### Access

O(1)

### Implementation

#### Go with Linked List
```go

type Node struct{
	data interface{}
	next *Node
}

func NewNode(d interface{}) *Node{
	return &Node{
		d,
		nil,
	}
}

type Queue struct{
	head *Node
	tail *Node
	count int
}

func (q *Queue) New() *Queue{
	return &Queue{
		nil,
		nil,
		0,
	}
}

func (q *Queue) size() int{
	return q.count
}

func (q *Queue) enqueue(d interface{}){
	n := NewNode(d)
	if q.head == nil{
		q.head = n
	}else{
		q.tail.next = n
	}
	q.count ++
	q.tail = n
}

func (q *Queue) dequeue() interface{}{
	if q.head == nil{
		return nil
	}

	n := q.head
	q.head = q.head.next

	if q.head == nil{
		q.tail = nil
	}
	q.count--
	return n.data
}

func (q *Queue) front() interface{}{
	return q.head
}

func (q *Queue) back() interface{}{
	return q.tail
}

func main() {
	var q Queue
	queue := q.New()
	queue.enqueue(1)
	queue.enqueue(2)
	queue.enqueue(3)
	fmt.Println("Front:", queue.front())
	fmt.Println("Back:", queue.back())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Front:", queue.front())
	fmt.Println("Back:", queue.back())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Size:", queue.size())
}
```

#### Go with Slice
```go
type Queue []interface{}

func (q *Queue) size() int{
	return len(*q)
}

func (q *Queue) enqueue(d interface{}){
	*q = append(*q,d)
}

func (q *Queue) dequeue() interface{}{
	if len(*q) == 0{
		return nil
	}
	head := (*q)[0]
	*q = (*q)[1:]
	return head
}

func (q *Queue) front() interface{}{
	return (*q)[0]
}

func (q *Queue) back() interface{}{
	index := len(*q)-1
	return (*q)[index]
}

func main() {
	var queue Queue
	queue.enqueue(1)
	queue.enqueue(2)
	queue.enqueue(3)
	fmt.Println("Front:", queue.front())
	fmt.Println("Back:", queue.back())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Front:", queue.front())
	fmt.Println("Back:", queue.back())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Size:", queue.size())
	fmt.Println(queue.dequeue())
	fmt.Println("Size:", queue.size())
}
```
