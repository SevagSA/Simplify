import { Component } from "react";
import "./DashboardCard.css";
import {
    Card, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"

export default class DashboardCard extends Component{
    render(){
        return (
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Sample Card title</CardTitle>
                    <CardText>Sample Card Text to display!</CardText>
                    <Button>Action Button</Button>
                </CardBody>
            </Card>
        );
        
    }
}