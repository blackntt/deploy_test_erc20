## Deployment steps:

#### Prepare .env with format:

```
PRIVATE_KEY=
BASESCAN_API_KEY=
```

#### Replace name of token in script/deploy.js

#### Deploy by 2 following steps:

```
npx hardhat run --network base-goerli  ./scripts/deploy.js
npx hardhat verify --network base-goerli <Contract address> <Token name> <token symbol>
```
