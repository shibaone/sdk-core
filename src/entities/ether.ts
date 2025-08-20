import invariant from 'tiny-invariant'
import { Currency } from './currency'
import { NativeCurrency } from './nativeCurrency'
import { Token } from './token'
import { WETH9 } from './weth9'
import { ChainId } from '../chains'

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
export class Ether extends NativeCurrency {
  protected constructor(chainId: number) {
    // Handle different chains with their specific native currencies
    switch (chainId) {
      case ChainId.SHIBARIUM:
      case ChainId.PUPPYNET:
        super(chainId, 18, 'BONE', 'BONE SHIBASWAP')
        break
      case ChainId.BNB:
      case ChainId.BNB_TESTNET:
        super(chainId, 18, 'BNB', 'Binance Coin')
        break
      case ChainId.AVALANCHE:
      case ChainId.AVALANCHE_FUJI:
        super(chainId, 18, 'AVAX', 'Avalanche')
        break
      case ChainId.POLYGON:
      case ChainId.POLYGON_MUMBAI:
      case ChainId.POLYGON_AMOY:
        super(chainId, 18, 'MATIC', 'Matic')
        break
      case ChainId.GNOSIS:
      case ChainId.GNOSIS_CHIADO:
        super(chainId, 18, 'XDAI', 'xDai')
        break
      case ChainId.MOONBEAM:
        super(chainId, 18, 'GLMR', 'Glimmer')
        break
      case ChainId.CELO:
      case ChainId.CELO_ALFAJORES:
        super(chainId, 18, 'CELO', 'Celo')
        break
      case ChainId.MANTLE_TESTNET:
        super(chainId, 18, 'MNT', 'Mantle')
        break
      default:
        // Default to ETH for all other chains (Ethereum mainnet, testnets, L2s, etc.)
        super(chainId, 18, 'ETH', 'Ether')
        break
    }
  }

  public get wrapped(): Token {
    const weth9 = WETH9[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _etherCache: { [chainId: number]: Ether } = {}

  public static onChain(chainId: number): Ether {
    return this._etherCache[chainId] ?? (this._etherCache[chainId] = new Ether(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
