import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, Text, Modal } from '@aragon/ui';

import { shortenAddress, formatNumber } from '../../utils';
import web3 from '../../web3';
import Button from '../../components/Button';
import LoadingHelper from '../../components/LoadingHelper';
import ResponsiveTable from '../../components/ResponsiveTable';
import useEtherTransactions from '../../hooks/useEtherTransactions';
import TransactionDetails from './TransactionDetails';

const TransactionList = ({ ids }) => {
  const [selectedTransaction, setSelectedTransaction] = useState();
  const { fetching, hasMore, fetchMore, transactions } = useEtherTransactions({
    ids,
  });
  return (
    <LoadingHelper
      fetching={fetching}
      items={transactions}
      noItemsMessage="This block has no ether transactions."
    >
      <Modal
        visible={!!selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
      >
        <TransactionDetails transaction={selectedTransaction} />
      </Modal>
      <ResponsiveTable
        headers={[
          'Hash',
          'From',
          'To',
          'Value (Eth)',
          'Gas',
          'Gas Price (Eth)',
        ]}
      >
        {transactions.map(tx => (
          <TableRow key={tx.hash}>
            <TableCell>
              <Button mode="outline" onClick={() => setSelectedTransaction(tx)}>
                <Text>{shortenAddress(tx.hash)}</Text>
              </Button>
            </TableCell>
            <TableCell>
              <Text>{shortenAddress(tx.from)}</Text>
            </TableCell>
            <TableCell>
              <Text>{shortenAddress(tx.to)}</Text>
            </TableCell>
            <TableCell>
              <Text>{web3.fromWei(tx.value, 'ether')}</Text>
            </TableCell>
            <TableCell>
              <Text>{formatNumber(tx.gas)}</Text>
            </TableCell>
            <TableCell>
              <Text>{web3.fromWei(tx.gasPrice, 'ether')}</Text>
            </TableCell>
          </TableRow>
        ))}
        {hasMore && (
          <TableRow>
            <TableCell colSpan={6}>
              <Button
                disabled={fetching}
                loading={fetching}
                onClick={fetchMore}
                mode="strong"
              >
                Fetch more
              </Button>
            </TableCell>
          </TableRow>
        )}
      </ResponsiveTable>
    </LoadingHelper>
  );
};

TransactionList.propTypes = {
  ids: PropTypes.array,
};

export default TransactionList;
