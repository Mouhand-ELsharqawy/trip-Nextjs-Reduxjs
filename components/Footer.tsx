import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className= "footer_section layout_padding">
        <div className= "container">
           <div className= "input_btn_main">
              <input type="text" className= "mail_text" placeholder="Enter your email" name="Enter your email" />
              <div className= "subscribe_bt"><Link href= "#">Subscribe</Link></div>
           </div>
           <div className= "location_main">
              <div className= "call_text"><Image src= "../app/images/call-icon.png" alt='Image' /></div>
              <div className= "call_text"><Link href= "#">Call +01 1234567890</Link></div>
              <div className= "call_text"><Image src= "../app/images/mail-icon.png" alt='Image' /></div>
              <div className= "call_text"><Link href= "#">demo@gmail.com</Link></div>
           </div>
           <div className= "social_icon">
              <ul>
                 <li><Link href= "#"><Image src= "../app/images/fb-icon.png" alt='Image' /></Link></li>
                 <li><Link href= "#"><Image src= "../app/images/twitter-icon.png" alt='Image' /></Link></li>
                 <li><Link href= "#"><Image src= "../app/images/linkedin-icon.png" alt='Image' /></Link></li>
                 <li><Link href= "#"><Image src= "../app/images/instagram-icon.png" alt='Image' /></Link></li>
              </ul>
           </div>
        </div>
     </div>
    )
}