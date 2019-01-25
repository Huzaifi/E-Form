<template>
    <v-container fluid>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout align-center justify-center>
          <v-flex>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Terms and Conditions</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <h1>bjb Back to Back Loan</h1>
                <br>
                <strong>bjb <i>Back to Back Loan</i></strong>
                <br>&nbsp;
                <p>
                  bjb <i>Back to Back Loan</i> adalah pembiayaan dengan tujuan multiguna yang diberikan oleh bank <b>bjb</b> kepada debitur perorangan dengan jaminan berupa Agunan Kas (Giro/Tabungan/Deposito).
                </p>
                <img src="/../static/bjb back to back to loan.JPG" :height="imageHeight">
              <br>&nbsp;
              <strong>Persyaratan :</strong>
              <br>&nbsp;
              <ol>
                  <li>
                      <i>Copy</i> KTP Pemohon dan pasangan (suami/istri)
                  </li>
                  <li>
                      <i>Copy</i> NPWP
                  </li>
                  <li>
                      <i>Copy</i> Buku Nikah
                  </li>
                  <li>
                      Asli Bilyet Deposito / <i>Copy</i> Buku Tabungan yang akan dijadikan Agunan Kas
                  </li>
              </ol>
              </v-card-text>
              <v-card-actions>
                <v-layout row wrap>
                    <v-flex md12 xs12>
                        <v-spacer></v-spacer>
                        <v-checkbox
                            v-model="agree"
                            :rules="[v => !!v || 'You must agree to continue.']"
                            label="Apakah anda setuju dengan ketentuan yang berlaku?"
                            required
                        ></v-checkbox>
                        <v-btn color="warning" to="/">Batal</v-btn>
                        <v-btn 
                        color="primary" 
                        :disabled="!valid"
                        @click="submit"
                        >
                        Setuju
                        </v-btn>
                    </v-flex>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
</template>

<script>
export default {
  props: {
    name: "back-to-back-loan"
  },
  data: () => ({
    valid: false,
    agree: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$router.push({
          path: "loanForm"
        });
      }
    }
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "190px";
        case "sm":
          return "360px";
        case "md":
          return "400px";
        case "lg":
          return "500px";
        case "xl":
          return "700px";
      }
    }
  }
};
</script>

<style scoped>
table th {
  background-color: #0071ab;
  font-weight: bold;
  color: #fff;
  padding: 4px;
}
tbody > tr > td {
  padding: 10px;
  border: 1px solid #efefef;
}
</style>