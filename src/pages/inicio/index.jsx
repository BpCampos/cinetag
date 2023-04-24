import React, { useEffect, useState } from "react";
import styles from "./Inicio.module.css";
import Banner from "~/componentes/Banner";
import Titulo from "~/componentes/Titulo";
import Card from "~/componentes/Card";

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/BpCampos/cinetag-api/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
