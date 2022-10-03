# Geek Text

Geek Text is an online web application bookstore built using the MERN stack.

This is the backend for the Geek Text web app developed as a group project for our Spring 2021 CEN 4010 Software Engineering course.

## Development Team
- [Andrew Andersen](https://github.com/pandamon99)
- [Azhar Ali](https://github.com/azhareus)
- [Celeste Amengual](https://github.com/celesteamen)
- [Jonathan Attias Khoudari](https://github.com/jattias96)
- [Leanet Alfonso Azcona](https://github.com/leanetalfonso)
- [William Aranzabal](https://github.com/cab-aranw)

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
