FROM python:3.11
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app

# Path: requirements.txt
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Path: ./
COPY . /app

# Run
CMD python manage.py runserver 127.0.0.1:8000
