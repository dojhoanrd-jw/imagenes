export const estilosCard = (tema) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: tema.palette.background.paper,
  border: `1px solid ${tema.palette.background.default}`,
  boxShadow: "0 2px 8px rgba(55,65,81,0.05)"
});

export const estilosMedia = (tema) => ({
  objectFit: "cover",
  backgroundColor: tema.palette.background.default
});

export const estilosTitulo = (tema) => ({
  color: tema.palette.text.primary,
  fontWeight: 600
});

export const estilosFecha = (tema) => ({
  color: tema.palette.text.secondary
});

export const estilosIcono = (tema) => ({
  color: tema.palette.accent.main,
  "&:hover": { backgroundColor: "#E5EAF1" }
});
