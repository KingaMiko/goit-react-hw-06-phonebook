import { useState } from 'react';

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return [values, handleChange, resetForm];
};
