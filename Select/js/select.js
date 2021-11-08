HTMLSelectElement.prototype.annadirTodos=function(select){
    while(select.children.length>0)
       this.appendChild(select.children[0])
}

HTMLSelectElement.prototype.annadirSeleccionados=function(select){
    while(select.selectedIndex>-1){
       let elemento=select.children[select.selectedIndex];
       elemento.selected=false;
       this.appendChild(elemento)
    }
}

HTMLSelectElement.prototype.ordenar=function(){
    var vector=[];
    for (let i=0;i<this.children.length;i++){
        vector.push(this.children[i]);
    }
    vector.sort(function(a,b){return a.innerHTML.localeCompare(b.innerHTML)});
    for (let i=0;i<vector.length;i++){
        this.appendChild(vector[i]);
    }
}
