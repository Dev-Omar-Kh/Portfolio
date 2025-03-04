const commonTransition = {
    duration: 0.3,
    ease: "easeOut",
};

const staggerTransition = {
    staggerChildren: 0.3,
    delayChildren: 0.2,
};

const Animations = {

    parentVariants: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { ...commonTransition, ...staggerTransition },
        },
        exit: { opacity: 0, transition: commonTransition },
    },

    parentNoStaggerVariants: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { ...commonTransition},
        },
        exit: { opacity: 0, transition: commonTransition },
    },

    parentScaleVariants: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { ...commonTransition, ...staggerTransition },
        },
    },

    parentToLeftVariants: {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { ...commonTransition, ...staggerTransition },
        },
    },

    showListVariants: {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: commonTransition },
    },

    scaleVariants: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: commonTransition },
    },

    toTopVariants: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: commonTransition },
    },

    toLeftVariants: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: commonTransition },
    },

    toRightVariants: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: commonTransition },
    },

    cardToTopVariants: (index) => ({
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ...commonTransition,
                delay: index * 0.2,
            },
        },
    }),

}

export default Animations;