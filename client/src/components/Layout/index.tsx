import { Outlet } from 'react-router-dom'
import  { Box,Grid,ThemeOptions,useTheme } from "@mui/material"
import { LeftSidebar } from '../LeftSidebar'
import LayoutStyle from './style'


export const Layout = () => {
  const theme = useTheme<ThemeOptions>()
  return (
    <Box sx={LayoutStyle.box}>
        <Grid container >
          <Grid item xs={2}>
           <LeftSidebar /> 
          </Grid>
          <Grid item xs={8}>
            <Outlet /> 
          </Grid>
          <Grid item xs={2}>
            <div className='sidebar' >This is the right sidebar</div> 
          </Grid>
        </Grid>      
    </Box>   
  )
}