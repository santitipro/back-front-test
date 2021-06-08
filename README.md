# Spota application

This is a monorepo that contain server and client application

## Start

**Start with docker**

``` bash
docker-compose up
```

*Start server*

``` bash
npm run start:server
```

*Start client*

``` bash
npm run start:client
```

*Complete application*

``` bash
npm run start
```

## Installation

Install the npm packages in root mono repo application

``` bash
npm install
```

## Consierations

### **Server**

- In server we can use middy for request validator, and joi for example for create a validators in use cases
- In server we can use nock for integration testing and mock response form server
- In properties endpoint we can improve pagination

### **Client**

- I use create react app because is a simple aplication, but y prefer use react whitout this, and use custom webpack, jest, babel...
- We can create a redux funcionality, but for this example its very simple for create this structure
- We can use styled-components for doing a styles
- We can create a router with react-router-dom
- I use useQuery hook for try this library, but i explain code how to do with without this library