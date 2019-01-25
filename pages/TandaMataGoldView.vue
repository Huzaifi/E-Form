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
                <h1>bjb Tandamata Gold</h1>
                <strong>Keuntungan dan kemudahan : </strong>
                <ul>
                  <li>Hanya dengan setoran awal sebesar Rp 500.000,- Anda telah memiliki rekening Tabungan <b>bjb</b> Tandamata Gold dengan tingkat suku bunga premium.</li>
                  <li>Gratis perlindungan asuransi jiwa untuk saldo rata-rata bulanan minimal Rp. 500.000.000,-</li>
                  <li>
                    Pembukaan rekening, penyetoran maupun penarikan dana tabungan dapat dilakukan di seluruh Cabang bank <b>bjb</b> di seluruh Indonesia
                  </li>
                  <li>
                    Anda mendapatkan Kartu ATM bank <b>bjb</b> yang berfungsi sebagai kartu ATM dan kartu debit yang dapat digunakan untuk berbelanja dan pembayaran lainnya. Bebas biaya transaksi tarik tunai di seluruh ATM bank <b>bjb</b>, ATM Bersama dan Prima.
                  </li>
                  <li>
                    Dapat bertransaksi di 742 ATM bank <b>bjb</b>, 26.000 ATM Bersama, 31.700 ATM Prima di seluruh Indonesia.
                  </li>
                  <li>
                    Tabungan <b>bjb</b> Tandamata Gold diikutsertakan dalam program undian berhadiah <b>“Petik Hadiah bank bjb”</b> secara rutin dengan memberikan hadiah terbesar.
                  </li>
                </ul>
                <strong>Persyaratan </strong>
                <ul>
                  <li>
                    Setoran awal minimal Rp. 500.000,-
                  </li>
                  <li>Saldo minimum Rp 250.000,-</li>
                  <li>
                    Biaya administrasi Rp 10.000,-
                  </li>
                  <li>
                    Biaya penutupan Rp 50.000,-
                  </li>
                  <li>
                    Biaya rekening pasif tidak ada
                  </li>
                  <li>
                    Peruntukan bagi Nasabah Perorangan
                  </li>
                  <li>
                      Kartu Identitas
                    <ul>
                      <li>
                        Perorangan : KTP/SIM
                      </li>
                    </ul>
                  </li>
                </ul>
                <strong>Ketentuan Asuransi</strong>
                <!-- TABLE -->
                <br>&nbsp;
                <div style="overflow-x:auto;">
                <table border="1" cellspacing="1" cellpadding="1">
                    <tbody>
                        <tr>
                            <th width="250" valign="top">
                                <strong>Manfaat </strong>
                            </th>
                            <th width="450" valign="top">
                                <p>
                                    <strong>Uang Pertanggungan</strong>
                                </p>
                            </th>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>Santunan Meninggal Dunia karena sebab kecelakaan</p>
                            </td>
                            <td valign="top" width="108">
                                <p>500,000,000.-</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="50">
                                <p>Santunan rawat inap di Rumah sakit karena sebab apapun (maks 60 hari per penyakit)</p>
                            </td>
                            <td valign="top" width="300">
                                <tr>
                                    <td style="background-color:#0071ab" width="200">
                                        <p class="white--text">Tiering saldo rata-rata 1 bulan terakhir</p>
                                    </td>
                                    <td style="background-color:#0071ab" width="200">
                                        <p class="white--text">Uang Pertanggungan</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>500,000,000 ≤ saldo ≤ 1,000,000,000</p>
                                    </td>
                                    <td>
                                        <p>500,000/hari</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>1,000,000,001 ≤ saldo ≤ 3,000,000,000</p>
                                    </td>
                                    <td>
                                        <p>1,000,000/hari</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>saldo > 3,000,000,000</p>
                                    </td>
                                    <td>
                                        <p>2,000,000/hari</p>
                                    </td>
                                </tr>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <!-- END TABLE -->
                <br>
                <strong>Tingkat suku bunga bjb Tandamata Gold :</strong>
                <!-- TABLE -->
                <br>&nbsp;
                <div style="overflow-x:auto;">
                <table border="1" cellspacing="1" cellpadding="1">
                    <tbody>
                        <tr>
                            <th width="250" valign="top">
                                <strong>bjb Tandamata Gold</strong>
                            </th>
                            <th width="450" valign="top">
                                <p>
                                    <strong>Suku Bunga per Tahun</strong>
                                </p>
                            </th>
                        </tr>
                        <tr class="treven">
                            <td colspan="2" valign="top" width="270">
                                <p>
                                    <strong>Tiering 0% - 3.00%</strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>0 &lt; 10.000.000</p>
                            </td>
                            <td valign="top" width="108">
                                <p>0.00%</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>10.000.000 ≤ saldo &lt; 100.000.000</p>
                            </td>
                            <td valign="top" width="108">
                                <p>1.00%</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>100.000.000 ≤ saldo &lt; 1.000.000.000</p>
                            </td>
                            <td valign="top" width="108">
                                <p>2.00%</p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="270">
                                <p>saldo ≥ 1.000.000.000</p>
                            </td>
                            <td valign="top" width="108">
                                <p>3.00%</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <i>*bunga dihitung berdasarkan saldo rata-rata harian</i>
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
