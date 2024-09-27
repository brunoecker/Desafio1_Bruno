    function Cadastrar(){
        const placa = document.getElementById('placa').value;
        const nome = document.getElementById('nome').value;
        const apartamento = document.getElementById('apartamento').value;
        const bloco = document.getElementById('bloco').value;
        const modelo = document.getElementById('modelo').value;
        const cor = document.getElementById('cor').value;
        const vaga = document.getElementById('vaga').value;
    

        if(placa == '' || nome == '' || apartamento == '' || bloco == '' || modelo == '' || cor == '' || vaga == '' ){
            alert('Preencha os campos corretamente!')
        }else{
            const reserva = {
                placa,
                nome,
                apartamento,
                bloco,
                modelo,
                cor,
                vaga
            };
        
            const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        
            reservas.push(reserva);
        
            localStorage.setItem('reservas', JSON.stringify(reservas));
            
            alert("Cadastro realizado com sucesso!");
    
            const textDiv = document.getElementById('text')
    
            textDiv.innerHTML += `"Placa: ", ${reserva.placa}, 'Nome: ', ${reserva.nome},
            "Apartamento: ", ${reserva.apartamento}, "Bloco: ", ${reserva.bloco}, 'Modelo: ', ${reserva.modelo}, "Cor: ", ${reserva.cor},
            'N° vaga ', ${reserva.vaga} <br> 
            <a href='lista_vagas.html' class='botao'>Ir para listagem de vagas</a>`
        }
    }

    function listarReservas() {
        const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        const textDiv2 = document.getElementById('text2');
    
        reservas.forEach((reserva, index) => {
            textDiv2.innerHTML += `
                Placa: ${reserva.placa}<br>
                <br>
                Nome: ${reserva.nome}<br>
                <br>
                Apartamento: ${reserva.apartamento}<br>
                <br>
                Bloco: ${reserva.bloco}<br>
                <br>
                Modelo: ${reserva.modelo}<br>
                <br>
                Cor: ${reserva.cor}<br>
                <br>
                N° vaga: ${reserva.vaga}<br>
                <button onclick="removerReserva(${index})" class="botao">Remover</button>
                <hr></hr>`;
        });
    }
    listarReservas();

    function removerReserva(index) {
        const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        reservas.splice(index, 1);

        localStorage.setItem('reservas', JSON.stringify(reservas));
        
        
        alert("Reserva removida com sucesso!");
        listarReservas();
    }