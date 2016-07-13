'use strict'

const test = require('ava')
const proxyquire = require('proxyquire')

const ip = proxyquire('../lib/self-ip', {
  os: {
    networkInterfaces () {
      return require('./interfaces.json')
    },
  },
})

test('ip', t => {
  const ips = ip()
  t.deepEqual(ips.v4.sort(), [
    '172.31.27.140',
    '192.168.0.2',
  ])
  t.deepEqual(ips.v6.sort(), [
    'ff88::400:fff:ff55:dddd',
    'ffff::abcd:1234:1234:5678',
    'ffff::abcd:1234:1234:6789',
    'ffff::abcd:1234:1234:7890',
  ])
})

test('ip.v4', t => {
  t.deepEqual(ip.v4().sort(), [
    '172.31.27.140',
    '192.168.0.2',
  ])
  t.deepEqual(ip.v4(/./).sort(), [
    '127.0.0.1',
    '172.31.27.140',
    '192.168.0.2',
  ])
})

test('ip.v6', t => {
  t.deepEqual(ip.v6().sort(), [
    'ff88::400:fff:ff55:dddd',
    'ffff::abcd:1234:1234:5678',
    'ffff::abcd:1234:1234:6789',
    'ffff::abcd:1234:1234:7890',
  ])
  t.deepEqual(ip.v6(/./).sort(), [
    '::1',
    'ff88::400:fff:ff55:dddd',
    'ffff::1',
    'ffff::abcd:1234:1234:5678',
    'ffff::abcd:1234:1234:6789',
    'ffff::abcd:1234:1234:7890',
  ])
})
