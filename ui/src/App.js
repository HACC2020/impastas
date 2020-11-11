import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [toggleView, setToggleView] = useState(false);
  return (
    <div className="App flex" id = "mainDiv" style={{height:"100%", width:"100%", marginLeft:'auto', marginRight:'auto'}}>
    <button type="button" onClick={()=>setToggleView(!toggleView)} class="btn btn-info">Click me to change view</button>

   {
     toggleView
     ?<iframe height="100%" width="70%" src="https://console.dialogflow.com/api-client/demo/embedded/8ccb78e0-5510-4842-9fe3-2b0447d3ef67"></iframe>
     :
     <>
     <iframe class="iframe" src="https://hawaiicovid19.com/" width="100%" height="100%"></iframe>

     <df-messenger
  chat-icon="https://storage.googleapis.com/cloudprod-apiai/5f976cc0-271e-4902-a38f-e56bd3434466_x.png"
  intent="WELCOME"
  chat-title="MedBae"
  agent-id="8ccb78e0-5510-4842-9fe3-2b0447d3ef67"
  language-code="en"
    ></df-messenger>
     </>

     
   }
        


    </div>
  );
}

export default App;
