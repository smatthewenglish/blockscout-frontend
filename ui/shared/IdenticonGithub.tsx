import { useColorModeValue, useToken, Box, chakra, Skeleton } from '@chakra-ui/react';
import React from 'react';

// Stubbed out Identicon component
const Identicon: React.FC<{ bg: string; string: string; size: number }> = ({ size }) => (
  <Skeleton width={ size } height={ size }/>
);

interface Props {
  className?: string;
  size: number;
  seed: string;
}

const IdenticonGithub = ({ size, seed }: Props) => {
  const bgColor = useToken('colors', useColorModeValue('gray.100', 'white'));

  return (
    <Box
      boxSize={ `${ size }px` }
      borderRadius="full"
      overflow="hidden"
    >
      <Identicon
        bg={ bgColor }
        string={ seed }
        size={ size }
      />
    </Box>
  );
};

export default React.memo(chakra(IdenticonGithub));
