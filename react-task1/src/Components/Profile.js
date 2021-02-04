import react from 'react';
import image from '../images/image.jpeg'
function Profile() {
 
  return (
  
    <div className="profile">
       <img src={image} alt="User Profile Picture"/>
       <button class="btn1"><i className="fa fa-qrcode"></i> QR Code </button>
       <br/><br/><br/>
       <h1 style={{lineHeight:"0.1",fontSize:"26px"}} >Vinita Mathew</h1>
       <b><p style={{lineHeight:"1.5"}}  >Assistant System Engineer<br/>
       Tata Consultancy Services</p></b>
       <p style={{lineHeight:"2"}}  title="Employee ID" ><i className="fa fa-address-book-o"></i> 1783161</p>
       <p style={{lineHeight:"2"}}  title="Email Addess" ><i className="fa fa-envelope-o"></i> vinita.mathew@tcs.com</p>
       <p style={{lineHeight:"2"}} title="Phone Number" ><i className="fa fa-phone"></i> +91 9035880832</p>
       <hr style={{width:"575px",float:"left"}}/><br/>
       <p >Emergency contact<br/>
            No emergency contact found. <a style={{textDecoration:"underline",lineHeight:"2"}}  href="profile.html">Please update</a></p>
            
            <p style={{lineHeight:"1.5"}}>Anniversary <br/>1st year on 3 September 2021</p>
            <hr style={{width:"575px",float:"left"}}/>
</div>
  
  );
}

export default Profile;