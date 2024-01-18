FROM python:3.11.7-alpine

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN mkdir /app
WORKDIR /app

RUN apk update && apk add --no-cache libpq postgresql-dev build-base

RUN pip install --upgrade pip
RUN pip install psycopg2-binary

# Path: requirements.txt
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

COPY ./entrypoint.sh /app/entrypoint.sh

# Path: ./
COPY . /app

ENTRYPOINT ["/app/entrypoint.sh"]
