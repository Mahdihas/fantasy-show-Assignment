import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/UserContext';
import { BsUpload } from "react-icons/bs";
import Button from '../Button/Button';




const Register = () => {
  const {createUser, updateUserProfile}=useContext(AuthContext)


  
  const { register, handleSubmit, formState: { errors } } = useForm();


  const [signUpError, setSignUPError] = useState('')
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    const image = data.image[0];

    console.log(data);
    setSignUPError('');
     
    const formData = new FormData()
    formData.append('image', image)
    console.log(formData);

  
 const url="https://api.imgbb.com/1/upload?key=75db54791513826eb71372a0758663c9"


    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imageData => { 
        console.log(imageData.data.url);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully.')
            const userInfo = {
              displayName: data.name,
              photoURL: imageData.data.display_url
            }
            updateUserProfile(userInfo)
                .then(() => {  })
            .catch(err => console.log(err));
          
            navigate('/')
        })
        .catch(error => {
            console.log(error)
            setSignUPError(error.message)
        });

      })

   
}


  return (
    <div className="hero h-full  " style={{ backgroundImage: `url("https://th.bing.com/th/id/R.64772012938512627f18f875ccafabfc?rik=dZlmxYUMZgAm8w&pid=ImgRaw&r=0")` }} >

    <div className=' my-8 hero-overlay bg-opacity-60  flex justify-center items-center'>
    <div className='w-full my-12  sm:w-96 border border-white rounded-[35px] p-7'>
        <h2 className='text-3xl text-center font-bold  text-white  '>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text  text-white">Name</span></label>
                <input type="text" {...register("name", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </div>
          

          <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text  text-white">Photo</span></label>
              <div className="flex">
              <label for='img' className="label input input-bordered w-full max-w-xs"> <BsUpload className='text-pink-500 font-bold text-2xl'></BsUpload></label>

                
              <input id='img'  type="file" {...register("image", {
                    required: "image is Required"
                  })} className="input hidden py-2 input-bordered w-full max-w-xs" />
                    </div>
                    {errors.image && <p className='text-red-500 '>{errors.image.message}</p>}
                </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text  text-white">Email</span></label>
                <input type="email" {...register("email", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="form-control w-full my-2 max-w-xs">
                <label className="label"> <span className="label-text  text-white">Password</span></label>
                <input type="password" {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be 6 characters long" },
                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                })} className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
            <div className="flex w-full justify-center text-center">            <Button>Sign Up</Button></div>
          </form>
          <div className="my-4">{signUpError && <p className='text-yellow-600'>{signUpError}</p>}</div>

        <p className=' text-white'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
        <div className="divider">OR</div>
        <button className='btn btn-outline hover:bg-secondary  w-full text-white'>CONTINUE WITH GOOGLE</button>
      </div>
      <Toaster></Toaster>

      </div>
      </div>
  )
}

export default Register