# MongoDB

```bash
# Start a MongoDB container
docker run -d --name mongodb -p 27017:27017 mongo:latest

# Copy the data.json file into the container
docker cp data.json mongodb:/data/

# Execute mongoimport to load the data
docker exec -it mongodb mongoimport --db ticketing --collection tickets --file /data/data.json --jsonArray
```