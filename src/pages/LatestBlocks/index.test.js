import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LatestBlocks from './';
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

//Remove warnings
//https://github.com/testing-library/react-testing-library/issues/281#issuecomment-480349256
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});
afterAll(() => {
  cleanup();
  console.error = originalError;
});

it('List 20 latest blocks from ethereum', async () => {
  const blockNumber = 20;
  const mockGetBlockNumber = jest.fn(() => blockNumber);
  global.web3.eth.getBlockNumber = mockGetBlockNumber;
  const mockGetBlock = jest.fn(n => ({
    number: n,
    miner: 'm',
    transactions: ['1'],
    gasLimit: '1000',
    gasUsed: '10',
    timestamp: '156132969',
  }));
  global.web3.eth.getBlock = mockGetBlock;

  const { getByTestId } = render(
    <BrowserRouter>
      <LatestBlocks />
    </BrowserRouter>
  );
  await waitForElement(() => getByTestId('20'));
  expect(mockGetBlockNumber).toHaveBeenCalledTimes(1);
  expect(mockGetBlock).toHaveBeenCalledTimes(10);
  for (let i = 0; i < 10; i++) {
    expect(getByTestId(`${blockNumber - i}`)).toBeDefined();
    expect(mockGetBlock.mock.calls[i][0]).toEqual(blockNumber - i);
  }
  expect(getByTestId('20')).toBeDefined();
});
