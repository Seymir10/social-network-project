import React, {Component} from "react";

class Settings extends Component{
    constructor() {
        super(undefined);
        this.state = {
            sayings: ""
        }
    }

    update(e){
        this.setState({
            sayings : this.a.value
        })
    }

    render() {
        return(
            <div>
                <div>
                    <input type='text' ref={(call_back) => {
                        this.a = call_back;
                    }} onChange={this.update.bind(this)}/>
                </div>

                <div>
                    <strong>{this.state.sayings}</strong>
                </div>
            </div>
        )
    }
}

export default Settings;