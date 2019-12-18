'use strict';

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.API_KEY, // TODO: remove from source
  Promise: Promise
});

if (process.env.API_KEY === undefined) {
  console.log("must set API_KEY first")
  process.exit(1)
}

if (process.argv[2] === undefined) {
  console.log("must suppply apartment address")
  process.exit(1)
}

async function distanceToCampus(address) {
  try {
    const { json: { rows }} =
      await googleMapsClient.distanceMatrix({
        origins: [address],
        destinations: [ "43.818460,-111.782175" ], // The Crossroads
        mode: "walking"
      }).asPromise()

    // console.log(require("util").inspect(rows[0], {color: true, depth: 5, showHidden: false}))

    const elementsOk = rows[0].elements.every(el => el.status === "OK")
    if (!elementsOk) throw new Error("not all elements status is 'OK'")

    return rows[0].elements.reduce((acc, cur) => {
      if (acc.duration.value <= cur.duration.value) return acc
      else return cur
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}


distanceToCampus(process.argv[2]).then((r, e) => console.log(r))
