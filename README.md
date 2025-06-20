# `@brc-dd/watcher`

This is an opinionated repackage of `@parcel/watcher` with the following changes:

- TS + ESM only - CJS and Flow support is dropped
- Dropped support for 32-bit systems and musl builds
- Only `subscribe` function is exported
- C++ source is not distributed
- Glob support is dropped, pass the regex directly

## Usage

```sh
npm add @brc-dd/watcher
```

```ts
import { subscribe } from '@brc-dd/watcher'

// subscribe to events
const subscription = await watcher.subscribe(
  process.cwd(),
  (err, events) => {
    console.log(events)
  },

  // optional:
  { ignoreGlobs: [/^(?:.*?\/)?(?:\.git|node_modules)(?:\/.*)?$/.source] }
)

// later on...
await subscription.unsubscribe()
```

On Deno:

```ts
import { subscribe } from 'npm:@brc-dd/watcher'

const subscription = await watcher.subscribe(Deno.cwd() /*, ... */)

addEventListener('unload', subscription.unsubscribe)
```

## License

The code is derived from `@parcel/watcher` and uses its binaries, which are licensed under the [MIT License](https://github.com/parcel-bundler/watcher/blob/master/LICENSE).

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/brc-dd/static/sponsors.svg">
    <img alt="Sponsors" src="https://cdn.jsdelivr.net/gh/brc-dd/static/sponsors.svg"/>
  </a>
</p>
