import React from 'react';
import { theme, Text } from '@aragon/ui';
import styled from 'styled-components';
import 'styled-components/macro';

import { formatNumber } from '../../utils';
import web3 from '../../web3';
import Section from '../../components/Section';
import GroupField from '../../components/GroupField';
import TransactionReceipt from './TransactionReceipt';

const Divider = styled.div`
  height: 1px;
  width: 100%;
  border: 1px solid ${theme.contentBorder};
`;

const TransactionDetails = ({ transaction }) => {
  if (!transaction) return null;
  return (
    <>
      <Text weight="bold" size="xxlarge" css="display: block; margin: 30px 0;">
        Transaction Details
      </Text>
      <Section title="Block information">
        <GroupField label="Hash" value={transaction.blockHash} copyValue />
        <GroupField label="Number" value={transaction.blockNumber} copyValue />
      </Section>
      <Divider />
      <Section title="Transaction ">
        <GroupField label="Hash" value={transaction.hash} copyValue />
        <GroupField
          label="Index in block"
          value={transaction.transactionIndex}
        />
        <GroupField
          label="Value (ETH)"
          value={web3.fromWei(transaction.value, 'ether')}
        />
        <GroupField label="Gas" value={formatNumber(transaction.gas)} />
        <GroupField
          label="Gas price (ETH)"
          value={web3.fromWei(transaction.gasPrice, 'ether')}
        />
      </Section>
      <Divider />
      <TransactionReceipt hash={transaction.hash} />
    </>
  );
};

export default TransactionDetails;
