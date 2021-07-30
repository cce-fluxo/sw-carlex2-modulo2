export const lancamentos = [
    {
        nome: "Cedae",
        natureza: "Receita",
        valor: "5000",
        data_despesa: "20/03/2020",
        data_vencimento: "20/04/2020",
        empresa: "Carlex",
        valor_p_r: "4000,00",
        status: "parcialmente",
        historico: [
            {
                data_pagamento: "10/04/2020",
                valor_pagamento: "4000",
                responsavel: "Joao",
                forma_pagamento: "pix",
                empresa_nota: "Carlex",
                conta: "Itau",
                arquivo: "C:\\fakepath\\Prova_objetiva_PRU240_Bernardo_Bevilaqua.docx"

            }
        ]
    },
    {
        nome: "Cedae",
        natureza: "Receita",
        valor: "5000",
        data_despesa: "20/03/2020",
        data_vencimento: "20/04/2020",
        empresa: "Carlex",
        valor_p_r: "5000",
        status: "ok",
        historico: [
            {
                data_pagamento: "10/04/2020",
                valor_pagamento: "4000",
                responsavel: "Joao",
                forma_pagamento: "pix",
                empresa_nota: "Carlex",
                conta: "Itau",
                arquivo: "C:\\fakepath\\Prova_objetiva_PRU240_Bernardo_Bevilaqua.docx"
            },
            {
                data_pagamento: "10/04/2020",
                valor_pagamento: "4000",
                responsavel: "Joao",
                forma_pagamento: "pix",
                empresa_nota: "Carlex",
                conta: "Itau",
                arquivo: "C:\\fakepath\\Prova_objetiva_PRU240_Bernardo_Bevilaqua.docx"
            }
        ]
    },
    {
        nome: "IPTU",
        natureza: "Despesa",
        valor: "2000",
        data_despesa: "20/03/2020",
        data_vencimento: "20/04/2020",
        empresa: "Carlex",
        valor_p_r: "5000",
        status: "ok",
        historico: [
                        
        ]
    }
]


export const empresas = [
    {
        nome: "Carlex",
        funcionarios: 100,
        saldoDevedor: 2000,
        emprestimos: 1000,
        dividas: 1000,
        faturamento: 1000,
        contas: [
            {
                nome: "Itau",
                valorEmConta: 1000,
                numeroMaxTeds: 100,
                numeroTedsFeitas: 20
            }
        ]
        
    },
    {
        nome: "Carlex",
        funcionarios: 100,
        saldoDevedor: 2000,
        emprestimos: 1000,
        dividas: 1000,
        faturamento: 1000,
        contas: [
            {
                nome: "Itau",
                valorEmConta: 1000,
                numeroMaxTeds: 100,
                numeroTedsFeitas: 20
            }
        ]
        
    },
    {
        nome: "Carlex",
        funcionarios: 100,
        saldoDevedor: 2000,
        emprestimos: 1000,
        dividas: 1000,
        faturamento: 1000,
        contas: [
            {
                nome: "Itau",
                valorEmConta: 1000,
                numeroMaxTeds: 100,
                numeroTedsFeitas: 20
            }
        ]
        
    },
]
