import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Router from './routes/Router.jsx'
import { atom } from 'jotai'

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);

export const selectedEffectAtom = atom("default");


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={Router} />
  </StrictMode>,
)
