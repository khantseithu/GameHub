import { Grid, GridItem, Show } from '@chakra-ui/react';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={'nav'} bg={'gold'}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} bg={'red'}>
          aside
        </GridItem>
      </Show>
      <GridItem area={'main'} bg={'dodgerblue'}>
        main
      </GridItem>
    </Grid>
  );
};

export default App;
