import React, { Component } from "react";
import NumberDataService from "../services/number.service"; 
import Button from 'react-bootstrap/Button';

export default class PrimeNumberList extends Component {
    constructor(props) {
        super(props); 
        this.onChangeSearchPrimeNumbers = this.onChangeSearchPrimeNumbers.bind(this); 
        this.retrivePrimeNumbers = this.retrivePrimeNumbers.bind(this); 
        this.refreshList = this.refreshList.bind(this); 
        this.removeAllNumbers = this.removeAllPrimeNumbers.bind(this); 
        this.searchNumbers = this.searchPrimeNumbers.bind(this); 

        this.state = {
            primeNumbers: [], 
            currentPrimeNumber: null, 
            currentIndex: -1, 
            searchPrimeNumber: ""
        };
    }

    componentDidMount() {
        this.retrivePrimeNumbers(); 
    }

    onChangeSearchPrimeNumbers(e) {
        const searchPrimeNumber = e.target.value; 
        this.setState({
            searchPrimeNumber: searchPrimeNumber
        }); 
    }

    retrivePrimeNumbers(){
        var data = {
            num: this.state.num
        };
        NumberDataService.getPrimeNumbers(data)
            .then(response => {
                this.setState({
                    numbers: response.data.num
                }); 
                console.log(response.data); 
            })
            .catch(e => {
                console.log(e); 
            }); 
    }

    refreshList() {
        this.retrivePrimeNumbers();
        this.setState({
            currentPrimeNumber: null,
            currentIndex: -1
        }); 
    }

    setActivePrimeNumber(number, index) {
        this.setState({
            currentPrimeNumber: number, 
            currentIndex: index
        }); 
    }

    removeAllPrimeNumbers() {
        NumberDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList(); 
            })
            .catch(e => {
                console.log(e); 
            }); 
    }

    searchPrimeNumbers(){
        this.setState({
            currentPrimeNumber: null, 
            currentIndex: -1
        }); 
    }

    render(){
        const { searchPrimeNumber, numbers, currentNumber: currentIndex } = this.state;

        return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Search by prime number"
                        value={searchPrimeNumber}
                        onChange={this.onChangeSearchPrimeNumbers}
                    />
                    <br></br>
                <div className="input-group-append">
                    <Button variant="success" onClick={this.searchPrimeNumber}>Get Prime Numbers</Button>{' '}
                </div>
            </div>
        </div>
        <br></br>
            <div className="col-md-6">
                <h4>Prime Number List:</h4>
                <ul className="list-group">
                    {numbers &&
                    numbers.map((number, index) => (
                        <li
                            className={
                                "list-group-item " +
                                (index === currentIndex ? "active" : "")
                            }
                            onClick={() => this.setActivePrimeNumber(number, index)}
                            key={index}
                        >
                            {number.number}
                        </li>
                    ))}
                </ul>
            </div>
            <br></br>
            <div>
                <Button variant="danger" onClick={this.removeAllNumbers}>Delete All Numbers</Button>{'  '}
            </div>
        </div>
        );
    }

}