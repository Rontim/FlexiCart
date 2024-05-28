#! /bin/ash

echo "Starting entrypoint.sh..."

echo "Collecting static files..."

python manage.py collectstatic --noinput

echo "Applying database migrations..."

python manage.py makemigrations
python manage.py migrate

echo "Starting server..."

gunicorn flexi_cart.wsgi:application --bind 0.0.0.0:8000

exec "$@"
