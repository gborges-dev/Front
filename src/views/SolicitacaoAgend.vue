<template>
  <div>
  <div>
    <MenuSideBar/>
  </div>
    <!-- AQUI INICIA A SOLICITAÇÃO -->
    <h2>Solicitar Agendamento</h2>

    <!-- [INICIO] DADOS DO SOLICITANTE -->

    <h3 class="subtitle1">Dados do Solicitante</h3>
    <div class="dadosSolicitante">
      <form class="formsDadosSolicitante">
        <div class="inputSolicitante" style="float: left">
          <label for="input" class="lb"><b>Nome:</b></label
          ><br />
          <InputText
            type="text"
            id="input1"
            class="input1"
            name="input1"
            value="Gabriel Borges"
          />
        </div>

        <div class="inputSolicitante" style="float: left">
          <label for="input" class="lb"><b>E-mail:</b></label
          ><br />
          <InputText
            type="email"
            id="input2"
            class="input2"
            name="input2"
            value="gabriel.borges130@outlook.com"
          />
        </div>

        <div class="inputSolicitante" style="float: left">
          <label for="input" class="lb"><b>Telefone:</b></label
          ><br />
          <InputText
            type="tel"
            id="input3"
            class="input3"
            name="input3"
            value="(48)99801-6360"
          />
        </div>
      </form>
      <div class="avisoSpan">
        <p>
          <b
            >*Aqui ficam seus dados, caso seja necessário você pode
            altera-los</b
          >
        </p>
      </div>
    </div>
    <!-- [FIM] DADOS DO SOLICITANTE -->
  </div>
</template>

<script>
import MenuSideBar from '../components/MenuSideBar'

export default {
  name: "SolicitarAgend",
  components:{
    MenuSideBar
  }
};
</script>

<style scoped>
.dadosSolicitante {
  padding: 20px;
  text-align: center;
  margin: 0 auto;
}

@media (min-width: 800px)
{
  .dadosSolicitante
   {
    flex-wrap: wrap;
    flex-direction: column;
   }
   .avisoSpan{
  margin-top: 5%;
  margin-left: 70px;
  
}
}

.subtitle1 {
  padding: 0;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 5px;
  margin-top: 40px;
  border-bottom: 1px solid black;
  text-align: center;
}

.lb {
  margin-left: -135px;
}

.inputSolicitante {
  margin-left: 13rem;
  margin-bottom: 10px;

}

.formsDadosSolicitante{
  margin-bottom: 85px;
  margin: 0 auto;
}

.input1{
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  text-align: center;
}
.input2{
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  text-align: center;
}
.input3{
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  text-align: center;
}

.avisoSpan{
  border-bottom: 1px solid black;
  width: 100%;
}
</style>