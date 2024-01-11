
# FlexiCart - Online Shopping Cart

FlexiCart is an online shopping cart application built using Python and Django. It allows users to browse through a list of products, add them to their cart and checkout using Stripe. The application also allows users to create an account and login to their account to view their order history.

## Demo

## Features

* Browse through a list of products
* Add products to cart
* Checkout using Stripe
* Create an account
* Login to account
* View order history

## Technologies

* Python
* Django
* React
* Stripe

## Project Stracture

The project is made up of microservices; each service is a Django REST API.The frontend is a React application that consumes the APIs. The frontend and backend are containerized using Docker. The services are orchestrated using Docker Compose. And messages are passed between the services using RabbitMQ.

* **frontend Service** - React frontend and React Native mobile app
* **Users Service** - Django REST API for user authentication with Djoser
* **Products Service** - Django REST API for products
* **Orders Service** - Django REST API for orders
* **Payments Service** - Django REST API for payments

## Remarks

Happy coding!
