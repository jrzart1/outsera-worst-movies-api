outsera-worst-movies-api

# SETUP

Download repository:

```css
git clone https://github.com/jrzart1/outsera-worst-movies-api.git
```

###   
USING NODE LOCALLY, recommended version 22 (LTS), execute:

```css
npm install
```

```css
npm run build
```

```css
npm run start
```

###   
USING DOCKER

Build the project image, using:

```css
docker build -t jrzart/outsera-worst-movies-api .
```

Then, run the container:

```css
docker run -d -p 80:80 jrzart/outsera-worst-movies-api
```

###   
USING DOCKER COMPOSE

```css
docker-compose up -d
```

  
For all cases, API may be available at:

```css
http://localhost:80
```

**Healths:**

```css
curl --location 'http://localhost:80/healths'
```

**Movie intervals route:**

```css
curl --location 'http://localhost:80/awards-interval'
```

  
 

To change CSV file, just overwrite the following file and build again:

```css
src/data/movielist.csv
```

###   
  
FOR DEVELOPMENT, run local:

```css
npm run dev
```

### FOR INTEGRATION TESTS, run:

```css
npm test
```