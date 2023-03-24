#!/bin/bash
TAG=v6.8.7-ucod-3
git checkout npm-deploy
git merge ucodkr -m "${TAG}"
yarn npm-release
git add lib -f
git add types -f
git commit -m "${TAG}"
git push origin npm-deploy

git tag -d ${TAG}
git push --delete origin ${TAG}
git tag ${TAG}
git push origin ${TAG}

git checkout ucodkr
