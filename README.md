### Install project

Start docker container

```shell
docker-compose up -d
```

Install dependency
```shell
composer install
```

---

Route

GET /api/currency - Get all currency

WebSocket

Chanel currency-info has updated information about all currency

---

Test websocket url GET /laravel-websockets
