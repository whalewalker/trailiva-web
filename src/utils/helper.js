export const extractTwoCharacter: string = (str: string) => {
    return str.charAt(0).concat(str.charAt(1));
}

export const extractErrorMessage: string = (error: any) => {
    return (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
}