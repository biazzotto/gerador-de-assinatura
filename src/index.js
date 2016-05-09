let base_url = 'http://institutosoma.org.br/assinatura/';

var SignatureForm = React.createClass({
  generateUrl: function(nome, funcao) {
    return ('imagem.php?nome='+nome+'&funcao='+funcao);
  },
  generateUrlDownload: function(nome, funcao) {
    return ('imagem.php?nome='+nome+'&funcao='+funcao+'&download=true');
  },
  generateMd5: function(nome, funcao) {
    return (base_url+'assets/upload/'+md5(nome+funcao)+'.jpg');
  },
  getInitialState: function() {
    let nome   = 'Sandro dos Santos';
    let funcao = 'Gestor de SDS';
    let url    = this.generateUrl(nome, funcao);

    let url_download = this.generateUrlDownload(nome, funcao);
    let url_amigavel = this.generateMd5(nome, funcao);

    return {
      nome:   nome,
      funcao: funcao,
      url:    url,
      url_download: url_download,
      url_amigavel: url_amigavel
    };
  },
  handleNomeChange: function(e) {
    let nome = e.target.value;
    this.setState({nome: nome});
  },
  handleFuncaoChange: function(e) {
    let funcao = e.target.value;
    this.setState({funcao: funcao});
  },
  handleSubmit: function(e) {
    e.preventDefault();

    let nome   = this.state.nome;
    let funcao = this.state.funcao;

    let url          = this.generateUrl(nome, funcao);
    let url_download = this.generateUrlDownload(nome, funcao);
    let url_amigavel = this.generateMd5(nome, funcao);

    this.setState({
      url:          url,
      url_download: url_download,
      url_amigavel: url_amigavel
    });

    return false;
  },
  render: function() {
    return (
      <div className="signatureForm">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>
            <div className="form-group">
              <label for="inputNome" className="col-md-2 control-label">Nome</label>
              <div className="col-md-10">
                <input type="text" placeholder="Seu nome" className="form-control" id="inputNome" value={this.state.nome} onChange={this.handleNomeChange} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputFuncao" className="col-md-2 control-label">Função</label>
              <div className="col-md-10">
                <input type="text" placeholder="Sua função" className="form-control" id="inputFuncao" value={this.state.funcao} onChange={this.handleFuncaoChange} />
              </div>
            </div>
            <div className="text-right">
              <button type="submit" className="btn btn-primary btn-raised">Gerar Assinatura</button>
            </div>
          </fieldset>
        </form>
        <br />
        <hr />
        <h3>Assinatura gerada</h3>
        <a href={this.state.url_amigavel} target="_blank" id="urlAmigavel"><span className="glyphicon glyphicon-link"></span> {this.state.url_amigavel}</a>
        <div>
          <img src={this.state.url} />
        </div>
        <a href={this.state.url_download} className="btn btn-primary btn-raised hide"><span className="glyphicon glyphicon-save"></span> Baixar imagem</a>
      </div>
    );
  }
});

ReactDOM.render(
  <SignatureForm />,
  document.getElementById('formContent')
);
