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
    
    <!-- CONTENT FORM -->
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md6>
          <v-stepper v-model="formStep" alt-labels>
            <v-stepper-header>
              <v-stepper-step 
                :complete="formStep > 1" 
                step="1"
              >
                Validate
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step 
                :complete="formStep > 2" 
                step="2"
              >
                Confirm
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step 
                :complete="formStep > 3" 
                step="3"
              >
                Complete
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <!-- STEP 1: Validate -->
              <v-stepper-content step="1">
                <v-container>
                  <v-form 
                    ref="form1" 
                    v-model="form1Valid" 
                    lazy-validation
                    @submit="validateForm1"
                  >
                    <v-card class="transparent elevation-0">
                      <v-card-text>
                        <v-text-field
                          v-model="item.ticket_number"
                          :rules="[v => !!v || 'No. Referensi tidak boleh kosong']"
                          mask="####################"
                          :counter="20"
                          label="No. Referensi"
                          required
                          hint="Silahkan Masukan No. Referensi yang anda dapatkan saat registrasi."
                          persistent-hint
                        ></v-text-field>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn to="/" color="warning">cancel</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                          @click="validateForm1" 
                          color="secondary"
                          :loading="loadingDialog"
                          :disabled="loadingDialog || !form1Valid"
                        >
                          validate
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-container>
              </v-stepper-content>
              
              <!-- STEP 2: Confirm -->
              <v-stepper-content step="2">
                <v-container>
                  <v-card class="transparent elevation-0">
                    <v-card-text>
                      <h3 class="primary--text font-weight-bold">Data E-KTP</h3>
                      <v-layout wrap mt-3>
                        <v-flex md12 xs12>
                          <v-divider></v-divider>
                          <v-input :messages="item.nik">
                            No. Induk KTP
                          </v-input>
                        </v-flex>
                      </v-layout>
                      <v-layout wrap>
                        <v-flex md4 xs12>
                          <v-input :messages="item.nama_lgkp">
                            Nama Lengkap
                          </v-input>
                        </v-flex>
                        <v-flex md4 xs12>
                          <v-input :messages="item.tmpt_lhr + ', ' + item.tgl_lhr">
                            Tempat/Tanggal Lahir
                          </v-input>
                        </v-flex>
                        <v-flex md4 xs12>
                          <v-input :messages="item.jenis_klmin">
                            Jenis Kelamin
                          </v-input>
                        </v-flex>
                      </v-layout>
                      <!-- ALAMAT -->
                      <v-layout wrap>
                        <v-flex md12 xs12>
                          <v-input :messages="item.alamat">
                            Alamat
                          </v-input>
                        </v-flex>  
                      </v-layout>
                      <v-layout wrap>
                        <v-flex md3 xs12>
                          <v-input :messages=" '00' + item.no_rt + '/00' + item.no_rw">
                            RT / RW
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="item.kel_name">
                            Kelurahan / Desa
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="item.kec_name">
                            Kecamatan
                          </v-input>
                        </v-flex>
                      </v-layout>
                      <!-- OTHER -->
                      <v-layout wrap mb-4>
                        <v-flex md3 xs12>
                          <v-input :messages="item.status_kawin">
                            Status Perkawinan
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="item.jenis_pkrjn">
                            Pekerjaan
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="item.agama">
                            Agama
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="item.pddk_akh">
                            Pendidikan Akhir
                          </v-input>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                    </v-card-text>
                  </v-card>
                  <v-form ref="form2" v-model="form2Valid" lazy-validation>
                    <v-card class="transparent elevation-0">
                      <v-card-text>
                        <!-- <v-select
                          v-model="item.type"
                          :items="savingTypes"
                          item-text="name"
                          item-value="code"
                          :rules="[v => !!v || 'Jenis Tabungan tidak boleh kosong']"
                          label="Jenis Tabungan"
                          required
                        ></v-select> -->
                        <v-text-field
                          :rules="rules.npwp"
                          mask="##.###.###.#-###.###"
                          v-model="item.npwp"
                          :counter="15"
                          label="No. NPWP (Optinal)"
                          hint="Silahkan Masukan No. NPWP yang terdaftar."
                          persistent-hint
                        ></v-text-field>
                        <v-text-field
                          :rules="rules.handphone"
                          mask="####-####-#####"
                          v-model="item.handphone"
                          :counter="13"
                          label="No. Handphone *"
                          required
                          hint="Silahkan Masukan No. Handphone anda."
                          persistent-hint
                        ></v-text-field>
                        <v-text-field
                          v-model="item.email"
                          :rules="rules.email"
                          :counter="50"
                          label="Email (Optional)"
                          hint="Silahkan Masukan Email anda."
                          persistent-hint
                        ></v-text-field>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="warning" @click="formStep = 1">back</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="secondary"
                          :loading="loadingDialog"
                          :disabled="loadingDialog || !form2Valid"
                          @click="validateForm2"
                        >
                          confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-container>
              </v-stepper-content>

              <!-- STEP 3: Finish -->
              <v-stepper-content step="3">
                <v-container>
                  <v-form ref="form3" v-model="form3Valid" lazy-validation>
                    <v-card class="transparent elevation-0">
                      <v-card-text>
                        <v-select
                          v-model="item.delivery_type"
                          :items="deliveryTypes"
                          :rules="[v => !!v || 'Delivery Type is required']"
                          label="Metode Pengiriman"
                          required
                        ></v-select>
                        <v-checkbox
                          v-model="item.agree"
                          :rules="[v => !!v || 'Anda harus melakukan persetujuan sebelum process selanjutnya']"
                          label="Apakah anda yakin untuk memproses perubahan data?"
                          required
                        ></v-checkbox>

                        <v-layout wrap mt-3>
                          <v-flex md12 xs12>
                            <v-divider mb-2></v-divider>
                            <span class="red--text">* Semua data sifatnya rahasia dan tidak akan disebarluaskan. 
                              Kami akan melakukan validasi maksimum 3 hari kerja. </span>
                          </v-flex>
                        </v-layout>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="warning" @click="formStep = 2">cancel</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                          @click="validateForm3" 
                          color="secondary"
                          :loading="loadingDialog"
                          :disabled="loadingDialog || !form3Valid"
                        >
                          submit
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-container>
              </v-stepper-content>
            </v-stepper-items>

          </v-stepper>

          <!-- LOADING BAR -->
          <v-dialog
            v-model="loadingDialog"
            persistent
            width="300"
          >
            <v-card
              color="primary"
              dark
            >
              <v-card-text>
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>

          <!-- ERROR MESSAGE -->
          <v-dialog
            v-model="errorDialog"
            persistent
            width="300"
          >
            <v-card
              color="white"
              dark
            >
              <v-card-title primary-title>
                <h3 class="error--text font-weight-bold">Pesan Error</h3>
                <v-divider></v-divider>
              </v-card-title>
              <v-card-text>
                <span class="black--text"> {{ errorMessage }} </span>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue lighten-1"
                  flat="flat"
                  @click="errorDialog = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- SUCCESS MESSAGE -->
          <v-dialog
            v-model="successDialog"
            persistent
            width="600"
          >
            <v-layout row justify-center>
              <v-card
                color="white"
                dark
              >
                <v-card-title>
                  <v-layout row wrap>
                    <v-flex justify-center align-center>
                      <h3 class="headline font-weight-bold text-xs-center primary--text">
                        FORM PERUBAHAN DATA TABUNGAN BARU
                      </h3>
                    </v-flex>
                  </v-layout>
                </v-card-title>
                <v-card-text>
                  <h3 class="headline black--text text-xs-center font-weight-bold" style="font-size: 32px !important"> 
                    {{ responseSuccess.ticket_number }} 
                  </h3>
                  <br>
                  <p class="black--text text-xs-justify">
                    Anda baru saja melakukan perubahan data untuk pembukaan tabungan baru. 
                    Segera bawa bukti pengajuan ini ke cabang bank bjb terdekat, 
                    paling lambat 3X24 jam kerja, atau data pengajuan akan terhapus secara otomatis.
                  </p>
                  <br>
                  <span class="black--text font-weight-bold">Tanggal Update: {{ responseSuccess.updated_at }} </span>
                  <br>
                  <span class="black--text">
                  Terima Kasih. <br><br>
                  </span>

                  <span class="black--text mt-4">
                    Salam bank <strong>bjb</strong> <br>
                  </span>
                  <span class="black--text mt-4">
                    Copyright 2018. bank <strong>bjb</strong>
                  </span>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="warning"
                    @click="successDialog = false"
                    to="/"
                  >
                    Tutup
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-layout>
          </v-dialog>
          
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import api from "../store/api";

export default {
  data() {
    return {
      drawer: false,
      rules: {
        email: [
          v => {
            if (v == "") {
              return;
            } else {
              if (/.+@.+/.test(v)) {
                return;
              } else {
                return "E-mail harus valid";
              }
            }
          },
          v => {
            if (v == "") {
              return;
            } else {
              if (v.length > 50) {
                return "Email tidak boleh lebih dari 50 karakter";
              } else {
                return;
              }
            }
          }
        ],
        handphone: [
          v => !!v || "No. Handphone tidak Boleh kosong",
          v =>
            (v != "" && v.length >= 10 && v && v.length <= 13) ||
            "No. Handphone harus terdiri dari 10-13 angka"
        ]
      },
      // Fields
      item: {
        ticket_number: ""
      },
      savingTypes: [],
      deliveryTypes: [
        "Diantar ke rumah oleh Agent Perbankan",
        "Diambil di cabang terdekat"
      ],
      // End Fields
      formStep: 0,
      form1Valid: true,
      form2Valid: true,
      form3Valid: true,
      errorMessage: "",
      loadingDialog: false,
      errorDialog: false,
      successDialog: false,
      agree: false,
      responseSuccess: {}
    };
  },
  mounted() {
    this.getSavingTypes();
  },
  methods: {
    getSavingTypes() {
      api.getSavingTypes().then(response => {
        this.savingTypes = response.data.items;
      });
    },
    validateForm1(e) {
      e.preventDefault();
      if (this.$refs.form1.validate()) {
        this.loadingDialog = true;
        this.$http
          .get(
            "http://103.217.173.123:5020/api/v1/accounts/" +
              this.item.ticket_number
          )
          .then(
            response => {
              // success
              this.item = response.body;
              if (!this.item.email) {
                this.item.email = "";
              }

              if (!this.item.handphone) {
                this.item.phone = "";
              }
              this.formStep = 2;
              this.loadingDialog = false;
            },
            response => {
              if (response.body.message) {
                this.errorDialog = true;
                this.errorMessage = response.body.message;
                this.loadingDialog = false;
              } else {
                this.errorDialog = true;
                this.errorMessage =
                  "Pastikan anda terhubung dengan internet. Silahkan coba lagi. Jika pesan error masih muncul, mohon untuk menghubungi customer care kami";
                this.loadingDialog = false;
              }
            }
          );
      }
    },
    validateForm2() {
      if (this.$refs.form2.validate()) {
        this.formStep = 3;
      }
    },
    validateForm3() {
      if (this.$refs.form3.validate()) {
        this.loadingDialog = true;
        this.item.additional = false;
        this.$http
          .put(
            "http://103.217.173.123:5020/api/v1/accounts/" +
              this.item.ticket_number,
            this.item,
            {
              headers: {
                Authorization:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJicWx0QmJURU0yeEI0QlNadWpPNW5HMjBkbkJlVUx2ZCJ9.eKJb9nYsrKLXhaKVMc-L813Dgpx96MST3Day7EkIGAs"
              }
            }
          )
          .then(
            response => {
              this.loadingDialog = false;
              this.responseSuccess = response.body;
              this.successDialog = true;
            },
            response => {
              if (response.body.message) {
                this.errorDialog = true;
                this.errorMessage = response.body.message;
                this.loadingDialog = false;
              } else {
                this.errorDialog = true;
                this.errorMessage =
                  "Pastikan anda terhubung dengan internet. Silahkan coba lagi. Jika pesan error masih muncul, mohon untuk menghubungi customer care kami";
                this.loadingDialog = false;
              }
            }
          );
      }
    }
  }
};
</script>


<style scoped>
</style>
