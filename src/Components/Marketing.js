import React from 'react'
import { MdAdd } from 'react-icons/md'

const Marketing = () => {
  return (
    <div className='marketing-sec' >
        
        <div className='marketing-left'>
            <h2>Our platform is built to provide <br/>
            <span style={{color:'#666AE5'}}>
maximum flexibility</span>, ensuring it meets  
your unique business requirements.</h2>


<div className='marketing-text-list'>


<span style={{display:'flex' , gap:4}}>  <MdAdd size="2rem" color="blue" />
Single Tenant App- Fully private, Fully Customizable</span>

<span style={{display:'flex' , gap:4}}>  <MdAdd size="2rem" color="blue" />
Zero Tech debt- App with all artifacts</span>

<span style={{display:'flex' , gap:4}}>  <MdAdd size="2rem" color="blue" />Complete Open - You own it, you change it with no limit</span>

<span style={{display:'flex' , gap:4}}>  <MdAdd size="2rem" color="blue" />Highest flexibility - Any cloud / Any Changes</span>

<span style={{display:'flex' , gap:4}}>  <MdAdd size="2rem" color="blue" />One click E2E Engineering Team - Available On demand to make changes
</span>

<span style={{display:'flex' , gap:4}}>  <MdAdd size="2rem" color="blue" />Vendor Friendly -Deliver Apps to your own customers

</span>


</div>






        </div>




        </div>
  )
}

export default Marketing