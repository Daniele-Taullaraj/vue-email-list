

const { createApp } = Vue

createApp({
    data() {
        return {
            listaEmail: [],
            conteggioLista: 0,
        }
    },

    methods: {
        richiamoAxios() {
            return axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                return response.data.response;
                // for (let i = this.listaEmail.length; i < 10; i++) {
                //     if (!this.listaEmail.includes(response.data.response)) {
                //         this.listaEmail.push(response.data.response);
                //     } else {
                //         axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                //             this.richiamoAxios(); // Richiama la funzione ricorsivamente
                //         });
                //     }
                // }
            })
        },
        creaListaEmail() {
            for (let i = this.listaEmail.length; i < 10; i++) {
                this.richiamoAxios().then((emailGenerata) => {
                    if (!this.listaEmail.includes(emailGenerata)) {
                        this.listaEmail.push(emailGenerata);
                        this.conteggioLista++;
                    }
                });
            }
        },
    },
    mounted() {
    }

}).mount('#app')



