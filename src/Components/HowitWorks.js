import React from 'react'

const HowitWorks = () => {
  return (
    <div style={{height:'51.9375rem' , display:'flex'}}
    >
        
        
<div style={{width:"50%" ,background:'#DAE3F2', display:'flex', justifyContent:'center' , alignItems:'center', flexShrink:0, height:'100%'}}>
<img width={762} src={`${process.env.PUBLIC_URL}/HowItWorks.png`} alt="Logo" />

</div>


<div className='how-its-work' style={{width:"50%" ,paddingTop:'3.62rem',paddingLeft:'7.56rem',paddingRight:'6.76rem', display:'flex', gap:'1.62rem', flexDirection:'column', background:'#FFF' , flexShrink:0, height:'100%'}}>
    
    <span><span style={{color:'#666AE5'}}> How </span>It Works?</span>

<div className='how-its-work-text-box-wrapper'>

<div className='how-its-work-text-box'>
 <span>Sign Up and Get Started: </span>
 <span>Create an account on our platform and gain access to our suite of open and customizable applications.</span>
</div>

<div className='how-its-work-text-box'>
 <span>Sign Up and Get Started: </span>
 <span>Create an account on our platform and gain access to our suite of open and customizable applications.</span>
</div>

<div className='how-its-work-text-box'>
 <span>Sign Up and Get Started: </span>
 <span>Create an account on our platform and gain access to our suite of open and customizable applications.</span>
</div>

<div className='how-its-work-text-box'>
 <span>Sign Up and Get Started: </span>
 <span>Create an account on our platform and gain access to our suite of open and customizable applications.</span>
</div>

</div>

<button className='primary_btn'>get started</button>

</div>



        
        
        </div>
  )
}

export default HowitWorks