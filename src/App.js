import React from "react";
import colors from "./data.json";
import { Box, Main, List, Item, Name } from "./elements";

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
