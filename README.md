# MongoDb Template

Custom MongoDB template for NodeJS servers.

## Features

- async/await coding style
- Setup for connections to a MongoDB server with the functions:
  - connectToDbServer
  - createDb
	- closeConnectionToDbServer
- Basic support for Create Read Update Delete - CRUD operations, with the functions:
  - insertDocumentInCollection
  - getAllDocumentsFromCollection
  - updateDocumentInCollection
  - removeDocumentFromCollection
- Error handling with try/catch in all operations
- Usage example with the **main** Immediately Invoked Function Expression - IIFE

## Basic concepts

- Document = JS object
- Collection = SQL database table
- Projection = filtered query for specific fields

## Future development

- Create support for complex database queries
- Test Compass GUI
- Test **mongo** CLI

## Contibutions

Any comments and contributions are much welcome!

## License

[Do What The F*ck You Want To Public License](https://github.com/sindelio/mongodb-template/blob/master/LICENSE)
