import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { 
            msg : false,
            success : false,
            fail : false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        
        e.preventDefault();        
        let user = e.target.elements.username.value
        let pass = e.target.elements.password.value   
        if(user=='' || pass==''){
            alert('no')
        }else{     
            if(user!=='admin' && pass!=='admin'){
                this.setState({
                    msg : true,
                    success : true,
                    fail : false         
                })  
            }else{
                this.setState({
                    msg : true,
                    fail : true,
                    success : false         
                }) 
            }
        }

    }

   render() {
      return (
         

          
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="well login-box">
                            <form  onSubmit={this.onSubmit}>
                                <legend>Login</legend>
                                <div className="form-group">
                                    
                                    <label htmlFor="username">Enter username</label>
                                    <input id="username" name="username" type="text"  className="form-control"/>
                    
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" name="password" type="password" className="form-control"  />
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-danger btn-cancel-action">Cancel</button>
                                    <input type="submit" className="btn btn-success btn-login-submit" value="Login" />
                                </div>
                                
                                {
                                    this.state.fail && this.state.msg ?
                                    <div className="alert alert-danger">
                                    <strong>Danger!</strong> Gagal Login.
                                    </div> : null
                                }
                                {
                                    this.state.success && this.state.msg ?
                                    <div className="alert alert-success">
                                    <strong>Success!</strong> Login successfully.
                                    </div> : null
                                }

                            </form>
                        </div>
                   
                    </div>
                </div>
            </div>        
      

      );
   }
}
export default Login;