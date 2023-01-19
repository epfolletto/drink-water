# `Projeto`
Projeto Drink-Water

# `Descrição`
O Projeto Drink-Water é uma plataforma para controle do consumo de água. Trata-se de uma ferramenta onde usuários cadastrados e logados podem navegar. A funcionalidade principal é cadastrar a quantidade de mililitros de água consumida e o sistema armazena estes registros em uma banco de dados e retorna essencialmente duas informações principais: </br>
1) a quantidade diária de água que o usuário já consumiu e o quanto falta consumir*. </br>
2) o histórico do usuário, mostrando em quais dias ele atingiu a sua meta e em quais dias não atingiu. </br>


*O cálculo da quantidade necessária é feito atráves da expressão L = P * Vu, onde: </br>
L = quantidade, em mililitros, que o usuário deve beber em um dia; </br>
P = peso, em kg, do usuário. Informado no momento do cadastro; </br>
Vu = volume por kilograma que o usuário deve injerir. Este valor é assumido igual a 35ml/kg.
</br>

Neste projeto foram desenvolvidos tanto o *frontend* quanto o *backend*. A documentação da API pode ser acessada abaixo:
[https://documenter.getpostman.com/view/21552787/2s8ZDSbQTx](https://documenter.getpostman.com/view/21552787/2s8ZDSbQTx)

# `Instalando e rodando localmente`
1. Fazer o clone do projeto.</br>
2. Dento da pasta *backend* rodar npm install.</br>
3. Dento da pasta *backend* rodar npm run dev o servidor ficará escutando na porta 3003.</br>
4. Dento da pasta *frontend* rodar npm install.</br>
5. Dento da pasta *frontend* rodar npm run start e a página abrirá na porta 3000.
6. Criar um arquivo .env, com as seguintes configurações:

PORT = 3003
DB_HOST = 
DB_USER = 
DB_PASSWORD = 
DB_DATABASE = 
JWT_KEY = "minha-senha-segura-bananinha123"
JWT_EXPIRES_IN = "24h"
BCRYPT_SALT_ROUNDS = 12


# `Paleta de cores utilizada`
<img width="450px" src="./frontend/src/assets/img/readme/color-theme.jpeg"/>

# `Tecnologias utilizadas`
<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
</div>

# `Autor`
Evandro Paulo Folletto </br>
<a href="https://www.linkedin.com/in/evandrofolletto/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> </br>
<a href="https://github.com/epfolletto"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a> 

# `Imagens`

### Página Login
<img src="./frontend/src/assets/img/readme/site1.png"/>

### Página Signup
<img src="./frontend/src/assets/img/readme/site2.png"/>

### Página Main
<img src="./frontend/src/assets/img/readme/site3.png"/>

### Página Histórico
<img src="./frontend/src/assets/img/readme/site4.png"/>

### Página Detalhe data
<img src="./frontend/src/assets/img/readme/site5.png"/>
