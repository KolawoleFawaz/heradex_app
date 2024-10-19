import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Account {
  'owner' : Principal,
  'subaccount' : [] | [Subaccount],
}
export type BlockIndex = bigint;
export interface DepositArgs {
  'fee' : [] | [bigint],
  'token' : Principal,
  'spender_subaccount' : [] | [Uint8Array | number[]],
  'from' : Account,
  'memo' : [] | [Uint8Array | number[]],
  'created_at_time' : [] | [bigint],
  'amount' : bigint,
}
export type DepositError = { 'TransferFromError' : TransferFromError };
export type Result = { 'ok' : bigint } |
  { 'err' : WithdrawError };
export type Result_1 = { 'ok' : null } |
  { 'err' : SwapError };
export type Result_2 = { 'ok' : bigint } |
  { 'err' : DepositError };
export type Subaccount = Uint8Array | number[];
export interface Swap {
  'balances' : ActorMethod<
    [],
    [Array<[Principal, bigint]>, Array<[Principal, bigint]>]
  >,
  'deposit' : ActorMethod<[DepositArgs], Result_2>,
  'swap' : ActorMethod<[SwapArgs], Result_1>,
  'withdraw' : ActorMethod<[WithdrawArgs], Result>,
}
export interface SwapArgs { 'user_a' : Principal, 'user_b' : Principal }
export type SwapError = {};
export type Tokens = bigint;
export type TransferError = {
    'GenericError' : { 'message' : string, 'error_code' : bigint }
  } |
  { 'TemporarilyUnavailable' : null } |
  { 'BadBurn' : { 'min_burn_amount' : Tokens } } |
  { 'Duplicate' : { 'duplicate_of' : BlockIndex } } |
  { 'BadFee' : { 'expected_fee' : Tokens } } |
  { 'CreatedInFuture' : { 'ledger_time' : bigint } } |
  { 'TooOld' : null } |
  { 'InsufficientFunds' : { 'balance' : Tokens } };
export type TransferFromError = {
    'GenericError' : { 'message' : string, 'error_code' : bigint }
  } |
  { 'TemporarilyUnavailable' : null } |
  { 'InsufficientAllowance' : { 'allowance' : Tokens } } |
  { 'BadBurn' : { 'min_burn_amount' : Tokens } } |
  { 'Duplicate' : { 'duplicate_of' : BlockIndex } } |
  { 'BadFee' : { 'expected_fee' : Tokens } } |
  { 'CreatedInFuture' : { 'ledger_time' : bigint } } |
  { 'TooOld' : null } |
  { 'InsufficientFunds' : { 'balance' : Tokens } };
export interface WithdrawArgs {
  'to' : Account,
  'fee' : [] | [bigint],
  'token' : Principal,
  'memo' : [] | [Uint8Array | number[]],
  'created_at_time' : [] | [bigint],
  'amount' : bigint,
}
export type WithdrawError = { 'TransferError' : TransferError } |
  { 'InsufficientFunds' : { 'balance' : Tokens } };
export interface _SERVICE extends Swap {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
