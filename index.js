function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for(i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
    const shoutedFacts = []

    let i = 0
    while(i < facts.length) {
      shoutedFacts.push(`${facts[i]}!!!`)
      i++
    }

    return shoutedFacts
}

function iLoveTheBeatles(n) {
  const love = []
  let i = 0
  do {
    love.push('${n}!')
  } while(i < 15)
  }

  return love
}
