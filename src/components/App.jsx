import { Formik, Form } from 'formik';
import { Input, SubmitButton } from './App.styled';
import { getInfo } from 'api/getInfo';
import { useState } from 'react';
import Card from './Card/Card';

const values = {
  numPatent: '',
};

export const App = () => {
  const [credentils, setCredentils] = useState(null);

  const handleSubmit = async ({ numPatent }, { resetForm }) => {
    console.log(numPatent);
    const info = await getInfo(numPatent);

    setCredentils(info);

    resetForm();
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Formik initialValues={values} onSubmit={handleSubmit}>
          <Form>
            <Input type="text" name="numPatent" />
            <SubmitButton type="submit">Registration</SubmitButton>
          </Form>
        </Formik>
      </div>
      {credentils && <Card credentials={credentils} />}
    </>
  );
};
