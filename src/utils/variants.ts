import { cubicBezier } from "motion";

const ease = cubicBezier(0.25, 0.46, 0.45, 0.94)

// child variants for fade up animation
export const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

// parent container to stagger children
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

// whole section reveal on scroll
export const sectionReveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
}