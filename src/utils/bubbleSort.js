const bubbleSort = [
  {
    lang: 30,
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
];

export default bubbleSort;
