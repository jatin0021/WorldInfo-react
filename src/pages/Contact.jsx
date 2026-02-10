import React from 'react'


function Contact() {

  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    
  };

  return (
    <>
    <div className='flex justify-center'>
      <h1 className='text-4xl font-bold mt-5'>Contact Us</h1>
    </div>
      <div className='flex justify-center items-center px-4'>
      <form  className='flex flex-col my-10 gap-6 w-full max-w-md' action={handleFormSubmit}>
        <input
          type="text"
          required
          placeholder="enter your name"
          name="username"
          autoComplete="off"
          className='w-full p-2 border border-gray-400 rounded-xl focus:outline-none focus:border-blue-500'
        />
        
        <input
          type="email"
          name="email"
          required
          placeholder="enter your email"
          autoComplete="off"
          className='w-full p-2 border border-gray-400 rounded-xl focus:outline-none focus:border-blue-500'
        />
        <textarea
          rows={10}
          placeholder="enter your message"
          name="message"
          autoComplete="off"
          className='w-full p-2 border border-gray-400 rounded-2xl focus:outline-none focus:border-blue-500'
        />

        <button className='w-full border border-gray-400 p-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition-colors duration-200' type='submit'>send</button>
      </form>
      </div>
    
    </>
  );
}

export default Contact