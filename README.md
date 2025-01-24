# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue in Express.js applications where the JSON request body is not parsed correctly when the `Content-Type` header is missing or incorrect in the request. The bug is in `bug.js` and its solution is in `bugSolution.js`.

## Bug

The original code uses `app.use(express.json());` but fails to handle cases where the client doesn't send the correct `Content-Type` header, leading to an empty `req.body`. This may lead to unexpected behavior or errors during the processing of the request. 

## Solution

The solution in `bugSolution.js` includes the following changes:

1.  **Middleware order:** Ensure that `express.json()` middleware is applied before the route handler.   
2.  **Error handling:** Add error handling to gracefully handle the case where the request body is not valid JSON. 

## How to reproduce the bug:
1. Clone the repo. 
2. Navigate to the directory containing `bug.js`. 
3. run `node bug.js` 
4. Send a POST request to `http://localhost:3000/user` without setting the `Content-Type` header, or set it to a wrong value (e.g. `text/plain`).  
5. Observe that `req.body` is empty in console.  

## How to test the solution:
1. Navigate to the directory containing `bugSolution.js`. 
2. run `node bugSolution.js` 
3. Send a POST request to `http://localhost:3000/user` with a JSON body, even without or with an incorrect `Content-Type` header. 
4. Observe the correct response and error handling.