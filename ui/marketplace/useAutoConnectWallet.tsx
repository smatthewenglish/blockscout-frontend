import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import removeQueryParam from 'lib/router/removeQueryParam';
import updateQueryParam from 'lib/router/updateQueryParam';

export default function useAutoConnectWallet() {
  const router = useRouter();
  const { isWalletConnected, isModalOpen, connect } = {
    isWalletConnected: false,
    isModalOpen: false,
    connect: undefined,
  };
  const isConnectionStarted = useRef(false);

  useEffect(() => {
    if (router.query.action !== 'connect') {
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    if (!isWalletConnected && !isModalOpen) {
      if (!isConnectionStarted.current) {
        timer = setTimeout(() => {
          if (!isWalletConnected) {
            isConnectionStarted.current = true;
          }
        }, 500);
      } else {
        isConnectionStarted.current = false;
        updateQueryParam(router, 'action', 'tooltip');
      }
    } else if (isWalletConnected) {
      isConnectionStarted.current = false;
      removeQueryParam(router, 'action');
    }

    return () => clearTimeout(timer);
  }, [ isWalletConnected, isModalOpen, connect, router ]);
}
