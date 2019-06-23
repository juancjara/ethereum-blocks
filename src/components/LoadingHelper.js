import React from 'react';
import PropTypes from 'prop-types';
import { LoadingRing, Info } from '@aragon/ui';

const LoadingHelper = ({
  fetching,
  items,
  noItemsMessage = 'No items found',
  children
}) => {
  const noItems = !items || !items.length;
  if (fetching && noItems) return <LoadingRing />;
  if (noItems) return <Info.Alert>{noItemsMessage}</Info.Alert>;
  return children;
};

LoadingHelper.propTypes = {
  children: PropTypes.node.isRequired,
  fetching: PropTypes.bool.isRequired,
  items: PropTypes.array,
  noItemsMessage: PropTypes.string
};

export default LoadingHelper;
