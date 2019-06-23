import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../components/Page';
import useTransactionIDs from '../../hooks/useTransactionIds';

import TransactionList from './TransactionList';

const Transactions = ({
  match: {
    params: { blockNumber },
  },
}) => {
  const { transactionIds } = useTransactionIDs(blockNumber);
  return (
    <>
      <Link to="/">{'<'} Back to latest Blocks</Link>
      <Page title={`Transactions from block ${blockNumber}`}>
        <TransactionList ids={transactionIds} />
      </Page>
    </>
  );
};

export default Transactions;
