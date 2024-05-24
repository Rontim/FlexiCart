#! /bin/ash

echo "Starting entrypoint.sh..."
echo "Applying database migrations..."

python manage.py makemigrations
python manage.py migrate

echo "Starting server..."

exec "$@"
