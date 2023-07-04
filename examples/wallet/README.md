# Wallet

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Wallet/api](https://m3o.com/Wallet/api).

Endpoints:

## Transactions

List the transactions for a wallet


[https://m3o.com/wallet/api#Transactions](https://m3o.com/wallet/api#Transactions)

```js
const { WalletService } = require('m3o/wallet');

const walletService = new WalletService(process.env.M3O_API_TOKEN)

// List the transactions for a wallet
async function listTransactions() {
	const rsp = await walletService.transactions({
  "id": "b6407edd-2e26-45c0-9e2c-343689bbe5f6"
})
	console.log(rsp)
	
}

listTransactions()
```
## Delete

Delete a wallet


[https://m3o.com/wallet/api#Delete](https://m3o.com/wallet/api#Delete)

```js
const { WalletService } = require('m3o/wallet');

const walletService = new WalletService(process.env.M3O_API_TOKEN)

// Delete a wallet
async function deleteAwallet() {
	const rsp = await walletService.delete({
  "id": "b6407edd-2e26-45c0-9e2c-343689bbe5f6"
})
	console.log(rsp)
	
}

deleteAwallet()
```
## Read

Get wallet by id


[https://m3o.com/wallet/api#Read](https://m3o.com/wallet/api#Read)

```js
const { WalletService } = require('m3o/wallet');

const walletService = new WalletService(process.env.M3O_API_TOKEN)

// Get wallet by id
async function readAwallet() {
	const rsp = await walletService.read({
  "id": "b6407edd-2e26-45c0-9e2c-343689bbe5f6"
})
	console.log(rsp)
	
}

readAwallet()
```
## Debit

Debit a wallet


[https://m3o.com/wallet/api#Debit](https://m3o.com/wallet/api#Debit)

```js
const { WalletService } = require('m3o/wallet');

const walletService = new WalletService(process.env.M3O_API_TOKEN)

// Debit a wallet
async function debitWallet() {
	const rsp = await walletService.debit({
  "amount": "5",
  "id": "b6407edd-2e26-45c0-9e2c-343689bbe5f6",
  "reference": "test debit",
  "visible": true
})
	console.log(rsp)
	
}

debitWallet()
```
## Transfer

Make a transfer from one wallet to another


[https://m3o.com/wallet/api#Transfer](https://m3o.com/wallet/api#Transfer)

```js
const { WalletService } = require('m3o/wallet');

const walletService = new WalletService(process.env.M3O_API_TOKEN)

// Make a transfer from one wallet to another
async function transferMoney() {
	const rsp = await walletService.transfer({
  "amount": "5",
  "from_id": "b6407edd-2e26-45c0-9e2c-343689bbe5f6",
  "reference": "transfer money",
  "to_id": "default",
  "visible": true
})
	console.log(rsp)
	
}

transferMoney()
```
## Balance

Get the balance of a wallet


[https://m3o.com/wallet/api#Balance](https://m3o.com/wallet/api#Balance)

```js
const { WalletService } = require('m3o/wallet');

const walletService = new WalletService(process.env.M3O_API_TOKEN)

// Get the balance of a wallet
async function getBalance() {
	const rsp = await walletService.balance({
  "id": "b6407edd-2e26-45c0-9e2c-343689bbe5f6"
})
	console.log(rsp)
	
}

getBalance()
```
## Create

Create a new wallet


[https://m3o.com/wallet/api#Create](https://m3o.com/wallet/api#Create)

```js
const { WalletService } = require('m3o/wallet');

const walletService = new WalletService(process.env.M3O_API_TOKEN)

// Create a new wallet
async function createAnewWallet() {
	const rsp = await walletService.create({
  "description": "No explanation needed",
  "name": "Greatness"
})
	console.log(rsp)
	
}

createAnewWallet()
```
## Credit

Add credit to a wallet


[https://m3o.com/wallet/api#Credit](https://m3o.com/wallet/api#Credit)

```js
const { WalletService } = require('m3o/wallet');

const walletService = new WalletService(process.env.M3O_API_TOKEN)

// Add credit to a wallet
async function creditWallet() {
	const rsp = await walletService.credit({
  "amount": "10",
  "id": "b6407edd-2e26-45c0-9e2c-343689bbe5f6",
  "reference": "test credit",
  "visible": true
})
	console.log(rsp)
	
}

creditWallet()
```
## List

List your wallets


[https://m3o.com/wallet/api#List](https://m3o.com/wallet/api#List)

```js
const { WalletService } = require('m3o/wallet');

const walletService = new WalletService(process.env.M3O_API_TOKEN)

// List your wallets
async function listWallets() {
	const rsp = await walletService.list({})
	console.log(rsp)
	
}

listWallets()
```
