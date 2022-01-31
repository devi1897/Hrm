import React, {useState, useContext} from  'react';
import  { GlobalContext } from '../context/GlobalState';
import { Link , useHistory} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import axios from 'axios';
import { UserList } from './UserList';

export const AddUser = () =>{
  let history = useHistory();
  const [user, setUser] = useState({
    id:"",
    employeename:"",
    salary:"",
    bankname:"",
    accountno:"",
    accountholdername:"",
    ifsccode:"",
    taxdeduction:"",
  
  })
  const {id,employeename,salary,bankname,accountno, accountholdername,ifsccode,taxdeduction} = user;
  const onInputChange = e => {
    setUser({...user,[e.target.name] : e.target.value})
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    history.push("/");
  }


  //const [name, setName] = useState('');
  //const { addUser } = useContext(GlobalContext);
  //const history = useHistory();

  //const onSubmit = () => {
    //const newUser={
      //id:uuid(),
     // name
    //}
    //addUser(newUser)
   //history.push('/');
  //}

 

 
    return(
      
    <Form onSubmit={e => onSubmit(e)} >
        <FormGroup>
        <h3>Add SalaryDetails</h3>
        
            
            
  <div class="row mb-3" style={{maxWidth:"100rem", margin:"1rem auto"}}>
  <label for="colFormLabel" class="col-sm-2 col-form-label">Select Employee</label>
  <div class="col-sm-5">
  <select class="form-select" id="SelectEmployee" required>
      <option selected disabled 
      name="selectemployee"
      value={employeename} 
      onChange={e => onInputChange(e)} >
        Select your option</option>
      <option>one</option>
      <option>two</option>
    </select>
    
  </div>
</div>

<div class="row mb-3" style={{maxWidth:"100rem", margin:"1rem auto"}}>
  <label for="colFormLabel" class="col-sm-2 col-form-label">Basic Salary</label>
  <div class="col-sm-5">
  <input placeholder="Basic Salary" required="" type="number" class="form-control" name="salary" value={salary} onChange={e => onInputChange(e)}></input>
  </div>
  </div>

<div class="row mb-3" style={{maxWidth:"100rem", margin:"1rem auto"}}>
  <label for="colFormLabel" class="col-sm-2 col-form-label">Bank Name</label>
  <div class="col-sm-5">
  <input placeholder="Bank Name" required=""  class="form-control" name="bankname" value={bankname} onChange={e => onInputChange(e)}></input>
</div>
</div>

<div class="row mb-3" style={{maxWidth:"100rem", margin:"1rem auto"}}>
  <label for="colFormLabel" class="col-sm-2 col-form-label">Account No</label>
  <div class="col-sm-5">
  <input placeholder="Account No" required="" class="form-control"  name="accountno" value={accountno} onChange={e => onInputChange(e)}></input>
</div>
</div>

<div class="row mb-3" style={{maxWidth:"100rem", margin:"1rem auto"}}>
  <label for="colFormLabel" class="col-sm-2 col-form-label">Re-Enter Account No</label>
  <div class="col-sm-5">
  <input placeholder="Re-Enter Account No" required="" class="form-control" name="reenteraccountno"  onChange={e => onInputChange(e)}></input>
</div>
</div>

<div class="row mb-3" style={{maxWidth:"100rem", margin:"1rem auto"}}>
  <label for="colFormLabel" class="col-sm-2 col-form-label">Account Holder Name</label>
  <div class="col-sm-5">
  <input placeholder="Account Holder Name" required="" class="form-control" name="accountholdername"  value={accountholdername} onChange={e => onInputChange(e)}></input>
</div>
</div>

<div class="row mb-3" style={{maxWidth:"100rem", margin:"1rem auto"}}>
  <label for="colFormLabel" class="col-sm-2 col-form-label">IFSC Code</label>
  <div class="col-sm-5">
  <input placeholder="IFSC Code" required="" class="form-control" name="ifsccode" value={ifsccode} onChange={e => onInputChange(e)}></input>
</div>
</div>

<div class="row mb-3" style={{maxWidth:"100rem", margin:"1rem auto"}}>
  <label for="colFormLabel" class="col-sm-2 col-form-label">Tax Deduction</label>
  <div class="col-sm-5">
  <input placeholder="taxDeduction" required="" type="number" class="form-control" name="taxdeduction" value={taxdeduction} onChange={e => onInputChange(e)}></input>
</div>
</div>

        </FormGroup>
        
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
    </Form>
    
    )
}