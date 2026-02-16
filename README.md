# smk7-app

**Overview**
smk7-app is a Laravel 12 application using Inertia.js and React for a modern SPA-style UI. The frontend is built with Vite, TypeScript, and Tailwind CSS.

**Tech Stack**
- Laravel 12
- PHP 8.2+
- Inertia.js
- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4
- Laravel Fortify (auth)
- Laravel Wayfinder

**Setup**
Prerequisites: PHP 8.2+, Composer, Node.js, npm, and a configured database.

1. Install PHP dependencies:
   `composer install`
2. Create the environment file:
   `cp .env.example .env`
3. Generate the app key:
   `php artisan key:generate`
4. Configure your database in `.env`, then run migrations:
   `php artisan migrate`
5. Install frontend dependencies:
   `npm install`
6. Start the dev stack:
   `composer run dev`
