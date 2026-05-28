# Deployment

This prototype is a static site. The simplest launch path is GitHub Pages.

## GitHub Pages

1. Create a GitHub repository, recommended name: `genenv-site`.
2. Push this folder to the repository.
3. In GitHub, open Settings -> Pages.
4. Set source to `Deploy from a branch`.
5. Choose branch `main` and folder `/root`.
6. Set custom domain to `genenv.ai`.

The `CNAME` file in this repo already contains:

```text
genenv.ai
```

## DNS For genenv.ai

Current check on 2026-05-27: `genenv.ai` is still pointing to Namecheap parking, so the DNS records below still need to be changed before the live site can resolve to GitHub Pages.

At the domain registrar/DNS provider, add GitHub Pages records:

```text
Type    Host    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     YOUR-GITHUB-USERNAME.github.io
```

After GitHub Pages detects the domain, enable `Enforce HTTPS`.

## Alternative: Vercel or Netlify

Vercel/Netlify are better if the site later needs a build step or serverless Notion sync. For this current static prototype, GitHub Pages is enough.
