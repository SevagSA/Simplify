import { Component } from "react";
import "./DataGraph.css";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";
// import {
//     Card, CardBody,
//     CardTitle, CardText, Button
// } from "reactstrap"

export default class DataGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastMonthSpendings: {},
      lastMonthIncome: {},
    };
  }

  componentDidMount = () => {
    fetch(`/transactions/cards/${this.props.card.id}/get-all-spendings/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          lastMonthSpendings: data,
        });
      });

    fetch(`/transactions/cards/${this.props.card.id}/get-all-income/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          lastMonthIncome: data,
        });
      });
  };

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
