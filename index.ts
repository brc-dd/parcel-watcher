import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { platform, arch } from 'node:process'

const require = createRequire(import.meta.url)

let name = `@parcel/watcher-${platform}-${arch}`
if (platform === 'linux') name += '-glibc'

let binding: any
try {
  binding = require(name)
} catch (err: any) {
  if (err?.code !== 'MODULE_NOT_FOUND') throw err
  throw new Error(`No prebuilt binary of @parcel/watcher found. Tried ${name}.`)
}

export async function subscribe(
  dir: string,
  fn: (
    err: Error | null,
    events: { path: string; type: 'create' | 'update' | 'delete' }[]
  ) => unknown,
  opts: { ignoreGlobs?: string[] }
): Promise<{ unsubscribe: () => void }> {
  //

  dir = resolve(dir)
  await binding.subscribe(dir, fn, opts)

  return {
    unsubscribe(): void {
      return binding.unsubscribe(dir, fn, opts)
    }
  }
}
