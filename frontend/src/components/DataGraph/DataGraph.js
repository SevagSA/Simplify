import "../css/global.css";
import "./DataGraph.css";
import "../../../node_modules/react-vis/dist/style.css";
import AutoSizer from "react-virtualized-auto-sizer";
import { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";


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
      }
    );

    fetch(`/transactions/cards/${this.props.card.id}/get-all-income/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          lastMonthIncome: data,
        });
      }
    );
  };

  render() {
    return (
      <div className="box-shadow border-radius container-statistics">
        <p className="subtitle-text spaced-container">
          Expenses Statistics
          <label className="float-right text-grey unbold-text">
            Week&nbsp;&nbsp;
            <svg className="margin-auto rotate-180" xmlns="http://www.w3.org/2000/svg" width="1vw" height="1vw" fill="gray" viewBox="0 0 16 16"><path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>
          </label>
        </p>
        <div style={{height:"30vh", width:"100%"}}>
          <AutoSizer>
          {({ width, height }) => (
            <XYPlot width={width} height={height}>
            <VerticalGridLines />
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
            <XAxis/>
            <YAxis/>
            </XYPlot>
          )}
          </AutoSizer>
        </div>
      </div>
    );
  }
}