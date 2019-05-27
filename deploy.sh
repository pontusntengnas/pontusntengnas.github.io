#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git config user.email 'pontusnt@gmail.com'
git config user.name 'pontusntengnas'
git add -A
git commit -m 'deploy'

git push -f git@github.com:pontusntengnas/pontusntengnas.github.io.git master

cd -