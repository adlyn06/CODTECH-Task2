import resumeImg from '../assets/resume.jpg';

export default function Resume(){
    return <section className='flex flex-col md:flex-row bg-gray-900 px-0' id='resume'>
          
           <div className='py-12 md:py-24 md:w-1/2 flex justify-center md:justify-end '>
               <img className='w-[350px]' src={resumeImg}></img>
            </div>
            <div>
        </div>
        <div className='md:w-1/2 flex justify-center '>
          <div className='flex flex-col justify-center md:pl-8 py-24 text-white'>
             <h1 className='text-4xl  border-b-4 border-[#3c3cc9] mb-5 w-[140px] font-bold'>Resume</h1>
             <p>Click the button view my Resume <a className='btn' href="https://docs.google.com/document/d/1UTI7eSDCR0PpVncAT1jhY10jvMHJA-sS2YocuqfdcI0/edit?usp=sharing">View</a></p>
          </div>
        </div>
    </section>
}