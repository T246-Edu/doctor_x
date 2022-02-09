import React from "react";
import {
  InfoWindow,
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import Airtable from "airtable";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  name: Yup.string().required("Name is required"),
  message: Yup.string().required("message field is required").min(3),
});

/*Contact Page Content*/
const Contact = () => (
  <main>
    <h1>Contact Us</h1>
    <div id="contact-formStyle">
      <ContactForm />
    </div>
    <div id="contact-info">
      <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=4.exp"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div id="map-container" />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  </main>
);

/*Contact Form*/
const ContactForm = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={(values) => {
            var base = new Airtable({ apiKey: "keygrEQRcmrlb0BxL" }).base(
              "app1jovcRVEbGT6mc"
            );
            base("Contact").create(
              [
                {
                  fields: {
                    Name: values.name,
                    Mail: values.email,
                    Message: values.message,
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
                    <h1 className="mt-5">Contact Form</h1>
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
                      type="text"
                      name="name"
                      placeholder="Enter Name"
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
                    <label htmlFor="message" className="mt-3">
                      message
                    </label>
                    <Field
                      type="text"
                      name="message"
                      placeholder="Enter message"
                      className={`mt-2 form-control
                          ${
                            touched.message && errors.message
                              ? "is-invalid"
                              : ""
                          }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="message"
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
                  Thank for your connecting with us. Here's what we got from
                  you!
                </div>
                <div id="listMessages">
                  <ul className="list-group" id="listData">
                    <li className="list-group-item">Email: {values.email}</li>
                    <li className="list-group-item">name: {values.name}</li>
                    <li className="list-group-item">
                      message: {values.message}
                    </li>
                  </ul>
                </div>
              </div>
            )
          }
        </Formik>
      </div>
    </div>
  </div>
);

/*Google Map*/
const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 53.82048, lng: -1.25199 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 53.82048, lng: -1.25199 }}>
          <InfoWindow>
            <address>
              <span>Docotor X.</span>
              <br />
              Common Rd,
              <br />
              Tadcaster
              <br />
              LS24 9UN,
              <br />
              UK
              <br />
            </address>
          </InfoWindow>
        </Marker>
      )}
    </GoogleMap>
  ))
);

export default Contact;
