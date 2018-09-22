#!/usr/bin/env bash

# find ./_html/ -name *.js.map | xargs rm -rf
 scp -r _html/* root@47.93.35.76:/home/web/webhive/nginx/quantify
