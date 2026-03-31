import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const stateRef = useRef({
    pos: { x: 0, y: 0 },
    target: { x: 0, y: 0 },
    points: [],
    lastCapture: 0,
  });

  const TRAIL_LIFETIME = 900;
  const CAPTURE_GAP = 15;

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const container = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    const s = stateRef.current;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      s.target.x = e.clientX - rect.left;
      s.target.y = e.clientY - rect.top;
    }
    container.addEventListener("mousemove", onMouseMove);

    function tick() {
      const now = performance.now();
      const w = container.clientWidth;
      const h = container.clientHeight;

      // GSAP smoothly lerps pos toward target each frame
      gsap.to(s.pos, {
        x: s.target.x,
        y: s.target.y,
        duration: 0.12,
        ease: "power2.out",
        overwrite: true,
      });

      if (now - s.lastCapture > CAPTURE_GAP) {
        s.lastCapture = now;
        s.points.push({ x: s.pos.x, y: s.pos.y, time: now });
      }

      while (s.points.length && now - s.points[0].time > TRAIL_LIFETIME)
        s.points.shift();

      ctx.clearRect(0, 0, w, h);

      const pts = s.points;
      if (pts.length >= 2) {
        for (let i = 1; i < pts.length; i++) {
          const p1 = pts[i - 1];
          const p2 = pts[i];
          const age = now - p1.time;
          const alpha = 1 - age / TRAIL_LIFETIME;
          ctx.lineWidth = alpha * 2.5;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Snap cursor dot to raw target (no lag)
      gsap.set(cursor, {
        x: s.target.x,
        y: s.target.y,
        xPercent: -50,
        yPercent: -50,
      });
    }

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <div  className="max-[1024px]:hidden" style={{ position: "fixed", top: 0, left: 0, zIndex: 10, width: "100%", height: "100vh", cursor: "none", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div
        ref={cursorRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 5,
          height: 5,
          background: "#10B981",
          borderRadius: "50%",
          pointerEvents: "none",
        //   mixBlendMode: "difference",
        }}
      />
    </div>
  );
}