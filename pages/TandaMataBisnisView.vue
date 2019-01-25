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
                <h1>bjb Tandamata Bisnis</h1>
                <br>&nbsp;
                <strong>Fitur Unggulan :</strong>
                <br>&nbsp;
                <ul>
                  <li>Fasilitas autotransfer dari rekening Tandamata Bisnis dan Giro Bisnis</li>
                  <li>Buku Tabungan dilengkapi deskripsi dan keterangan transaksi yang lebih jelas dan lengkap.</li>
                  <li>
                    Penarikan dan penyetoran dapat dilakukan di seluruh Cabang bank <b>bjb</b> di Indonesia.
                  </li>
                  <li>
                    Dilengkapi dengan Kartu ATM Debit Gratis biaya tarik tunai diseluruh jaringan ATM bank <b>bjb</b>, ATM Bersama &amp; Prima.
                  </li>
                </ul>
                <br>&nbsp;
                <strong>Persyaratan bjb Tandamata Bisnis : </strong>
                <!-- TABLE -->
                <br>&nbsp;
                <div style="overflow-x:auto;">
									<table border="1" cellspacing="1" cellpadding="1">
											<tbody>
													<tr>
															<th width="250">
																	<strong>No</strong>
															</th>
															<th width="350">
																	<p>
																			<strong>Keterangan</strong>
																	</p>
															</th>
															<th width="1100" colspan="2">
																	<p>
																			<strong>Besaran</strong>
																	</p>
															</th>
													</tr>
													<tr class="trodd">
															<td valign="top">
															</td>
															<td valign="top">
															</td>
															<td valign="top" width="200">
																	<p>Tandamata Binis</p>
															</td>
															<td valign="top" width="200">
																	<p>Giro Bisnis</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="top">
																	<p>1</p>
															</td>
															<td valign="top">
																	<p>Setoran Awal</p>
															</td>
															<td valign="top" width="200">
																	<p>Rp. 2.500.000</p>
															</td>
															<td valign="top" width="200">
																	<p>Rp. 1.000.000</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="top">
																	<p>2</p>
															</td>
															<td valign="top">
																	<p>Saldo Minimum</p>
															</td>
															<td valign="top" width="200">
																	<p>Rp. 1.000.000</p>
															</td>
															<td valign="top" width="200">
																	<p>Rp. 500.000</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="top">
																	<p>3</p>
															</td>
															<td valign="top">
																	<p>Biaya Administrasi </p>
															</td>
															<td valign="top" width="200">
																	<p>Rp. 10.000</p>
															</td>
															<td valign="top" width="200">
																	<p>-</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="top">
																	<p>4</p>
															</td>
															<td valign="top">
																	<p>Maksimal penarikan teller</p>
															</td>
															<td valign="top" width="200">
																	<p>Bebas</p>
															</td>
															<td valign="top" width="200">
																	<p>Bebas</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="top">
																	<p>4</p>
															</td>
															<td valign="top">
																	<p>Maksimal penarikan teller</p>
															</td>
															<td valign="top" width="200">
																	<p>Bebas</p>
															</td>
															<td valign="top" width="200">
																	<p>Bebas</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="top">
																	<p>5</p>
															</td>
															<td valign="top">
																	<p>Biaya Rekening Pasif</p>
															</td>
															<td valign="top" width="200">
																	<p>Rp. 0</p>
															</td>
															<td valign="top" width="200">
																	<p>-</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="top">
																	<p>6</p>
															</td>
															<td valign="top">
																	<p>Biaya Penutupan Rekening</p>
															</td>
															<td valign="top" width="200">
																	<p>Rp. 100.000</p>
															</td>
															<td valign="top" width="200">
																	<p>Rp. 10.000</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="top">
																	<p>7</p>
															</td>
															<td valign="top">
																	<p>Cetak ulang Rekening Koran</p>
															</td>
															<td valign="top" width="200">
																	<p>-</p>
															</td>
															<td valign="top" width="200">
																	<p>Rp. 2.500 / lembar</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="top">
																	<p>8</p>
															</td>
															<td valign="top">
																	<p>Biaya berkenaan dengan ATM</p>
															</td>
															<td valign="top" width="200">
																	<p>Mengikuti ketentuan ATM</p>
															</td>
															<td valign="top" width="200">
																	<p>Mengikuti ketentuan ATM</p>
															</td>
													</tr>
											</tbody>
									</table>
								</div>
                <br>
                <!-- END TABLE -->
                <strong>Ketentuan :</strong>
                <br>&nbsp;
                <li>
                    Peruntukan bagi Nasabah Perorangan
                </li>
                <li>
                    Persyaratan dokumen :    
                    <ul>
                        <li>
                            Perorangan Warga Negara Indonesia : KTP atau Paspor atau SIM
                        </li>
                    </ul>
                </li>
                <br>
                 <strong>Tingkat Suku Bunga :</strong>
                 <!-- TABLE -->
                <br>&nbsp;
								<div style="overflow-x:auto;">
									<table border="1" cellspacing="1" cellpadding="1">
											<tbody>
													<tr>
															<th width="700">
																	<strong>bjb Tandamata Bisnis</strong>
															</th>
															<th width="310">
																	<p>
																			<strong>Suku Bunga per Tahun</strong>
																	</p>
															</th>
													</tr>
													<tr class="treven">
															<td colspan="2" valign="bottom" width="270">
																	<p>
																			<strong>Tiering 0% - 3.50%</strong>
																	</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="bottom" width="270">
																	<p>0 &lt; 10.000.000</p>
															</td>
															<td valign="bottom" width="108">
																	<p>0.00%</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="bottom" width="270">
																	<p>10.000.000 ≤ saldo &lt; 100.000.000</p>
															</td>
															<td valign="bottom" width="108">
																	<p>1.00%</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="bottom" width="270">
																	<p>100.000.000 ≤ saldo &lt; 1.000.000.000</p>
															</td>
															<td valign="bottom" width="108">
																	<p>1.50%</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="bottom" width="270">
																	<p>1.000.000.000 ≤ saldo &lt; 5.000.000.000</p>
															</td>
															<td valign="bottom" width="108">
																	<p>2.50%</p>
															</td>
													</tr>
													<tr class="trodd">
															<td valign="bottom" width="270">
																	<p>saldo ≥ Rp. 5.000.000.000,-</p>
															</td>
															<td valign="bottom" width="108">
																	<p>3.50%</p>
															</td>
													</tr>
											</tbody>
									</table>
								</div>
                <i>*bunga dihitung berdasarkan saldo rata-rata harian (tiering progressif)</i>
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
