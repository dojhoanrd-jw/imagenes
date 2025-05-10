export const estilosBoton = (tema) => ({
  backgroundColor: tema.palette.secondary.main,
  color: tema.palette.secondary.contrastText,
  fontWeight: 600,
  "&:hover": {
    backgroundColor: tema.palette.primary.main
  }
});

export const estilosTexto = (tema) => ({
  color: tema.palette.accent.main
});
