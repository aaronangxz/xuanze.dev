---
displayed_sidebar: notesSideBar
---

# Go

### Iota
The use of `iota` indicates the start, e.g. `0` of that enum.
```go
const (
	Red int = iota
	Orange
	Yellow
	Green
	Blue
	Indigo
	Violet
)
```
The actual values will be 0 ~ 6.

To skip enum,
```go
const (
	_ int = iota
	Orange
	Yellow
	Green
	Blue
	Indigo
	Violet
)
```
The actual values will be 1 ~ 6.

For bitmask,
```go
const (
	read   = 1 << iota // 00000001 = 1
	write              // 00000010 = 2
	remove             // 00000100 = 4
)

const (
	_  = 1 << (iota * 10) // ignore the first value
	KB                    // decimal:       1024 -> binary 00000000000000000000010000000000
	MB                    // decimal:    1048576 -> binary 00000000000100000000000000000000
	GB                    // decimal: 1073741824 -> binary 01000000000000000000000000000000
)
```

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