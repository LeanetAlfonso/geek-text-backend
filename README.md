# Geek Text

Geek Text, online web application bookstore built using the MERN stack.

This is the backend for the Geek Text web app developed as a group project for CEN 4010 Software Engineering.

## Running Locally

Clone the repo

```
git clone https://github.com/LeanetAlfonso/geek-text-backend.git
```

Change directory

```
cd geek-text-backend
```

Install dependencies

```
npm install
```

Add environment variables

```
touch .env
echo mongoURI={enter_mongodb_url_here} >> .env
echo cookie_secret={enter_cookie_secret_here} >> .env
```


Run app

```
npm start
```
