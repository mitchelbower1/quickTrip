import styled from "@emotion/styled/macro";
import breakpoints from "../../vars/breakpoints";

const ItemListStyles = styled.div`
  display: flex;
  left: 61vw;
  justify-content: space-between;
  align-items: right;
  flex-direction: column;
  width: 30vw;
  overflow-y: auto;
  margin-right: 10vw;
  max-height: 400px;
  scrollbar-gutter: stable;
  border-radius: 10px;
  padding: 10px;
  position: static;
  background-color: #0e1a2c;
  /* filter: drop-shadow(-2px -2px 11px #6d6969); */

  .items {
    background-color: #b7c0ce;
    display: flex;
    justify-content: center;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    padding: 7px;
    margin-bottom: 12px;
    margin-left: 5px;
    margin-right: 12px;
    filter: drop-shadow(5px 2px 3px #000000);
  }

  .p {
    font-weight: bold;
  }

  .close:active {
    background-color: #3b4a61;
  }

  button:hover {
    background-color: #6b87b1;
    transition: background-color 0.4s;
  }

  .close {
    font-weight: bolder;
    font-size: 30px;
    background: none;
    border: none;
    padding: 8px;
    position: static;
  }

  @media ${breakpoints.mobile} {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 70vw;
    height: 16vh;
    overflow-y: scroll;
    max-height: 170px;
    scrollbar-gutter: stable;
    position: static;
    padding: 8 px;
    margin: 18px;

    .items {
      background-color: #b7c0ce;
      display: flex;
      justify-content: center;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 5px;
      padding: 7px;
      margin-bottom: 12px;
      margin-left: 5px;
      margin-right: 4px;
    }

    .p {
      font-weight: bold;
      font-size: larger;
    }

    .close:active {
      background-color: #3b4a61;
    }

    .close {
      font-weight: bolder;
      font-size: 30px;
      background: none;
      border: none;
      padding: 8px;
      position: static;
    }
  }
`;

export default ItemListStyles;
