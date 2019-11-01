import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SkillProgress from "./SkillProgress";
class SkillCard extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-12 col-md-6 wow fadeIn">
        <Card
          style={{
            // margin: "10px",
            boxShadow: "0px 8px 30px 0px rgba(153, 153, 153, 0.1)"
          }}
        >
          <Card.Body>
            <Card.Title>{this.props.content.cardTitle}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              {this.props.content.cardSubtitle}
            </Card.Subtitle>
            {this.props.skills.map((e, i) => {
              return (
                <SkillProgress
                  key={i}
                  title={e.title}
                  variant={e.variant}
                  num={e.num}
                />
              );
            })}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SkillCard;
