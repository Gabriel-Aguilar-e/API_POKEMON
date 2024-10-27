// script.js

async function buscarPokemon() {
    limpiarDetalles();
    limpiarLista();
    const nombre = document.getElementById('pokemonName').value;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        mostrarDetalles(data);
    } catch (error) {
        console.error('Hubo un problema con la solicitud de Pokémon:', error);
        alert('No se pudo encontrar el Pokémon. Inténtalo de nuevo.');
    }
}

async function buscarHabilidades() {
    limpiarDetalles();
    limpiarLista();
    const nombre = document.getElementById('pokemonName').value;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        mostrarHabilidades(data);
    } catch (error) {
        console.error('Hubo un problema con la solicitud de Pokémon:', error);
        alert('No se pudo encontrar el Pokémon. Inténtalo de nuevo.');
    }
}

async function buscarTipo() {
    limpiarDetalles();
    limpiarLista();
    const nombre = document.getElementById('pokemonName').value;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        mostrarTipos(data);
    } catch (error) {
        console.error('Hubo un problema con la solicitud de tipo de Pokémon:', error);
        alert('No se pudo encontrar el Pokémon. Inténtalo de nuevo.');
    }
}

async function obtenerPrimeros50Pokemon() {
    limpiarDetalles();
    limpiarLista();
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    mostrarLista(data.results);
}

function mostrarDetalles(data) {
    const detalles = document.getElementById('detallesPokemon');
    detalles.style.display = 'block';
    detalles.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
        <p>Altura: ${data.height/10} m</p>
        <p>Peso: ${data.weight/10} kg</p>
    `;
}

function mostrarHabilidades(data) {
    const detalles = document.getElementById('detallesPokemon');
    detalles.style.display = 'block';
    detalles.innerHTML = `
        <h2>Habilidades de ${data.name}</h2>
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
        <ul>
            ${data.abilities.map(ability => `
                <li>${ability.ability.name}</li>
            `).join('')}
        </ul>
    `;
}

function mostrarTipos(data) {
    const detalles = document.getElementById('detallesPokemon');
    detalles.style.display = 'block';
    detalles.innerHTML = `
        <h2>Tipo de ${data.name}</h2>
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
        <ul>
            ${data.types.map(type => `
                <li>${type.type.name}</li>
            `).join('')}
        </ul>
    `;
}

function mostrarLista(listaDePokemones) {
    const lista = document.getElementById('listaDePokemones');
    lista.style.display = 'block';
    lista.innerHTML = `
        <h2>Primeros 50 Pokémon</h2>
        <ol>
            ${listaDePokemones.map((pokemon, index) => `
                <li>${pokemon.name} <br><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png" alt="${pokemon.name}"></li>
            `).join('')}
        </ol>
    `;
}

function limpiarDetalles() {
    const detalles = document.getElementById('detallesPokemon');
    detalles.style.display = 'none';
    detalles.innerHTML = '';
}

function limpiarLista() {
    const lista = document.getElementById('listaDePokemones');
    lista.style.display = 'none';
    lista.innerHTML = '';
}
