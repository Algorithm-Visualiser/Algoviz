const selectionSort = [
  {
    name: "Selection Sort",
    lang: "Javascript",
    info: `Time Complexity: The time complexity of Selection Sort is O(N2) as there are two nested loops:

            One loop to select an element of Array one by one = O(N)
            Another loop to compare that element with every other Array element = O(N)
            Therefore overall complexity = O(N)*O(N) = O(N*N) = O(N2)

            Auxiliary Space: O(1) as the only extra memory used is for temporary variable while swapping two values in Array. The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation. `,
    code: `
    // Javascript program for implementation of selection sort
    function swap(arr,xp, yp)
    {
      var temp = arr[xp];
      arr[xp] = arr[yp];
      arr[yp] = temp;
    }
    
    function selectionSort(arr, n)
    {
      var i, j, min_idx;
    
      // One by one move boundary of unsorted subarray
      for (i = 0; i < n-1; i++)
      {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
          min_idx = j;
    
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
      }
    }
    
    function printArray( arr, size)
    {
      var i;
      for (i = 0; i < size; i++)
        document.write(arr[i] + " ");
      document.write(" <br>");
    }
    
    var arr = [64, 25, 12, 22, 11];
      var n = 5;
      selectionSort(arr, n);
      document.write("Sorted array: <br>");
      printArray(arr, n);
    
    // This code is contributed by akshitsaxenaa09.
  
    
    `,
  },
  {
    name: "Selection Sort",
    lang: "Python",
    info: `Time Complexity: The time complexity of Selection Sort is O(N2) as there are two nested loops:

            One loop to select an element of Array one by one = O(N)
            Another loop to compare that element with every other Array element = O(N)
            Therefore overall complexity = O(N)*O(N) = O(N*N) = O(N2)

            Auxiliary Space: O(1) as the only extra memory used is for temporary variable while swapping two values in Array. The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation. `,
    code: `# Python program for implementation of Selection
    # Sort
    import sys
    A = [64, 25, 12, 22, 11]
    
    # Traverse through all array elements
    for i in range(len(A)):
      
      # Find the minimum element in remaining
      # unsorted array
      min_idx = i
      for j in range(i+1, len(A)):
        if A[min_idx] > A[j]:
          min_idx = j
          
      # Swap the found minimum element with
      # the first element		
      A[i], A[min_idx] = A[min_idx], A[i]
    
    # Driver code to test above
    print ("Sorted array")
    for i in range(len(A)):
      print("%d" %A[i],end=" ")
    
    `,
  },
  {
    name: "Selection Sort",
    lang: "C++",
    info: `Time Complexity: The time complexity of Selection Sort is O(N2) as there are two nested loops:

            One loop to select an element of Array one by one = O(N)
            Another loop to compare that element with every other Array element = O(N)
            Therefore overall complexity = O(N)*O(N) = O(N*N) = O(N2)

            Auxiliary Space: O(1) as the only extra memory used is for temporary variable while swapping two values in Array. The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation. `,
    code: `// C++ program for implementation of
    // selection sort
    #include <bits/stdc++.h>
    using namespace std;
    
    //Swap function
    void swap(int *xp, int *yp)
    {
      int temp = *xp;
      *xp = *yp;
      *yp = temp;
    }
    
    void selectionSort(int arr[], int n)
    {
      int i, j, min_idx;
    
      // One by one move boundary of
      // unsorted subarray
      for (i = 0; i < n-1; i++)
      {
        
        // Find the minimum element in
        // unsorted array
        min_idx = i;
        for (j = i+1; j < n; j++)
        if (arr[j] < arr[min_idx])
          min_idx = j;
    
        // Swap the found minimum element
        // with the first element
        swap(&arr[min_idx], &arr[i]);
      }
    }
    
    //Function to print an array
    void printArray(int arr[], int size)
    {
      int i;
      for (i=0; i < size; i++)
        cout << arr[i] << " ";
      cout << endl;
    }
    
    // Driver program to test above functions
    int main()
    {
      int arr[] = {64, 25, 12, 22, 11};
      int n = sizeof(arr)/sizeof(arr[0]);
      selectionSort(arr, n);
      cout << "Sorted array: \n";
      printArray(arr, n);
      return 0;
    }
    // This is code is contributed by rathbhupendra
    
    `,
  },
];

export default selectionSort;
