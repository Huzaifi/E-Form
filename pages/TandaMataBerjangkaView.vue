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
                <h1>bjb Tandamata Berjangka</h1>
                <br>&nbsp;
                <p>Tabungan dengan setoran wajib bulanan yang memberikan Anda ekstra perlindungan Asuransi.</p>
                <strong>Persyaratan</strong>
                <br>&nbsp;
                <ul>
                  <li>Penabung berusia minimal 18 tahun dan berusia maksimal 64 tahun pada saat <b>bjb</b> Tandamata Berjangka jatuh tempo.
                  </li>
                  <li>Memiliki Rekening Utama (Tabungan atau Giro bank <b>bjb</b>).
                  </li>
                  <li>
                    Mengisi formulir pembukaan rekening Tabungan <b>bjb</b> Tandamata Berjangka.
                  </li>
                </ul>
                <br>&nbsp;
                <strong>Keuntungan</strong>
                <br>&nbsp;
                <ul>
                  <li>
                    Kebebasan menentukan setoran bulanan mulai Rp 100.000 dan maksimal Rp 5.000.000,- dengan kelipatan Rp 50.000,-.
                  </li>
                  <li>Jangka waktu yang fleksibel (1 tahun s/d 10 tahun).</li>
                  <li>
                    Perlindungan Asuransi gratis (bank <b>bjb</b> bekerjasama dengan Asuransi Cigna)
                  </li>
                  <li>
                    Suku bunga 3,5% p.a
                  </li>
                  <li>
                    Hadiah langsung
                  </li>
                </ul>
                <br>&nbsp;
                <strong>Perlindungan Asuransi :</strong>
                <!-- TABLE -->
                <br>&nbsp;
                <div style="overflow-x:auto;">
                  <table border="1" cellspacing="1" cellpadding="1">
                    <tbody>
                        <tr>
                            <th width="80">
                                <strong>Usia Polis </strong>
                            </th>
                            <th width="140">
                                <p>
                                    <strong>Meninggal dunia atau ketidakmampuan tetap karena penyakit</strong>
                                </p>
                            </th>
                            <th width="140">
                                <p>
                                    <strong>Meninggal dunia atau ketidakmampuan tetap karena kecelakaan</strong>
                                </p>
                            </th>
                        </tr>
                        <tr class="trodd">
                            <td valign="top">
                                <p> &lt;= 2 Tahun </p>
                            </td>
                            <td valign="top">
                                <p>Tidak ada manfaat</p>
                            </td>
                            <td valign="top">
                                <p>Membayarkan secara Sekaligus (lumpsum) sisa setoran bulanan sampai dengan jatuh tempo + santunan duka *) syarat &amp; ketentuan berlaku</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top">
                                <p> &gt;= 2 Tahun </p>
                            </td>
                            <td valign="top">
                                <p>Membayarkan secara Sekaligus (lumpsum) sisa setoran bulanan sampai dengan jatuh tempo + santunan duka *) syarat &amp; ketentuan berlaku</p>
                            </td>
                            <td valign="top">
                                <p>Membayarkan secara Sekaligus (lumpsum) sisa setoran bulanan sampai dengan jatuh tempo + santunan duka *) syarat &amp; ketentuan berlaku</p>
                            </td>
                        </tr>
                    </tbody>
                  </table>
                </div>
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
