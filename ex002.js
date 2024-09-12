function TesteFibonacci(num) {
  let a = 0, b = 1

  if (num < 0) {
    return false
  }
  
  while (a < num) {
    let temp = a
    a = b
    b = temp + b
  }
  
  return a === num
}

console.log(TesteFibonacci(3))
console.log(TesteFibonacci(4))
