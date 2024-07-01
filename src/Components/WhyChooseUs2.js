import React from 'react'

const WhyChooseUs2 = () => {
  return (
   <div style={{height:"90vh" ,  display:'flex'}}>


<div style={{height:'100%' , width:'50%' , background:'FFF'}}>
    
<div style={{padding:'2rem', height:'100%' , display:'flex', justifyContent:'space-between', flexDirection:'column' }}>
    
       <div> <h1> <span style={{color:'#666AE5' , height:'100%' , display:'flex' , justifyContent:'space-between' , flexDirection:'column'}}>Why</span>  Choose Us?</h1></div>


<div style={{display:'flex' , flexDirection:'column' , gap:12}}> 



    <div style={{display:"flex" , flexDirection:'column' , gap:'1rem'}}>

    <div style={{width:'42rem' , display:'flex',flexDirection:'column', gap:6 , justifyContent:'center', padding:'1rem', height:'7rem' ,borderRadius:'0.625rem', background:'#FDE3C7'}}>
<span
style={{
    color:'#202020',
    fontSize:'1.5rem',
    fontWeight:'600',
    lineHeight:'1.5rem',

}} 
>Complete Flexibility </span>
<span style={{
    color:'#303030',
    fontSize:'1rem'
}}>Our open applications and on-demand engineering teams provide <br/>
unparalleled flexibility.</span>
    </div>

    
    </div>

    <div style={{display:"flex" , flexDirection:'column' , gap:'1rem'}}>

<div style={{width:'42rem' , display:'flex',flexDirection:'column', gap:6 , justifyContent:'center', padding:'1rem', height:'7rem' ,borderRadius:'0.625rem', background:'#FDE3C7'}}>
<span
style={{
color:'#202020',
fontSize:'1.5rem',
fontWeight:'600',
lineHeight:'1.5rem',

}} 
>Complete Flexibility </span>
<span style={{
color:'#303030',
fontSize:'1rem'
}}>Our open applications and on-demand engineering teams provide <br/>
unparalleled flexibility.</span>
</div>




</div>


</div>


        <button>get more details</button>
        </div>

</div>


<div style={{height:'100%' , 
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        width:'50%' , background:'#D4FADA'}}>
    <img width={542} src={`${process.env.PUBLIC_URL}/Right.png`} alt="Logo" />


    </div>


   </div>
  )
}

export default WhyChooseUs2