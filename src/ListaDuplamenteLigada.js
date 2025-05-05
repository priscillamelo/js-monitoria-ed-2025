import NodeDuplo from "./NodeDuplo";

class ListaDuplamenteLigada {

  constructor() {
      this.head = null;
      this.tail = null;
  }

  add(dado) {
      let novo_no = new NodeDuplo(dado);
      if (this.isEmpty()) {
          this.head = novo_no;
          this.tail = novo_no;
          novo_no.anterior = null;
          novo_no.proximo = null;
      } else {
          novo_no.proximo = this.head;
          novo_no.anterior = null;
          this.head.anterior = novo_no;
          this.head = novo_no;
      }
  }

  append(dado) {
      let novo_no = new NodeDuplo(dado);
      if (this.isEmpty()) {
          this.head = novo_no;
          this.tail = novo_no;
          novo_no.anterior = null;
          novo_no.proximo = null;
      } else {
          novo_no.proximo = null;
          novo_no.anterior = this.tail;
          this.tail.proximo = novo_no;
          this.tail = novo_no;
      }
  }

  removeFirst() {
      if (!this.isEmpty()) {
          if (this.length() === 1) {
              this.head = null;
              this.tail = null;
          } else {
              this.head = this.head.proximo;
              this.head.anterior = null;
          }
      }
      else {
          throw new Error("Underflow"); // Lança um erro se a lista estiver vazia
      }
  }

  remove(dado) {
      if (!this.isEmpty()) {
          let current = this.head;
          let next = this.head.proximo;
          let last = this.tail;
          let aux;

          if (current.dado === dado) {
              return this.removeFirst();
          } else if (last.dado === dado) {
              return this.removeLast();
          } else {
              while (next != null) {
                  if (next.dado === dado) {
                      aux = next.proximo;
                      current.proximo = next.proximo;
                      aux.anterior = current;
                      return true;
                  }
                  //iteração
                  current = next;
                  next = next.proximo;
              }
          }
      } else {
          throw new Error("Underflow");
      }

      return false;
  }

  removeLast() {
      if (!this.isEmpty()) {
          if (this.length() === 1) {
              this.head = null;
              this.tail = null;
          } else {
              this.tail = this.tail.anterior;
              this.tail.proximo = null;
          }
      }
      else {
          throw new Error("Underflow");
      }
  }

  isEmpty() {
      return this.head === null;
  }

  toString() {
      let tmp = this.head;
      let texto = "";

      while (tmp != null) {
          texto += tmp.dado + (tmp.proximo ? "->" : "");
          tmp = tmp.proximo;
      }

      return texto;
  }

  length() {
      let cont = 0;
      let tmp = this.head;

      while (tmp != null) {
          tmp = tmp.proximo;
          cont++;
      }
      return cont;
  }

  addAt(posicao, dado) {
      if (posicao >= this.length()) {
          //adicionando no final
          this.append(dado);
      } else {
          if (posicao <= 0) {
              //adicionando no inicio
              this.add(dado);
          } else {
              let novo_no = new NodeDuplo(dado);
              let i = 1;

              let aux_a = this.head;
              let aux_b = this.head.proximo;

              while (i != posicao) {
                  //iteração
                  aux_a = aux_b;
                  aux_b = aux_b.proximo;
                  i++;
              }
              aux_a.proximo = novo_no;
              novo_no.proximo = aux_b;
              novo_no.anterior = aux_a;
              aux_b.anterior = novo_no;
          }
      }
  }

  asArray() {
      let current = this.head;
      let dados = [];

      while (current != null) {
          dados.push(current.dado);
          current = current.proximo;
      }

      return dados;
  }

  search(dado) {
      if (this.isEmpty()) {
          return false;
      } else {
          let tmp = this.head;
          while (tmp !== null) {
              if (tmp.dado == dado) {
                  return true;
              }
              //iteração
              tmp = tmp.proximo;
          }
          return false;
      }
  }

  clear() {
      this.head = null;
      this.tail = null;
  }
}

export default ListaDuplamenteLigada;