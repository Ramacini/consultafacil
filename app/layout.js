import './globals.css'

export const metadata = {
  title: 'ConsultaFácil - Sistema de Gestão Médica',
  description: 'Sistema completo para gestão de clínicas e consultórios médicos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}