/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'
import { useSearchParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search'
import Select from '@mui/material/Select'

import TableUser from './components/table'
import { fetchData } from '../../redux/action-reducers/randomUser'
import BasicBreadcrumbs from '../../components/BreadCrumb'
import Header from '../../components/Header'

const Example = () => {
  const dispatch = useDispatch()
  const dataUser = useSelector((state) => state.randomUser)
  let [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('keyword') || '')

  const handleGender = (event) => {
    const currentParams = Object.fromEntries([...searchParams])
    if (event.target.value === 'all') {
      delete currentParams.gender
      return setSearchParams(currentParams)
    }
    return setSearchParams({ ...currentParams, gender: event.target.value })
  }

  const handleSearch = (event) => {
    const currentParams = Object.fromEntries([...searchParams])
    if (event.target.value === searchParams.get('keyword')) {
      return
    }
    if (!event.target.value) {
      delete currentParams.keyword
      setSearch(event.target.value)
      return setSearchParams(currentParams)
    }
    setSearch(event.target.value)
    return setSearchParams({ ...currentParams, keyword: event.target.value })
  }

  const debouncedSearch = useMemo(() => debounce(handleSearch, 500), [])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
    debouncedSearch(event)
  }

  const handleResetFilter = () => {
    setSearch('')
    setSearchParams({})
  }

  const handleSort = (type) => {
    const currentParams = Object.fromEntries([...searchParams])
    if (
      searchParams.get('sortBy') === type &&
      searchParams.get('sortOrder') === 'asc'
    ) {
      return setSearchParams({
        ...currentParams,
        sortBy: type,
        sortOrder: 'desc',
      })
    }
    return setSearchParams({
      ...currentParams,
      sortBy: type,
      sortOrder: 'asc',
    })
  }

  const handlePage = (event, newPage) => {
    const currentParams = Object.fromEntries([...searchParams])
    const page = newPage + 1
    return setSearchParams({
      ...currentParams,
      page,
    })
  }

  const handlePageSize = (event) => {
    const currentParams = Object.fromEntries([...searchParams])
    const pageSize = event.target.value
    return setSearchParams({
      ...currentParams,
      pageSize,
    })
  }

  const getDirection = (type) => {
    if (
      searchParams.get('sortBy') === type &&
      searchParams.get('sortOrder') === 'desc'
    ) {
      return 'desc'
    }
    return 'asc'
  }

  const getActiveSort = (type) => {
    if (searchParams.get('sortBy') === type) {
      return true
    }
    return false
  }

  const showHeader = useMemo(() => Header(), [])
  const showBreadcrumbs = useMemo(
    () => BasicBreadcrumbs({ title: 'Example' }),
    []
  )

  useEffect(() => {
    const query = {
      seed: 'magic-test',
      page: searchParams.get('page') || 1,
      gender: searchParams.get('gender'),
      sortBy: searchParams.get('sortBy'),
      sortOrder: searchParams.get('sortOrder'),
      pageSize: searchParams.get('pageSize') || 10,
    }
    dispatch(fetchData(query))
  }, [searchParams])

  return (
    <div>
      {showHeader}
      <div style={{ padding: '30px' }}>
        {showBreadcrumbs}
        <div>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 3 }}>
            <FormControl variant="outlined" style={{ marginRight: 20 }}>
              <InputLabel htmlFor="outlined-adornment-search">
                Search
              </InputLabel>
              <OutlinedInput
                inputProps={{ 'data-testid': 'search_input' }}
                id="outlined-adornment-weight"
                value={search}
                onChange={handleChangeSearch}
                aria-describedby="outlined-weight-helper-text"
                label="Search"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      sx={{ p: '10px' }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl style={{ width: 300, marginRight: 20 }}>
              <InputLabel id="gender-select-label">Gender</InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                inputProps={{ 'data-testid': 'select_gender' }}
                value={searchParams.get('gender') || 'all'}
                label="Gender"
                onChange={handleGender}
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
                <MenuItem value={'male'}>Male</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              onClick={handleResetFilter}
              data-testid="reset_filter"
            >
              Reset Filter
            </Button>
          </Box>
        </div>
        <TableUser
          data={dataUser?.data}
          isLoading={dataUser?.isLoading}
          handlePage={handlePage}
          handlePageSize={handlePageSize}
          getActiveSort={getActiveSort}
          getDirection={getDirection}
          handleSort={handleSort}
        />
      </div>
    </div>
  )
}

export default Example
