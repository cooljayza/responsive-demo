# Welcome to eat-easy ��
​
This is a simple phone book application.
​
## Getting Started
​
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
​
​
### Prerequisites
​
What things you need to install the software and how to install them.
​
​
- node
- npx (should already come installed with node)
- npm 
- docker for your operating system
​
​
### Installing
​
A step by step series of examples that tell you how to get a development env running.
​
### Node
​
https://nodejs.org/en/
​

## Running development
Make sure you are in the root folder of the project.
​
#### Install dependencies
```
npm install
```
​
## Running the tests
​
```sh
npm test
```
​
## Usage
​
```sh
npm start
```
​
## Run tests
​
```sh
npm test
```
​
## Run e2e tests
​
```sh
npm test:e2e
```
​
​
```
TODO
​
```
​
### Detail testing methods
​
Explain what these tests test and why
​
```
TODO
```
​
## Docker

### DEV
```sh
docker build -f Dockerfile.dev -t myapp:dev .
```

```sh
docker run -p 3000:3000 -e CHOKIDAR_USEPOLLING=true myapp:dev
```

### PROD
```sh
docker build -t myapp:prod .
```

```sh
docker run -p 80:80 myapp:prod
```

## Docker Compose
### PROD
```sh
docker-compose build
```

```sh
docker-compose up
```
## Environments
​
Provide a detailed list of current environments, how they can accessed and any other relevant information.
​
### DEV
​
## UAT
​
## PROD 
​
Add additional notes about how to deploy this on a live system
​
## Built With
​
Details of the tech stack that has been used.
​
- [REACT](https://reactjs.org/) - The client framework used
- [Material UI](https://material-ui.com/) - React components library for faster and easier web development.
- [Webpack](https://webpack.js.org/) - s a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.
​
​
## Architecture
​
A basic architecture diagram or description of the chosen architecture should be detailed here.
​
## Infrastructure
​
A list of infrastructure requirements
​
## Services
​
A list of all services used in this project.
​
| Service Name | Owner/Admin    | Service Details                                                                                  |
| ------------ | -------------- | ------------------------------------------------------------------------------------------------ |
| Firebase     | wilson.cardoso@eblocks.co.za | Details firebase deployments                                                       |
| AWS          | wilson.cardoso@eblocks.co.za | Details AWS deployments                                                            |
|              |                |                                                                                                  |
​
## Contributing
​
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on the Eblocks standard for commit messages and the accepted pull request process.
​
## Versioning
​
We use [SemVer](http://semver.org/) for versioning. Versioning occurs automatically in the pipelines using [Semantic Release](https://github.com/semantic-release/semantic-release). For the versions available, see the tags on this repository.
​
## Changelog
​
A running changelog can be found here: [CHANGELOG.md](CHANGELOG.md)
​
## Authors
​
- **Wilson Cardoso** <wilson.cardoso@eblocks.co.za>
​
## Licenses
​
Place the result of `npx license-checker --summary` here
​
```
├─ MIT: 31
├─ ISC: 19
├─ Apache-2.0: 2
├─ BSD-3-Clause: 1
├─ BSD-2-Clause: 1
├─ CC-BY-3.0: 1
├─ CC0-1.0: 1
└─ (MIT AND CC-BY-3.0): 1
```
​
## Troubleshooting
​
List any common errors and their solutions
​
- Some common error
  > solution
​
## Meta
​
| Version | Author                       | Date       |
| ------- | ---------------------------- | ---------- |
| 0.0.1   | Wilson Cardoso <wilson.cardoso@eblocks.co.za> | 15/01/2021 |
​
