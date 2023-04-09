import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data, loading, error } = useGenres();

  if(loading) return <Spinner />
  
  if(error) return null
  
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={genre.image_background}/>
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
