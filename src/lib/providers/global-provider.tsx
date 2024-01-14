"use client";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren, useState } from "react";
import {
  Hydrate,
  dehydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const getClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { refetchOnMount: false, refetchOnWindowFocus: false },
    },
  });

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(getClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydrate(queryClient)}>
        <SessionProvider>
          {children}
          <ProgressBar
            height="4px"
            color="#06b6d4"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};
