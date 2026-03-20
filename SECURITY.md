# Security Policy

## Supported Versions

As this is a continuously deployed personal portfolio, only the latest commit on the `main` branch is officially supported for security updates. 

| Version | Supported          |
| ------- | ------------------ |
| `main`  | :white_check_mark: |
| `< v1.0`| :x:                |

## Scope and Firebase Configuration

This project is a static, client-side frontend application built with React and Three.js, deployed via Vercel. 

**Note on Firebase:** This application utilizes Firebase for backend services. You may find Firebase configuration variables (such as `apiKey`, `projectId`, etc.) exposed in the client-side code. **This is by design.** In Firebase's architecture, these keys only identify the Firebase project to the Google servers and are intended to be public. Security is enforced strictly through **Firebase Security Rules** on the database and storage levels, not by hiding the API keys. 

Reports regarding exposed frontend Firebase configuration keys will be closed as `working as intended`.

## Reporting a Vulnerability

If you discover a legitimate security vulnerability within this project, please do not disclose it publicly by creating a GitHub Issue. 

Instead, please report it via email to ensure it can be addressed responsibly:

1. Send an email to: **naveenoshada15@gmail.com**
2. Include "SECURITY VULNERABILITY: 3D Portfolio" in the subject line.
3. Provide a clear description of the vulnerability, the steps to reproduce it, and any potential impact.

I will acknowledge receipt of your vulnerability report within 48 hours and strive to send you regular updates about my progress in fixing it. 

Thank you for helping keep this project secure!
