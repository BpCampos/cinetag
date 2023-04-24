import React from "react";
import Cabecalho from "~/componentes/Cabecalho";
import FavoritosProvider from "~/contexts/Favoritos";
import Container from "~/componentes/Container";
import { Outlet } from "react-router";
import Rodape from "~/componentes/Rodape";

export default function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}
