import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFormWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #000;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(200, 200, 200, 0.2);
`;

export const FormHeading = styled.h1`
  display: flex;
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
  span {
    margin: auto;
  }
`;

export const StyledInput = styled.input`
  color: white;
  display: block;
  width: 80%;
  height: 20px;
  margin: 30px auto;
  padding: 10px;
  border: 0;
  /* border-bottom: 1px dotted; */
  background: transparent;
  box-shadow: none;
  outline: none;
  transition-property: all;
  transition-duration: 2s;
  transition-timing-function: ease-in;

  &:focus {
    border-bottom: 1px solid #7d6b91;
  }
`;

export const StyledButton = styled.button`
  display: block;
  background-color: #7d6b91;
  color: #fff;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 50px;
  cursor: pointer;
  box-sizing: border-box;
  margin: 10px auto;
  /* text-transform: lowercase; */
  letter-spacing: 1px;
`;

export const StyledError = styled.div`
  text-align: center;
  border: 2px solid red;
  color: red;
  font-weight: 800;
  margin: 40px auto;
  width: 80%;
`;

// export const FormContainer = styled.div`
//   /* border: 2px solid red; */
//   color: white;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// export const StyledForm = styled.form`
//   height: 75vh;
//   margin: 80px auto;
//   border: 2px solid red;
// `

// export const Heading = styled.h1`
//   font-size: 2rem;
//   color: white;
//   padding-left: 100px;
//   margin-bottom: 10px;
//   border: 2px solid green;
// `

// export const FormInput = styled.input`
//   border: none;
//   display: block;
//   margin: 20px auto;
//   background: none;
//   box-shadow: none;
//   outline: none;
//   border-bottom: 1px solid white;
//   /* margin: 8px 20px; */
//   width: 60%;
//   height: 30px;
// `

// export const FormButton = styled.button`
//   margin: 10px;
// `
