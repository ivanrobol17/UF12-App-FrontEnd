export interface AllPazienti {
    idPaziente: number,
    nomePaziente: string,
    cognomePaziente: string,
    CodiceColore: TCodColore,
    Stato: String
    IdMedico: number,
    Medico: String
}
export type TCodColore = "rosso" | "arancio" | "blu" |  "verde" | "bianco"
