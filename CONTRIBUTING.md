# Contributing to the documentation

Thank you for improving DeepSeek Harness Desktop documentation.

## Content workflow

1. Verify current source and release assets before changing feature claims.
2. Update the Chinese source page in `zh-CN/`, then its English mirror in `en/`.
3. Keep page paths, navigation, sections, versions, and examples aligned.
4. Use relative same-locale links without extensions, such as `../guides/plugins`.
5. Run `pnpm check` before opening a pull request.

## Writing style

- Lead with the task a reader wants to complete.
- Use short steps, meaningful headings, and copyable commands.
- Distinguish release behavior from debug behavior.
- Do not promise behavior that is not backed by the application source.
- Introduce acronyms and avoid unexplained internal names.
- Add descriptive alt text when real images are introduced.

## Screenshot policy

Until reviewed product images are ready, preserve the required HTML comment exactly
inside an MDX JSX comment:

```mdx
{/* <!-- [Concise description](/images/en/path-to-image.webp) --> */}
```

The inner `<!-- [description](path) -->` text must remain unchanged. The JSX wrapper is
required because current Mint MDX rejects a bare HTML comment. Do not commit mock
screenshots as if they represented the released application.

## Translation checklist

- Preserve commands, paths, configuration keys, and error identifiers exactly.
- Translate navigation labels, prose, callouts, and image descriptions.
- Keep code examples and version numbers synchronized.
- Verify every page appears in the matching `docs.json` language navigation.
