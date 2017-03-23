## gothenticate

**How to run**

    * git clone the file
    * Install dependencies with npm i
    * Create database with npm run db:create
    * migrate tables with npm run migrate
    * Then run node server.js

**Key functionality/Features based on user stories**
---

* [x] When new user sign-up, check if email already exists.
(if it already exists, the user gets a message to change the email).

* [x] Specify the validation condition to be more efficient.
(limit the length of password and the acceptable characters for email).

* [x] Encrypt user password and store it in database.

**Tests**
- [ ] database functions.
- [ ] helpers functions.
- [ ] server routes.
