import { Box, Container, Typography, Divider } from "@mui/material";
import Carousel from "components/carousel";
import ProductCard from "components/product_card";
import React from "react";


const ProductCards = () => {
    const products = [
        {
            src:  "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
            description: "Ties are available in various color with state of art material min order: 350",
            title: "Blue Tie",
        },
        {
            src:  "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
            description: "We sell ties, ties are available in any color you want, min order: 350",
            title: "Blue Tie",
        },
        {
            src:  "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
            description: "We sell ties, ties are available in any color you want, min order: 350",
            title: "Blue Tie",
        },
        {
            src:  "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
            description: "We sell ties, ties are available in any color you want, min order: 350",
            title: "Blue Tie",
        },
        {
            src:  "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
            description: "We sell ties, ties are available in any color you want, min order: 350",
            title: "Blue Tie",
        },
        {
            src:  "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
            description: "We sell ties, ties are available in any color you want, min order: 350",
            title: "Blue Tie",
        },
        {
            src:  "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
            description: "We sell ties, ties are available in any color you want, min order: 350",
            title: "Blue Tie",
        },
        {
            src:  "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
            description: "We sell ties, ties are available in any color you want, min order: 350",
            title: "Blue Tie",
        },
        {
            src:  "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
            description: "We sell ties, ties are available in any color you want, min order: 350",
            title: "Blue Tie",
        },
    ];

    return (
        <Box 
            sx={{
                display: 'flex',
                flexWrap: 'wrap', // Allows items to wrap to the next line if they exceed container width
                gap: 2, // Adds space between items
                justifyContent: 'center', // Centers items horizontally
            }}
        >
            {products.map(product => (
                <ProductCard
                    key={product.src}
                    title={product.title}
                    imageSrc={product.src}
                    description={product.description} // Or any other description you want to use
                />
            ))}
        </Box>
    );
}


const HomePage = () => {
    return (
        <Container sx={{ minWidth: '100%'}}>
             <Box sx={{ marginBottom: 4 }}>
                <Carousel />
            </Box>
            <ProductCards />
        </Container>
    );
}

export default HomePage;