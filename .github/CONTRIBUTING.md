
# Contribuindo para o CAAL

## 1. Antes de começar

- Leia o README e a documentação de arquitetura.
- Procure issues existentes antes de abrir uma nova.
- Para mudanças grandes, discuta a abordagem antes de implementar.
- Não comece uma alteração que conflite com outra iniciativa em andamento.

## 2. Preparação do ambiente

Os comandos oficiais de instalação, execução e testes serão documentados no README.

Utilize a versão de Node.js e pnpm definida pelo projeto. Não altere versões de ferramentas ou dependências compartilhadas sem justificar a mudança.

## 3. Branches

Crie uma branch a partir de `main`.

Padrões:
- feat/<issue>-<descricao>
- fix/<issue>-<descricao>
- docs/<issue>-<descricao>
- test/<issue>-<descricao>
- refactor/<issue>-<descricao>
- chore/<issue>-<descricao>

## 4. Implementação

- Mantenha as alterações focadas em um único objetivo.
- Respeite os limites do domínio e as responsabilidades do serviço.
- Prefira dependências explícitas e interfaces bem definidas.
- Não compartilhe entidades de domínio entre microsserviços.
- Não acesse diretamente o banco de dados pertencente a outro serviço.
- Inclua testes para regras de negócio e comportamentos alterados.
- Documente mudanças incompatíveis em APIs, eventos ou persistência.

## 5. Commits

Utilize Conventional Commits:

- feat: nova funcionalidade
- fix: correção
- docs: documentação
- test: testes
- refactor: refatoração
- chore: manutenção
- ci: automação de integração contínua

Exemplo: feat(complaints): add complaint creation use case

## 6. Pull requests

- Explique o problema e a solução.
- Relacione a issue correspondente.
- Inclua evidências de testes quando forem relevantes.
- Mantenha o PR pequeno e revisável.
- Resolva comentários de revisão antes do merge.
- Não integre código que falhe nas verificações obrigatórias.

## 7. Arquitetura e decisões

Propostas que alterem limites de microsserviços, tecnologia de persistência,
contratos entre serviços, segurança ou infraestrutura devem ser discutidas
antes da implementação.

Decisões duradouras devem ser registradas em docs/adr/.

## 8. Segurança

Nunca envie tokens, senhas, chaves privadas ou dados pessoais reais ao repositório. Consulte SECURITY.md para comunicar vulnerabilidades.