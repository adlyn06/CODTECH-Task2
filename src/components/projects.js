import calculatorImg from '../assets/calculator.png';
import weatherImg from '../assets/weather.png';
import bookskyImg from '../assets/booksky.png';

export default function Projects(){
    return <section className="flex flex-col py-24t px-5 justify-center bg-secondary  text-white" id='projects'>
        <div className="py-10 w-full">
            <div className='flex flex-col px-10 py-2'>
               <h1 className='text-3xl pt-2  border-b-4 border-[#3c3cc9] mb-5 w-[120px] font-bold mt-10'>Projects</h1>
               <p>Explore my showcased projects below to see my skiils and accomplishments!</p>
            </div>
        </div>

         <div className='md:w-full '>   
            <div className='flex  md:flex-row px-10 gap-10 py-5 mb-24'>
                <div className='relative' >
                    <img className='md:h-[200px] md:w-[400px] h-[150px] w-[1250px] 'src={calculatorImg}/> 
                  <div className=' absolute left-0 right-0 bottom-0 top-0 bg-blue-900 bg-h-[200px] opacity-0 duration-500 hover:opacity-100'>
                    <p className='text-center py-5'>A Calculator website built with HTML, CSS, and JavaScript.</p>
                   <a href="https://adlyn06.github.io/calculator-project/" className='text-white md:ml-16 font-bold btn-project1 p-2'>Click Hear! <br/></a>
                  </div>
                </div>

                <div className='relative'>    
                   <img className='md:h-[200px] md:w-[400px] h-[150px] w-[1250px]' src={weatherImg}/>
                   <div className=' absolute left-0 right-0 bottom-0 top-0 bg-blue-900 bg-h-[200px] opacity-0 duration-500 hover:opacity-100'>
                    <p className='text-center py-5'>A Weather website developed with ReactJS and TailwindCSS.</p>
                        <a href="https://adlyn06.github.io/weather-app/" className='text-white md:ml-16 font-bold btn-project1 p-2'>Click Here!<br/></a>
                 
                   </div>
                </div>
                 <div className='relative'>
                     <img className='md:h-[200px] md:w-[400px] h-[150px] w-[1250px]' src= {bookskyImg}/>
                     <div className=' absolute left-0 right-0 bottom-0 top-0 bg-blue-900 bg-h-[200px] opacity-0 duration-500 hover:opacity-100'>
                        <p className='text-center py-3'>A JavaScript project which allows to add, view, and delete books from cart.</p>
                        <a href="https://adlyn06.github.io/Booksky-project/" className='text-white md:ml-16 font-bold btn-project1 mt-10 p-2 '>Click Here! <br/></a>
                         
                     </div>
                 </div>
                
             </div>
         </div>
    
    </section>
}