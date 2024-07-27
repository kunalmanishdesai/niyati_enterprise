import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { MobileStepper, useTheme, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";

const Carousel = () => {
    const images = [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Bird',
            imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Bali, Indonesia',
            imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
        },
        {
            label: 'Goč, Serbia',
            imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        },
    ];

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const theme = useTheme();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <Box sx={{ maxWidth:'90%', flexGrow: 1, position: 'relative',mx:'auto', mt:2 }}>
            <Box
                sx={{
                    height: 400,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 400,
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%',
                    }}
                    src={images[activeStep].imgPath}
                    alt={images[activeStep].label}
                />
                <IconButton
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-45%)',
                        color: theme.palette.secondary.main,
                    }}
                    onClick={handleBack}
                    disabled={activeStep === 0}
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: theme.palette.secondary.main,
                    }}
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={null}
                    backButton={null}
                />
            </Box>
        </Box>
    );
};

export default Carousel;