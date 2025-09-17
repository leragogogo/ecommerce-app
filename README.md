# E-Commerce App – Setup Guide

Here you can find instructions on how to set up and run the E-Commerce App, which consists of:

* **Frontend**: React.js
* **Backend**: Node.js with Express.js
* **Database**: MongoDB Atlas
* **Payment Integration**: PayPal Sandbox

## Prerequisites

* **[Node.js](https://nodejs.org/en)**
* **[PayPal Sandbox Developer account](https://developer.paypal.com/tools/sandbox/)** with sandbox credentials

## Setup
1. Clone repository
   ```console
   git clone https://github.com/leragogogo/ecommerce-app.git
   cd ecommerce-app
   ```

## Backend Setup 

1. **Install dependencies for the backend**
    ```console
    cd backend
    npm install
    ```
2. **Configure Environment Variables**

    In the backend folder, create a .env file and add the required environment variables:
      ```console
      PORT=5001
      MONGO_URI=mongodb+srv://admin:Hogwarts08@ecommerce.lqzfw.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce
      JWT_SECRET=1f34a32ede227250490ad501a74590775f2b2cb9ca4ca7b73c98f00f7a3e0604
      PAYPAL_CLIENT_ID=AdiiRxH0pfhMyXEIvbSvPEvh4aGZWex3lqGq-avXen-lnCNN6jAt3-AapaOxjvuAFHFh0JFPdX4gwSkp
      PAYPAL_SECRET=EDY3CELm7j6SvUuN2xiv5i1uvj8s3LKUsN9LPchYJMumDX9FuZBWXTbEAaYsTXmAZbJC9pyHu2Ggr06g
      ```
   Since it is an educational project, it doesn't contain any vulnerable information in the database, which is why I share credentials and JWT secret.

3. **Start the Backend Server**
   
   Run in the backend folder:
   ```console
   npm start
   ```

   If succesfull you'll see:
   ```console
   Server running on port 5001...
   Connected to MongoDB...
   ```
## Frontend Setup
1. **Install dependencies for the frontend**
    ```console
    cd frontend
    npm install
    ```
2. **Configure Environment Variables**
   
   In the frontend folder, create a .env file and add:
   ```console
   REACT_APP_PAYPAL_CLIENT_ID=AdiiRxH0pfhMyXEIvbSvPEvh4aGZWex3lqGq-avXen-lnCNN6jAt3-AapaOxjvuAFHFh0JFPdX4gwSkp
   ```
   In the src/api/config.js file put the backend url.
    ```console
    export const localhost = 'http://localhost:5001';
    ```

3. **Start the Frontend Server**
   
   Run in the frontend folder:
   ```console
   npm start
   ```

   The application should be available at: http://localhost:3000/
   


