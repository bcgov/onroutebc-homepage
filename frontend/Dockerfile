# Build
# Deploy using Caddy to host static files
FROM caddy:2.8.4-alpine
#RUN apk add --no-cache ca-certificates

# Copy static files, verify Caddyfile formatting
COPY Caddyfile /etc/caddy/Caddyfile
COPY static_home_page /var/www/onroute
RUN caddy fmt /etc/caddy/Caddyfile

# Boilerplate, not used in OpenShift/Kubernetes
EXPOSE 3000
#HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:3001/health

# Nonroot user
USER 1001
