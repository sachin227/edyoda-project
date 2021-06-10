import './App.css'
import {filterdata,blogdata} from './utils/CommonData'

import Topbar from './component/Topbar';

import Capsules from './component/Capsules'
import Card from './component/Card';


function App() {
 
console.log("dare" ,filterdata)

  return (
    <div className="App">
    
    <Topbar />
    <Capsules item={filterdata}/>
    <div className="carding">
    
    {blogdata.map(({small_image,slug,title,authorname,description,posted_on})=>
        <Card title={title} img={small_image} author={authorname} desc={description} date={posted_on} />
      
      )}
        </div>
    
   
   

 
    
    

   
    </div>
  );
}

export default App;

