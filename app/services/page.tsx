import Image from "next/image";
import Link from "next/link";

export default function Services(){
    return(
        <div className= "services_section layout_padding">
         <div className= "container">
            <h1 className= "services_taital">Services </h1>
            <p className= "services_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
            <div className= "services_section_2">
               <div className= "row">
                  <div className= "col-md-4">
                     <div><Image src= "../images/img-1.png" className= "services_img" alt="img" /></div>
                     <div className= "btn_main"><Link href= "#">Rafting</Link></div>
                  </div>
                  <div className= "col-md-4">
                     <div><Image src= "../images/img-2.png" className= "services_img" alt="img" /></div>
                     <div className= "btn_main active"><Link href= "#">Hiking</Link></div>
                  </div>
                  <div className= "col-md-4">
                     <div><Image src= "../images/img-3.png" className= "services_img" alt="img" /></div>
                     <div className= "btn_main"><Link href= "#">Camping</Link></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}