import { SWAP_ROUTER_02_ADDRESSES } from './addresses'
import { ChainId } from './chains'

describe('addresses', () => {
  describe('swap router 02 addresses', () => {
    it('should return the correct address for base', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.BASE)
      expect(address).toEqual('0x2626664c2603336E57B271c5C0b26F421741e481')
    })

    it('should return the correct address for base goerli', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.BASE_GOERLI)
      expect(address).toEqual('0x8357227D4eDc78991Db6FDB9bD6ADE250536dE1d')
    })

    it('should return the correct address for avalanche', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.AVALANCHE)
      expect(address).toEqual('0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE')
    })

    it('should return the correct address for BNB', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.BNB)
      expect(address).toEqual('0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2')
    })

    it('should return the correct address for arbitrum goerli', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.ARBITRUM_GOERLI)
      expect(address).toEqual('0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45')
    })

    it('should return the correct address for optimism sepolia', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.OPTIMISM_SEPOLIA)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for sepolia', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.SEPOLIA)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for blast', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.BLAST)
      expect(address).toEqual('0x549FEB8c9bd4c12Ad2AB27022dA12492aC452B66')
    })

    // New network tests
    it('should return the correct address for shibarium', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.SHIBARIUM)
      expect(address).toEqual('0xd0d020fd91aB1Ab2CbbdbfBde2Fd9C5e4D5896b8')
    })

    it('should return the correct address for puppynet', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.PUPPYNET)
      expect(address).toEqual('0xE1052C93D344daAE1352609D464f91945fF50b14')
    })

    it('should return the correct address for BNB testnet', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.BNB_TESTNET)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for base sepolia', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.BASE_SEPOLIA)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for polygon amoy', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.POLYGON_AMOY)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for scroll sepolia', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.SCROLL_SEPOLIA)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for linea sepolia', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.LINEA_SEPOLIA)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for gnosis chiado', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.GNOSIS_CHIADO)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for mantle testnet', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.MANTLE_TESTNET)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for blast sepolia', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.BLAST_SEPOLIA)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return the correct address for avalanche fuji', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.AVALANCHE_FUJI)
      expect(address).toEqual('0x7BE0795F7f8273d57E0FCA94e880B75C802bf79c')
    })

    it('should return default address for unsupported chain', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(999999)
      expect(address).toEqual('')
    })
  })
})
