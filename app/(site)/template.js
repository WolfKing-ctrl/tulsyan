'use client';
import { motion } from 'framer-motion';
export default function T({ children }) { return <motion.main initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: [.2, .7, .2, 1] }}>{children}</motion.main>; }
