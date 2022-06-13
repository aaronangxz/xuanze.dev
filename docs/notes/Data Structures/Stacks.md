---
id: stacks
sidebar_position: 1
displayed_sidebar: notesSideBar
---

# Stacks

### Introduction

A stack is an abstract data structure that contains a collection of elements. Stack implements the **LIFO** mechanism 
i.e. the element that is pushed at the end is popped out first. Some of the principle operations in the stack are −

**Push** - This adds a data value to the top of the stack

**Pop** - This removes the data value on top of the stack

**Peek** / **Top** - This returns the top data value of the stack

### Complexities

#### Time Complexity

##### Write

O(1)

##### Access

O(1)

### Implementation

#### C++
```cpp
vector<int> stack;
int top = -1;

void push(int val){
    stack.push_back(val);
    top++;
}

int pop(){
    int topElement = peek();
    stack.erase(stack.begin()+top);
    top--;
    return topElement;
}

int peek(){
    return stack[top];
}
```
#### Go
```go
//The stack object
type Stack []interface{}

//Helper function to check if stack is empty
func (s *Stack) isEmpty() bool {
	return len(*s) == 0
}

//Push the new element onto the stack
func (s *Stack) push(e interface{}) {
	*s = append(*s, e)
}

//Removes the element on the top of the stack
func (s *Stack) pop() {
	if s.isEmpty() {
		return
	}
	index := len(*s) - 1
	*s = (*s)[:index]
}

//Returns the element on top of the stack
func (s *Stack) top() interface{} {
	if s.isEmpty() {
		return nil
	}
	index := len(*s) - 1
	return (*s)[index]
}

func main(){
    var s Stack
    s.push(1)
    s.push(2)
    fmt.Println(s.top())
    s.pop()
    fmt.Println(s.top())
    s.pop()
    fmt.Println(s.top())
}
```
