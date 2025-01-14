

function bubbleSortDescending(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
 
  document.getElementById("arrayForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const input = document.getElementById("arrayInput").value;
    const inputArray = input.split(',').map(Number);
    const sortedArray = bubbleSortDescending(inputArray);
    document.getElementById("sortedArray").innerHTML = sortedArray.join(', ');
});
  