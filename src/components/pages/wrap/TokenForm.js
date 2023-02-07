import { TokenButton } from "./TokenButton"

export const TokenForm = () => {

    return (
        <div >
            <div >
                <TokenButton mint={mint} onClick={() => setShowTokenDialog(true)} />
                <Typography color="textSecondary" className={styles.balanceContainer}>
                    {tokenAccount && mintAccount
                        ? `Balance: ${balance?.toFixed(mintAccount.decimals)}`
                        : `-`}
                    {from && !!balance ? (
                        <span
                            className={styles.maxButton}
                            onClick={() => setAmount(balance)}
                        >
                            MAX
                        </span>
                    ) : null}
                </Typography>
            </div>
            <TextField
                type="number"
                value={formattedAmount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                InputProps={{
                    disableUnderline: true,
                    classes: {
                        root: styles.amountInput,
                        input: styles.input,
                    },
                }}
            />
            <TokenDialog
                setMint={setMint}
                open={showTokenDialog}
                onClose={() => setShowTokenDialog(false)}
            />
        </div>)
}