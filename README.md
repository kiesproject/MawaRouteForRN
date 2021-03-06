# MawaRoute for ReactNative
[![CircleCI](https://img.shields.io/circleci/project/github/kiesproject/MawaRouteForRN.svg?logoWidth=16&logo=data%3Aimage%2Fsvg%2Bxml%3Bcharset%3Dutf-8%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgdmlld0JveD0iMCAwIDIwMCAyMDAiPjxwYXRoIGZpbGw9IiNEREQiIGQ9Ik03NC43IDEwMGMwLTEzLjIgMTAuNy0yMy44IDIzLjgtMjMuOCAxMy4xIDAgMjMuOCAxMC43IDIzLjggMjMuOCAwIDEzLjEtMTAuNyAyMy44LTIzLjggMjMuOC0xMy4xIDAtMjMuOC0xMC43LTIzLjgtMjMuOHpNOTguNSAwQzUxLjggMCAxMi43IDMyIDEuNiA3NS4yYy0uMS4zLS4xLjYtLjEgMSAwIDIuNiAyLjEgNC44IDQuOCA0LjhoNDAuM2MxLjkgMCAzLjYtMS4xIDQuMy0yLjggOC4zLTE4IDI2LjUtMzAuNiA0Ny42LTMwLjYgMjguOSAwIDUyLjQgMjMuNSA1Mi40IDUyLjRzLTIzLjUgNTIuNC01Mi40IDUyLjRjLTIxLjEgMC0zOS4zLTEyLjUtNDcuNi0zMC42LS44LTEuNi0yLjQtMi44LTQuMy0yLjhINi4zYy0yLjYgMC00LjggMi4xLTQuOCA0LjggMCAuMy4xLjYuMSAxQzEyLjYgMTY4IDUxLjggMjAwIDk4LjUgMjAwYzU1LjIgMCAxMDAtNDQuOCAxMDAtMTAwUzE1My43IDAgOTguNSAweiIvPjwvc3ZnPg%3D%3D&style=for-the-badge)](https://circleci.com/gh/kiesproject/MawaRouteForRN/tree/master)

## Description
- [まわルート](https://github.com/kiesproject/MawaRoute)をReactNative + Redux + Redux-sagaで実装する
- ~~TypeScriptでの実装を行う予定でしたが，パッケージに合わせた開発を行うためにJavaScriptで開発をすることにしました．~~
  - 無事TypeScriptに置き換えました

### Layer
#### Container Component
- AppContainer
  - 最上位層で各コンポーネントの画面遷移実装を実現します．
  
#### Presentational Component
##### HomeScreen
  - 配下にあるコンポーネント(タブのスクリーンなどなど)の実装を実現します．

##### Tabs
- ListScreen
- MapScreen
- RouletteScreen
- DetailScreen(feature)

## Installation
node_modulesたちをインストールします
```
$ npm install
```
`ios/`ディレクトリでpodsをinstallします
```
$ pod install
```

## Important
RNのver0.53以降、`react-native-vector-icons`で致命的なエラーが起きているようです。パッケージをインストールするたびに必ず以下のコマンドを行ってください。
```
$ rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json
```

## Androidをリリースするための署名の準備
- これをやるためにはopenssl 1.1系が必要だよ、入れてね
- 以下のことをやればいいよ(ﾆｯｺﾘ)

      openssl aes-256-cbc -d -in android/secret.properties.encrypted -out android/secret.properties
      openssl aes-256-cbc -d -in android/keystores/release.keystore.encrypted -out android/keystores/release.keystore

-  パスワードは[ここ](https://github.com/kiesproject/account/blob/master/android/MawaRouteForRN.md)にあるよ

## Environment
#### ReactNative(0.53.0), React(16.2.0)
- none

#### Redux
- Reactが扱うstateを管理するためのフレームワーク
- unidirectional data flow
- [Document](https://redux.js.org/)

#### Redux-saga
- Reduxに非同期などのside effectを実装するためのフレームワーク
- actionに応じて，sagaを呼び出して結果をもとのactionに返す感じ
- [Document](https://redux-saga.js.org/)

