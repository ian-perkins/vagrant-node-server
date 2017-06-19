# To install simple HTTP server

- Use commit tagged as `simplehttpserver`
- From root directory: 
    ```
      vagrant ssh
      cd /var/www/server
      npm install
      npm start
    ```
- Open the following URL in a browser:
    `http://192.168.34.36:8080/`
- This will serve static assets from the root directory (a basic `index.html` is provided)

# To install Express server (static files only)

- Use commit tagged `expressstatic`
- From root directory: 
    ```
      vagrant ssh
      cd /var/www/server
      npm install
      npm start
    ```
- Open the following URL in a browser:
    `http://192.168.34.36:8081/`
- This will serve static assets from the root directory (a basic `index.html` is provided)

# To update Express server to API server
- Use commit tagged `expressbasicapi`
- From root directory: 
    ```
      vagrant ssh
      cd /var/www/server
      npm install
      npm start
    ```
- Open the following URL in a browser:
    `http://192.168.34.36:8081/`
- To serve static assets use the `/static` endpoint which will look in the `/public` directory (a basic `index.html` is provided - use the endpoint `/static` to access that file)
- The `/` endpoint now responds with a sample JSON payload and response code 200