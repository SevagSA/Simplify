import "../css/global.css";
import "./UserCards.css";
import DashboardCard from "../DashboardCard/DashboardCard";
import CardForm from "../CardForm/CardForm";


export default function UserCards({card}){
    return(
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Cards</h1>
            </div>
            <div className="mr-8 ml-8 mb-3">
                <div className="width-full">
                    <a className="float-right a-button" href="/addcard">Add Card</a>
                </div>
                <div className="flex-center width-full">
                    <div id="card" className="height-20">
                        <DashboardCard />
                    </div>
                </div>
                <div className="mt-15">
                    <div className="inline-left width-full">
                        <div className="column-container">
                            <CardForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}