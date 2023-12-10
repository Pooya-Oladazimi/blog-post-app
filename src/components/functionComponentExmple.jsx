import { useState, useEffect } from "react";


export const FunctionComponent = (props) => {
    const [counter, setCounter] = useState(0);
    const [id, setId] = useState(null);
    const [internalId, setInternalId] = useState('');


    function increaseCounter(){
        let currentCounter = counter;
        setCounter(currentCounter + 1);
    }


    function setNewId(){
        let newId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        setId(newId);
        setInternalId();
    }

    function setNewInternalId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let newInternalId = '';
        for (let i = 0; i < 10; i++) {
          newInternalId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setInternalId(newInternalId);
    }


    useEffect(() => {
        setNewId();
        setNewInternalId();
    }, []);


    useEffect(() => {
        console.log('updated!')
    }, [counter, id]);


    return(
        <div className="row">
            <div className="col-sm-3">
                <button onClick={increaseCounter} >Increase</button>
                <br></br>
                <button onClick={setNewId} >New ID</button>
                <br></br>
                <button onClick={setNewInternalId} >New Internal ID</button>
            </div>
            <div className="col-sm-3">
                Count: {counter}
                <br></br>
                ID: {id}
            </div>
        </div>
        
    );
}

