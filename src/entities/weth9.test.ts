import { WETH9 } from './weth9'
import { ChainId } from '../chains'

describe('WETH9', () => {
  describe('existing networks', () => {
    it('should have WETH for mainnet', () => {
      expect(WETH9[ChainId.MAINNET]).toBeDefined()
      expect(WETH9[ChainId.MAINNET].symbol).toBe('WETH')
      expect(WETH9[ChainId.MAINNET].address).toBe('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
    })

    it('should have WBONE for shibarium', () => {
      expect(WETH9[ChainId.SHIBARIUM]).toBeDefined()
      expect(WETH9[ChainId.SHIBARIUM].symbol).toBe('WBONE')
      expect(WETH9[ChainId.SHIBARIUM].address).toBe('0xC76F4c819D820369Fb2d7C1531aB3Bb18e6fE8d8')
    })

    it('should have WBONE for puppynet', () => {
      expect(WETH9[ChainId.PUPPYNET]).toBeDefined()
      expect(WETH9[ChainId.PUPPYNET].symbol).toBe('WBONE')
      expect(WETH9[ChainId.PUPPYNET].address).toBe('0x41c3F37587EBcD46C0F85eF43E38BcfE1E70Ab56')
    })
  })

  describe('new testnet networks', () => {
    it('should have WBNB for BNB testnet', () => {
      expect(WETH9[ChainId.BNB_TESTNET]).toBeDefined()
      expect(WETH9[ChainId.BNB_TESTNET].symbol).toBe('WBNB')
      expect(WETH9[ChainId.BNB_TESTNET].address).toBe('0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd')
    })

    it('should have WETH for base sepolia', () => {
      expect(WETH9[ChainId.BASE_SEPOLIA]).toBeDefined()
      expect(WETH9[ChainId.BASE_SEPOLIA].symbol).toBe('WETH')
      expect(WETH9[ChainId.BASE_SEPOLIA].address).toBe('0x4200000000000000000000000000000000000006')
    })

    it('should have WMATIC for polygon amoy', () => {
      expect(WETH9[ChainId.POLYGON_AMOY]).toBeDefined()
      expect(WETH9[ChainId.POLYGON_AMOY].symbol).toBe('WMATIC')
      expect(WETH9[ChainId.POLYGON_AMOY].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WETH for scroll sepolia', () => {
      expect(WETH9[ChainId.SCROLL_SEPOLIA]).toBeDefined()
      expect(WETH9[ChainId.SCROLL_SEPOLIA].symbol).toBe('WETH')
      expect(WETH9[ChainId.SCROLL_SEPOLIA].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WETH for linea sepolia', () => {
      expect(WETH9[ChainId.LINEA_SEPOLIA]).toBeDefined()
      expect(WETH9[ChainId.LINEA_SEPOLIA].symbol).toBe('WETH')
      expect(WETH9[ChainId.LINEA_SEPOLIA].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WCELO for celo alfajores', () => {
      expect(WETH9[ChainId.CELO_ALFAJORES]).toBeDefined()
      expect(WETH9[ChainId.CELO_ALFAJORES].symbol).toBe('WCELO')
      expect(WETH9[ChainId.CELO_ALFAJORES].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WXDAI for gnosis chiado', () => {
      expect(WETH9[ChainId.GNOSIS_CHIADO]).toBeDefined()
      expect(WETH9[ChainId.GNOSIS_CHIADO].symbol).toBe('WXDAI')
      expect(WETH9[ChainId.GNOSIS_CHIADO].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WMNT for mantle testnet', () => {
      expect(WETH9[ChainId.MANTLE_TESTNET]).toBeDefined()
      expect(WETH9[ChainId.MANTLE_TESTNET].symbol).toBe('WMNT')
      expect(WETH9[ChainId.MANTLE_TESTNET].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WETH for blast sepolia', () => {
      expect(WETH9[ChainId.BLAST_SEPOLIA]).toBeDefined()
      expect(WETH9[ChainId.BLAST_SEPOLIA].symbol).toBe('WETH')
      expect(WETH9[ChainId.BLAST_SEPOLIA].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WAVAX for avalanche fuji', () => {
      expect(WETH9[ChainId.AVALANCHE_FUJI]).toBeDefined()
      expect(WETH9[ChainId.AVALANCHE_FUJI].symbol).toBe('WAVAX')
      expect(WETH9[ChainId.AVALANCHE_FUJI].address).toBe('0xd00ae08403B9bbb9124bB305C09058E32C39A48c')
    })
  })

  describe('new mainnet networks', () => {
    it('should have WETH for scroll', () => {
      expect(WETH9[ChainId.SCROLL]).toBeDefined()
      expect(WETH9[ChainId.SCROLL].symbol).toBe('WETH')
      expect(WETH9[ChainId.SCROLL].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WETH for linea', () => {
      expect(WETH9[ChainId.LINEA]).toBeDefined()
      expect(WETH9[ChainId.LINEA].symbol).toBe('WETH')
      expect(WETH9[ChainId.LINEA].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WXDAI for gnosis', () => {
      expect(WETH9[ChainId.GNOSIS]).toBeDefined()
      expect(WETH9[ChainId.GNOSIS].symbol).toBe('WXDAI')
      expect(WETH9[ChainId.GNOSIS].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })

    it('should have WMNT for mantle', () => {
      expect(WETH9[ChainId.MANTLE]).toBeDefined()
      expect(WETH9[ChainId.MANTLE].symbol).toBe('WMNT')
      expect(WETH9[ChainId.MANTLE].address).toBe('0x0000000000000000000000000000000000000000') // Placeholder
    })
  })

  describe('token properties', () => {
    it('should have correct decimals for all tokens', () => {
      Object.values(WETH9).forEach(token => {
        expect(token.decimals).toBe(18)
      })
    })

    it('should have correct chainId for all tokens', () => {
      Object.entries(WETH9).forEach(([chainId, token]) => {
        expect(token.chainId).toBe(Number(chainId))
      })
    })

    it('should have valid addresses for all tokens', () => {
      Object.values(WETH9).forEach(token => {
        expect(token.address).toMatch(/^0x[a-fA-F0-9]{40}$/)
      })
    })
  })
})
