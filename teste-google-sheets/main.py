from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    # Renderiza o template HTML RAVLT.html localizado na pasta 'templates'
    return render_template('RAVLT.html')

if __name__ == '__main__':
    # Inicia o servidor Flask no modo de depuração para facilitar o desenvolvimento
    app.run(debug=True)
