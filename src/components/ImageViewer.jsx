import React, { useState } from 'react';
import { Box, Card, CardMedia, List, ListItem, Container } from '@mui/material';

const ImageViewer = () => {
    const images = [
      "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
      "https://media.istockphoto.com/id/157180004/photo/red-necktie-on-white.jpg?s=1024x1024&w=is&k=20&c=yoc3IeUrJUghLBJrHYMpAhowsE1w4KDw56O5T4F8tPk=",
      "https://media.istockphoto.com/id/1458502280/photo/stylish-knotted-blue-striped-tie-on-white-background.jpg?s=1024x1024&w=is&k=20&c=7v6n3fG_8ChepjnfyBLMDF9Ll8bXGw89uep-JVWzhBs="
    ];
  
    const [selectedImage, setSelectedImage] = useState(images[0]); // Initialize with the first image
  
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    return (
      <Container maxWidth="lg"> {/* Wrap everything in a Container */}
        <Box display="flex" sx={{ maxWidth: '100%', mx: 'auto' }}>
          <Box sx={{ width: '20%' }}> {/* Control the width of the thumbnail list */}
            <List sx={{ padding: 0 }}>
              {images.map((image, index) => (
                <ListItem
                  key={index}
                  onClick={() => handleImageClick(image)}
                  sx={{ cursor: 'pointer', padding: 0, '&:hover': { opacity: 0.8 } }} // Change on hover
                >
                  <Card sx={{ marginBottom: 1 }}> {/* Reduce space between thumbnails */}
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Thumbnail ${index + 1}`}
                      sx={{ height: '100px', objectFit: 'cover' }}
                    />
                  </Card>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box ml={2} flex="1"> {/* Reduce space between image and thumbnail list */}
            <Card sx={{ maxWidth: '100%' }}>
              <CardMedia
                component="img"
                image={selectedImage}
                alt="Selected"
                sx={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }}
              />
            </Card>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default ImageViewer;