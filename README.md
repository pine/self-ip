# self-ip &nbsp;[![npm](https://img.shields.io/npm/v/self-ip.svg?maxAge=2592000&style=shield)](https://www.npmjs.org/package/self-ip) [![build](https://github.com/pine/self-ip/actions/workflows/build.yml/badge.svg)](https://github.com/pine/self-ip/actions/workflows/build.yml) [![License](https://img.shields.io/github/license/emoji-gen/clone-into.svg)](LICENSE)

Get self IP addresses

## Features
- Supports TypeScript
- Supports both CommonJS and ESModules

## Getting Started

```sh
$ npm install --save self-ip # for npm users
$ yarn add self-ip           # for yarn users
```

## Breaking Changes
There are breaking changes in `v1.0.0`. See [the release note](https://github.com/pine/self-ip/releases/tag/v1.0.0) for more details.

## Usage
### ESModules

```js
import { ip, ipv4, ipv6 } from 'self-ip'

ip()
// ==> { v4: ['192.0.0.2'], v6: ['ffff::abcd:1234:1234:5678'] }

ipv4()
// ==> ['192.0.0.2']

ipv6()
// ==> ['ffff::abcd:1234:1234:5678']
```

### CommonJS


```js
const { ip, ipv4, ipv6 } = require('self-ip')

ip()
// ==> { v4: ['192.0.0.2'], v6: ['ffff::abcd:1234:1234:5678'] }

ipv4()
// ==> ['192.0.0.2']

ipv6()
// ==> ['ffff::abcd:1234:1234:5678']
```

## Reference
### `ip([ checker ])`
Get both IPv4 and IPv6 self-addresses

- `checker(addrs, name)` (function): check if it is a loopback network interface or not
  - default: [is-lo](https://github.com/pine/is-lo) module
- **Result** (Object): `{ v4: ['v4addr'], v6: ['v6addr'] }`

### `ipv4([ checker ])`
Get IPv4 self-addresses

- `checker(addrs, name)` (function): check if it is a loopback network interface or not
  - default: [is-lo](https://github.com/pine/is-lo) module
- **Result** (Array): `['v4addr']`

### `ipv6([ checker ])`
Get IPv6 self-addresses

- `checker(addrs, name)` (function): check if it is a loopback network interface or not
  - default: [is-lo](https://github.com/pine/is-lo) module
- **Result** (Array): `['v6addr']`

## License
MIT &copy; [Pine Mizune](https://profile.pine.moe)
