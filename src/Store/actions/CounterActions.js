
export const uploadFiles = (event) => {
    return {
        type: 'uploadFiles',
        payload:event
    };
};

export const decrement = () => {
    return {
        type: 'decrement',
    };
};

export const hangeInput=(e)=>{
    return {
        type: 'hangeInput',
        payload:e
    };
}