import React from 'react';
const Home = () => {
  return (
    <>
      <div>
        <div id="header" class="home">
      <div id="coverme">
  
      <div class="container">
        <div class="header-content">
          <br/><br/><br/>
          <h1>I'm <span class="typed"></span></h1>
          <h2>Resumes are boring. See My Portfolio.</h2>
          <p>Learner, Leader, & Decision-maker</p>
  
        
          <div id="services">
            <div class="container">
        
                <div class="services-carousel owl-theme">
        
                  <div class="services-block">
        
                    <i class="ion-ios-browsers-outline"></i>
                    <span>Web Dev</span>
                    <p class="separator">I have 3 years of Experience in Web development, with proficiency 
                      in HTML, CSS, JS, ReactJS, NodeJS, and MongoDB.</p>
                  </div>
        
                  <div class="services-block">
        
                    <i class="ion-ios-lightbulb-outline"></i>
                    <span>Consulting</span>
                    <p class="separator">My interests in consulting are strongly supported by
                      my leadership qualities and effective communication skills</p>
                  </div>
        
                   <div class="services-block">
        
                    <i class="ion-social-android-outline"></i>
                    <span>Academics</span>
                    <p class="separator">Coursework at IIT Kharagpur involve diverse projects displayed in 'Academics'.</p>
                  </div>
        
                  <div class="services-block">
        
                    <i class="ion-ios-analytics-outline"></i>
                    <span>Social Media</span>
                    <p class="separator">I'm active on all the social media handles especially LinkedIn,
                       where I have 2000+ professional following.</p>
                  </div>
                  <div class="services-block">
        
                    <i class="ion-ios-color-wand-outline"></i>
                    <span>Dramatics</span>
                    <p class="separator">I have been part of several streetplays and stageplays.</p>
                  </div>
        
                  <div class="services-block">
        
                    <i class="ion-ios-camera-outline"></i>
                    <span>Hobbies</span>
                    <p class="separator">There is a plethora of hobbies I love to do, such as singing, swimming and flute.</p>
                  </div>
        
                </div>
        
            </div>
        
          </div>
        </div>
      </div>
    </div>
    </div>
    <div id="about" class="paddsection">
      <div class="container">
        <div class="row justify-content-between">
  
          <div class="col-lg-4 ">
            <div class="div-img-bg">
              <div class="about-img">
                <img src="images/me.JPG" class="img-responsive" alt="me" />
              </div>
            </div>
          </div>
  
          <div class="col-lg-7">
            <div class="about-descr">
              <p class="p-heading">About Me</p>
              <p class="separator">Hello there! My name is Utkarsh Gupta. I am a 4th year under-graduate student from the department of Civil Engineering at Indian Institute of Technology, Kharagpur. I am from Bhadrak, Odisha. 
              I am proficient in web development and consulting.</p>
              <p>Watch my introduction video below.</p>
              <iframe width="360" height="202.5" src="https://www.youtube.com/embed/A1slKzd3IHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
  
            </div>
  
          </div>
        </div>
      </div>
    </div>
    <div id="skillrel" class="skills paddsections">
   
      <div class="section-title1 text-center">
      <h2>Skills and Expertise</h2>
      </div>
      {/* <div className='container'> */}
      <h4>Web development skills</h4>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JAVASCRIPT</li>
    <li>REACT.JS</li>
    <li>NODE.JS</li>
    <li>EXPRESS.JS</li>
    <li>MONGODB</li>
    <li>MYSQL</li>
    <li>PYTHON</li>
  </ul>
  <h4>Consulting skills</h4>

  <ul>
    <li>GUESSTIMATES</li>
    <li>CASE INTERVIEWS</li>
    <li>PROBLEM SOLVING</li>
  </ul>
  <h4>Soft-skills</h4>

  <ul>
    <li>LEADERSHIP</li>
    <li>COMMUNICATION SKILLS</li>
    <li>LEADERSHIP</li>
    <li>DECISON-MAKING</li>
    <li>MARKETING</li>
    <li>TIME MANAGEMENT</li>

  </ul>
</div>
    <div id="journal" class="text-left paddsections">
  
        <div class="section-title text-center">
          <h2>My Involvements at IIT Kharagpur</h2>
        </div>
  
      <div class="container">
        <div class="journal-block">
          <div class="row">
  
            <div class="col-lg-4 col-md-6">
              <div class="journal-info">
  
                <a href="blog-single.html"><img src="images/pravah1.jpg" class="img-responsive" alt="img"/></a>
  
                <div class="journal-txt">
  
                  <h4><a href="blog-single.html">TECHNOLOGY DRAMATICS SOCIETY, PRAVAH</a></h4>
                  <p class="separator">I am a Theatre Practitoner and a director at Pravah. The team bagged bronze position in Streetplay competition at Springfest 2023.</p>
  
                </div>
  
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6">
              <div class="journal-info">
  
                <a href="blog-single.html"><img src="images/megalith1.jpg" class="img-responsive" alt="img"/></a>
  
                <div class="journal-txt">
  
                  <h4><a href="#blog-single.html">MEGALITH, CIVIL ENGINEERING FEST</a></h4>
                  <p class="separator">I started as Web Team Member at India's largest departmental fest. On 2022, I became a Web Team Head and currently I am serving as Executive Advisor of the society.</p>
  
                </div>
  
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6">
              <div class="journal-info">
  
                <a href="blog-single.html"><img src="images/share.jpg" class="img-responsive" alt="img"/></a>
  
                <div class="journal-txt">
  
                  <h4><a href="blog-single.html">ShARE(SHARING ANALYSIS FOR REGIONAL ECONOMICS)</a></h4>
                  <p class="separator">I played a significant role as Junior Member at ShARE, IIT Kharagpur. I participated in International batch programme of global ShARE case study competition.</p>
  
                </div>
  
              </div>
            </div>
  
          </div>
        </div>
      </div>
  
    </div>
    </div>
    </>

  )
}

export default Home
