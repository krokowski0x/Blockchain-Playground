const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {
  let bc, bc2;

  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  describe('#gensis()', () => {
    it('should start with a genesis block', () => {
      expect(bc.chain[0]).toEqual(Block.genesis());
    });
  });

  describe('#addBlock()', () => {
    it('should add a new block', () => {
      const data = 'test data';
      bc.addBlock(data);
      expect(bc.chain.pop().data).toEqual(data);
    });
  });

  describe('#isValidChain()', () => {
    it('should validate a valid chain', () => {
      bc2.addBlock('foo');
      expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    it('should invalidate a chain with a corrupt gensis block', () => {
      bc2.chain[0].data = 'Bad data';
      expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('should invalidate a corrupt chain', () => {
      bc2.addBlock('foo');
      bc2.chain[1].data = 'Even worse data';
      expect(bc.isValidChain(bc2.chain)).toBe(false);
    });
  });

  describe('#replaceChain()', () => {
    it('should replace a chain with valid chain', () => {
      bc2.addBlock('foo');
      bc.replaceChain(bc2.chain);
      expect(bc.chain).toEqual(bc2.chain);
    });

    it('should not replace a chain with shorter or equal length chain', () => {
      bc.addBlock('foo');
      expect(bc.chain).not.toEqual(bc2.chain);
    });
  });
});
