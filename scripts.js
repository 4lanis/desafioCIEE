class Filmes { //inicia��o da classe

    constructor() {
	this.id = 1;
    this.filmes = [];
	this.edit = null;
        }
    //funcaoo que executa as outras fun��es ao clicar no bot�o 'cadastrar'	
    cadastrar() {
        let filme = this.informar();
	if (this.edit == null) { //caso as informa��es dos inputs estejam vazias, adiciona o conte�do
        this.add(filme);
	} else { //caso estejam preenchidas por ids, entende-se que o usu�rio vai editar
	    this.upd(this.edit, filme);
	}
    this.listarFilmes();
	this.limparDados();
        
	} 

	limparDados() {
	    document.getElementById('titulo').value = '';
    	document.getElementById('dir').value = '';
    	document.getElementById('ator').value = '';
    	document.getElementById('ano').value = '';
    	document.getElementById('genero').value = '';
        document.getElementById('botao').innerText = 'Cadastrar';
        this.edit = null;
}
	


    // funcao para listar os filmes na tabela	

    listarFilmes() {
        let tbody = document.getElementById('tbody');
        tbody.innerText =  '' //impede que os valores se dupliquem

        for (let i = 0; i < this.filmes.length; i++) { 

            let tr = tbody.insertRow();
	        let tdId = tr.insertCell();
            let tdTitulo = tr.insertCell();
            let tdDiretor = tr.insertCell();
            let tdAtores = tr.insertCell();
            let tdAno = tr.insertCell();
            let tdGenero = tr.insertCell();
            let tdOpcoes = tr.insertCell();
		
            tdId.innerText = this.filmes[i].id;	
            tdTitulo.innerText = this.filmes[i].titulo;
            tdDiretor.innerText = this.filmes[i].diretor;
            tdAtores.innerText = this.filmes[i].atores;
            tdAno.innerText = this.filmes[i].ano;
            tdGenero.innerText = this.filmes[i].genero;
	    
	        tdOpcoes.classList.add('center');
	        let editIcon = document.createElement('img');
            editIcon.src = 'img/ed.png';
            editIcon.setAttribute("onclick", "filme.editar("+ JSON.stringify(this.filmes[i]) +")");		
            let xIcon = document.createElement('img');	
            xIcon.src = 'img/x.png';
            xIcon.setAttribute("onclick", "filme.remover("+ this.filmes[i].id +")");
            tdOpcoes.appendChild(editIcon);
            tdOpcoes.appendChild(xIcon);
	    	                   
        }
    } 
         
    	//adiciona os registros ao array e incrementa o valor do id
    
    add(filme) {
        this.filmes.push(filme);
	    this.id++;
                }  
	//atualizando os dados

    upd(id, filme) {
	for (let i = 0; i < this.filmes.length; i++) {
	   if (this.filmes[i].id == id) {
	   	this.filmes[i].titulo = filme.titulo;
	   	this.filmes[i].diretor = filme.diretor;
	   	this.filmes[i].atores = filme.atores;
	   	this.filmes[i].ano = filme.ano;
	   	this.filmes[i].genero = filme.genero;

}
}
}

// le os dados informados no input e atribui as variáveis do array	
    informar() {
        let filme = {}

	    filme.id = this.id;
        filme.titulo = document.getElementById('titulo').value;
        filme.diretor = document.getElementById('dir').value;
        filme.atores = document.getElementById('ator').value;
        filme.ano = document.getElementById('ano').value;
        filme.genero = document.getElementById('genero').value;
        
        return filme;
    }

    // funçao para remover o registro selecionado	
    remover(id) {
	    if (confirm("Quer deletar o cadastro deste filme?")) { 
	     let tbody = document.getElementById('tbody');
            for (let i = 0; i < this.filmes.length; i++) {	
            if (this.filmes[i].id == id) {
            this.filmes.splice(i, 1);
            tbody.deleteRow(i);
	}
	   		 }
		}
	}

    //funçao para editar itens

    editar(info) {

    this.edit = info.id;	
    document.getElementById('titulo').value = info.titulo;
    document.getElementById('dir').value = info.diretor;
    document.getElementById('ator').value = info.atores;
    document.getElementById('ano').value = info.ano;
    document.getElementById('genero').value = info.genero;
	
    document.getElementById('botao').innerText = 'Salvar';	


}	
}
      
let filme = new Filmes()