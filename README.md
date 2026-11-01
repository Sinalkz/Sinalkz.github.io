# sinalkz.github.io

Personal website of Ali Lakzaei, published with GitHub Pages at https://sinalkz.github.io.

## How it works

Every push to the `main` branch is published automatically, usually within a minute.
Plain HTML and CSS, no build step.

| File | What it is |
| --- | --- |
| `index.html` | The page: name, contact links, CV button |
| `assets/css/style.css` | Layout and colours (light and dark mode) |
| `assets/js/theme.js` | The light/dark toggle |
| `assets/icons.svg` | Icons ([Bootstrap Icons](https://icons.getbootstrap.com), MIT) |
| `assets/fonts/` | IBM Plex Sans and Mono (SIL Open Font License) |
| `Ali_Lakzaei_CV.pdf` | The CV behind the download button |

## Common updates

- **New CV:** replace `Ali_Lakzaei_CV.pdf` with the new file under the same name, then commit and push.
- **Custom domain later:** buy the domain, add a `CNAME` file containing just the domain
  (e.g. `alilakzaei.com`), set the DNS records GitHub lists in
  *Settings → Pages → Custom domain*, then tick *Enforce HTTPS*.
