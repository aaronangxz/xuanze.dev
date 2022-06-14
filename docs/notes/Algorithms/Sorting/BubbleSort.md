---
displayed_sidebar: notesSideBar
---

# Bubble Sort
- Iterate through the array elements one by one, and check if one is greater than the other.
- If yes, swap the two elements
- After every run, it is guranteed that the last element will be sorted. We can slowly make the range smller by 1 element each time, hence `j < len(slice)-i-1`
- Optimized: If no elements were swapped after the first iteration, that means no element is out of order. We can stop sorting.

### Complexities
#### Time Complexity
O(N) Best case - When elements are already sorted

O(N^2) On average - Total number of comparisons = n(n-1)/2

O(N^2) Worst case - When array is reversed sorted
#### Space Complexity
O(1)

#### Implementation 

```go
func bubbleSort(slice []int) {
	for i := 0; i < len(slice); i++ {
		for j := 0; j < len(slice)-i-1; j++ {
			if slice[j] > slice[j+1] {
				tmp := slice[j+1]
				slice[j+1] = slice[j]
				slice[j] = tmp
			}
		}
	}
}

func bubbleSortOptimized(slice []int) {
	swapped := false
	for i := 0; i < len(slice); i++ {
		for j := 0; j < len(slice)-i-1; j++ {
			if slice[j] > slice[j+1] {
				tmp := slice[j+1]
				slice[j+1] = slice[j]
				slice[j] = tmp
				swapped = true
			}
			if !swapped {
				break
			}
		}
	}
}

func main(){
    b := []int{33, 1, 5, 8, 22, 1, 55, 5, 99, 123, 90, 456, 333, 890, 1000, 999}
	fmt.Println("Before:", b)
	bubbleSort(b)
	fmt.Println("After:", b)

	c := []int{33, 1, 5, 8, 22, 1, 55, 5, 99, 123, 90, 456, 333, 890, 1000, 999}
	fmt.Println("Before:", c)
	bubbleSortOptimized(c)
	fmt.Println("After:", c)
}
```