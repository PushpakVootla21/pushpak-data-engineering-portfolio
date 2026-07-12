# Production Deployment

## Release Record

| Field | Status |
| --- | --- |
| Repository | `https://github.com/PushpakVootla21/pushpak-data-engineering-portfolio` |
| Production branch | `main` confirmed and created locally |
| Package manager | npm with `package-lock.json` |
| Install command | `npm install` |
| Build command | `npm run build` |
| Environment variable | `NEXT_PUBLIC_SITE_URL=https://pushpakvootla.cloud` |
| Vercel project name | Pending owner action |
| Production deployment URL | Pending owner action |
| Primary custom domain | `https://pushpakvootla.cloud` confirmed; currently serves the old Canva portfolio and is approved for replacement after verification |
| Secondary redirect domain | `https://www.pushpakvootla.cloud` (preferred, not yet verified) |
| DNS status | Pending owner action; no records have been guessed |
| HTTPS status | Pending DNS and Vercel verification |
| Resume | Generated and verified at `/resume/pushpak-vootla-resume.pdf` |
| Profile image | Pending owner upload |
| Architecture assets | Seven SVG files generated and locally verified |
| Sitemap | `/sitemap.xml`; production origin requires the environment variable |
| Robots | `/robots.txt`; production indexing requires `VERCEL_ENV=production` |
| Deployment date | Pending |
| Git commit hash | Release status commit `443e63b` pushed on `main`; documentation status update follows |
| Known warnings | No automated test suite; favicon, social preview, final owner resume, GitHub repository and Vercel account pending |

## Vercel Handoff

1. Confirm the intended GitHub repository and production branch. Add the remote only after verifying ownership.
2. Commit and push the reviewed source without `.env`, `.next`, `node_modules`, local downloads or private documents.
3. In the authorised Vercel account, reuse the correct existing project or import the confirmed GitHub repository. Do not create a duplicate project.
4. Confirm the owner/team, repository, production branch, root directory and Next.js framework detection.
5. Use npm, `npm install`, `npm run build` and Next.js output defaults.
6. Set `NEXT_PUBLIC_SITE_URL` to `https://pushpakvootla.cloud` for Production. This value is public and contains no secret.
7. Create and smoke-test a preview deployment before triggering Production.
8. Add `pushpakvootla.cloud` and `www.pushpakvootla.cloud` only in the confirmed project.
9. Apply only the exact DNS records displayed by Vercel. Preserve MX, SPF, DKIM, DMARC and unrelated subdomain records.
10. Make the apex domain primary and configure `www` as a permanent redirect only after both domains are verified.
11. Verify DNS, certificate validity, HTTP-to-HTTPS behaviour, redirect hops, canonical URLs, sitemap and robots before announcing launch.

No `vercel.json` is required for the current standard Next.js deployment. Local `.vercel` metadata must remain untracked.

## GitHub Owner Commands

Run only after replacing the placeholder with the confirmed repository URL:

```bash
git add README.md .env.example .gitignore docs eslint.config.mjs next-env.d.ts next.config.ts package-lock.json package.json postcss.config.mjs public scripts src tailwind.config.ts tsconfig.json
git status --short
git commit -m "Prepare Azure Data Engineering portfolio for production deployment"
git remote add origin <confirmed-github-repository-url>
git push -u origin <confirmed-production-branch>
```

Do not stage `.env`, `.next`, `node_modules`, `.DS_Store`, `*.tsbuildinfo`, private exports or browser downloads.

## Search Console Handoff

After the apex domain is live:

1. Add the domain property `pushpakvootla.cloud` in Google Search Console.
2. Use the DNS verification record supplied by Google; do not guess it.
3. Submit `https://pushpakvootla.cloud/sitemap.xml` after verification.
4. Request indexing for the homepage, Projects page and main case studies.
5. Monitor coverage rather than assuming immediate indexing.

## Professional Profile Owner Actions

- [ ] Update LinkedIn portfolio URL
- [ ] Update LinkedIn Featured section
- [ ] Update GitHub profile README
- [ ] Update GitHub repository About URL
- [ ] Confirm the resume portfolio URL
- [ ] Update job portal profiles
- [ ] Update email signature

Use `https://pushpakvootla.cloud` only after production and HTTPS verification.

## Rollback

1. Identify the previous known-good deployment in Vercel deployment history.
2. Promote it only when rollback is necessary.
3. Preserve Git history and fix the source issue in a new commit.
4. Redeploy the corrected branch and repeat the production smoke test.
5. Do not force push or alter DNS as the first response to application-code failure.
