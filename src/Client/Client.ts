import { Chain, PublicClient, Transport, createPublicClient, http } from "viem";


export const create = (chain: Chain, rpc?: string): PublicClient<Transport, Chain> => {
  const client = createPublicClient({
    chain: chain,
    transport: http(rpc ?? ""),
  });

  return client;
};