<h1> Estação Meteorológica - 5º ADS </h1>
<h3> Alunos: Mateus Costa e Adriel Aigle </h3>

<h3> Este projeto é um sistema de monitoramento climático que utiliza uma estrutura Full Stack para coletar, armazenar e exibir dados de sensores (como o ESP32). 
  O sistema conta com um backend em Node.js com Mongoose, banco de dados MongoDB Atlas e um frontend com React + Boostrap responsivo com gráficos em tempo real. </h3>

<h3> Fluxo de Desenvolvimento e Demonstração: </h3>
<h4> 1. Conexão com o Banco de Dados

O backend utiliza o Mongoose para estabelecer a conexão com o MongoDB Atlas. A configuração garante que os dados sejam armazenados de forma persistente na nuvem. </h4>
<img width="1086" height="695" alt="Captura de tela 2026-01-27 175442" src="https://github.com/user-attachments/assets/1cda34ac-dd79-4de8-86d5-36d31119db41" />

<h4> 2. Estrutura de Dados (Controller)

Para garantir a integridade das informações, definimos uma estrutura rigorosa no ReadingController. Cada leitura deve conter: station_id, temperature, humidity, pressure, air_quality, rain e timestamp. </h4>
<img width="827" height="418" alt="Captura de tela 2026-01-27 180108" src="https://github.com/user-attachments/assets/04a07780-7dbd-4f1a-b84c-42ffeff7d2d2" />

<h4> 3. Interface Web Inicial
  
Estado inicial da plataforma antes do recebimento de dados. O Dashboard está pronto para renderizar os cards e o histórico assim que as primeiras leituras forem detectadas. </h4>
<img width="1875" height="429" alt="image" src="https://github.com/user-attachments/assets/30402822-a88f-4729-bbee-304163ce55f1" />


<h4> 4. Testes de API - Inserção (Postman)
  
Realizamos testes manuais via Postman utilizando a rota POST /api/createReadings para validar o comportamento do backend.

Teste 1: Inserção manual de dados de teste para a estação 1.

Teste 2: Inserção de novos parâmetros para validar a dinamicidade da API. </h4>
<img width="732" height="868" alt="Captura de tela 2026-01-27 180715" src="https://github.com/user-attachments/assets/6f5745ef-f628-4c66-adca-cdfa0d2fe686" />
<img width="679" height="859" alt="Captura de tela 2026-01-27 180759" src="https://github.com/user-attachments/assets/3be89d97-37eb-4581-89e7-a91c1d0946dd" />

<h4> 5. Consulta e Persistência
  
Após as inserções, validamos o retorno dos dados e a persistência física no cluster.

Listagem Geral: Rota GET /api/getAll retornando o array de objetos criados.

Visualização no Cluster: Confirmação dos documentos inseridos com sucesso no MongoDB Atlas. </h4>
<img width="690" height="932" alt="Captura de tela 2026-01-27 180844" src="https://github.com/user-attachments/assets/e205659c-e2f5-4152-bada-a04af232a101" />

<h4> 6. Integração com ESP32 e Visualização Real
  
Abaixo, a representação dos dados reais enviados pelo hardware.

Gráfico de Temperatura: O gráfico é renderizado dinamicamente com as informações enviadas pelo ESP32.

Dados Finais no Cluster: Registros reais vindos da estação física ESP32_01.

Histórico de Medições: Tabela detalhada das últimas leituras.

Nota: O sensor realiza medições aproximadas para monitoramento ambiental.</h4>
<img width="1877" height="776" alt="image" src="https://github.com/user-attachments/assets/e29730b5-6d5e-4d4e-9dbc-8d36c2796f10" />
<img width="871" height="762" alt="Captura de tela 2026-01-27 181149" src="https://github.com/user-attachments/assets/1994ad03-68e9-4e0b-95f7-2ac8d4adb504" />
<img width="1877" height="587" alt="Captura de tela 2026-01-27 182226" src="https://github.com/user-attachments/assets/a26d21df-9346-4146-b454-818aafe484b9" />
<img width="710" height="884" alt="Captura de tela 2026-01-27 182410" src="https://github.com/user-attachments/assets/aeffb5dd-e43b-49b4-96c2-fe1efc1e3726" />


<h4> Tecnologias Utilizadas
    
Node.js & Express: Servidor Backend.

MongoDB Atlas: Banco de dados NoSQL na nuvem.

Mongoose: Modelagem de objetos para MongoDB.

Postman: Testes de rotas API.

ESP32: Hardware para coleta de dados climáticos. </h4>

<br>

<h3> Observações sobre a Demonstração </h3>

<h4> Toda a comprovação do funcionamento foi realizada através das capturas de tela e da documentação acima. Não é possível o envio de um arquivo executável do ESP32, uma vez que o código de firmware depende exclusivamente do hardware físico (placa ESP32 e sensores) devidamente configurado e conectado à rede. 
  Sem o dispositivo físico em mãos, o acesso à coleta de dados em tempo real não seria possível para terceiros. </h4>




