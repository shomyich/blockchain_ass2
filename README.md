# Web3 Token Balance Checker

This simple Node.js script allows you to check the token balance of a specific Ethereum address using the Web3 library and Infura API. This can be useful for monitoring token holdings or performing automated actions based on token balances.

## Prerequisites

- Node.js installed on your machine
- Infura API key (you can obtain one by signing up on [Infura](https://infura.io/))



## Configuration

1. Open the script (`index.js`) in a text editor.

2. Replace `YOUR_INFURA_API_KEY` with your Infura API key in the `infuraApiKey` variable.

3. Modify the `contractAddress` variable to the Ethereum address of the ERC-20 token contract you want to check.

4. Update the `abiFilePath` variable if your ABI file is located in a different path.

5. Set the `userAddress` variable to the Ethereum address for which you want to check the token balance.

## Usage

Run the script using the following command:

```bash
node index.js
```

The script will connect to the specified Infura node, interact with the provided ERC-20 token contract, and display the token balance of the specified user address.

## Notes

- Ensure that your Infura API key is kept confidential. Never share it publicly.
- Make sure your Ethereum addresses are in the correct format and have the necessary permissions to query the token balance.

Feel free to customize the script according to your needs or incorporate it into your projects for automated token balance monitoring.

## Screenshots
![image](https://github.com/shomyich/blockchain_ass2/assets/129707076/4af137a1-cca1-41b5-86fe-1ad6a4fbe9a4)
![image](https://github.com/shomyich/blockchain_ass2/assets/129707076/dffead5a-a292-4f83-be5c-6ab5fd10f1cb)
![image](https://github.com/shomyich/blockchain_ass2/assets/129707076/22c6f594-2526-4f5e-8cc9-fe726a975693)


