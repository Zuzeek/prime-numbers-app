import React, { Component } from "react"; 
import NumberDataService from "../services/number.service"; 

export default class AddNumber extends Component {
    constructor(props) {
        super(props);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.saveNumber = this.saveNumber.bind(this);
        this.newNumbers = this.newNumbers.bind(this); 

        this.state = {
            id: null,
            num: null, 
            subbmited: false
        }; 
    }

    onChangeNumber(e) {
        this.setState({
            num: e.target.value
        }); 
    }

    saveNumber() {
        var data = {
            num: this.state.num
        };

        NumberDataService.create(data)
            .then(response => {
                this.setState({
                    num: response.data.num, 
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
            num: null,
            subbmited: false
        });
    }

    render(){
        return(
            <div className="submit-form">
                {this.state.subbmited ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newNumbers}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="number">Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="number"
                                required
                                value={this.state.num}
                                onChange={this.onChangeNumber}
                                name="number"
                            />
                        </div>

                        <button onClick={this.saveNumber} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        ); 
    }
}