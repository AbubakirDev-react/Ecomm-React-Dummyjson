import React from 'react'
import '../css/Footer.css'


const Footer = () => {
  return (
    <footer className='footer'>
        <h3>2026 All right reversed</h3>
        <div>
            <ul>
            <li><a href="#"> Telegram</a></li>
            <li><a href="#"> GitHub</a></li>
            <li><a href="#"> Blog</a></li>
        </ul>
        <ul>
            <li><a href="#"> About</a></li>
            <li><a href="#"> Contact</a></li>
            <li><a href="#"> Politics</a></li>
        </ul>
        <ul>
            <li><a href="#"> Pay</a></li>
            <li><a href="#"> Deliveries</a></li>
        <li className='creator'>Creator: AbubakirDev :)</li>
        </ul>
        <ul>
            <li><a href="#">Shopify Global</a> </li>
            <li><a href="#">Shopify Canada</a> </li>
            <li><a href="#">Shopify USA</a> </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer
