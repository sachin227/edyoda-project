import React from 'react';
import './index.css'
const Capsules = (props) => {
    console.log("child-data",props.item)
    const filters=props.item
    console.log("this is", filters)
    return (  <div className="capsule">


        <h2>Latest Posts</h2>
        <div className="filter"><i className="fas fa-filter filtericon"></i><p>Filter by Category</p></div>
        <div className="capcontainer"><div className="maincapsules-active">All</div>
        {filters.length && filters.map(({title})=><div className="maincapsules">{title}</div>)}
        </div>
    </div>)
}
 
export default Capsules;