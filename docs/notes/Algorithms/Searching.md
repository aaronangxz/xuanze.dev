---
displayed_sidebar: notesSideBar
---

# Searching

### Binary Search
Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 

#### Implementation 
```go
func binarySearchRecursive(array []int, l int, r int, target int) int{
    //Only if right is greater equal to left
    if(r >= l){
        mid := l + (r - l) / 2
        //found target
        if array[mid] == target{
            return mid
        }
        //target is in lower half
        if array[mid] > target{
            return binarySearchRecursive(array,l,mid-1,target)
        }
        //else target must be in upper half
        return binarySearchRecursive(array,mid + 1,r,target)
    }
    //else target is not in array
    return -1
}

func binarySearchIterative(array []int, l int, r int, target int) int{
    for l <= r{
        mid := l + (r - l) / 2

        if array[mid] == target{
            return mid
        }    

        if array[mid] > target{
            r = mid - 1
        }else{
            l = mid + 1
        }
    }
    return -1
}

func main(){
    a := []int{1,5,8,22,55,99,123,456,890,999}
    //find 456
    result1 := binarySearchRecursive(a,0,len(a)-1,456)
    fmt.Println(result1)
    result2 := binarySearchIterative(a,0,len(a)-1,456)
    fmt.Println(result2)
        
    b := []int{1,5,8,22,55,99,123,456,890,999}
    //find 1000
    result3 := binarySearchRecursive(b,0,len(b)-1,1000)
    fmt.Println(result3)
    result4 := binarySearchIterative(b,0,len(b)-1,1000)
    fmt.Println(result4)
}
```

### Complexities
#### Time Complexity
O(1) When element is in the middle

O(logN) On average

O(logN) Worst case
#### Space Complexity
Recursive: O(logN) 

Iterative: O(1)

#### Calculating middle element
Note that we cannot simply calculate the middle element as:
```
mid := (l + r) / 2
```
Because there is a risk that `mid` will overflow in value.
Hence,
```
mid := l + (r - l) / 2
```