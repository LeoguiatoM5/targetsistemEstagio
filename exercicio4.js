const sala = {
    lâmpadas: [false, false, false], // Inicialmente todas as lâmpadas estão apagadas
    interruptores: [false, false, false], // Inicialmente todos os interruptores estão desligados

    //  ligar/desligar o interruptor na posição especificada
    toggleInterruptor: function (posição) {
        this.interruptores[posição] = !this.interruptores[posição];
        // Se o interruptor estiver ligado, inverte o estado da lâmpada correspondente
        if (this.interruptores[posição]) {
            this.lâmpadas[posição] = !this.lâmpadas[posição];
        }
    },

    // Método para determinar o estado das lâmpadas após duas idas à sala
    descobrirInterruptores: function () {
        // Primeira ida: liga o primeiro interruptor
        this.toggleInterruptor(0);
        // Segunda ida: desliga o primeiro interruptor e liga o segundo interruptor
        this.toggleInterruptor(0);
        this.toggleInterruptor(1);

        // Determina qual lâmpada está acesa após as duas idas
        let lâmpadaControladaPorInterruptor1 = this.lâmpadas[0];
        let lâmpadaControladaPorInterruptor2 = this.lâmpadas[1];
        let lâmpadaRestante = this.lâmpadas[2];

        console.log("Lâmpada controlada pelo primeiro interruptor:", lâmpadaControladaPorInterruptor1);
        console.log("Lâmpada controlada pelo segundo interruptor:", lâmpadaControladaPorInterruptor2);
        console.log("Lâmpada restante:", lâmpadaRestante);
    }
};

// Executa o método para determinar qual interruptor controla cada lâmpada
sala.descobrirInterruptores();