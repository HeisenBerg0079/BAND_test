function bossBabyRevenge(sequence) {
  let shots = 0;
  let revenge = 0;
  let boss = false;
  let kid = false
  if (sequence[0] !== "S") {
    return "Bad boy"
  } else {
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] === "S") {
        shots += 1
      } else if(kid !== true) {
        boss = true
        revenge += 1
        if (revenge > shots && boss === true) {
          return "Bad boy"
        } else if (revenge <= shots && boss === true && sequence[i] !== sequence[i+1]) {
          boss = false
          kid = true
          shots = 0
          revenge = 0
        }
      } else {
        return "Good boy"
      }
    }
    return "Good boy"
  }
}
console.log(bossBabyRevenge("SRSSRRR"));   
console.log(bossBabyRevenge("RSSRR"));
console.log(bossBabyRevenge("SSSRRRRS"));
console.log(bossBabyRevenge("SRRSSR"));
console.log(bossBabyRevenge("SSRSRRR"));
