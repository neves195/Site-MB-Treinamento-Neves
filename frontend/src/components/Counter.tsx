import { motion, useSpring, useTransform, type MotionValue } from 'motion/react';
import { useEffect } from 'react';
import './Counter.css';

interface RoldanaProps {
  mv: MotionValue<number>;
  numero: number;
  altura: number;
}

// Uma "roldana" com os dígitos 0-9 empilhados; o motion value diz qual deles
// fica visível (efeito de odômetro/relógio de rua girando).
function Roldana({ mv, numero, altura }: RoldanaProps) {
  const y = useTransform(mv, (latest) => {
    const valorAtual = latest % 10;
    let deslocamento = (10 + numero - valorAtual) % 10;
    let posicao = deslocamento * altura;
    if (deslocamento > 5) posicao -= 10 * altura;
    return posicao;
  });

  return (
    <motion.span className="counter-number" style={{ y }}>
      {numero}
    </motion.span>
  );
}

// Arredonda pra baixo evitando erro de ponto flutuante (ex.: 4.999999999 virar 4 em vez de 5)
function normalizarQuaseInteiro(num: number): number {
  const arredondado = Math.round(num);
  const tolerancia = 1e-9 * Math.max(1, Math.abs(num));
  return Math.abs(num - arredondado) < tolerancia ? arredondado : num;
}

// Valor "alvo" da casa decimal — não é o dígito final (0-9), é o número inteiro
// que sobra ao dividir pela casa (ex.: 480 na casa das dezenas = 48). É esse
// valor maior que a mola persegue, dando o efeito de girar várias voltas.
function valorAlvoNaCasa(valor: number, casa: number): number {
  return Math.floor(normalizarQuaseInteiro(valor / casa));
}

interface CasaProps {
  casa: number;
  valor: number;
  altura: number;
  ativo: boolean;
}

function Casa({ casa, valor, altura, ativo }: CasaProps) {
  const alvo = valorAlvoNaCasa(valor, casa);
  // Começa em 0 (não já no alvo) — senão a mola nasce parada no valor final e não anima nada.
  // stiffness/damping mais baixos = mola "mole", leva ~1.5s pra assentar (padrão rápido
  // demais faria o número quase "pular" direto pro valor final, sem dar pra ver contando).
  const valorAnimado = useSpring(0, { stiffness: 60, damping: 15 });

  useEffect(() => {
    // Só começa a contar quando "ativo" vira true (ex.: seção entrou na tela) —
    // sem isso, a animação dispara no carregamento da página e pode já ter
    // terminado antes da pessoa rolar até essa seção.
    if (ativo) {
      valorAnimado.set(alvo);
    }
  }, [valorAnimado, alvo, ativo]);

  return (
    <span className="counter-digit" style={{ height: altura }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Roldana key={i} mv={valorAnimado} numero={i} altura={altura} />
      ))}
    </span>
  );
}

interface CounterProps {
  /** Número a exibir (só a parte numérica — sem separador de milhar) */
  valor: number;
  fontSize?: number;
  cor?: string;
  peso?: number | string;
  gap?: number;
  /** Quando começa a contar. Default true = anima assim que montar (sem gatilho de scroll). */
  ativo?: boolean;
}

export default function Counter({ valor, fontSize = 42, cor = 'inherit', peso = 800, gap = 0, ativo = true }: CounterProps) {
  const altura = fontSize;
  // Uma casa por dígito do número: 480 -> [100, 10, 1]
  const casas = [...String(valor)].map((_, i, arr) => 10 ** (arr.length - i - 1));

  return (
    <span className="counter-container">
      <span className="counter-counter" style={{ fontSize, gap, color: cor, fontWeight: peso }}>
        {casas.map((casa) => (
          <Casa key={casa} casa={casa} valor={valor} altura={altura} ativo={ativo} />
        ))}
      </span>
      <span className="gradient-container">
        <span className="top-gradient" />
        <span className="bottom-gradient" />
      </span>
    </span>
  );
}
