const express = require("express");

const app = express();
data = [
  {
    "info": {
      "_postman_id": "7c718bbc-a22c-4cfb-a127-810545782d03",
      "name": "Transaction Runner",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
      {
        "name": "User signup",
        "request": {
          "method": "POST",
          "header": [],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"firstname\": \"eden\",\r\n    \"lastname\": \"hazard\",\r\n    \"email\": \"eden@yahoo.com\",\r\n    \"password\": 12345678\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "https://transaction-runner-v1.herokuapp.com/api/v1/auth/signup",
            "protocol": "http",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "api",
              "v1",
              "auth",
              "signup"
            ]
          }
        },
        "response": []
      },
      {
        "name": "User login",
        "request": {
          "method": "POST",
          "header": [],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\": \"hazard@yahoo.com\",\r\n    \"password\": \"12345678\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "https://transaction-runner-v1.herokuapp.com/api/v1/auth/login",
            "protocol": "http",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "api",
              "v1",
              "auth",
              "login"
            ]
          }
        },
        "response": []
      },
      {
        "name": "User send money",
        "request": {
          "auth": {
            "type": "bearer"
          },
          "method": "POST",
          "header": [
            {
              "key": "Authorization",
              "value": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE3Mjk3Mjk0LCJleHAiOjE2MTc5MDIwOTR9.TfsXcbpgORi3c45RYAZYugCsNNiSgxaiBMInMdvgCng",
              "type": "text"
            }
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"amount\": 200\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "https://transaction-runner-v1.herokuapp.com/api/v1/transaction/sendmoney",
            "protocol": "http",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "api",
              "v1",
              "transaction",
              "sendmoney"
            ]
          }
        },
        "response": []
      },
      {
        "name": "User get transaction",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "auth": {
            "type": "bearer"
          },
          "method": "GET",
          "header": [
            {
              "key": "Authorization",
              "value": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJvc2NhckB5YWhvby5jb20iLCJpYXQiOjE2MTczMTI4MTksImV4cCI6MTYxNzkxNzYxOX0.fkduhX2ygmPUEZVyAU_X3pxRX-MzHhJdxER0gavKfeQ",
              "type": "text"
            }
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"amount\": 200\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "https://transaction-runner-v1.herokuapp.com/api/v1/transaction",
            "protocol": "http",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "api",
              "v1",
              "transaction"
            ]
          }
        },
        "response": []
      },
      {
        "name": "User receive money",
        "request": {
          "auth": {
            "type": "bearer"
          },
          "method": "POST",
          "header": [
            {
              "key": "Authorization",
              "value": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE3Mjk3Mjk0LCJleHAiOjE2MTc5MDIwOTR9.TfsXcbpgORi3c45RYAZYugCsNNiSgxaiBMInMdvgCng",
              "type": "text"
            }
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"amount\": 200\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "https://transaction-runner-v1.herokuapp.com/api/v1/transaction/addmoney",
            "protocol": "http",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "api",
              "v1",
              "transaction",
              "addmoney"
            ]
          }
        },
        "response": []
      },
      {
        "name": "home",
        "request": {
          "method": "GET",
          "header": [],
          "url": {
            "raw": "https://transaction-runner-v1.herokuapp.com",
            "protocol": "http",
            "host": [
              "localhost"
            ],
            "port": "3000"
          }
        },
        "response": []
      },
      {
        "name": "User delete transaction",
        "request": {
          "auth": {
            "type": "bearer"
          },
          "method": "DELETE",
          "header": [
            {
              "key": "Authorization",
              "value": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJvc2NhckB5YWhvby5jb20iLCJpYXQiOjE2MTczMTI4MTksImV4cCI6MTYxNzkxNzYxOX0.fkduhX2ygmPUEZVyAU_X3pxRX-MzHhJdxER0gavKfeQ",
              "type": "text",
              "disabled": true
            }
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"amount\": 200\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "https://transaction-runner-v1.herokuapp.com/api/v1/transaction",
            "protocol": "http",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "api",
              "v1",
              "transaction"
            ]
          }
        },
        "response": []
      }
    ]
  }
]

app.get("/", (req, res) => {
  res.status(200).json({
    success: "true",
    message: "Welcome to transaction runner",
    version: "1.0",
    data
  });

});

module.exports = app;
