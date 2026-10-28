"use client";

import { useState, type FormEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState("ana.souza@nexo.com.br");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Login demonstrativo: a autenticação será implementada posteriormente.",
    );
  }

  return (
    <main className="grid min-h-screen grid-cols-1 bg-white lg:grid-cols-2">
      {/* Painel esquerdo */}
      <section className="flex min-h-screen flex-col bg-[#1b2633] px-6 py-7 text-white sm:px-10 lg:px-[9%]">
        <a
          href="/"
          className="flex w-fit items-center gap-2.5 text-lg font-bold"
        >
          <span className="text-3xl font-black italic">N</span>
          <span>Nexo Assist</span>
        </a>

        <div className="my-auto py-12">
          <p className="text-sm text-gray-400">Service desk de TI da Nexo</p>

          <h1 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Seu problema de TI, resolvido em uma conversa.
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-6 text-gray-300 sm:text-base">
            Descreva o que está acontecendo. O assistente consulta seus
            chamados, busca na central de ajuda e chama um analista quando
            precisa.
          </p>

          {/* Prévia da conversa */}
          <div className="mx-auto mt-9 max-w-lg rounded-2xl border border-gray-700 bg-[#252f3d] p-4">
            <div className="ml-auto w-fit max-w-full rounded-xl rounded-br-sm bg-white px-3.5 py-3 text-sm leading-5 text-gray-800">
              Meu notebook não conecta na VPN. Erro 809.
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-400">
              <strong className="text-gray-200">Nexo Assist</strong>
              <span>consultou seus chamados · criou um chamado</span>
            </div>

            <div className="mt-2 max-w-sm rounded-xl rounded-tl-sm bg-[#35404e] px-3.5 py-3 text-sm leading-6 text-gray-100">
              Pronto: abri o chamado com prioridade alta. Um analista fala com
              você em até 4 h úteis.
            </div>

            <div className="mt-2 flex w-fit max-w-full flex-wrap items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs text-gray-600">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <strong className="text-gray-800">INC-20517</strong>
              <span>Rede e VPN · Alta · em até 4 h</span>
            </div>
          </div>
        </div>

        {/* Indicadores ilustrativos */}
        <div className="grid grid-cols-3 border-t border-gray-700 pt-5">
          <div className="border-r border-gray-700 pr-2">
            <strong className="font-serif text-3xl font-normal">8 s</strong>
            <p className="mt-2 text-xs leading-5 text-gray-400">
              primeira resposta, em média
            </p>
          </div>

          <div className="border-r border-gray-700 px-3">
            <strong className="font-serif text-3xl font-normal">72%</strong>
            <p className="mt-2 text-xs leading-5 text-gray-400">
              resolvidos sem fila
            </p>
          </div>

          <div className="pl-3">
            <strong className="flex items-center gap-2 font-serif text-3xl font-normal">
              6 <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </strong>
            <p className="mt-2 text-xs leading-5 text-gray-400">
              analistas online agora
            </p>
          </div>
        </div>
      </section>

      {/* Painel direito */}
      <section className="flex min-h-screen flex-col bg-white">
        <header className="flex min-h-[72px] flex-wrap items-center justify-end gap-1 px-6 py-5 text-xs text-gray-500 sm:px-10">
          <span>Problema para entrar?</span>
          <a
            href="tel:4000"
            className="font-semibold text-blue-700 hover:underline"
          >
            Ligue no ramal 4000
          </a>
        </header>

        <div className="m-auto w-full max-w-[460px] px-6 py-10 sm:px-10">
          <h2 className="font-serif text-4xl text-gray-900">Entrar</h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Use seu e-mail corporativo e a senha da rede Nexo.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* E-mail */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                E-mail corporativo
              </label>

              <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-200 px-3 transition focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4 shrink-0 text-gray-500"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m4 7 8 6 8-6" />
                </svg>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="nome@empresa.com.br"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-800"
                >
                  Senha
                </label>

                <button
                  type="button"
                  onClick={() =>
                    setMessage(
                      "A recuperação de senha será implementada posteriormente.",
                    )
                  }
                  className="text-xs font-medium text-blue-700 hover:underline"
                >
                  Esqueci minha senha
                </button>
              </div>

              <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-200 px-3 transition focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4 shrink-0 text-gray-500"
                  aria-hidden="true"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  <path d="M12 14v3" />
                </svg>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Digite sua senha"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="shrink-0 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? "Ocultar" : "◉"}
                </button>
              </div>
            </div>

            {/* Manter conectado */}
            <label className="flex cursor-pointer items-center gap-2.5 text-xs text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
                className="h-[17px] w-[17px] accent-blue-600"
              />
              Manter conectado neste computador
            </label>

            {/* Botão */}
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-blue-700 px-4 text-sm font-bold text-white shadow-lg shadow-blue-700/15 transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Entrar <span className="text-lg font-normal">→</span>
            </button>

            {message && (
              <p
                role="status"
                className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs leading-5 text-blue-800"
              >
                {message}
              </p>
            )}
          </form>

          <div className="mt-8 border-t border-gray-200" />

          <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-gray-500">
            <span>© 2026 Nexo · Service desk de TI</span>

            <button
              type="button"
              onClick={() =>
                setMessage(
                  "A política de privacidade será definida na implementação do sistema.",
                )
              }
              className="hover:underline"
            >
              Privacidade e uso de dados
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
}
