import React, { Component } from "react"; 
import NumberDataService from "../services/number.service"; 
import Button from 'react-bootstrap/Button';

export default class AddNumber extends Component {
    constructor(props) {
        super(props);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.saveNumber = this.saveNumber.bind(this);
        this.newNumbers = this.newNumbers.bind(this); 
        this.removeAllPrimeNumbers = this.removeAllPrimeNumbers(this); 

        this.state = {
            id: null,
            number: null, 
            subbmited: false
        }; 
    }

    onChangeNumber(e) {
        this.setState({
            number: e.target.value
        }); 
    }

    saveNumber() {
        var data = {
            number: this.state.number
        };

        NumberDataService.create(data)
            .then(response => {
                this.setState({
                    number: response.data.number, 
                    subbmited: true
                }); 
                console.log(response.data); 
        })
        .catch(e => {
            console.log(e); 
        })
    };

    newNumbers(){
        this.setState({
            id: null,
            number: null,
            subbmited: false
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

    render(){
        return(
            <div className="submit-form">
                {this.state.subbmited ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <Button variant="danger" onClick={this.removeAllPrimeNumbers}>Delete All Numbers</Button>{'  '}
                        <Button variant="success" onClick={this.newNumbers}>Add New</Button>{' '}
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="number">Number:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="number"
                                required
                                value={this.state.number}
                                onChange={this.onChangeNumber}
                                name="number"
                            />
                        </div>
                        <br></br>
                        <Button variant="success" onClick={this.saveNumber}>Submit</Button>{' '}
                    </div>
                )}
            </div>
        ); 
    }
}