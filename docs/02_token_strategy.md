# Token Storage Strategy

This document explains how OAuth tokens are handled and stored.

## Storage Method

- Tokens are stored in a SQLite database (`tokens.db`)
- A dedicated `tokens` table is used

## Encryption

- Tokens are encrypted before storing
- AES-256-GCM encryption is used
- Encryption key is stored in environment variables

## Security Practices

- Tokens are never stored in plain text
- Tokens are never logged
- Initialization vector (IV) and auth tag are stored separately

This approach ensures secure handling of sensitive tokens.
