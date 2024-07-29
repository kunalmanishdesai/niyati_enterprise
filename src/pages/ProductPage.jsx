import React from 'react';
import { Box } from '@mui/material';
import ImageViewer from 'components/ImageViewer';
import ProductDetails from 'components/productDetails';

const ProductPage = () => {
  return (
    <Box> {/* Use full width and add padding */}
      <Box display="flex" alignItems="flex-start">
        <Box flex="1"> {/* Adjust width for ImageViewer */}
          <ImageViewer />
        </Box>
        <Box flex="2"> {/* Give more space to ProductDetails */}
          <ProductDetails />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;