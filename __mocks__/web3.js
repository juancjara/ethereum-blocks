const mockFns = {
  eth: {
    getBlockNumber: jest.fn(),
    getBlock: jest.fn(),
    getTransaction: jest.fn(),
    getTransactionReceipt: jest.fn(),
  },
};

const mock = jest.fn().mockImplementation(() => {
  return mockFns;
});

global.web3 = mockFns;

export default mock;
