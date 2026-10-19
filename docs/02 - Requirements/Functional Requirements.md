# Perfis de usuário e controle de acesso

**Identificador:** RF-001  
**Título:** Gerenciamento de perfis de usuário  
**Estado:** Draft
## Descrição
O sistema deverá distinguir quatro categorias de acesso: visitante não cadastrado, usuário cadastrado, escritor e administrador. Cada categoria deverá possuir permissões compatíveis com suas responsabilidades e com as regras de negócio do sistema.
## RF-001.1 — Visitante não cadastrado
O sistema deverá permitir que visitantes consultem as informações explicitamente disponibilizadas ao público, sem exigir a criação de uma conta.
Visitantes não poderão executar operações que exijam autenticação, incluindo a publicação de comentários e o registro de reclamações.
## RF-001.2 — Usuário cadastrado
O sistema deverá permitir que usuários com conta autenticada acessem as funcionalidades autorizadas aos usuários comuns, incluindo a publicação de comentários e o registro de reclamações.
A possibilidade de solicitar impressões deverá ser definida em requisito específico.
## RF-001.3 — Escritor
O sistema deverá permitir que usuários autorizados como escritores acessem as funcionalidades disponíveis aos usuários cadastrados e o módulo de notícias.
No módulo de notícias, escritores poderão criar, editar e excluir notícias, respeitando as regras de autorização e integridade aplicáveis.
## RF-001.4 — Administrador
O sistema deverá disponibilizar aos administradores um conjunto ampliado de permissões para administrar as funcionalidades do CAAL.
As operações administrativas específicas e os limites desse acesso deverão ser documentados em requisitos complementares.
## RF-001.5 — Autorização de operações
O sistema deverá verificar, no backend, se o usuário possui autorização para executar cada operação protegida.
A interface não deverá ser considerada o mecanismo exclusivo de controle de acesso.
## Critérios gerais de aceitação
- Um visitante consegue consultar informações públicas sem autenticação.
- Um visitante não consegue publicar comentários ou registrar reclamações.
- Um usuário cadastrado autenticado consegue executar as operações comuns para as quais possui autorização.
- Um escritor consegue executar operações de criação, edição e exclusão de notícias conforme as regras aplicáveis.
- Um usuário sem as permissões necessárias não consegue executar operações protegidas por meio de chamadas diretas à API.
- As operações administrativas respeitam as permissões definidas para o perfil de administrador.