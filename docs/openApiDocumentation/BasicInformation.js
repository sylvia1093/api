const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "PageX",
        "description": "PageX is a solution to connect talented people in one place \
      and help them share and develop their passion.",
        "version": "Beta"
    },
    "servers": [
        {
            "url": 'http://localhost:3000/',
            "description": 'Local server'
        }
    ],
    "produces": ["application/json"],
    "consumes": "application/json",
    "paths": {
        "/api/v1/users/validate/account": {
            "post": {
                "x-swagger-router-controller": "users",
                "operationId": "users-validate-account",
                "summary": "Validate the email account",
                "description": 'Validate user emil',
                "tags": ["User"],
                "description": `[Account validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/validate/account"})`,
                "parameters": [
                    // {
                    //     "name": "fullname",
                    //     "in": "formData",
                    //     "type": "string",
                    //     // "collectionFormat": "multi",
                    //     "required": true
                    //     // "items": {
                    //     //     "type": "string"
                    //     // },
                    // },
                    // {
                    //     "name": "lastname",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "string"
                    // },
                    // {
                    //     "name": "password",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "password"
                    // },
                    // {
                    //     "name": "email",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "string"
                    // },
                    // {
                    //     "name": "file",
                    //     "in": "formData",
                    //     "type": "file",
                    //     "required": "true"
                    // }
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "fullname": {
                                            "type": "string",
                                            "example": "John Dao"
                                        },
                                        "email": {
                                            "type": "string",
                                            "example": 'john.dao@pagex.io'
                                        }

                                    }
                                }
                            }
                        }

                    }
                ],
                "responses": {
                    '302': {
                        "description": "This user email already exists",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "msg": {
                                            "type": "string",
                                            "example": "Account exists"
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 302
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Validation code for user account has been generated succesfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "id": {
                                                    "type": "string",
                                                    "example": "_3456785445675"
                                                },
                                                "validationCode": {
                                                    "type": "string",
                                                    "example": '98789'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/validate/code": {
            "post": {
                "x-swagger-router-controller": "users",
                "operationId": "users-validate-code",
                "summary": "Check if email code is valid",
                "description": 'Check account validation code',
                "tags": ["User"],
                "description": `[Code validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/validate/code"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "example": "5e4c58b2a7032302a4cc07cebd"
                                        },
                                        "validationCode": {
                                            "type": "string",
                                            "example": '26021'
                                        }

                                    }
                                }
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Validation code is incorrect",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Not acceptable'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Validation code is correct",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": true
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Accepted'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/signup": {
            "post": {
                "x-swagger-router-controller": "users",
                "operationId": "users-signup",
                "summary": "Signup a new user",
                "description": 'Create a new user account',
                "tags": ["User"],
                "description": `[User creation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/signup"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "example": "5e4c58b2a7032302a4cc07cebd"
                                },
                                "validationCode": {
                                    "type": "string",
                                    "example": '26021'
                                },
                                "email": {
                                    "type": "string",
                                    "example": 'pagex@gmail.com'
                                },
                                "password": {
                                    "type": "string",
                                    "example": '9876543456789'
                                },
                                "file": {
                                    "type": "file",
                                    "example": '/photo/test.png'
                                },
                                "passion": {
                                    "type": "string",
                                    "example": 'painting'
                                }
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Account validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'This account is not active or exists'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '407': {
                        "description": "Password validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "valid": {
                                                    "type": "boolean",
                                                    "example": false
                                                },
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Password must include more than 08 characters'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Account creation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Account created with success'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/login": {
            "post": {
                "x-swagger-router-controller": "users",
                "operationId": "users-login",
                "summary": "Login user",
                "description": 'Account connection',
                "tags": ["User"],
                "description": `[User creation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/users/login"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "email": {
                                            "type": "string",
                                            "example": 'pagex@gmail.com'
                                        },
                                        "password": {
                                            "type": "string",
                                            "example": '9876543456789'
                                        },

                                    }
                                }
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Account validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Account does not exists'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '407': {
                        "description": "Password validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 407
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Password and/or email is not correct'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Account login successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "token": {
                                                    "type": "string",
                                                    "example": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IiQyYiQxMCRlMnRWeGc5dmszaHlFdjVOWGJ2U2t1YVVJOUJIakdHblAzTGZXZEFiRzBHOXBLVGJNUlA4aSIsImRhdGEiOiI1ZTUxMzU0ZWIyZjM0MDAwMmI0Y2I4N2EiLCJpYXQiOjE1ODIzODA3MDUsImV4cCI6MTU4MjQyMzkwNX0.aiesaYNjxKbZyZUhWmfZD48pVS0C_GhqITdKdTK2g80'
                                                },
                                                "userId": {
                                                    "type": "string",
                                                    "example": '5e51354eb2f340002b4cb87a'
                                                },
                                                "imageUrl": {
                                                    "type": "string",
                                                    "example": '/upload/exemple/profiletest.png'
                                                },
                                                "fullname": {
                                                    "type": "string",
                                                    "example": 'John Dao'
                                                },
                                                "passion": {
                                                    "type": "string",
                                                    "example": 'Painting'
                                                },
                                                "dateOfCreation": {
                                                    "type": "string",
                                                    "example": '2020-02-22T14:06:06.704Z'
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/subscription/create": {
            "post": {
                "x-swagger-router-controller": "users",
                "operationId": "users-subscription",
                "summary": "Create subscription",
                "description": 'To allow user to subcriber other users',
                "tags": ["User"],
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "userId": {
                                            "type": "string",
                                            "example": '5e63a169bc6eb82fe4b049d0'
                                        },
                                        "subscribeToUserId": {
                                            "type": "string",
                                            "example": '5e6cfc2c82cbec0efd7fa5dc'
                                        },

                                    }
                                }
                            }
                        }

                    }
                ],
                "responses": {
                    '200': {
                        "description": "Subscription created successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "success": {
                                    "type": "booleon",
                                    "example": true
                                },
                                "code": {
                                    "type": "number",
                                    "example": 200
                                },
                                "data": {
                                    "properties": {
                                        "msg": {
                                            "type": "string",
                                            "example": 'Subscription created with success'
                                        }
                                    }
                                },
                                "error": {
                                    "properties": {
                                        "msg": {
                                            "type": "String",
                                            "example": "Error will displayed if it occured"
                                        }
                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/subscription/list/userId/:userId": {
            "get": {
                "x-swagger-router-controller": "users",
                "operationId": "subscription-list",
                "summary": "get subscribed user list",
                "description": 'Get all subriced users list',
                "tags": ["User"],
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "Subscription list fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "_id": {
                                                    "type": "String",
                                                    "example": "",
                                                },
                                                "firstname": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "lastname": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "profilePhoto": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/info/userId/:userId": {
            "get": {
                "x-swagger-router-controller": "users",
                "operationId": "user-info",
                "summary": "get user info",
                "description": 'Get user info',
                "tags": ["User"],
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "Subscription list fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "fullname": {
                                                    "type": "String",
                                                    "example": "",
                                                },
                                                "firstname": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "lastname": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "profilePhoto": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "email": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "passion": {
                                                    "type": "object",
                                                    "properties": {
                                                        "title": {
                                                            "type": "String",
                                                            "example": ''
                                                        },
                                                        "description": {
                                                            "type": "String",
                                                            "example": ''
                                                        },
                                                        "image": {
                                                            "type": "String",
                                                            "example": ''
                                                        },
                                                    }
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/reaction/content/:contentId": {
            "get": {
                "x-swagger-router-controller": "users",
                "operationId": "user-reaction",
                "summary": "get user reaction",
                "description": 'Get users by reaction content id',
                "tags": ["User"],
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "Users list fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "_id": {
                                                    "type": "String",
                                                    "example": "",
                                                },
                                                "firstname": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "lastname": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "profilePhoto": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/users/promotion/userId/:userId": {
            "get": {
                "x-swagger-router-controller": "users",
                "operationId": "user-promotion",
                "summary": "get user promotion",
                "description": 'Get users by promotion content id',
                "tags": ["User"],
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "Users list fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "_id": {
                                                    "type": "String",
                                                    "example": "",
                                                },
                                                "firstname": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "lastname": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "profilePhoto": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/new": {
            "post": {
                "x-swagger-router-controller": "contents",
                "operationId": "contents-new",
                "summary": "Add content",
                "description": 'Create new content',
                "tags": ["Content"],
                "description": `[Content creation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/content/new"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "contentUserId": {
                                    "type": "string",
                                    "example": '5e51354eb2f340002b4cb87a'
                                },
                                "contentTitle": {
                                    "type": "string",
                                    "example": 'Awesome paintings'
                                },
                                "contentDescription": {
                                    "type": "string",
                                    "example": 'this is my cool art'
                                },
                                "file": {
                                    "type": "string",
                                    "example": 'I am an image'
                                },
                                "contentType": {
                                    "type": "string",
                                    "example": 'passion'
                                },


                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Account validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Account does not exists'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Content created successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Content created with success'
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/all/limit/:limit/page/:page/userId/:userId": {
            "get": {
                "x-swagger-router-controller": "contents",
                "operationId": "contents-all",
                "summary": "Get contents",
                "description": 'Get all content by pagination',
                "tags": ["Content"],
                "description": `[Content fetch link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/content/all/limit/:limit/page/:page"})`,
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "Content fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "per_page": {
                                                    "type": "number",
                                                    "example": 10
                                                },
                                                "total": {
                                                    "type": "number",
                                                    "example": 42
                                                },
                                                "total_pages": {
                                                    "type": "number",
                                                    "example": 4
                                                },
                                                "data": {
                                                    "properties": {
                                                        "contentDeleted": {
                                                            "type": "booleon",
                                                            "example": false
                                                        },
                                                        "_id": {
                                                            "type": "string",
                                                            "example": "5e51489c01a9f50461ae7bf4"
                                                        },
                                                        "contentUserId": {
                                                            "type": "string",
                                                            "example": '5e51354eb2f340002b4cb87a'
                                                        },
                                                        "contentTitle": {
                                                            "type": "string",
                                                            "example": 'Awesome paintings'
                                                        },
                                                        "contentDescription": {
                                                            "type": "string",
                                                            "example": 'this is my cool art'
                                                        },
                                                        "file": {
                                                            "type": "string",
                                                            "example": 'I am an image'
                                                        },
                                                        "contentType": {
                                                            "type": "string",
                                                            "example": 'passion'
                                                        },
                                                    }
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/contribution/new": {
            "post": {
                "x-swagger-router-controller": "contents",
                "operationId": "contents-contribution-new",
                "summary": "Add content contribution",
                "description": 'Create new content contribution',
                "tags": ["Content"],
                "description": `[Content creation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/content/contribution/new"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "contentUserId": {
                                    "type": "string",
                                    "example": '5e51354eb2f340002b4cb87a'
                                },
                                "contentDescription": {
                                    "type": "string",
                                    "example": 'Awesome paintings'
                                },
                                "contentTag": {
                                    "type": "string",
                                    "example": 'this is my cool art'
                                },
                                "file": {
                                    "type": "Binary",
                                    "example": '...'
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Account validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Account does not exists'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "ContentContribution created successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Content created with success'
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/contribution/all/limit/:limit/page/:page": {
            "get": {
                "x-swagger-router-controller": "contents",
                "operationId": "contents-get-contribution-all",
                "summary": "Get content contributions",
                "description": 'Get all content contributions by pagination',
                "tags": ["Content"],
                "description": `[Content fetch link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/content/contribution/all/limit/:limit/page/:page"})`,
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "ContentContribution fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "per_page": {
                                                    "type": "number",
                                                    "example": 10
                                                },
                                                "total": {
                                                    "type": "number",
                                                    "example": 42
                                                },
                                                "total_pages": {
                                                    "type": "number",
                                                    "example": 4
                                                },
                                                "data": {
                                                    "properties": {
                                                        "contentDeleted": {
                                                            "type": "booleon",
                                                            "example": false
                                                        },
                                                        "_id": {
                                                            "type": "string",
                                                            "example": "5e51489c01a9f50461ae7bf4"
                                                        },
                                                        "contentUserId": {
                                                            "type": "string",
                                                            "example": '5e51354eb2f340002b4cb87a'
                                                        },
                                                        "contentText": {
                                                            "type": "string",
                                                            "example": 'Awesome paintings'
                                                        },
                                                        "contentTag": {
                                                            "type": "string",
                                                            "example": 'this is my cool art'
                                                        },
                                                        "contentImage": {
                                                            "type": "string",
                                                            "example": 'I am an image'
                                                        },
                                                    }
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/work/new": {
            "post": {
                "x-swagger-router-controller": "contents",
                "operationId": "contents-work-new",
                "summary": "Add content work",
                "description": 'Create new content work',
                "tags": ["Content"],
                "description": `[Content creation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/content/work/new"})`,
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "contentUserId": {
                                    "type": "string",
                                    "example": '5e51354eb2f340002b4cb87a'
                                },
                                "contentTitle": {
                                    "type": "string",
                                    "example": 'Awesome paintings'
                                },
                                "contentDescription": {
                                    "type": "string",
                                    "example": 'this is my cool art'
                                },
                                "file": {
                                    "type": "Binary",
                                    "example": '...'
                                },
                                "contentArtist": {
                                    "type": "string",
                                    "example": 'I am an artist'
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Account validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Account does not exists'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "ContentWork created successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'ContentWork created with success'
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/reaction/new": {
            "post": {
                "x-swagger-router-controller": "contents",
                "operationId": "contents-reaction-new",
                "summary": "Add content reaction",
                "description": 'Create new content reaction',
                "tags": ["Content"],
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "userId": {
                                    "type": "string",
                                    "example": '5e51354eb2f340002b4cb87a'
                                },
                                "contentId": {
                                    "type": "string",
                                    "example": 'A5e51354eb2f340002b4cb87a'
                                },
                                "contentDescription": {
                                    "type": "string",
                                    "example": 'this is my cool reaction'
                                },
                                "contentImage": {
                                    "type": "Binary",
                                    "example": '...'
                                },
                                "contentTag": {
                                    "type": "string",
                                    "example": 'tags'
                                },
                                "typeOfReaction": {
                                    "type": "string",
                                    "example": ''
                                },
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Account validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Account does not exists'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Content reaction created successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Content(Reaction) created with success'
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/reaction/list/contentId/:contentId": {
            "get": {
                "x-swagger-router-controller": "contents",
                "operationId": "reaction lists by content Id",
                "summary": "get reaction list by content id",
                "description": 'Get reactions list by content id',
                "tags": ["Content"],
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "Reaction list fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "_id": {
                                                    "type": "String",
                                                    "example": "",
                                                },
                                                "user": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "contentDescription": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "contentTag": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "contentImage": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "typeOfReaction": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/reaction/list/userId/:userId": {
            "get": {
                "x-swagger-router-controller": "contents",
                "operationId": "reaction lists by user Id",
                "summary": "get reaction lists by user id",
                "description": 'Get reactions list by user id',
                "tags": ["Content"],
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "Reaction list fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "_id": {
                                                    "type": "String",
                                                    "example": "",
                                                },
                                                "user": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "contentDescription": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "contentTag": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "contentImage": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "typeOfReaction": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/promotion/new": {
            "post": {
                "x-swagger-router-controller": "contents",
                "operationId": "contents-promotion-new",
                "summary": "Add content promotion",
                "description": 'Create new content promotion',
                "tags": ["Content"],
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "userId": {
                                    "type": "string",
                                    "example": '5e51354eb2f340002b4cb87a'
                                },
                                "contentId": {
                                    "type": "string",
                                    "example": '5e51354eb2f340002b4cb87a'
                                },
                                "contentDescription": {
                                    "type": "string",
                                    "example": 'this is my cool'
                                }
                            }
                        }

                    }
                ],
                "responses": {
                    '406': {
                        "description": "Account validation",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 406
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Account does not exists'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Content promotion created successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "msg": {
                                                    "type": "string",
                                                    "example": 'Content Promotion created with success'
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/promotion/list/userId/:userId": {
            "get": {
                "x-swagger-router-controller": "contents",
                "operationId": "promotion lists by user Id",
                "summary": "get promotion lists by user id",
                "description": 'Get promotion list by user id',
                "tags": ["Content"],
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "Promotion list fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "_id": {
                                                    "type": "String",
                                                    "example": "",
                                                },
                                                "user": {
                                                    "type": "String",
                                                    "example": ''
                                                },
                                                "contentDescription": {
                                                    "type": "String",
                                                    "example": ''
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/content/work/all/limit/:limit/page/:page/userId/:userId": {
            "get": {
                "x-swagger-router-controller": "contents",
                "operationId": "contents-work-get-all",
                "summary": "Get content works",
                "description": 'Get all content works by pagination',
                "tags": ["Content"],
                "description": `[Content fetch link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/content/work/all/limit/:limit/page/:page"})`,
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "ContentContribution fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "per_page": {
                                                    "type": "number",
                                                    "example": 10
                                                },
                                                "total": {
                                                    "type": "number",
                                                    "example": 42
                                                },
                                                "total_pages": {
                                                    "type": "number",
                                                    "example": 4
                                                },
                                                "data": {
                                                    "properties": {
                                                        "contentDeleted": {
                                                            "type": "booleon",
                                                            "example": false
                                                        },
                                                        "_id": {
                                                            "type": "string",
                                                            "example": "5e51489c01a9f50461ae7bf4"
                                                        },
                                                        "contentUserId": {
                                                            "type": "string",
                                                            "example": '5e51354eb2f340002b4cb87a'
                                                        },
                                                        "contentTitle": {
                                                            "type": "string",
                                                            "example": 'Awesome paintings'
                                                        },
                                                        "contentDescription": {
                                                            "type": "string",
                                                            "example": 'this is my cool art'
                                                        },
                                                        "contentArtist": {
                                                            "type": "string",
                                                            "example": 'I am an artist'
                                                        },
                                                        "contentImage": {
                                                            "type": "string",
                                                            "example": 'I am an image'
                                                        },
                                                    }
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
        "/api/v1/passion/all/limit/:limit/page/:page": {
            "get": {
                "x-swagger-router-controller": "passons",
                "operationId": "passions",
                "summary": "Get passions",
                "description": 'Get all passions by pagination',
                "tags": ["Passion"],
                "description": `[Passion fetch link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/passion/all/limit/:limit/page/:page"})`,
                "parameters": [

                ],
                "responses": {
                    '200': {
                        "description": "Passion fetched successfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "per_page": {
                                                    "type": "number",
                                                    "example": 10
                                                },
                                                "total": {
                                                    "type": "number",
                                                    "example": 42
                                                },
                                                "total_pages": {
                                                    "type": "number",
                                                    "example": 4
                                                },
                                                "data": {
                                                    "properties": {
                                                        "_id": {
                                                            "type": "string",
                                                            "example": "5e51489c01a9f50461ae7bf4"
                                                        },
                                                        "passionImage": {
                                                            "type": "string",
                                                            "example": '5e51354eb2f340002b4cb87a'
                                                        },
                                                        "passionTitle": {
                                                            "type": "string",
                                                            "example": 'Painting'
                                                        },
                                                        "passionDescription": {
                                                            "type": "strnig",
                                                            "example": "My passion, my life"
                                                        },
                                                        "passionDeleted": {
                                                            "type": "booleon",
                                                            "example": false
                                                        },
                                                        "dateOfCreation": {
                                                            "type": "string",
                                                            "example": '2020-02-22T21:34:15.843Z'
                                                        },
                                                        "dateOfLastUpdate": {
                                                            "type": "string",
                                                            "example": '2020-02-22T21:34:15.843Z'
                                                        },
                                                    }
                                                }

                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
                    },
                }
            }
        },
    }
};

module.exports = swaggerDocument;