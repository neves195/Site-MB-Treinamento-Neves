export const WHATSAPP_NUMERO = '5514991839851';

export function getLinkWhatsapp(mensagem: string): string {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const ENDERECO_EXIBIDO = 'Rua Celso Morato Leite, 384 — Jardim Cruzeiro, Agudos/SP';
export const HORARIO_EXIBIDO = 'Seg. a sex., 8h às 18h';
const ENDERECO_BUSCA = 'Rua Celso Morato Leite, 384, Jardim Cruzeiro, Agudos, SP, 17123-172';
const ENDERECO_CODIFICADO = encodeURIComponent(ENDERECO_BUSCA);

// Links oficiais do Google Maps: abrem o app ou o site, sem chave de API
export const LINK_MAPA = `https://www.google.com/maps/search/?api=1&query=${ENDERECO_CODIFICADO}`;
export const LINK_ROTA = `https://www.google.com/maps/dir/?api=1&destination=${ENDERECO_CODIFICADO}`;
// Prévia do mapa dentro da página (iframe do próprio Google Maps)
export const MAPA_PREVIA = `https://www.google.com/maps?q=${ENDERECO_CODIFICADO}&output=embed`;
