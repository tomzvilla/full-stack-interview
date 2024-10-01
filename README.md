# Full Stack Interview

## Description

This project is a web app providing a ticketing system. This web app is very simple and consists of a single main entity, *tickets*, whose schema is as follows:
* activity_name: string
* current_queue_number: int
* serving_time: int
* price: int

Users can:
* access this page 
* "print" (reserve) a ticket 
* view the waiting time for their ticket

No login or persist user state is required. Imagine going to the terminal of a bank, printing the ticket number for a given service and then going to a screen to check the waiting time.

## Required Tools and Involved Tech Stack

Tools:
* Python (3.10 or later) (recommended [uv](https://docs.astral.sh/uv/getting-started/installation/), but can use any other alternative - conda, venv, ... - for local development)
* npm
* Docker

Tech Stack:
* MongoDB
* FastAPI
* React/Next.js

## Instructions

Your job is to implement this web app, starting from the skeleton code provided. More specifically:
* You'll be using MongoDB as the database. The *mongo* folder contains a data sample to populate your database.
* You'll be using FastAPI to implement the actual ticket service. This service:
  - Accesses MongoDB.
  - Fetches and modifies ticket data as needed. 
  - Is exposed through a REST API to the dashboard.
* You'll be using React (*dashboard-react* folder) or Next.js (*dashboard-next* folder) to implement the user dashboard, with the features listed above. Next.js is preferred, but React is also acceptable.

All three folders (*mongo*, *service*, *dashboard*) have README.md with the instruction to run the three projects. Those instructions are expected to work unchanged.


