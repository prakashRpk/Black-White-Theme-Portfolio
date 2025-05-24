import { useState } from 'react'
import '../Styles/contact.css'
import pdf from '../pdf/Resume.pdf'

function Contact(){

    let [map,setMap]=useState(<div></div>)
    let [video,setVideo]=useState(<div></div>)

    function funMap(){
        setMap(<div id='map'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7855.930152776899!2d77.53499144048547!3d10.101944460034753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076a18540f7a7b%3A0x1fadb367136bff4e!2sT.%20Kallipatti%2C%20Periyakulam%2C%20Tamil%20Nadu%20625605!5e0!3m2!1sen!2sin!4v1747933718430!5m2!1sen!2sin"
             width="600" 
             height="450" 
             style={{border:0}}
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"></iframe>
             <button onClick={()=>setMap(<div></div>)}>Close</button>
        </div>)
        console.log("hi")
    }
    function funvideo(){
        setVideo(<div id='video'>
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dd-OEqh0P8o?si=1Thm5qHCTVNhUIVV" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen 
            autoplay></iframe>
            <button onClick={()=>setVideo(<div></div>)}>Close</button>
        </div>)
        console.log("hello")
    }

    return(<>
    <div id="contact">

    <a href="tel:638-368-5305"
     target='plank'
     class="btn btn-secondary" 
        title="WhatsApp">
        <i class="fa-brands fa-square-whatsapp"></i>
    </a>

    <a href="mailto:mrprakash08112004@gmail.com"
     target='plank'
     class="btn btn-secondary" 
        title="Email">
        <i class="fa-solid fa-envelope"></i>
    </a>

    <a href="https://www.linkedin.com/in/mr-prakash/" 
        target='plank' 
        class="btn btn-secondary" 
        title="Linked In">
            <i class="fa-brands fa-linkedin"></i>
    </a>

        <a href="https://github.com/prakashRpk" 
        target='plank' 
        class="btn btn-secondary" 
        title="Github">
            <i class="fa-brands fa-github"></i>
    </a>

    <a href="https://www.instagram.com/hello_mr_prakash/" 
        target='plank'
        class="btn btn-secondary" 
        title="Instagram">
            <i class="fa-brands fa-square-instagram"></i>
    </a>

    <a href="https://www.youtube.com/@hellomrprakash"
     target='plank'
     class="btn btn-secondary" 
        title="YouTube">
        <i class="fa-brands fa-youtube"></i>
    </a>

        <a class="btn btn-secondary" 
        title="Location" onClick={()=>funMap()} >
        <i class="fa-solid fa-map-location-dot"></i>
    </a>

        <a class="btn btn-secondary" 
        title="Intro Video" onClick={()=>funvideo()}>
        <i class="fa-solid fa-video"></i>
    </a>

            <a href={pdf}
     target='plank'
     class="btn btn-secondary" 
        title="Resume">
        <i class="fa-solid fa-id-badge"></i>
    </a>

    </div>
    {map}
    {video}
    </>)
}
export default Contact;