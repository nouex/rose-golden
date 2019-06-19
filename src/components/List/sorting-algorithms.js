
const sortingAlgorithms = {
  name: (arr) => arr.sort((a, b) => {
    let { name: nameA } = a, { name: nameB } = b
    nameA = nameA.toUpperCase()
    nameB = nameB.toUpperCase()

    if (nameA < nameB)
      return -1
    else if (nameA > nameB)
      return 1
    else
      return 0
  }),
  rent: (arr) => {
    return arr.sort((a, b) => {
      const { minRent: minRentA } = a, { minRent: minRentB } = b

      return minRentA - minRentB
    })
  },
  size: (arr) => arr.sort((a, b) => a.studentCapacity - b.studentCapacity)
}

export default sortingAlgorithms
