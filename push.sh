#!/bin/bash

# skip if build is triggered by pull request
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

# cleanup "_site"
rm -rf /tmp/IgrejaApp

# clone remote repo to "_site"
git clone  https://github.com/andreferreiratrindade/andreferreiratrindade.github.io.git --branch master /tmp/IgrejaApp/


cp -r www/* /tmp/IgrejaApp/
cd /tmp/Igreja/

git config user.email "andreferreiratrindade@gmail.com"
git config user.name "André"
git add --all
git commit -a -m "deploy"
git checkout -b master
git push --force origin master