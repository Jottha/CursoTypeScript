interface IInterface{
    soma(a, b): number;
}

interface IInterface2 extends IInterface{

}

class NomeDaClasse implements IInterface, IInterface2{
    private atributo: number;
    public atributo2: boolean;
    protected atributo3: Object;

    constructor(parametros: boolean){
        this.atributo2 = parametros;
    }

    soma(a, b){
        return a + b;
    }

    imprimir(message: string): void {
        if(this.atributo2){
            console.log(message);
        }
    }
}

const novo = new NomeDaClasse(true);

novo.imprimir('Hello, World');

export default NomeDaClasse;