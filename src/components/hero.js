import GirlImg from '../assets/animated webdev girl.webp';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Hero(){
           return <section className='flex flex-col md:flex-row px-10 py-32 bg-secondary justify-center'>
             <div  className='w-1/2 flex flex-col '>
                     <h1 className='  text-white text-3xl pt-2 font-hero-font '>Hi, <br/> I'm Adlyn A
                          <p className='text-xl pt-3'>A Front-End Developer Enthusiast</p>
                     </h1>
                
                <div className='flex py-8'>
                    <a className='text-white pr-4 hover:text-blue-900' href="www.linkedin.com/in/adlyn06"><SiLinkedin size={30}/>
                    </a>
                    <a  href="https://github.com/adlyn06/" className='hover:text-blue-900 text-white'><FaGithub size={30}/>
                    </a>
                </div>
               </div>    
                     <img className="md:w-1/3 w-1/3 h-48"src={GirlImg} alt="women having laptop"/>
               
                </section>

               
        
            

    
            
}