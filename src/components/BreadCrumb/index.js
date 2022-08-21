import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

export default function BasicBreadcrumbs({ title }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/table-filter">
        Home
      </Link>
      <Typography color="text.primary">{title}</Typography>
    </Breadcrumbs>
  )
}
