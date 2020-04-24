
# Beatles-API-Repo

 ##### This is a Beatles API server that provides information and lryics on The Beatles' extensive music catalog. For this API, there is no auth key needed. Swagger Documentation is available in the root directory in a PDF. 


#### How to install dependencies and Run locally:
​
1. Clone down the repository.
2. Run 'npm install' in beatles-api-repo root folder
3. Run "node seed.js" in lib/db folder
4. Run "node index.js" in lib folder
   (this will start the server locally)


#### How To Access Remotely

API URL : https://beatles-api.herokuapp.com/

​
#### API Utilizes:
​
- Mongoose
- Node-Fetch
- Body-Parser
- Express
- Heroku
- MongoDB / Atlas
- passport
- passport-jwt
- jwt-simple



#### API Screenshot
![Screenshot](https://github.com/skut21x-ga/beatles-mern-project/blob/master/beatles-mern/src/img/apiscreenshot.png?raw=true)

##### Swagger Documentation Link:
##### https://github.com/skut21x-ga/beatles-mern-project/blob/master/beatles-mern/Swagger%20Documentation.pdf

#### Routes Utilized:
​
- GET ("/") for all Beatles songs in the DB
  - ie. GET "http://localhost:3000/" or
  # 

- GET ("/name/:name") to search by Full Name
  - ie. GET "http://localhost:3000/name/The%20Beatles" to see all Beatles songs.
  #
​
​
- POST ("/") to create a new song in db
​
  - For example, the following example code can go into Body as RAW input (JSON Format) for a POST to "http://localhost:3000/".
​
```   
 {"Song": "Imagine"}

```
#
​
- PUT ("/:id") to search for a song by ID and edit that song information.
​
#
​
- DELETE ("/:id") to search for a song by ID and delete that song information.

​
#### Resources

##### Kaggle's Beatles lyrics CSV from: https://www.kaggle.com/mousehead/songlyrics


##### Utilized Swagger to create Swagger JSON 

