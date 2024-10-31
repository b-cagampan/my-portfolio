import React, { useState } from 'react'

export default function Footer() {
  const [formData, setFormData] = useState({
    email: '',
    text: ''
  });

  const handleChange = (e) => {
    setFormData(preve => ({...prev, [e.target.name]:e.target.value}));
  }

  return (
    <div className='flex flex-row justify-between w-3/4 my-5 mx-auto p-3'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-3xl'>Benedict R. Cagampan</h1>
          <p className='leading-relaxed text-justify text-sm text-neutral-400'>cagampanbenedict@gmail.com</p>
          <p className='leading-relaxed text-justify text-sm text-neutral-400'>+63 905 433 7621</p>
          <div className='flex my-2 items-center'>
            
            <svg height="25" viewBox="0 0 1792 1792" width="25" xmlns="http://www.w3.org/2000/svg" className='mx-2'>
              <path d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" className='mx-2'>
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </div>
        </div>
        <form>
            <div className='flex flex-col w-80'>
              <h1 className='font-bold text-3xl mb-6'>Contact Me!</h1>
              <label>Email</label>
              <input type='text' className='outline-2 border p-2' name='email' onChange={handleChange}/>

              <label>Text</label>
              <textarea type='text' className='outline-2 border p-3' name='text' onChange={handleChange}></textarea>

              <button className='bg-black text-white my-2 p-2 font-semibold hover:bg-zinc-800'>Submit</button>
            </div>
        </form>
    </div>
  )
}
