import React from "react";
import Color from "color";
import styled from "styled-components";
import colors from "./data.json";

const Box = styled.div`
  background: ${props => props.color};
  width: 125px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #525252;
  border-radius: 4px;
`;

const Name = styled.span`
  font-size: 28px;
  color: ${({ color }) =>
    Color(color).contrast(Color("#000")) > 6.5 ? "#000" : "#fff"};
`;

const Item = styled.li`
  list-style: none;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 20px;
`;

const Main = styled.div`
  width: 960px;
  max-width: 80%;
  margin: 50px auto;
`;

function App() {
  return (
    <Main>
      <List>
        {colors.map(color => (
          <Item key={color.name}>
            <Box className="animated bounceIn " color={color.value}>
              <Name color={color.value}>{color.name}</Name>
            </Box>
          </Item>
        ))}
      </List>
    </Main>
  );
}

export default App;
