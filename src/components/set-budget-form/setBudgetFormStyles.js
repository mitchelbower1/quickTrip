import styled from "@emotion/styled/macro";
import breakpoints from "../../vars/breakpoints";

const SetBudgetFormstyles = styled.div`
  display: flex;
  /* filter: drop-shadow(-0.5px -1px 5px #6d6969); */
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* flex-wrap: wrap; */
  border-radius: 10px;
  /* margin-left: 5vw; */
  padding: 10px;
  width: 32vw;
  height: 420px;
  background-color: #22334d;
  position: relative;

  .form {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    position: static;
  }

  .reset-button {
    padding: 4px;
    border-radius: 55px;
    font-size: small;
    color: whitesmoke;
    background-color: #22334d;
    margin-top: 10px;
    margin-right: 10px;
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 0;
  }

  label {
    padding: 10px;
    display: flex;
    justify-content: left;
    font-weight: bold;
  }

  input {
    margin-bottom: 10px;
    padding: 2px;
    font-size: 16px;
    font-weight: bold;
    width: 270px;
    height: 45px;
    font-family: "kiona";
    border-radius: 5px;
    border: none;
  }

  .spent-input {
    margin-bottom: 20px;
    margin-top: 10px;
  }

  #span {
    font-size: 70px;
    color: whitesmoke;
    font-weight: bolder;
    margin-top: -5px;
    margin-bottom: 60px;
  }

  /* #p {
    font-size: 70px;
    color: whitesmoke;
    font-weight: bolder;
    margin-top: -5px;
    margin-bottom: 60px;
  } */

  .positive {
    color: #32cd32;
  }

  .negative {
    color: #ff000d;
  }

  .spent-input {
    margin-bottom: 20px;
  }

  .set-button {
    margin-bottom: 70px;
    padding: 10px;
    border-radius: 25px;
    margin-top: 10px;
    width: 120px;
    border: none;

    &:active {
      background-color: #375075;
    }
  }

  .update-button {
    margin-top: 30px;
    width: 220px;
    padding: 10px;
    border-radius: 25px;
    border: none;
    font-size: 22px;
    font-weight: 200px;

    &:active {
      background-color: #7c7c7c;
    }
  }

  /*********************************************************/
  @media ${breakpoints.mobile} {
    /*********************************************************/
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    width: 88vw;
    height: 55vh;
    position: relative;
    margin-right: 16px;
    margin-left: 19px;
    background-color: #22334d;
    filter: drop-shadow(-2px -2px 11px #6d6969);

    .form {
      display: flex;
      justify-content: left;
      align-items: center;
      flex-direction: column;
      margin-bottom: 20px;
    }

    .reset-button {
      padding: 4px;
      border-radius: 25px;
      font-size: large;
      color: whitesmoke;
      background-color: #22334d;
      margin-top: 10px;
      margin-right: 10px;
      position: fixed;
      right: 0;
      top: 0;
      padding: 3px;
    }

    #p {
      font-size: 60px;
      font-weight: bolder;
      color: whitesmoke;
      margin-bottom: 65px;
    }

    label {
      padding: 10px;
      display: flex;
      justify-content: left;
      font-weight: bold;
    }

    input {
      border: none;
      border-bottom: 3px solid whitesmoke;
      padding: 5px 10px;
      outline: none;
      margin-bottom: 10px;
      font-size: 19px;
      font-weight: bold;
      width: 70vw;
      height: 45px;
      background-color: #22334d;
      font-family: "kiona";
      color: whitesmoke;
      text-decoration: whitesmoke;
    }

    #set-input {
      border: none;
      border-bottom: 3px solid whitesmoke;
      padding: 5px 10px;
      outline: none;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bolder;
      width: 70vw;
      height: 45px;
      background-color: #22334d;
      font-family: "kiona";
      color: whitesmoke;
      text-decoration: whitesmoke;
    }

    .spent-input {
      border: none;
      border-bottom: 3px solid whitesmoke;
      padding: 5px 10px;
      outline: none;
      margin-bottom: 20px;
    }

    .set-button {
      margin-bottom: 70px;
      padding: 10px;
      border-radius: 50px;
      margin-top: 10px;
      width: 120px;
      border: none;
    }

    .update-button {
      margin-top: 30px;
      width: 220px;
      padding: 10px;
      border-radius: 60px;
      border: none;
      font-size: 22px;
      font-weight: 200px;
    }
  }
  @media (max-width: 615px) and (max-height: 740px) {
    .form {
      display: flex;
      justify-content: left;
      align-items: center;
      flex-direction: column;
    }

    p {
      font-size: 50px;
      margin-bottom: -40px;
      margin-top: 10px;
    }
    .reset-button {
      padding: 1px;
      border-radius: 25px;
      font-size: 4px;
      background-color: #22334d;
      margin-top: 10px;
      margin-right: 5px;
      position: fixed;
      right: 0;
      top: 0;
    }

    #set-input {
      border: none;
      border-bottom: 3px solid whitesmoke;
      padding: 3px 3px;
      outline: none;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bolder;
      width: 35vw;
      height: 35px;
      background-color: #22334d;
      font-family: "kiona";
      color: whitesmoke;
      text-decoration: whitesmoke;
    }

    .set-button {
      margin-bottom: 50px;
      padding: 6px;
      border-radius: 50px;
      margin-top: 10px;
      width: 120px;
      border: none;
    }

    input {
      border: none;
      border-bottom: 3px solid whitesmoke;
      padding: 5px 10px;
      outline: none;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
      width: 80vw;
      height: 45px;
      background-color: #22334d;
      font-family: "kiona";
      color: whitesmoke;
      text-decoration: whitesmoke;
    }
  }
`;

export default SetBudgetFormstyles;
