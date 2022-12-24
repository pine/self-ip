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
    const checker: LoopbackChecker = checkerOpt ?? ((info, name) => isLo(info))
    const interfaces = os.networkInterfaces()
    const names = Object.keys(interfaces)

    const v4: string[] = []
    const v6: string[] = []

    names.forEach(name => {
        const info = interfaces[name]
        if (!info) {
            return
        }

        if (!checker(info, name)) {
            info.forEach(v => {
                if (v.family === 'IPv4') {
                    v4.push(v.address)
                } else if (v.family === 'IPv6') {
                    v6.push(v.address)
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
