Requisitos

Inscreva-se para uma conta IBM Cloud .
Faça o download do IBM Cloud CLI .
Crie uma instância do serviço Text to Speech e obtenha suas credenciais:
Vá para a página Fala em texto no IBM Cloud Catalog.
Efetue login na sua conta do IBM Cloud.
Clique em Create .
Clique em Mostrar para visualizar as credenciais do serviço.
Copie o apikeyvalor.
Copie o urlvalor.
Configurando o Aplicativo
Na pasta do aplicativo, copie o arquivo .env.example e crie um arquivo chamado .env

Executando o projeto

Abra o arquivo .env e adicione as credenciais de serviço que você obteve ao criar uma conta.

Exemplo de arquivo .env que configura a apikeye urlpara uma instância do serviço Text to Speech hospedada na região leste dos EUA:

SPEECH_TO_TEXT_IAM_APIKEY=X4rbi8vwZmKpXfowaS3GAsA7vdy17Qh7km5D6EzKLHL2
SPEECH_TO_TEXT_URL=https://gateway-wdc.watsonplatform.net/text-to-Speech/ape


Para instalar as dependências execute o comando abaixo
npm install


