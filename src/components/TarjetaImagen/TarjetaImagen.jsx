import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  estilosCard,
  estilosMedia,
  estilosTitulo,
  estilosFecha,
  estilosIcono,
} from "./TarjetaImagen.styles";

function TarjetaImagen({ imagen, alEliminar }) {
  const tema = useTheme();

  return (
    <Card sx={estilosCard(tema)}>
      <CardMedia
        component="img"
        height="180"
        image={imagen.img_src}
        alt={`Mars Rover - ${imagen.id}`}
        loading="lazy"
        sx={estilosMedia(tema)}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={estilosTitulo(tema)}>
          {imagen.camera.full_name}
        </Typography>
        <Typography variant="body2" sx={estilosFecha(tema)}>
          Earth date: {imagen.earth_date}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <IconButton
          aria-label="eliminar"
          onClick={alEliminar}
          sx={estilosIcono(tema)}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default React.memo(TarjetaImagen);
