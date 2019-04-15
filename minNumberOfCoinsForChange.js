function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
	
	if (n === 0) {
		return n
	}
	
	let numOfCoins = -1
	let potentialNumOfCoins = 0
  let tempN = n
	
	for (let i = denoms.length - 1; i >= 0; i--) {
    let curDenom = denoms[i]
		
		if (curDenom <= n) {
    while (tempN - curDenom >= 0) {
		  tempN = tempN - curDenom
		  potentialNumOfCoins++
  }
		
		if (tempN === 0 && (numOfCoins === -1 || potentialNumOfCoins < numOfCoins)) {
		numOfCoins = potentialNumOfCoins
    potentialNumOfCoins = 0
    tempN = n
		}
	}
}
	
	
	return numOfCoins
}

minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1, 60,75])

 minNumberOfCoinsForChange(9, [3, 5])
