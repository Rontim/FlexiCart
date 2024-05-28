FROM python:3.11.7-alpine

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

ENV HOME=/home
ENV APP_HOME=${HOME}/app/api

RUN mkdir -p ${APP_HOME}
WORKDIR ${APP_HOME}

RUN apk update && apk add --no-cache libpq postgresql-dev build-base python3-dev gcc musl-dev

RUN pip install --upgrade pip
RUN pip install psycopg2-binary

# Copy requirements first for caching
COPY requirements.txt .

RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

RUN ls -la

# Make sure the entrypoint script is executable
RUN chmod +x ./entrypoint.sh
RUN chmod +x ./worker-entrypoint.sh

# Set the entrypoint
# ENTRYPOINT ["./entrypoint.sh"]
