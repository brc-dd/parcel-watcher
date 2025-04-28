import type { UserConfig } from 'tsdown/config'

const config: UserConfig = {
  entry: 'index.ts',
  dts: { resolve: true },
  minify: true
}

export default config
