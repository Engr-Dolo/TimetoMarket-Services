import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x - 20}px, ${followerPos.current.y - 20}px)`;
      }
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursorRef.current?.classList.add("scale-[3]", "opacity-0");
      followerRef.current?.classList.add("scale-150", "border-[#D97D54]");
    };
    const onLeave = () => {
      cursorRef.current?.classList.remove("scale-[3]", "opacity-0");
      followerRef.current?.classList.remove("scale-150", "border-[#D97D54]");
    };

    window.addEventListener("mousemove", move);
    const interactables = document.querySelectorAll("a, button");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#D97D54] rounded-full pointer-events-none z-[9999] transition-all duration-150 hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[9998] transition-all duration-300 hidden md:block"
      />
    </>
  );
}
