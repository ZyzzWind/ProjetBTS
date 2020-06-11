#!/bin/sh
curl -o /home/hugo/windmeter/scripts/tmp/tmp23.json 'http://api.pioupiou.fr/v1/archive/23?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp1006.json 'http://api.pioupiou.fr/v1/archive/1006?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp410.json 'http://api.pioupiou.fr/v1/archive/410?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp105.json 'http://api.pioupiou.fr/v1/archive/105?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp569.json 'http://api.pioupiou.fr/v1/archive/569?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp107.json 'http://api.pioupiou.fr/v1/archive/107?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp1008.json 'http://api.pioupiou.fr/v1/archive/1008?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp352.json 'http://api.pioupiou.fr/v1/archive/352?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp305.json 'http://api.pioupiou.fr/v1/archive/305?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp552.json 'http://api.pioupiou.fr/v1/archive/552?start=last-day&stop=now&format=json'
curl -o /home/hugo/windmeter/scripts/tmp/tmp131.json 'http://api.pioupiou.fr/v1/archive/131?start=last-day&stop=now&format=json'
./home/hugo/windmeter/scripts/gestion_donnees_vent