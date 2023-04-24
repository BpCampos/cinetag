import React, { useEffect, useState } from "react";
import styles from "./Player.module.css";
import Banner from "~/componentes/Banner";
import Titulo from "~/componentes/Titulo";
import { useParams } from "react-router";
import videos from "~/json/db.json";
import NaoEncontrada from "../NaoEncontrada";

export default function Player() {
  const [video, setVideo] = useState([]);
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/BpCampos/cinetag-api/videos?id=${parametros.id}`)
      .then((res) => res.json())
      .then((data) => {
        setVideo(...data);
      });
  }, []);

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </section>
    </>
  );
}
