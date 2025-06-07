# Basic DB management project
(NodeJS, Express, SQLite, Bootstrap)

## plans

### backend

#### NodeJs + Express

- GET       /           landing page(hero, top rated bistros?, footer)
- GET       /data       bistros page(paginated?, search by name?, filtering?)
- GET       /bistros    get all bistros
- POST      /bistros    post new bistro
- DELETE    /bistros    delete bistro by id
- PUT       /bistros    update bistro data by id

#### SQLite

- bistros table (id: string PRIMARY KEY, name: string, city: string, price_range: number, has_open_space, service_type: string, logo: string, banner: string, isVisible: boolean)

- contacts table (id: string PRIMARY KEY, phone: string, email: string, website: string)

### frontend

#### plain HTML with Bootstrap