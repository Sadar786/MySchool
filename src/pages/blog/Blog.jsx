import React from 'react'
import './blog.css'
import cetifi from '../../assets/certificate.jpg'

function Blog() {
  return (
    <div>
		<section id="home">
			<h2>Certificate</h2>
		</section>
		<section className="blog-contant">
			<div className="blog-row">
				<div className="blog-left">
					<img src={cetifi} alt="" />
					<h1>Our certificate and Online Program</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
						repellat eius esse placeat labore eligendi, ducimus quas quasi
						consequatur harum excepturi accusantium deserunt quibusdam,
						explicabo in nemo culpa! Delectus, illum.
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
						impedit dolor ipsam ipsa maxime ipsum aspernatur asperiores, eum
						illum hic ut? Praesentium molestiae eos ullam mollitia autem
						deserunt ex accusantium. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Voluptatibus rerum libero nesciunt. Aliquam
						accusamus officia sapiente nemo, magnam voluptatum ratione,
						inventore ullam, in earum quidem pariatur nesciunt eligendi
						recusandae deleniti!
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						repellat ex aliquid labore, cumque culpa eveniet maiores tenetur
						soluta, sit sequi perspiciatis, blanditiis error aut animi! Maiores
						illo consequuntur accusantium. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Deleniti eum saepe beatae neque
						facilis quidem, ex blanditiis aut atque provident aliquam pariatur
						dolore officiis non quisquam sunt recusandae maiores voluptatibus?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
						eveniet quam quisquam odio perferendis ducimus asperiores saepe?
						Molestiae labore perspiciatis laboriosam at iste, dignissimos,
						cumque aperiam similique ut voluptatibus ab.
					</p>

					<div className="comment-box">
						<h2>Leave a comment</h2>
						<form className="comment-form">
							<input type="text" placeholder="Enter Name" />
							<input type="email" placeholder="Enter Email" />
							<textarea rows="10" placeholder="Enter Comment"></textarea>
							<button type="submit" className="explore-btn">POST COMMENT</button>
						</form>
					</div>
				</div>
				<div className="blog-right">
					<h2>Certificate Issued</h2>
					<div>
						<span>Business Analytics</span>
						<span>22</span>
					</div>
					<div>
						<span>Data Science</span>
						<span>35</span>
					</div>
					<div>
						<span>Computer Science</span>
						<span>27</span>
					</div>
					<div>
						<span>Commerce</span>
						<span>17</span>
					</div>
					<div>
						<span>Journalism</span>
						<span>29 </span>
					</div>
				</div>
			</div>
		</section>
		
		<footer className="about-footer">
			<p>&copy; 2023 Skill Station. All rights reserved.</p>
		</footer>
    </div>
  )
}

export default Blog
