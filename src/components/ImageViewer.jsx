import React, { useState } from 'react';
import { Box, Card, CardMedia, List, ListItem } from '@mui/material';

const ImageViewer = () => {
  const images = [
    "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
    "https://media.istockphoto.com/id/157180004/photo/red-necktie-on-white.jpg?s=1024x1024&w=is&k=20&c=yoc3IeUrJUghLBJrHYMpAhowsE1w4KDw56O5T4F8tPk=",
    "https://media.istockphoto.com/id/1458502280/photo/stylish-knotted-blue-striped-tie-on-white-background.jpg?s=1024x1024&w=is&k=20&c=7v6n3fG_8ChepjnfyBLMDF9Ll8bXGw89uep-JVWzhBs=",
    "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
    "https://media.istockphoto.com/id/157180004/photo/red-necktie-on-white.jpg?s=1024x1024&w=is&k=20&c=yoc3IeUrJUghLBJrHYMpAhowsE1w4KDw56O5T4F8tPk=",
    "https://media.istockphoto.com/id/1458502280/photo/stylish-knotted-blue-striped-tie-on-white-background.jpg?s=1024x1024&w=is&k=20&c=7v6n3fG_8ChepjnfyBLMDF9Ll8bXGw89uep-JVWzhBs=",
    "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
    "https://media.istockphoto.com/id/157180004/photo/red-necktie-on-white.jpg?s=1024x1024&w=is&k=20&c=yoc3IeUrJUghLBJrHYMpAhowsE1w4KDw56O5T4F8tPk=",
    "https://media.istockphoto.com/id/1458502280/photo/stylish-knotted-blue-striped-tie-on-white-background.jpg?s=1024x1024&w=is&k=20&c=7v6n3fG_8ChepjnfyBLMDF9Ll8bXGw89uep-JVWzhBs=",
    "https://media.istockphoto.com/id/866706990/photo/blue-tie.jpg?s=1024x1024&w=is&k=20&c=Y5qzf_DSwBZVO5GJ2XoFbiJ473WIL4OZ5zXRymtkb1s=",
    "https://media.istockphoto.com/id/157180004/photo/red-necktie-on-white.jpg?s=1024x1024&w=is&k=20&c=yoc3IeUrJUghLBJrHYMpAhowsE1w4KDw56O5T4F8tPk=",
    "https://media.istockphoto.com/id/1458502280/photo/stylish-knotted-blue-striped-tie-on-white-background.jpg?s=1024x1024&w=is&k=20&c=7v6n3fG_8ChepjnfyBLMDF9Ll8bXGw89uep-JVWzhBs=",
    
    // Add more images if needed
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Box display="flex" sx={{mt: 2}}>
      <Box sx={{ 
        width: '20%', 
        height: '600px', 
        overflowY: 'auto', 
        '&::-webkit-scrollbar': {
          width: '0px',
          background: 'transparent'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>
        <List>
          {images.map((image, index) => (
            <ListItem
              key={index}
              onClick={() => handleImageClick(image)}
              sx={{ cursor: 'pointer', padding: 0, '&:hover': { opacity: 0.8 } }}
            >
              <Card sx={{ marginBottom: 2 }}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Thumbnail ${index + 1}`}
                  sx={{ height: '80px', objectFit: 'cover' }}
                />
              </Card>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box flex="1">
        <Card>
          <CardMedia
            component="img"
            image={selectedImage}
            alt="Selected"
            sx={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default ImageViewer;