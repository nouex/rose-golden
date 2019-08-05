import React from 'react';
import { stringifyMarker, stringifyQueries, makeUrl } from '.';

describe('checking env variables', () => {
  it('GOOGLE_API_KEY', () => {
    expect(process.env.GOOGLE_API_KEY).toBeDefined();
  });

  it('GOOGLE_MAP_URL', () => {
    expect(process.env.GOOGLE_MAP_URL).toBeDefined();
  });
});

describe('stringifyMarker()', () => {
  it('stringifies correctly', () => {
    const result = stringifyMarker({
      size: 'small',
      color: '0x4CAA82',
      label: '0',
    }, '174 College Ave, Rexburg ID');

    expect(result).toEqual('size:small%7Ccolor:0x4CAA82%7Clabel:0%7C174+College+Ave,+Rexburg+ID');
  });
});

describe('stringifyQueries', () => {
  it('stringifies correctly', () => {
    const result = stringifyQueries({
      key: process.env.GOOGLE_API_KEY,
      zoom: '13',
      scale: 'false',
      maptype: 'roadmap',
      format: 'png',
      visual_refresh: 'true',
      size: '600x400',
    }, '174 College Ave');

    expect(result).toEqual('key=AIzaSyCTIIF1-b667o-rL9nrkvioKiWjA8Ae7Q0&zoom=13&scale=false&maptype=roadmap&format=png&visual_refresh=true&size=600x400&center=174%20College%20Ave');
  });
});

describe('makeUrl()', () => {
  it('puts the url together', () => {
    const url = makeUrl({
      key: process.env.GOOGLE_API_KEY,
      zoom: '13',
      scale: 'false',
      maptype: 'roadmap',
      format: 'png',
      visual_refresh: 'true',
      size: '600x400',
    }, {
      size: 'small',
      color: '0x4CAA82',
      label: '0',
    }, '174 College Ave');

    expect(url).toEqual('https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCTIIF1-b667o-rL9nrkvioKiWjA8Ae7Q0&zoom=13&scale=false&maptype=roadmap&format=png&visual_refresh=true&size=600x400&center=174%20College%20Ave%20Rexburg%20ID&markers=size:small%7Ccolor:0x4CAA82%7Clabel:0%7C174+College+Ave+Rexburg+ID');
  });
});
