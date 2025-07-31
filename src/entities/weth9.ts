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
  [11155420]: new Token(11155420, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),

  [42161]: new Token(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
  [421611]: new Token(421611, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),
  [421614]: new Token(421614, '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73', 18, 'WETH', 'Wrapped Ether'),

  [8453]: new Token(8453, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),

  [56]: new Token(56, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  [137]: new Token(137, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC'),
  [43114]: new Token(43114, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX'),

  [157]: new Token(157, '0x41c3F37587EBcD46C0F85eF43E38BcfE1E70Ab56', 18, 'WBONE', 'Wrapped Bone'),
  [109]: new Token(109, '0xC76F4c819D820369Fb2d7C1531aB3Bb18e6fE8d8', 18, 'WBONE', 'Wrapped Bone'),

  // New networks - adding actual addresses from constants.ts
  [97]: new Token(97, '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', 18, 'WBNB', 'Wrapped BNB'), // BNB Testnet
  [84532]: new Token(84532, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'), // Base Sepolia
  [80002]: new Token(80002, '0x0000000000000000000000000000000000000000', 18, 'WMATIC', 'Wrapped MATIC'), // Polygon Amoy - placeholder
  [534351]: new Token(534351, '0x0000000000000000000000000000000000000000', 18, 'WETH', 'Wrapped Ether'), // Scroll Sepolia - placeholder
  [59141]: new Token(59141, '0x0000000000000000000000000000000000000000', 18, 'WETH', 'Wrapped Ether'), // Linea Sepolia - placeholder
  [44787]: new Token(44787, '0x0000000000000000000000000000000000000000', 18, 'WCELO', 'Wrapped CELO'), // Celo Alfajores - placeholder
  [10200]: new Token(10200, '0x0000000000000000000000000000000000000000', 18, 'WXDAI', 'Wrapped XDAI'), // Gnosis Chiado - placeholder
  [5003]: new Token(5003, '0x0000000000000000000000000000000000000000', 18, 'WMNT', 'Wrapped MNT'), // Mantle Testnet - placeholder
  [168587773]: new Token(168587773, '0x0000000000000000000000000000000000000000', 18, 'WETH', 'Wrapped Ether'), // Blast Sepolia - placeholder
  [43113]: new Token(43113, '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18, 'WAVAX', 'Wrapped AVAX'), // Avalanche Fuji
  [534352]: new Token(534352, '0x0000000000000000000000000000000000000000', 18, 'WETH', 'Wrapped Ether'), // Scroll - placeholder
  [59144]: new Token(59144, '0x0000000000000000000000000000000000000000', 18, 'WETH', 'Wrapped Ether'), // Linea - placeholder
  [100]: new Token(100, '0x0000000000000000000000000000000000000000', 18, 'WXDAI', 'Wrapped XDAI'), // Gnosis - placeholder
  [5000]: new Token(5000, '0x0000000000000000000000000000000000000000', 18, 'WMNT', 'Wrapped MNT') // Mantle - placeholder
}
