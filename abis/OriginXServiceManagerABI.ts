export const OriginXServiceManagerABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_avsDirectory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_stakeRegistry",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_rewardsCoordinator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_delegationManager",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "storedHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "suppliedHash",
        "type": "bytes32"
      }
    ],
    "name": "Debug",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "taskIndex",
        "type": "uint32"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "accountAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "stakingAddress",
            "type": "string"
          },
          {
            "internalType": "uint32",
            "name": "taskCreatedBlock",
            "type": "uint32"
          }
        ],
        "indexed": false,
        "internalType": "struct IOriginXServiceManager.OriginTask",
        "name": "task",
        "type": "tuple"
      }
    ],
    "name": "NewOriginTaskCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "taskIndex",
        "type": "uint32"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "accountAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "stakingAddress",
            "type": "string"
          },
          {
            "internalType": "uint32",
            "name": "taskCreatedBlock",
            "type": "uint32"
          }
        ],
        "indexed": false,
        "internalType": "struct IOriginXServiceManager.OriginTask",
        "name": "task",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "OriginTaskResponded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "prevRewardsInitiator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newRewardsInitiator",
        "type": "address"
      }
    ],
    "name": "RewardsInitiatorUpdated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "OWNER_ADDRESS",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "name": "allTaskHashes",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "name": "allTaskResponses",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "avsDirectory",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "contract IStrategy",
                "name": "strategy",
                "type": "address"
              },
              {
                "internalType": "uint96",
                "name": "multiplier",
                "type": "uint96"
              }
            ],
            "internalType": "struct IRewardsCoordinator.StrategyAndMultiplier[]",
            "name": "strategiesAndMultipliers",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC20",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "startTimestamp",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "duration",
            "type": "uint32"
          }
        ],
        "internalType": "struct IRewardsCoordinator.RewardsSubmission[]",
        "name": "rewardsSubmissions",
        "type": "tuple[]"
      }
    ],
    "name": "createAVSRewardsSubmission",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "deregisterOperatorFromAVS",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      }
    ],
    "name": "getOperatorRestakedStrategies",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRestakeableStrategies",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "latestTaskNum",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          },
          {
            "internalType": "bytes32",
            "name": "salt",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          }
        ],
        "internalType": "struct ISignatureUtils.SignatureWithSaltAndExpiry",
        "name": "operatorSignature",
        "type": "tuple"
      }
    ],
    "name": "registerOperatorToAVS",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "accountAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "stakingAddress",
            "type": "string"
          },
          {
            "internalType": "uint32",
            "name": "taskCreatedBlock",
            "type": "uint32"
          }
        ],
        "internalType": "struct IOriginXServiceManager.OriginTask",
        "name": "task",
        "type": "tuple"
      },
      {
        "internalType": "uint32",
        "name": "referenceTaskIndex",
        "type": "uint32"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "provider",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "parameters",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "context",
                "type": "string"
              }
            ],
            "internalType": "struct Claims.ClaimInfo",
            "name": "claimInfo",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "identifier",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint32",
                    "name": "timestampS",
                    "type": "uint32"
                  },
                  {
                    "internalType": "uint32",
                    "name": "epoch",
                    "type": "uint32"
                  }
                ],
                "internalType": "struct Claims.CompleteClaimData",
                "name": "claim",
                "type": "tuple"
              },
              {
                "internalType": "bytes[]",
                "name": "signatures",
                "type": "bytes[]"
              }
            ],
            "internalType": "struct Claims.SignedClaim",
            "name": "signedClaim",
            "type": "tuple"
          }
        ],
        "internalType": "struct Reclaim.Proof",
        "name": "proof",
        "type": "tuple"
      }
    ],
    "name": "respondToApproveTask",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rewardsInitiator",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newRewardsInitiator",
        "type": "address"
      }
    ],
    "name": "setRewardsInitiator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stakeRegistry",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "stakingAddress",
        "type": "string"
      }
    ],
    "name": "taskAgent",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "accountAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "stakingAddress",
            "type": "string"
          },
          {
            "internalType": "uint32",
            "name": "taskCreatedBlock",
            "type": "uint32"
          }
        ],
        "internalType": "struct IOriginXServiceManager.OriginTask",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_metadataURI",
        "type": "string"
      }
    ],
    "name": "updateAVSMetadataURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userChannelID",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;