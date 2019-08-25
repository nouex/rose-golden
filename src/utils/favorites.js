export function toggle(complexId, isFavorite) {
 // no duplicated: check to see if it already exists beforea dding
 const localStorageFavs = localStorage.getItem("favorites")

 if (localStorageFavs === null) {
   if (isFavorite) {
     localStorage.setItem("favorites", complexId)
   } else {
     void(0)
   }
 } else {
   if (isFavorite) {
     localStorage.setItem("favorites", localStorageFavs + `:${complexId}`)
   } else {
     const localStorageFavsArr = localStorageFavs.split(":")

     if (localStorageFavsArr.length === 1) {
       localStorage.removeItem("favorites")
     } else {
       const indexToRemoveAt = localStorageFavsArr.findIndex(favId => favId === complexId)
       localStorageFavsArr.splice(indexToRemoveAt, 1)
       localStorage.setItem("favorites", localStorageFavsArr.join(":"))
     }
   }
 }
}

export function getValue(complexId) {
  let val = false
  const localStorageFavs = localStorage.getItem("favorites")

  if (localStorageFavs !== null) {
    if (localStorageFavs.split(":").find(id => id === complexId)) {
      val = true
    }
  }

  return val
}
