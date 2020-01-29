import Color from "color";
import styled from "styled-components";

export const Box = styled.div`
  background: ${props => props.color};
  width: 125px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #525252;
  border-radius: 4px;
`;

export const Name = styled.span`
  font-size: 28px;
  color: ${({ color }) =>
    Color(color).contrast(Color("#000")) > 6.5 ? "#000" : "#fff"};
`;

export const Item = styled.li`
  list-style: none;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 20px;
`;

export const Main = styled.div`
  width: 960px;
  max-width: 80%;
  margin: 50px auto;
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${({ color }) =>
    Color(color).contrast(Color("#000")) > 6.5 ? "#000" : "#fff"};
  appearance: none;
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;
