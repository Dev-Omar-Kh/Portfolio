const Animations = {

    parentVariants: {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.3, staggerChildren : 0.3, delayChildren: 0.2}}
    },

    showListVariants: {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    },

    scaleVariants: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    },

}

export default Animations;