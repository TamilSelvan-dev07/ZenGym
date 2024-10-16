import React from 'react'
import { useInView} from "react-intersection-observer";
import './Styles/Content.css'
import { FaCheck } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import image1 from '../assets/program-1.jpg'
import image2 from '../assets/program-2.jpg'
import image3 from '../assets/program-3.jpg'
import image4 from '../assets/about-1.jpg'
import image5 from '../assets/about-2.jpg'
import image6 from '../assets/about-3.jpg'

const Content = () => {

  const [ref1,inView1] = useInView({triggerOnce:true});
  const [ref2,inView2] = useInView({triggerOnce:true});
  const [ref3,inView3] = useInView({triggerOnce:true});

  return (

    <>
    <div className='content-container' id='Program'>
          <h1>Our Programs</h1>
        <div className="cards">

            <div className="card">
                 <img src={image1} />
                 <h2>Strength Training</h2>
                 <p>Build muscle, improve strength, and boost your endurance with our guided strength workouts</p>
            </div>
            <div className="card">
                 <img src={image2} />
                 <h2>Personal Training</h2>
                 <p>Get one-on-one training sessions customized to meet your specific fitness goals.</p>
            </div>
            <div className="card">
                 <img src={image3} />
                 <h2>Nutrition Coaching</h2>
                 <p>Get personalized nutrition plans to complement your workouts and enhance results</p>
            </div>
        </div>


        <div className="about-container" id='About'>
             <h1>About Us</h1>

             <div className={`Container-1 ${inView1?'show' : ''}`} ref={ref1}>

                <div className="text1-container">
                    <h2>Your Fitness Journey Starts Here</h2>
                    <p> Achieve your fitness goals with the support of experienced trainers and equipment.Whether you’re just starting out or aiming to push your limits, we’ve got the right programs for you.</p>
                </div>

                <div className='image'>
                    <img src={image4} alt="Gym image" />
                </div>

             </div>

              <div className={`Container-1 reverse ${inView2?'show' : ''}`} ref={ref2}>

                <div className='image'>
                    <img src={image5} alt="Gym image" />
                </div>

                <div className="text1-container">
                    <h2>A Community That Inspires</h2>
                    <p>Join a community of like-minded individuals where everyone motivates and supports each other. With group classes and fitness challenges, you'll never feel alone in your journey.</p>
                </div>

             </div>


             <div className={`Container-1 ${inView3?'show' : ''}`} ref={ref3}>

                <div className="text1-container">
                    <h2>Personalized Training Programs</h2>
                    <p>Receive one-on-one coaching tailored to your unique fitness goals. Whether it's weight loss, muscle gain, or general fitness, our trainers design a plan just for you.</p>
                </div>

                <div className='image'>
                    <img src={image6} alt="Gym image" />
                </div>

             </div>




        </div>
    </div>




     <div className="subscription" id='Plan'>

        <h1>Our Plans</h1>

        <div className="plans">

            <div className="plan-card">

              <h2>Basic plan</h2>
              <p>$29 / Month</p>
              
              <ul className='list'>
                <li><FaCheck className='tick'/>Access to gym equipment</li>
                <li><FaCheck className='tick'/>1 personal training session</li>
                <li><FaCheck className='tick'/>Locker room access</li>
              </ul>

              <button>Subscribe</button>


               
            </div>

            <div className="plan-card">

              <h2>Standard plan</h2>
              <p>$49 / Month</p>
              
              <ul className='list'>
                <li><FaCheck className='tick'/>All Basic Plan benefits</li>
                <li><FaCheck className='tick'/>5 personal training sessions</li>
                <li><FaCheck className='tick'/>Access to group classes</li>
              </ul>

              <button>Subscribe</button>


               
            </div>

            <div className="plan-card">

             <h2>Premium plan</h2>
             <p>$69 / Month</p>

            <ul className='list'>
            <li><FaCheck className='tick'/>All Standard Plan benefits</li>
            <li><FaCheck className='tick'/>Unlimited personal training</li>
            <li><FaCheck className='tick'/>Free merchandise</li>
            </ul>

           <button>Subscribe</button>


 
            </div>
        </div>



     </div>



     <div className="about1-container" id='Contact'>

      <h1>Contact US</h1>

      <div className="flex-col">

      <div className="left-side">
        <h2>Get in Touch with Us</h2>

        <p>Have any questions or need assistance? Reach out to us, and we'll get back to you shortly!</p>

        <ul className="contact-info">

          <li><MdPhoneAndroid className='icon-1'/><a href="tel:8248199233"> +91 8248199233</a></li>
          <li><SiMinutemailer className='icon-1'/> <a href="mailto:tamilselvancg@gmail.com">tamilselvancg@gmail.com</a></li>
          <li><IoLocationSharp className='icon-1'/> Zoro st , chennai - 603202</li>
        </ul>
        
      </div>

      <div className="right-side">

      <form>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      </div>
      </div>
     </div>
</>
  )
}

export default Content