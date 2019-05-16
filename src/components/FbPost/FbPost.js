import React from "react";
import { Row, Col } from "shards-react";
import FbImageLibrary from "react-fb-image-grid";
import FacebookEmoji from "react-facebook-emoji";
import moment from "moment";
import Paper from "../common/Paper";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "../common/Avatar";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Typography from "@material-ui/core/Typography";

const style = theme => ({
  emojiDiv: {
    // display: 'none',
    // left: '115px',
    textAlign: "center",
    position: "absolute",
    padding: "10px",
    backgroundColor: "white",
    bottom: "30px",
    borderRadius: "43px",
    boxShadow: "1px 0px 20px 1px rgba(0,0,0,0.5)"
  }
});

class FbPost extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "none",
      like: false
    };
  }

  toggleLike = () => {
    this.setState(prevState =>({
      like: !prevState.like,
      display:'none'
    }))
  }

  render() {
    const { classes } = this.props;
    const emojiDisplay = {
      display: this.state.display
    };
    return (
      <Paper>
        <Col lg={12}>
          <Row>
            {/* <Col lg={2} xs={2} sm={2} > */}
            <Avatar src={this.props.data.avatar} />
            {/* </Col> */}
            <Col style={{ paddingLeft: 0 }}>
              <Typography style={{ marginTop: "8px" }} variant="subtitle1">
                {this.props.data.createdBy}
              </Typography>
              <Typography variant="caption">
                {moment(this.props.data.createdAt).fromNow()}
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography style={{ padding: "0 10px 10px 10px" }}>
                {this.props.data.description}
              </Typography>
            </Col>
          </Row>
          <FbImageLibrary images={this.props.data.images} />
          <Row>
            <Col>
              <Typography style={{ padding: "10px" }} variant="caption">
                {
                  this.state.like ? (`You , ${this.props.data.likes[0]}
                   and ${this.props.data.likes.length - 1} others`) : (`${this.props.data.likes[0]},${this.props.data.likes[1]}
                   and ${this.props.data.likes.length - 2} others`)
                }
              </Typography>
            </Col>
          </Row>
          <div
            className={classes.emojiDiv}
            onMouseOut={() => {
              this.setState({ display: "none" });
            }}
            onMouseOver={() => {
              this.setState({ display: "block" });
            }}
            style={emojiDisplay}
          >
            <span onClick={()=>{this.toggleLike()}} >
            <FacebookEmoji  size="sm" type="like" />
            </span>
            <span onClick={()=>{this.toggleLike()}} >
            <FacebookEmoji  size="sm" type="love" />
            </span>
            <span onClick={()=>{this.toggleLike()}} >
            <FacebookEmoji  size="sm" type="wow" />
            </span>
            <span onClick={()=>{this.toggleLike()}} >
            <FacebookEmoji  size="sm" type="yay" />
            </span>
            <span onClick={()=>{this.toggleLike()}} >
            <FacebookEmoji  size="sm" type="angry" />
            </span>
            <span onClick={()=>{this.toggleLike()}} >
            <FacebookEmoji  size="sm" type="haha" />
            </span>
            <span onClick={()=>{this.toggleLike()}} >
            <FacebookEmoji  size="sm" type="sad" />
            </span>
          </div>
          <Row>
            <Col
              onMouseOver={() => {
                this.setState({ display: "block" });
              }}
              lg={2}
              xs={3}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faComment} />
            </Col>
          </Row>
        </Col>
      </Paper>
    );
  }
}

FbPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(FbPost);
