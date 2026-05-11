# vaamx.github.io

Personal portfolio for Victor Amaya — Enterprise AI Engineer.
Single-page static site, no build step.

→ Live at **https://vaamx.github.io**

## Local preview

```sh
python3 -m http.server 4000 --directory .
# then open http://localhost:4000
```

## Layout

```
.
├── index.html              # main page
├── style.css               # styling
├── app.js                  # nav, filter, modal, reveal
├── articles/               # long-form article pages
│   ├── article.css
│   ├── gkr-sumcheck-practitioner-guide.html
│   ├── verifying-14b-on-chain.html
│   ├── cuda-kernels-m31.html
│   ├── verifiable-ai-agents-cannes.html
│   └── industry-40-buyers.html
└── assets/
    ├── cv.pdf              # current résumé
    ├── profile.png         # avatar
    ├── favicon.svg
    ├── og-cover.jpg        # social-card image
    ├── projects/*.jpg      # portfolio tile thumbnails
    └── articles/*.jpg      # article hero images
```

## Refreshing the résumé

The LaTeX source for the CV lives one level up at `../cv.tex` in
the working repo. To update:

```sh
xelatex cv.tex
cp cv.pdf site/assets/cv.pdf
```

## License

Content © Victor Amaya. Code is provided as-is for portfolio purposes.
