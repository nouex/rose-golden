import compareFunc from 'compare-func';

// name, rent, size

const sortingAlgorithms = {
  name: (arr) => arr.sort(compareFunc("name")),
  rent: (arr) => arr.sort(compareFunc("rent")),
  // size: (arr) => arr.sort(compareFunc("studentCapacity"))
}

export default sortingAlgorithms
