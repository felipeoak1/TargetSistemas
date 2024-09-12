function stringInvertida(str){
  let newStr = ''

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }

  return newStr
}

const strInversa = stringInvertida("Obrigado pela oportunidade!")
console.log(strInversa)