const commonTransition = {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1],
};

const staggerTransition = {
    staggerChildren: 0.15,
    delayChildren: 0.1,
};

const Animations = {

    parentVariants: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { ...commonTransition, ...staggerTransition },
        },
        exit: { opacity: 0, transition: { ...commonTransition, duration: 0.2 } },
    },

    parentNoStaggerVariants: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { ...commonTransition },
        },
        exit: { opacity: 0, transition: { ...commonTransition, duration: 0.2 } },
    },

    parentScaleVariants: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { ...commonTransition, ...staggerTransition },
        },
    },

    parentToLeftVariants: {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { ...commonTransition, ...staggerTransition },
        },
    },

    showListVariants: {
        hidden: { opacity: 0, height: 0 },
        visible: { 
            opacity: 1, 
            height: "auto", 
            transition: { ...commonTransition, duration: 0.3 } 
        },
    },

    scaleVariants: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { ...commonTransition } 
        },
    },

    toTopVariants: {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { ...commonTransition } 
        },
    },

    toLeftVariants: {
        hidden: { opacity: 0, x: 30 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { ...commonTransition } 
        },
    },

    toRightVariants: {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { ...commonTransition } 
        },
    },

    opacityVariants: {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { ...commonTransition } 
        },
    },

    cardToTopVariants: (index) => ({
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ...commonTransition,
                delay: index * 0.1,
            },
        },
    }),

}

export default Animations;