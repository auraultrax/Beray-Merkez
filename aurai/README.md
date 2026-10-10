# AURAI — Beray AI

AURAI is a Turkish-first AI chat product. It checks a small built-in FAQ first; when there is no match, a server-side model call can use webSearchPrime to research current information, synthesize sources, and return one answer inside the same AURAI chat. It does not open Chrome, embed a Google results page, or redirect the visitor.

## Deploy without Vercel

This folder is designed for Cloudflare Pages. GitHub Pages serves static files only; it cannot run the private server-side endpoint or safely store the API key.

1. In Cloudflare Pages, connect the GitHub repository.
2. Set **Root directory** to `aurai`.
3. Under **Settings → Variables and Secrets**, create a secret named `ZAI_API_KEY` and enter the Z.AI API key.
4. Deploy. Open the published site and ask a question not covered by the built-in FAQ.

The key is never placed in frontend files or the public repository. API access may consume the provider account's quota or balance.

## Domestic technology roadmap

The interface, product logic, and Beray AI/AURAI identity are the project’s own. This first working prototype uses an external GLM model/search provider, so it should not be described as a fully domestic foundation model. A future Turkish-hosted open-weight model or a Beray AI-trained model can replace the provider behind the same endpoint.
