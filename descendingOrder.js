
const array = [1,2,3,4,5]; 
  
function arrSort(arr) { 
    arr.sort((a,b)=>a-b); 
    arr.reverse(); 
    return arr; 
} 
console.log("Resulting sorted array is");
console.log(arrSort(array)); 
