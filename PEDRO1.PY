import pandas as pd
import matplotlib.pyplot as plt
import mysql.connector


conn = mysql.connector.connect(
    host='database-webcrawler-univem.cwbkeok0cciy.us-east-2.rds.amazonaws.com',
    user='adminwebcrawler',
    password='Q51|3X{~Xy2$k6|+=Qs',
    database='db_webcrawler',
    charset='utf8'  
)

query = "SELECT * FROM db_webcrawler.VW_WEBCRAWLER vw;"
dados = pd.read_sql(query, conn)


conn.close()


plt.figure(figsize=(10, 6))
plt.bar(dados['MARCA'], dados['VALOR'], color='skyblue')
plt.xlabel('Marca')
plt.ylabel('Valor')
plt.title('Comparação Valor por marca')
plt.xticks(rotation=45)
plt.tight_layout()
plt.gca().set_facecolor('#73a6e0')  # Altera a cor de fundo dos eixos
plt.gcf().set_facecolor('#73a6e0')  # Altera a cor de fundo da figura
plt.savefig('grafico.png')
