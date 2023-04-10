import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
        <InputLeftElement children={<BsSearch/>}/>
      <Input
        borderRadius={20}
        placeholder="searching games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;