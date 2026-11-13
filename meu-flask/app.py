from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

nomes = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/nomes", methods=["POST"])
def receber():
    dados = request.get_json()
    nomes.append(dados["nome"])
    print(nomes)
    return jsonify({ "nomes": nomes })