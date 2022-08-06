const bubbleSort = [
  {
    name: "Bubble Sort",
    lang: "Javascript",
    info: `Worst Case and Average case time complexity 
    If the array is in reverse order then this condition is the worst case and Its time complexity is O(n2).
    
    Best case time complexity
    If the array is already sorted then it is the best-case scenario and its time complexity is O(n)
    
    Auxiliary Space: O(1)`,
    code: `// Bubble sort Implementation using Javascript


    // Creating the bblSort function
    function bblSort(arr){
      
    for(var i = 0; i < arr.length; i++){
      
    // Last i elements are already in place
    for(var j = 0; j < ( arr.length - i -1 ); j++){
      
      // Checking if the item at present iteration
      // is greater than the next iteration
      if(arr[j] > arr[j+1]){
        
      // If the condition is true then swap them
      var temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j+1] = temp
      }
    }
    }
    // Print the sorted array
    console.log(arr);
    }
    
    
    // This is our unsorted array
    var arr = [234, 43, 55, 63, 5, 6, 235, 547];
    
    
    // Now pass this array to the bblSort() function
    bblSort(arr);
    `,
  },
  {
    name: "Bubble Sort",
    lang: "Python",
    info: `Worst Case and Average case time complexity 
    If the array is in reverse order then this condition is the worst case and Its time complexity is O(n2).
    
    Best case time complexity
    If the array is already sorted then it is the best-case scenario and its time complexity is O(n)
    
    Auxiliary Space: O(1)`,
    code: `# Python program for implementation of Bubble Sort

    def bubbleSort(arr):
      n = len(arr)
      # optimize code, so if the array is already sorted, it doesn't need
      # to go through the entire process
      swapped = False
      # Traverse through all array elements
      for i in range(n-1):
        # range(n) also work but outer loop will
        # repeat one time more than needed.
        # Last i elements are already in place
        for j in range(0, n-i-1):
    
          # traverse the array from 0 to n-i-1
          # Swap if the element found is greater
          # than the next element
          if arr[j] > arr[j + 1]:
            swapped = True
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
        
        if not swapped:
          # if we haven't needed to make a single swap, we
          # can just exit the main loop.
          return
    
    
    # Driver code to test above
    arr = [64, 34, 25, 12, 22, 11, 90]
    
    bubbleSort(arr)
    
    print("Sorted array is:")
    for i in range(len(arr)):
      print("% d" % arr[i], end=" ")
    
    `,
  },
  {
    name: "Bubble Sort",
    lang: "C++",
    info: `Worst Case and Average case time complexity 
    If the array is in reverse order then this condition is the worst case and Its time complexity is O(n2).
    
    Best case time complexity
    If the array is already sorted then it is the best-case scenario and its time complexity is O(n)
    
    Auxiliary Space: O(1)`,
    code: `// C++ program for implementation
    // of Bubble sort
    #include <bits/stdc++.h>
    using namespace std;
    
    // A function to implement bubble sort
    void bubbleSort(int arr[], int n)
    {
      int i, j;
      for (i = 0; i < n - 1; i++)
    
        // Last i elements are already
        // in place
        for (j = 0; j < n - i - 1; j++)
          if (arr[j] > arr[j + 1])
            swap(arr[j], arr[j + 1]);
    }
    
    // Function to print an array
    void printArray(int arr[], int size)
    {
      int i;
      for (i = 0; i < size; i++)
        cout << arr[i] << " ";
      cout << endl;
    }
    
    // Driver code
    int main()
    {
      int arr[] = { 5, 1, 4, 2, 8};
      int N = sizeof(arr) / sizeof(arr[0]);
      bubbleSort(arr, N);
      cout << "Sorted array: \n";
      printArray(arr, N);
      return 0;
    }
    
    `,
  },
];

export default bubbleSort;
