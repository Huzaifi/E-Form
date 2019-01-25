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
                <h1>TabunganKu</h1>
                <br>
                <p><b>TabunganKu</b> adalah tabungan untuk perorangan dengan persyaratan mudah dan ringan yang diterbitkan secara bersama oleh bank-bank di Indonesia untuk menumbuhkan budaya menabung serta meningkatkan kesejahteraan masyarakat</p>
                <strong>Keistimewaan TabunganKu </strong>
                <ul>
                  <li>
                    Tanpa biaya administrasi bulanan
                  </li>
                  <li>
                      Suku bunga
                      <ul>
                          <li>
                               Rp 0 s/d Rp 500.000,- tidak diberikan bunga
                          </li>
                          <li>
                              Rp 500.000,-  s./d Rp 1.000.000,- 0.25% per tahun
                          </li>
                          <li>
                              Rp 1.000.000,- 1.00 % per tahun
                          </li>
                      </ul>
                  </li>
                </ul>
                <br>&nbsp;
                <strong>Kemudahan TabunganKu di bank bjb</strong>
                <br>&nbsp;
                <ul>
                    <li>
                        Tarik tunai gratis di seluruh jaringan ATM Bersama dan Prima
                    </li>
                    <li>
                        Dapat mencetak sendiri buku TabunganKu melalui Self Service Passbook Printer (SSPP)
                    </li>
                    <li>
                        Informasi 24 jam online dapat diakses melalui telepon bjb bank bjb Call 14049.
                    </li>
                    <li>
                        Fasilitas transfer secara real time on line antar rekening di seluruh kantor cabang bank bjb tanpa dikenakan  biaya
                    </li>
                </ul>
                <br>&nbsp;
                <strong>Persyaratan dan Ketentuan</strong>
                <br>&nbsp;
                <ul>
                  <li>
                    Setoran awal Rp. 20.000,-
                  </li>
                  <li>
                    Minimum setoran selanjutnya Rp.10.000,-
                  </li>
                  <li>
                    Jumlah minimum penarikan di teller Rp 100.000,- kecuali saat akan menutup tabungan
                  </li>
                  <li>
                    Biaya penutupan rekening atas permintaan sendiri sebesar Rp 20.000,-
                  </li>
                  <li>
                    Penarikan tunai/pemindahbukuan di counter teller hanya dapat dilakukan pada kantor cabang pembuka
                  </li>
                  <li>
                    Bunga berdasarkan saldo harian dan tidak progresif
                  </li>
                  <li>
                    Rekening tabunganKu yang tidak bertransaksi selama 6 bulan berturut-turut akan dikategorikan sebagai rekening pasif dan akan dikenakan biaya saldo pasif sebesar Rp 2.000,-. Apabila saldo mencapai &lt; Rp. 20.000,- maka rekening akan ditutup dengan biaya penutupan sebesar sisa saldo.
                  </li>
                </ul>
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
// import router from "vue-router";
import api from "../store/api";

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
