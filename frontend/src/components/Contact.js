import React  from 'react'
import './styles/Contact.css'

const Contact= () => {
  return (
    <div>
    <header>
    <nav class="cotainer">
        <div class="logo"> Shawn-Palour</div>
        </nav>
    <div class="cotent">
        <div class="container"></div>
        <h1> We'd Love To Hear From You</h1>
        <p className='te'> Our door ia always open for a good touch and service .we're ever ready to answer any and all question</p>
    <button className='highlight'>Press-Me</button>
    </div>
   </header>
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
  )
}

export default Contact