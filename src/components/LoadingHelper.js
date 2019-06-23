import React from 'react';
import PropTypes from 'prop-types';
import { LoadingRing, Info } from '@aragon/ui';

const isEmpty = obj => {
  if (Array.isArray(obj)) {
    return !obj.length;
  }
  return !Object.keys(obj).length;
};

const LoadingHelper = ({
  fetching,
  items,
  noItemsMessage = 'No items found',
  children,
}) => {
  const noItems = !items || isEmpty(items);
  if (fetching && noItems) return <LoadingRing />;
  if (noItems) return <Info.Alert>{noItemsMessage}</Info.Alert>;
  return children;
};

LoadingHelper.propTypes = {
  children: PropTypes.node.isRequired,
  fetching: PropTypes.bool.isRequired,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  noItemsMessage: PropTypes.string,
};

export default LoadingHelper;
