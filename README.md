# OriginX Subgraph with Ponder

![Ponder Logo](./public/logo-ponder.png)

## 🚀 Overview
This project is a **Ponder Event Listener** setup that listens to on-chain events from various smart contracts on the **Sonic Blaze Testnet**. It records events like **deposits, withdrawals, staking, swaps, approvals, and etc** into a structured database.

## 📌 Features
- Listens to multiple smart contracts.
- Stores events efficiently using a single **handleEvent** function.
- Supports **staking, swapping, deposits, withdrawals, and token transfers**.
- Uses **Ponder** for indexing and event tracking.

## 📂 Project Structure
```
📦 ponder-event-listener
├── 📄 ponder.config.ts  # Ponder configuration (networks & contracts)
├── 📄 ponder.schema.ts  # Defines on-chain table schemas
├── 📄 src/index.ts      # Main event handlers
├── 📄 README.md         # Documentation
```

## ⚙️ Installation
To set up the project locally:
```sh
# Clone the repository
git clone https://github.com/your-username/ponder-event-listener.git
cd ponder-event-listener

# Install dependencies
yarn install
```

## 🏗️ Usage
Run the Ponder indexer to start listening for events:
```sh
yarn dev
```

## 📡 Supported Events
### OriginX Contract
- `Deposit`
- `Withdrawal`
- `Swap`

### Staking Contracts (EulerV2, Lombard Finance, SiloV2, SpectraV2, Origin Protocol)
- `APYUpdated`
- `EmergencyWithdraw`
- `PartialWithdraw`
- `Staked`
- `WithdrawAll`

### Token Contracts (USDCe, wS, OS, S, LBTC)
- `Approval`
- `Transfer`

### OriginX AVS Contracts (OriginXServiceManager)
- `OriginXTaskResponded`

## ⚡ Configuration
Modify the **ponder.config.ts** file to add/remove contracts or update network settings.
```js
export default createConfig({
  networks: {
    sonicBlazeTestnet: {
      chainId: 57054,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    OriginX: { ... },
    EulerV2: { ... },
    // Add more contracts here
  },
});
```

## 📜 License
This project is licensed under the **MIT License**.

## 💡 Contributing
Feel free to submit issues or pull requests to improve the project.

## 🔗 Links
- [Ponder Documentation](https://ponder.sh/docs)
- [Viem Library](https://viem.sh/)