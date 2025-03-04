import { createConfig } from "ponder";
import { http } from "viem";

import { OriginXABI } from "./abis/OriginXABI";
import { MockStakingABI } from "./abis/MockStakingABI";
import { MockTokenABI } from "./abis/MockTokenABI";
import { OriginXServiceManagerABI } from "./abis/OriginXServiceManagerABI";

export default createConfig({
  networks: {
    sonicBlazeTestnet: {
      chainId: 57054,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    OriginX: {
      network: "sonicBlazeTestnet",
      abi: OriginXABI,
      address: "0xEC2c69905969835A6EEBB268fA8204FEB5F222be",
      startBlock: 24427380,
    },
    SiloV2: {
      network: "sonicBlazeTestnet",
      abi: MockStakingABI,
      address: "0xC8d619C991066233DC281564Ba8d076e785328CB",
      startBlock: 24401825,
    },
    "Origin Protocol": {
      network: "sonicBlazeTestnet",
      abi: MockStakingABI,
      address: "0xaC60B68dDc47938b4e27b0bBf8b3bb46Afa2619c",
      startBlock: 24401825,
    },
    EulerV2: {
      network: "sonicBlazeTestnet",
      abi: MockStakingABI,
      address: "0xB5B9a84B4cEc5381D2F56cB3c05253E9bf060d72",
      startBlock: 24401825,
    },
    SpectraV2: {
      network: "sonicBlazeTestnet",
      abi: MockStakingABI,
      address: "0xd7256AeD9e1e04fD9dC5D6eAa38297C8A19C7EF8",
      startBlock: 24401825,
    },
    "Lombard Finance": {
      network: "sonicBlazeTestnet",
      abi: MockStakingABI,
      address: "0x6604Cdd55C119361B6890Bd7e9523e0772e0DC49",
      startBlock: 24401825,
    },
    S: {
      network: "sonicBlazeTestnet",
      abi: MockTokenABI,
      address: "0xC42F6EBD1499c8099cbdde8f108c870fD7Baffa4",
      startBlock: 24401825,
    },
    OS: {
      network: "sonicBlazeTestnet",
      abi: MockTokenABI,
      address: "0xa99027852475c77bC3C340DB883e11632A5A172f",
      startBlock: 24401825,
    },
    wS: {
      network: "sonicBlazeTestnet",
      abi: MockTokenABI,
      address: "0x09E49F7dB7369B5D36273f96Da18347968889134",
      startBlock: 24401825,
    },
    USDCe: {
      network: "sonicBlazeTestnet",
      abi: MockTokenABI,
      address: "0x038310f0F5971A025Ff40c0B0BDbC751965dCD72",
      startBlock: 24401825,
    },
    LBTC: {
      network: "sonicBlazeTestnet",
      abi: MockTokenABI,
      address: "0xf7b6e1d2fE5C493b1A22e3E93A4c4DE2f1a9b85E",
      startBlock: 24401825,
    },
    OriginXServiceManager: {
      network: "sonicBlazeTestnet",
      abi: OriginXServiceManagerABI,
      address: "0x237d243654e4cc945c178a2f4d96efe4939281f2",
      startBlock: 24401825,
    },
  },
});
