import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'; 


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            page1Flag: false,
            page2Flag: false
        });
        this.navbarClickHandler = this.navbarClickHandler.bind(this);
        this.processUrl = this.processUrl.bind(this);
    }

    processUrl(){
        let tab = this.props.match.params.tab;
        if(tab === "page1"){
            this.setState({
                page1Flag: true,
                page2Flag: false                
            });
        }
        else if(tab === "page2"){
            this.setState({
                page1Flag: false,
                page2Flag: true 
            });
        }
    }

    navbarClickHandler(e){
        let target = e.target.getAttribute("value");        
        if(target === "page1"){
            this.setState({
                page1Flag: true,
                page2Flag: false                
            });
        }
        else if(target === "page2"){
            this.setState({
                page1Flag: false,
                page2Flag: true 
            });
        }
    }

    componentDidMount(){
        this.processUrl();
    }

    render(){
        return(
            <div>
                <ul className='menu'>
                    <li className='menu-item' key={"page1"}>
                        <Link to="/page1" className='menu-anchor' onClick={this.navbarClickHandler} value="page1">Page1</Link>
                    </li>
                    <li className='menu-item' key={"page2"}>
                        <Link to="/page2" className='menu-anchor' onClick={this.navbarClickHandler} value="page2">Page2</Link>
                    </li>                    
                </ul>
                {this.state.page1Flag && <div>This is Page 1</div>}
                {this.state.page2Flag && <div>This is Page 2</div>}
            </div>            
        );
    }

}

export default withRouter(Home);