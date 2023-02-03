import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from "react-router-dom";


const theme = createTheme();

export default function Cart() {

  const [cards, setCards] = React.useState([])
  
  React.useEffect(() => {
    fetch("http://localhost:4000/cart").then((result) => {
        return result.json()
    }).then((data) => {
        setCards(data)
    })
  },[])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" >
        <Toolbar sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Link to="/" style={{textDecoration: "none", color: "#b4c5e5"}}>
          <Typography sx={{ mr: 10,}} variant="h6" color="inherit" noWrap>
            Items
          </Typography>
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            Cart
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pb: 6,
          }}
        >
          
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Kitchen Cart Items
            </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '6.25%',
                    }}
                    image={card.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.item}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Delete</Button>
                    <Button size="small">Order</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}