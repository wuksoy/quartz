---
title: NGROK
draft: true
tags:
  - development
  - ngrok
  - testing
MOC: "[[Resources Map]]"
created: 2025-02-27
modified: 2025-02-27
---
`ngrock` is a service that helps serve applications and APIs securely from localhost or dev/test/sandbox environment with just one command. It instantly creates an authenticated, public HTTPS URL for your app running locally, equipping you to preview it with clients and stakeholders over secure tunnels.  This document is created for quick reference on how to setup and start using `ngrok`

## Installation

Install `ngrok` via Chocolatey with the following command
```
choco install ngrok
```

## Configuration
Add your authtoken: If you dont have an auth token, sign up to their free plan [here](https://ngrok.com/signup?ref=downloads)
```
ngrok config add-authtoken <token>
```

then start an endpoint
```
ngrok http http://localhost:8080
```

check the [documentation]([Overview | ngrok documentation](https://ngrok.com/docs)) for more details

## Other Details

### Laravel
for Laravel specific applications, there are some additional modifications that need to be run in order to make it work correctly. These modifications have been documented in [[Laravel Ngrok Guide]]