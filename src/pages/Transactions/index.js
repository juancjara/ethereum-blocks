import React from "react";

import Page from "../../components/Page";
import useTransactionIDs from "../../hooks/useTransactionIds";

import TransactionList from "./TransactionList";

const Transactions = ({
  match: {
    params: { blockNumber }
  }
}) => {
  const { transactionIds } = useTransactionIDs(blockNumber);
  return (
    <Page title={`Transactions from block ${blockNumber}`}>
      <TransactionList ids={transactionIds} />
    </Page>
  );
};

export default Transactions;
