'use strict'

const os = require('os')
const isLoDefault = require('is-lo')

function ip (isLo) {
  isLo = isLo || isLoDefault

  const interfaces = os.networkInterfaces()
  const names = Object.keys(interfaces)

  const v4addrs = []
  const v6addrs = []

  names.forEach(name => {
    const addrs = interfaces[name]

    if (!isLo(addrs, name)) {
      addrs.forEach(addr => {
        if (addr.family === 'IPv4') {
          v4addrs.push(addr.address)
        } else if (addr.family === 'IPv6') {
          v6addrs.push(addr.address)
        }
      })
    }
  })

  return {
    v4: v4addrs,
    v6: v6addrs,
  }
}

ip.v4 = function () {
  return ip.apply(null, arguments).v4
}

ip.v6 = function () {
  return ip.apply(null, arguments).v6
}

module.exports = ip
