/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
  'index.js': {
    file: {
      contents: `
import express from 'express';
import Web3 from 'web3';
const app = express();
const port = 3111;


  
app.get('/', async (req, res) => {
  console.log('/ was called!');
  try{
      // Create a new instance of the Web3 object
    const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/687b10d6eac847e78f6945a71625de17'));

    
    // Retrieve the current block number
    const blockNumber = await web3.eth.getBlockNumber().then(function(blockNumber) {
  
      // Display the block number on the console
      console.log('Current Ethereum block number: ' + blockNumber);
      return blockNumber
    });

    res.send('Current Ethereum block number: ' + blockNumber);
  } catch(error)  {
    console.log(error)
    res.send("error")
  }
});
  
app.listen(port, () => {
    console.log(\`App is live at http://localhost:\${port}\`);
});`,
    },
  },
  'package.json': {
    file: {
      contents: `
          {
            "name": "example-app",
            "type": "module",
            "dependencies": {
              "express": "latest",
              "nodemon": "latest",
              "web3": "1.5.2"
            },
            "scripts": {
              "start": "nodemon index.js"
            }
          }`,
    },
  },
};
