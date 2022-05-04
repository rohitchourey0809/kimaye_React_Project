// import { Alert } from '@chakra-ui/react';
import { useState } from 'react';

export const Signup = () => {
  const [formdata, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handlechange = e => {
    //*const id = e.target.id;
    //*const value = e.target.value;
    //?destructuiring input data
    const { id, value } = e.target;

    setFormData({
      ...formdata,
      [id]: value,
    });

    console.log(e.target.id);

    // setFormData({
    //     ...formdata,
    //     [e.target.id] : e.target.value
    // })
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formdata);

    const payload = {
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      email: formdata.email,
      password: formdata.password,
      status: formdata.status,
    };

    fetch('http://localhost:8080/userdata', {
      method: 'POST',
      //
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    alert("SignupSuccessesful")
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handlechange}
        // value={formdata.firstname}
        id="firstname"
        type="text"
        placeholder="Enter firstname"
      />

      <br />
      <input
        onChange={handlechange}
        // value={formdata.lastname}

        id="lastname"
        type="lastname"
        placeholder="Enter lastname"
      />

      <br />
      <input
        onChange={handlechange}
        // value={formdata.lastname}
        id="email"
        type="text"
        placeholder="Enter email"
      />

      <br />

      <input
        onChange={handlechange}
        id="password"
        type="password"
        placeholder="password"
      />

      <br />

      <br />
      <input onChange={handlechange} type="submit" value="submit" />
    </form>
  );
};
