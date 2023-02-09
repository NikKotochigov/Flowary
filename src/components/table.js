import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import BasicModal from "./elements/modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Tooltip from '../components/elements/tooltip'
import NextLink from "next/link";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Image from "next/image";
import { table } from "../../src/consts/table";


const TableS = ({ rows }) => {
  console.log({ rows });
  const theme = useTheme();
  // function createData(id, status, date, token, from, txhash, chain, time) {
  //     return { id, status, date, token, from, txhash, chain, time };
  //   }

  //   const rows = [
  //     createData(
  //     table[0].id,
  //       table[0].status,
  //       table[0].date,
  //       table[0].token,
  //       table[0].from,
  //       table[0].txhash,
  //       table[0].chain,
  //       table[0].time
  //     ),
  //     createData(
  //         table[1].id,
  //         table[1].status,
  //       table[1].date,
  //       table[1].token,
  //       table[1].from,
  //       table[1].txhash,
  //       table[1].chain,
  //       table[1].time
  //     ),
  //     createData(
  //         table[2].id,
  //         table[2].status,
  //       table[2].date,
  //       table[2].token,
  //       table[2].from,
  //       table[2].txhash,
  //       table[2].chain,
  //       table[2].time
  //     ),
  //   ];


  return (<>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
      }}
    >
      <TableContainer
        sx={{
          boxShadow: theme.shadows[25],
          borderRadius: 2,
          maxWidth: 850,
        }}
      >
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <>
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{
                      p: "1px",
                    }}
                  >
                    {row.status == "finished" ? (
                      <HighlightOffIcon sx={{ color: "red" }} />
                    ) : (
                      <Image
                        alt="logo"
                        src="/static/images/tableImg.gif"
                        width={40}
                        height={40}
                      />
                    )}
                  </TableCell>

                  <TableCell
                    align="left"
                  >
                    <Typography
                      color={row.status == 'finished' ? 'red' : 'green'}
                      sx={{ fontSize: 16 }}
                    >
                      {" "}
                      {`Stream ${row.status}`}
                    </Typography>
                    <Typography fontSize={12}>{row.time}</Typography>
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      alignItems: "center",
                      display: {
                        xs: "none", // 100%
                        sm: "none", //600px
                        md: "flex", //900px
                      },
                      gap: 2,
                      fontSize: 14,
                      mt: 1,
                    }}
                  >
                    <img
                      alt="coin"
                      src={`https://assets.coincap.io/assets/icons/${row.token.toLowerCase()}@2x.png`}
                      width={30}
                      height={30}
                    />
                    {row.token}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{
                      pt: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography fontSize={12}>From:</Typography>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          gap: 1,
                        }}
                      >
                        <Jazzicon
                          diameter={30}
                          seed={jsNumberForAddress(row.from)}
                        />
                        {row.from.toString().slice(0, 5) +
                          "..." +
                          row.from.toString().slice(38)}
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      pt: 3,
                    }}
                  >
                    <Tooltip title={"see tx on Etherscan"}>
                      <NextLink
                        href={`https://goerli.etherscan.io/tx/${row.txhash}`}
                        passHref
                        target="_blank"
                      >
                        <OpenInNewOutlinedIcon />
                      </NextLink>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="center">
                    <BasicModal nameModal={"Info"}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 2,
                          width: 400,
                        }}
                      >
                        <Typography>Additional info</Typography>
                      </Box>
                    </BasicModal>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  </>);
}

export default TableS;