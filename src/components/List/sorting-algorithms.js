import sortOn from 'sort-on';

// NOTE: sorOn return a **new** array, investigate if that affects rendering bc complexes will
// be a new prop (new arr) not the old one

// TODO: name should be in all caps or all lowercase before comparing

const algos = {
  asc: {
    name: (arr) => sortOn(arr, "name"),
    rent: (arr) => sortOn(arr, "minRent"),
    size: (arr) => sortOn(arr, "studentCapacity")
  },
  desc: { /* filled programatically */}
}

Object.keys(algos.asc).forEach((key) => {
  algos.desc[key] = arr => algos.asc[key](arr).reverse()
})

export default algos
