---
id: linkedlist
sidebar_position: 1
displayed_sidebar: notesSideBar
---

# Linked List

### Introduction

### Complexities

#### Time Complexity

##### Write


##### Access


### Implementation

#### Go Singly Linked List
```go

type ListNode struct {
	data interface{}
	next *ListNode
}

func main() {
	s := []int{1, 2, 3, 4, 5}
	l := new(ListNode)
	var curr *ListNode = l
	var prev *ListNode

	//Fills linked list with elements in slice
	for i := range s {
		if i == 0{
			l.data = s[0]
		}

		if curr == nil {
			curr = new(ListNode)
			curr.data = s[i]
			prev.next = curr
		}
		prev = curr
		curr = curr.next
	}

	//Prints nodes in linked list
	for l != nil {
		fmt.Println(l.data)
		l = l.next
	}
}
```