import React from 'react'

const WhyChooseUs = () => {
  return (
    <div  style={{height:'60.75rem' , display:'flex' }}>

<div style={{width:'50%', display:"flex", paddingLeft:'9.44rem', flexDirection:'column', background:'#FFFFFF'}}>

<h1 className='sec_headings'><span style={{color:'#666AE5'}}> Why </span>Choose Us?</h1>
<div className='choose_box_wrapper'> 

<div className='choose_box'>
<span>Complete Flexibility </span>
<span>Built upon most modern cloud native architecture, delivering highest level
of reliability and security and changeability.</span>
</div>

<div className='choose_box'>
<span> Highest Quality </span>
<span>Built upon most modern cloud native architecture, delivering highest level
of reliability and security and changeability.</span>
</div>

<div className='choose_box'>
<span>Own Application Space </span>
<span>Our Apps are single tenant ensuring that your Apps and Data is always private.
</span>
</div>

<div className='choose_box'>
<span>Certified Resources </span>
<span>Hire from a pool of certified professionals, ensuring you get top-quality talent.</span>
</div>

<div className='choose_box'>
<span>Instant Availability  </span>
<span>Scale your team instantly to meet project demands without lengthy hiring processes.</span>
</div>

<div className='choose_box'>
<span>Outcome-Driven Billing  </span>
<span>Enjoy a predictable and transparent billing model focused on delivering value.</span>
</div>

</div>




<button style={{marginTop:"1.94rem"}} className='primary_btn'>get more details</button>



</div>







<div style={{width:'50%', display:'flex' , justifyContent:'center', alignItems:'center', background:'#D4FADA'}}>
<img width={762} src={`${process.env.PUBLIC_URL}/WhyChooseUs.png`} alt="Logo" /> 
</div>
    </div>
  )
}

export default WhyChooseUs