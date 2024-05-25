#!/bin/sh

until cd /home/app/api
do
    echo "Waiting for server volume..."
done

echo "Starting Celery worker with autoreload..."

celery -A flexi_cart worker --loglevel=info --autoreload -E