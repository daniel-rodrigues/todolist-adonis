# Testing AdonisJs

## App -> ToDo list

Simple ToDo list

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Database
```bash
$ docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
