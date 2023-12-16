type IconPositionType = {
    position: 'absolute';
    top: string;
    left: string;
    transform: string;
};

export const iconPosition = (top: string, left: string, transX: string): IconPositionType => {
    return {
        position: 'absolute',
        top,
        left,
        transform: `translateX(${transX})`,
    };
};
