import React from "react";

export function forLoopTypeOne(){
    
    let targetData = ["apple", "orange", "car", "plane"];
    let result = [];

    for(let i=0; i<targetData.length; i++){
        result.push(
            <p>{targetData[i]}</p>
        );
    }

    return result;
}

export function forLoopTypeTwo(){
    
    let targetData = ["apple", "orange", "car", "plane"];   
    let result = [];

    for(let obj of targetData){
        result.push(
            <p>{obj}</p>
        );
    }

    return result;
}


export function forLoopTypeThree(){
    
    let targetData = {"name": "John", "ID": "1234"};
    let result = [];

    for(let obj in targetData){
        result.push(
            <p>{obj} : {targetData[obj]}</p>
        );
    }

    return result;
}


export function forLoopTypeFour(){
    
    let targetData = {"name": "John", "ID": "12345"};
    let result = [];

    Object.entries(targetData).map(([key, value]) => {
        result.push(
            <p>{key} : {value}</p>
        );
    });

    
    targetData = ["apple", "orange", "car", "plane"];  

    targetData.map((item, index) => {
        result.push(
            <p>Item number {index} is: {item}</p>
        );
    });

    return result;
}