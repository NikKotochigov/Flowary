import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import BasicModal from "../src/components/elements/modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { table } from "../src/consts/table";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import NextLink from "next/link";
import Tooltip from "../src/components/elements/tooltip";
import Image from "next/image";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TableS from "../src/components/table";


// const rowSS = table.map(
//   ({ id, status, date, token, from, txhash, chain, time }) =>
//     createData(
//       { id },
//       { status },
//       { date },
//       { token },
//       { from },
//       { txhash },
//       { chain },
//       time
//     )
// );
// console.log(rowSS);

const Page = () => {
  const theme = useTheme();
  const [valueStart, setValueStart] = useState(dayjs("2023-01-01"));
  const [valueStop, setValueStop] = useState(dayjs("2023-01-02"));
  function createData(id, status, date, token, from, txhash, chain, time) {
    return { id, status, date, token, from, txhash, chain, time };
  }

  const rows = [
    createData(
      table[0].id,
      table[0].status,
      table[0].date,
      table[0].token,
      table[0].from,
      table[0].txhash,
      table[0].chain,
      table[0].time
    ),
    createData(
      table[1].id,
      table[1].status,
      table[1].date,
      table[1].token,
      table[1].from,
      table[1].txhash,
      table[1].chain,
      table[1].time
    ),
    createData(
      table[2].id,
      table[2].status,
      table[2].date,
      table[2].token,
      table[2].from,
      table[2].txhash,
      table[2].chain,
      table[2].time
    ),
    createData(
      table[3].id,
      table[3].status,
      table[3].date,
      table[3].token,
      table[3].from,
      table[3].txhash,
      table[3].chain,
      table[3].time
    ),
    createData(
      table[4].id,
      table[4].status,
      table[4].date,
      table[4].token,
      table[4].from,
      table[4].txhash,
      table[4].chain,
      table[4].time
    ),
    createData(
      table[5].id,
      table[5].status,
      table[5].date,
      table[5].token,
      table[5].from,
      table[5].txhash,
      table[5].chain,
      table[5].time
    ),

  ];

  const newRows = rows.filter(i => valueStart.format('DD/MM/YYYY') < dayjs(i.date).format('DD/MM/YYYY') < valueStop.format('DD/MM/YYYY'))
  console.log('start :', valueStart.format('DD/MM/YYYY'));
  console.log('stop :', valueStop.format('DD/MM/YYYY'));
  console.log('test 2:', dayjs(table[2].date).format('DD/MM/YYYY'))
  console.log('test :', dayjs(table[0].date).format('DD/MM/YYYY') === valueStart.format('DD/MM/YYYY'))
  console.log(newRows)
  return (
    <>
      <Typography variant="h2" m={5} color="warning.light">
        Activity history
      </Typography>

      <Box
        component="form"
        sx={{
          justifyContent: "space-between",
          display: {
            // xs: "block", // 100%
            sm: "block", //600px
            md: "flex", //900px
          },
          m: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Filter by address"
            variant="outlined"
            sx={{
              width: "300px",
              "& .MuiInputBase-input": {
                height: "10px",
              },
            }}
          />
          <Button variant="outlined" sx={{ width: "150px", mb: 5 }}>
            Show history
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Start from the date"
                value={valueStart}
                minDate={dayjs("2023-01-01")}
                onChange={(newValue) => {
                  setValueStart(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      width: "160px",
                      "& .MuiInputBase-input": {
                        height: "10px",
                        width: "100px",
                      },
                    }}
                  />
                )}
              />
              <DesktopDatePicker
                label="Till the date"
                value={valueStop}
                minDate={dayjs("2023-01-01")}
                onChange={(newValue) => {
                  setValueStop(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      width: "160px",
                      "& .MuiInputBase-input": {
                        height: "10px",
                        width: "100px",
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
          <Button variant="outlined" sx={{ width: "150px" }}>
            Show history
          </Button>
        </Box>
      </Box>

      {/* <Box
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
            <TableHead>
            </TableHead>
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
                        // color={row.status == 'finished' ? 'red' : 'green'}
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
                        // alignItems: "center",
                        display: {
                          xs: "none", // 100%
                          sm: "none", //600px
                          md: "flex", //900px
                        },
                        gap: 2,
                        fontSize: 14,
                        // mt: 2,
                        p: 3,
                        // border: 1
                      }}
                    >
                      <img
                        alt="coin"
                        src={`https://assets.coincap.io/assets/icons/${row.token.toLowerCase()}@2x.png`}
                        width={30}
                        height={30}
                      />
                      {row.token.toUpperCase()}
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
      </Box> */}
      <TableS rows={rows} />
    </>
  );
};

export default Page;
