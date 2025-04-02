import { FaWhatsappSquare } from "react-icons/fa"; 
import { FaGithubSquare } from "react-icons/fa"; 
import { AiFillGoogleSquare } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { SiGithub } from "react-icons/si"; 
import { SiGit } from "react-icons/si";
import { DiMysql } from "react-icons/di"; 
import { DiVisualstudio } from "react-icons/di"; 
import { BsMicrosoftTeams } from "react-icons/bs"; 
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { RiFileWord2Fill } from "react-icons/ri";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi"; 
import { CgFigma } from "react-icons/cg";
import { TbBrandVscode } from "react-icons/tb"; 
import { DiJavascript1 } from "react-icons/di"; 
import { SiTypescript } from "react-icons/si"; 
import { AiFillHtml5 } from "react-icons/ai"; 
import { MdCss } from "react-icons/md"; 
import { SiVite } from "react-icons/si"; 
import { FaReact } from "react-icons/fa"; 
import { BiMenu } from "react-icons/bi"; 
import Profileimg from '../assets/Profile.jpg'
/* import '../js/Menu.js' */
import './DBarra.css'

/* import { Link } from "react-router-dom";
<Link to ="/Contact">Contact</Link>
--Para linkear paginas a otras-- 
*/


export default function DBarra() {  
  return (
    <div className="Container" id="Home">
      <header>
        <a href="#Home">
          <div className="Fullname">
            <h2 className="name">Diego Antonio</h2>
            <h2 className='h1color'>Barragán González</h2>
          </div>
        </a>

        <i className="movilmenu" id='menuicon'><BiMenu size="2.5rem"/></i>

        <nav id="nav" className='nav navactive'>
          <a href="#Home">Home</a>
          <a href="#Education">Education</a>
          <a href="#Services">Services</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </nav>
      </header>
      <body>
          <section className="ContainerHome">
            <div className="About">
              <div className="titulos">
                <h1>Hola, soy</h1>
                <h1 className='h1color'>Diego</h1>
              </div>
              
              <div className="titulos">
                <h1>Yo soy</h1>
                <h1 className="h1texted texted"></h1>
              </div>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit molestias, dolor architecto eaque natus libero at. Porro a omnis architecto sint laborum qui iure, consequuntur quod explicabo laudantium labore voluptatem.
              </p>

              <div className="Social">
                <a title="Linkedin"  target="_blank" rel="noopener" href="https://www.linkedin.com/in/diego-antonio-barragán-gonzález"><AiFillLinkedin className="icon" size="2.5rem"/></a>
                <a title="Email" target="_blank" rel="noopener" href="mailto:d.barraglez@gmail.com"><AiFillGoogleSquare className="icon" size="2.5rem"/></a>
                <a title="GitHub" target="_blank" rel="noopener" href="https://github.com/DagBarra"><FaGithubSquare className="icon" size="2.5rem"/></a>
                <a title="Whatsapp" target="_blank" rel="noopener" href="https://wa.me/+525580371687"><FaWhatsappSquare className="icon" size="2.5rem"/></a>
              </div>
              
              <div className="Bodybuttons">
              <button className="buttonHover">Download CV</button>
                  <button>professional ID</button>
              </div>
            </div>
            <div className="Profile">
              <img src={Profileimg} alt="" />
            </div>

          </section>

          <section className="ContainerEducation" id="Education">
            <h1>Educación</h1>

            <div className="Timeline">

              <div className="Item">
                <div className="Dot"></div>
                  <div className="Date">2000</div>
                    <div className="Content ContentL">
                      <h3>Preparatoria</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit hic deleniti odit, ipsa cum eos nam quod maxime reprehenderit architecto vitae accusantium mollitia placeat non minima deserunt facere assumenda?
                      </p>
                    </div>
              </div>
                
              <div className="Item">
                <div className="Dot"></div>
                  <div className="Date">2000</div>
                    <div className="Content ContentR">
                      <h3>University</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit hic deleniti odit, ipsa cum eos nam quod maxime reprehenderit architecto vitae accusantium mollitia placeat non minima deserunt facere assumenda?
                      </p>
                    </div>
              </div>
                
                <div className="Item">
                  <div className="Dot"></div>
                    <div className="Date">2000</div>
                      <div className="Content ContentL">
                        <h3></h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit hic deleniti odit, ipsa cum eos nam quod maxime reprehenderit architecto vitae accusantium mollitia placeat non minima deserunt facere assumenda?
                        </p>
                      </div>
                </div>
                
                <div className="Item">
                  <div className="Dot"></div>
                    <div className="Date">2000</div>
                      <div className="Content ContentR">
                        <h3>Profesor</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit hic deleniti odit, ipsa cum eos nam quod maxime reprehenderit architecto vitae accusantium mollitia placeat non minima deserunt facere assumenda?
                        </p>
                      </div>
                </div>
                
                <div className="Item">
                  <div className="Dot"></div>
                    <div className="Date">2000</div>
                      <div className="Content ContentL">
                        <h3>Freelance</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit hic deleniti odit, ipsa cum eos nam quod maxime reprehenderit architecto vitae accusantium mollitia placeat non minima deserunt facere assumenda?
                        </p>
                      </div>
                </div>

            </div>

          </section>
          
          <section className="ContainerServices" id="Services">
            <h1>services</h1>

            <div className="ContServ">
              
              <div className="CardServ">
                  <h3>UI Design</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id alias earum quam cumque officia accusamus aspernatur! Maiores accusantium laborum, quo possimus facere fugiat perferendis molestias doloremque cumque earum dolorem?</p>
              </div>

              <div className="CardServ">
                  <h3>Frontend Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id alias earum quam cumque officia accusamus aspernatur! Maiores accusantium laborum, quo possimus facere fugiat perferendis molestias doloremque cumque earum dolorem?</p>
              </div>
              
              <div className="CardServ">
                  <h3>Backend Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id alias earum quam cumque officia accusamus aspernatur! Maiores accusantium laborum, quo possimus facere fugiat perferendis molestias doloremque cumque earum dolorem?</p>
              </div>
              
              <div className="CardServ">
                  <h3>Testing</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id alias earum quam cumque officia accusamus aspernatur! Maiores accusantium laborum, quo possimus facere fugiat perferendis molestias doloremque cumque earum dolorem?</p>
              </div>
              
              <div className="CardServ">
                  <h3>UI Design</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id alias earum quam cumque officia accusamus aspernatur! Maiores accusantium laborum, quo possimus facere fugiat perferendis molestias doloremque cumque earum dolorem?</p>
              </div>

            </div>

          </section>
      
          <section className="ContainerSkills" id="Skills">
            <h1>Skills</h1>

            <h2>In This Portfolio</h2>
            <div className="wrapper_Portfolio">
                <div className="logo_L logo1_Portafolio" title="React Native"><FaReact size="2.5rem"/></div>
                <div className="logo_L logo2_Portafolio" title="React Native"><SiVite size="2.5rem"/></div>
                <div className="logo_L logo3_Portafolio" title="React Native"><MdCss size="2.5rem"/></div>
                <div className="logo_L logo4_Portafolio" title="React Native"><AiFillHtml5 size="2.5rem"/></div>
                <div className="logo_L logo5_Portafolio" title="React Native"><SiTypescript size="2.5rem"/></div>
                <div className="logo_L logo6_Portafolio" title="React Native"><DiJavascript1 size="2.5rem"/></div>
                <div className="logo_L logo7_Portafolio" title="React Native"><TbBrandVscode size="2.5rem"/></div>
                <div className="logo_L logo8_Portafolio" title="React Native"><CgFigma size="2.5rem"/></div>
            </div>

            <h2>Office Programs</h2>
            <div className="wrapper_Office">
                <div className="logo_L logo1_Office" title="Microsoft Word"><RiFileWord2Fill size="2.5rem"/></div>
                <div className="logo_L logo2_Office" title="Microsoft Word"><PiMicrosoftExcelLogoFill size="2.5rem" /></div>
                <div className="logo_L logo3_Office" title="Microsoft Word"><PiMicrosoftPowerpointLogo size="2.5rem" /></div>
                <div className="logo_L logo4_Office" title="Microsoft Word"><BsMicrosoftTeams size="2.5rem"/></div>
            </div>

            <h2>Other Programs</h2>
            <div className="wrapper_Other">
              <div className="logo_R logo1_Other" title="Vs code"><DiVisualstudio size="2.5rem"/></div>
              <div className="logo_R logo2_Other" title="Vs code"><DiMysql /></div>
              <div className="logo_R logo3_Other" title="Vs code"><SiGithub size="2.5rem"/></div>
              <div className="logo_R logo4_Other"><SiGit size="2.5rem"/></div>
            </div>

          </section>
          
          <section className="ContainerContact" id="Contact">

            <div className="titulos">
              <h1>Contact</h1>
              <h1 className='h1color'>Me</h1>
            </div>

            <form action="https://formsubmit.co/d.barraglez@gmail.com " method="POST">

              <div className="input-group">
                <input type="text" name="Name" placeholder="Full Name"/>
                <input type="email" name="Email" placeholder="Email"/>
                <input type="number" name="Number" placeholder="Phone Number"/>
                <input type="text" name="Subjet" placeholder="Subjet"/>
              </div>

              <div className="input-message">
                <textarea className='message' placeholder="Your Message" name="Message" cols={30} rows={9} id=""></textarea>
                <input type="submit" value="Send Message" className="button-contact"/>
              </div>

              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_webhook" value="#Contact"></input>
              
            </form>

          </section>
      
      </body>
      <footer>        
        <div>
          <p> © TCrown | All rights reserved. </p>
        </div>
      </footer>
    </div>
  );
}