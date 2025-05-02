# Build
# Deploy using Caddy to host static files
FROM caddy:2.8.4-alpine
#RUN apk add --no-cache ca-certificates

# Copy static files, verify Caddyfile formatting
ARG DASHBOARD=onroutebc-prod-frontend.apps.silver.devops.gov.bc.ca
COPY Caddyfile /etc/caddy/Caddyfile
COPY static_home_page /var/www/onroute
# Replace placeholder for dashboard  in source index.html
#RUN echo "DASHBOARD=\$DASHBOARD"
RUN sed -i "s/{{DASHBOARD}}/${DASHBOARD}/g" /var/www/onroute/index.html 
RUN caddy fmt /etc/caddy/Caddyfile

# Boilerplate, not used in OpenShift/Kubernetes
EXPOSE 3000
#HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:3001/health

# Nonroot user
USER 1001

#Entry point script to run Caddy and the frontend app
# Copy the entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]