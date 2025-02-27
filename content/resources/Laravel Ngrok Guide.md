---
title: Laravel Ngrok Guide
draft: true
tags:
  - ngrok
  - laravel
  - development
MOC: "[[Resources Map]]"
created: 2025-02-27
modified: 2025-02-27
---
Some modifications are needed in order to make Laravel applications work with [[NGROK]] . Due to the nature of the solution, some additional code needs to be added in order to load the resources such as CSS and JS to the  application.

### 01: Create the Middleware
run the following command to create a Content Security Policy Middleware
```
php artisan make:middleware ContentSecurityPolicyMiddleware
```

### 02: Modify the Middleware
update the middleware like so:
```
<? php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ContentSecurityPolicyMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);
        $response->headers->set('Content-Security-Policy', 'upgrade-insecure-requests');

        return $response;
    }
}

```

### 03: Register the Middleware
enable the middleware globally using `AppServiceProvider.php`
```
use App\Http\Middleware\ContentSecurityPolicyMiddleware;
use Illuminate\Contracts\Http\Kernel;

public function boot()
{
    $kernel = app(Kernel::class);
    $kernel->pushMiddleware(ContentSecurityPolicyMiddleware::class);
}

```

### 04: Clear cache and restart
```
php artisan config:clear
php artisan cache:clear
php artisan serve

```

This will automatically add CSP header to all responses. Now you can head back to [[NGROK]] and start the setup from there.