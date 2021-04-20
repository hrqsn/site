import { useEffect, useRef, useState } from 'react'
import Router from 'next/router'
import useInterval from 'use-interval'

export default function Cursor () {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const [followerPosition, setFollowerPosition] = useState({ x: null, y: null })
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event
      setMousePosition({ x: clientX, y: clientY })
    }
    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (Router.router.asPath === url) return
      cursorRef.current.classList.remove('is-active')
      followerRef.current.classList.remove('is-active')
    }
    Router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [Router.events])

  if (process.browser) {
    const a = document.getElementsByTagName('a')

    for (let i = 0; i < a.length; i++) {
      a[i].onmouseover = function () {
        cursorRef.current.classList.add('is-active')
        followerRef.current.classList.add('is-active')
      }
      a[i].onmouseleave = function () {
        cursorRef.current.classList.remove('is-active')
        followerRef.current.classList.remove('is-active')
      }
    }
  }

  useInterval(() => {
    setFollowerPosition({ x: lerp(followerPosition.x, mousePosition.x, 0.25), y: lerp(followerPosition.y, mousePosition.y, 0.25) })
  }, 1000/60)

  function lerp (start, end, amt) {
    return (1-amt)*start+amt*end
  }

  return (
    <>
      <div
        className='cursor'
        ref={cursorRef}
        style={{
          transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`
        }}
      />
      <div
        className='follower'
        ref={followerRef}
        style={{
          transform: `translate(calc(${followerPosition.x}px - 50%), calc(${followerPosition.y}px - 50%))`
        }}
      />
    </>
  )
}
