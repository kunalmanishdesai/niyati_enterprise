import React from 'react';
import { Box, Typography, Card, CardContent, Button, Divider, List, ListItem } from '@mui/material';

const ProductDetails = () => {
  const title = "Blue Tie";
  const description = "Blah blah blah blah blah blah blah blah blah blah";
  const cost = "200";

  const aboutThisItem = [
    "Every tie is handmade by skilled craftsmen to the highest standard possible. Decades of neckwear designing and crafting skills have been passed down to assure that every tie meets our quality requirements.",
    "A matching pocket square is included in the tie sets. Our pocket squares are made from a new piece of fabric, producing a finished edged product that matches the tie for a polished touch. No compromises are made on the fine details.",
    "Our neckwear comes in a large assortment of colors to fit any occasion. Our ties are available in regular and extra-long lengths to meet your needs. We also offer updated designs and colors that are relevant to today’s fashion scene.",
    "Great for all occasions including: Weddings, Prom, Gift, Formal, Groomsman’s gift, Holiday, Church, Funeral, Choir Group, Tuxedo, Uniform, School Group."
  ];

  const productDetails = {
    fabricType: "100% Polyester",
    careInstructions: "Dry Clean Only",
    origin: "Imported",
    country_of_origin: "China"
  };

  const handleOrderClick = () => {
    // Handle the order click action here
    alert("Order placed!");
  };

  return (
    <Box sx={{ ml: 3, mt: 2, mr:2 }}>
      {/* Main Details Card */}
      <Card sx={{ borderRadius: 2, boxShadow: 3, padding: 2 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h4" gutterBottom>
                {title}
                </Typography>
            
                <Button sx={{ mr: 2, backgroundColor: '#9B59B6', '&:hover': { backgroundColor: '#8E44AD' } }} variant="contained" color="primary" onClick={handleOrderClick}>
                    Interested ?
                </Button>
          </Box>
          <Typography variant="h6" color="textSecondary" gutterBottom>
                Cost: ${cost}
              </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>

      {/* Product Details Card */}
      <Card sx={{ marginY: 2, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Product Details
          </Typography>
          <Divider sx={{ marginY: 1 }} />
          <List dense>
            {Object.entries(productDetails).map(([key, value]) => (
              <ListItem key={key}>
                <Typography variant="body2">
                  <strong>{key.replace(/_/g, ' ')}:</strong> {value}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* About This Item Card */}
      <Card sx={{ marginY: 2, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            About This Item
          </Typography>
          <Divider sx={{ marginY: 1 }} />
          <List dense>
            {aboutThisItem.map((item, index) => (
              <ListItem key={index}>
                <Typography variant="body2">
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetails;