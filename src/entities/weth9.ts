import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [1]: new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
  [3]: new Token(3, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
  [4]: new Token(4, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
  [5]: new Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
  [42]: new Token(42, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),

  [10]: new Token(10, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  [69]: new Token(69, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),

  [42161]: new Token(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
  [421611]: new Token(421611, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),

  [8453]: new Token(8453, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),

  [56]: new Token(56, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  [137]: new Token(137, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC'),
  [43114]: new Token(43114, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX'),

  [157]: new Token(157, '0x41c3F37587EBcD46C0F85eF43E38BcfE1E70Ab56', 18, 'WBONE', 'Wrapped Bone'),
  [109]: new Token(109, '0xC76F4c819D820369Fb2d7C1531aB3Bb18e6fE8d8', 18, 'WBONE', 'Wrapped Bone'),

  [421614]: new Token(421614, '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73', 18, 'WETH', 'Wrapped Ether'), // Arbitrum Sepolia
  [11155420]: new Token(11155420, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'), // Optimism Sepolia
  [11155111]: new Token(11155111, '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14', 18, 'WETH', 'Wrapped Ether'), // Ethereum Sepolia
  [43113]: new Token(43113, '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18, 'WAVAX', 'Wrapped AVAX'), // Avalanche Fuji
  [84532]: new Token(84532, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'), // Base Sepolia
  [168587773]: new Token(168587773, '0x4200000000000000000000000000000000000023', 18, 'WETH', 'Wrapped Ether'), // Blast Sepolia
  [97]: new Token(97, '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', 18, 'WBNB', 'Wrapped BNB'), // BNB Testnet
  [44787]: new Token(44787, '0x99604d0e2EfE7ABFb58BdE565b5330Bb46Ab3Dca', 18, 'WCELO', 'Wrapped Celo'), // Celo Alfajores
  [10200]: new Token(10200, '0x18c8a7ec7897177E4529065a7E7B0878358B3BfF', 18, 'WXDAI', 'Wrapped xDai'), // Gnosis Chiado
  [59141]: new Token(59141, '0x06565ed324Ee9fb4DB0FF80B7eDbE4Cb007555a3', 18, 'WETH', 'Wrapped Ether'), // Linea Sepolia
  [5003]: new Token(5003, '0x19f5557E23e9914A18239990f6C70D68FDF0deD5', 18, 'WMNT', 'Wrapped Mantle'), // Mantle Testnet
  [80002]: new Token(80002, '0x360ad4f9a9A8EFe9A8DCB5f461c4Cc1047E1Dcf9', 18, 'WMATIC', 'Wrapped Matic'), // Polygon Amoy
  [534351]: new Token(534351, '0x5300000000000000000000000000000000000004', 18, 'WETH', 'Wrapped Ether') // Scroll Sepolia
}
