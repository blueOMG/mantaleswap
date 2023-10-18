import { ChainId } from 'mantleswapsdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.MANTLE]: '0xB2eD49c471ff87A3393752BCd42288795B2db891',
  [ChainId.MANTLETEST]: '0xB2eD49c471ff87A3393752BCd42288795B2db891',
  
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
