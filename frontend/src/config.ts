export const WHATSAPP_NUMERO = '5514991839851';

export function getLinkWhatsapp(mensagem: string): string {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}