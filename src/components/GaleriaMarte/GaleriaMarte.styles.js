export const estilosContenedor = (tema) => ({
  flexGrow: 1,
  p: 2,
  backgroundColor: tema.palette.background.default,
  minHeight: "100vh"
});

export const estilosCentrado = (tema) => ({
  display: "flex",
  justifyContent: "center",
  mt: 4,
  backgroundColor: tema.palette.background.default,
  minHeight: "100vh"
});

export const estilosTitulo = (tema) => ({
  color: tema.palette.primary.main,
  fontWeight: 700
});
