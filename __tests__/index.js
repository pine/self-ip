'use strict'
/* global jest, test, expect */

const os = require('os')
const ip = require('../index.js')
const interfaces = require('./interfaces.json')

jest.mock('os')
os.networkInterfaces.mockReturnValue(interfaces)

test('ip', () => {
  const ips = ip()
  expect(ips.v4.sort()).toEqual([
    '172.31.27.140',
    '192.168.0.2',
  ])
  expect(ips.v6.sort()).toEqual([
    'ff88::400:fff:ff55:dddd',
    'ffff::abcd:1234:1234:5678',
    'ffff::abcd:1234:1234:6789',
    'ffff::abcd:1234:1234:7890',
  ])
})

test('ip.v4', () => {
  expect(ip.v4().sort()).toEqual([
    '172.31.27.140',
    '192.168.0.2',
  ])
  expect(ip.v4(() => false).sort()).toEqual([
    '127.0.0.1',
    '172.31.27.140',
    '192.168.0.2',
  ])
})

test('ip.v6', () => {
  expect(ip.v6().sort()).toEqual([
    'ff88::400:fff:ff55:dddd',
    'ffff::abcd:1234:1234:5678',
    'ffff::abcd:1234:1234:6789',
    'ffff::abcd:1234:1234:7890',
  ])
  expect(ip.v6(() => false).sort()).toEqual([
    '::1',
    'ff88::400:fff:ff55:dddd',
    'ffff::1',
    'ffff::abcd:1234:1234:5678',
    'ffff::abcd:1234:1234:6789',
    'ffff::abcd:1234:1234:7890',
  ])
})
