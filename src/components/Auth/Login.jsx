import React from 'react'

const Login = () => {

  const submitHandler = (e) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    e.preventDefault()

    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>

      <div className='p-20 border-2 border-emerald-600 rounded-xl'>

        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>

          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required
          className='py-3 px-5 text-white placeholder:text-gray-400  border-emerald-600 border-2 bg-transparent outline-none rounded-full text-xl' 
          type="email" 
          placeholder='Enter your email'/>

          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required
          className='mt-3 py-3 px-5 text-white placeholder:text-gray-400  border-emerald-600 border-2 bg-transparent outline-none rounded-full text-xl' 
          type="password" 
          placeholder='Enter password'/>

          <button 
          className='mt-5 py-3 px-5 text-white border-none bg-emerald-600 outline-none rounded-full text-xl'>
          Log in
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login