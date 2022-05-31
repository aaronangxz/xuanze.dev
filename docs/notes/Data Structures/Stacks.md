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

**Peek** - This returns the top data value of the stack

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
func pop(){

}
```
