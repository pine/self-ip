import os from 'node:os'
import type { NetworkInterfaceInfo } from 'node:os'
import { isLo } from 'is-lo'

type LoopbackChecker =
    (info: NetworkInterfaceInfo[], name: string) => boolean

interface Result {
    v4: string[]
    v6: string[]
}

export function ip(checkerOpt?: LoopbackChecker): Result {
    const interfaces = os.networkInterfaces()
    console.log(interfaces)
    const names = Object.keys(interfaces)
    const checker: LoopbackChecker = checkerOpt ?? ((info, name) => isLo(info))

    const v4: string[] = []
    const v6: string[] = []

    names.forEach(name => {
        const addrs = interfaces[name]
        if (!addrs) {
            return
        }

        if (!checker(addrs, name)) {
            addrs.forEach(addr => {
                if (addr.family === 'IPv4') {
                    v4.push(addr.address)
                } else if (addr.family === 'IPv6') {
                    v6.push(addr.address)
                }
            })
        }
    })

    return { v4, v6 }
}

export function ipv4(checkerOpt?: LoopbackChecker): string[] {
    return ip(checkerOpt).v4
}

export function ipv6(checkerOpt?: LoopbackChecker): string[] {
    return ip(checkerOpt).v6
}
