#!/bin/bash
TAG=v6.8.7-ucod-1
git tag -d ${TAG}
git push --delete origin ${TAG}
git tag ${TAG}
git push --tags