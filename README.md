self-ip
-------

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

## License
MIT
