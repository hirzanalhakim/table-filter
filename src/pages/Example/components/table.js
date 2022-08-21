import React from 'react'
import dayjs from 'dayjs'
import { useSearchParams } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableSortLabel from '@mui/material/TableSortLabel'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

const TableUser = ({
  data,
  isLoading,
  handlePage,
  handlePageSize,
  getActiveSort,
  getDirection,
  handleSort,
}) => {
  let [searchParams] = useSearchParams()

  const renderLoading = () =>
    ['1', '2', '3', '4'].map((loading) => (
      <TableRow key={loading} data-testid="loading-table">
        <TableCell>
          <Typography component="div" variant={'h6'}>
            <Skeleton />
          </Typography>
        </TableCell>
        <TableCell>
          <Typography component="div" variant={'h6'}>
            <Skeleton />
          </Typography>
        </TableCell>
        <TableCell>
          <Typography component="div" variant={'h6'}>
            <Skeleton />
          </Typography>
        </TableCell>
        <TableCell>
          <Typography component="div" variant={'h6'}>
            <Skeleton />
          </Typography>
        </TableCell>
        <TableCell>
          <Typography component="div" variant={'h6'}>
            <Skeleton />
          </Typography>
        </TableCell>
      </TableRow>
    ))

  return (
    <TableContainer
      component={Paper}
      style={{ marginTop: 40 }}
      data-testid="table-example"
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              onClick={() => handleSort('username')}
              data-testid="sort_username"
            >
              <TableSortLabel
                active={getActiveSort('username')}
                direction={getDirection('username')}
              >
                Username
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="left"
              onClick={() => handleSort('name')}
              data-testid="sort_name"
            >
              <TableSortLabel
                active={getActiveSort('name')}
                direction={getDirection('name')}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="left"
              onClick={() => handleSort('email')}
              data-testid="sort_email"
            >
              <TableSortLabel
                active={getActiveSort('email')}
                direction={getDirection('email')}
              >
                Email
              </TableSortLabel>
            </TableCell>

            <TableCell
              align="left"
              onClick={() => handleSort('gender')}
              data-testid="sort_gender"
            >
              <TableSortLabel
                active={getActiveSort('gender')}
                direction={getDirection('gender')}
              >
                Gender
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="left"
              onClick={() => handleSort('registeredDate')}
              data-testid="sort_registeredDate"
            >
              <TableSortLabel
                active={getActiveSort('registeredDate')}
                direction={getDirection('registeredDate')}
              >
                RegisteredDate
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading &&
            data?.map((row) => (
              <TableRow key={row?.email}>
                <TableCell component="th" scope="row">
                  {row?.login?.username}
                </TableCell>
                <TableCell align="left">{`${row?.name?.first} ${row?.name?.last}`}</TableCell>
                <TableCell align="left">{row?.email}</TableCell>
                <TableCell align="left">{row?.gender}</TableCell>
                <TableCell align="left">
                  {dayjs(row?.registered?.date).format('DD-MM-YYYY HH:mm')}
                </TableCell>
              </TableRow>
            ))}
          {isLoading && renderLoading()}
        </TableBody>
      </Table>
      <TablePagination
        data-testid="table-pagination-example"
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={500}
        rowsPerPage={
          searchParams.get('pageSize')
            ? parseInt(searchParams.get('pageSize'))
            : 10
        }
        page={
          searchParams.get('page') ? parseInt(searchParams.get('page')) - 1 : 0
        }
        onPageChange={handlePage}
        onRowsPerPageChange={handlePageSize}
      />
    </TableContainer>
  )
}

export default TableUser
