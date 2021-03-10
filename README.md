# Mock-Server

Mock-Server is a simple http server to mock endpoints.


## Usage

### Config file

 - Object:
```json
{
  "url": "/test/:id",
  "method": "GET",
  "response": {
    "status": 200,
    "headers": {},
    "body": {
      "test": 123
    }
  }
}
```

 - Array:
```json
[
  {
    "url": "/test/:id",
    "method": "GET",
    "response": {
      "status": 200,
      "headers": {},
      "body": {
        "test": 123
      }
    }
  } 
]
```

### Docker-compose
```yaml
version: "3.8"

services:
  
  mock-server:
    image: marcosfmartins/mock-server
    ports:
      - 8080:8080
    volumes:
      - ../config/mock/mock.json:/app/data/mock.json
```

## License
[MIT](LICENSE)