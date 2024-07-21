
# Department of Interior IPaC Team Coding Test

Upgraded versions of original [IPaC Coding Test](https://github.com/aww2539/IPaC-Project-Front-End-Coding-Test). 

## Features
- Python script parses JSON file, connects to AWS RDS, creates necessary tables, and seeds the database with the parsed JSON data.
- 2 separate, fullstack versions of the application demonstrating knowledge in GraphQL and REST API creation.
- GraphQL version connects to deployed AWS AppSync API that is connected to the RDS database created by the Python script.
- Python/Flask version connects directly to RDS database and creates REST API.
- Both versions use a React/TypeScript client with slight differences in how they handle data due to the API differences and AWS AppSync capabilities.

## Technologies

**Client:** TypeScript, React, Material UI, GraphQL, Apollo Client

**Server:** GraphQL/AppSync, Python/Flask

**Database:** Postgres

**AWS:** AppSync, Aurora/RDS
