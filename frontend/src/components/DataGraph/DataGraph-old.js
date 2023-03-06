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
      <div className="account-card account-card2">
        <div className="full-width123456">
          <div className="small-width123456">
            <h1 className="sub-title">Balance analytics</h1>
          </div>
        </div>

        <div className="container-graph">
          <XYPlot width={400} height={240}>
            <HorizontalGridLines />
            <LineSeries
              data={[
                { x: 1, y: 300 },
                { x: 2, y: 590 },
                { x: 3, y: 200 },
                { x: 4, y: 300 },
                { x: 5, y: 700 },
                { x: 6, y: 500 },
                { x: 7, y: 600 },
                { x: 8, y: 700 },
              ]}
            />

            <LineSeries
              data={[
                { x: 1, y: 200 },
                { x: 2, y: 300 },
                { x: 3, y: 800 },
                { x: 4, y: 700 },
                { x: 5, y: 975 },
                { x: 6, y: 590 },
                { x: 7, y: 1000 },
                { x: 8, y: 800 },
              ]}
            />

            <XAxis />
            <YAxis />
          </XYPlot>
        </div>
      </div>
    );
  }
}
