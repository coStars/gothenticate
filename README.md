## gothenticate

**How to run**

  * git clone the file
  * Install dependencies with npm i
  * Install database & run server ``npm run start``
  * Create database gothenticate with ``npm run db:create``
  * Run the tests with ``npm run test``

**Key functionality/Features based on user stories**

* [x] When new user sign-up, check if email already exists.
(if it already exists, the user gets a message to change the email).

* [x] Specify the validation condition to be more efficient.
(limit the length of password and the acceptable characters for email).

* [x] Hash/Encrypt user password and store it in database.

**Tests**

- [x] database functions.
- [x] helpers functions.
- [x] server routes.
