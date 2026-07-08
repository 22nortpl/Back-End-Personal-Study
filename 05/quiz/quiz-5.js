const arr = [10, 20, 30, 40, 50];

function printArray(arr){
  let index = 0;

  function nextElement(){
    if (index < arr.length){
      console.log(arr[index]);
      index++;
      setTimeout(nextElement, 1000);
    }
  }

  nextElement();
}

printArray(arr);