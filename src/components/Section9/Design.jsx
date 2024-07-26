"use client";

import { useState } from "react";
import "./design.css";
import { AspectRatio } from "./AspectRatio";
import { useDebounce } from "use-debounce";

/**
 * Animating aspoe
 *
 * aspect-ratio is still unsupported in Webkit (of course)
 */
export default function Design() {
  const [aspectRatio, setAspectRatio] = useState(1);
  const [width, setWidth] = useState(100);

  // Debouncing will prevent the size changing immediately as you type
  const [debouncedAspectRatio] = useDebounce(aspectRatio, debounceDuration);
  const [debouncedWidth] = useDebounce(width, debounceDuration);

  return (
    <div className={" w-full h-[23vh] md:h-[25vh] lg:h-[44vh] "}>
      <div className="  h-full relative ">
        <div className={"grid place-items-center h-full w-full"}>
          <AspectRatio
            ratio={debouncedAspectRatio}
            width={parseFloat(debouncedWidth)}
          />
        </div>
        <div className=" absolute left-6 bottom-2 flex items-start justify-around gap-2">
          <div>
            <label className={" label-design "} htmlFor="aspect-ratio">Aspect ratio</label>
            <input
            className={" px-5 py-3 rounded-3xl w-24"}
              id="aspect-ratio"
              name="aspect-ratio"
              type="number"
              value={aspectRatio}
              onChange={handleInput(setAspectRatio)}
            />
          </div>
          <div>
            <label className={" label-design "} htmlFor="width">Width</label>
            <input
            className={" px-5 py-3 rounded-3xl w-24"}
              id="width"
              name="width"
              type="number"
              value={width}
              onChange={handleInput(setWidth)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const handleInput = (callback) => (e) => callback(e.currentTarget.value);

const debounceDuration = 200;
