# reveal-template

個人的に利用しているreveal.jsのテンプレート。

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## Usage

```bash
$ npm run start -- ディレクトリ名
```

もしくは

```bash
$ node index.js ディレクトリ名
```

※ディレクトリ名はsrc配下

## 操作メモ

### スライドの一覧表示

`Esc`キーでスライドの一覧表示が可能。

### 発表者モードについて

`S`キーで発表者モード表示。

下記のタグ内に記述したテキストは、発表者モード時に表示されるカンペとなる。

```html
<aside class="notes">〜</aside>
```

### PDF出力

（Google Chrome 前提）URLに「?print-pdf」をつけ、`Ctrl + p`で「PDFをプレビュー」をクリックして保存する。
