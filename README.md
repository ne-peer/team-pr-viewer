# Recent PR viewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## 開発とデプロイ

**開発**

1. Node.js をインストール
2. angular の開発に必要なツールをグローバルにインストール
   `npm i -g @angular/cli`
3. このリポジトリをクローン
4. クローンしたルートディレクトリ(packages.json)がある場所で
   `npm install`
5. 開発用ローカルサーバを立ち上げ
   `ng serve`
6. `localhost:4200` を開く

**デプロイ**

1. Github Pages にデプロイするためのツールをインストール
   `npm i -g gh-pages`
2. アプリケーションをビルド
   `ng build --base-href "{This repos clone url}"`
3. Github Pages へデプロイを実行
   `gh-pages -d dist`
4. ページを開いて確認(キャッシュが残っている場合があります)

## 使用しているライブラリ

| Repository                                                    | Description                |
| ------------------------------------------------------------- | -------------------------- |
| [angular/angular](https://github.com/angular/angular)         | FW (with Typescript)       |
| [angular/angular-cli](https://github.com/angular/angular-cli) | Development CLI            |
| [angular/material2](https://github.com/angular/material2)     | Design Component           |
| [dimpu/ngx-md](https://github.com/dimpu/ngx-md)               | Markdown preview rendering |
| [gh-pages](https://github.com/tschaub/gh-pages)               | Deployment                 |

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
