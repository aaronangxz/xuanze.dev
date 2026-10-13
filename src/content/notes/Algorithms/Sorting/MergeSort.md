---
displayed_sidebar: notesSideBar
---

# Merge Sort
The Merge Sort algorithm is a sorting algorithm that is considered as an example of the divide and conquer strategy. So, in this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner. 

We can think of it as a recursive algorithm that continuously splits the array in half until it cannot be further divided. This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion. 

If the array has multiple elements, we split the array into halves and recursively invoke the merge sort on each of the halves. Finally, when both the halves are sorted, the merge operation is applied. 

Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one.

### Complexities
#### Time Complexity
O(n logn) - Merge sort always divides the array into two halves O(logn) and takes linear time to merge two halves O(n).

#### Space Complexity
O(n) - In merge sort all elements are copied into an auxiliary array 

#### Implementation 

```go
func merge(left, right []int)[]int{
	output := make([]int,len(left)+len(right))
	idx := 0
	i,j := 0,0

	for i < len(left) && j < len(right){
		if left[i] < right[j]{
			output[idx] = left[i]
			i++
		}else{
			output[idx] = right[j]
			j++
		}
		idx++
	}

	for i < len(left){
		output[idx] = left[i]
		i++
		idx++
	}

	for j < len(right){
		output[idx] = right[j]
		j++
		idx++
	}
	return output
}

func mergeSort(s[]int)[]int{
	if len(s) < 2{
		return s
	}
	mid := len(s)/2
	return merge(mergeSort(s[:mid]),mergeSort(s[mid:]))
}
```