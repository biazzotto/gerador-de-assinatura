var SignatureForm = React.createClass({
  generateUrl: function(nome, funcao) {
    return ('imagem.php?nome='+nome+'&funcao='+funcao);
  },
  generateUrlDownload: function(nome, funcao) {
    return ('imagem.php?nome='+nome+'&funcao='+funcao+'&download=true');
  },
  getInitialState: function() {
    let nome   = 'Sandro dos Santos';
    let funcao = 'Gestor de SDS';
    let url    = this.generateUrl(nome, funcao);
    let url_download = this.generateUrlDownload(nome, funcao);

    return {
      nome:   nome,
      funcao: funcao,
      url:    url,
      url_download: url_download
    };
  },
  handleNomeChange: function(e) {
    let nome = e.target.value;
    let url  = this.generateUrl(nome, this.state.funcao);
    let url_download = this.generateUrlDownload(nome, this.state.funcao);

    this.setState({nome: nome, url: url, url_download: url_download});
  },
  handleFuncaoChange: function(e) {
    let funcao = e.target.value;
    let url    = this.generateUrl(this.state.nome, funcao);
    let url_download = this.generateUrlDownload(this.state.nome, funcao);

    this.setState({funcao: funcao, url: url, url_download: url_download});
  },
  handleSubmit: function(e) {
    e.preventDefault();
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
          </fieldset>
        </form>
        <br />
        <hr />
        <h3>Assinatura gerada</h3>
        <a href={this.state.url_download} className="btn btn-primary btn-raised pull-right"><span className="glyphicon glyphicon-save"></span> Baixar imagem</a>
        <img src={this.state.url} />
        <span className="label label-default">Clique com o botão direito na imagem e então em "Salvar imagem como..." para salvar a imagem em seu computador.</span>
      </div>
    );
  }
});

ReactDOM.render(
  <SignatureForm />,
  document.getElementById('formContent')
);
