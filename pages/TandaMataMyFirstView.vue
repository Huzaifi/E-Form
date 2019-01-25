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
                <h1>bjb Tandamata MyFirst</h1>
                <br>
                <p> <b>bjb</b> Tandamata My First adalah Tabungan Perorangan dalam mata uang rupiah sebagai tabungan edukasi bagi anak untuk memulai belajar dan membudayakan menabung.</p>
                <strong>Keunggulan :</strong>
                <br>&nbsp;
                <ul>
                  <li>Bebas biaya administrasi bulanan Tabungan dan biaya administrasi Kartu ATM</li>
                  <li>Bebas biaya pembuatan Kartu Perdana</li>
                  <li>
                    Bebas biaya tarik tunai di seluruh ATM bank bjb, ATM bersama dan ATM Prima di seluruh Indonesia
                  </li>
                  <li>
                    Desain Buku Tabungan dan Kartu ATM yang menarik
                  </li>
                  <li>
                    Kartu ATM dapat dicetak dengan nama anak.
                  </li>
                </ul>
                <br>&nbsp;
                <strong>Syarat dan Ketentuan :</strong>
                <br>&nbsp;
                <ul>
                  <li>
                    Peruntukan : Nasabah Perorangan berusia 0 – 17 tahun.
                  </li>
                  <li>Setoran awal minimal Rp. 50.000,-</li>
                  <li>
                    Saldo minimum Rp. 20.000,-
                  </li>
                  <li>
                    Biaya rekening pasif Rp. 2.000,-
                  </li>
                  <li>
                    Biaya Penutupan Rp. 20.000,-
                  </li>
                  <li>
                    Persyaratan dokumen
                    <ul>
                      <li>
                        Perorangan : KTP / SIM / Paspor Orang Tua / Wali yang berlaku
                      </li>
                      <li>
                        Fotokopi Akta Kelahiran Calon Nasabah Anak / Kartu Keluarga Calon Nasabah
                      </li>
                    </ul>
                  </li>
                </ul>
                <br>&nbsp;
                <strong>Tingkat suku bunga bjb Tandamata My First :</strong>
                <!-- TABLE -->
                <br>&nbsp;
                <div style="overflow-x:auto;">
                <table border="1" cellspacing="1" cellpadding="1">
                    <tbody>
                        <tr>
                            <th width="270" valign="top">
                                <strong>Tiering Saldo</strong>
                            </th>
                            <th width="340" valign="top">
                                <p>
                                    <strong>Suku Bunga per Tahun</strong>
                                </p>
                            </th>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>Saldo &lt; Rp. 500.000,-</p>
                            </td>
                            <td valign="top" width="108">
                                <p>0.00%</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>Rp. 500.000,- ≤ saldo &lt; Rp. 1.000.000,-</p>
                            </td>
                            <td valign="top" width="108">
                                <p>0.25%</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>Saldo ≥ Rp.1.000.000,-</p>
                            </td>
                            <td valign="top" width="108">
                                <p>1.00%</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <v-container grid-list-sm>
                  <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg6 xl6>
                    <img src="/../static/tandamata_first_design_buku_1.jpg" :height="imageHeight()" :width="imageWidth()">
                  </v-flex>
                  <v-flex xs12 sm12 md12 lg6 xl6>
                    <img src="/../static/tandamata_first_design_kartu.jpg" :height="imageHeight()" :width="imageWidth()">
                  </v-flex>
                  <v-flex xs12 sm12 md12 lg6 xl6>
                    <img src="/../static/tandamata_first_design_buku_2.jpg" :height="imageHeight()" :width="imageWidth()">
                  </v-flex>
                </v-layout>
                </v-container>
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
    },
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
    },
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%";
        case "sm":
          return "100%";
        case "md":
          return "100%";
        case "lg":
          return "100%";
        case "xl":
          return "100%";
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
