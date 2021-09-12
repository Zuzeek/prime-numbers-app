import React, { Component } from "react";
import NumberDataService from "../services/number.service"; 
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default class NumberList extends Component {
    constructor(props) {
        super(props); 
        this.onChangeGetNumbers = this.onChangeGetNumbers.bind(this); 
        this.retriveAllNumbers = this.retriveAllNumbers.bind(this); 
        this.refreshList = this.refreshList.bind(this); 
        this.removeAllNumbers = this.removeAllNumbers.bind(this); 

        this.state = {
            numbers: [], 
            currentNumber: null, 
            currentIndex: -1, 
            getNumber: ""
        };
    }

    componentDidMount() {
        this.retriveAllNumbers(); 
    }

    onChangeGetNumbers(e) {
        const getNumber = e.target.value; 
        this.setState({
            getNumber: getNumber
        }); 
    }

    retriveAllNumbers(){
        NumberDataService.getAll()
            .then(response => {
                this.setState({
                    numbers: response.data.number
                }); 
                console.log(response.data.numbers); 
            })
            .catch(e => {
                console.log(e); 
            }); 
    }

    refreshList() {
        this.retriveAllNumbers();
        this.setState({
            currentNumber: null,
            currentIndex: -1
        }); 
    }

    setActiveNumber(number, index) {
        this.setState({
            currentNumber: number, 
            currentIndex: index
        }); 
    }

    removeAllNumbers() {
        NumberDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList(); 
            })
            .catch(e => {
                console.log(e); 
            }); 
    }

    render(){
        const { numbers, currentNumber, currentIndex } = this.state;

        return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group-append">
                    <Button variant="success" onClick={this.retriveAllNumbers}>Get All Numbers</Button>{' '}
                </div>
            </div>
            <br></br>
            <div className="col-md-6">
                <h4>Number List</h4>

                <ul className="list-group">
                    {numbers &&
                    numbers.map((num, index) => (
                        <li className={
                                "list-group-item " +
                                (index === currentIndex ? "active" : "")
                            }
                            onClick={() => this.setActiveNumber(num, index)}
                            key={index}
                        >
                            {num}
                        </li>
                    ))}
                </ul>
            </div>
            <br></br>
            <div>
                <Button variant="danger" onClick={this.removeAllNumbers}>Delete All Numbers</Button>{'  '}
            </div>
            <div className="col-md-6">
                {currentNumber ? (
                    <div>
                        <h4>Numbers</h4>
                        <div>
                            <label>
                                <strong>Number:</strong>
                            </label>{" "}
                            {currentNumber.num}
                        </div>

                        <Link to={"/add" + currentNumber}
                        className="badge badge-waring">
                            Add Numbers
                        </Link>
                    </div>
                ) : (
                <div></div>
                )}
            </div>
        </div>
        );
    }
}