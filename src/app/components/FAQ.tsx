"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Crear un tema personalizado
const theme = createTheme({
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: '#07296b', // Fondo azul oscuro para todos los acordiones
                    color: 'white',             // Color blanco para el texto del acordeón
                    '&.Mui-expanded': {
                        backgroundColor: '#07296b', // El fondo permanece igual al expandirse
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    color: 'white', // Color blanco para el texto del resumen
                },
                expandIconWrapper: {
                    color: 'white', // Color blanco para el icono de expansión
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    color: 'grey', // Color gris para los detalles al expandirse
                },
            },
        },
    },
});

export default function FAQ() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Cuales son los dias y horarios del gimnasio?
                    </AccordionSummary>
                    <AccordionDetails>
                        El gimmnasio esta abierto de lunes a viernes de 7:00 a 22:00 y los sabados de 8:00 a 12:00 del medio dia.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Hay algún entrenador que me explique la manera adecuada de como entrenar?
                    </AccordionSummary>
                    <AccordionDetails>
                        Si contamos con entrenador en ambos turnos que te enseñan la rutina.
                    </AccordionDetails>
                </Accordion><Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Hacen rutinas o dietas personalizadas?
                    </AccordionSummary>
                    <AccordionDetails>
                        Si contamos con rutinas y dietas totalmente personalizadas dependiendo el objetivo del atleta.
                    </AccordionDetails>
                </Accordion>
            </div>
        </ThemeProvider>
    );
}
