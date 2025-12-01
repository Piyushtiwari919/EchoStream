export const validateData = (name, email, password) => {
  let isNameValid;
  if (name !== undefined) {
    isNameValid = /^[a-zA-Z][a-zA-Z0-9_]{1,15}$/.test(name);
  }
  else{
    isNameValid = true;
  }
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );
  if (!isNameValid) return "Please enter a valid name";
  if (!isEmailValid) return "Please enter a valid email";
  if (!isPasswordValid) return "Please enter a valid password";
  return null;
};
