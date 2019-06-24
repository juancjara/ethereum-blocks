import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup, waitForElement } from '@testing-library/react';

import Transactions from './';
import Providers from '../../Providers';

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

it('List transactions from block', async () => {
  const blockNumber = 1234;
  const transactionIds = ['11111', '44444', '55555'];
  const mockGetBlock = jest.fn(() => ({
    transactions: transactionIds,
  }));
  global.web3.eth.getBlock = mockGetBlock;
  const mockGetTransaction = jest.fn(hash => ({
    hash,
    from: '0x123123',
    to: '0x1231231',
    value: '1111111',
    gasPrice: '111111',
  }));
  global.web3.eth.getTransaction = mockGetTransaction;

  const { getByTestId } = render(
    <Providers>
      <Transactions match={{ params: { blockNumber } }} />
    </Providers>
  );

  await waitForElement(() => getByTestId(transactionIds[0]));
  expect(mockGetBlock).toHaveBeenCalledTimes(1);
  expect(mockGetBlock).toHaveBeenCalledWith(blockNumber);
  expect(mockGetTransaction).toHaveBeenCalledTimes(3);
  for (let i = 0; i < transactionIds.length; i++) {
    expect(getByTestId(transactionIds[i])).toBeDefined();
    expect(mockGetTransaction.mock.calls[i][0]).toEqual(transactionIds[i]);
  }
});
