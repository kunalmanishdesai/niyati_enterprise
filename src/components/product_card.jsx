import { Favorite, Share } from "@mui/icons-material";
import { Card, CardActions, CardMedia, IconButton, Typography, CardContent, Button } from "@mui/material";
import React from "react";

const ProductCard = ({ imageSrc, title, description }) => {
    return (
        <Card 
            sx={{ 
                position: 'relative', 
                maxWidth: 300,
                height: 250,
                width: '100%',
                '&:hover .description': {
                    opacity: 1,
                    visibility: 'visible',
                },
                overflow: 'hidden',
                backgroundColor: 'background.paper',
            }}
        >
            <CardMedia
                component="img"
                height="194"
                image={imageSrc}
                alt="Product Image"
            />
            
            {description && (
                <Card 
                    className="description"
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'white',
                        color: 'black',
                        opacity: 0,
                        visibility: 'hidden',
                        transition: 'opacity 0.3s ease, visibility 0.3s ease',
                        height: '60%',
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                  <CardContent>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        {title}
                      </Typography>

                      <Typography variant="body2" component="div">
                        {description}
                      </Typography>

                      <CardActions 
                        disableSpacing 
                        sx={{ 
                            position: 'absolute', 
                            bottom: 0, 
                            left: 0, 
                            right: 0, 
                            background: 'rgba(0, 0, 0, 0.6)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 1,
                        }}
                    >
                        <div>
                            <IconButton aria-label="add to favourites" sx={{ color: 'white' }}>
                                <Favorite />
                            </IconButton>
                            <IconButton aria-label="share" sx={{ color: 'white' }}>
                                <Share />
                            </IconButton>
                        </div>
                        <Button 
                            variant="contained" 
                            sx={{ color: 'white', backgroundColor: 'primary.main' }}
                            aria-label="order"
                        >
                            Order
                        </Button>
                    </CardActions>
                  </CardContent>
                </Card>
            )}
        </Card>
    );
}

export default ProductCard;