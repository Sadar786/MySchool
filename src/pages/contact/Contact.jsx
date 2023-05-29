import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div>
		<section id="home">
			<h2>Contact Us</h2>
		</section>

		<section class="location">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13507.087802730677!2d74.17990734523224!3d32.1834237809329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f299447208cf1%3A0xb9c1465f8604648c!2sGujranwala%20City%2C%20Gujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1682755835407!5m2!1sen!2s"
				width="600"
				height="450"
				style={{ border: '0' }}
				allowfullscreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</section>
		<section class="contact-us">
			<div class="row">
				<div class="contact-col">
					<h3>Address:</h3>
					<div>
						
						<ul>
							<li><h5>XYZ Road ,ABC Building</h5></li>
							<li><p>City, Country</p></li>
						</ul>
					</div>
					<h3>Phone:</h3>
					<div>
						
						<ul>
							<li><h5>+92 3204532765</h5></li>
							<li><p>Monday to Sunday, 10AM to 6PM</p></li>
						</ul>
					</div>
					<h3>Email:</h3>
					<div>
					
						<ul>
							<li><h5>skdpfonn@lkjll.com</h5></li>
							<li><p>Email us for any query</p></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	
	
		<footer class="about-footer">
			<p>&copy; 2023 Skill Station. All rights reserved.</p>
		</footer>
    </div>
  )
}

export default Contact
