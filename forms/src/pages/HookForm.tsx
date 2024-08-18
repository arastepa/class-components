import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import { validationSchema } from '../utils/validate';
import './HookForm.module.css';
import { HookFormData } from '../types/types';
import { useDispatch } from 'react-redux';
import { setFormData } from '../store/FormData/formDataSlice';
import { useNavigate } from 'react-router';

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmit = (data: HookFormData) => {
    if (data.picture) {
      const reader = new FileReader();
      reader.readAsDataURL(data.picture[0]);
      reader.onloadend = () => {
        const base64String = reader.result as string;
        dispatch(setFormData({ ...data, picture: base64String }));
        navigate('/');
      };
    }
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        {errors?.name ? <p>{errors.name.message}</p> : ''}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register('name')}
          name="name"
          placeholder="Name"
        />
      </div>

      <div>
        {errors?.age ? <p>{errors.age.message}</p> : ''}
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register('age')}
          name="age"
          placeholder="Your Age"
        />
      </div>

      <div>
        {errors?.email ? <p>{errors.email.message}</p> : ''}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register('email')}
          id="email"
          name="email"
          placeholder="your email address"
        />
      </div>

      <div>
        {errors?.password ? <p>{errors.password.message}</p> : ''}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register('password')}
          id="password"
          name="password"
          placeholder="type your password"
        />
      </div>

      <div>
        {errors?.confirmPassword ? <p>{errors.confirmPassword.message}</p> : ''}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword')}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
        />
      </div>

      <div>
        {errors?.gender ? <p>{errors.gender.message}</p> : ''}
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register('gender')} name="gender">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        {errors?.accept ? <p>{errors.accept.message}</p> : ''}
        <div className="accept">
          <label htmlFor="terms">Accept Terms and Conditions</label>
          <input
            type="checkbox"
            {...register('accept')}
            id="terms"
            name="accept"
          />
        </div>
      </div>

      <div>
        {errors?.picture ? <p>{errors.picture.message}</p> : ''}
        <label htmlFor="picture">Upload Picture</label>
        <input
          type="file"
          id="picture"
          {...register('picture')}
          name="picture"
          accept=".png, .jpeg, .jpg"
        />
      </div>

      <div>
        {errors?.country ? <p>{errors.country.message}</p> : ''}
        <label htmlFor="country">Country</label>
        <select id="country" {...register('country')} name="country">
          <option value="">Select country</option>
          <option value="Armenia">Armenia</option>
          <option value="Georgie">Georgia</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default HookForm;
