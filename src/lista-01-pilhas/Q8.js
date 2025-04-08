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
        let ultima = this.peek();

        if (!ultima || ultima.estaCheia()) {
            const novaPilha = new PilhaDePratos();
            novaPilha.empilha(dado);
            this.stack[this.topo] = novaPilha;
            this.topo++; // INCREMENTA porque uma nova pilha foi adicionada
        } else {
            ultima.empilha(dado); // Prato adicionado, mas a pilha já existia
        }
    }

    pop() {
        if(this.isEmpty()) return null

        let ultima = this.peek();
        let valor = ultima.desempilha();

        if (ultima.estaVazia()) this.topo--;

        return valor;
    }

    isEmpty() {
        return this.length() === 0;
    }

    length() {
        return this.topo;
    }

    peek() {
        if (this.isEmpty()) return this.topo
        return this.stack[this.topo - 1];
    }

    clear() {
        this.topo = 0;
    }

    toString() {
        let pilha = "";
        for (const pilhaElement of this.stack) {
            pilha+= pilhaElement;
        }

        return pilha;
    }
}

export default Stack;