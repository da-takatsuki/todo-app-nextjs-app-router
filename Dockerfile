# ベースイメージを指定
FROM mysql:latest

# 環境変数を設定してMySQLのルートパスワードを指定
ENV MYSQL_ROOT_USER=test
ENV MYSQL_ROOT_PASSWORD=password

# データベースの作成
ENV MYSQL_DATABASE=mydatabase

# データベースの文字コードと照合順序を指定
ENV MYSQL_CHARSET=utf8mb4
ENV MYSQL_COLLATION=utf8mb4_unicode_ci

# ポートを公開
EXPOSE 3306
