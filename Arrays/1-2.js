// const isPermutation = (s, t) => {
// 	if(s.length !== t.length) return false
// 	const letterOccurance = new Array(128)
// 	letterOccurance.fill(0)
// 	for(let i = 0; i < s.length; i ++){
//     letterOccurance[s.charCodeAt(i)] ++
//   }
// 	for(let i = 0; i< t.length; i ++){
//     	letterOccurance[t.charCodeAt(i)]--
//     	if(letterOccurance[t.charCodeAt(i)] !== 0){
//     		return false
//     }
//   }
//   return true
// }

const isPermutation = (s, t) => {
  if (s.length !== t.length) return false
  const letterOccurance = {}
  for (let i = 0; i < s.length; i++){
    if (letterOccurance[s.charCodeAt(i)]) letterOccurance[s.charCodeAt(i)]++
    else letterOccurance[s.charCodeAt(i)] = 1
  }
  for (let i = 0; i < t.length; i++){
    if (!letterOccurance[t.charCodeAt(i)]) return false
    if (letterOccurance[t.charCodeAt(i)]) letterOccurance[t.charCodeAt(i)]--
  }
  return !(Object.values(letterOccurance).some(el => {
    return el !== 0
  }))
}