# Azure DevOps OAuth – Node POC

This is a simple Node.js project that shows how an OAuth integration with Azure DevOps works.
It is a learning and demo project made in a production-style way.

The goal of this project is to understand:
- How OAuth 2.0 flow works
- How PKCE and state protect the flow
- How tokens can be stored securely
- How to structure code safely

This project uses dummy credentials, so real Azure DevOps data is not accessed.

---

## What this project does

- Starts an OAuth flow using `/connect`
- Generates `state` and PKCE values
- Redirects user to Azure DevOps authorize page
- Handles callback at `/callback`
- Encrypts token using AES-256-GCM
- Stores encrypted token in SQLite database
- Makes a sample Azure DevOps API call (`/projects`)
- Handles failures safely without crashing

---

## Tech used

- Node.js
- Express
- Axios
- SQLite
- crypto (AES-GCM encryption)
- dotenv

---

## How to run the project

1. Install dependencies  
   npm install

2. Create environment file  
   Copy `.env.example` and rename it to `.env`  
   Fill dummy or real values as needed

3. Start the server  
   node index.js

Server will start on:  
http://localhost:3000

---

## Available routes

- `/`  
  Health check

- `/connect`  
  Starts OAuth flow

- `/callback`  
  OAuth callback handler

- `/projects`  
  Azure DevOps API call skeleton (expected to fail with dummy token)

---

## Important notes

- Dummy credentials are used for demo
- OAuth flow still works end-to-end
- Token is encrypted before storing
- No secrets are logged anywhere
- Errors are handled safely
- Redirect URI is environment-based and can be changed per environment.


---

## Folder structure

- index.js → main server file
- db.js → SQLite setup
- crypto-util.js → encryption logic
- tokens.db → SQLite database
- docs/ → documentation files




