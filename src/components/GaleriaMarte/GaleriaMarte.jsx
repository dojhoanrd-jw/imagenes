import { useEffect, useState, useMemo } from "react";
import {
  Typography,
  CircularProgress,
  Box,
  useTheme,
} from "@mui/material";
import CuadriculaImagenes from "../CuadriculaImagenes/CuadriculaImagenes";
import { estilosContenedor, estilosCentrado, estilosTitulo } from "./GaleriaMarte.styles";

const CLAVE_API = import.meta.env.VITE_NASA_API_KEY;
if (!CLAVE_API) {
  throw new Error("Falta la clave de API de NASA.");
}
const URL_API = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${CLAVE_API}`;
const TAM_PAGINA = 12;

export default function GaleriaMarte() {
  const tema = useTheme();
  const [todasImagenes, setTodasImagenes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [idsEliminadas, setIdsEliminadas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let estaMontado = true;
    setCargando(true);
    setError(null);

    fetch(URL_API)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar imágenes");
        return res.json();
      })
      .then((data) => {
        if (estaMontado) {
          setTodasImagenes(data.photos || []);
          setCargando(false);
        }
      })
      .catch((err) => {
        if (estaMontado) {
          setError(
            err?.message || "No se pudieron cargar las imágenes. Intenta de nuevo más tarde."
          );
          setCargando(false);
        }
      });

    return () => {
      estaMontado = false;
    };
  }, [URL_API]);

  const imagenesVisibles = useMemo(() => {
    const filtradas = todasImagenes.filter(img => !idsEliminadas.includes(img.id));
    return filtradas.slice(0, pagina * TAM_PAGINA);
  }, [todasImagenes, idsEliminadas, pagina]);

  const mostrarMas = imagenesVisibles.length < todasImagenes.filter(img => !idsEliminadas.includes(img.id)).length;

  if (cargando) {
    return (
      <Box sx={estilosCentrado(tema)}>
        <CircularProgress sx={{ color: tema.palette.accent.main }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={estilosCentrado(tema)}>
        <Typography color={tema.palette.accent.main}>{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={estilosContenedor(tema)}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={estilosTitulo(tema)}
      >
        Galería
      </Typography>

      <CuadriculaImagenes
        imagenes={imagenesVisibles}
        manejarEliminarImagen={id => setIdsEliminadas(prev => [...prev, id])}
        manejarMasImagenes={() => setPagina(prev => prev + 1)}
        mostrarMas={mostrarMas}
      />

      {imagenesVisibles.length === 0 && (
        <Typography
          align="center"
          mt={4}
          sx={{ color: tema.palette.text.secondary }}
        >
          No hay imágenes para mostrar.
        </Typography>
      )}
    </Box>
  );
}
