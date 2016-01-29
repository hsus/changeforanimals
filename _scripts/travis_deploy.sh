#!/bin/bash
if [[ $TRAVIS_BRANCH == 'master' ]] ; then
  eval "bundle exec rake stage"
elif [[ $TRAVIS_BRANCH == 'live' ]] ; then
  eval "bundle exec rake publish"
else
  echo 'Invalid branch. You can only deploy from master and live.'
  exit 1
fi
