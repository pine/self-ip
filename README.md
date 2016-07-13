self-ip
-------

[![npm](https://img.shields.io/npm/v/self-ip.svg?style=flat-square)](https://www.npmjs.org/package/self-ip)
[![Build Status](https://img.shields.io/travis/pine/self-ip/master.svg?style=flat-square)](https://travis-ci.org/pine/self-ip)
[![Dependency Status](https://img.shields.io/david/pine/self-ip.svg?style=flat-square)](https://david-dm.org/pine/self-ip)
[![devDependency Status](https://img.shields.io/david/dev/pine/self-ip.svg?style=flat-square)](https://david-dm.org/pine/self-ip#info=devDependencies)

Get self IP addresses

## Getting Started

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
### `ip(pattern)`
- `pattern` (RegExp): interface name pattern
  - Default: `/^(en|eth)/`
- **Result** (Object): `{ v4: ['v4addr'], v6: ['v6addr'] }`

### `ip.v4(pattern)`
- `pattern` (RegExp): interface name pattern
  - Default: `/^(en|eth)/`
- **Result** (Array): `['v4addr']`

### `ip.v6(pattern)`
- `pattern` (RegExp): interface name pattern
  - Default: `/^(en|eth)/`
- **Result** (Array): `['v6addr']`

## License
MIT
