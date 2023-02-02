import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useEffect } from 'react'
import { ConnectWalletButton } from './connectWalletButton'
import { useDispatch } from 'react-redux'
import { setAccount, setConnected } from '../../store/reducers/wallet/reducer';

function RenderConnectWalletButton({ chain, connected, account, openAccountModal, openChainModal, openConnectModal }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setConnected(connected));
    }, [connected]);

    useEffect(() => {
        dispatch(setAccount(account));
    }, [account]);

    if (!connected) {
        return (
            <ConnectWalletButton sx={{ width: '100%' }} onClick={openConnectModal} type="button">
                CONNECT WALLET
            </ConnectWalletButton>
        )
    }
    if (chain.unsupported) {
        return (
            <ConnectWalletButton onClick={openChainModal} type="button">
                Wrong network
            </ConnectWalletButton>
        )
    }
    return (
        <div style={{ display: 'flex', gap: 12 }}>
            <ConnectWalletButton
                onClick={openAccountModal}
                type="button"
            >
                {/* <UserIcon style={{ marginRight: "8px" }} /> */}
                {account.displayName}
            </ConnectWalletButton>
        </div>
    )
}

export function ConnectWallet() {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted
            }) => {
                const ready = mounted
                const connected = ready
                    && (account?.address !== null && account?.address !== undefined)
                    && (chain?.id !== null && chain?.id !== undefined)
                return (
                    <div {...(!ready && {
                        'aria-hidden': true,
                        style: {
                            width: '100%',
                            opacity: 0,
                            pointerEvents: 'none',
                            userSelect: 'none'
                        }
                    })}
                    >
                        <RenderConnectWalletButton connected={connected} account={account} chain={chain} openAccountModal={openAccountModal} openChainModal={openChainModal} openConnectModal={openConnectModal} />
                    </div>
                )
            }}
        </ConnectButton.Custom>
    )
}
