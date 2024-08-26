from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    # Renderiza a página RAVLT.html
    return render_template('RAVLT.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Processa o formulário (por enquanto só redireciona)
    return redirect(url_for('resultados'))

@app.route('/resultados')
def resultados():
    # Renderiza a página de resultados
    return render_template('resultados-RAVLT.html')

if __name__ == '__main__':
    app.run(debug=True)
