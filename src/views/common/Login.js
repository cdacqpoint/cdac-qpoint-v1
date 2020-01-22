import React,{Component} from 'react';
import axios from 'axios';
import "../../assets/login.css" ;

export default class Login extends Component{
    constructor(props){
        super(props);

        this.state={
            designation:"Student",
            email:"",
            password:"",
            loginerrors:""
        }
       this.handleSubmit=this.handleSubmit.bind(this);
       this.handleChange=this.handleChange.bind(this);
       this.handleInputChange=this.handleInputChange.bind(this);
       this.handleClick=this.handleClick.bind(this);
    }

    handleClick = () =>{
        alert("login successfull!!!");
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        
      }
    handleChange(event){
       // this.setState({coursename: event.target.value});
       // this.setState({designation: event.target.value});
       this.setState({
    [event.target.name]:event.target.value
       
       });
       console.log("handle changed",event);
    }
    handleSubmit(event){
         const{
             designation,
             email,
             password
         }=this.state;
         //console.log("form submitted");
         axios.post("http://localhost:9090/registrations",{
         user:{
             designation:designation,
             email:email,
             password:password,
         }
     },
     {withCredentials:true}
     )
     .then(response =>{
         console.log("registration response",response);
     })
     .catch(error =>{
         console.log("registration error",error)
     });
         event.preventDefault();
     }
    render()
    {
        // const defaultUrl ="#";
        return(
            <div>
                           <div className="sign-section align-center">
                              <div className="wrapper">
 	                                 <div className="form-container">
 		                                  <h1>Login</h1>
                                              <form onSubmit={this.handleSubmit}>
                                              <div className="cta-container">
      	               	                        <input type="submit" name="Student" value="Student" className="primary-cta" id="id1"/>
      	              	                        <input type="submit" name="Faculty" value="Faculty" className="primary-cta" id="id2"/>
                                              </div>
                     	              <label className="align-left">
      	             	                 Username
                    	               </label>
      	                                      <input type="text" name="email"  placeholder="Enter your Username" value={this.state.email} onChange={this.handleInputChange} required=""/>
                                       <label className="align-left">
        	                             Password
                                       </label>
                                               <input type="Password" name="password"  placeholder="Enter the Password" value={this.state.password} onChange={this.handleInputChange} required=""/>
        	                                   <input type="submit" name="Login" value="Login" className="login" onClick={this.handleClick}/>
        	                                     {/* <a href={defaultUrl}>Forgot Password?</a> */}
                                                
            </form>
            </div>
            </div>
            </div>
  
         
            </div>
        )
    }
}
