import React, { Component } from "react";
import NumberDataService from "../services/number.service"; 

export default class NumberList extends Component {
    constructor(props) {
        super(props); 
        this.onChangeSearchNumbers = this.onChangeSearchNumbers.bind(this); 
        this.retriveNumbers = this.retriveNumbers.bind(this); 
        this.refreshList = this.refreshList.bind(this); 
        this.removeAllNumbers = this.removeAllNumbers.bind(this); 
        this.searchNumbers = this.searchNumbers.bind(this); 

        this.state = {
            numbers: [], 
            currentNumber: null, 
            currentIndex: -1, 
            searchNumber: ""
        };
    }

    componentDidMount() {
        this.retriveNumbers(); 
    }

    onChangeSearchNumbers(e) {
        const searchNumber = e.target.value; 
        this.setState({
            searchNumber: searchNumber
        }); 
    }

    retriveNumbers(){
        NumberDataService.getAll()
            .then(response => {
                this.setState({
                    numbers: response.data
                }); 
                console.log(response.data); 
            })
            .catch(e => {
                console.log(e); 
            }); 
    }

    refreshList() {
        this.retriveNumbers();
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

    searchNumbers(){
        this.setState({
            currentNumber: null, 
            currentIndex: -1
        }); 
    }

    render(){
        const { searchNumber, numbers, currentNumber, currentIndex } = this.state;

        return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Search by number"
                        value={searchNumber}
                        onChange={this.onChangeSearchNumbers}
                    />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={this.searchNumber}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
            <div className="col-md-6">
                <h4>Number List</h4>

                <ul className="list-group">
                    {numbers &&
                    numbers.map((number, index) => (
                        <li
                            className={
                                "list-group-item " +
                                (index === currentIndex ? "active" : "")
                            }
                            onClick={() => this.setActiveNumber(number, index)}
                            key={index}
                        >
                            {number.title}
                        </li>
                    ))}
                </ul>

                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.removeAllNumbers}
                >
                    Remove All
                </button>
            </div>
        </div>
        );
    }

}