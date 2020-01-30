function formatAmenityScore(complex, amenities) {
  const levels = [ "😊", "🙂", "😐", "🙁", "😞" ].reverse()
  amenities = amenities.filter(amenity => complex[amenity] !== null)
  // const points = amenities.reduce((accum, amenity) => accum + (complex[amenity] === true), 0);
  const points = amenities.filter(amenity => complex[amenity] === true).length
  const base = 10
  const bracketIncrement = base / (levels.length -1) // -1 to make the levels.length exclusive
  const adjustedPoints = +((points / amenities.length) * base).toFixed(0)
  const index = Math.floor(adjustedPoints / bracketIncrement)
  // NOTE: leniency is how nice we wanna be and up the score, it is a final tweak to the scoring system
  // that is mostly artificial
  const leniency = index < levels.length -1 ? 1 : 0
  return levels[index + leniency]
}


export default formatAmenityScore;
