import React from "react";


class Login extends React.Component{
    constructor(props){
        super(props);       
        this.getCodeFromGithub = this.getCodeFromGithub.bind(this);         
    }

    getCodeFromGithub(e){        
        let codeUrl = "https://github.com/login/oauth/authorize?scope=user,repo";        
        codeUrl += "&client_id=YOUR_AUTH_APP_CLIENT_ID";
        codeUrl += "&redirect_uri=http://localhost:3000/login";
        window.location.replace(codeUrl);
    }


    componentDidMount(){
        let cUrl = window.location.href;
        if(cUrl.includes("code=")){            
            let code = cUrl.split("code=")[1];                              
            fetch('http://localhost:8008/user/login?code=' + code)
                .then((resp) => resp.json())
                .then((resp) => {                
                    if(resp["_result"]){
                        localStorage.setItem("github_token", resp['_result']["github_token"]);                           
                        window.location.replace("http://localhost:3000/login");
                        return true;               
                    }                    
                })
                .catch((e) => {
                    // handle when something goes wrong with your authentication
                })
        }           
    }

    render(){       
        return [            
            <div className="row">
                <div className="col-sm-12 text-center">                    
                    <div className="row justify-content-center">
                        <a onClick={(e) => {this.getCodeFromGithub(e)}}  className="btn btn-primary">
                            Sign in with GitHub
                        </a>
                    </div>
                </div>
            </div>            
        ];
    }
}

export default Login;