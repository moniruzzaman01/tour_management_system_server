# [Tour Management System Backend](https://tour-management-system-server.vercel.app)

## Features (available for admin):

- Can create a tour plan
- Can see all tour plans and also a single tour plan filtered by tour id
- Can update a specefic tour plan filtered by tour id
- Can get most viewed/ cheapest/ premium tour plans for different kind of people

## All Apis

- get api for all tours `(/api/v1/tours)`
- post api for add/create new tour `(/api/v1/tours)`
- get api for get a single tour's details using id `(/api/v1/tours/:id)`
- get api for most viewed top 3 tours `(/api/v1/tours/trending)`
- get api for cheapest tour plan `(/api/v1/tours/cheapest)`
- get api for premium tour plan for premium customer `(/api/v1/tours/premium)`
- patch api for edit a specefic tour plan filtered by id `(/api/v1/tours/:id)`
