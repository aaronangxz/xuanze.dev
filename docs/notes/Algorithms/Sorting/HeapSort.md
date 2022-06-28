---
displayed_sidebar: notesSideBar
---

# Heap Sort
Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.

### Complexities
#### Time Complexity
O(nlogn) - heapify O(logn), build heap O(n)
#### Space Complexity
O(1)
#### Implementation 

```go
func heapify(s[]int, size,index int){
	largest := index
	l := 2 * i + 1
	r := 2 * i + 2

	if l < size && s[l] > s[largest]{
		largest = l
	}

	if r < size && s[r] > s[largest]{
		largest = r
	}

	if largest != i{
		swap(s[largest],s[i])
		heapify(s,len(s),largest)
	}
}

func heapSort(s []int) {
	for i := len(s)/2 -1; i >=0; i++{
		heapify(s,len(s),i)
	}

	for i := len(s)-1; i >=0; i--{
		swap(s[0],s[i])
		heapify(s[:i],i,0)
	}
}
```