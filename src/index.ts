import { ponder } from "ponder:registry";
import { createHash, randomBytes } from "crypto";
import {
  Deposit,
  Approval,
  Swap,
  Transfer,
  Withdrawal,
  OriginXTaskResponded
} from "ponder:schema";

const handleEvent = async (table: any, event: any, context: any, extraValues = {}) => {
  const randomValue = randomBytes(16).toString("hex");
  const id = createHash("sha256")
    .update(`
      ${event.transaction.hash}
      -${event.block.number}
      -${event.block.timestamp}
      -${randomValue}
      `.trim())
    .digest("hex");

  await context.db.insert(table).values({
    id: id,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
    ...extraValues,
  });
};

ponder.on("OriginX:Deposit", async ({ event, context }) => {
  await handleEvent(Deposit, event, context, {
    from: event.args.from,
    to: event.args.to,
    amount: event.args.amount,
  });
});

ponder.on("OriginX:Swap", async ({ event, context }) => {
  await handleEvent(Swap, event, context, {
    tokenIn: event.args.tokenIn,
    tokenOut: event.args.tokenOut,
    user: event.args.user,
    amount: event.args.amount,
  });
});

ponder.on("OriginX:Withdrawal", async ({ event, context }) => {
  await handleEvent(Withdrawal, event, context, {
    from: event.args.from,
    to: event.args.to,
    amount: event.args.amount,
  });
});

const stakingEvents = [
  "APYUpdated", "EmergencyWithdraw", "PartialWithdraw", "Staked", "WithdrawAll"
] as const;

(["EulerV2", "Lombard Finance", "SiloV2", "SpectraV2", "Origin Protocol"] as const).forEach(contract => {
  stakingEvents.forEach(eventName => {
    ponder.on(`${contract}:${eventName}`, async ({ event, context }) => {
      await handleEvent(eval(eventName), event, context, {
        ...('withdrawer' in event.args && { withdrawer: event.args.withdrawer }),
        ...('staker' in event.args && { staker: event.args.staker }),
        ...('amount' in event.args && { amount: event.args.amount }),
        ...('oldAPY' in event.args && { oldAPY: event.args.oldAPY }),
        ...('newAPY' in event.args && { newAPY: event.args.newAPY }),
        ...('durationInDays' in event.args && { durationInDays: event.args.durationInDays }),
      });
    });
  });
});

(["USDCe", "wS", "OS", "S", "LBTC"] as const).forEach(token => {
  ponder.on(`${token}:Approval`, async ({ event, context }) => {
    await handleEvent(Approval, event, context, {
      owner: event.args.owner,
      spender: event.args.spender,
      value: event.args.value,
    });
  });

  ponder.on(`${token}:Transfer`, async ({ event, context }) => {
    await handleEvent(Transfer, event, context, {
      from: event.args.from,
      to: event.args.to,
      value: event.args.value,
    });
  });
});

ponder.on("OriginXServiceManager:OriginTaskResponded", async ({ event, context }) => {
  await handleEvent(OriginXTaskResponded, event, context, {
    taskIndex: event.args.taskIndex,
    task_accountAddress: event.args.task.accountAddress,
    task_stakingAddress: event.args.task.stakingAddress,
    task_taskCreatedBlock: event.args.task.taskCreatedBlock,
    operator: event.args.operator,
    signature: event.args.signature,
  });
});