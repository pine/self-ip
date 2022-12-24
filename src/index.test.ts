'use strict'

import os from 'node:os'
import sortBy from 'lodash.sortby'
import { ip, ipv4, ipv6 } from './index'

jest.mock('node:os')

const networkInterfaces =
    os.networkInterfaces as jest.MockedFunction<typeof os.networkInterfaces>
networkInterfaces.mockReturnValue({
    lo0:[
        {
            address: "::1",
            netmask: "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
            family: "IPv6",
            mac: "00:00:00:00:00:00",
            scopeid: 0,
            internal: true,
            cidr: null,
        },
        {
            address: "127.0.0.1",
            netmask: "255.0.0.0",
            family: "IPv4",
            mac: "00:00:00:00:00:00",
            internal: true,
            cidr: null,
        },
        {
            address: "ffff::1",
            netmask: "ffff:ffff:ffff:ffff::",
            family: "IPv6",
            mac: "00:00:00:00:00:00",
            scopeid: 1,
            internal: true,
            cidr: null,
        }
    ],
    en0:[
        {
            address: "ffff::abcd:1234:1234:5678",
            netmask: "ffff:ffff:ffff:ffff::",
            family: "IPv6",
            mac: "ff:ff:00:00:00:00",
            scopeid: 4,
            internal: false,
            cidr: null,
        },
        {
            address: "192.168.0.2",
            netmask: "255.255.255.0",
            family: "IPv4",
            mac: "ff:ff:00:00:00:00",
            internal: false,
            cidr: null,
        },
        {
            address: "ffff::abcd:1234:1234:6789",
            netmask: "ffff:ffff:ffff:ffff::",
            family: "IPv6",
            mac: "ff:ff:00:00:00:00",
            scopeid: 0,
            internal: false,
            cidr: null,
        },
        {
            address: "ffff::abcd:1234:1234:7890",
            netmask: "ffff:ffff:ffff:ffff::",
            family: "IPv6",
            mac: "ff:ff:00:00:00:00",
            scopeid: 0,
            internal: false,
            cidr: null,
        }
    ],
    "eth0": [
        {
            address: "172.31.27.140",
            netmask: "255.255.240.0",
            family: "IPv4",
            mac: "06:06:06:06:06:06",
            internal: false,
            cidr: null,
        },
        {
            address: "ff88::400:fff:ff55:dddd",
            netmask: "ffff:ffff:ffff:ffff::",
            family: "IPv6",
            mac: "00:01:01:01:01:01",
            scopeid: 2,
            internal: false,
            cidr: null,
        }
    ]
})

test('ip', () => {
  const ips = ip()
  expect(sortBy(ips.v4)).toEqual([
    '172.31.27.140',
    '192.168.0.2',
  ])
  expect(sortBy(ips.v6)).toEqual([
    'ff88::400:fff:ff55:dddd',
    'ffff::abcd:1234:1234:5678',
    'ffff::abcd:1234:1234:6789',
    'ffff::abcd:1234:1234:7890',
  ])
})

test('ip.v4', () => {
  expect(sortBy(ipv4())).toEqual([
    '172.31.27.140',
    '192.168.0.2',
  ])
  expect(sortBy(ipv4(() => false))).toEqual([
    '127.0.0.1',
    '172.31.27.140',
    '192.168.0.2',
  ])
})

test('ip.v6', () => {
  expect(sortBy(ipv6())).toEqual([
    'ff88::400:fff:ff55:dddd',
    'ffff::abcd:1234:1234:5678',
    'ffff::abcd:1234:1234:6789',
    'ffff::abcd:1234:1234:7890',
  ])
  expect(sortBy(ipv6(() => false))).toEqual([
    '::1',
    'ff88::400:fff:ff55:dddd',
    'ffff::1',
    'ffff::abcd:1234:1234:5678',
    'ffff::abcd:1234:1234:6789',
    'ffff::abcd:1234:1234:7890',
  ])
})
