'use client'
import React, { useState, useEffect } from 'react';
import { 
  Calendar, Users, FileText, DollarSign, BarChart3, Plus, Search, Edit, Trash2, Eye, Save, X, 
  Phone, Mail, MapPin, Clock, Activity, Heart, Thermometer, Weight, User, UserCheck, CalendarDays, 
  PlusCircle, TrendingUp, AlertCircle, CheckCircle, Settings, LogOut, Menu, Star, Shield, 
  Zap, Smartphone, Brain, Stethoscope, TestTube, Camera, FileSignature, MessageCircle,
  PlayCircle, Award, Target, Briefcase, Globe, ChevronRight, Monitor, Database, Wifi,
  Lock, CreditCard, Headphones, BarChart2, PieChart, TrendingDown, Download, Upload,
  Printer, Share2, Bell, Filter, SortAsc, RefreshCw, Bot, Mic, Video, FileImage,
  QrCode, Pill, Syringe, Clipboard, FlaskConical, UserX, UserPlus, Building2
} from 'lucide-react';

const ConsultaFacilCommercial = () => {
  // Estados principais
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('medico'); // 'medico', 'admin', 'paciente'
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [loading, setLoading] = useState(false);

  // Dados simulados aprimorados
  const [pacientes, setPacientes] = useState([
    { 
      id: 1, 
      nome: 'João Silva Santos', 
      cpf: '123.456.789-00', 
      telefone: '(14) 99999-1234', 
      email: 'joao.silva@email.com',
      nascimento: '1980-05-15',
      endereco: 'Rua das Flores, 123 - Centro',
      convenio: 'Particular',
      status: 'Ativo',
      ultimaConsulta: '2024-06-15',
      foto: '👨‍💼',
      observacoes: 'Paciente hipertenso, acompanhamento regular'
    },
    { 
      id: 2, 
      nome: 'Maria Santos Oliveira', 
      cpf: '987.654.321-00', 
      telefone: '(14) 98888-5678', 
      email: 'maria.santos@email.com',
      nascimento: '1975-12-03',
      endereco: 'Av. Brasil, 456 - Vila Nova',
      convenio: 'Unimed',
      status: 'Ativo',
      ultimaConsulta: '2024-06-10',
      foto: '👩‍💼',
      observacoes: 'Diabética tipo 2, controle rigoroso'
    }
  ]);

  const [consultas, setConsultas] = useState([
    {
      id: 1,
      paciente_id: 1,
      pacienteNome: 'João Silva Santos',
      data: '2024-06-20',
      hora: '14:00',
      tipo: 'Consulta',
      status: 'Agendada',
      valor: 150.00,
      convenio: 'Particular',
      observacoes: 'Retorno cardiologia',
      sala: 'Consultório 1',
      duracao: '30min'
    },
    {
      id: 2,
      paciente_id: 2,
      pacienteNome: 'Maria Santos Oliveira',
      data: '2024-06-21',
      hora: '09:30',
      tipo: 'Retorno',
      status: 'Confirmada',
      valor: 100.00,
      convenio: 'Unimed',
      observacoes: 'Controle diabetes',
      sala: 'Consultório 2',
      duracao: '20min'
    }
  ]);

  const [prontuarios, setProntuarios] = useState([
    {
      id: 1,
      paciente_id: 1,
      consulta_id: 1,
      data: '2024-06-15',
      anamnese: 'Paciente relata dor no peito esporádica, principalmente aos esforços. Nega dispneia aos pequenos esforços.',
      exame_fisico: 'PA: 140/90 mmHg, FC: 72 bpm, Peso: 85kg, Altura: 1.75m. Ausculta cardíaca: sopro sistólico 2+/6+.',
      diagnostico: 'Hipertensão arterial leve. Sopro funcional.',
      prescricao: 'Losartana 50mg 1x/dia. Hidroclorotiazida 25mg 1x/dia.',
      observacoes: 'Retorno em 30 dias. Solicitar ECG e ecocardiograma.',
      cid: 'I10 - Hipertensão essencial',
      medico: 'Dr. Roberto Silva - CRM 12345'
    }
  ]);

  const [exames, setExames] = useState([
    {
      id: 1,
      paciente_id: 1,
      tipo: 'Eletrocardiograma',
      status: 'Pendente',
      datasolicitacao: '2024-06-15',
      laboratorio: 'Lab Central',
      observacoes: 'Suspeita de arritmia',
      urgencia: 'Normal',
      resultado: null
    },
    {
      id: 2,
      paciente_id: 2,
      tipo: 'Hemograma Completo',
      status: 'Concluído',
      datasolicitacao: '2024-06-10',
      laboratorio: 'Lab Medicina',
      observacoes: 'Controle diabetes',
      urgencia: 'Normal',
      resultado: 'Glicemia: 180 mg/dl (elevada)'
    }
  ]);

  const [prescricoes, setPrescricoes] = useState([
    {
      id: 1,
      paciente_id: 1,
      medicamento: 'Losartana',
      dosagem: '50mg',
      frequencia: '1x ao dia',
      duracao: '30 dias',
      observacoes: 'Tomar pela manhã, em jejum',
      status: 'Ativa',
      dataInicio: '2024-06-15'
    }
  ]);

  const [telemedicina, setTelemedicina] = useState([
    {
      id: 1,
      paciente_id: 1,
      dataHora: '2024-06-18 10:00',
      status: 'Agendada',
      tipo: 'Consulta de Retorno',
      link: 'https://meet.consultafacil.com/room123',
      observacoes: 'Acompanhamento hipertensão'
    }
  ]);

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="text-blue-600" size={32} />
              <span className="text-2xl font-bold text-gray-900">ConsultaFácil</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Funcionalidades</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Preços</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contato</a>
            </nav>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCurrentPage('login')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Entrar
              </button>
              <button 
                onClick={() => setCurrentPage('register')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                O Sistema Médico Mais <span className="text-blue-600">Inteligente</span> do Brasil
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Revolucione sua clínica com IA, telemedicina integrada, prescrições digitais e muito mais. 
                Desenvolvido especificamente para médicos brasileiros.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setCurrentPage('demo')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center space-x-2"
                >
                  <PlayCircle size={20} />
                  <span>Ver Demo</span>
                </button>
                <button 
                  onClick={() => setCurrentPage('register')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50"
                >
                  Teste Grátis
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-600">30 dias grátis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="text-green-500" size={20} />
                  <span className="text-gray-600">100% seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Headphones className="text-green-500" size={20} />
                  <span className="text-gray-600">Suporte local</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">IA Médica Avançada</h3>
                    <p className="text-gray-500">Assistente diagnóstico inteligente</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">🤖 Analisando sintomas: Dor torácica + Dispneia</p>
                    <p className="text-sm font-medium text-gray-900 mt-2">💡 Sugestão: Investigar IAM, solicitar ECG + Troponina</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Confiabilidade do diagnóstico</span>
                    <span className="text-sm font-semibold text-green-600">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades que Fazem a Diferença
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para revolucionar sua prática médica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IA Feature */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IA Diagnóstica</h3>
              <p className="text-gray-600">
                Assistente inteligente que analisa sintomas e sugere diagnósticos baseado em milhões de casos clínicos.
              </p>
            </div>

            {/* Telemedicina */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Video className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telemedicina</h3>
              <p className="text-gray-600">
                Consultas por vídeo integradas, gravação automática e prontuário digital em tempo real.
              </p>
            </div>

            {/* Prescrição Digital */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <FileSignature className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prescrição Digital</h3>
              <p className="text-gray-600">
                Receitas com assinatura digital válida, envio direto para farmácias e controle de medicamentos.
              </p>
            </div>

            {/* WhatsApp Integration */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Business</h3>
              <p className="text-gray-600">
                Lembretes automáticos, confirmação de consultas e comunicação direta com pacientes via WhatsApp.
              </p>
            </div>

            {/* Lab Integration */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <TestTube className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integração Laboratorial</h3>
              <p className="text-gray-600">
                Pedidos de exames diretos para laboratórios parceiros e recebimento automático de resultados.
              </p>
            </div>

            {/* Business Intelligence */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Intelligence</h3>
              <p className="text-gray-600">
                Relatórios avançados, análise de performance e insights para otimizar sua clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos que Cabem no Seu Bolso</h2>
            <p className="text-xl text-gray-600">Preços especiais para médicos de Marília e região</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Básico</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">R$ 89</div>
                <div className="text-gray-500">por mês</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Até 500 pacientes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Agenda digital</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Prontuário eletrônico</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Controle financeiro</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Suporte local</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200">
                Começar Teste
              </button>
            </div>

            {/* Plano Profissional */}
            <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Mais Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Profissional</h3>
                <div className="text-4xl font-bold mb-2">R$ 149</div>
                <div className="text-blue-200">por mês</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Pacientes ilimitados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>IA Diagnóstica</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Telemedicina</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>WhatsApp Business</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Prescrição digital</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Integração laboratórios</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-50">
                Teste 30 Dias Grátis
              </button>
            </div>

            {/* Plano Enterprise */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clínica</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">R$ 299</div>
                <div className="text-gray-500">por mês</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Múltiplos médicos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Business Intelligence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>API personalizada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Portal do paciente</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Backup automático</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200">
                Solicitar Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Stethoscope className="text-blue-400" size={24} />
                <span className="text-xl font-bold">ConsultaFácil</span>
              </div>
              <p className="text-gray-400">
                O sistema médico mais inteligente do Brasil, desenvolvido especialmente para médicos de Marília e região.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">Demo</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white">Treinamento</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>(14) 99999-0000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>contato@consultafacil.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Marília, SP</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ConsultaFácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  // Login Component
  const LoginPage = () => {
    const [loginData, setLoginData] = useState({ email: '', password: '', userType: 'medico' });

    const handleLogin = () => {
      setIsLoggedIn(true);
      setUserType(loginData.userType);
      setCurrentPage('dashboard');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Stethoscope className="text-blue-600" size={32} />
              <span className="text-2xl font-bold text-gray-900">ConsultaFácil</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Bem-vindo de volta</h2>
            <p className="text-gray-600">Faça login em sua conta</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Usuário</label>
              <select 
                value={loginData.userType}
                onChange={(e) => setLoginData({...loginData, userType: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="medico">Médico</option>
                <option value="admin">Administrador</option>
                <option value="paciente">Paciente</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              Entrar
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Não tem uma conta?{' '}
              <button 
                onClick={() => setCurrentPage('register')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Cadastre-se
              </button>
            </p>
            <button 
              onClick={() => setCurrentPage('landing')}
              className="mt-2 text-gray-500 hover:text-gray-700"
            >
              ← Voltar para início
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Dashboard Component (Sistema Principal)
  const Dashboard = () => {
    // Cálculos do Dashboard
    const totalPacientes = pacientes.length;
    const consultasHoje = consultas.filter(c => c.data === new Date().toISOString().split('T')[0]).length;
    const consultasMes = consultas.length;
    const examesPendentes = exames.filter(e => e.status === 'Pendente').length;

    // Navigation Component
    const NavItem = ({ icon: Icon, label, tabKey, count }) => (
      <button
        onClick={() => setActiveTab(tabKey)}
        className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
          activeTab === tabKey ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <div className="flex items-center space-x-3">
          <Icon size={20} />
          <span className="font-medium">{label}</span>
        </div>
        {count && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{count}</span>
        )}
      </button>
    );

    return (
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <Stethoscope className="text-blue-600" size={24} />
              <span className="text-xl font-bold text-gray-900">ConsultaFácil</span>
            </div>
            <p className="text-sm text-gray-500">Dr. Roberto Silva</p>
          </div>
          
          {/* Navigation */}
          <nav className="p-4 space-y-2">
            <NavItem icon={BarChart3} label="Dashboard" tabKey="dashboard" />
            <NavItem icon={Users} label="Pacientes" tabKey="pacientes" />
            <NavItem icon={Calendar} label="Agenda" tabKey="agenda" />
            <NavItem icon={FileText} label="Prontuários" tabKey="prontuarios" />
            <NavItem icon={TestTube} label="Exames" tabKey="exames" count={examesPendentes} />
            <NavItem icon={Pill} label="Prescrições" tabKey="prescricoes" />
            <NavItem icon={Video} label="Telemedicina" tabKey="telemedicina" />
            <NavItem icon={Bot} label="IA Médica" tabKey="ia" />
            <NavItem icon={MessageCircle} label="WhatsApp" tabKey="whatsapp" />
            <NavItem icon={DollarSign} label="Financeiro" tabKey="financeiro" />
            <NavItem icon={BarChart2} label="Relatórios" tabKey="relatorios" />
            <NavItem icon={Settings} label="Configurações" tabKey="configuracoes" />
          </nav>

          {/* Footer */}
          <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
            <button 
              onClick={() => { setIsLoggedIn(false); setCurrentPage('landing'); }}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 w-full"
            >
              <LogOut size={20} />
              <span>Sair</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto p-8">
            
            {/* Dashboard Principal */}
            {activeTab === 'dashboard' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                      <Plus size={20} />
                      <span>Nova Consulta</span>
                    </button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Pacientes</p>
                        <p className="text-3xl font-bold text-blue-600">{totalPacientes}</p>
                      </div>
                      <Users className="text-blue-500" size={32} />
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Consultas Hoje</p>
                        <p className="text-3xl font-bold text-green-600">{consultasHoje}</p>
                      </div>
                      <Calendar className="text-green-500" size={32} />
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Consultas Mês</p>
                        <p className="text-3xl font-bold text-purple-600">{consultasMes}</p>
                      </div>
                      <Activity className="text-purple-500" size={32} />
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Exames Pendentes</p>
                        <p className="text-3xl font-bold text-orange-600">{examesPendentes}</p>
                      </div>
                      <TestTube className="text-orange-500" size={32} />
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Próximas Consultas */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Próximas Consultas</h3>
                    <div className="space-y-4">
                      {consultas.slice(0, 3).map(consulta => (
                        <div key={consulta.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="text-blue-600" size={20} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{consulta.pacienteNome}</p>
                              <p className="text-sm text-gray-500">{consulta.data} às {consulta.hora}</p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            consulta.status === 'Confirmada' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {consulta.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* IA Insights */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Bot className="text-purple-600" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">IA Médica</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">📊 Análise de padrões</p>
                        <p className="text-sm text-gray-900">30% dos seus pacientes têm hipertensão. Considere implementar um programa de prevenção.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">💡 Sugestão de agendamento</p>
                        <p className="text-sm text-gray-900">Paciente João Silva está em atraso para consulta de retorno (cardiologia).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pacientes Tab */}
            {activeTab === 'pacientes' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">Pacientes</h2>
                  <div className="flex space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input 
                        type="text" 
                        placeholder="Buscar paciente..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button 
                      onClick={() => { setModalType('paciente'); setShowModal(true); }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                    >
                      <Plus size={20} />
                      <span>Novo Paciente</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Paciente</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contato</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Convênio</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Última Consulta</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {pacientes.map(paciente => (
                        <tr key={paciente.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">{paciente.foto}</div>
                              <div>
                                <p className="font-medium text-gray-900">{paciente.nome}</p>
                                <p className="text-sm text-gray-500">{paciente.cpf}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-gray-900">{paciente.telefone}</p>
                            <p className="text-sm text-gray-500">{paciente.email}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              paciente.convenio === 'Particular' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                            }`}>
                              {paciente.convenio}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{paciente.ultimaConsulta}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                              {paciente.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Eye size={16} />
                              </button>
                              <button className="text-green-600 hover:text-green-800">
                                <Edit size={16} />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* IA Médica Tab */}
            {activeTab === 'ia' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">IA Médica</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Assistente Diagnóstico */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Brain className="text-purple-600" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">Assistente Diagnóstico</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sintomas do Paciente</label>
                        <textarea 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          rows="4"
                          placeholder="Ex: Dor torácica, dispneia aos esforços, sudorese..."
                        />
                      </div>
                      
                      <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 flex items-center justify-center space-x-2">
                        <Bot size={20} />
                        <span>Analisar Sintomas</span>
                      </button>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-2">💡 Sugestões da IA</h4>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Investigar síndrome coronariana aguda (85% probabilidade)</li>
                          <li>• Solicitar ECG + Troponina</li>
                          <li>• Considerar ecocardiograma</li>
                          <li>• Avaliar fatores de risco cardiovascular</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Análise de Padrões */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <BarChart3 className="text-blue-600" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">Análise de Padrões</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">📊 Insights da Clínica</h4>
                        <ul className="text-sm text-blue-800 space-y-2">
                          <li>• 45% dos pacientes têm hipertensão</li>
                          <li>• Aumento de 20% em consultas cardiológicas</li>
                          <li>• Pacientes masculinos 60+ são grupo de risco</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-2">🎯 Recomendações</h4>
                        <ul className="text-sm text-green-800 space-y-2">
                          <li>• Implementar programa de prevenção cardiovascular</li>
                          <li>• Agendar retornos automáticos para hipertensos</li>
                          <li>• Criar protocolo de rastreamento diabetes</li>
                        </ul>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                        Ver Relatório Completo
                      </button>
                    </div>
                  </div>
                </div>

                {/* Prescrição Inteligente */}
                <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Pill className="text-green-600" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900">Prescrição Inteligente</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">⚠️ Alertas de Interação</h4>
                      <p className="text-sm text-gray-600">Sistema verifica automaticamente interações medicamentosas perigosas.</p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">💊 Dosagem Otimizada</h4>
                      <p className="text-sm text-gray-600">IA sugere dosagens baseadas em peso, idade e condição do paciente.</p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">📋 Protocolo Seguido</h4>
                      <p className="text-sm text-gray-600">Receitas seguem automaticamente protocolos médicos atualizados.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Telemedicina Tab */}
            {activeTab === 'telemedicina' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">Telemedicina</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                    <Video size={20} />
                    <span>Nova Teleconsulta</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Consultas Agendadas */}
                  <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Teleconsultas Agendadas</h3>
                    
                    <div className="space-y-4">
                      {telemedicina.map(consulta => (
                        <div key={consulta.id} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Video className="text-blue-600" size={20} />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {pacientes.find(p => p.id === consulta.paciente_id)?.nome}
                                </p>
                                <p className="text-sm text-gray-500">{consulta.dataHora}</p>
                                <p className="text-sm text-gray-500">{consulta.tipo}</p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                                <Video size={16} />
                                <span>Iniciar</span>
                              </button>
                              <button className="text-gray-600 hover:text-gray-800">
                                <Edit size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Ações Rápidas</h4>
                      <div className="space-y-3">
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2">
                          <Plus size={20} />
                          <span>Agendar Teleconsulta</span>
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2">
                          <Calendar size={20} />
                          <span>Ver Agenda</span>
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2">
                          <Settings size={20} />
                          <span>Configurações</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <CheckCircle className="text-green-600" size={20} />
                        <h4 className="font-semibold text-green-900">Funcionalidades</h4>
                      </div>
                      <ul className="text-sm text-green-800 space-y-2">
                        <li>✓ Gravação automática</li>
                        <li>✓ Prontuário em tempo real</li>
                        <li>✓ Prescrição digital</li>
                        <li>✓ Compartilhamento de tela</li>
                        <li>✓ Chat integrado</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Exames Tab */}
            {activeTab === 'exames' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">Gestão de Exames</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                    <TestTube size={20} />
                    <span>Solicitar Exame</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Pendentes</p>
                        <p className="text-3xl font-bold text-orange-600">{exames.filter(e => e.status === 'Pendente').length}</p>
                      </div>
                      <Clock className="text-orange-500" size={24} />
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Concluídos</p>
                        <p className="text-3xl font-bold text-green-600">{exames.filter(e => e.status === 'Concluído').length}</p>
                      </div>
                      <CheckCircle className="text-green-500" size={24} />
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Este Mês</p>
                        <p className="text-3xl font-bold text-blue-600">{exames.length}</p>
                      </div>
                      <BarChart3 className="text-blue-500" size={24} />
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Laboratórios</p>
                        <p className="text-3xl font-bold text-purple-600">12</p>
                      </div>
                      <Building2 className="text-purple-500" size={24} />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Exames Solicitados</h3>
                      <div className="flex space-x-2">
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>Todos os status</option>
                          <option>Pendente</option>
                          <option>Concluído</option>
                        </select>
                        <button className="border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-50">
                          <Filter size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Paciente</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Exame</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Laboratório</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Data Solicitação</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {exames.map(exame => (
                        <tr key={exame.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <p className="font-medium text-gray-900">
                              {pacientes.find(p => p.id === exame.paciente_id)?.nome}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-gray-900">{exame.tipo}</p>
                            {exame.urgencia === 'Urgente' && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                                Urgente
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-gray-900">{exame.laboratorio}</td>
                          <td className="px-6 py-4 text-gray-900">{exame.datasolicitacao}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              exame.status === 'Concluído' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {exame.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Eye size={16} />
                              </button>
                              {exame.resultado && (
                                <button className="text-green-600 hover:text-green-800">
                                  <Download size={16} />
                                </button>
                              )}
                              <button className="text-gray-600 hover:text-gray-800">
                                <Edit size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* WhatsApp Tab */}
            {activeTab === 'whatsapp' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">WhatsApp Business</h2>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                    <MessageCircle size={20} />
                    <span>Nova Mensagem</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Chat Area */}
                  <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <User className="text-green-600" size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">João Silva Santos</p>
                          <p className="text-sm text-gray-500">Online agora</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-96 p-4 overflow-y-auto space-y-4">
                      {/* Mensagens */}
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                          <p className="text-sm">Olá João! Lembro que sua consulta de retorno está agendada para amanhã às 14h. Confirma presença?</p>
                          <p className="text-xs text-blue-100 mt-1">14:30</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-start">
                        <div className="bg-gray-200 text-gray-900 p-3 rounded-lg max-w-xs">
                          <p className="text-sm">Oi doutor! Sim, confirmo. Posso chegar uns 15 min antes?</p>
                          <p className="text-xs text-gray-500 mt-1">14:32</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                          <p className="text-sm">Perfeito! Te esperamos às 13:45. Lembre de trazer os exames que solicitei.</p>
                          <p className="text-xs text-blue-100 mt-1">14:35</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex space-x-2">
                        <input 
                          type="text" 
                          placeholder="Digite sua mensagem..."
                          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Templates */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Templates Rápidos</h4>
                      <div className="space-y-2">
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <p className="text-sm font-medium text-gray-900">Lembrete de Consulta</p>
                          <p className="text-xs text-gray-500">Sua consulta está agendada para...</p>
                        </button>
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <p className="text-sm font-medium text-gray-900">Resultado de Exame</p>
                          <p className="text-xs text-gray-500">Seus exames ficaram prontos...</p>
                        </button>
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <p className="text-sm font-medium text-gray-900">Agendamento</p>
                          <p className="text-xs text-gray-500">Gostaria de agendar uma consulta?</p>
                        </button>
                      </div>
                    </div>

                    {/* Estatísticas */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Estatísticas</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Mensagens enviadas hoje</span>
                          <span className="font-medium text-gray-900">24</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Taxa de resposta</span>
                          <span className="font-medium text-green-600">89%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Tempo médio resposta</span>
                          <span className="font-medium text-gray-900">12 min</span>
                        </div>
                      </div>
                    </div>

                    {/* Automações */}
                    <div className="bg-green-50 rounded-xl p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Bot className="text-green-600" size={20} />
                        <h4 className="font-semibold text-green-900">Automações Ativas</h4>
                      </div>
                      <ul className="text-sm text-green-800 space-y-2">
                        <li>✓ Lembrete 24h antes da consulta</li>
                        <li>✓ Confirmação de agendamento</li>
                        <li>✓ Resultados de exames prontos</li>
                        <li>✓ Aniversário do paciente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  };

  // Main App Logic
  if (!isLoggedIn && currentPage === 'login') {
    return <LoginPage />;
  }

  if (!isLoggedIn && currentPage === 'landing') {
    return <LandingPage />;
  }

  if (isLoggedIn) {
    return <Dashboard />;
  }

  // Default to landing page
  return <LandingPage />;
};

export default ConsultaFacilCommercial;