const number2 = (arr, x) => {
  let tempArr = []
  for(let i = 0; i<arr.length; i++){
    let isDividedDoesntReturnX = false

    for(let j = 0; j<arr.length; j++){
      if(arr[i] / arr[j] === x){
        isDividedDoesntReturnX = false
        break
      }
      else{
        isDividedDoesntReturnX = true
      }
    }
    
    if(isDividedDoesntReturnX){
      tempArr.push(arr[i])
    }
  }

  return tempArr
}

console.log(`Number 2: %O `, number2([1,2,3,4],4))