import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Airtable from "airtable";
import "bootstrap/dist/css/bootstrap.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  name: Yup.string()
    .min(3, "name must be 3 characters at minimum")
    .required("name field is required"),
  HowCan: Yup.string()
    .min(100, "You have to prove how can you help us")
    .required("You ought to answer"),
  whyYou: Yup.string()
    .min(100, "You have to prove why to choose you")
    .required("You ought to answer to this question"),
  Phone: Yup.string()
    .min(10, "You should enter a valid phone number")
    .required("you should enter a valid number"),
  Adress: Yup.string()
    .min(10, "You have to enter exact address")
    .required("You have to answer to this question"),
  Age: Yup.number()
    .required("you should enter a valid age")
    .min(10, "should be miimum 10 years old"),
  SchoolOrUniversity: Yup.string().required("You ought to answer"),
  LinkResume: Yup.string().required("You ought to answer to this question"),
});

function Recruitment() {
  return (
    <main>
      <div className="userSubmition">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                  checked: "",
                  HowCan: "",
                  whyYou: "",
                  Phone: "",
                  Adress: "",
                  Age: "",
                  SchoolOrUniversity: "",
                  LinkResume: "",
                  AnyRelateedExperience: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  var base = new Airtable({ apiKey: "keygrEQRcmrlb0BxL" }).base(
                    "app1jovcRVEbGT6mc"
                  );
                  base("Recruitement").create(
                    [
                      {
                        fields: {
                          Name: values.name,
                          Email: values.email,
                          Committee: values.checked,
                          HowCan: values.HowCan,
                          whyYou: values.whyYou,
                          Phone: values.Phone,
                          Adress: values.Adress,
                          Age: values.Age,
                          SchoolOrUniversity: values.SchoolOrUniversity,
                          LinkResume: values.LinkResume,
                          AnyRelateedExperience: values.AnyRelateedExperience,
                        },
                      },
                    ],
                    function (err, records) {
                      if (err) {
                        console.error(err);
                        return;
                      }
                      records.forEach(function (record) {});
                    }
                  );
                }}
              >
                {({ touched, errors, isSubmitting, values }) =>
                  !isSubmitting ? (
                    <div>
                      <div className="row mb-5">
                        <div className="col-lg-12 text-center">
                          <h1 className="mt-5">recruitment Form</h1>
                        </div>
                      </div>
                      <Form>
                        <div className="form-group">
                          <label htmlFor="email" className="mt-3">
                            Email
                          </label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            autocomplete="on"
                            className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component="div"
                            name="email"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name" className="mt-3">
                            Name
                          </label>
                          <Field
                            type="name"
                            name="name"
                            placeholder="Enter name"
                            className={`mt-2 form-control
                          ${touched.name && errors.name ? "is-invalid" : ""}`}
                          />
                          <ErrorMessage
                            component="div"
                            name="name"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="Phone" className="mt-3">
                            Phone
                          </label>
                          <Field
                            type="phone-number"
                            name="Phone"
                            placeholder="Enter your phone number"
                            className={`mt-2 form-control
                          ${touched.Phone && errors.Phone ? "is-invalid" : ""}`}
                          />
                          <ErrorMessage
                            component="div"
                            name="Phone"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="Age" className="mt-3">
                            Age
                          </label>
                          <Field
                            type="Age"
                            name="Age"
                            placeholder="Enter your Age"
                            className={`mt-2 form-control
                          ${touched.Age && errors.Age ? "is-invalid" : ""}`}
                          />
                          <ErrorMessage
                            component="div"
                            name="Age"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="Adress" className="mt-3">
                            Address
                          </label>
                          <Field
                            type="Adress"
                            name="Adress"
                            placeholder="Enter your Address"
                            className={`mt-2 form-control
                          ${
                            touched.Adress && errors.Adress ? "is-invalid" : ""
                          }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="Adress"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="SchoolOrUniversity" className="mt-3">
                            School Or University
                          </label>
                          <Field
                            type="SchoolOrUniversity"
                            name="SchoolOrUniversity"
                            placeholder="Enter your School Or University"
                            className={`mt-2 form-control
                          ${
                            touched.SchoolOrUniversity &&
                            errors.SchoolOrUniversity
                              ? "is-invalid"
                              : ""
                          }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="SchoolOrUniversity"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="LinkResume" className="mt-3">
                            Resume link
                          </label>
                          <Field
                            type="LinkResume"
                            name="LinkResume"
                            placeholder="Enter the link for the resume"
                            className={`mt-2 form-control
                          ${
                            touched.LinkResume && errors.LinkResume
                              ? "is-invalid"
                              : ""
                          }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="LinkResume"
                            className="invalid-feedback"
                          />
                        </div>

                        <div id="CheckBoxs">
                          <h4>Committee:</h4>
                          <div role="group" aria-labelledby="checkbox-group">
                            <label>
                              <Field
                                type="radio"
                                name="checked"
                                value="Human resources"
                              />
                              Human resources
                            </label>
                            <label>
                              <Field
                                type="radio"
                                name="checked"
                                value="Researcher"
                              />
                              Researcher
                            </label>
                            <label>
                              <Field
                                type="radio"
                                name="checked"
                                value="Technical support"
                              />
                              Technical support
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="HowCan" className="mt-3">
                            help us?
                          </label>
                          <Field
                            type="HowCan"
                            name="HowCan"
                            placeholder="How can you help us?"
                            className={`mt-2 form-control
                          ${
                            touched.HowCan && errors.HowCan ? "is-invalid" : ""
                          }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="HowCan"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="whyYou" className="mt-3">
                            choose you?
                          </label>
                          <Field
                            type="whyYou"
                            name="whyYou"
                            placeholder="why to choose you?"
                            className={`mt-2 form-control
                          ${
                            touched.whyYou && errors.whyYou ? "is-invalid" : ""
                          }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="whyYou"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="AnyRelateedExperience"
                            className="mt-3"
                          >
                            additional questions?
                          </label>
                          <Field
                            type="AnyRelateedExperience"
                            name="AnyRelateedExperience"
                            placeholder="List here any additional questions"
                            className={`mt-2 form-control
                          ${
                            touched.AnyRelateedExperience &&
                            errors.AnyRelateedExperience
                              ? "is-invalid"
                              : ""
                          }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="AnyRelateedExperience"
                            className="invalid-feedback"
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mt-4"
                        >
                          Submit
                        </button>
                      </Form>
                    </div>
                  ) : (
                    <div>
                      <h1 className="p-3 mt-5">Form Submitted</h1>

                      <div className="alert alert-success mt-3">
                        Thank for your interest to join us. we will contact you
                        soon ! Here is what we got from you:
                      </div>
                      <ul className="list-group" id="listGroup">
                        <li className="list-group-item">
                          Email: {values.email}
                        </li>
                        <li className="list-group-item">Name: {values.name}</li>
                        <li className="list-group-item">
                          Phone: {values.Phone}
                        </li>
                        <li className="list-group-item">Age: {values.Age}</li>
                        <li className="list-group-item">
                          Address: {values.Adress}
                        </li>
                        <li className="list-group-item">
                          school or university: {values.SchoolOrUniversity}
                        </li>
                        <li className="list-group-item">
                          Resume Link: {values.LinkResume}
                        </li>
                        <li className="list-group-item">
                          <p>Committee: {values.checked}</p>
                        </li>
                        <li className="list-group-item">
                          <p>How can you help us? : {values.HowCan}</p>
                        </li>
                        <li className="list-group-item">
                          <p>why should we choose you? : {values.whyYou}</p>
                        </li>
                        <li className="list-group-item">
                          <p>
                            any related experience? :
                            {values.AnyRelateedExperience}
                          </p>
                        </li>
                      </ul>
                    </div>
                  )
                }
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Recruitment;
