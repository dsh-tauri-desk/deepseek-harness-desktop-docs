import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'

const source = readFileSync(new URL('../snippets/downloads.jsx', import.meta.url), 'utf8')
// Exercise the shared component's grouping without a browser or JSX test dependency.
const start = source.indexOf('  const PLATFORM_ORDER')
const end = source.indexOf('  const releases =')
const { groupAssets, SNAPSHOT } = runInNewContext(
  `${source.slice(start, end)}; ({ groupAssets, SNAPSHOT })`,
  { lang: 'zh-CN' },
)

for (const release of SNAPSHOT) {
  const groups = groupAssets(release.assets)
  const items = groups.flatMap(group => group.items)
  assert.equal(items.length, release.assets.length)
  assert.equal(new Set(items.map(item => item.url)).size, release.assets.length)
  for (const group of groups) {
    assert.ok(group.items.every(item => item.bundle === group.bundle))
    assert.ok(group.items.every(item => /_bundle_/i.test(item.name) === group.bundle))
  }
}
assert.equal(groupAssets([]).length, 0)
const groups = groupAssets([
  { name: 'Desktop_BUNDLE_1.exe', url: 'bundle' },
  { name: 'Desktop_1.exe', url: 'standard' },
])
assert.equal(groups.find(group => !group.bundle).items[0].url, 'standard')
assert.equal(groups.find(group => group.bundle).items[0].url, 'bundle')
console.log('Download grouping checks passed')
