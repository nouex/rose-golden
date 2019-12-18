'use strict';

const { min } = require("lodash/math")

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.API_KEY, // TODO: remove from source
  Promise: Promise
});

// NOTE: google maps didn't give me an address for some buildings so i just clicked on it and used
//  the coordinates given
const destinations =
[
  "43.820693,-111.783917", // snow
  "525 S Center St, Rexburg, ID 83460", // hart
  "43.819380,-111.781210", // smith
  "510 S Center St, Rexburg, ID 83460", // stc
  "43.815855,-111.779542", // hicnkley
  "43.817630,-111.784946", // biddulph
  "43.817342,-111.781194" // kimball
]

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
        destinations,
        mode: "walking"
      }).asPromise()

    const elementsOk = rows[0].elements.every(el => el.status === "OK")
    if (!elementsOk) throw new Error("not all elements status is 'OK'")

    return min(rows[0].elements, element => element.duration.value)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}


distanceToCampus(process.argv[2]).then((r, e) => console.log(r))
