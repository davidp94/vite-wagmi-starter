import { formatAmount } from '@did-network/dapp-sdk'
import { Button } from 'antd'
import { BigNumber } from 'ethers'
import { useNavigate } from 'react-router-dom'
import {
  erc20ABI,
  erc4626ABI,
  mainnet,
  useAccount,
  useBalance,
  useContract,
  useContractRead,
  useNetwork,
  useProvider,
  useSigner,
} from 'wagmi'

import { NetworkSwitcher } from '@/components/SwitchNetworks'
import { WalletModal } from '@/components/WalletModal'
// import { useWagmi } from '@/hooks'

const Home = () => {
  const navigator = useNavigate()
  const provider = useProvider()
  const { data: signer, isError, isLoading } = useSigner()
  const { address } = useAccount()
  const { data: balance } = useBalance({
    address,
  })

  const { chain } = useNetwork()
  const XDEFI_TOKEN_ADDRESS = '0x72b886d09c117654ab7da13a14d603001de0b777'
  const ERC4626 = '0x263a7ff3b02b8902490e641e3a33a2ed3325352d'

  const {
    data: balanceXDEFI,
    // isError,
    // isLoading,
    refetch: refetchBalance1,
  } = useContractRead({
    address: XDEFI_TOKEN_ADDRESS,
    functionName: 'balanceOf',
    abi: erc20ABI,
    args: [address || '0x0000000000000000000000000000000000000000'],
  })

  const {
    data: allowanceXDEFI,
    // isError,
    // isLoading,
    refetch: refetchBalance2,
  } = useContractRead({
    address: XDEFI_TOKEN_ADDRESS,
    functionName: 'allowance',
    abi: erc20ABI,
    args: [address || '0x0000000000000000000000000000000000000000', ERC4626],
  })

  const {
    data: balanceveXDEFI,
    // isError,
    // isLoading,
    refetch: refetchBalance3,
  } = useContractRead({
    address: ERC4626,
    functionName: 'balanceOf',
    abi: erc4626ABI,
    args: [address || '0x0000000000000000000000000000000000000000'],
  })

  const {
    data: balanceXDEFIVault,
    // isError,
    // isLoading,
    refetch: refetchBalance4,
  } = useContractRead({
    address: ERC4626,
    functionName: 'totalAssets',
    abi: erc4626ABI,
    args: undefined,
  })
  const {
    data: totalSupply,
    // isError,
    // isLoading,
    refetch: refetchBalance5,
  } = useContractRead({
    address: ERC4626,
    functionName: 'totalSupply',
    abi: erc4626ABI,
    args: undefined,
  })

  const erc4626Contract = useContract({
    address: ERC4626,
    abi: erc4626ABI,
    signerOrProvider: signer,
  })

  const tokenContract = useContract({
    address: XDEFI_TOKEN_ADDRESS,
    abi: erc20ABI,
    signerOrProvider: signer,
  })

  const [show, setShow] = useState(false)

  const [newAllowance, setAllowanceState] = useState('0')
  const [spender, setSpender] = useState(ERC4626)
  const [newDeposit, setNewDeposit] = useState('0')
  const [previewDeposit, setPreviewDeposit] = useState(BigNumber.from(0))

  const [newRedeem, setNewRedeem] = useState('0')
  const [previewRedeem, setPreviewRedeem] = useState(BigNumber.from(0))
  const onCancel = () => {
    setShow(false)
  }

  const setAllowance = () => {
    console.log({ spender, newAllowance })
    let arg1 = spender
    if (arg1.startsWith('0x')) arg1 = arg1.substring(2)
    tokenContract?.approve(`0x${arg1}`, BigNumber.from(newAllowance).mul(BigNumber.from(10).pow(18))).then(() => {
      alert('Tx Submitted')
      refetchBalances()
    })
  }

  const previewDepositHandler = async (e: any) => {
    console.log(e.target.value)
    if (!e.target.value) return
    setNewDeposit(e.target.value)
  }

  useEffect(() => {
    if (!erc4626Contract) return
    if (newDeposit === '0') return
    erc4626Contract?.previewDeposit(BigNumber.from(newDeposit).mul(BigNumber.from(10).pow(18))).then((res: any) => {
      console.log(res)
      setPreviewDeposit(res)
    })
  }, [newDeposit, erc4626Contract])

  const depositHandler = async () => {
    if (!address) return
    if (!newDeposit) return

    console.log(newDeposit)
    const amount = BigNumber.from(newDeposit).mul(BigNumber.from(10).pow(18))
    // check allowance
    tokenContract?.allowance(address as any, ERC4626).then((res: any) => {
      console.log('allowance', res)
      if (res.lt(amount)) {
        alert('Please approve first')
        return
      }
      erc4626Contract?.deposit(amount as any, address).then((res: any) => {
        console.log(res)
        alert('Tx Submitted')
        refetchBalances()
      })
    })
  }
  const previewRedeemHandler = (e: any) => {
    console.log(e.target.value)
    if (!e.target.value) return
    const amount = BigNumber.from(e.target.value).mul(BigNumber.from(10).pow(18))
    setNewRedeem(e.target.value)
    erc4626Contract?.previewRedeem(amount).then((res: any) => {
      setPreviewRedeem(res)
    })
  }
  const redeemHandler = () => {
    console.log(newRedeem)
    if (!newRedeem) return
    if (!address) return
    const amount = BigNumber.from(newRedeem).mul(BigNumber.from(10).pow(18))
    // check balance
    erc4626Contract?.balanceOf(address).then((res: any) => {
      console.log('balance', res)
      if (res.lt(amount)) {
        alert('Insufficient balance')
        return
      }
      erc4626Contract?.redeem(amount as any, address as any, address as any).then((res: any) => {
        console.log(res)
        alert('Tx Submitted')
        refetchBalances()
      })
    })
  }

  useEffect(() => {
    if (!address) return
    const interval = setInterval(() => {
      refetchBalances()
    }, 10000)
    return () => clearInterval(interval)
  })

  const refetchBalances = () => {
    refetchBalance1()
    refetchBalance2()
    refetchBalance3()
    refetchBalance4()
    refetchBalance5()
  }

  return (
    <div className="App relative p-4 lt-md:p-8 min-h-screen flex-col-center">
      <p className="text-3xl font-bold underline hover:text-blue-300">ERC4626 Test</p>
      <p className="text-center">
        {address} <br /> {formatAmount(balance?.formatted)}
      </p>
      <p className="flex gap-4">
        <Button type="primary" onClick={() => setShow(true)} className="flex items-center">
          {address ? 'disconnect' : 'connect'} <span className="i-carbon:cookie"></span>
        </Button>
      </p>
      <div>
        <NetworkSwitcher />
      </div>
      {(chain?.id === mainnet.id && (
        <div>
          <br />
          ------ Balance -------
          <div>
            <p>XDEFI Token Address: {XDEFI_TOKEN_ADDRESS}</p>
            <p>veXDEFI ERC4626 Test Address: {ERC4626}</p>
          </div>
          <div>
            <p>$XDEFI Balance: {formatAmount(balanceXDEFI, 18)}</p>
          </div>
          <div>
            <p>$veXDEFI Balance: {formatAmount(balanceveXDEFI, 18)}</p>
          </div>
          ------ Allowance --------
          <div>Allowance $XDEFI to Vault: {formatAmount(allowanceXDEFI, 18)}</div>
          <div>
            set allowance how much: <br />{' '}
            <input
              type="number"
              min="1"
              step="1"
              value={newAllowance || '0'}
              onChange={(e) => setAllowanceState(e.currentTarget.value)}
            ></input>
            <br /> spender:
            <br />{' '}
            <input
              type="text"
              // min="1"
              // step="1"
              value={spender || '0'}
              onChange={(e) => setSpender(e.currentTarget.value)}
            ></input>
            <br />
            <button onClick={() => setAllowance()}>Set allowance</button>
          </div>
          -------------------------
          <br /> -------------------------
          <br /> ------- Vault -----------
          <div>
            <p>XDEFI Balance of Vault: {formatAmount(balanceXDEFIVault, 18)}</p>
            <p>Total veXDEFI supply: {formatAmount(totalSupply, 18)}</p>
          </div>
          <div>
            <p>
              Your share of the pool:{' '}
              {(totalSupply?.gt(0) &&
                (Number(formatAmount(balanceveXDEFI, 18)) / Number(formatAmount(totalSupply, 18))) * 100) ||
                0}{' '}
              {'%'}
            </p>
            <p>
              Deposit:{' '}
              <input type="number" min="1" step="1" value={newDeposit || '0'} onChange={previewDepositHandler}></input>
              <br />
              {previewDeposit && `You will receive ${formatAmount(previewDeposit, 18, 2)} veXDEFI`}
              <br />
              {/* or
              <br />
              {(totalSupply?.gt(0) &&
                previewDeposit
                  // ?.div(BigNumber.from(10).pow(18))
                  ?.div(totalSupply.add(previewDeposit) || '1')
                  .mul(100)
                  .toNumber()) ||
                'N/A'}{' '}
              {'% of the supply'} */}
              <br />
              {address && (
                <Button type="primary" onClick={depositHandler} className="flex items-center">
                  Deposit
                </Button>
              )}
            </p>

            <p>
              Redeem $veXDEFI:{' '}
              <input type="number" min="1" step="1" value={newRedeem || '0'} onChange={previewRedeemHandler}></input>
              <br />
              {previewRedeem && `You will receive ${formatAmount(previewRedeem, 18)} XDEFI`}
              <br />
              {address && (
                <Button type="primary" onClick={redeemHandler} className="flex items-center">
                  Redeem
                </Button>
              )}
            </p>
          </div>
        </div>
      )) ||
        'Please connect to mainnet'}
      <WalletModal open={show} onCancel={onCancel} />
    </div>
  )
}

export default Home

// function Item() {
//   const { status } = useWagmi()

//   return <span></span>
// }
