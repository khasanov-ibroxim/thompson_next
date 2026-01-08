"use client"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                    >
                        {/* Main loader container */}
                        <div className="relative flex flex-col items-center gap-8">
                            {/* Animated logo/brand element */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                {/* Outer rotating ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 w-24 h-24 rounded-full border-4 border-transparent border-t-primary"
                                />

                                {/* Middle pulsing ring */}
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-2 rounded-full border-2 border-primary/30"
                                />

                                {/* Center icon */}
                                <div className="relative w-24 h-24 flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotateY: [0, 180, 360]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="text-5xl font-bold text-primary"
                                    >
                                        T
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Loading text with animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col items-center gap-3"
                            >
                                <div className="flex items-center gap-2">
                                    <motion.span
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                                        className="w-2 h-2 rounded-full bg-primary"
                                    />
                                    <motion.span
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                        className="w-2 h-2 rounded-full bg-primary"
                                    />
                                    <motion.span
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                                        className="w-2 h-2 rounded-full bg-primary"
                                    />
                                </div>

                                <motion.p
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="text-sm text-muted-foreground font-medium tracking-wider"
                                >
                                    THOMPSON
                                </motion.p>
                            </motion.div>

                            {/* Progress bar */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary w-48 rounded-full"
                            />
                        </div>

                        {/* Background decorative elements */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page content with fade transition */}
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;