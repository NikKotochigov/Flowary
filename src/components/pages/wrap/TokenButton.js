
export const TokenButton = () => {
    return (
        <div >
            <TokenIcon mint={mint} style={{ width: theme.spacing(4) }} />
            <TokenName mint={mint} style={{ fontSize: 14, fontWeight: 700 }} />
            <ExpandMore />
        </div>
    );
}
