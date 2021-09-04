const number1 = (arr) => {
  let tempArr = []
  for(let i = 0; i<arr.length; i++){
    let isSubsctractMoreThanZero = false

    for(let j = 0; j<arr.length; j++){
      if(arr[i] - arr[j] >= 0){
        isSubsctractMoreThanZero = true
      }
      else{
        isSubsctractMoreThanZero = false
        break
      }
    }
    
    if(isSubsctractMoreThanZero){
      tempArr.push(arr[i])
    }
  }

  return tempArr
}

console.log(`Number 1: %O `, number1([3,1,4,2]))