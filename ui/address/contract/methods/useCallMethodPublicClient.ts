import React from 'react';

import type { FormSubmitResult, MethodCallStrategy, SmartContractMethod } from './types';

interface Params {
  item: SmartContractMethod;
  args: Array<unknown>;
  addressHash: string;
  strategy: Exclude<MethodCallStrategy, 'write'>;
}

export default function useCallMethodPublicClient(): (params: Params) => Promise<FormSubmitResult> {

  return React.useCallback(async({ item }) => {
    if (!('name' in item)) {
      throw new Error('Unknown contract method');
    }

    return {
      source: 'public_client' as const,
      data: undefined,
    };

  }, []);
}
