import React from  "react"
import './topbar.css'
const Topbar= (props)=>{
    return <div className="topbar">
<div className="firstpart">
<div ><span className="logo">EDYODA</span><br/><span className=
'story'>Stories</span></div>
<h3 className="explore">Explore Categories <i class="fas fa-chevron-down icon"></i></h3>
</div>
<div className="secondpart">
<p className="para">EdYoda is free learning and knowledge
sharing platform for techies</p>
<div className="button">
    Go to main Website
</div>
</div>
    </div>
}

export default Topbar;