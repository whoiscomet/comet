'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const InteractiveCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const cometState = useRef<{
    curve: THREE.CubicBezierCurve3 | null;
    progress: number;
    speed: number;
  }>({
    curve: null,
    progress: 0,
    speed: 0,
  });

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 7000;
    const posArray = new Float32Array(particlesCount * 3);
    const particleVelocities = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        posArray[i3] = (Math.random() - 0.5) * 20;
        posArray[i3 + 1] = (Math.random() - 0.5) * 20;
        posArray[i3 + 2] = (Math.random() - 0.5) * 20;
        particleVelocities[i] = Math.random() * 0.02 + 0.01;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x5596e6,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.7,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Comet
    const cometGroup = new THREE.Group();
    scene.add(cometGroup);

    // Comet Head Glow
    const glowGeometry = new THREE.SphereGeometry(0.3, 32, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x77aaff,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
    });
    const cometGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    cometGroup.add(cometGlow);

    // Comet Head Core
    const headGeometry = new THREE.SphereGeometry(0.1, 32, 16);
    const headMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cometHead = new THREE.Mesh(headGeometry, headMaterial);
    cometGroup.add(cometHead);
    
    // Comet Tail
    const tailLength = 150;
    const tailParticlesCount = tailLength;
    const tailGeometry = new THREE.BufferGeometry();
    const tailPositions = new Float32Array(tailParticlesCount * 3);
    const tailColors = new Float32Array(tailParticlesCount * 3);
    
    tailGeometry.setAttribute('position', new THREE.BufferAttribute(tailPositions, 3));
    tailGeometry.setAttribute('color', new THREE.BufferAttribute(tailColors, 3));
    
    const tailMaterial = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
    });
    const cometTail = new THREE.Points(tailGeometry, tailMaterial);
    cometGroup.add(cometTail);


    let cometPosition = new THREE.Vector3();
    const cometPath: THREE.Vector3[] = [];

    const resetComet = () => {
      // Comet starts in the distance and moves towards the camera
      const startX = (Math.random() - 0.5) * 20;
      const startY = (Math.random() - 0.5) * 20;
      const startZ = -30;

      // It will end closer to the camera
      const endX = (Math.random() - 0.5) * 10;
      const endY = (Math.random() - 0.5) * 10;
      const endZ = 8; // Camera is at 10, so this is very close

      const v0 = new THREE.Vector3(startX, startY, startZ);
      const v3 = new THREE.Vector3(endX, endY, endZ);

      // Control points to make the path curved
      const midZ = (startZ + endZ) / 2;
      const controlPointOffset = 15;

      const v1 = new THREE.Vector3(
        (startX + endX) / 2 + (Math.random() - 0.5) * controlPointOffset,
        (startY + endY) / 2 + (Math.random() - 0.5) * controlPointOffset,
        midZ + (Math.random() - 0.5) * 10
      );
      const v2 = new THREE.Vector3(
        (startX + endX) / 2 + (Math.random() - 0.5) * controlPointOffset,
        (startY + endY) / 2 + (Math.random() - 0.5) * controlPointOffset,
        midZ + (Math.random() - 0.5) * 10
      );
      
      cometState.current.curve = new THREE.CubicBezierCurve3(v0, v1, v2, v3);
      cometState.current.progress = 0;
      cometState.current.speed = 0.0025 + Math.random() * 0.001;
      cometPath.length = 0;
    };
    resetComet();


    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX / window.innerWidth;
      mouse.current.y = event.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3 + 2] += particleVelocities[i];

        if (positions[i3 + 2] > 10) {
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 20;
            positions[i3 + 2] = -10;
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      
      // Animate comet
      if (cometState.current.curve) {
        cometState.current.progress += cometState.current.speed;
        if (cometState.current.progress >= 1) {
          resetComet();
        } else {
          cometState.current.curve.getPoint(cometState.current.progress, cometPosition);
          cometGroup.position.copy(cometPosition);
        }
      }

      cometPath.unshift(cometGroup.position.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        0
      )));

      if (cometPath.length > tailLength) {
        cometPath.pop();
      }

      const tailPosAttr = cometTail.geometry.attributes.position as THREE.BufferAttribute;
      const tailColorAttr = cometTail.geometry.attributes.color as THREE.BufferAttribute;
      const baseColor = new THREE.Color(0x77aaff);

      for (let i = 0; i < tailParticlesCount; i++) {
        const point = cometPath[i];
        if (point) {
          tailPosAttr.setXYZ(i, point.x - cometGroup.position.x, point.y - cometGroup.position.y, point.z - cometGroup.position.z);
          
          const fade = 1.0 - (i / tailLength);
          const fadedColor = baseColor.clone().multiplyScalar(fade * fade);
          
          tailColorAttr.setXYZ(i, fadedColor.r, fadedColor.g, fadedColor.b);
        } else {
          tailPosAttr.setXYZ(i, 0, 0, -10000); // Hide unused particles
        }
      }
      tailPosAttr.needsUpdate = true;
      tailColorAttr.needsUpdate = true;
      
      particlesMesh.rotation.y = mouse.current.x * 0.2;
      particlesMesh.rotation.x = -mouse.current.y * 0.2;
      
      camera.position.x += (mouse.current.x * 0.2 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.current.y * 0.2 - camera.position.y) * 0.02;
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      renderer.render(scene, camera);
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
