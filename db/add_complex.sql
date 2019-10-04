-- Add new complex
-- 1. create contact
-- 2. create complex

-- create temporary table to store uuid values
CREATE TABLE ids (
    name text PRIMARY KEY,
    value uuid
);

INSERT INTO ids (name, value)
  VALUES
  ( 'contact',  uuid_generate_v4() ),
  ( 'complex', uuid_generate_v4() );

INSERT INTO contacts (id, manager, address, phone, email, fax, website)
  VALUES
  ((SELECT value FROM ids WHERE name = 'contact'), :manager, :address, :phone, :email, :fax, :website);

INSERT INTO complexes (
  id, contact,
  name, description, "hasPrivateRoom", "hasMusicRoom", "hasWasher", "isHouse", "parkingSpaces", "processingFee",
  "securityDeposit", "vacancyStatus", "wardInfo", "floorPlans", gender, "minRent", "maxRent", "studentCapacity",
  "hasHotTub", "hasOfficeCenter", "hasShuttleService", "hasFitnessCenter", "hasCable", "hasAirConditioning",
  "hasWifi", "isPetFriendly", "hasExtraStorage"
)
  VALUES
  (
    (SELECT value FROM ids WHERE name = 'complex'),
    (SELECT value FROM ids WHERE name = 'contact'),
    :name,
    :description,
    :hasPrivateRoom,
    :hasMusicRoom,
    :hasWasher,
    :isHouse,
    :parkingSpaces,
    :processingFee,
    :securityDeposit,
    :vacancyStatus,
    :wardInfo,
    :floorPlans,
    :gender,
    :minRent,
    :maxRent,
    :studentCapacity,
    :hasHotTub,
    :hasOfficeCenter,
    :hasShuttleService,
    :hasFitnessCenter,
    :hasCable,
    :hasAirConditioning,
    :hasWifi,
    :isPetFriendly,
    :hasExtraStorage
  );

DROP TABLE ids;
