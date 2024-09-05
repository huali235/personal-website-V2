import "./Macbook.css";
import { useRef, useEffect, useState } from "react";

function Macbook() {
  const macbookRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          console.log("Intersecting");
          entry.target.classList.add("animate");
          setHasAnimated(true);
          observer.unobserve(entry.target); // Stop observing after the first trigger
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (macbookRef.current) {
      observer.observe(macbookRef.current);
    }

    return () => {
      if (macbookRef.current) {
        observer.unobserve(macbookRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div class="container">
      <div class="macbook" ref={macbookRef}>
        <div class="macbook__topBord">
          <div class="macbook__display">
            <div class="macbook__load"></div>
          </div>
        </div>
        <div class="macbook__underBord">
          <div class="macbook__keybord">
            <div class="keybord">
              <div class="keybord__touchbar"></div>
              <ul class="keybord__keyBox">
                <li class="keybord__key key--01"></li>
                <li class="keybord__key key--02"></li>
                <li class="keybord__key key--03"></li>
                <li class="keybord__key key--04"></li>
                <li class="keybord__key key--05"></li>
                <li class="keybord__key key--06"></li>
                <li class="keybord__key key--07"></li>
                <li class="keybord__key key--08"></li>
                <li class="keybord__key key--09"></li>
                <li class="keybord__key key--10"></li>
                <li class="keybord__key key--11"></li>
                <li class="keybord__key key--12"></li>
                <li class="keybord__key key--13"></li>
              </ul>
              <ul class="keybord__keyBox--under">
                <li class="keybord__key key--14"></li>
                <li class="keybord__key key--15"></li>
                <li class="keybord__key key--16"></li>
                <li class="keybord__key key--17"></li>
                <li class="keybord__key key--18"></li>
                <li class="keybord__key key--19"></li>
                <li class="keybord__key key--20"></li>
                <li class="keybord__key key--21"></li>
                <li class="keybord__key key--22"></li>
                <li class="keybord__key key--23"></li>
                <li class="keybord__key key--24"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Macbook;
