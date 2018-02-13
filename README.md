self-ip
-------

[![NPM](https://nodei.co/npm/self-ip.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/self-ip/)

[![npm](https://img.shields.io/npm/v/self-ip.svg?maxAge=2592000&style=shield)](https://www.npmjs.org/package/self-ip)
[![Build Status](https://travis-ci.org/pine/self-ip.svg?branch=master)](https://travis-ci.org/pine/self-ip)
[![dependencies Status](https://david-dm.org/pine/self-ip/status.svg)](https://david-dm.org/pine/self-ip)
[![devDependencies Status](https://david-dm.org/pine/self-ip/dev-status.svg)](https://david-dm.org/pine/self-ip?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/pine/self-ip.svg)](https://greenkeeper.io/)


Get self IP addresses

## Getting Started

```
$ yarn add self-ip
```

or

```
$ npm install --save self-ip
```

## Usage

```js
const ip = require('self-ip')

ip() // { v4: ['192.0.0.2'], v6: ['ffff::abcd:1234:1234:5678'] }
ip.v4() // ['192.0.0.2']
ip.v6() // ['ffff::abcd:1234:1234:5678']
```

## Reference
### `ip([ isLo = require('is-lo') ])`
- `isLo(addrs, name)` (function): check if it is a loopback network interface or not
  - default: [is-lo](https://github.com/pine/is-lo) module
- **Result** (Object): `{ v4: ['v4addr'], v6: ['v6addr'] }`

### `ip.v4([ isLo = require('is-lo') ])`
- `isLo(addrs, name)` (function): check if it is a loopback network interface or not
  - default: [is-lo](https://github.com/pine/is-lo) module
- **Result** (Array): `['v4addr']`

### `ip.v6([ isLo = require('is-lo') ])`
- `isLo(addrs, name)` (function): check if it is a loopback network interface or not
  - default: [is-lo](https://github.com/pine/is-lo) module
- **Result** (Array): `['v6addr']`

## License
MIT &copy; Pine Mizune
