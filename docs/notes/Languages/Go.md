---
displayed_sidebar: notesSideBar
---

# Go

### Loops
There is no while loop in Go.

```go
//Range loop using only index
for i := range a {}

//Range loop using both index and elements
for i, obj := range a{}

//Range loop using only elements
for _, obj := range a{}

//Infinite while loop
for{}

//While loop with exit condition
for a != nil{}
```

### Interfaces
An interface type is defined as a set of method signatures. A value of interface type can hold any value that implements those methods.

```go
//Function that takes in any data type
func Do(a interface{})

//Struct that can be any other struct
type Do interface{
    thing string
}
```
### Function headers
```go
func (a *A) DoSomething (b interface{},c ...interface{}) d interface{}
```

`(a *int)` : `DoSomething` is a method of object `A`

`b interface{}` : which takes in any data type as the function parameter `b`

`c ...interface{}` : and also takes in an optional parameter `c` of any data type

`d interface{}` : then returns `d`

### Reflect


### Pointers
To update a slice within a function
```go
//Append
func update(s []string, a string){
    *s = append(*s, a)
}

//Slice off
func sliceFirstElement(s []string){
    *s = (*s)[:1]
}

//Swapping slice elements can be done directly because the slice passed inside still points to the same address as the slice outside of the function
func swap(s []string){
    tmp := s[0]
    s[0] = s[1]
    s[1] = tmp
}
```