import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";


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
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field name="name" id="name" className="form-control"/>
                    </div>

                    <Button type='submit' >Save Changes</Button>
                    <Link className="btn btn-secondary" to = "/genres">Cancel</Link>
                
                
                </Form>
            </Formik>

    
        </>
    )
}