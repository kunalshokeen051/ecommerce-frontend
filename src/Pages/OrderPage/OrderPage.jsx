import React, { useContext } from 'react';
import './OrderPage.scss';
import { Context } from '../../utils/Context';
import { useFormik } from 'formik'

const Login = () => {

  const { product } = useContext(Context);
  console.log(product);

  const formik = useFormik({
    initialValues: {
      email: '',
      fname: '',
      lname: '',
      address: '',
      phone: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className='orderPage'>
        <div className="left">
          <h1 className='heading'>Order Page</h1>
          <div className="left-inner-container">
            <form className='order-form' onSubmit={formik.handleSubmit}>
              <label htmlFor="fname">First Name:</label>
              <input
                id="fname"
                name="fname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fname}
                />
              <label htmlFor="lname">Last Name:</label>
              <input
                id="lname"
                name="lname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lname}
              />
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label htmlFor="address">Delivery Address:</label>
              <input
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              <label htmlFor="phone">Mobile Number:</label>
              <input
                id="phone"
                name="phone"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="right-inner-container">
            <h2>Your Order Summary is:</h2>

            <button>CheckOut</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login