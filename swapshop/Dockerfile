FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

COPY requirements.txt requirements.txt
#  Need authenticators?
COPY main.py main.py

COPY migrations migrations
COPY queries queries
COPY routers routers
COPY tests tests
COPY authenticators authenticators

RUN python -m pip install -r requirements.txt
CMD uvicorn main:app --host 0.0.0.0
