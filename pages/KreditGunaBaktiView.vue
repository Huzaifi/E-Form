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
                <h1>bjb Kredit Guna Bhakti</h1>
                <br>
                <p>
                  <b>bjb</b> Kredit Guna Bhakti is a funding method with multipurpose goal for our debtor with fixed salary income, channelled through the cooperation agreement between <b>bjb</b> Bank with the debtor’s current working company and the funding source comes from the debtor’s salary.
                </p>
                <strong>Credit Period Terms &amp; Limit</strong>
                <br>&nbsp;
                <!-- TABLE -->
                <br>&nbsp;
								<div style="overflow-x:auto;">
									<table border="1" cellspacing="1" cellpadding="1">
										<tbody>
												<tr>
														<th width="250">
																<p>
																		<strong>
																				Types of Debtor
																		</strong>
																</p>
														</th>
														<th width="200">
																<p>
																		<strong>
																				Period Terms
																		</strong>
																</p>
														</th>
														<th width="400">
																<p>
																		<strong>
																				Credit Limit
																		</strong>
																</p>
														</th>
												</tr>
												<tr class="trodd">
														<td>
																<p>
																		<strong>
																					Civil Servant (PNS Pemda &amp; PNS Non Pemda)
																		</strong>
																</p>
														</td>
														<td>
																<p>
																	15 years
																</p>
														</td>
														<td>
																<p>
																	Limited by maximum credit installment term towards the net salary based on ledger
																</p>
														</td>
												</tr>
												<tr class="trodd">
														<td>
																<p>
																		<strong>
																					Prospective Civil Servant (CPNS Pemda &amp; CPNS Non Pemda)
																		</strong>
																</p>
														</td>
														<td>
																<p>
																	<strong>
																			5 years
																	</strong>
																			(payroll by <b>bjb</b> )
																</p>
																<p>
																	<strong>
																			3 years 
																	</strong>
																			(payroll with other bank)
																</p>
														</td>
														<td>
																<p>
																	Limited by maximum credit installment term towards the net salary based on ledger
																</p>
														</td>
												</tr>
												<tr class="trodd">
														<td>
																<p>
																		<strong>
																					Regional Head &amp; Deputy
																		</strong>
																</p>
														</td>
														<td>
																<p>
																	According with time served
																</p>
														</td>
														<td>
																<p>
																	Limited by maximum credit installment term towards the net salary based on ledger
																</p>
														</td>
												</tr>
												<tr class="trodd">
														<td>
																<p>
																		<strong>
																					DPR/DPD member
																		</strong>
																</p>
														</td>
														<td>
																<p>
																	Maximum 3 months before latest position served
																</p>
														</td>
														<td>
																<p>
																	Level I up to IDR 400.000.000
																</p>
																<p>
																	Level II up to IDR 500.000.000
																</p>
														</td>
												</tr>
												<tr class="trodd">
														<td>
																<p>
																		<strong>
																					Private sector employees
																		</strong>
																</p>
														</td>
														<td>
																<p>
																	5 years
																</p>
														</td>
														<td>
																<p>
																	Up to IDR 100.000.000 (payroll by other bank)
																</p>
																<p>
																		Up to IDR 150.000.000 (payroll by <b>bjb</b> )
																</p>
														</td>
												</tr>
										</tbody>
								</table>
							</div>
              <!-- END TABLE -->
              <br>&nbsp;
              <strong>Requirements :</strong>
              <br>&nbsp;
              <ol>
                  <li>
                      Copy of applicant valid IDcard with spouse
                  </li>
                  <li>
                      Copy of family certificate / marriage certificate
                  </li>
                  <li>
                      Copy of taxpayer number
                  </li>
                  <li>
                      Copy of employee card
                  </li>
                  <li>
                      Salary proof
                  </li>
                  <li>
                      Retirement Insurance (Taspen) authorized card
                  </li>
                  <li>
                      Photocard 3cm x 4cm (applicant and spouse) 1 for each
                  </li>
                  <li>
                      Original letter of employee decree :
                      <ul>
                          <li>
                            Decree of appointment of prospective employees
                          </li>
                          <li>
                            Recruitment letter
                          </li>
                          <li>
                            Latest rank/position remarks
                          </li>
                      </ul>
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
    drawer: false,
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
