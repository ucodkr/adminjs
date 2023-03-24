#!/bin/bash
TAG=v6.8.7-ucod
git push --delete origin ${TAG}
git tag ${TAG}
git push --tags
