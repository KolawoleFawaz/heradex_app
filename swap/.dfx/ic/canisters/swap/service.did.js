export const idlFactory = ({ IDL }) => {
  const Subaccount = IDL.Vec(IDL.Nat8);
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(Subaccount),
  });
  const DepositArgs = IDL.Record({
    'fee' : IDL.Opt(IDL.Nat),
    'token' : IDL.Principal,
    'spender_subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'from' : Account,
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'created_at_time' : IDL.Opt(IDL.Nat64),
    'amount' : IDL.Nat,
  });
  const Tokens = IDL.Nat;
  const BlockIndex = IDL.Nat;
  const TransferFromError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Null,
    'InsufficientAllowance' : IDL.Record({ 'allowance' : Tokens }),
    'BadBurn' : IDL.Record({ 'min_burn_amount' : Tokens }),
    'Duplicate' : IDL.Record({ 'duplicate_of' : BlockIndex }),
    'BadFee' : IDL.Record({ 'expected_fee' : Tokens }),
    'CreatedInFuture' : IDL.Record({ 'ledger_time' : IDL.Nat64 }),
    'TooOld' : IDL.Null,
    'InsufficientFunds' : IDL.Record({ 'balance' : Tokens }),
  });
  const DepositError = IDL.Variant({ 'TransferFromError' : TransferFromError });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : DepositError });
  const SwapArgs = IDL.Record({
    'user_a' : IDL.Principal,
    'user_b' : IDL.Principal,
  });
  const SwapError = IDL.Record({});
  const Result_1 = IDL.Variant({ 'ok' : IDL.Null, 'err' : SwapError });
  const WithdrawArgs = IDL.Record({
    'to' : Account,
    'fee' : IDL.Opt(IDL.Nat),
    'token' : IDL.Principal,
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'created_at_time' : IDL.Opt(IDL.Nat64),
    'amount' : IDL.Nat,
  });
  const TransferError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Null,
    'BadBurn' : IDL.Record({ 'min_burn_amount' : Tokens }),
    'Duplicate' : IDL.Record({ 'duplicate_of' : BlockIndex }),
    'BadFee' : IDL.Record({ 'expected_fee' : Tokens }),
    'CreatedInFuture' : IDL.Record({ 'ledger_time' : IDL.Nat64 }),
    'TooOld' : IDL.Null,
    'InsufficientFunds' : IDL.Record({ 'balance' : Tokens }),
  });
  const WithdrawError = IDL.Variant({
    'TransferError' : TransferError,
    'InsufficientFunds' : IDL.Record({ 'balance' : Tokens }),
  });
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : WithdrawError });
  const Swap = IDL.Service({
    'balances' : IDL.Func(
        [],
        [
          IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat)),
          IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat)),
        ],
        ['query'],
      ),
    'deposit' : IDL.Func([DepositArgs], [Result_2], []),
    'swap' : IDL.Func([SwapArgs], [Result_1], []),
    'withdraw' : IDL.Func([WithdrawArgs], [Result], []),
  });
  return Swap;
};
export const init = ({ IDL }) => {
  return [IDL.Record({ 'token_a' : IDL.Principal, 'token_b' : IDL.Principal })];
};
