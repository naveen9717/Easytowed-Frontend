import React,{useEffect,useState,Fragment} from 'react';
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";

import OverallBalance from "./OverallBalance";
import GreetingCard from "./GreetingCard";
import WidgetsWrapper from "./WidgetsWraper";
import RecentOrders from "./RecentOrders";
import ActivityCard from "./ActivityCard";
import RecentSales from "./RecentSales";
import RecentDestinations from "./RecentDestination";
import TimelineCard from "./TimelineCard";
import PreAccountCard from "./PreAccountCard";
import TotalUserAndFollower from "./TotalUserAndFollower";
import PaperNote from "./PaperNote";
import axios from "axios";

const Dashboard = () => {

  const [mockDataTeam, setmockDataTeam] = React.useState([]);
  const [RecentData, setRecentData] = React.useState([]);
  const [RecentDestination, setRecentDestination] = React.useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/photographers/findall`).then((response) => {
      setmockDataTeam(Object.values(response.data));
    });
    axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/venues/findall`).then((response) => {
      setRecentData(Object.values(response.data));
    });
    axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/destination/findall`).then((response) => {
      setRecentDestination(Object.values(response.data));
    });
  }, []);

  console.log('recentdata',RecentData)
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Dashboard" parent="Dashboard" title="Home" />
      <Container fluid={true}>
        <Row className="widget-grid">
          <GreetingCard />
          <WidgetsWrapper />
          <ActivityCard data={mockDataTeam}/>
          <RecentSales data={RecentData}/>
          <RecentDestinations data={RecentDestination}/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
