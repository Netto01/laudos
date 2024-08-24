from flask import Flask, render_template, url_for

app = Flask(__name__)

# Rota para a página inicial
@app.route('/')
def home():
    return render_template('index.html')

# Rota para a página de Testes de Inteligência
@app.route('/inteligencia')
def inteligencia():
    return render_template('inteligencia.html')

# Rota para a página de Testes de Atenção
@app.route('/atencao')
def atencao():
    return render_template('atencao.html')

# Rota para arquivos estáticos (não é necessário definir explicitamente no Flask)
# Flask automaticamente serve arquivos da pasta 'static'

if __name__ == "__main__":
    app.run(debug=True)
