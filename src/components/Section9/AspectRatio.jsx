import { motion } from "framer-motion";

export function AspectRatio({ ratio, width }) {
  return (
    <motion.div
      /**
       * By setting the layout prop, Framer Motion will animate
       * any changes to the element's layout between renders.
       */
      layout
      style={{
        /**
         * aspectRatio currently has to be passed to React as a string:
         * https://github.com/facebook/react/issues/21098
         */
        aspectRatio: `${ratio}`,
        width,
        borderRadius: 10
      }}
      className="box"
    />
  );
}
