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

  it('should generate a hash that matches the diffculty', () => {
    expect(block.hash.substring(0, block.diffculty)).toEqual('0'.repeat(block.diffculty));
  });

  it('should lower the difficulty for slowly mined blocks', () => {
    expect(Block.adjustDifficulty(block, block.timestamp + 360000)).toEqual(block.difficulty - 1);
  });

  it('should raise the difficulty for quickly mined blocks', () => {
    expect(Block.adjustDifficulty(block, block.timestamp + 1)).toEqual(block.difficulty + 1);
  });
});
