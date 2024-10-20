## Overview
Heradex is a decentralized exchange built on the internet computer protol (icp) platform, heradex was designed to provide token swap solutions to end users, by leveraging ICRC-1 & ICRC-2 token standard, heradex is able to provide users with the ability to swap tokens 1:1 between other users.
![Launch app](https://github.com/KolawoleFawaz/heradex_app/blob/main/heradex_platform/heradex_frontend/landing_page_image/heradex_interface.jpg)

## Inspiration
The creation of heradex was inspired by the security, scalability and speed of token swap and futures contracts applications. Traditional dex applications are often built on overly centralized blockchain platforms which are often plagued by network congestions and a host of other features which  cripples the dex's ability to scale.
Heradex aims to address these challenges by offering a decentralized, secure and user friendly platform for tokens swaps and trading
## Features

- **Deposit Tokens**: Users can deposit tokens into the contract to be ready for
  swapping.
- **Swap Tokens**: Users can swap the tokens for each other. This is implemented
  in a very simple naive 1:1 manner. The point is just to demonstrate swap behavior.
- **Withdraw Tokens**: Users can withdraw the resulting tokens after
  swapping.
  
## Architecture
Heradex architecture was built by utilizing motoko CDK for the development of the backend canisters. The system consists of: 
- **token_a canister**: takes in arguments about a users token that meets the ICRC standard.
- **token_b canister**: takes in arguments aobut a users token that meets the ICRC standard.
- **swap canister**: this canisters allows for tokens to be deposited, swapped for other tokens and withdrawn.
The frontend is developed with React, it is currently static but provides a visual representation of the end user interacts with.

## Project Overview
- **Objective**: provide 1:1 token swaps for end users
- **target audience**: users willing to swap tokens in a safe, fast and cost effective environment.

## How the protocol works
- **tokens**: token_a and token_b are initialized as tokens for user1 and user2.
- **users**: Alice and Bob are initialized as example of users.
- **swap**: both tokens are deposited into the swap canister and exchange for users, and they are subsequently withdrawn.

## Goals
- To provide a safe, secure, fast and low cost environment for token swaps.
## Development Challenges
- Deployment of Backend and Frontend canisters on the mainnet
- working with the Motoko CDK and React framework

## Accomplishments
- Successful deployment of Backend and Frontend canisters on the mainnet
- easy to use candid UI of backend canisters
- Visually appealing User interface

## Experience Gained
- leveraging established standards to build token swap mechanism
- Learning Motoko, established data structures and their application
- Understanding how to design interfaces that are both user-friendly and visually appealing.

## Future Roadmap
- To expand and build upon the token swap mechanism and an AMM algorithm to provide for more complex trading features.
- To create algorithm for Futures contracts (futures trading).
- Create a DAO algorithm.
- make frontend fully functional by being able to query and update the backend in real time.
- provide Multichain optionality.

## Canister IDs
- Heradex frontend canister: 5urwl-2qaaa-aaaai-ap7ga-cai
- swap canister: idi6f-tiaaa-aaaah-qpuia-cai
- token_a canister: klsba-biaaa-aaaah-qpuea-cai
- token_b canister: k6vqn-aaaaa-aaaah-qpuhq-cai


## Local deployment of Backend Canisters

## Prerequisites

- [x] Install the [IC SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install/index.mdx).
- [x] Install [Node.js](https://nodejs.org/en/).
### Step 1: Start a local instance of the replica:

```bash
git clone https://github.com/KolawoleFawaz/heradex_app.git
cd /heradex_app/heradex_platform
dfx start --clean --background
```

### Step 2: Create your user accounts:

```bash
export OWNER=$(dfx identity get-principal)

dfx identity new alice
export ALICE=$(dfx identity get-principal --identity alice)

dfx identity new bob
export BOB=$(dfx identity get-principal --identity bob)
```

### Step 2: Deploy two tokens:

Deploy Token A:

```bash
dfx deploy token_a --argument '
  (variant {
    Init = record {
      token_name = "Token A";
      token_symbol = "A";
      minting_account = record {
        owner = principal "'${OWNER}'";
      };
      initial_balances = vec {
        record {
          record {
            owner = principal "'${ALICE}'";
          };
          100_000_000_000;
        };
      };
      metadata = vec {};
      transfer_fee = 10_000;
      archive_options = record {
        trigger_threshold = 2000;
        num_blocks_to_archive = 1000;
        controller_id = principal "'${OWNER}'";
      };
      feature_flags = opt record {
        icrc2 = true;
      };
    }
  })
'
```
URLS:
  Backend canister via Candid interface:
  token_a: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=klsba-biaaa-aaaah-qpuea-cai

Deploy Token B:

```bash
dfx deploy token_b --argument '
  (variant {
    Init = record {
      token_name = "Token B";
      token_symbol = "B";
      minting_account = record {
        owner = principal "'${OWNER}'";
      };
      initial_balances = vec {
        record {
          record {
            owner = principal "'${BOB}'";
          };
          100_000_000_000;
        };
      };
      metadata = vec {};
      transfer_fee = 10_000;
      archive_options = record {
        trigger_threshold = 2000;
        num_blocks_to_archive = 1000;
        controller_id = principal "'${OWNER}'";
      };
      feature_flags = opt record {
        icrc2 = true;
      };
    }
  })
'
```

### Step 3: Deploy the swap canister:

The swap canister accepts deposits and performs the swap.

```bash
export TOKEN_A=$(dfx canister id token_a)
export TOKEN_B=$(dfx canister id token_b)

dfx deploy swap --argument '
  record {
    token_a = (principal "'${TOKEN_A}'");
    token_b = (principal "'${TOKEN_B}'");
  }
'

export SWAP=$(dfx canister id swap)
```

### Step 4: Approve & deposit tokens:

Before you can swap the tokens, they must be transferred to the swap canister.
With ICRC-2, this is a two-step process. First, approve the transfer:

```bash
# Approve Bob to deposit 1.00000000 of Token B, and 0.0001 extra for the
# transfer fee
dfx canister call --identity alice token_a icrc2_approve '
  record {
    amount = 100_010_000;
    spender = record {
      owner = principal "'${SWAP}'";
    };
  }
'

# Approve Bob to deposit 1.00000000 of Token B, and 0.0001 extra for the
# transfer fee
dfx canister call --identity bob token_b icrc2_approve '
  record {
    amount = 100_010_000;
    spender = record {
      owner = principal "'${SWAP}'";
    };
  }
'
```

Then call the `swap` canister's `deposit` method. This method will do the
actual ICRC-1 token transfer, to move the tokens from your wallet into the `swap`
canister, and then update your deposited token balance in the `swap` canister.

:::info
The amounts you use here are denoted in "e8s". Since your token has 8
decimal places, you write out all 8 decimal places. So 1.00000000 becomes
100,000,000.
:::

```bash
# Deposit Alice's tokens
dfx canister call --identity alice swap deposit 'record {
  token = principal "'${TOKEN_A}'";
  from = record {
    owner = principal "'${ALICE}'";
  };
  amount = 100_000_000;
}'

# Deposit Bob's tokens
dfx canister call --identity bob swap deposit 'record {
  token = principal "'${TOKEN_B}'";
  from = record {
    owner = principal "'${BOB}'";
  };
  amount = 100_000_000;
}'
```

### Step 5: Perform a swap:

```bash
dfx canister call swap swap 'record {
  user_a = principal "'${ALICE}'";
  user_b = principal "'${BOB}'";
}'
```

You can check the deposited balances with:

```bash
dfx canister call swap balances
```

That should show us that now Bob holds Token A, and Alice holds Token B in
the swap contract.

### Step 6: Withdraw tokens:

After the swap, your balances in the swap canister will have been updated, and you
can withdraw your newly received tokens into your wallet.

```bash
# Withdraw Alice's Token B balance (1.00000000), minus the 0.0001 transfer fee
dfx canister call --identity alice swap withdraw 'record {
  token = principal "'${TOKEN_B}'";
  to = record {
    owner = principal "'${ALICE}'";
  };
  amount = 99_990_000;
}'
```

```bash
# Withdraw Bob's Token A balance (1.00000000), minus the 0.0001 transfer fee
dfx canister call --identity bob swap withdraw 'record {
  token = principal "'${TOKEN_A}'";
  to = record {
    owner = principal "'${BOB}'";
  };
  amount = 99_990_000;
}'
```

### Step 7: Check token balances:

```bash
# Check Alice's Token A balance. They should now have 998.99980000 A
dfx canister call token_a icrc1_balance_of 'record {
  owner = principal "'${ALICE}'";
}'

# Check Bob's Token A balance, They should now have 0.99990000 A.
dfx canister call token_a icrc1_balance_of 'record {
  owner = principal "'${BOB}'";
}'
```
## Deployment of Frontend

```bash
cd /heradex_app/heradex_platform/src
dfx deploy react_app



