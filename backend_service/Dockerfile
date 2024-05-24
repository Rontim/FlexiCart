FROM python:3.11.7-alpine

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

ENV HOME = /home
ENV APP_HOME = ${HOME}/app/api 

RUN mkdir -p ${APP_HOME}
WORKDIR ${APP_HOME}

RUN apk update && apk add \
    --no-cache \
    libpq\
    postgresql-dev \
    build-base \
    python3-dev \
    gcc musl-dev

RUN pip install --upgrade pip
RUN pip install psycopg2-binary


COPY requirements.txt ${APP_HOME}/requirements.txt
RUN pip install -r requirements.txt

COPY ./entrypoint.sh ${APP_HOME}/entrypoint.sh

COPY . .

ENTRYPOINT ["/home/app/api/entrypoint.sh"]
