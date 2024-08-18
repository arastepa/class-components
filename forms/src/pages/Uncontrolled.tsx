import { useRef, useState } from 'react';
import { validationSchema } from '../utils/validate';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setFormData } from '../store/FormData/formDataSlice';
import styles from './Uncontrolled.module.css';
import { useNavigate } from 'react-router';

const Uncontrolled = () => {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const psw = useRef<HTMLInputElement>(null);
  const confirmPsw = useRef<HTMLInputElement>(null);
  const gender = useRef<HTMLSelectElement>(null);
  const accept = useRef<HTMLInputElement>(null);
  const picture = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const [error, setError] = useState<string[]>([]);
  const dispatch = useDispatch();
  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = {
      name: name.current?.value || '',
      age: age.current?.value || '',
      email: email.current?.value || '',
      password: psw.current?.value || '',
      confirmPassword: confirmPsw.current?.value || '',
      gender: gender.current?.value || '',
      accept: accept.current?.checked || false,
      picture: picture.current?.files?.[0] || null,
      country: country.current?.value || '',
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      if (formData.picture) {
        console.log('pic:', formData.picture);
        const reader = new FileReader();
        reader.readAsDataURL(formData.picture);
        reader.onloadend = () => {
          const base64String = reader.result as string;
          dispatch(setFormData({ ...formData, picture: base64String })); // Save the base64 string to the Redux store
        };
      }
      setError([]);
      navigate('/');
    } catch (err) {
      console.log(err);
      if (err instanceof Yup.ValidationError) {
        console.log(err.errors);
        setError(err.errors);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.error}>
        {error.map((err) => {
          return <div>{err}</div>;
        })}
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          ref={name}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          ref={age}
          type="number"
          id="age"
          name="age"
          placeholder="Your Age"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          ref={email}
          type="email"
          id="email"
          name="email"
          placeholder="your email address"
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          ref={psw}
          type="password"
          id="password"
          name="password"
          placeholder="type your password"
          required
        />
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          ref={confirmPsw}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
          required
        />
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <select id="gender" ref={gender} name="gender">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="accept">
        <label htmlFor="terms">Accept Terms and Conditions</label>
        <input type="checkbox" ref={accept} id="terms" name="terms" required />
      </div>

      <div>
        <label htmlFor="picture">Upload Picture</label>
        <input
          ref={picture}
          type="file"
          id="picture"
          name="picture"
          accept=".png, .jpeg, .jpg"
          required
        />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <input
          id="country"
          ref={country}
          name="country"
          list="country-options"
          placeholder="Select country"
        />
        <datalist id="country-options">
          <option value="Armenia" />
          <option value="Georgia" />
          <option value="USA" />
        </datalist>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Uncontrolled;
