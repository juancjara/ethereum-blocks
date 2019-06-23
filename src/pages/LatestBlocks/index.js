import React from 'react';
import 'styled-components/macro';
import { Link } from 'react-router-dom';
import fecha from 'fecha';
import { Text, TableRow, TableCell, CircleGraph } from '@aragon/ui';

import { shortenAddress, formatNumber } from '../../utils';
import LoadingHelper from '../../components/LoadingHelper';
import Page from '../../components/Page';
import ResponsiveTable from '../../components/ResponsiveTable';
import useLatestBlocks from '../../hooks/useLatestBlocks';

//Same color from CircleGraph
const CircleGraphColor = '#21c1e7';
const NUM_BLOCKS = 10;

const LatestBlocks = () => {
  const { fetching, blocks } = useLatestBlocks(NUM_BLOCKS);
  return (
    <Page title="10 latest blocks">
      <LoadingHelper fetching={fetching} items={blocks}>
        <ResponsiveTable
          headers={[
            'Block number',
            'Miner',
            'Transactions',
            'Gas',
            '% Gas used',
            'Date time (MM-DD HH:mm)',
          ]}
        >
          {blocks.map(
            ({ number, miner, transactions, gasLimit, gasUsed, timestamp }) => (
              <TableRow key={number}>
                <TableCell>{number}</TableCell>
                <TableCell>{shortenAddress(miner)}</TableCell>
                <TableCell>
                  <Link to={`/${number}`}>{transactions.length}</Link>
                </TableCell>
                <TableCell>
                  <div css="display: flex; flex-direction: column;">
                    <Text color={CircleGraphColor}>
                      used: {formatNumber(gasUsed)}
                    </Text>
                    <Text>limit: {formatNumber(gasLimit)}</Text>
                  </div>
                </TableCell>
                <TableCell>
                  <CircleGraph size={60} value={gasUsed / gasLimit} />
                </TableCell>
                <TableCell>
                  {fecha.format(timestamp * 1000, 'MM-DD HH:mm')}
                </TableCell>
              </TableRow>
            )
          )}
        </ResponsiveTable>
      </LoadingHelper>
    </Page>
  );
};

export default LatestBlocks;
