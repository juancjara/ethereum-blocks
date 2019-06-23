import React from 'react';
import { Info } from '@aragon/ui';
import { Link } from 'react-router-dom';

import Page from '../../components/Page';
import useTransactionIDs from '../../hooks/useTransactionIds';
import TransactionList from './TransactionList';

const Transactions = ({
  match: {
    params: { blockNumber },
  },
}) => {
  const { transactionIds, error } = useTransactionIDs(blockNumber);
  return (
    <>
      <Link to="/">{'<'} Back to latest Blocks</Link>
      <Page title={`Transactions from block ${blockNumber}`}>
        {error ? (
          <Info.Alert>{error}</Info.Alert>
        ) : (
          <TransactionList ids={transactionIds} />
        )}
      </Page>
    </>
  );
};

export default Transactions;
