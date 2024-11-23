Setup hardhat project:

 1. npm init --yes
 2. npm install --save -dev hardhat
 3. npx hardhat      [hardhat.config.js]
 4. npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

After written smart contracts : compile with hardhat

5. npx hardhat compile

Testing contract with Mocha Framework

Mocha is framework and chai is library.


Run test code :
6. npx hardhat test