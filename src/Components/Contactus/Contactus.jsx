import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const MainContact = styled.div`
  background-image: url("../public/contact.jpg");
  background-size: cover;
  background-repeat: repeat;
  overflow: hidden;
  position: relative;
  right: 2vw;
  height: 50vw;

  @media (max-width: 786px) {
    height: 200%;
  }
`;

const ContactContainer = styled.div`
  position: relative;
  top: 5vw;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 786px) {
    flex-direction: column;
  }

  padding: 20px;
  backdrop-filter: blur(5px);
  background-color: rgba(223, 207, 207, 0.073);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  z-index: 100;
  max-width: 600px;
  position: relative;
  top: 5vw;
  height: 100%;

  @media (max-width: 786px) {
    margin: auto 30px;
    right: 30vw;
  }
`;

const ContactHeading = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 20px;
  margin-top:10px;
`;

const ContactFormContainer = styled.div`
  display: flex;
  width: 500px;
  position: relative;
  margin: auto 20px;
  top: -5vw;

  @media (max-width: 786px) {
    max-width: 70vw;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #f7ebeb;
`;

const Input = styled.input`
  background-color: #0057b31b;
  width: 100%;
  color: white;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  background-color: #0057b31b;
  width: 100%;
  color: white;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  background-color: #007bff88;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #007bff;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;

const Contactus = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_2qw5deg",
        "template_878w2oz",
        e.target,
        "gq3SVSvr9e37H5xqX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          toast.error("Error sending message. Please try again.");
        }
      );
  };

  return (
    <MainContact>
      {/* <img className="absolute z-[-1]" src="/contact.jpg" alt="" /> */}
      <ContactContainer>
        <ContactFormContainer>
          <ContactForm onSubmit={handleSubmit}>
            <ContactHeading>Contact Us</ContactHeading>

            <FormGroup>
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject:</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Subject"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message:</Label>
              <Textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
              ></Textarea>
            </FormGroup>
            <FormGroup>
              <Button type="submit" disabled={loading}>
                {loading ? <LoadingSpinner /> : "Send Message"}
              </Button>
            </FormGroup>
          </ContactForm>
        </ContactFormContainer>
        <ImageContainer>
          <img
            src={require("../../Assets/Images/background/contac1.png")}
            alt="Contact"
          />
        </ImageContainer>
      </ContactContainer>
      <ToastContainer />
    </MainContact>
  );
};

export default Contactus;
