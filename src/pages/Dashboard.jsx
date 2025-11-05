import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CommonCard from "../components/CommonCard/CommonCard";
import useGetPost from "../hooks/useGetPost";
import useGetProducts from "../hooks/useGetProducts";
import CircularProgress from "@mui/material/CircularProgress";

function Dashboard() {
  useGetPost();

  const { data, loading, error } = useGetProducts();

  if (loading)
    return (
      <Box pt={10}>
        <CircularProgress />
      </Box>
    );

  if (error) return <Box pt={10}>{error}</Box>;

  return (
    <Grid container spacing={2} pt={10}>
      {data.map((cartItem) => {
        return (
          <Grid key={cartItem.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <CommonCard cartItem={cartItem} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Dashboard;
