import { Billboard, Html, Plane, useHelper } from '@react-three/drei'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { PlaneHelper } from 'three'

export const TextPlane: React.FC<MeshProps> = (props) => {
  
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
      <Html transform fullscreen>
      <main>
      <header>
        <h1>Timothy Charlton</h1>
        <p>Welcome to my website!</p>
        <p><a href="https://github.com/tcharlton321">github</a></p>
      </header>
      <blockquote>
        <p>This is a testing ground of various projects as I further my working knowledge of web development</p>
      </blockquote>
      <section>
        <h2>Apps</h2>
        <p>
        <a href="https://www.todo.charware.xyz">Todo</a><br/>
        <a href="https://github.com/tcharlton321/todo-list">github</a>
        </p>
        <p>
        <a href="https://quickness.charware.xyz">Quickness</a><br/>
        <a href="https://github.com/tcharlton321/quickness">github</a>
        </p>
        <p>
        <a href="https://www.pokedex.charware.xyz">Pokedex</a><br/>
        <a href="https://github.com/tcharlton321/pokedex">github</a>
        </p>
        <p>
        <a href="https://www.homepage.charware.xyz">Homepage (This page you're on)</a><br/>
        <a href="https://github.com/tcharlton321/homepage">github</a>
        </p>
      </section>
      <blockquote>
        <p>Thanks for visiting</p>
      </blockquote>
      </main>
      </Html>
  )
}