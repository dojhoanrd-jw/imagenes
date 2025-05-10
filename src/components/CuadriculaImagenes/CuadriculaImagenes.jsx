import { Grid } from "@mui/material";
import TarjetaImagen from "../TarjetaImagen/TarjetaImagen";
import BotonMasImagenes from "../BotonMasImagenes/BotonMasImagenes";
import { estilosGrid } from "./CuadriculaImagenes.styles";

export default function CuadriculaImagenes({
  imagenes,
  manejarEliminarImagen,
  manejarMasImagenes,
  mostrarMas
}) {
  return (
    <>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={estilosGrid}
      >
        {imagenes &&
          imagenes.map((img) => (
            <Grid key={img.id}>
              <TarjetaImagen
                imagen={img}
                alEliminar={() => manejarEliminarImagen(img.id)}
              />
            </Grid>
          ))}
      </Grid>
      {mostrarMas && <BotonMasImagenes alClic={manejarMasImagenes} />}
    </>
  );
}
