'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const InteractiveCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.008,
      color: 0x5596e6,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      particlesMesh.rotation.y = elapsedTime * 0.1;
      
      // Animate camera
      camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.current.y * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default InteractiveCanvas;
