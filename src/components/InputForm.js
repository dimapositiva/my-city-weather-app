import React from 'react';
import {
  Button,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap';
import '../style/input-form.css';

const InputForm = (props) =>
  <div className="weather-app">
    <Form onSubmit={ props.fetchDataSubmit }>
      <FormGroup validationState="success">
        <div className="input-form-wrapper">
          <div className="input-form">
            <FormControl
              type="text"
              name="location"
              id="location-form"
              placeholder={"Enter name of your city"}
              autoComplete="on"
              value={ props.location }
              onChange={ props.changeLocationSubmit }
            />
            </div>
            <div className="submit">
            <Button
              id="submit-btn"
              type="submit"
              disabled={ props.disabled }
              active>
              <span className = "button-text">
                Get weather
              </span>
            </Button>
          </div>
        </div>
      </FormGroup>
    </Form>
  </div>

export default InputForm;
