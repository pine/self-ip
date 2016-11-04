self-ip
-------

[![npm](https://img.shields.io/npm/v/self-ip.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.org/package/self-ip)
[![Build Status](https://img.shields.io/travis/pine/self-ip/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/pine/self-ip)
[![Dependency Status](https://img.shields.io/david/pine/self-ip.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/self-ip)
[![devDependency Status](https://img.shields.io/david/dev/pine/self-ip.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/self-ip?type=dev)

Get self IP addresses

## Getting Started

```
$ npm install --save self-ip
```

or

```
$ yarn add self-ip
```

## Usage

```js
const ip = require('self-ip')

ip() // { v4: ['192.0.0.2'], v6: ['ffff::abcd:1234:1234:5678'] }
ip.v4() // ['192.0.0.2']
ip.v6() // ['ffff::abcd:1234:1234:5678']
```

## Reference
### `ip(isLo)`
- `isLo(addrs, name)` (function): check if it is a loopback network interface or not
  - default: [is-lo](https://github.com/pine/is-lo) module
- **Result** (Object): `{ v4: ['v4addr'], v6: ['v6addr'] }`

### `ip.v4(isLo)`
- `isLo(addrs, name)` (function): check if it is a loopback network interface or not
  - default: [is-lo](https://github.com/pine/is-lo) module
- **Result** (Array): `['v4addr']`

### `ip.v6(isLo)`
- `isLo(addrs, name)` (function): check if it is a loopback network interface or not
  - default: [is-lo](https://github.com/pine/is-lo) module
- **Result** (Array): `['v6addr']`

## License
MIT
