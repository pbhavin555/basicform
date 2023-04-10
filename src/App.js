import React, {Component} from 'react';
import './App.css';
import Header from './header';
import RegistrationForm from './RegistrationForm';
// import axios from './axios';
// import FormValidationExample from './formexample';
// import RegistrationView from './sampleform';
const baseURL = "https://staging-gil.gujarat.gov.in/HRMSMicroservice/api/v1/AccountMaster?LoginUsername=8888888888&Password=Abc%24%24123&Type=2&loggedinUserId=0&languageId=0&requestId=0";
function App() {
  const [post, setPost] = React.useState(null);

  const config = {
    headers:{
      "accept": " application/json",
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,observe"
    }
  };
  React.useEffect(() => {
    
    axios.get(baseURL,config).then((response) => {
      console.log("Success");
      //setPost(response.data);
    });
  }, []);


  if (!post) return "No post!"


  // return (
  //   <div className="App">
  //     <Header/>
  //     <RegistrationForm/>
  //   <input>{post.LoginUsername}</input> 
  //   <input>{post.Password}</input> 
  //   <input>{post.Type}</input> 
  //   <input>{post.loggedinUserId}</input> 
  //   <input>{post.languageId}</input> 
  //   <input>{post.requestId}</input> 
  //    <button onClick={createPost}>Create Post</button>
  //   </div>
  // );
}

export default App;