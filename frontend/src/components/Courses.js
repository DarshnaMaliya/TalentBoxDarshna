import { Box, Typography } from "@mui/material";
import AdfScannerSharpIcon from '@mui/icons-material/AdfScannerSharp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorageIcon from '@mui/icons-material/Storage';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';

const Courses = () => {
  return (
    <>
      <div>
        <Box display={"flex"} flexDirection={"column"} marginLeft={50} marginTop={5} spacing={6}>
          <Box marginLeft={15}>
            <Typography>Welcome to freeCodeCamp.org</Typography>
          </Box>
          <br />
          <Typography marginLeft={4}>"I have not failed. I've just found 10,000 ways that won't work."</Typography>
          <Box marginLeft={17}>
            <Typography>- Thomas A. Edison</Typography>
          </Box> <br />
          <Box
            sx={{ backgroundColor: "#828282" }}
            maxWidth={450}
            display={"flex"}
            flexDirection={"row"}
            padding={2}
            spacing={3}
            border={2}
            marginTop={1}
          >
            <AdfScannerSharpIcon />
            <Typography>(New) Responsive Web Design Certification (300 hours)</Typography>
          </Box>
          <Box
            maxWidth={450} sx={{ backgroundColor: "#828282" }}
            display={"flex"} flexDirection={"row"}
            padding={2}
            spacing={3}
            border={2}
            marginTop={1}>
            <AdfScannerSharpIcon />
            <Typography>Legacy Responsive Web Design Certification (300 hours)</Typography>
          </Box>
          <Box
            maxWidth={450} sx={{ backgroundColor: "#828282" }}
            display={"flex"} flexDirection={"row"} alignItems="flex-start"
            padding={2}
            spacing={3}
            border={2}
            marginTop={1}>
            <AssignmentIcon />
            <Typography>Quality Assurance Certification (300 hours)</Typography>
          </Box>
          <Box
            maxWidth={450} sx={{ backgroundColor: "#828282" }}
            display={"flex"} flexDirection={"row"}
            padding={2}
            spacing={3}
            border={2}
            marginTop={1}>
            <StorageIcon />
            <Typography>Back End developement and API's Certification (300 hours)</Typography>
          </Box>
          <Box
            maxWidth={450} sx={{ backgroundColor: "#828282" }}
            display={"flex"} flexDirection={"row"}
            padding={2}
            spacing={3}
            border={2}
            marginTop={1}
          >
            <StackedBarChartIcon />
            <Typography>Data Visualization Certification (300 hours)</Typography>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Courses;