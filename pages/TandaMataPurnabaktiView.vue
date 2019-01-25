<template>
  <section>
    <!-- HEADER -->
    <custom-header
      :toolbar-light="true"
      :toolbar-color="'white'"
      :toolbar-fixed="false"
      :toolbar-prominent="false"
      :toolbar-inverted-scroll="false"
      :toolbar-scroll-off-screen="false"
      :toolbar-height="90"
      :navigation-fixed="true"
      :navigation-clipped="true"
      :navigation-floating="true"
      :navigation-right="true"
      :navigation-width="250"
    ></custom-header>

    <v-container fluid>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Terms and Conditions</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <h1>bjb Tandamata Purnabakti</h1>
                <br>
                <p>Tabungan yang diperuntukan bagi nasabah pensiunan dalam mata uang IDR yang dipergunakan sebagai media penerimaan untuk pembayaran pensiunan PT.Taspen</p>
                <strong>Fitur Unggulan :</strong>
                <br>&nbsp;
                <ul>
                  <li>
                    Setoran awal Bebas/Gratis
                  </li>
                  <li>
                      Minimal setoran selanjutnya bebas
                  </li>
                  <li>
                      Biaya administrasi ringan Rp 2.000,-/bulan
                  </li>
                  <li>
                      Saldo minimum tidak ada
                  </li>
                  <li>
                      Biaya penutupan rekening Rp 25.000,-
                  </li>
                </ul>
                <br>&nbsp;
                <strong>Tingkat suku bunga :</strong>
                <br>&nbsp;
                 <!-- TABLE -->
                <br>&nbsp;
                <div style="overflow-x:auto;">
                <table border="1" cellspacing="1" cellpadding="1">
                    <tbody>
                        <tr>
                            <th width="450" valign="top">
                                <strong>bjb Tandamata </strong>
                            </th>
                            <th width="750" valign="top">
                                <p>
                                    <strong>Suku Bunga per Tahun</strong>
                                </p>
                            </th>
                        </tr>
                        <tr class="treven">
                            <td colspan="2" valign="top" width="270">
                                <p>
                                    <strong>Tiering 0% - 2%</strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>saldo &lt; Rp. 500.000,-</p>
                            </td>
                            <td valign="top" width="108">
                                <p>0.00%</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>Rp. 500.000,- ≤ saldo &lt; Rp. 5.000.000,-</p>
                            </td>
                            <td valign="top" width="108">
                                <p>1.00%</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>Rp. 5.000.000,- ≤ saldo &lt; Rp. 50.000.000,-</p>
                            </td>
                            <td valign="top" width="108">
                                <p>1.50%</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>saldo ≥ Rp. 50.000.000,-</p>
                            </td>
                            <td valign="top" width="108">
                                <p>2.00%</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <i>*bunga dihitung berdasarkan saldo rata-rata harian</i>
                <!-- END TABLE -->
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
  </section>
</template>

<script>
import api from "../store/api";
// import router from "vue-router";

export default {
  data: () => ({
    valid: false,
    agree: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        api
          .getTicketNumber()
          .then(response => {
            this.$router.push({
              path: `/registrationForm/${this.$route.params.id}/${
                response.data.ticket_number
              }`
            });
          })
          .catch(error => {
            if (error.response.data.message) {
              console.log(error.response.data.message);
              alert(error.response.data.message);
            }
          });
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
}
</style>
