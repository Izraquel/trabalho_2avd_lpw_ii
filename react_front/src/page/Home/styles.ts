import styled from "styled-components";

export const Form = styled.form`
  font-family: "Poppins", sans-serif;
  width: 100%;
  max-width: 40%;
  margin: 30px auto 0;
  padding: 20px;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  font-family: "Poppins", sans-serif;

  table td {
    padding-bottom: 10px;
    margin-left: 115px;
  }

  table tr {
    padding-bottom: 10px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 25px;
  }
  table th {
    padding-top: 25px;
  }
  button {
    background: #e35faa;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
  }

  table button {
    background: #e35faa;
    border: 0;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 5px;
  }
`;
