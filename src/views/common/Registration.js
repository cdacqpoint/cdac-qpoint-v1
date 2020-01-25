import React,{Component} from 'react';
import axios from 'axios';

export default class Registration extends Component{
    constructor(props){
        super(props);

        this.state={
            firstname:"",
            lastname:"",
            coursename:"DAC",
            designation:"Student",
            email:"",
            password:"",
            passwordconfirm:"",
            registrationerrors:""
        }
       this.handleSubmit=this.handleSubmit.bind(this);
       this.handleChange=this.handleChange.bind(this);
       this.handleInputChange=this.handleInputChange.bind(this);
       this.handleClick=this.handleClick.bind(this);
       this.resetForm = this.resetForm.bind(this);
    }
    
    resetForm = () => {
        this.setState({ firstname:"",
        lastname:"",
        coursename:"DAC",
        designation:"Student",
        email:"",
        password:"",
        passwordconfirm:"",
        registrationerrors:""});
    }
    
    handleClick = () =>{
        alert("Registration Done Successfully !!");
        this.resetForm();
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
             firstname,
             lastname,
             coursename,
             designation,
             email,
             password,
             passwordconfirm
         }=this.state;
         //console.log("form submitted");
        axios.post("http://localhost:3000/registrations",{
         user:{
             firstname:firstname,
             lastname : lastname,
             coursename : coursename,
             designation:designation,
             email:email,
             password:password,
             passwordconfirm:passwordconfirm
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
        return(
            <div>
                           <div className="sign-section align-center">
                              <div className="wrapper">
 	                                 <div className="form-container">
 		                                  <h1>Sign Up</h1>
                                              <form className="form" onSubmit={this.handleSubmit}>
                                                <label className="label align-left">
      	                                        	Firstname
                                               	</label>
                                              	<input type="text" name="firstname"  placeholder="Enter your Firstname" value={this.state.firstname} className="input" onChange={this.handleInputChange} required=""/>
                                                 <label className="align-left label">
        	                                         Lastname
                                                  </label>
                                                  <input type="text" name="lastname"  placeholder="Enter your Lastname" value={this.state.lastname} onChange={this.handleInputChange}  className="input" required=""/>
                                                  <label className="align-left label">
        	                                      Course Name
                                                  </label>
                                                  <select required name="coursename" value={this.state.coursename} onChange={this.handleChange}>
                                                        <option>DAC</option>
                                                        <option>DESD</option>
                                                        <option>DIOT</option>
                                                        <option>DBDA</option>
                                                        <option>DVLSI</option>
                                                        <option>DITISS</option>
                                                        <option>DMC</option>
                                                        <option>DSSD</option>
                                                        <option>DHPCSA</option>
                                                        <option>DBIHI</option>
                                                        <option>Others</option>
                                                   </select>
                                                            <label className="align-left">
                                                                Desgination
                                                            </label>
                                                   <select required name="designation" value={this.state.designation} onChange={this.handleChange}>
                                                                <option>
                                                                    Student
                                                                </option>
                                                                <option>
                                                                    Faculty
                                                                </option>
                                                     </select>

                                                     {/* <label className="align-left">Student Id/ Faculty Id</label>
                                                        <input type="text" name="id" placeholder="Please add your Id" required=""/> */}
                                                     <label className="align-left label">Email Address</label>
                                                         <input type="Email" name="email" placeholder="Enter your Email Address" value={this.state.email} onChange={this.handleInputChange} required="" className="input"/>
                                                     <label className="align-left label">Password</label>
                                                         <input type="Password" name="password" placeholder="Enter your Password" value={this.state.password} onChange={this.handleInputChange}  className="input" required="" />
                                                     <label className="align-left label">Confirm Password</label>	
                                                          <input type="Password" name="passwordconfirm" placeholder="Enter your password again" value={this.state.passwordconfirm} onChange={this.handleInputChange} required=""  className="input"/>

        	                                        <input type="submit" name="Login" value="Sign Up" class="input" className="login" onClick={this.handleClick}/>
        	


            </form>
            </div>
            </div>
            </div>
               {/* <div className="sign-section align-center">
 <div className="wrapper">
 	<div className="form-container">
 		<h1>Sign Up</h1>
      <form>
      	
        
      </form>
    </div>		
 </div> 	
</div> */}
         
            </div>
        )
    }
}
