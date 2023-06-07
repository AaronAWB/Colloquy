#!/user/bin/env bash

# Exit on error
set -o errexit

## CLIENT SETUP
cd client
npm i 

## ENV SETUP
cd ..
touch .env

echo "Enter your PostgresSQL host (default is localhost)":
read host
host = ${host:="localhost"}

echo "Enter your PostgresSQL username (default is postgres)":
read username
host = ${username:="postgres"}

echo "Enter your PostgresSQL username (default is postgres)":
read password
host = ${password:="postgres"}

echo "Enter your postgres db name (default is chat_app)":
read db_name
host = ${db_name:="chat_app"}

echo "DATABASE_URL = 'postgressqql+psycopg2://$username:$password@$host/$db_name'" > .env
echo "SECRET_KEY = 'terces'" >> .env

export PGPASSWORD=$password
psql -U $username -c "CREATE DATABASE $db_name"
psql -H $host -U $username -d $db_name -f chat_app_schema.sql

## SERVER SETUP
cd server
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 main.py