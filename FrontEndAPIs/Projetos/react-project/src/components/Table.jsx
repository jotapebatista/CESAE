import { Paper } from "@mui/material"
import Table from "@mui/material"
import TableBody from "@mui/material"
import TableCell from "@mui/material"
import TableHead from "@mui/material"
import TableRow from "@mui/material"
import Typography from "@mui/material"

export default function DataTable({ title, data }) {
  const headers = Object.keys(data[0])

  return (
    <Paper>
      <Typography variant="h4" color="inherit">
        {title}
      </Typography>

      <hr />
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableCell align="right">{header.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((emp, index) => (
            <TableRow key={index}>
              {headers.map(header => (
                <TableCell align="right">{emp[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

DataTable.defaultProps = {
  title: "No Title"
}
