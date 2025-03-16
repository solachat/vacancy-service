# Vacancy Application Microservice

## Overview
This microservice handles job applications for vacancies, allowing users to submit applications and retrieve application data.

## Features
- Submit applications for job vacancies.
- Retrieve applications by vacancy ID.
- Secure and structured data handling.

## Technologies Used
- **Node.js** with **Express.js** (backend framework)
- **MongoDB** with **Mongoose** (database and ORM)
- **TypeScript** (for type safety)
- **Docker** (for containerization)

---

## Installation and Setup
### 1. Clone the Repository
```sh
 git clone https://github.com/solachat/vacancy-service.git
 cd vacancy-microservice
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and configure the following:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/vacancy-db
```

### 4. Start the Service
```sh
npm run dev
```
For production:
```sh
npm start
```

---

## API Endpoints
### 1. Submit a Job Application
**Endpoint:** `POST /api/applications/create`
**Request Body:**
```json
{
  "fullName": "John Doe",
  "contactType": "telegram",
  "contactValue": "@johndoe",
  "expectedSalary": "2500",
  "availableFrom": "2025-03-23",
  "aboutYou": "Experienced backend developer",
  "vacancyId": "67d6dd9601932807f4ca417d"
}
```
**Response:**
```json
{
  "message": "Application submitted successfully",
  "applicationId": "abc123"
}
```

### 2. Get Applications for a Vacancy
**Endpoint:** `GET /api/applications/:vacancyId`
**Response:**
```json
[
  {
    "_id": "abc123",
    "fullName": "John Doe",
    "contactType": "telegram",
    "contactValue": "@johndoe",
    "expectedSalary": "2500",
    "availableFrom": "2025-03-23",
    "aboutYou": "Experienced backend developer",
    "vacancyId": "67d6dd9601932807f4ca417d",
    "createdAt": "2025-03-16T14:17:58.840Z"
  }
]
```

---

## Docker Support
### Build and Run with Docker
1. **Build the Docker Image**
```sh
docker build -t vacancy-microservice .
```
2. **Run the Container**
```sh
docker run -p 5000:5000 --env-file .env vacancy-microservice
```

---

## Contribution
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to the branch
5. Open a pull request

---

## License
This project is licensed under the MIT License.

