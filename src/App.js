import { Box } from "@mui/system";
import Navbar from "./components/Navbar/Navbar";
import TableComponent from "./components/TableComponent/TableComponent";

function App() {
  return (
    <Box sx={{ bgcolor: "#f4f4f4", minHeight: "100vh" }}>
      <Navbar>
        <Box sx={{ overflowX: "scroll", maxWidth: "1440px", mx: "auto" }}>
          <TableComponent />
        </Box>
      </Navbar>
    </Box>
  );
}

export default App;
