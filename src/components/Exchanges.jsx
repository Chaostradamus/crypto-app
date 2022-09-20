import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  // fetch data
  const {data, isFetching} = useGetExchangesQuery()
const exchangesList = data?.data?.exchanges


if(isFetching) return <Loader/>

  return (
   <>
      <Row className='coming-soon'> Coming Soon when i have money and can pay for premium  RapidAPI Endpoints</Row>
    </>
  );
};

export default Exchanges;
