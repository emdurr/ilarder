import React from 'react';
import ericImg from '../images/eric.png';
import lonnieImg from '../images/lonnie.jpeg';
import joImg from '../images/jo.jpg';
import githubImg from '../images/GithubImg.png';
import linkedinImg from '../images/linkedin.png';
import mailImg from '../images/mail.png';

const styles = {
	eric: { width: 'auto', height: '200px', borderRadius: '50%', backgroundImage: 'url(' + ericImg + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' },
  lonnie: { width: 'auto', height: '200px', borderRadius: '50%', backgroundImage: 'url(' + lonnieImg + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' },
  jo: { width: 'auto', height: '200px', borderRadius: '50%', backgroundImage: 'url(' + joImg + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' },
	github: { height: '40px', width: '40px', padding: '5px', backgroundSize: 'cover'},

}

const About = () => (

<div className="row">
  <div className='center container'>
    <div style={{backgroundColor: "#E8E8E8"}}>
       <h3>Basket Case the App</h3>
       <p style={{textAlign: "left"}}>
			 		 This app is amazing you will love having it.
           more and more words here to see if it works
       		 Proin eget tortor risus. Nulla porttitor accumsan tincidunt.
           Curabitur arcu erat, accumsan id imperdiet et,
           porttitor at sem. Curabitur non nulla sit
           amet nisl tempus convallis quis ac lectus.
           Vestibulum ante ipsum primis in faucibus
           orci luctus et ultrices posuere cubilia Curae;
           Donec velit neque, auctor sit amet aliquam vel,
           ullamcorper sit amet ligula. Cras ultricies ligula
           sed magna dictum porta. Sed porttitor lectus
           nibh. Vivamus magna justo, lacinia eget
           consectetur sed, convallis at tellus. Quisque
           velit nisi, pretium ut lacinia in, elementum id enim.
           Curabitur aliquet quam id dui posuere blandit.
       </p>
       <br/>
    </div>
  </div>

	<div className='center container'>
    <div>
       <h3>The Code</h3>
       <p style={{textAlign: "left"}}>
       		 Proin eget tortor risus. Nulla porttitor accumsan tincidunt.
           Curabitur arcu erat, accumsan id imperdiet et,
           porttitor at sem. Curabitur non nulla sit
           amet nisl tempus convallis quis ac lectus.
           Vestibulum ante ipsum primis in faucibus
           orci luctus et ultrices posuere cubilia Curae;
           Donec velit neque, auctor sit amet aliquam vel,
           ullamcorper sit amet ligula. Cras ultricies ligula
           sed magna dictum porta. Sed porttitor lectus
           nibh. Vivamus magna justo, lacinia eget
           consectetur sed, convallis at tellus. Quisque
           velit nisi, pretium ut lacinia in, elementum id enim.
           Curabitur aliquet quam id dui posuere blandit.
       </p>
       <br/>
    </div>
  </div>

	<div className='row'>
		<div className='center container'>
			<h3>The Team</h3>

			<div style={{backgroundColor: "#E8E8E8", padding: "40px 0 40px 0"}}>
				<div className="container">
			    <div className='row'>
						<div className='icon-block'>
				    	<div className='center col s12 m4'>
								<img src={ ericImg } style={ styles.eric }/>
								<h5 className="blue-text">Eric Durr</h5>
								<p className="light center black-text">Eric, was born. He currently resides in a tinyhouse that he fondly calls frontrunner. He is so generous that he shares it with many an odd fellow and can be found squished up against a window working on his laptop while offering his shoulder to a random drooling, sleeping roommate.  The cramped quarters have paid off because he is top of the class and able to daydream without falling behind. Not that he does.</p>
			          <a href='https://github.com/emdurr' target="github"><img src={ githubImg } style={ styles.github }></img></a>
			          <a href='https://www.linkedin.com/in/ericdurr' target="linkedin"><img src={ linkedinImg } style={ styles.github }></img></a>
			          <a href='mailto:emdurr@gmail.com'><img src={ mailImg } style={ styles.github }></img></a>
							</div>
						</div>
						<div className='icon-block'>
				    	<div className='center col s12 m4'>
								<img src={ lonnieImg } style={ styles.lonnie }/>
								<h5 className="blue-text">Lonnie Horlacher</h5>
								<p className="light center black-text">Lonnie, a native of Nevada, suddenly realized it was really hot there and didn't care for sweating.  Suffering from heat stroke he signed up for a programming bootcamp in cooler climates, little did he know that he would be sitting in an artic freezer as he was taught.  Turns out it was a good move though as he is really skilled and killing it in the class. An unexpected skill from the class is he has learned to blow frosty breath rings in the air.</p>
			          <a href='https://github.com/lhorlacher' target="github"><img src={ githubImg } style={ styles.github }></img></a>
			          <a href='https://www.linkedin.com/in/lonnie-horlacher-67107367' target="linkedin"><img src={ linkedinImg } style={ styles.github }></img></a>
			          <a href='mailto:horlacher.lonnie@gmail.com'><img src={ mailImg } style={ styles.github }></img></a>
							</div>
						</div>
						<div className='icon-block'>
				    	<div className='center col s12 m4'>
								<img src={ joImg } style={ styles.jo }/>
								<h5 className="blue-text">Jo Squire</h5>
								<p className="light center black-text">Jo, a born and raised Utahn. Spent many of her earlier years working as a mechanical drafter. After several years away from the workforce spending time raising a family she started her own successfull online business creating and selling high quality leather padfolios and accessories. Realizing there was more out there to learn she was drawn to developing and is currently a student at DevPoint Labs.</p>
			          <a href='https://github.com/josquire' target="github"><img src={ githubImg } style={ styles.github }></img></a>
			          <a href='https://www.linkedin.com/in/joanna-squire-7567aa97' target="linkedin"><img src={ linkedinImg } style={ styles.github }></img></a>
			          <a href='mailto:mjsquire@digis.net'><img src={ mailImg } style={ styles.github }></img></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
export default About;