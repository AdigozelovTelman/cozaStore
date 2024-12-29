import axios from 'axios';
import styles from './Signupform.module.scss'
import { useFormik } from 'formik';
import React from 'react'
import Layout from '../../../../components/layout/Layout';

const Signupform = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            number: '',
        },
        onSubmit: values => {
            axios.post('http://localhost:5000/formik', values)
            .then(res=>{
                formik.resetForm();
            })
        },
    });


  return (
    <Layout>
    <div className={styles.container}>
        <h2>Formik</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />

            <label htmlFor="surname">Surname</label>
            <input
                id="surname"
                name="surname"
                type="surname"
                onChange={formik.handleChange}
                value={formik.values.surname}
            />
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="number">Contact</label>
            <input
                id="number"
                name="text"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.text}
            />

            <button type="submit">Submit</button>
        </form>
    </div>
</Layout>
  )
}

export default Signupform