export const maskTaxNumber = (cpf: string) => {
    return cpf.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})(\d*)/g, "$1.$2.$3-$4");
}