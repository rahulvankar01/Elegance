import React from 'react'
import Call from './Call'
import Parlex from './Parlex'
import Parlex1 from './Parlex1'
import Process from './Process'

const Service = () => {
  return (
    <div>
       <div class="service-parlex">
        <div class="service-parlex1">
            <div class="service-parlex2">
                <div class="service-parlex3">
                <div class="service-parlex2-box1">
                    <h1 class="">WHO WE ARE</h1>
                    <hr class="service-parlex2-box1-hr-1"/>
                    <hr class="service-parlex2-box1-hr-2"/>
                    <p>At Elegance, we have highly skilled and professional team of dedicated web professionals to take care of your projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     <div class="service-parlex2-box1-a">
                        <a class="service-parlex2-box1-a1" href="#">Read More</a>
                        <a class="service-parlex2-box1-a2" href="#">Buy Now!</a>
                    </div>
                        
                </div>
                <div class="service-parlex2-box2">
                    <img src="images/who-we-are.png"/>
                </div>
            </div>
            </div>
        </div>
    </div>
    <Call></Call>
    <Parlex1></Parlex1>
    <Process></Process>
    </div>
  )
}

export default Service
