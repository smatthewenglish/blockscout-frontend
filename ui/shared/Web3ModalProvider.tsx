import React from 'react';

import config from 'configs/app';

const feature = config.features.blockchainInteraction;

const init = () => {
  try {
    if (!feature.isEnabled) {
      return;
    }
  } catch (error) {}
};

init();

interface Props {
  children: React.ReactNode;
}

const DefaultProvider = ({ children }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { children }
    </>
  );
};

const Web3ModalProvider = ({ children }: Props) => {

  return (
    <DefaultProvider>
      { children }
    </DefaultProvider>
  );
};

const Provider = feature.isEnabled ? Web3ModalProvider : DefaultProvider;

export default Provider;
