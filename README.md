![Claim-Banner](/assets/banner.png "Claim")
## Welcome to the Insurance App - Claim Module. 
###### Version 1.0

This is a ***Spring-Boot MySql React*** project. With this application we try to manage the claim module of an insurance process in order to provide information to the App. 

### Technologies used
| Tecnology | Description |
| --------- | ----------- |
| Spring Boot | for building our backend |
| MySQL | to store our entities in a database |
| React | to build our frontend |


#### Spring Boot
We use Spring Boot to build our API backend.
* The project structure was made using [Spring Initializer](https://start.spring.io/).
* It contains eight **entities**:
    - Car
    - Claim
    - Insurance
    - Role
    - Status
    - Type
    - User
    - UserInfo
* This Backend also contains a ***unit test*** module.

#### MySQL
We use MySQL as a `relational database model` to store data
* This is the ***diagram*** of our [Order Management MySQL database](https://drawsql.app/teams/minardo/diagrams/order-management "Order Management MySQL diagram")
![Database](/assets/database.png "Database")

#### React
We installed or updated *nodejs* to create our React module for our Front:
```sh
npm install npm -g 
cd main directory
npx create-react-app rm-frontend
```
We worked with `axios` for doing http requests:
```sh
npm install --save axios
```
We install bootstrap to use con styles:
```sh
npm install bootstrap
```
We also installed `react-roter-dom` for manage routes and more:
```sh
npm install --save react-router-dom
```
We also used `react-hook-form` for manage and validate forms:
```sh
npm install react-hook-form
```
We used SweetAlert2 for alerts:
```sh
npm install --save sweetalert2
```
We installed `@emailjs/browser` for [sending emails](https://dashboard.emailjs.com/admin/templates "Emailjs"):
```sh
npm install @emailjs/browser --save
```
We used ` react-doc-viewer` for viewing documents:
```sh
npm install react-doc-viewer --save
```

### What we learned?
> Related with the back-end:
>> Better experience working with relationship between entities. 
>> How to configurate and work with uploading files (word/pdfs).
>> Allow connection to the front-end.

> Related with the front-end:
>> Implementing process to interact with the backend.
>> Better use of react-hook-form to validate and manage forms.

> Complete a full stack Java application.

> Good introduce to [Trello Board](https://trello.com/b/ExOWpGHq/claim "Trello")

![Claim-Banner](/assets/banner.png "Claim")
