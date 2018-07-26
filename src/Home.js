import React, { Component } from 'react';


class Home extends Component {
	

	constructor() {
      super();
      this.state = {
        showMe : false,
        showFirst : true,
        data: [
            {name: 'Risky',id:1}, 
            {name: 'Maulana',id:2}
          ],
      };
      // this.props = {show:false}  
  	}


  	handleClick(x) {
      if (x==='hide') {
        this.setState({
          showMe : true,
          showFirst : false          
        })        
      }else{
        this.setState({
          showMe : false,
          showFirst : true
        })        
      }
      
    }

    actionClick(id){
      if (id==1) {
        this.handleClick('hide')
 
      }
      
    }

   render() {
      return (
         <div>
            <h2>Home</h2>
        
          {this.state.data.map(d =>               
            <p><button className="btn btn-danger" onClick={this.actionClick.bind(this,d.id)}>{d.name}</button>  </p>
          )}

          {
            this.state.showMe ?
            <button className="btn btn-primary" onClick={()=>this.handleClick('show')}>Show Hide Me</button>
            : null  
          }
  		    
          {
            this.state.showFirst ?
            <button className="btn btn-success" onClick={()=>this.handleClick('hide')}>Hide Me</button>
            : null   
          }
        
        </div>
      );
   }
}
export default Home;