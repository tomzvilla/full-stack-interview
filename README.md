# Full Stack Interview

## Description

This project is a simple TODO application. This web app is very simple and consists of a single main entity, *todos*, whose schema is as follows:
* title: string
* description: string
* estimated_time: int  # in minutes

Users can:
* access this page 
* view current todos
* add a new todo
* delete an existing todo

This is a simple demo project and no login or persist user state is required: you can assume a single user will be using this sytem.

## Example 

To give an example, a user can open the web application and see a list of current TODOs. They can then add a new TODO by entering title, description, and estimated time. Once added, the new TODO will appear in the list. If the user decides they no longer need a TODO, they can delete it by clicking a delete button next to the corresponding item. The application will update the list to reflect the changes immediately.

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
  - Allows users to view, add and delete TODOs.
* You'll be using React (*dashboard-react* folder) or Next.js (*dashboard-next* folder) to implement the user dashboard, with the features listed above. Next.js is preferred, but React is also acceptable.

All three folders (*mongo*, *service*, *dashboard-\**) have README.md with the instruction to run the three projects. Those instructions are expected to work unchanged.

