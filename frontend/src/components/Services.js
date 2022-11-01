import React,{Component} from 'react';
 import './styles/Services.css';
import  braids from '../components/images/braids.jfif';
import  locs from '../components/images/locs.jfif';
import  haircut from '../components/images/haircut.jfif';
import  makeup from '../components/images/makeup.jpg';
import  mn from '../components/images/mn.jfif';
 
export default class Services extends Component{
  render(){
      return(
        <div >
          <div className ='intro'>
            <h1>What we offer</h1>
            <p className='para'>
              fgfgfhgfjkyftgdffgxdfzdvvhgvfhgdftreserawfhjlhkuhyuyftdfgcvmvgdx
            </p>


          
          <div className = 'bucket'>
            <div className='flee'>
            <img src= {braids} alt="none" width="150px" height="200px"/> 
            <h2>African Braids</h2>
            <p>I miss my hair, but I feel like going out there with some fake braids wouldn't be right<br />
              we offer variety of braiding  knotless, bandika ,rastas,ghanian braids <br />just to name but a few 
            </p>
            </div>
            <div className='flee'>
            <img src= {haircut} alt="none" width="400px" height="400px"/> 
            <h2>Haircuts</h2>
            <p>We offer diffrent haicut styles for all genders and age groups<br />
            Life is more beautiful when you meet the right hairdresser
            </p>
            </div>
            <div className='flee' >
            <img src= {locs} alt="none" width="400px" height="400px"/> 
            <h2>Locs </h2>
            <p>Trust in the universe and respect your hair.<br />At Shawn we care and also help you to nature your look<br />
            tarting dreadlocks take time and bits of patience it will not look as expected at first however, <br />
            with great care your dreads will look healthy
            </p>
            </div>
            <div className='flee' >
            <img src= {makeup} alt="none" width="400px" height="400px"/> 
            <h2>makeup</h2>
            <p>Our talented team offers the best makeup come all enjoy our offers<br />
            our expertise your expression
            
            </p>
            </div>
            <div className='flee'>
            <img src= {mn} alt="none" width="400px" height="400px"/> 
            <h2>Manicure pedicure</h2>
            <p>Beautiful hands need beautiful nails.<br />Be yourself in style, to the tip of your nails <br />
            Good nails don't lie.</p>
            </div>
            </div>
            

          
          <footer>
          <ul class="container">
        <li>
            <strong> Our Location </strong>
            <p className='pi'> 14th Street Kisumu County 40100</p>
        </li>
        <li>
            <strong> Phone </strong>
            <p  className='pi'> +610 040 4346 400 </p>
        </li>
        <li>
            <strong> Email </strong>
            <p className='pi'> shawnpalour@gmailles.com.ke </p>
        </li>
    </ul>

          </footer>
          </div>

        </div>
    
)
}
}
  

