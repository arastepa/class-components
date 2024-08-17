const Uncontrolled = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
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
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
          required
        />
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="accept">
        <label htmlFor="terms">Accept Terms and Conditions</label>
        <input type="checkbox" id="terms" name="terms" required />
      </div>

      <div>
        <label htmlFor="picture">Upload Picture</label>
        <input
          type="file"
          id="picture"
          name="picture"
          accept=".png, .jpeg, .jpg"
          required
        />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="">Select country</option>
          <option value="Armenia">Armenia</option>
          <option value="Georgie">Georgia</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Uncontrolled;
