# OAuth Flow Specification

This document explains how the OAuth flow works in this project.

## Flow Overview

This project uses OAuth 2.0 Authorization Code flow with PKCE for Azure DevOps.

## Step-by-Step Flow

1. User opens `/connect`
2. Server generates:
   - `state` value for CSRF protection
   - `code_verifier` and `code_challenge` for PKCE
3. User is redirected to Azure DevOps authorize URL
4. Azure DevOps redirects back to `/callback`
5. Server validates the `state`
6. Authorization code is exchanged for access token
7. Token is processed securely

## Security Measures

- State validation prevents CSRF attacks
- PKCE prevents authorization code interception
- No secrets are exposed in logs

This file documents the OAuth flow used in the project.
