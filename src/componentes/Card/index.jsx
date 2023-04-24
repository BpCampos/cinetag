import React from "react";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import { useFavoritoContext } from "~/contexts/Favoritos";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const eFavorito = favorito.some((fav) => fav.id === id);
  const icone = !eFavorito ? iconeFavoritar : iconeDesfavoritar;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h3>{titulo}</h3>
      </Link>
      <img
        src={icone}
        alt="Favortiar filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}
