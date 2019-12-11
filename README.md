# Portfolio

## SSR
Static pre-rendering has been setup to help SEO and speed while being able to serve the application
with a simple web server. It can be compiled and served locally with:

    npm run build:prerender && npm run serve:prerender

Files that have to be served can then be found in `dist/browser`.

## Analytics and tracking
Analytics and tracking is done with [Insights](https://getinsights.io/), a privacy-focused analytics
service. It's open source, it does not use any cookies and it respects the __Do not track__ option.
