function patterns(str) {

let all = [[]]

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0' || str[i] === '1') {
      for (let j = 0; j < all.length; j++) {
        all[j].push(str[i])
      }
    } else if (str[i] === '?') {

      const len = all.length

      for (let k = 0; k < len; k++) {
      all.push(all[k].slice())
      }

      const newLen = all.length

      for (let l = 0; l < newLen; l++) {
        if(l < all.length/2) {
          all[l].push("0")
        } else {
          all[l].push("1")
        }
      }
    }
  }

  return all

}

function patternsRecursion(str, all) {

  if (str.length < 1) {
    return all
  }

    if (str[0] === '0' || str[0] === '1') {
      for (let j = 0; j < all.length; j++) {
        all[j].push(str[0])
      }
    }
    
    if (str[0] === '?') {
      const len = all.length
      for (let l = 0; l < len; l++) {
        all.push(all[l].slice())
      }

      for (let l = 0; l < all.length; l++) {
        if(l < all.length/2) {
          all[l].push("0")
        } else {
          all[l].push("1")
        }

      }
    }

    return patternsRecursion(str.slice(1), all)
  }
  
patterns('10?1?', [[]]);
patternsRecursion('10?1?', [[]]);
