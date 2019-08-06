import React from 'react';
import PropTypes from 'prop-types';
import qs from 'querystring';

/* eslint-disable */
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const GOOGLE_MAP_URL = process.env.GOOGLE_MAP_URL
/* eslint-enable */
if (GOOGLE_API_KEY === undefined) throw new Error('Goole API Key is undefined');
if (GOOGLE_MAP_URL === undefined) throw new Error('GOOGLE_MAP_URL is undefined');

const marker = {
  size: 'tiny',
  color: '0x4CAA82',
  label: '0',

};

const queries = {
  key: GOOGLE_API_KEY,
  zoom: '13',
  scale: '2',
  maptype: 'roadmap',
  format: 'png',
  visual_refresh: 'true',
  size: '1280x225',
};

export const stringifyMarker = (o, address) => {
  const sep = '%7C';
  const markersString = qs.stringify(o, sep, ':');

  // apparently we don't URI encode, jsut replace spaces with `+`
  return markersString + sep + (address.replace(/\u0020/g, '+'));
};

export const stringifyQueries = (queries, address) => {
  queries.center = address;
  const querystring = qs.stringify(queries);
  return querystring;
};

export const makeUrl = (queries, marker, address) => {
  address += ' Rexburg ID';
  const markerQuery = `markers=${stringifyMarker(marker, address)}`;
  return `${GOOGLE_MAP_URL}?${stringifyQueries(queries, address)}&${markerQuery}`;
};

const StaticMap = ({ address }) => {
  const src = makeUrl(queries, marker, address);
  return (
    <img
      style={{
        marginTop: '50px',
        width: '100vw',
      }}
      width="1280"
      src={src}
      alt="Google Map of Rexburg, ID"
    />
  );
};

StaticMap.propTypes = {
  address: PropTypes.string.isRequired,
};

export default StaticMap;
