import React from "react";
import { Row, Col } from "shards-react";
import FbImageLibrary from "react-fb-image-grid"; 
import FacebookEmoji from 'react-facebook-emoji';
import moment from "moment";
import Paper from "../common/Paper";
import Avatar from "../common/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Typography from "@material-ui/core/Typography";

const FbPost = props => {
  return (
    <Paper>
      <Col lg={12}>
        <Row>
          <Col lg={2}>
            <Avatar src={props.data.avatar} />
          </Col>
          <Col style={{ paddingLeft: 0 }}>
            <Typography style={{ marginTop: "8px" }} variant="subtitle1">
              {props.data.createdBy}
            </Typography>
            <Typography variant="caption">
              {moment(props.data.createdAt).fromNow()}
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography style={{ padding: "0 10px 10px 10px" }}>
              {props.data.description}
            </Typography>
          </Col>
        </Row>
        <FbImageLibrary images={props.data.images} />
        <Row>
          <Col>
            <Typography style={{ padding: "10px" }} variant="caption">
              {`${props.data.likes[0]},${props.data.likes[1]} and ${props.data.likes.length-2} others`}
            </Typography>
          </Col>
        </Row>
        <div>
          <FacebookEmoji type="like" />
          <FacebookEmoji type="love" />
          <FacebookEmoji type="wow" />
          <FacebookEmoji type="yay" />
          <FacebookEmoji type="angry" />
          <FacebookEmoji type="haha" />
          <FacebookEmoji type="sad" />
        </div>
        <Row>
          <Col lg={2}>
            <FontAwesomeIcon icon={faThumbsUp} />
          </Col>
          <Col>
            <FontAwesomeIcon icon={faComment} />
          </Col>
        </Row>
      </Col>
    </Paper>
  );
};

export default FbPost;
