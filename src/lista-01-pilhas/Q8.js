class PilhaDePratos {
    constructor() {
        this.maxSize = 3;
        this.topoPlates = 0;
        this.stackPlate = [];
    }

    empilha(dado) {
        this.stackPlate[this.topoPlates] = dado;
        this.topoPlates++;
    }

    desempilha() {
        this.topoPlates--;
        return this.stackPlate[this.topoPlates];
    }

    estaCheia() {
        return this.topoPlates === this.maxSize;
    }

    estaVazia() {
        return this.topoPlates === 0;
    }
}

class Stack {
    constructor() {
        this.stack = [];
        this.topo = 0;
    }

    push(dado) {
        let ultimaPilha = this.peek();
        
        const deveCriarNovaPilha = this.isEmpty() || ultimaPilha.estaCheia();

        if (deveCriarNovaPilha) {
            const novaPilha = new PilhaDePratos();
            novaPilha.empilha(dado);
            this.stack[this.topo] = novaPilha;
            this.topo++; // INCREMENTA porque uma nova pilha foi adicionada
        } else {
            ultimaPilha.empilha(dado); // Prato adicionado, mas a pilha já existia
        }
    }

    pop() {
        if(this.isEmpty()) return null

        let ultimaPilha = this.peek();
        let valor = ultimaPilha.desempilha();

        if (ultimaPilha.estaVazia()) this.topo--;

        return valor;
    }

    isEmpty() {
        return this.length() === 0;
    }

    length() {
        return this.topo;
    }

    peek() {
        if (!this.isEmpty()) return this.stack[this.topo - 1];
    }
}

export default Stack;