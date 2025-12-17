import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library Management API",
            version: "1.0.0",
            description: "API documentation for Library Management system",
        },
        servers: [
            {
                url: "http://localhost:3001",
            },
            {
                url: "https://library-management-postgresql.onrender.com"
            }
        ],
        components: {
            schemas: {
                Author: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        name: { type: "string", example: "John Doe" },
                        bio: { type: "string", example: "Author bio" },
                        books: {
                            type: "array",
                            items: { $ref: "#/components/schemas/Book" },
                        },
                    },
                },
                Book: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        title: { type: "string", example: "Book Title" },
                        price: { type: "number", example: 19.99 },
                        authorId: { type: "integer", example: 1 },
                    },
                },
                Error: {
                    type: "object",
                    properties: {
                        message: { type: "string", example: "Not found" },
                        status: { type: "integer", example: 404 },
                        errorCode: { type: "string", example: "BOOK_NOT_FOUND" },
                    },
                },
            },
        },
    },
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
