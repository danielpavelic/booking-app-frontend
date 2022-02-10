## BOOKING APP DEMO - CocaCola & Pepsi

Angular (latest) frontend for CocaCola&Pepsi Booking App.

## App routes (pages)

Please see list of routes below:

- / (Login - Auth method RxJs store)
- /dashboard/availability
- /dashboard/availability/room/<roomId>
- /dashboard/book
- /dashboard/my-booking

## Requirements

Node JS backend running before UI of the app can be loaded.

* Node JS
* Git
* Mongo DB Cluster

## App setup

Clone the repo and install the dependencies.

```bash
git clone <REPO>
```

```bash
npm install
```

## Steps for loading the App

Start the app by running the following command in the terminal (Node JS backend must be loaded before).

```bash
ng serve
```

Open [http://localhost:4200](http://localhost:4200) for Login page.


## ENV specifics

API base URL: 'http://localhost:3000' located in src/environments/environments.ts file
