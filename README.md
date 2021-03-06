# Testing AdonisJs

## App -> ToDo list

Simple ToDo list

## Setup

Install Adonis

```bash
$ npm i -g @adonisjs/cli
```

Use the adonis command to install the blueprint

```bash
$ adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Server UP

```bash
$ docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

### Create Database

```bash
$ psql CREATE DATABASE NameDB;
```

### Migrations

Run the following command to run startup migrations.

```bash
$ adonis migration:run
```
### Run

```bash
$ adonis serve --dev
```

