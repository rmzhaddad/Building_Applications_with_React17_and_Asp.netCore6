import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from 'yup';
import TextField from "../Forms/TextField";

export default function CreateGenre(){

    return(
        <>
            <h3>Create Genre</h3>

            <Formik initialValues={{
                name:''

            }}

            onSubmit={value=>{
                //when the form is submitted
                console.log(value);
            }}
            validationSchema={
                Yup.object({
                    name:Yup.string().required('this field is required')
                })
            }
            >
                <Form>
                    <TextField field="name" displayName="Name"/>

                    <Button type='submit' >Save Changes</Button>
                    <Link className="btn btn-secondary" to = "/genres">Cancel</Link>
                
                
                </Form>
            </Formik>

    
        </>
    )
}