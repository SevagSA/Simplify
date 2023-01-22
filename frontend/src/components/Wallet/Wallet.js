// import { Component } from "react";
import "./Wallet.css";

// Child-Components
import { TransactionSummary } from "../TransactionSummary/TransactionSummary";
import DashboardCard from "../DashboardCard/DashboardCard";
import DataGraph from "../DataGraph/DataGraph";
import {LatestSpendings} from '../../components/LatestSpendings/LatestSpendings'
import {Link} from 'react-router-dom';

export default function Wallet(){
    return(
        <div>
            <div className="page-title">
                <h1 className="title">Wallet</h1>
            </div>
            <div className="special-width">
                <DataGraph />
                <div className="asdgsd"></div>
            </div>
            <p>Note: Not all expenses have alternatives</p>
            
            <div className="rtyjh">
                <div className="flexlikel">
                    <h1 className="sub-title smth">Current expenses</h1>
                    <div className='full-width12345asdf22'>
                        <div className="properwidth">
                            <div className='full-width12345asdf2278'>
                                <div className="account-card45 new-widthisgood2">
                                    
                                </div>
                                
                                <div className="new-widthisgood2223">
                                    <p className='gjdskfji'>Online store</p>
                                    <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
                                </div>
                                
                                <div className="new-widthisgood234">
                                    <p className='dfhgndgh'>-$10.22</p>
                                </div>

                                <p className="new-widthisgood236">
                                    <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </p>
                            </div>
                        </div>

                        <div className="properwidth">
                            <div className='full-width12345asdf2278'>
                                <div className="account-card45 new-widthisgood2">
                                    
                                </div>
                                
                                <div className="new-widthisgood2223">
                                    <p className='gjdskfji'>Online store</p>
                                    <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
                                </div>
                                
                                <div className="new-widthisgood234">
                                    <p className='dfhgndgh'>-$10.22</p>
                                </div>

                                <p className="new-widthisgood236">
                                    <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </p>
                            </div>
                        </div>

                        <div className="properwidth">
                            <div className='full-width12345asdf2278'>
                                <div className="account-card45 new-widthisgood2">
                                    
                                </div>
                                
                                <div className="new-widthisgood2223">
                                    <p className='gjdskfji'>Online store</p>
                                    <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
                                </div>
                                
                                <div className="new-widthisgood234">
                                    <p className='dfhgndgh'>-$10.22</p>
                                </div>

                                <p className="new-widthisgood236">
                                    <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="flexlikel">
                    <h1 className="sub-title smth">Alternative suggestions</h1>
                    <div className='full-width12345asdf22'>
                    <div className="properwidth">
                        <div className='full-width12345asdf2278'>
                            <div className="account-card45 new-widthisgood2">
                                
                            </div>
                            
                            <div className="new-widthisgood2223">
                                <p className='gjdskfji'>Online store</p>
                                <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
                            </div>
                            
                            <div className="new-widthisgood234">
                                <p className='dfhgndgh'>-$10.22</p>
                            </div>

                            <p className="new-widthisgood236">
                                <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </p>
                        </div>
                    </div>

                    <div className="properwidth">
                        <div className='full-width12345asdf2278'>
                            <div className="account-card45 new-widthisgood2">
                                
                            </div>
                            
                            <div className="new-widthisgood2223">
                                <p className='gjdskfji'>Online store</p>
                                <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
                            </div>
                            
                            <div className="new-widthisgood234">
                                <p className='dfhgndgh'>-$10.22</p>
                            </div>

                            <p className="new-widthisgood236">
                                <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </p>
                        </div>
                    </div>

                    <div className="properwidth">
                        <div className='full-width12345asdf2278'>
                            <div className="account-card45 new-widthisgood2">
                                
                            </div>
                            
                            <div className="new-widthisgood2223">
                                <p className='gjdskfji'>Online store</p>
                                <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
                            </div>
                            
                            <div className="new-widthisgood234">
                                <p className='dfhgndgh'>-$10.22</p>
                            </div>

                            <p className="new-widthisgood236">
                                <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

                
                <div className="flexlikel">
                    <h1 className="sub-title smth">Potential savings</h1>
                    <div className='full-width12345asdf22'>
                    <div className="properwidth">
                        <div className='full-width12345asdf2278'>
                            <div className="account-card45 new-widthisgood2">
                                
                            </div>
                            
                            <div className="new-widthisgood2223">
                                <p className='gjdskfji'>Online store</p>
                                <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
                            </div>
                            
                            <div className="new-widthisgood234">
                                <p className='dfhgndgh'>-$10.22</p>
                            </div>

                            <p className="new-widthisgood236">
                                <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </p>
                        </div>
                    </div>

                    <div className="properwidth">
                        <div className='full-width12345asdf2278'>
                            <div className="account-card45 new-widthisgood2">
                                
                            </div>
                            
                            <div className="new-widthisgood2223">
                                <p className='gjdskfji'>Online store</p>
                                <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
                            </div>
                            
                            <div className="new-widthisgood234">
                                <p className='dfhgndgh'>-$10.22</p>
                            </div>

                            <p className="new-widthisgood236">
                                <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </p>
                        </div>
                    </div>

                    <div className="properwidth">
                        <div className='full-width12345asdf2278'>
                            <div className="account-card45 new-widthisgood2">
                                
                            </div>
                            
                            <div className="new-widthisgood2223">
                                <p className='gjdskfji'>Online store</p>
                                <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
                            </div>
                            
                            <div className="new-widthisgood234">
                                <p className='dfhgndgh'>-$10.22</p>
                            </div>

                            <p className="new-widthisgood236">
                                <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}