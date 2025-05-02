#!/bin/sh

# Use envsubst to replace vars in the template
envsubst < /var/www/onroute/index.html > /var/www/onroute/index.tmp.html
mv /var/www/onroute/index.tmp.html /var/www/onroute/index.html

# Start Caddy
caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
