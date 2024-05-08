import React from 'react';
import styled from "styled-components";
import {COLOR} from "@/style/variables";

const GroupTitle = ({children}) => {
  return (
    <GroupTitleWrapper>
      {children}
      <Line/>
    </GroupTitleWrapper>
  );
};

const GroupTitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLOR.text[1]};
`

export default GroupTitle;