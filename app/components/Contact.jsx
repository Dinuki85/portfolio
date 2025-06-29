import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h2 className='text-5xl text-center font-Ovo'>Connect With Me</h2>

      <form className='max-w-2xl mx-auto'>
        <div className='grid gap-6 mt-10 mb-8 grid-cols-auto'>
          <input type='text' placeholder='Enter your Name' required 
          className='flex-1 p-3 border outline-none-[0.5px] border-gray-400 rounded-md bg-white'/>
          <input type='email' placeholder='Enter your Email' required
          
          className='flex-1 p-3 border outline-none-[0.5px] border-gray-400 rounded-md bg-white'/>

          <div>
            <textarea rows='6' placeholder='Enter your Message' required
            className='w-full p-4 border outline-none-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>

            <button type = 'submit' className=''> Submit now</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
