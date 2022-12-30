[ ENGLISH ](README.md) | 日本語
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/B4kedBr3ad/9995acef0933a1f9ab38d3cc93e9653c/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)
![Today Views](https://views.whatilearened.today/views/github/B4kedBr3ad/twitter-autoblock.svg)

使い方(一般人向け)
=====
(手動)
1. このリポジトリをクローンする
2. パッケージをインストールする
3. `/src/main/_config.js`を編集する
4. `/src/main/follo.js`を実行する
5. `/stc/main/block.js`を実行する

*4と5は`manual_run.sh`を実行すると短縮できます

24時間起動するやり方
=====
私の環境はCLIベースのLinuxなので、WindowsなどはWSLで各種Linuxをダウンロードしてください。そして、crontabなどを使用して`start.sh`を実行するように設定してください。そしたら24時間起動できると思います。これが難しい場合は、replitを使ってください。

使い方(replitユーザー向け)
=====
(手動)
1. [このrepl](https://replit.com/@B4kedBr3ad/twitter-blocker)をforkする
2. 起動ファイルを聞かれた場合は、`start.sh`か`mual_rush`にする
3. パッケージをインストールする
4. `/src/main/_config.js`を編集する
5. `/src/main/follo.js`を実行する
6. `/stc/main/block.js`を実行する

*4と5は`manual_run.sh`を実行すると短縮できます

24時間起動するやり方
=====

1. replのURLを取得します。URLは、`index.js`を実行することで取得できます。(forkして特にいじってなければ、`twitter-blocker.<replitのユーザー名>.repl.co` となります。
2. [cron-job.org](https://cron-job.org)でアカウントを作成します。
3. 1で取得したURLへ5分ごとにHTTPリクエストを送信するように設定します。
4. `/run` に任意分のHTTPリクエストを送信するように設定する。これは、あまりに短いとTwitterのAPI制限に引っかかるので、30分程度にすることをおすすめします。

その他
=====
- `/latest_run`にアクセスすると、最後に起動した時刻がブラウザに表示されます。表示が汚いので、あんまり使えません。
- `/src/data/follow.json` に自分がフォローしているユーザーが保存されます。このユーザーは、指定された単語を使用してもブロックしません。
- Replitで実行する場合、自動実行の時間を短くしすぎると、Replit側で強制的に止まります。30分ぐらい固まり、そのあと自分でプロジェクトを開かないとダメです。うんち。