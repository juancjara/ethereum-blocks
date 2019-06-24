import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table, TableRow, TableHeader } from '@aragon/ui';

const Wrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
  min-width: ${props => props.minWidth};
  td > div {
    justify-content: flex-start;
  }
`;

const ResponsiveTable = ({ headers, children, minWidth }) => {
  return (
    <Wrapper minWidth={minWidth}>
      <StyledTable
        header={
          <TableRow>
            {headers.map(header => (
              <TableHeader key={header} title={header} />
            ))}
          </TableRow>
        }
      >
        {children}
      </StyledTable>
    </Wrapper>
  );
};

ResponsiveTable.propTypes = {
  children: PropTypes.node.isRequired,
  headers: PropTypes.array.isRequired,
  minWidth: PropTypes.string,
};

ResponsiveTable.defaultProps = {
  minWidth: '600px',
};

export default ResponsiveTable;
