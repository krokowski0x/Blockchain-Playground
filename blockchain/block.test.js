const Block = require('./block');

describe('Block', () => {
  let data, lastBlock, block;

  beforeEach(() => {
    data = 'test data';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it('should set the `data` to match the given input', () => {
    expect(block.data).toEqual(data);
  });

  it('should set the `lasHash` to match the hash of the previous block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });
});
