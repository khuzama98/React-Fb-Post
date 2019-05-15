import React from "react";
import { Container, Row, Col } from "shards-react";
import FbPost from "./components/FbPost/FbPost";
import Appbar from "./components/common/AppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Pic from "./assets/1.jpg";
import Pic1 from "./assets/images/1.jpeg";
import Pic2 from "./assets/images/2.jpeg";
import Pic3 from "./assets/images/3.jpeg";
import Pic4 from "./assets/images/4.jpeg";
import Pic5 from "./assets/images/5.jpeg";
import Pic6 from "./assets/images/6.jpeg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      createdBy: "Khuzama Shahid",
      avatar: Pic,
      description: "Checkout these amazing places to visit in coming holidays!",
      images: [Pic1,Pic2,Pic3,Pic4,Pic5,Pic6],
      createdAt: Date.now(),
      likes: ['Saad','Farhan','Riaz','Rafay','Maaz']
    };
  }

  render() {
    return (
      <>
        <Appbar />
        <Container style={{ marginTop: 15 }}>
          <Row>
            <Col lg={6}>
              <FbPost data={this.state} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
