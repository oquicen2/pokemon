const express = require('express')
const os = require("os");
const app = express()
const port = 80


const pokeneas = [
    {
      id: 1,
      nombre: "Charmeleon",
      altura: "1,1 m",
      habilidad: "Mar Llamas",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png",
      fraseFilosofica: "Al agitar su ardiente cola, eleva poco a poco la temperatura a su alrededor para sofocar a sus rivales."
    },
    {
      id: 2,
      nombre: "Bulbasaur",
      altura: "0,7 m",
      habilidad: "Espesura",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
      fraseFilosofica: "Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo."
    },
    {
      id: 3,
      nombre: "Squirtler",
      altura: "0.5 m",
      habilidad: "Torrente",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
      fraseFilosofica: "Tras nacer, se le hincha el lomo y se le forma un caparazón. Escupe poderosa espuma por la boca."
    },
    {
      id: 4,
      nombre: "Pikachu",
      altura: "0,4 m",
      habilidad: "Elec. Estática",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
      fraseFilosofica: "Cuando varios de estos Pokémon se juntan, su energía puede causar fuertes tormentas."
    },
    {
      id: 5,
      nombre: "Raichu",
      altura: "0,8 m",
      habilidad: "Elec. Estática",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png",
      fraseFilosofica: "Su cola actúa como toma de tierra y descarga electricidad al suelo, lo que le protege de los calambrazos."
    },
    {
      id: 6,
      nombre: "Nidoqueen",
      altura: "1,3 m",
      habilidad: "Punto Tóxico",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/031.png",
      fraseFilosofica: "Su defensa destaca sobre la capacidad ofensiva. Usa las escamas del cuerpo como una coraza para proteger a su prole de cualquier ataque."
    },
    {
      id: 7,
      nombre: "Mewtwo ",
      altura: "2,0 m",
      habilidad: "Presión",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png",
      fraseFilosofica: "Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y carácter son muy diferentes"
    },
    {
      id: 8,
      nombre: "Flareon ",
      altura: "0,9 m",
      habilidad: "Absorbe Fuego",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/136.png",
      fraseFilosofica: "Calienta el aire que inhala en su saca de fuego y lo expulsa a 1700ºC."
    },
    {
      id: 9,
      nombre: "Magmar ",
      altura: "1,3 m",
      habilidad: "Cuerpo Llama",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/126.png",
      fraseFilosofica: "Fue descubierto junto al cráter de un volcán. Escupe llamaradas y su temperatura corporal alcanza los 1200ºC."
    },
    {
      id: 10,
      nombre: "Onix ",
      altura: "8,8 m",
      habilidad: "Cabeza Roca",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/095.png",
      fraseFilosofica: "Al abrirse paso bajo tierra, va absorbiendo todo lo que encuentra. Eso hace que su cuerpo sea así de sólido."
    },
    {
      id: 11,
      nombre: "Arcanine ",
      altura: "1,9 m",
      habilidad: "Intimidación",
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png",
      fraseFilosofica: "Cuenta un antiguo pergamino que la gente se quedaba fascinada al verlo correr por las praderas."
    }
  ];

// Ruta que devuelve HTML con imagen y frase filosófica de un Pokenea
app.get('/', (req, res) => {
  const number = Math.floor(Math.random() * pokeneas.length);
  const selectedPokenea = pokeneas[number];
  const containerId = os.hostname(); // Obtiene el ID del contenedor

  res.send(`
    <div style="max-width: 400px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; font-family: Arial, sans-serif; text-align: center;">
      <h1 style="color: #2a9d8f;">${selectedPokenea.nombre}</h1>
      <p><strong>ID:</strong> ${selectedPokenea.id}</p>
      <p><strong>Altura:</strong> ${selectedPokenea.altura}</p>
      <p><strong>Habilidad:</strong> ${selectedPokenea.habilidad}</p>
      <img src="${selectedPokenea.imagen}" alt="${selectedPokenea.nombre}" style="width: 150px; margin: 10px 0;">
      <p style="font-style: italic; color: #555;">"${selectedPokenea.fraseFilosofica}"</p>
      <p style="margin-top: 20px; font-size: 0.9em; color: #888;">ID del Contenedor: ${containerId}</p>
    </div>
  `);
});

// Ruta que devuelve JSON con información aleatoria de un Pokenea
app.get('/api/pokenea', (req, res) => {
  const number = Math.floor(Math.random() * pokeneas.length);
  const selectedPokenea = pokeneas[number];
  const containerId = os.hostname(); // Obtiene el ID del contenedor

  res.json({
    id: selectedPokenea.id,
    nombre: selectedPokenea.nombre,
    altura: selectedPokenea.altura,
    habilidad: selectedPokenea.habilidad,
    containerId: containerId
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});