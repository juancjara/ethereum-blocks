import React from "react";
import PropTypes from "prop-types";
import "styled-components/macro";
import { Text } from "@aragon/ui";

const Page = ({ title, children }) => {
  return (
    <>
      <Text size="xlarge" css="margin: 8px 0;">
        {title}
      </Text>
      {children}
    </>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Page;
