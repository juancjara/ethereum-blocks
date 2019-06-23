import React from 'react';
import { Badge } from '@aragon/ui';

import Section from '../../components/Section';
import GroupField from '../../components/GroupField';
import LoadingHelper from '../../components/LoadingHelper';
import useTransactionReceipt from '../../hooks/useTransactionReceipt';
import { formatNumber } from '../../utils';

const TransactionReceipt = ({ hash }) => {
  const { fetching, result } = useTransactionReceipt(hash);

  return (
    <Section title="Transaction Receipt ">
      <LoadingHelper fetching={fetching} items={result}>
        <GroupField label="From" value={result.from} />
        <GroupField label="To" value={result.to} />
        <GroupField
          label="Status"
          value={<Badge>{result.status ? 'SUCCESS' : 'FAILED'}</Badge>}
        />
        <GroupField
          label="Cumulative gas used"
          value={formatNumber(result.cumulativeGasUsed)}
        />
        <GroupField label="Gas used" value={formatNumber(result.gasUsed)} />
      </LoadingHelper>
    </Section>
  );
};

export default TransactionReceipt;
