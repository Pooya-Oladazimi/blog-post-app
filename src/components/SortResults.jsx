import React from "react";


class SortResults extends React.Component{
    constructor(props){
        super(props);
        this.state = ({  
            sortField: "null",          
            data: [
                {"text": "Sample A", "val1": 1, "val2": 4, "val3": 9},
                {"text": "Sample B", "val1": 3, "val2": 1, "val3": 6},
                {"text": "Sample C", "val1": 2, "val2": 3, "val3": 1}
            ]
        });
        this.createResultToRender = this.createResultToRender.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    
    sortBasedOnKey (array, property) {
        return array.sort(function (o1, o2) {
            let x = o1[property];
            let y = o2[property];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        })
    }


    handleSortChange = (e) => {
        if(e.target.value !== "null"){
            let sortedData = this.sortBasedOnKey(this.state.data, e.target.value);
            this.setState({
            sortField: e.target.value,
            data: sortedData
            });
        }        
      }
    
    
    
    createResultToRender(){
        let result = [];
        this.state.data.map((item) => {
            result.push(
                <div className="sort-card">
                    <div>{item['text']}</div>
                </div>                
            );
        });
        return result;
    }


    render(){
        return(
            <div className="sort-render">
                <div className='col-sm-4 form-inline'  id="sort-grid">
                    <div class="form-group">
                        <label for="list-sorting" className='col-form-label'>sorted by </label>
                        <select  id="list-sorting" value={this.state.sortField} onChange={this.handleSortChange}>
                            <option selected disabled value={'null'} key="val0">Choose ...</option>
                            <option value={'val1'} key="val1">Val 1</option>
                            <option value={'val2'} key="val2">Val 2</option>
                            <option value={'val3'} key="val3">Val 3</option>
                        </select>  
                    </div>
                </div>
                <br></br>
                {this.createResultToRender()}
            </div>            
        );
    }
}

export default SortResults;