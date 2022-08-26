---
displayed_sidebar: notesSideBar
---

# Insertion Sort


### Complexities
#### Time Complexity

#### Space Complexity

#### Implementation 

```go
func insertionSort(slice []int){
    for i := 1 ; i < len(slice); i++{
        curr := slice[i]
        j = i - 1

        for j >= 0 && curr < slice[j]{
            slice[j+1] = s[j]
            j--
        }
        slice[j+1] = curr
    }
}
```