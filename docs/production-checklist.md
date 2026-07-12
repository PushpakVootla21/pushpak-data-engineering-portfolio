# Production Checklist

Checked items are locally verified. Deployment-dependent items remain unchecked.

## Repository
- [x] Git working tree reviewed and initial source committed
- [x] Private files excluded from intended source set
- [x] Production branch confirmed as `main`
- [ ] Commit pushed
- [ ] GitHub repository verified

## Build
- [x] Dependency installation passed
- [x] ESLint passed
- [x] Type check passed
- [ ] Automated tests passed (no test suite exists)
- [x] Content validation passed during build
- [x] Production build passed

## Assets
- [x] Resume verified
- [ ] Profile photo verified (pending owner upload)
- [x] Architecture diagrams verified
- [ ] Favicon verified (not supplied)
- [ ] Social-preview image verified (not supplied)

## Vercel
- [ ] Correct project confirmed
- [ ] Preview deployment tested
- [ ] Production deployment completed
- [ ] Environment configuration verified in Vercel

## Domain
- [ ] Apex domain added
- [ ] `www` domain added
- [ ] DNS records configured
- [ ] Vercel domain verification passed
- [ ] HTTPS passed
- [ ] `www` redirect passed
- [ ] HTTP-to-HTTPS redirect passed

## SEO
- [ ] Production canonicals verified
- [ ] Production sitemap verified
- [ ] Production robots verified
- [x] Metadata implementation reviewed locally
- [ ] Production JSON-LD verified
- [ ] Production site confirmed indexable

## Functional
- [x] Local public routes tested
- [x] Local project pages tested
- [x] Navigation implementation reviewed
- [x] Project filters tested locally
- [x] Resume and PDF tested locally
- [x] Contact actions reviewed locally
- [x] Invalid routes tested locally

## Accessibility
- [x] Keyboard interaction implementation reviewed
- [x] Focus indicators reviewed
- [x] Heading hierarchy reviewed
- [x] Mobile-menu behaviour reviewed
- [x] Alt text reviewed
- [ ] Production 200% zoom testing completed

## Responsive
- [x] 320px tested locally
- [x] 375px tested locally
- [x] 768px tested locally
- [x] 1024px tested locally
- [x] 1440px tested locally

## Post-Deployment
- [ ] LinkedIn URL updated
- [ ] GitHub profile updated
- [ ] Search Console verification completed
- [ ] Sitemap submitted
- [ ] Final recruiter-facing production review completed
