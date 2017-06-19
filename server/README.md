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