import { Box, Card, Container, useTheme } from "@mui/material"
import { TokenForm } from "./TokenForm";

export const WrapCard = () => {

    const theme = useTheme();
    // console.log({ theme });

    return (
        <Container component={Box} >
            <Card
                sx={{
                    width: theme.spacing(50),
                    borderRadius: theme.spacing(2),
                    boxShadow: theme.shadows[25],
                    padding: theme.spacing(2),
                }
                }
            >
                <TokenForm/>
            </Card>
        </Container>
    )
}