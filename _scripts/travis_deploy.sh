#!/bin/bash
if [[ $TRAVIS_BRANCH == 'master' ]] ; then
  echo 'This is getting executed'
  exit 1
elif [[ $TRAVIS_BRANCH == 'live' ]] ; then
  eval "bundle exec rake publish"
else
  echo 'Invalid branch. You can only deploy from master and live.'
  exit 1
fi
