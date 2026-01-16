# Environment Setup Runbook

This document describes the environment configuration required to run the project.

## Required Environment Variables

- ADO_CLIENT_ID
- ADO_CLIENT_SECRET
- ADO_REDIRECT_URI
- TOKEN_ENCRYPTION_KEY

## Setup Steps

1. Copy `.env.example` to `.env`
2. Fill required values in `.env`
3. Restart the server after changes

## Notes

- `.env` file should not be committed to version control
- Redirect URI can be configured per environment (dev, stage, prod)
- Dummy values can be used for testing

This file helps in setting up and running the project correctly.

## Redirect URI Configuration

The redirect URI is configured using environment variables.
This allows different redirect URIs for development, staging, and production environments.

