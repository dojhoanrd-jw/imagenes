import { Box, Button, useTheme } from "@mui/material";
import { estilosBoton, estilosTexto } from "./BotonMasImagenes.styles";

export default function BotonMasImagenes({ alClic }) {
  const tema = useTheme();

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Button
        variant="contained"
        onClick={alClic}
        sx={estilosBoton(tema)}
      >
        <span style={estilosTexto(tema)}>Más Imágenes</span>
      </Button>
    </Box>
  );
}
