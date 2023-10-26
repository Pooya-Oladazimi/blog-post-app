import React from "react";



class ResizeablePane extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            lastVerticalLinePositionX: 0,
            isResizeOn: false
        });
        this.onMouseDown = this.onMouseDown.bind(this);
        this.moveToResize = this.moveToResize.bind(this);
        this.releaseMouseFromResize = this.releaseMouseFromResize.bind(this);
    }


    onMouseDown(event){
        let targetElement = event.target;
        if (!targetElement.classList.contains('page-resize-vertical-line')){
          return null;
        }
        this.lastVerticalLinePositionX = event.clientX;
        this.setState({
            isResizeOn: true
        });
    }
    

    moveToResize(event){
        if(!this.state.isResizeOn){
          return null;
        }   
        let addedWidth = (event.clientX - this.lastVerticalLinePositionX) / 1;    
        let pageLeftPane = document.getElementById("page-left-pane");
        let pageRightPane = document.getElementById("page-right-pane");
        let currentWidthLeft = parseInt(pageLeftPane.offsetWidth);    
        let currentWidthRight = parseInt(pageRightPane.offsetWidth);    
        pageLeftPane.style.width = (currentWidthLeft + addedWidth) + "px";
        pageRightPane.style.width = (currentWidthRight - addedWidth) + "px";
        this.lastVerticalLinePositionX = event.clientX;        
        this.setState({
            lastVerticalLinePositionX: event.clientX
        });
      } 
    

    releaseMouseFromResize(event){
        if(!this.state.isResizeOn){
          return null;
        }
        this.setState({
            isResizeOn: false
        });    
      }

    
    componentDidMount(){
        document.body.addEventListener("mousedown", this.onMouseDown);
        document.body.addEventListener("mousemove", this.moveToResize);
        document.body.addEventListener("mouseup", this.releaseMouseFromResize);
    }

    componentWillUnmount(){
        document.body.removeEventListener("mousedown", this.onMouseDown);
        document.body.removeEventListener("mousemove", this.moveToResize);
        document.body.removeEventListener("mouseup", this.releaseMouseFromResize);
    }
    
    
    render(){
        return (
            <div className="resizable-container">
                <div className="pane-box" id="page-left-pane">
                    Left Content
                </div>
                <div className='page-resize-vertical-line'></div>
                <div className="pane-box" id="page-right-pane">
                    Right Content
                </div>
            </div>
        );
    }


}

export default ResizeablePane;