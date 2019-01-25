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
          <v-flex>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Terms and Conditions</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <h1>bjb Kredit Purna Bhakti (KPB)</h1>
                <br>
                <strong>bjb Kredit Purna Bhakti (KPB)</strong>
                <br>&nbsp;
                <p>
                  <b>bjb</b> Kredit Purna Bhakti adalah pembiayaan dengan tujuan multiguna yang diberikan oleh bank <b>bjb</b> kepada debitur pensiunan sendiri dan pensiunan janda / duda dimana manfaat pensiun debitur dipastikan akan atau telah disalurkan melalui bank <b>bjb</b>.
                </p>
                <strong>Jangka Waktu dan Plafond Kredit</strong>
                <br>&nbsp;
                <!-- TABLE -->
                <br>&nbsp;
                <div style="overflow-x:auto;">
									<table border="1" cellspacing="1" cellpadding="1">
									<tbody>
											<tr>
													<th width="300">
															<p>
																	<strong>
																			Jenis Debitur
																	</strong>
															</p>
													</th>
													<th width="200">
															<p>
																	<strong>
																			Jangka Waktu
																	</strong>
															</p>
													</th>
													<th width="180">
															<p>
																	<strong>
																			Plafond
																	</strong>
															</p>
													</th>
											</tr>
											<tr class="trodd">
													<td>
															<p>
																	<strong>
																					Pensiunan Sendiri/Janda/Duda
																	</strong>
															</p>
													</td>
													<td>
															<p>
																	15 Tahun
															</p>
													</td>
													<td>
															<p>
																	s.d Rp.250 Juta
															</p>
													</td>
											</tr>
									</tbody>
                </table>
							</div>
              <!-- END TABLE -->
              <br>&nbsp;
              <strong>Persyaratan :</strong>
              <br>&nbsp;
              <ol>
                  <li>
                      <i>Copy</i> KTP Pemohon dan pasangan (suami/istri)
                  </li>
                  <li>
                      <i>Copy</i> Kartu Keluarga / Akta Nikah
                  </li>
                  <li>
                      <i>Copy</i> Kartu Pegawai
                  </li>
                  <li>
                      Slip Gaji
                  </li>
                  <li>
                      Asli Kartu Taspen
                  </li>
                  <li>
                      Pas Foto 3x4 (Pemophon dan pasangan) 1 buah
                  </li>
                  <li>
                      Asli Surat Keputusan Kepegawaian
                      <ul>
                          <li>
                            Surat Keputusan Pengangkatan Calon Pegawai
                          </li>
                          <li>
                            Surat Pengangkatan Pegawai
                          </li>
                          <li>
                            Surat Keputusan kepegawaian/kepangkatan terakhir
                          </li>
                      </ul>
                  </li>
                  <li>
                      Asli Surat Keputusan Pensiun (diserahkan pada saat SK Pensiun telah diterima).
                  </li>
                  <li>
                      Asli Surat Pernyataan yang diketahui bendahara gaji bahwa debitur akan menyalurkan gaji pensiunnya melalui Bank
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
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    agree: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$router.push({
          path: `/loanForm/${this.$route.params.id}`
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
  border: 1px solid #efefef;
}
</style>
