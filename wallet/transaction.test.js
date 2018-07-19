const Transaction = require('./transaction');
const Wallet = require('./index');

describe('Transaction', () => {
  let wallet, recipient, amount, transaction;

  beforeEach(() => {
    wallet = new Wallet();
    recipient = 'r3c1p13nt';
    amount = 50;
    transaction = Transaction.newTransaction(wallet, recipient, amount);
  });

  it('should output the `amount` subtracted from the wallet balance', () => {
    expect(transaction.outputs
      .find(output => output.address === wallet.publicKey).amount)
      .toEqual(wallet.balance - amount);
  });

  it('should output the `amount` added to the recipient', () => {
    expect(transaction.outputs
      .find(output => output.address === recipient).amount)
      .toEqual(amount);
  });

  it('should throw an error whaen amount exeeds the balance', () => {
    expect(() => Transaction.newTransaction(wallet, recipient, 50000)).toThrow();
  });

  it('should input the balance of the wallet', () => {
    expect(transaction.input.amount).toEqual(wallet.balance);
  });

  it('should validate a valid transaction', () => {
    expect(Transaction.verifyTransaction(transaction)).toBe(true);
  });

  it('should invalidate a corrupt transaction', () => {
    transaction.outputs[0].amount = 50000;
    expect(Transaction.verifyTransaction(transaction)).toBe(false);
  });

  it('should substract the next amount from the sender\'s output', () => {
    transaction.update(wallet, 'n3x7-4ddr355', 20);

    expect(transaction.outputs
      .find(output => output.address === wallet.publicKey).amount)
      .toEqual(wallet.balance - amount - 20);
  });

  it('should output an amount for the next recipient', () => {
    transaction.update(wallet, 'n3x7-4ddr355', 20);
    expect(transaction.outputs
      .find(output => output.address === recipient).amount)
      .toEqual(20);
  });
});
