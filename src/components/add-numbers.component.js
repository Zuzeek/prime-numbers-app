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
            number: "", 
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
                    num: response.data.num
                }); 
                console.log(response.data); 
        })
        .catch(e => {
            console.log(e); 
        })
    };
}