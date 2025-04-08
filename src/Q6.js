class PilhaRPN {
    constructor() {
        this.stack = [];
        this.topo = 0;
    }

    algToRPN(expressao) {
        let output = "";

        for (let i = 0; i < expressao.length; i++) {
            const char = expressao[i];

            const parenteses = (char === "(") || (char === ")");
            const maiorPrecedencia = (char === "^");
            const mediaPrecedencia = (char === "*") || (char === "/")
            const menorPrecedencia = (char === "+") || (char === "-")
            const operador = (maiorPrecedencia || mediaPrecedencia || menorPrecedencia)

            if (!(parenteses || operador)) {
                output += char;
            } else {
                if (parenteses) {
                    if (char === ")") {
                        while (this.peek() !== "(") {
                            output += this.pop();
                        }
                        this.pop();
                    } else {
                        this.push(char)
                    }
                } else {
                    if (maiorPrecedencia) {
                        this.push(char)
                    } else if (mediaPrecedencia) {
                        while (this.peek() === '^') {
                            output += this.pop();
                        }
                        this.push(char)
                    } else {
                        while (this.peek() === '^' || this.peek() === '*' || this.peek() === '/' || this.peek() === '+' || this.peek() === '-') {
                            output += this.pop();
                        }
                        this.push(char)
                    }
                }
            }
        }

        while (!this.isEmpty()) {
            output += this.pop();
        }
        return output;
    }

    push(dado) {
        this.stack[this.topo] = dado;
        this.topo++;
    }

    pop() {
        this.topo--;
        return this.stack[this.topo];
    }

    peek() {
        return this.stack[this.topo - 1];
    }

    isEmpty() {
        return this.topo === 0;
    }
}

export default PilhaRPN;