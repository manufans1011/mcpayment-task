const number3 = (words, x) => {
  let splittedWords = words.split(" ")
  let tempArr = []
  for(let i = 0; i<splittedWords.length; i++){
    if(splittedWords[i].length == x){
      tempArr.push(splittedWords[i])
    }
  }

  return tempArr
}

console.log(`Number 3: %O `, number3("souvenir loud four lost", 4))