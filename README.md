# ShopSphere

ShopSphere is a feature-rich, full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It includes robust role-based authentication, an admin dashboard for managing products, and seamless PayPal integration for secure online payments.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Setup Environment Variables](#setup-environment-variables)
- [Install Dependencies](#install-dependencies).

## Features

- **User Authentication**: Secure registration and login features with role-based access.
- **Admin Dashboard**: Manage products, orders, and user accounts with an intuitive interface.
- **Product Management**: Add, edit, and delete products with ease.
- **Shopping Cart**: Users can add products to their cart and manage their selections.
- **Order Processing**: Seamless checkout process with PayPal integration for secure payments.
- **Search Functionality**: Users can search for products easily.
- **User Reviews**: Customers can leave feedback on products.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Vite, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Services**: Cloudinary for image storage
- **Payment Integration**: PayPal

## Installation

To get started with ShopSphere, follow the steps below:

### Prerequisites

- Node.js (v14 or later)
- MongoDB (Atlas or local instance)
- npm or Yarn


### Clone the Repository
	git clone https://github.com/a-k-singhk/ShopSphere.git
	cd ShopSphere


### Setup Environment Variables
	PORT=5000
	MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>
	CORS_ORIGIN=http://localhost:5173
	CLOUDINARY_CLOUD_NAME=<your_cloud_name>
	CLOUDINARY_API_KEY=<your_api_key>
	CLOUDINARY_API_SECRET=<your_api_secret>
	PAYPAL_MODE=sandbox
	PAYPAL_CLIENT_ID=<your_client_id>
	PAYPAL_CLIENT_SECRET=<your_client_secret>

### Install Dependencies
- for server
  ```bash
  cd server
  npm install

- for client
  ```bash
  cd ../client
  npm install
- Run the server
  ```bash
    cd server
    npm run dev




