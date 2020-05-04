import React from 'react';
import styled from 'styled-components';
import img from '../../assets/gif/loader.gif';

const Content = styled.div`
  width: 200px;
  height: 50px;
  display: inline-block;
  background: url(${img}) no-repeat center;
`;

const Loading = () => <Content />

export default Loading;
