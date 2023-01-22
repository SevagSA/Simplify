import { Component } from 'react';
import './DataGraph.css';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
// import {
//     Card, CardBody,
//     CardTitle, CardText, Button
// } from "reactstrap"

export default class DataGraph extends Component{
    constructor(props){
        super(props)

    }

    render(){
      console.log(this.props);
        return (
          <div className="account-card account-card2">
            <div className="full-width123456">
              <div className="small-width123456">
                <h1 className="sub-title">Balance analytics</h1>
              </div>
            </div>
            
            <div className="container-graph">
              <XYPlot width={400}
                  height={240}>
                  <HorizontalGridLines />
                  <LineSeries
                    data={[
                      {x: 1, y: 200},
                      {x: 2, y: 199},
                      {x: 3, y: 145},
                      {x: 4, y: 12},
                      {x: 5, y: 1000},
                      {x: 6, y: 52},
                      {x: 7, y: 168},
                      {x: 8, y: 88},
                    ]}/>
                  <XAxis />
                  <YAxis />
              </XYPlot>
            </div>
          </div>
        );   
    }
}