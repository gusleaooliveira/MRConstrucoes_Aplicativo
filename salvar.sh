#!/usr/bin/env bash

git init
git remote add origin git@github.com:mrconstrucoes/aplicativo.git
git add .
git commit -m "alteração feita em:$(date +%d/%m/%Y-%k:%M:%S)"
git push -u origin master
git push heroku master
heroku open --app guarded-woodland-96527