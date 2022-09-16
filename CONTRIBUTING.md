# Kontribusi

Berikut adalah tahap untuk berkontribusi pada repository ini

## Melakukan clone pada repository

`git clone git@github.com:synrgy-5-fsw-1-cihuy/belajar.git`

atau

`git clone https://github.com/synrgy-5-fsw-1-cihuy/belajar.git`

## Membuat branch baru

Contoh:

`git checkout -b tambah-reactjs`

## Menambahkan dokumentasi baru

Penulisan menggunakan format markdown, folder menyesuaikan chapter dan topik

[Markdown](https://www.markdownguide.org/)

Struktur folder dan file (mungkin bisa berubah, tolong kasih saran saya gak pandai manage)

```
.
├── README.md
├── CONTRIBUTING.md
├── chapter-01/
│   ├── 01html/
│   │   └── README.md
│   ├── 02css/
│   │   └── README.md
│   ├── 03bootstrap/
│   │   └── README.md
│   └── 04git/
│       └── README.md
└── chapter-02/
    └── 01javascript/
        ├── basic/
        │   ├── variable/
        │   │   └── README.md
        │   └── README.md
        ├── dom/
        │   └── README.md
        └── es6/
            └── README.md
```

Editor bisa menggunakan [Dillinger](https://dillinger.io/) agar bisa langsung hasilnya

## Melakukan add dan commit

Contoh:

`git add .`

lalu

`git commit -m "docs: add reactjs"`

atau

`git commit -m "add: menambahkan reactjs"`

## Melakukan pull sebelum push

Melakukan pull agar menghindari kemungkinan conflict
`git pull origin master`

## Melakukan push ke branch baru

Contoh:

`git push origin tambah-reactjs`

## Melakukan pull request ke branch master

Pull request dapat dilakukukan melalui link berikut:

[Pull Request](https://github.com/synrgy-5-fsw-1-cihuy/synrgy-roni-fsw1-cihuy/pulls)
