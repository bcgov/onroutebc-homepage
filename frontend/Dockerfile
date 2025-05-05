# Deploy using Caddy to host static files
FROM caddy:2.8.4-alpine

# Install envsubst
RUN apk add --no-cache gettext

# Copy files
COPY Caddyfile /etc/caddy/Caddyfile
COPY static_home_page /var/www/onroute

# Copy static files, verify Caddyfile formatting
ARG DASHBOARD=onroutebc-prod-frontend.apps.silver.devops.gov.bc.ca
# Use envsubst to replace PUBLIC_API_URL in notification.js.template
RUN export PUBLIC_API_URL=${PUBLIC_API_URL}

# Replace {{DASHBOARD}} in index.html
RUN sed -i "s/{{DASHBOARD}}/${DASHBOARD}/g" /var/www/onroute/index.html 

# Create a non-root user and group for caddy
RUN addgroup -S caddy && adduser -S -G caddy -h /var/www -s /sbin/nologin caddy

# Create project directory and set correct permissions
RUN chown -R caddy:caddy /var/www && chmod -R 755 /var/www
RUN chown -R caddy:caddy /config/caddy  && chmod -R 755 /config/caddy
RUN chown -R caddy:caddy /data/caddy  && chmod -R 755 /data/caddy

# Run rest of container as caddy user 
USER caddy

# Format Caddyfile
RUN caddy fmt /etc/caddy/Caddyfile

EXPOSE 3000
