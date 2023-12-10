import React from "react";


class ClassExample extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            counter: 0,
            id: null,
            internalId: ''
        });
        this.increaseCounter = this.increaseCounter.bind(this);
        this.setNewId = this.setNewId.bind(this);
        this.setInternalId = this.setInternalId.bind(this);
    }


    increaseCounter(){
        let currentCounter = this.state.counter;
        this.setState({
            counter: currentCounter + 1
        });
    }


    setNewId(){
        let newId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        this.setState({
            id: newId
        });
        this.setInternalId();
    }


    setInternalId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let newInternalId = '';
        for (let i = 0; i < 10; i++) {
          newInternalId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        this.setState({
            internalId: newInternalId,
        });
      }


    componentDidMount(){
        this.setNewId();
        this.setInternalId();
    }


    componentDidUpdate(){
        console.log('updated!')
    }


    render(){
        return(
            <div className="row">
                <div className="col-sm-3">
                    <button onClick={this.increaseCounter} >Increase</button>
                    <br></br>
                    <button onClick={this.setNewId} >New ID</button>
                    <br></br>
                    <button onClick={this.setInternalId} >New Internal ID</button>
                </div>
                <div className="col-sm-3">
                    Count: {this.state.counter}
                    <br></br>
                    ID: {this.state.id}
                </div>
            </div>
            
        );
    }
}

export default ClassExample;