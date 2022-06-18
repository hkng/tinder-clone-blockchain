
## Setup Tailwind
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

   update tailwind.config.js
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
   
   update styles\gloabl.css and add following line
    @stailwind base;
    @tailwind components;
    @tailwind utilities;

## Setup hardhat
   cd smart-contract
   npx hardhat
    > Create a basic sample project
    select smart-contract folder
    
    npm install @openzeppelin/contracts
    npm install dotenv
    npm install @nomiclabs/hardhat-waffle

    update hardhat.config.js

## Setup Alchemy
   https://www.alchemy.com/

   login and create new project called 
    tinder-clone-blockchain

   cd smart-contract
   create .env with your ALCHEMY API and RINKEBY private key
     ALCHEMY_API_URL =
     RINKEBY_PRIVATE_KEY = 

   npx hardhat run scripts/deploy.js --network rinkeby

   TINDER CONTRACT ADDRESS:  0x40859ac356Da2304776b059E6cf6fbF4CA55F6ab

## Rinkeby test blockchain network
   Get testing etherum token
   https://faucets.chain.link/rinkeby

## Next.js
   npm install react-icon
   npm install react-tinder-card
   npm install @faker-js/faker
   npm install react-moralis
   npm install moralis

## Moralis setup
  https://admin.moralis.io/login
   create a new server
## Web 3 library
    npm install @web3auth/web3auth magic-sdk @magic-sdk/types walletconnect/utils @walletconnect/web3-provider

## Environment variable setup
   create .env.local file with following variable
      SANITY_PROJECT_ID = 
      SANITY_TOKEN = 
      NEXT_PUBLIC_MORALIS_SERVER_URL =
      NEXT_PUBLIC_MORALIS_APP_ID = 
      MORALIS_MASTER_KEY = 
      ALCHEMY_API_URL = 
      WALLET_PRIVATE_KEY = 

      Remark: NEXT_PUBLIC_ prefix is used by Next.js

## Sanity
    cd studio 
    npm install @sanity/client
    sanity init
    sanity start
## smart-contract deployment
    cd smart-contract
    npx hardhat
    npx hardhat run scripts/deploy.js --network rinkeby

    TINDER CONTRACT ADDRESS:  0x8bd5E9363c68c405105383e00c713D0b2eBC6B58

    update Contract address at lib/constants.js

    copy smart-contract/artifacts/contracts/TinderERC721.json to lib/TinderERC721.json folder


## Reference
    https://www.youtube.com/watch?v=4YjUaQKE6-I&t=1127s
