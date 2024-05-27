FROM alpine:3.14

# Update the package list and install necessary packages
RUN apk update && \
    apk add --no-cache redis postgresql supervisor && \
    rm -rf /var/cache/apk/*



RUN mkdir /run/postgresql
RUN chown postgres:postgres /run/postgresql/


# Set up PostgreSQL data directory and permissions
USER postgres
RUN mkdir /var/lib/postgresql/data
RUN chmod 0700 /var/lib/postgresql/data


# Initialize PostgreSQL database
RUN initdb -D /var/lib/postgresql/data
RUN echo "host all all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
RUN echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf


# Expose the default ports for Redis and PostgreSQL
EXPOSE 6379 5432

# Switch back to root user
USER root

COPY supervisord.conf /etc/supervisor/conf.d/
COPY redis.conf /etc/redis/

# Start services using the supervisor for better management
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

