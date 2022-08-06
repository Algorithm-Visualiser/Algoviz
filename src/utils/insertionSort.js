const insertionSort = [
  {
    name: "Insertion Sort",
    lang: "Javascript",
    info: `Time Complexity: O(N^2) 
    Auxiliary Space: O(1)`,
    code: `// Javascript program for insertion sort
      
    // Function to sort an array using insertion sort
    function insertionSort(arr, n)
    {
      let i, key, j;
      for (i = 1; i < n; i++)
      {
        key = arr[i];
        j = i - 1;
      
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key)
        {
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = key;
      }
    }
      
    // A utility function to print an array of size n
    function printArray(arr, n)
    {
      let i;
      for (i = 0; i < n; i++)
        document.write(arr[i] + " ");
      document.write("<br>");
    }
      
    // Driver code
      let arr = [12, 11, 13, 5, 6 ];
      let n = arr.length;
      
      insertionSort(arr, n);
      printArray(arr, n);
      
    // This code is contributed by Mayank Tyagi

    `,
  },
  {
    name: "Insertion Sort",
    lang: "Python",
    info: `Time Complexity: O(N^2) 
    Auxiliary Space: O(1)`,
    code: `# Python program for implementation of Insertion Sort

    # Function to do insertion sort
    def insertionSort(arr):
    
      # Traverse through 1 to len(arr)
      for i in range(1, len(arr)):
    
        key = arr[i]
    
        # Move elements of arr[0..i-1], that are
        # greater than key, to one position ahead
        # of their current position
        j = i-1
        while j >= 0 and key < arr[j] :
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    
    
    # Driver code to test above
    arr = [12, 11, 13, 5, 6]
    insertionSort(arr)
    for i in range(len(arr)):
      print ("% d" % arr[i])
    
    # This code is contributed by Mohit Kumra
    
    `,
  },
  {
    name: "Insertion Sort",
    lang: "C++",
    info: `Time Complexity: O(N^2) 
    Auxiliary Space: O(1)`,
    code: `// C++ program for insertion sort

    #include <bits/stdc++.h>
    using namespace std;
    
    // Function to sort an array using
    // insertion sort
    void insertionSort(int arr[], int n)
    {
      int i, key, j;
      for (i = 1; i < n; i++)
      {
        key = arr[i];
        j = i - 1;
    
        // Move elements of arr[0..i-1],
        // that are greater than key, to one
        // position ahead of their
        // current position
        while (j >= 0 && arr[j] > key)
        {
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = key;
      }
    }
    
    // A utility function to print an array
    // of size n
    void printArray(int arr[], int n)
    {
      int i;
      for (i = 0; i < n; i++)
        cout << arr[i] << " ";
      cout << endl;
    }
    
    // Driver code
    int main()
    {
      int arr[] = { 12, 11, 13, 5, 6 };
      int N = sizeof(arr) / sizeof(arr[0]);
    
      insertionSort(arr, N);
      printArray(arr, N);
    
      return 0;
    }
    // This is code is contributed by rathbhupendra
    
    `,
  },
];

export default insertionSort;
