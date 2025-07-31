import { ChainId, SUPPORTED_CHAINS, SupportedChainsType, NativeCurrencyName } from './chains'

describe('chains', () => {
  describe('ChainId enum', () => {
    it('should have all expected chain IDs', () => {
      expect(ChainId.PUPPYNET).toBe(157)
      expect(ChainId.SHIBARIUM).toBe(109)
      expect(ChainId.MAINNET).toBe(1)
      expect(ChainId.BNB).toBe(56)
      expect(ChainId.ARBITRUM_ONE).toBe(42161)
      expect(ChainId.OPTIMISM).toBe(10)
      expect(ChainId.BASE).toBe(8453)
      expect(ChainId.POLYGON).toBe(137)
      expect(ChainId.SCROLL).toBe(534352)
      expect(ChainId.LINEA).toBe(59144)
      expect(ChainId.CELO).toBe(42220)
      expect(ChainId.GNOSIS).toBe(100)
      expect(ChainId.MANTLE).toBe(5000)
      expect(ChainId.BLAST).toBe(81457)
      expect(ChainId.AVALANCHE).toBe(43114)
    })

    it('should have all expected testnet chain IDs', () => {
      expect(ChainId.SEPOLIA).toBe(11155111)
      expect(ChainId.BNB_TESTNET).toBe(97)
      expect(ChainId.ARBITRUM_SEPOLIA).toBe(421614)
      expect(ChainId.OPTIMISM_SEPOLIA).toBe(11155420)
      expect(ChainId.BASE_SEPOLIA).toBe(84532)
      expect(ChainId.POLYGON_AMOY).toBe(80002)
      expect(ChainId.SCROLL_SEPOLIA).toBe(534351)
      expect(ChainId.LINEA_SEPOLIA).toBe(59141)
      expect(ChainId.CELO_ALFAJORES).toBe(44787)
      expect(ChainId.GNOSIS_CHIADO).toBe(10200)
      expect(ChainId.MANTLE_TESTNET).toBe(5003)
      expect(ChainId.BLAST_SEPOLIA).toBe(168587773)
      expect(ChainId.AVALANCHE_FUJI).toBe(43113)
    })
  })

  describe('SUPPORTED_CHAINS array', () => {
    it('should include all mainnet chains', () => {
      expect(SUPPORTED_CHAINS).toContain(ChainId.SHIBARIUM)
      expect(SUPPORTED_CHAINS).toContain(ChainId.MAINNET)
      expect(SUPPORTED_CHAINS).toContain(ChainId.BNB)
      expect(SUPPORTED_CHAINS).toContain(ChainId.ARBITRUM_ONE)
      expect(SUPPORTED_CHAINS).toContain(ChainId.OPTIMISM)
      expect(SUPPORTED_CHAINS).toContain(ChainId.BASE)
      expect(SUPPORTED_CHAINS).toContain(ChainId.POLYGON)
      expect(SUPPORTED_CHAINS).toContain(ChainId.SCROLL)
      expect(SUPPORTED_CHAINS).toContain(ChainId.LINEA)
      expect(SUPPORTED_CHAINS).toContain(ChainId.CELO)
      expect(SUPPORTED_CHAINS).toContain(ChainId.GNOSIS)
      expect(SUPPORTED_CHAINS).toContain(ChainId.MANTLE)
      expect(SUPPORTED_CHAINS).toContain(ChainId.BLAST)
      expect(SUPPORTED_CHAINS).toContain(ChainId.AVALANCHE)
    })

    it('should include all testnet chains', () => {
      expect(SUPPORTED_CHAINS).toContain(ChainId.PUPPYNET)
      expect(SUPPORTED_CHAINS).toContain(ChainId.SEPOLIA)
      expect(SUPPORTED_CHAINS).toContain(ChainId.BNB_TESTNET)
      expect(SUPPORTED_CHAINS).toContain(ChainId.ARBITRUM_SEPOLIA)
      expect(SUPPORTED_CHAINS).toContain(ChainId.OPTIMISM_SEPOLIA)
      expect(SUPPORTED_CHAINS).toContain(ChainId.BASE_SEPOLIA)
      expect(SUPPORTED_CHAINS).toContain(ChainId.POLYGON_AMOY)
      expect(SUPPORTED_CHAINS).toContain(ChainId.SCROLL_SEPOLIA)
      expect(SUPPORTED_CHAINS).toContain(ChainId.LINEA_SEPOLIA)
      expect(SUPPORTED_CHAINS).toContain(ChainId.CELO_ALFAJORES)
      expect(SUPPORTED_CHAINS).toContain(ChainId.GNOSIS_CHIADO)
      expect(SUPPORTED_CHAINS).toContain(ChainId.MANTLE_TESTNET)
      expect(SUPPORTED_CHAINS).toContain(ChainId.BLAST_SEPOLIA)
      expect(SUPPORTED_CHAINS).toContain(ChainId.AVALANCHE_FUJI)
    })

    it('should not have duplicate chain IDs', () => {
      const uniqueChainIds = new Set(SUPPORTED_CHAINS)
      expect(uniqueChainIds.size).toBe(SUPPORTED_CHAINS.length)
    })

    it('should have the correct total number of supported chains', () => {
      // Count: 14 testnets + 14 mainnets + 4 legacy = 32 total
      expect(SUPPORTED_CHAINS.length).toBe(36)
    })
  })

  describe('SupportedChainsType', () => {
    it('should be a union type of all supported chain IDs', () => {
      // This test ensures the type is correctly inferred
      const testChain: SupportedChainsType = ChainId.MAINNET
      expect(testChain).toBe(ChainId.MAINNET)
    })
  })

  describe('NativeCurrencyName enum', () => {
    it('should have all expected currency names', () => {
      expect(NativeCurrencyName.ETHER).toBe('ETH')
      expect(NativeCurrencyName.MATIC).toBe('MATIC')
      expect(NativeCurrencyName.CELO).toBe('CELO')
      expect(NativeCurrencyName.GNOSIS).toBe('XDAI')
      expect(NativeCurrencyName.MOONBEAM).toBe('GLMR')
      expect(NativeCurrencyName.BNB).toBe('BNB')
      expect(NativeCurrencyName.AVAX).toBe('AVAX')
      expect(NativeCurrencyName.ROOTSTOCK).toBe('RBTC')
    })
  })
})
