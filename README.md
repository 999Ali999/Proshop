# MERN Stack eCommerce Platform

A full-featured eCommerce platform built with MERN (MongoDB, Express, React, Node.js) stack and Redux Toolkit / RTQ Query for state management and data fetching.

https://github.com/user-attachments/assets/9a350cb8-63cf-4b75-8480-ea975c351455

## 🚀 Features

- Full-featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## 💻 Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication HTTP only cookie
- **bcryptjs** - Password hashing
- **multer** - File uploads for images
- **express-async-handler** - Error handling

### Frontend

- **React** - UI library
- **Redux Toolkit** - Modern State management
- **RTK Query** - API data fetching and caching
- **React Router** - Navigation
- **React Bootstrap** - UI components
- **React Toastify** - Notifications
- **React Helmet** - Document head manager
- **React Paypal Button** - Simplifies PayPal Payment integration

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/yourusername/mern-ecommerce.git
```

2. Install dependencies (root, frontend, backend)

```bash
# Root directory
npm install

# Frontend directory
cd frontend
npm install

# Backend directory
cd backend
npm install
```

3. Set up environment variables

```bash
# Create .env file in root directory
NODE_ENV=development
PORT=5000
MONGO_URI=<your_mongo_db_uri>
JWT_SECRET=<your_secret>
PAYPAL_CLIENT_ID=<your_paypal_client_id>
PAYPAL_APP_SECRET=<your_paypal_secret>
PAYPAL_API_URL=https://api-m.sandbox.paypal.com
```

4. Run the application

```bash
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

## 📝 Key Learnings

### Backend Development

- RESTful API implementation using Express.js
- MongoDB database management with Mongoose
- JWT authentication and authorization
- Custom middleware creation
- Error handling and async operations
- File upload functionality
- Data modeling and validation
- API security best practices
- Environment configuration

### Frontend Development

- React components and hooks
- Redux Toolkit for state management
- RTK Query for efficient API data fetching and caching
- React Custom hooks creation
- Protected routes implementation
- Form validation
- Payment gateway integration with PayPal
- Responsive design
- Local storage management
- User interface optimization

## 🎯 TODO

- [x] Show case video
- [ ] Containerize application
<!-- - [x] Containerize application -->

## 🪪 License

This project is licensed under the MIT License.
