# Full Stack Interview

## Description

This project is a web app providing a ticketing system. This web app is very simple and consists of a single main entity, *tickets*, whose schema is as follows:
* activity_name: string
* current_queue_number: int
* serving_time: int
* price: int

Users can:
* access this page 
* view available tickets
* "print" (reserve) a ticket 
* view the waiting time for a given ticket (that they have "printed" earlier)

No login or persist user state is required. Imagine going to the terminal of a bank, printing the ticket number for a given service and then going to a screen to check the waiting time.

## Example 

To give an example, a user might access the web app and see a list of available activities:
* Activity 1 (Price: $15)
* Activity 2 (Price: $10)
* Activity 3 (Price: $20)
* Activity 4 (Price: $8)

The user could then choose to "print" a ticket for Activity 2. The system would reserve the next available queue number (in this case, 29) for the user. Later, the user can check the waiting time for their ticket, entering their ticket number for that Activity. Given that Activity 2 has a serving time of 300 seconds (5 minutes) per ticket, and there is one person ahead of them (queue number 28), the estimated waiting time would be approximately 5 minutes.

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
  - Interacts with MongoDB.
  - Is exposed through a REST API (which the dashboard will invoke).
  - Allows users to view tickets, reserve them and view their waiting times.
* You'll be using React (*dashboard-react* folder) or Next.js (*dashboard-next* folder) to implement the user dashboard, with the features listed above. Next.js is preferred, but React is also acceptable.

All three folders (*mongo*, *service*, *dashboard*) have README.md with the instruction to run the three projects. Those instructions are expected to work unchanged.


