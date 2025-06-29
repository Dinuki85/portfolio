import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "373f624d-f8fc-4601-aef3-338c9d0f9d46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h2 className='text-5xl text-center font-Ovo'>Connect With Me</h2>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid gap-6 mt-10 mb-8 grid-cols-auto'>
          <input type='text' placeholder='Enter your Name' required 
          className='flex-1 p-3 border outline-none-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
          <input type='email' placeholder='Enter your Email' required
          className='flex-1 p-3 border outline-none-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>

          <div>
            <textarea rows='6' placeholder='Enter your Message' required
            className='w-full p-4 border outline-none-[0.5px] border-gray-400 rounded-md bg-white mb-6 ' name='message'></textarea>

            <button type = 'submit' className='flex items-center justify-between gap-2 px-8 py-3 mx-auto text-white duration-500 bg-black rounded-full w-max/80 hover:bg-black'> Submit now</button>
         
         <p className='mt-4 '>{result}</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
