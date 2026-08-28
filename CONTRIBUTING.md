# Contributing to the documentation

Thank you for improving DeepSeek Harness Desktop documentation.

## Content workflow

1. Update the English source page in `en/`.
2. Apply the equivalent change to the mirrored page in `zh-CN/`.
3. Keep page paths and section coverage aligned across languages.
4. Use Mint site routes without locale prefixes or file extensions, for example
   `/guides/plugins`. `navigation.languages` resolves the matching locale page.
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
