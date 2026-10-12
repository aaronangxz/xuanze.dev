---
displayed_sidebar: notesSideBar
---

# Quick Sort
QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 

- Always pick first element as pivot.
- Always pick last element as pivot (implemented below)
- Pick a random element as pivot.
- Pick median as pivot.

The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

### Complexities
#### Time Complexity
O(nlogn)
#### Space Complexity
O(logn)
#### Implementation 

```go
func quickSort(s []int){
	if len(s) < 2{
		return
	}

	pivot := len(s)/2
	front, back := 0, len(s)-1

	s[pivot] , s[back] = s[back], s[pivot]

	for i := range s{
		if s[i] < s[pivot]{
			s[i], s[front] = s[front], s[i]
			front++
		}
	}

	s[pivot], s[front] = s[front], s[pivot]

	quickSort(s[:front])
	quickSort(s[front+1:])
}
```