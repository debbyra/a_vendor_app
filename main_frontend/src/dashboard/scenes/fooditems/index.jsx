import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { tokens } from "../../../theme";
import { mockDataFooditems } from "../../data/mockData";
import Header from "../../components/Header";

const FoodItems = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          UGX {params.row.cost}
        </Typography>
      ),
    },
  ];

  //fetching the food items' APIs
  const [food, setFood] = useState([]);
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/fooditems/", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = response.data.fooditems;
        setFood(data);
        localStorage.setItem("myCartItems", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchFoodItems();
  }, []);
  console.log("My cart items", food);

  return (
    <Box m="20px">
      <Header title="FoodItems" subtitle="List of FoodItems " />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataFooditems} columns={columns} />
      </Box>
    </Box>
  );
};

export default FoodItems;
