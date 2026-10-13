---
displayed_sidebar: notesSideBar
---

# Selection Sort
Selection sort is **not stable**.

### Complexities
#### Time Complexity
O(N^2) - One loop to select an element, another loop to compare it with the rest of the elements

#### Space Complexity
O(1)

#### Implementation 

```go
func selectionSort(slice []int) {
	for i := 0; i < len(slice); i++ {
		min := i
		for j := i + 1; j < len(slice); j++ {
			if slice[j] < slice[min] {
				swap(&slice[j], &slice[min])
				min = j
			}
		}
	}
}

func main(){
	d := []int{33, 1, 5, 8, 22, 1, 55, 5, 99, 123, 90, 456, 333, 890, 1000, 999}
	fmt.Println("Before:", d)
	selectionSort(d)
	fmt.Println("After:", d)
}
```