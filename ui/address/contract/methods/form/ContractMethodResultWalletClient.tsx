import { Box, Alert } from '@chakra-ui/react';
import React from 'react';

import type { FormSubmitResultWalletClient } from '../types';

interface Props {
  data: FormSubmitResultWalletClient['data'];
  onSettle: () => void;
}

const ContractMethodResultWalletClient = ({ data, onSettle }: Props) => {

  return <ContractMethodResultWalletClientDumb data={ data } onSettle={ onSettle } txInfo={ undefined }/>;
};

export interface PropsDumb {
  data: FormSubmitResultWalletClient['data'];
  onSettle: () => void;
  txInfo: undefined;
}

export const ContractMethodResultWalletClientDumb = ({ data, onSettle }: PropsDumb) => {

  React.useEffect(() => {
    onSettle();
  });

  if (!data) {
    return null;
  }

  const isErrorResult = 'message' in data;

  const content = (() => {
    if (isErrorResult) {
      return (
        <Alert status="error">
          { data.message }
        </Alert>
      );
    }
  })();

  return (
    <Box
      fontSize="sm"
      mt={ 3 }
      alignItems="center"
      whiteSpace="pre-wrap"
      wordBreak="break-all"
      color={ undefined }
    >
      { content }
    </Box>
  );
};

export default React.memo(ContractMethodResultWalletClient);
