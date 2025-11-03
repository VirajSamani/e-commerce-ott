import Grid from "@mui/material/Grid";
import CommonCard from "../components/CommonCard/CommonCard";
import useGetPost from "../hooks/useGetPost";

function Dashboard() {
  useGetPost();

  const cartItems = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid container spacing={2} pt={10}>
      {cartItems.map((cartItem) => {
        return (
          <Grid key={cartItem} size={{ xs: 12, sm: 6, md: 4 }}>
            <CommonCard />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Dashboard;
