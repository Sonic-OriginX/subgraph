import { onchainTable } from "ponder";

export const Deposit = onchainTable("Deposit", (t) => ({
  id: t.text().primaryKey(),
  token: t.text(),
  from: t.text(),
  to: t.text(),
  amount: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const OwnershipTransferred = onchainTable("OwnershipTransferred", (t) => ({
  id: t.text().primaryKey(),
  previousOwner: t.text(),
  newOwner: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const Paused = onchainTable("Paused", (t) => ({
  id: t.text().primaryKey(),
  account: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const Swap = onchainTable("Swap", (t) => ({
  id: t.text().primaryKey(),
  tokenIn: t.text(),
  tokenOut: t.text(),
  user: t.text(),
  amount: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const Unpaused = onchainTable("Unpaused", (t) => ({
  id: t.text().primaryKey(),
  account: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const Withdrawal = onchainTable("Withdrawal", (t) => ({
  id: t.text().primaryKey(),
  token: t.text(),
  from: t.text(),
  to: t.text(),
  amount: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const APYUpdated = onchainTable("APYUpdated", (t) => ({
  id: t.text().primaryKey(),
  oldAPY: t.text(),
  newAPY: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const EmergencyWithdraw = onchainTable("EmergencyWithdraw", (t) => ({
  id: t.text().primaryKey(),
  withdrawer: t.text(),
  amount: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const PartialWithdraw = onchainTable("PartialWithdraw", (t) => ({
  id: t.text().primaryKey(),
  withdrawer: t.text(),
  amount: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const Staked = onchainTable("Staked", (t) => ({
  id: t.text().primaryKey(),
  staker: t.text(),
  amount: t.text(),
  durationInDays: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const WithdrawAll = onchainTable("WithdrawAll", (t) => ({
  id: t.text().primaryKey(),
  withdrawer: t.text(),
  amount: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const Approval = onchainTable("Approval", (t) => ({
  id: t.text().primaryKey(),
  owner: t.text(),
  spender: t.text(),
  value: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const EIP712DomainChanged = onchainTable("EIP712DomainChanged", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const Transfer = onchainTable("Transfer", (t) => ({
  id: t.text().primaryKey(),
  from: t.text(),
  to: t.text(),
  value: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const OriginXTaskResponded = onchainTable("OriginXTaskResponded", (t) => ({
  id: t.text().primaryKey(),
  taskIndex: t.text(),
  task_accountAddress: t.text(),
  task_stakingAddress: t.text(),
  task_taskCreatedBlock: t.text(),
  operator: t.text(),
  signature: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));